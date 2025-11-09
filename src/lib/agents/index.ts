import { convertToModelMessages, generateObject, streamText, tool, UIMessage, stepCountIs } from "ai";
import { aiModel } from "@/lib/ai/config";
import { z } from "zod";
import { findRelevantContent } from "../ai/tools";

export async function handleBackgroundQuery (messages: UIMessage[]): Promise<Response> {
  const modelMessages = convertToModelMessages(messages);

  // First step: Verify user query
  const { object: classification } = await generateObject({
    model: aiModel,
    schema: z.object({
      isRelevant: z.boolean()
    }),
    messages: convertToModelMessages(messages),
    system: `
    You are an assistant in a portfolio website of a software engineer. 
    Answer everything always in the first person, as if you were the software engineer talking.
    Your task is to determine whether the query from the user is relevant to the purpose of showcasing the developer's professional background.
    The queries might be:
    - About some aspect of the developer's CV, even about experience before becoming a developer. He was a mechanical engineer in the railway industry.
    - About some FAQ that recruiters make in the intro call of a hiring process. (ie. what are your 3 best strengths? And your weaknesses? Tell me about a time you had to overcome a challenge)
    - About checking the level of fitness of the developer with a certain job description.

    Determine whether the query inferred from the messages is relevant or not to the purpose described before (true or false).
    `
  });

  if (!classification.isRelevant) {
    const result = streamText({
      model: aiModel,
      messages: modelMessages,
      system: `
    You are a helpful assistant in a portfolio website of a software engineer.
    Answer everything always in the first person, as if you were the software engineer talking.
    You the user has made a query that is not relevant to the purpose of answering questions about the professional background of the developer.
    Give a short, direct and polite answer to the user's message. Say something like 'I am sorry, but I cannot answer this type of question...'
    `,
      stopWhen: stepCountIs(5)
    });

    return result.toUIMessageStreamResponse();
  }

  const result = streamText({
    model: aiModel,
    tools: {
      getInfoFromCV: tool({
        description: 'Retrieve information from the CV of a software developer who also has a background in mechanical engineering',
        inputSchema: z.object({
          userQuery: z.string().describe(`Summary of the user's query to get relevant results from a database`),
        }),
        execute: async ({ userQuery }) => {
          const results = await findRelevantContent({ userQuery, resourceType: 'CV' });
          return results;
        }
      }),
      getInfoFromFAQ: tool({
        description: 'Retrieve information from the hiring process FAQ of a software developer who also has a background in mechanical engineering',
        inputSchema: z.object({
          userQuery: z.string().describe(`Summary of the user's query to get relevant results from a database`),
        }),
        execute: async ({ userQuery }) => {
          const results = await findRelevantContent({ userQuery, resourceType: 'FAQ' });
          return results;
        }
      }),
    },
    onError: (event) => {
    },
    stopWhen: stepCountIs(5), // Enable multi-step calls: tools will be executed and results processed by LLM
    system: `
    You are an assistant in a portfolio website of a software engineer.
    Answer everything always in the first person, as if you were the software engineer talking.
    The queries might be:
    - About some aspect of the developer's CV, even about experience before becoming a developer. He was a mechanical engineer in the railway industry.
    - About some FAQ that recruiters make in the intro call of a hiring process. (ie. what are your 3 best strengths? And your weaknesses? Tell me about a time you had to overcome a challenge)
    - About checking the level of fitness of the developer with a certain job description.

    You have 2 tools at your disposal to find relevant info about the CV (getInfoFromCV) and or hiring process FAQs of the developer (getInfoFromFAQ).

    When in doubt, at least use the getInfoFromCV tool.

    Give a nice short summary of the info you find.
    If the tools return no info, answer with something in the lines of "I'm sorry, I have no info about that..."
    `,
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse();
}