'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SquarePen } from "lucide-react";
import { JSX, useCallback, useState } from "react";
import ChatAreaContainer from "../ai/chat-area-container";
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from "ai";
import { PromptInputProvider } from "@/components/ai-elements/prompt-input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { floatingChatData } from "@/lib/data/floating-chat";

export type { ChatContent } from "@/lib/data/floating-chat";

export default function FloatingChat (): JSX.Element {
  const {
    title,
    placeholder,
    apiEndpoint,
    buttonLabel,
    buttonAltText,
    heroImageSrc,
    heroImageAlt,
    newChatButtonTitle,
    chatContent,
    prompts
  } = floatingChatData;

  const [isOpen, setIsOpen] = useState(false);

  // Initialize chat
  const { messages, sendMessage, stop, setMessages, status } = useChat({
    transport: new DefaultChatTransport({
      api: apiEndpoint,
    }),
  });

  const deleteMessage = useCallback(
    (index: number) => {
      setMessages((prev) => prev.filter((_, i) => i !== index));
    },
    [setMessages]
  );

  const handleSuggestion = useCallback(
    (suggestion: string) => {
      sendMessage({
        role: 'user',
        parts: [{
          type: 'text',
          text: suggestion
        }]
      });
    },
    [sendMessage]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 bg-primary rounded-full pl-5 pr-3 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          aria-label={buttonAltText}
        >
          {/* CTA Text */}
          <span className="text-sm font-semibold text-slate-900 whitespace-nowrap pl-2">
            {buttonLabel}
          </span>

          {/* Profile Image */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-slate-900">
            <Image
              src={heroImageSrc}
              alt={heroImageAlt}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        </button>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='max-h-[90vh] h-[90vh] w-full max-w-4xl gap-0 flex flex-col rounded-lg shadow-xl p-0 overflow-hidden'>
          <PromptInputProvider>
            <DialogDescription className='sr-only'>{title}</DialogDescription>
            <DialogHeader className='flex-shrink-0 flex items-start p-4 pr-12 space-y-2 sm:space-y-0'>
              <DialogTitle className='sr-only text-xl w-full sm:w-auto text-center font-bold self-start text-brand'>
                {title}
              </DialogTitle>
              {messages.length > 0 &&
                <Button
                  type="button"
                  variant='ghost'
                  className="w-auto h-auto"
                  title={newChatButtonTitle}
                  onClick={async () => {
                    if (status === 'streaming' || status === 'submitted') {
                      await stop();
                    }
                    setMessages([]);
                  }}
                >
                  <SquarePen className="size-8" strokeWidth={2} />
                </Button>
              }
              <div className="flex gap-2">
              </div>
            </DialogHeader>
            <ChatAreaContainer
              messages={messages}
              status={status}
              onSendMessage={sendMessage}
              onStop={stop}
              chatContent={chatContent}
              prompts={prompts}
              onDeleteMessage={deleteMessage}
              handleSuggestionClick={handleSuggestion}
              placeholder={placeholder}
            />
          </PromptInputProvider>
        </DialogContent>
      </Dialog>
    </>
  );
} 