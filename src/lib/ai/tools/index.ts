import { and, cosineDistance, desc, eq, gt, sql } from "drizzle-orm";
import { embeddings, resources } from "@/../migrations/schema";
import { embeddingModel, resultsLimit, similarityThreshold } from "@/lib/ai/config";
import { embed } from "ai";
import { db } from "@/lib/db/drizzle";

const generateEmbedding = async (value: string): Promise<number[]> => {
  const input = value.replaceAll('\\n', ' ');
  const { embedding } = await embed({
    model: embeddingModel,
    value: input
  });

  return embedding;
};

export const findRelevantContent = async (
  { userQuery, resourceType }: { userQuery: string, resourceType: string; }
): Promise<{ name: string, similarity: number; }[]> => {
  const userQueryEmbedded = await generateEmbedding(userQuery);
  const similarity = sql<number>`1 - (${cosineDistance(
    embeddings.embedding,
    userQueryEmbedded
  )})`;

  const similarGuides = await db
    .select({ name: embeddings.content, similarity })
    .from(embeddings)
    .leftJoin(resources, eq(embeddings.resourceId, resources.id))
    .where(and(
      gt(similarity, similarityThreshold),
      eq(resources.type, resourceType)
    ))
    .orderBy(t => desc(t.similarity))
    .limit(resultsLimit);
  return similarGuides;
};