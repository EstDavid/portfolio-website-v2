import { LucideIcon, MessageCircle } from "lucide-react";

export interface ChatContent {
  chatTitle: string;
  startConversationPrompt: string;
  copyMessage: string;
  delete: string;
  clearAttachments: string;
  icon: LucideIcon;
}

export const floatingChatData = {
  title: "David's clone",
  placeholder: 'Ask me something...',
  apiEndpoint: '/api/chat',
  buttonLabel: "Chat with David's clone",
  buttonAltText: "Open chat",
  heroImageSrc: "/images/hero-image.png",
  heroImageAlt: "David de Esteban",
  newChatButtonTitle: "Start a new chat",
  chatContent: {
    chatTitle: "What would you like to know about me?",
    startConversationPrompt: "You can ask about my experience, background, hard skills, soft skills... try me! (Disclaimer: Some answers might be inaccurate)",
    copyMessage: "copyMessage",
    delete: "delete",
    clearAttachments: "clearAttachments",
    icon: MessageCircle
  } as ChatContent,
  prompts: [
    'When did you start coding?',
    'What is your latest project?',
    'What project are you most proud of?',
    'What is your stack?',
    'How do you work with AI?'
  ]
};
