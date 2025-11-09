import type { ChatStatus } from 'ai';

/**
 * Unified chat status type used across the application.
 * Simplifies the AI SDK's ChatStatus for common use cases.
 */
export type UnifiedChatStatus = 'idle' | 'pending' | 'streaming';

/**
 * Maps AI SDK ChatStatus to a simplified UnifiedChatStatus.
 * This provides a consistent status representation across components.
 * 
 * @param status - ChatStatus from the AI SDK (useChat hook)
 * @returns Simplified status: 'idle', 'pending', or 'streaming'
 * 
 * @example
 * ```tsx
 * const { status } = useChat();
 * const simplifiedStatus = mapToUnifiedStatus(status);
 * ```
 */
export function mapToUnifiedStatus (status: ChatStatus): UnifiedChatStatus {
  if (status === "submitted") return "pending";
  if (status === "streaming") return "streaming";
  return "idle";
}

/**
 * Maps UnifiedChatStatus back to AI SDK ChatStatus.
 * Useful when components need to interact with AI SDK components that expect ChatStatus.
 * 
 * @param status - UnifiedChatStatus ('idle', 'pending', or 'streaming')
 * @returns ChatStatus compatible with AI SDK
 * 
 * @example
 * ```tsx
 * const unifiedStatus: UnifiedChatStatus = 'pending';
 * const aiSdkStatus = mapToChatStatus(unifiedStatus);
 * ```
 */
export function mapToChatStatus (status: UnifiedChatStatus): ChatStatus {
  const statusMap: Record<UnifiedChatStatus, ChatStatus> = {
    idle: 'ready',
    streaming: 'streaming',
    pending: 'submitted'
  };
  return statusMap[status];
}

/**
 * Checks if the chat is currently processing a message
 * (either submitting or actively streaming a response)
 * 
 * @param status - Either UnifiedChatStatus or ChatStatus
 * @returns true if the chat is processing, false otherwise
 * 
 * @example
 * ```tsx
 * const { status } = useChat();
 * const disabled = isProcessing(status);
 * ```
 */
export function isProcessing (status: ChatStatus): boolean {
  return status === 'streaming' || status === 'submitted';
}
