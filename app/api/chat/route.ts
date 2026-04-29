import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const openAiKey = process.env.OPENAI_API_KEY;
    
    // ============================================================================
    // 🛑 ATTENTION: TO USE A REAL LLM (LIKE OPENAI OR GEMINI) UNCOMMENT THIS BLOCK
    // AND ADD YOUR API KEY TO .env.local AS OPENAI_API_KEY
    // ============================================================================
    /*
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // or your preferred model
        messages: [
          { 
            role: 'system', 
            content: 'You are a helpful and professional AI assistant for Cybertech Marketing, a premium digital marketing agency. You help users understand services like SEO, web design, and PPC.' 
          },
          ...messages
        ]
      })
    });
    
    if (!response.ok) {
      throw new Error('API response was not ok');
    }
    
    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0].message.content });
    */

    // ============================================================================
    // MOCK RESPONSE LOGIC (REMOVE WHEN USING REAL LLM ABOVE)
    // ============================================================================
    const lastMessage = messages[messages.length - 1]?.content.toLowerCase() || "";
    let reply = "Hello! I am the Cybertech AI assistant. I can help you learn more about our Digital Marketing, Web Design, and SEO services. How can I assist you today?";
    
    if (lastMessage.includes('service') || lastMessage.includes('marketing') || lastMessage.includes('what do you do')) {
      reply = "We offer a wide array of digital services designed to transform clicks into conversions. This includes Digital Marketing, Graphic Design, E-commerce Marketing, Pay Per Click (PPC), Web Design, and Content Writing. Would you like details on any specific service?";
    } else if (lastMessage.includes('contact') || lastMessage.includes('phone') || lastMessage.includes('email') || lastMessage.includes('reach')) {
      reply = "You can reach our team anytime by calling 7428768779 or emailing info@cybertechmarketing.com. We're here to help!";
    } else if (lastMessage.includes('pricing') || lastMessage.includes('cost') || lastMessage.includes('quote')) {
      reply = "Our pricing is highly customized to fit your unique business goals and the scope of your project. I recommend filling out the 'Get a Free Quote' form on our homepage so our experts can provide a detailed estimate.";
    } else if (lastMessage.includes('hello') || lastMessage.includes('hi ')) {
      reply = "Hi there! Welcome to Cybertech Marketing. How can I help accelerate your digital growth today?";
    } else if (!openAiKey && (lastMessage.includes('ai') || lastMessage.includes('openai') || lastMessage.includes('assistant'))) {
      reply = "The live AI integration is not configured yet, but the assistant shell is ready. Once OPENAI_API_KEY is added, this chat can be connected to a real model.";
    }

    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 1500));

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Failed to process chat request' }, { status: 500 });
  }
}
