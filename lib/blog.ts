import { sanityClient, sanityConfigured, urlFor } from '@/lib/sanity';

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

type SanityPost = {
  slug?: string;
  category?: string;
  readTime?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  image?: unknown;
  accent?: string;
  content?: Array<{
    children?: Array<{
      text?: string;
    }>;
  }>;
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
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-red-950 via-red-800 to-rose-500',
    content: [
      'Modern buyers do not move in a straight line anymore. They bounce between search, social proof, review sites, webinars, and dark social before they ever fill out a form. That means marketing teams need a demand engine that can recognize intent early and respond with useful content quickly.',
      'The strongest AI-assisted demand programs start by clustering audience questions, funnel stage, and conversion triggers. Once those are mapped, your campaigns can personalize landing pages, ad variations, nurture flows, and retargeting sequences without creating a fragmented brand experience.',
      'The goal is not more automation for its own sake. The goal is a faster feedback loop between campaign data and creative decisions so your team can scale winning messages before competitors catch up.',
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
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-slate-950 via-red-900 to-red-500',
    content: [
      'Marketing teams lose speed when each channel runs on a separate content calendar. Search wants evergreen assets, paid wants angle testing, social wants frequency, and sales wants assets that answer objections. Without an operating model, content turns reactive.',
      'The fix is to create a central campaign narrative with modular assets underneath it. One research-backed pillar can become landing page copy, email nurture snippets, ad hooks, founder posts, and retargeting scripts without sounding duplicated.',
      'When content operations are organized this way, your brand feels sharper and your production cycle gets lighter instead of heavier as the business grows.',
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
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-red-900 via-red-700 to-orange-500',
    content: [
      'Most service websites fail because they ask for trust before they establish clarity. Visitors need to know who you help, what outcome you create, and why your approach is different within the first few seconds.',
      'Strong conversion design uses visual hierarchy, proof blocks, outcome-focused copy, and obvious next steps. It also removes competing calls to action so the buyer never has to guess where to go next.',
      'Small improvements in clarity often outperform aggressive redesigns. That is why high-performing sites test headline-message fit, objection handling, and CTA placement before they chase bigger visual changes.',
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
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    accent: 'from-rose-950 via-red-800 to-fuchsia-500',
    content: [
      'Email still delivers one of the highest returns in digital marketing, but only when it is tied to behavior. Generic weekly sends are easy to ignore. Relevant timing and message sequencing are what make lifecycle campaigns valuable.',
      'Retention-focused brands map the entire customer journey: first touch, first purchase, activation, repeat purchase, and win-back. Each stage gets its own message logic and success metric.',
      'When email is treated as part of the customer experience instead of just a distribution channel, it becomes a loyalty engine rather than a reminder system.',
    ],
  },
];

const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  title,
  category,
  readTime,
  excerpt,
  accent,
  "date": publishedAt,
  "slug": slug.current,
  image,
  content
}`;

function normalizePortableText(blocks: SanityPost['content']) {
  if (!Array.isArray(blocks)) {
    return [];
  }

  return blocks
    .map((block) =>
      Array.isArray(block.children)
        ? block.children
            .map((child) => child.text?.trim() || '')
            .filter(Boolean)
            .join('')
        : ''
    )
    .filter(Boolean);
}

function mapSanityPost(post: SanityPost): BlogPost | null {
  if (!post.slug || !post.title || !post.excerpt || !post.category || !post.date) {
    return null;
  }

  return {
    slug: post.slug,
    category: post.category,
    readTime: post.readTime || '5 min read',
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    image: post.image
      ? urlFor(post.image).width(1600).quality(80).url()
      : fallbackBlogPosts[0].image,
    accent: post.accent || 'from-red-950 via-red-800 to-rose-500',
    content: normalizePortableText(post.content),
  };
}

export async function getAllPosts() {
  if (!sanityConfigured) {
    return fallbackBlogPosts;
  }

  try {
    const posts = await sanityClient.fetch<SanityPost[]>(
      postsQuery,
      {},
      { next: { revalidate: 60 } }
    );
    const mappedPosts = posts
      .map(mapSanityPost)
      .filter((post): post is BlogPost => Boolean(post));

    return mappedPosts.length > 0 ? mappedPosts : fallbackBlogPosts;
  } catch (error) {
    console.error('Failed to fetch Sanity posts:', error);
    return fallbackBlogPosts;
  }
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
