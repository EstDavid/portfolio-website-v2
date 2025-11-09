import { handleBackgroundQuery } from '@/lib/agents';
import { type UIMessage } from 'ai';

export const maxDuration = 30;

export async function POST (req: Request): Promise<Response> {
  const { messages }: { messages: UIMessage[]; } = await req.json();

  try {
    const result = await handleBackgroundQuery(messages);
    return result;
  } catch (error) {
    console.error(error);
    return new Response("Error user processing chat", { status: 400 });
  }

}