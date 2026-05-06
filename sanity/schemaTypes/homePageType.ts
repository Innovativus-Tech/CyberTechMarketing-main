import {defineField, defineType} from 'sanity';

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  initialValue: {
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
  },
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'partners', title: 'Partners'},
    {name: 'services', title: 'Services'},
    {name: 'whyChoose', title: 'Why Choose Us'},
    {name: 'testimonials', title: 'Testimonials'},
  ],
  fields: [
    defineField({
      name: 'heroLineOne',
      title: 'Hero Title Line 1',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroLineTwo',
      title: 'Hero Title Line 2',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroPrimaryCtaLabel',
      title: 'Hero Primary CTA Label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroPrimaryCtaHref',
      title: 'Hero Primary CTA Link',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSecondaryCtaLabel',
      title: 'Hero Secondary CTA Label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSecondaryCtaHref',
      title: 'Hero Secondary CTA Link',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroBadgeText',
      title: 'Hero Badge Text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCardLabel',
      title: 'Hero Stats Card Label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCardValue',
      title: 'Hero Stats Card Value',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCardCaption',
      title: 'Hero Stats Card Caption',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCardDelta',
      title: 'Hero Stats Card Delta',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroFlowTitle',
      title: 'Hero Flow Card Title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroFlowDescription',
      title: 'Hero Flow Card Description',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroFlowButtonLabel',
      title: 'Hero Flow Button Label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroFlowButtonHref',
      title: 'Hero Flow Button Link',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroBottomCtaLabel',
      title: 'Hero Bottom CTA Label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroBottomCtaHref',
      title: 'Hero Bottom CTA Link',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'partnersHeading',
      title: 'Partners Section Heading',
      type: 'string',
      group: 'partners',
    }),
    defineField({
      name: 'partnerNames',
      title: 'Partner Names',
      type: 'array',
      group: 'partners',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Services Section Title',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesDescription',
      title: 'Services Section Description',
      type: 'text',
      rows: 3,
      group: 'services',
    }),
    defineField({
      name: 'whyChooseTitle',
      title: 'Why Choose Us Title',
      type: 'string',
      group: 'whyChoose',
    }),
    defineField({
      name: 'whyChooseDescription',
      title: 'Why Choose Us Description',
      type: 'text',
      rows: 3,
      group: 'whyChoose',
    }),
    defineField({
      name: 'whyChooseHighlights',
      title: 'Why Choose Us Highlights',
      type: 'array',
      group: 'whyChoose',
      of: [
        defineField({
          type: 'object',
          name: 'highlight',
          fields: [
            defineField({
              name: 'title',
              title: 'Highlight Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'whyChooseReasons',
      title: 'Why Choose Us Cards',
      type: 'array',
      group: 'whyChoose',
      of: [
        defineField({
          type: 'object',
          name: 'reason',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'testimonialsTitle',
      title: 'Testimonials Title',
      type: 'string',
      group: 'testimonials',
    }),
    defineField({
      name: 'testimonialsSubtitle',
      title: 'Testimonials Subtitle',
      type: 'string',
      group: 'testimonials',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
        subtitle: 'Homepage hero and section copy',
      };
    },
  },
});
