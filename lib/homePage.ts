export type HomePageReason = {
  title: string;
  description: string;
};

export type HomePageHighlight = {
  title: string;
};

export type HomePageContent = {
  heroLineOne: string;
  heroLineTwo: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;
  heroBadgeText: string;
  heroCardLabel: string;
  heroCardValue: string;
  heroCardCaption: string;
  heroCardDelta: string;
  heroFlowTitle: string;
  heroFlowDescription: string;
  heroFlowButtonLabel: string;
  heroFlowButtonHref: string;
  heroBottomCtaLabel: string;
  heroBottomCtaHref: string;
  partnersHeading: string;
  partnerNames: string[];
  servicesTitle: string;
  servicesDescription: string;
  whyChooseTitle: string;
  whyChooseDescription: string;
  whyChooseHighlights: HomePageHighlight[];
  whyChooseReasons: HomePageReason[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
};

export const defaultHomePageContent: HomePageContent = {
  heroLineOne: 'Built to Convert.',
  heroLineTwo: 'Engineered for Growth.',
  heroDescription:
    'AI-powered marketing systems built for campaign velocity, stronger attribution, and revenue growth. See clearer. Scale faster. Win the market.',
  heroPrimaryCtaLabel: 'Free Growth Audit',
  heroPrimaryCtaHref: '/contact',
  heroSecondaryCtaLabel: 'See Campaign Wins',
  heroSecondaryCtaHref: '/blog',
  heroBadgeText: 'CyberTech Marketing Live',
  heroCardLabel: 'Lead Surge',
  heroCardValue: '56',
  heroCardCaption: 'Qualified leads this week',
  heroCardDelta: '+24%',
  heroFlowTitle: 'CyberTech Campaign Flow',
  heroFlowDescription:
    'Launch creative, route paid traffic, score intent, and trigger follow-up automations in one motion.',
  heroFlowButtonLabel: 'Launch Strategy',
  heroFlowButtonHref: '/contact',
  heroBottomCtaLabel: 'Explore Growth Engine',
  heroBottomCtaHref: '/services',
  partnersHeading: "Tried and trusted by the industry's leading authorities",
  partnerNames: [
    'SAMSUNG',
    'lyft',
    'jetBlue',
    'servicenow',
    'norwegian',
    'flex',
    'shopify partners',
    'Google Partner',
    'Meta',
    'Microsoft',
  ],
  servicesTitle: 'Marketing Systems Built to Grow Your Business',
  servicesDescription:
    'Explore our integrated services designed to increase visibility, conversions, and long-term revenue.',
  whyChooseTitle: 'Why Should You Choose Our Agency?',
  whyChooseDescription:
    'The Best Digital Marketing Solutions. Save Costs And Grow Fast With Cybertech Marketing.',
  whyChooseHighlights: [
    {title: 'Expertise in Ad Strategy'},
    {title: 'Data-Driven Decisions'},
    {title: 'Boost ROI'},
  ],
  whyChooseReasons: [
    {
      title: 'Expert Team',
      description:
        'A dedicated team of experienced digital marketing professionals who understand the ins and outs of the industry.',
    },
    {
      title: 'Proven Results',
      description:
        'A track record of delivering measurable and tangible results for clients, including increased traffic, leads, and conversions.',
    },
    {
      title: 'Customized Strategies',
      description:
        'Tailored digital marketing strategies designed to meet the unique goals and needs of each client.',
    },
    {
      title: 'Cutting-Edge Technology',
      description:
        'Utilization of the latest tools and technologies to stay ahead of digital marketing trends.',
    },
    {
      title: 'Data-Driven Approach',
      description:
        'Data analysis and insights to continually optimize campaigns and maximize ROI.',
    },
    {
      title: 'Transparent Reporting',
      description:
        'Clear and transparent reporting to keep clients informed about campaign performance.',
    },
  ],
  testimonialsTitle: 'What They’re Talking About Agency?',
  testimonialsSubtitle: 'OUR TESTIMONIALS',
};

export async function getHomePageContent(): Promise<HomePageContent> {
  return defaultHomePageContent;
}
