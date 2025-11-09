'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, SquarePen, WandSparkles, } from "lucide-react";
import { JSX, ReactNode, useCallback, useState } from "react";
import ChatAreaContainer from "../ai/chat-area-container";
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from "ai";
import { PromptInputProvider } from "@/components/ai-elements/prompt-input";
import { Button } from "@/components/ui/button";

export interface ChatContent {
  chatTitle: string;
  startConversationPrompt: string;
  copyMessage: string;
  delete: string;
  clearAttachments: string;
  icon: ReactNode;
}

export default function FloatingChat (): JSX.Element {
  const title = "David's clone";
  const placeholder = 'Ask me something...';
  const apiEndpoint = '/api/chat';
  const [isOpen, setIsOpen] = useState(false);

  // TODO: Implement texts
  const chatContent: ChatContent = {
    chatTitle: "What would you like to know about me?",
    startConversationPrompt: "You can questions about my experience, skills or background. Also, you can ask some of the typical behavioral questions. (Disclaimer: Some answers might be inaccurate)",
    copyMessage: "copyMessage",
    delete: "delete",
    clearAttachments: "clearAttachments",
    icon: <WandSparkles />
  };

  const prompts: string[] = [
    'When did you start coding?',
    'What was your first project as developer?',
    'How many blockchain projects have you done?',
    'What is your stack?',
  ];

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
    [setMessages]);

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="fixed bottom-12 right-12 z-50 group" aria-label="Open chat">
          <div className="relative">
            {/* Chat bubble with text */}
            <div className="absolute bottom-full right-0 mb-2 w-64 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-slate-900 shadow-lg transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
              Want to know more about me? Chat with my clone
              {/* Arrow pointing down */}
              <div className="absolute -bottom-1 right-6 h-2 w-2 rotate-45 bg-primary" />
            </div>

            {/* Circular button */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light shadow-lg transition-transform hover:scale-110 hover:shadow-xl">
              <MessageCircle className="h-8 w-8 text-slate-900" />
            </div>
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
                  title="Start a new chat"
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