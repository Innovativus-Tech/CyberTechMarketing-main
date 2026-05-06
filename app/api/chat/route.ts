import { NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const OLLAMA_BASE_URL =
  process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434';
const DEFAULT_MODEL = process.env.OLLAMA_MODEL || 'llama3.1:8b';
const MAX_MESSAGES = 12;

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

    // Fetch latest contact details from Sanity Site Settings
    const settings = await sanityClient.fetch(`*[_type == "siteSettings"][0]{
      footerEmail,
      footerPhone
    }`);

    const phone = settings?.footerPhone || '7428768779';
    const email = settings?.footerEmail || 'info@cybertechmarketing.com';

    const SYSTEM_PROMPT = `You are the CyberTech marketing assistant for CyberTech Marketing.

Your job:
- Help users with digital marketing questions.
- Explain SEO, web development, branding, ads, and AI automation.
- Talk professionally and confidently.
- Keep answers concise and business-focused.
- If a user asks unrelated questions, politely redirect them back to digital marketing or CyberTech Marketing services.

Guidelines:
- Be professional, warm, and helpful.
- Mention services when relevant: Digital Marketing, Graphic Design, E-commerce Marketing, PPC, Web Design, SEO, and AI Automation.
- If pricing is requested, explain that it depends on scope and invite them to contact the team for a tailored quote.
- If a question needs specific business details you do not know, direct the user to contact the team.
- Contact details: Phone ${phone}, Email ${email}.
- Keep answers easy to read for a website chat widget.`;

    if (!DEFAULT_MODEL.trim()) {
      return NextResponse.json(
        {
          error:
            'The chatbot is not configured yet. Add OLLAMA_MODEL to the server environment to enable live AI replies.',
        },
        { status: 503 }
      );
    }

    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        stream: false,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const apiError =
        data?.error?.message ||
        data?.message ||
        data?.error ||
        'Ollama request failed.';

      console.error('Ollama chat error:', {
        status: response.status,
        error: apiError,
      });

      return NextResponse.json(
        { error: 'The chatbot could not generate a reply right now.' },
        { status: 502 }
      );
    }

    const reply =
      typeof data?.message?.content === 'string'
        ? data.message.content.trim()
        : '';

    if (!reply) {
      console.error('Ollama chat error: empty message.content', data);

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
