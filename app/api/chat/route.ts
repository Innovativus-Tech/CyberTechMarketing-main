import { NextResponse } from 'next/server';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const OPENAI_API_URL = 'https://api.openai.com/v1/responses';
const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-5.2-mini';
const MAX_MESSAGES = 12;
const SYSTEM_PROMPT = `You are the Cybertech AI assistant for Cybertech Marketing, a digital marketing agency.

Your job is to help website visitors understand the company's services, process, contact options, and value proposition.

Guidelines:
- Be professional, warm, concise, and helpful.
- Stay focused on Cybertech Marketing and related customer questions.
- If pricing is requested, explain that pricing depends on scope and invite the user to contact the team for a tailored quote.
- If a question needs business-specific details you do not know, say so clearly and direct the user to contact the team.
- Do not invent guarantees, case studies, or policies that were not provided.
- Where relevant, mention these services: Digital Marketing, Graphic Design, E-commerce Marketing, Pay Per Click (PPC), Web Design, SEO, and Content Writing.
- If the user asks for contact details, mention phone 7428768779 and email info@cybertechmarketing.com.
- Keep answers easy to read for a website chat widget.`;

function isValidMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const message = value as Partial<ChatMessage>;

  return (
    (message.role === 'user' || message.role === 'assistant') &&
    typeof message.content === 'string' &&
    message.content.trim().length > 0
  );
}

function normalizeMessages(messages: unknown): ChatMessage[] {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .filter(isValidMessage)
    .slice(-MAX_MESSAGES)
    .map((message) => ({
      role: message.role,
      content: message.content.trim(),
    }));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = normalizeMessages(body?.messages);

    if (messages.length === 0) {
      return NextResponse.json(
        { error: 'At least one valid message is required.' },
        { status: 400 }
      );
    }

    const openAiKey = process.env.OPENAI_API_KEY;

    if (!openAiKey) {
      return NextResponse.json(
        {
          error:
            'The chatbot is not configured yet. Add OPENAI_API_KEY to the server environment to enable live AI replies.',
        },
        { status: 503 }
      );
    }

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openAiKey}`,
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        instructions: SYSTEM_PROMPT,
        input: messages.map((message) => ({
          role: message.role,
          content: [
            {
              type: 'input_text',
              text: message.content,
            },
          ],
        })),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const apiError =
        data?.error?.message ||
        data?.message ||
        'OpenAI request failed.';

      console.error('OpenAI chat error:', {
        status: response.status,
        error: apiError,
      });

      return NextResponse.json(
        { error: 'The chatbot could not generate a reply right now.' },
        { status: 502 }
      );
    }

    const reply =
      typeof data?.output_text === 'string' ? data.output_text.trim() : '';

    if (!reply) {
      console.error('OpenAI chat error: empty output_text', data);

      return NextResponse.json(
        { error: 'The chatbot returned an empty response.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error('Chat API error:', error);

    return NextResponse.json(
      { error: 'Failed to process chat request.' },
      { status: 500 }
    );
  }
}
