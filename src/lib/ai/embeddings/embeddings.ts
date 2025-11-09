import { embed } from "ai";
import { embeddingModel } from "@/lib/ai/config";

export async function getEmbedding (query: string) {
  const { embedding } = await embed({
    model: embeddingModel,
    value: query
  });

  return embedding;
}