/**
 * AI Utility Functions
 * 
 * This module provides utility functions for working with AI SDK messages and status.
 * These utilities help maintain separation of concerns by extracting business logic
 * from presentation components.
 */

export {
  filterTextMessages,
  getLastAssistantMessage,
  extractTextContentFromMessage,
  type FilteredMessage
} from './message';

export {
  mapToUnifiedStatus,
  mapToChatStatus,
  isProcessing,
} from './status';
