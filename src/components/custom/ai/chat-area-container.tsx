"use client";

import { JSX, useEffect, useMemo, useRef, useState } from "react";
import type { ChatStatus, UIMessage } from "ai";
import {
  extractTextContentFromMessage,
  isProcessing as checkIsProcessing,
} from "@/lib/ai/utils";
import {
  usePromptInputController,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import {
  ChatAreaPresentation,
  type AvatarConfig,
} from "./chat-area-presentation";
import { ChatContent } from "../chat/floating-chat";

export interface ChatAreaContainerProps {
  /** Array of chat messages to display */
  messages: UIMessage[];
  /** Current status of the chat ("pending" | "streaming" | "idle") */
  status: ChatStatus;
  /** Translation strings */
  chatContent: ChatContent;
  /** Callback to send a new message */
  prompts: string[];
  /** Callback to send a new message */
  onSendMessage: ({ text }: { text: string; }) => void;
  /** Callback to stop the current response */
  onStop?: () => void;
  /** Callback to delete a message */
  onDeleteMessage?: (index: number) => void;
  /** Callback to set the input area as touched */
  onInputTouched?: (touched: boolean) => void;
  /** Callback to handle a suggestion click */
  handleSuggestionClick?: (suggestion: string) => void;
  /** Custom placeholder for input */
  placeholder?: string;
  /** Disable input and sending */
  disabled?: boolean;
  /** Additional class names */
  className?: string;
  /** Custom class for the input prompt */
  inputClassName?: string;
  /** Optional custom avatar configuration */
  avatarConfig?: Partial<AvatarConfig>;
}

/**
 * ChatAreaContainer Component
 * 
 * A container component that handles domain-specific logic for the chat interface.
 * Integrates with authentication, translations, and message processing.
 * 
 * This component wraps ChatAreaPresentation and provides it with all necessary
 * domain logic, making the presentation component reusable across different contexts.
 * 
 * @example
 * ```tsx
 * <ChatAreaContainer
 *   messages={messages}
 *   status={status}
 *   onSendMessage={sendMessage}
 *   onStop={stop}
 *   placeholder="Type your message..."
 * />
 * ```
 */
export function ChatAreaContainer ({
  messages,
  status,
  chatContent,
  prompts,
  onSendMessage,
  onStop,
  onDeleteMessage,
  onInputTouched,
  handleSuggestionClick,
  placeholder = "Type your message...",
  disabled = false,
  className,
  inputClassName,
  avatarConfig: customAvatarConfig,
}: ChatAreaContainerProps): JSX.Element {
  const [messageCopied, setMessageCopied] = useState<string | null>(null);
  const prevInputIsTouchedRef = useRef<boolean>(false);

  const controller = usePromptInputController();

  const inputValue = controller.textInput.value;

  // Track input touched state
  useEffect(() => {
    if (onInputTouched) {
      const isTouched = inputValue.length > 0;
      if (isTouched !== prevInputIsTouchedRef.current) {
        prevInputIsTouchedRef.current = isTouched;
        onInputTouched(isTouched);
      }
    }
  }, [inputValue, onInputTouched]);

  // Convert status and check processing state
  const isChatProcessing = checkIsProcessing(status);

  // Build avatar configuration
  // TODO: Improve implementation of avatars
  const avatarConfig: AvatarConfig = useMemo(
    () => ({
      assistant: {
        name: "David's clone",
        src: "/images/hero-image.png",
        className: "object-contain",
        classNameImage: 'bg-primary',
        ...customAvatarConfig?.assistant,
      },
      user: {
        name: 'You',
        iconName: 'user',
        src: undefined,
        ...customAvatarConfig?.user,
        classNameImage: 'dark:text-primary/90'
      },
    }),
    [customAvatarConfig]
  );

  // Handle message submission
  const handleSubmit = (message: PromptInputMessage): void => {
    if (!message.text?.trim()) return;
    onSendMessage({ text: message.text });
  };

  // Handle message copy
  const handleCopy = async (messageId: string, content: string): Promise<void> => {
    // Find original message to get full content with proper extraction
    const originalMessage = messages.find((m) => m.id === messageId);
    const fullContent = originalMessage
      ? extractTextContentFromMessage(originalMessage)
      : content;

    await navigator.clipboard.writeText(fullContent.trim());
    setMessageCopied(messageId);
    setTimeout(() => {
      setMessageCopied(null);
    }, 1200);
  };

  return (
    <ChatAreaPresentation
      messages={messages}
      chatStatus={status}
      isProcessing={isChatProcessing}
      messageCopied={messageCopied}
      avatarConfig={avatarConfig}
      chatContent={chatContent}
      prompts={prompts}
      onSubmit={handleSubmit}
      onStop={onStop}
      onDelete={onDeleteMessage}
      onCopy={(id, content) => {
        void handleCopy(id, content);
      }}
      handleSuggestionClick={handleSuggestionClick}
      placeholder={placeholder}
      disabled={disabled}
      submitDisabled={inputValue.length === 0}
      className={className}
      inputClassName={inputClassName}
    />
  );
}

export default ChatAreaContainer;
