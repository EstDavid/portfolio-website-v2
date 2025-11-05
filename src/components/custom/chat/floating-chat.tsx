'use client';

import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { JSX, useState } from "react";

export default function FloatingChat (): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
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

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl h-[90vh] bg-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-700">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <MessageCircle className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">Chat with David's Clone</h2>
                  <p className="text-sm text-slate-400">Ask me anything about David</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Chat Content Area - Placeholder for now */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex h-full items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#3dd9c5]/10 mx-auto">
                    <MessageCircle className="h-10 w-10 text-[#3dd9c5]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Start a Conversation</h3>
                    <p className="text-slate-400 max-w-md">
                      This is where the chat interface will be. You can add your chat functionality here.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area - Placeholder */}
            <div className="border-t border-slate-700 bg-slate-900 px-6 py-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3dd9c5] focus:border-transparent"
                />
                <Button className="bg-primary text-slate-900 hover:bg-primary-dark font-medium px-6">Send</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 