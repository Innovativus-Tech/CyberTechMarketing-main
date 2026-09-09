export type BlogPost = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  accent: string;
  content: string[];
};

export const fallbackBlogPosts: BlogPost[] = [
  {
    slug: 'ai-demand-generation-playbook',
    category: 'Demand Gen',
    readTime: '8 min read',
    title: 'The AI Demand Generation Playbook for High-Intent Pipeline Growth',
    excerpt:
      'A practical framework for combining paid media, content, and automation to turn cold traffic into qualified pipeline.',
    date: '2026-04-12',
    image: '/images/ai.webp',
    accent: 'from-red-950 via-red-800 to-rose-500',
    content: [
      'Modern buyers do not move in a straight line anymore. They bounce between search, social proof, review sites, webinars, and dark social before they ever fill out a form. That means marketing teams need a demand engine that can recognize intent early and respond with useful content quickly.',
      'The strongest AI-assisted demand programs start by clustering audience questions, funnel stage, and conversion triggers. Once those are mapped, your campaigns can personalize landing pages, ad variations, nurture flows, and retargeting sequences without creating a fragmented brand experience.',
      'Start with one commercial question: which audience action most reliably predicts a qualified sales conversation? Build measurement around that signal before adding more channels. Clean event tracking, consistent campaign naming, and a shared definition of a qualified lead give the system something dependable to optimize.',
      'The goal is not more automation for its own sake. The goal is a faster feedback loop between campaign data and creative decisions so your team can scale winning messages before competitors catch up.',
      'Creative testing should be organized around hypotheses rather than volume. Test one audience pain, one proof point, and one call to action at a time. When the winning idea is clear, adapt it across search, social, email, and sales enablement while keeping the core promise consistent.',
      'Review the system every week at campaign level and every month at pipeline level. Short-cycle metrics reveal execution problems; longer-cycle metrics show whether the work is producing real business value. That separation keeps teams from optimizing clicks while qualified demand quietly declines.',
    ],
  },
  {
    slug: 'content-ops-for-multi-channel-marketing',
    category: 'Content Ops',
    readTime: '7 min read',
    title: 'Content Operations That Keep Multi-Channel Marketing Consistent',
    excerpt:
      'How to build a content system that keeps SEO, email, LinkedIn, and paid campaigns aligned around the same narrative.',
    date: '2026-04-08',
    image: '/images/collaboration.webp',
    accent: 'from-slate-950 via-red-900 to-red-500',
    content: [
      'Marketing teams lose speed when each channel runs on a separate content calendar. Search wants evergreen assets, paid wants angle testing, social wants frequency, and sales wants assets that answer objections. Without an operating model, content turns reactive.',
      'The fix is to create a central campaign narrative with modular assets underneath it. One research-backed pillar can become landing page copy, email nurture snippets, ad hooks, founder posts, and retargeting scripts without sounding duplicated.',
      'A practical content brief should define the audience, the decision it supports, the evidence available, the primary channel, and the next action. This gives writers and designers enough direction without turning every asset into a slow approval project.',
      'When content operations are organized this way, your brand feels sharper and your production cycle gets lighter instead of heavier as the business grows.',
      'Create a simple source-of-truth library for approved claims, customer proof, product language, and visual assets. Teams move faster when they can reuse trusted building blocks instead of rechecking the same facts for every campaign.',
      'Measure content by the role it plays. Some assets create discovery, some support evaluation, and others help close or retain customers. A useful reporting model recognizes those differences and avoids judging every piece by last-click conversions alone.',
    ],
  },
  {
    slug: 'conversion-design-for-service-brands',
    category: 'Conversion',
    readTime: '9 min read',
    title:
      'Conversion Design Principles That Help Service Brands Win Trust Faster',
    excerpt:
      'Homepage and landing page patterns that reduce hesitation and move more visitors toward consultation calls.',
    date: '2026-03-30',
    image: '/images/marketing.webp',
    accent: 'from-red-900 via-red-700 to-orange-500',
    content: [
      'Most service websites fail because they ask for trust before they establish clarity. Visitors need to know who you help, what outcome you create, and why your approach is different within the first few seconds.',
      'Strong conversion design uses visual hierarchy, proof blocks, outcome-focused copy, and obvious next steps. It also removes competing calls to action so the buyer never has to guess where to go next.',
      'The most effective pages answer questions in the order visitors naturally ask them: Is this for me? What outcome can I expect? How does it work? Why should I trust this team? What happens when I enquire? A page that follows this sequence feels easier because it reduces uncertainty step by step.',
      'Small improvements in clarity often outperform aggressive redesigns. That is why high-performing sites test headline-message fit, objection handling, and CTA placement before they chase bigger visual changes.',
      'Proof should be specific and close to the claim it supports. A short case result beside a service description is more useful than a distant carousel of generic praise. Where strong proof is not yet available, explain the process, deliverables, and decision criteria clearly.',
      'Treat mobile design as a prioritization exercise, not a smaller desktop layout. Keep the main promise, essential proof, and next action visible; reduce decorative complexity; and make every tap target comfortable. The result should feel intentional at every screen size.',
    ],
  },
  {
    slug: 'retention-marketing-with-lifecycle-email',
    category: 'Lifecycle',
    readTime: '6 min read',
    title:
      'Retention Marketing With Lifecycle Email That Actually Feels Human',
    excerpt:
      'A better way to use segmentation, behavior triggers, and message timing to grow repeat revenue.',
    date: '2026-03-22',
    image: '/images/data.webp',
    accent: 'from-rose-950 via-red-800 to-fuchsia-500',
    content: [
      'Email still delivers one of the highest returns in digital marketing, but only when it is tied to behavior. Generic weekly sends are easy to ignore. Relevant timing and message sequencing are what make lifecycle campaigns valuable.',
      'Retention-focused brands map the entire customer journey: first touch, first purchase, activation, repeat purchase, and win-back. Each stage gets its own message logic and success metric.',
      'Good lifecycle programs begin with a small set of dependable triggers. A welcome sequence, activation reminder, post-purchase education flow, and thoughtful win-back campaign usually create more value than dozens of loosely maintained automations.',
      'When email is treated as part of the customer experience instead of just a distribution channel, it becomes a loyalty engine rather than a reminder system.',
      'Frequency and tone should respond to customer behavior. Someone who has just completed a purchase needs reassurance and useful guidance, while an inactive customer may need a concise reason to return. Sending both people the same promotion weakens relevance and trust.',
      'Review lifecycle performance by cohort and stage. Open rates can help diagnose delivery and subject-line issues, but activation, repeat purchase, churn, and customer value show whether the program is improving the relationship over time.',
    ],
  },
];

export async function getAllPosts() {
  return fallbackBlogPosts;
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
