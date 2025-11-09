import type { UIMessage } from 'ai';

/**
 * Represents a simplified message structure with only text content
 */
export interface FilteredMessage {
  id: string;
  role: 'assistant' | 'user';
  content: string;
}

/**
 * Filters messages to only include user and assistant messages with text content.
 * Extracts the text content from the message parts.
 * 
 * @param messages - Array of UIMessage objects from the AI SDK
 * @returns Array of simplified messages containing only text content
 * 
 * @example
 * ```tsx
 * const messages = useChat();
 * const textMessages = filterTextMessages(messages);
 * ```
 */
export function filterTextMessages (messages: UIMessage[]): FilteredMessage[] {
  return messages
    .filter((message) =>
      (message.role === "assistant" || message.role === "user") &&
      message.parts.some(p => p.type === 'text')
    )
    .map(({ id, role, parts }) => {
      const textPart = parts.find(p => p.type === 'text');
      return {
        id,
        role: role as 'assistant' | 'user',
        content: textPart?.text ?? ''
      };
    });
}

/**
 * Finds the most recent assistant message with text content
 * 
 * @param messages - Array of UIMessage objects from the AI SDK
 * @returns The text content of the last assistant message, or undefined if none exists
 * 
 * @example
 * ```tsx
 * const lastResponse = getLastAssistantMessage(messages);
 * if (lastResponse) {
 *   // Do something with the assistant's last response
 * }
 * ```
 */
export function getLastAssistantMessage (messages: UIMessage[]): string | undefined {
  const lastMessage = messages
    .toReversed()
    .find((message) => message.role === 'assistant');

  return lastMessage?.parts.find(p => p.type === 'text')?.text;
}


export const extractTextContentFromMessage = (message: UIMessage): string => {
  const text = message.parts.reduce((acc, curr) => {
    if (curr.type === 'text') {
      return acc + '\n' + curr.text;
    }
    return acc;
  }, '');

  return text;
};
