import { LanguageModel } from 'ai';

export const embeddingModel = process.env.AI_EMBEDDING_MODEL!;

export const aiModel: LanguageModel = process.env.AI_EMBEDDING_MODEL!;

export const similarityThreshold = 0.5;

export const resultsLimit = 4;