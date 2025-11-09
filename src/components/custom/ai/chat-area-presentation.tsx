"use client";

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  usePromptInputController,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { cn } from "@/lib/utils";
import type { ChatStatus, UIMessage } from "ai";
import { Check, Copy, SquareIcon, X } from "lucide-react";
import { JSX, useRef } from "react";
import { Message, MessageAvatar, MessageContent } from "@/components/ai-elements/message";
import { Action, Actions } from "@/components/ai-elements/actions";
import { ChatContent } from "../chat/floating-chat";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";

type AvatarProps = {
  name: string;
  src: string | undefined;
  className?: string;
  iconName?: string;
  classNameImage?: string;
};

export interface AvatarConfig {
  assistant: AvatarProps;
  user?: AvatarProps;
}

export interface ChatAreaPresentationProps {
  /** Filtered messages to display (text only) */
  messages: UIMessage[];
  /** Current chat status for the input component */
  chatStatus: ChatStatus;
  /** Whether the chat is currently processing */
  isProcessing: boolean;
  /** ID of the currently copied message */
  messageCopied: string | null;
  /** Avatar configuration for assistant and user */
  avatarConfig: AvatarConfig;
  /** Translation strings */
  chatContent: ChatContent;
  /** Suggested prompts */
  prompts: string[];
  /** Callback to submit a new message */
  onSubmit: (message: PromptInputMessage) => void;
  /** Callback to stop the current response */
  onStop?: () => void;
  /** Callback to delete a message */
  onDelete?: (index: number) => void;
  /** Callback to copy a message */
  onCopy?: (messageId: string, content: string) => void;
  /** Callback to handle a suggestion click */
  handleSuggestionClick?: (suggestion: string) => void;
  /** Custom placeholder for input */
  placeholder?: string;
  /** Disable input */
  disabled?: boolean;
  /** Disable sending */
  submitDisabled?: boolean;
  /** Additional class names */
  className?: string;
  /** Custom class for the input prompt */
  inputClassName?: string;
}

/**
 * ChatAreaPresentation Component
 * 
 * A pure presentation component for chat interfaces. Contains no domain logic,
 * authentication, or translation dependencies. All behavior is controlled via props.
 * 
 * This component is designed for maximum reusability and testability.
 * 
 * @example
 * ```tsx
 * <ChatAreaPresentation
 *   messages={filteredMessages}
 *   chatStatus="ready"
 *   isProcessing={false}
 *   messageCopied={null}
 *   avatarConfig={{
 *     assistant: { name: 'AI', src: '/ai.svg' },
 *     user: { name: 'John', src: '/john.jpg' }
 *   }}
 *   translations={{
 *     genericChatTitle: 'Start chatting',
 *     startConversationPrompt: 'Type below',
 *     copyMessage: 'Copy',
 *     delete: 'Delete'
 *   }}
 *   onSubmit={handleSubmit}
 * />
 * ```
 */
export function ChatAreaPresentation ({
  messages,
  chatStatus,
  isProcessing,
  messageCopied,
  avatarConfig,
  chatContent,
  prompts,
  onSubmit,
  onStop,
  onDelete,
  onCopy,
  handleSuggestionClick,
  placeholder = "Type your message...",
  disabled = false,
  submitDisabled = false,
  className,
  inputClassName = "bg-brand-50",
}: ChatAreaPresentationProps): JSX.Element {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const controller = usePromptInputController();

  const handleSubmit = (message: PromptInputMessage): void => {
    if (!message.text?.trim() || disabled || isProcessing) return;
    onSubmit(message);
  };

  const handleStop = (): void => {
    onStop?.();
  };

  const handleDelete = (index: number): void => {
    onDelete?.(index);
  };

  const handleCopy = (messageId: string, content: string): void => {
    onCopy?.(messageId, content);
  };

  return (
    <div className={cn("flex flex-1 flex-col min-h-0", className)}>
      <Conversation className="flex-1 min-h-0">
        <ConversationContent className="overflow-y-auto">
          {messages.length === 0 ? (
            <div>
              <ConversationEmptyState
                title={chatContent.chatTitle}
                description={chatContent.startConversationPrompt}
                icon={chatContent.icon}
              />
              <Suggestions className="w-full flex flex-wrap">
                {prompts.map((prompt, i) => (
                  <Suggestion
                    key={i}
                    className="text-sm"
                    onClick={handleSuggestionClick}
                    suggestion={prompt}
                  />
                ))}
              </Suggestions>
            </div>
          ) : (
            messages.map(({ id, role, parts }, messageIndex) => (
              <Message from={role} key={id} className="whitespace-pre-wrap">
                {parts.map((part, partIndex) => {
                  switch (part.type) {
                  case 'text':
                    return (
                      <div key={partIndex} className={`flex flex-col gap-2 ${role === "assistant" ? "items-start" : "items-end"}`}                      >
                        <MessageContent>
                          {part.text}
                        </MessageContent>
                        <Actions className="mt-2">
                          {onDelete && (
                            <Action title={chatContent.delete} onClick={() => handleDelete(messageIndex)}>
                              <X className="size-4" />
                            </Action>
                          )}
                          <Action
                            label={chatContent.copyMessage}
                            onClick={() => handleCopy(id, part.text)}
                          >
                            {messageCopied === id ? (
                              <Check className="size-4" />
                            ) : (
                              <Copy className="size-4" />
                            )}
                          </Action>
                        </Actions>
                      </div>
                    );
                  }
                })}
                <MessageAvatar
                  name={
                    role === "assistant"
                      ? avatarConfig.assistant.name
                      : ''
                  }
                  src={
                    role === "assistant"
                      ? avatarConfig.assistant.src
                      : avatarConfig.user?.src
                  }
                  iconName={
                    role === 'assistant'
                      ? avatarConfig.assistant.iconName
                      : avatarConfig.user?.iconName
                  }
                  classNameImage={
                    role === "assistant"
                      ? avatarConfig.assistant.classNameImage
                      : avatarConfig.user?.classNameImage
                  }
                />
              </Message>
            ))
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      {/* Prompt Input Area */}
      <div className="flex-shrink-0 border-t p-4">
        <PromptInput
          globalDrop
          multiple
          onSubmit={handleSubmit}
          className={inputClassName}
        >
          {/* <PromptInputHeader>
            <div className="flex items-center justify-between w-full">
              <PromptInputAttachments>
                {(attachment) => <PromptInputAttachment data={attachment} />}
              </PromptInputAttachments>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => controller.attachments.clear()}
                className="text-sm text-white"
              >
                <X className="size-3 mr-1" />
                {chatContent.clearAttachments}
              </Button>
            </div>
          </PromptInputHeader> */}
          <PromptInputBody>
            <PromptInputTextarea
              ref={textareaRef}
              placeholder={placeholder}
              className="min-h-[60px] resize-none mt-0 dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50" // TODO: Implement dark and light themes
              disabled={disabled || isProcessing}
            />
          </PromptInputBody>
          <PromptInputFooter className="justify-end">
            {/* <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent
                  className="w-fit"
                  avoidCollisions={false}
                  align="end"
                  side="right"
                >
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
              <PromptInputSpeechButton textareaRef={textareaRef} />
            </PromptInputTools> */}
            <PromptInputSubmit
              status={chatStatus}
              disabled={!isProcessing && submitDisabled}
              onClick={() => {
                if (chatStatus === 'streaming') {
                  void handleStop();
                }
              }}
            />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
}

export default ChatAreaPresentation;
