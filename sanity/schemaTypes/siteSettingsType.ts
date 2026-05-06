import {defineField, defineType} from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  initialValue: {
    announcementText:
      "Don't Miss the CyberTech Marketing Forum — Learn How AI Is Changing the Marketing Landscape.",
    announcementCtaLabel: 'Register Now',
    announcementCtaHref: '/contact',
    primaryNavLinks: [
      {id: 'platform', label: 'Platform', href: '/#platform'},
      {id: 'services', label: 'Services', href: '/services'},
      {id: 'partners', label: 'Partners', href: '/#partners'},
      {id: 'testimonials', label: 'Testimonials', href: '/#testimonials'},
      {id: 'careers', label: 'Careers', href: '/careers'},
      {id: 'about', label: 'About', href: '/about'},
      {id: 'pricing', label: 'Pricing', href: '/pricing'},
    ],
    utilityLinks: [
      {label: 'Experiencing a Breach?', href: '/contact', variant: 'text'},
      {label: 'Blog', href: '/blog', variant: 'text'},
      {label: 'Get Started', href: '/blog', variant: 'filled'},
      {label: 'Contact Us', href: '/contact', variant: 'outline'},
    ],
    mobileCtaLabel: 'Contact',
    mobileCtaHref: '/contact',
    platformAdvantageLinks: [
      {
        title: 'Growth Platform',
        description:
          'Integrated strategy across SEO, content, paid media, and conversion optimization.',
        href: '/platform/growth-platform',
      },
      {
        title: 'Service Stack',
        description:
          'Explore the digital marketing, design, PPC, and web capabilities behind the system.',
        href: '/platform/service-stack',
      },
      {
        title: 'Proof & Trust',
        description:
          'See the client signals, testimonials, and credibility markers that support our approach.',
        href: '/platform/proof-trust',
      },
      {
        title: 'Meet CyberTech',
        description:
          'Learn how our agency combines creative execution with data-driven growth frameworks.',
        href: '/about',
      },
    ],
    platformServiceLinks: [
      {label: 'Digital Marketing', href: '/services/cms/digital-marketing'},
      {label: 'Graphic Design', href: '/services/cms/graphic-design'},
      {label: 'E-commerce Marketing', href: '/services/cms/ecommerce-marketing'},
      {label: 'Pay Per Click', href: '/services/cms/pay-per-click'},
      {label: 'Web Design', href: '/services/cms/web-design'},
      {label: 'Content Writing', href: '/services/cms/content-writing'},
      {label: 'Pricing Plans', href: '/pricing'},
      {label: 'Contact Strategy Team', href: '/contact'},
    ],
    platformFocusLinks: [
      {label: 'SaaS Growth', href: '/focus-areas/saas-growth'},
      {label: 'E-commerce Brands', href: '/focus-areas/ecommerce-brands'},
      {label: 'Healthcare Marketing', href: '/focus-areas/healthcare-marketing'},
      {label: 'Education Campaigns', href: '/focus-areas/education-campaigns'},
      {label: 'Real Estate Lead Gen', href: '/focus-areas/real-estate-lead-gen'},
      {label: 'Finance & B2B', href: '/focus-areas/finance-b2b'},
      {label: 'Hospitality Visibility', href: '/focus-areas/hospitality-visibility'},
      {label: 'D2C Performance', href: '/focus-areas/d2c-performance'},
    ],
    footerDescription:
      'Save Costs And Grow Fast With Cybertech Marketing. Transforming Clicks into Conversions through AI-powered digital strategies.',
    footerCompanyLinks: [
      {label: 'About Us', href: '/about'},
      {label: 'Services', href: '/services'},
      {label: 'Careers', href: '/careers'},
      {label: 'Contact', href: '/contact'},
    ],
    footerEmail: 'info@cybertechmarketing.com',
    footerPhone: '+91 7428768779',
    footerLegalLinks: [
      {label: 'Privacy Policy', href: '/contact'},
      {label: 'Terms of Service', href: '/contact'},
    ],
  },
  groups: [
    {name: 'announcement', title: 'Announcement Bar'},
    {name: 'header', title: 'Header'},
    {name: 'platform', title: 'Platform Menu'},
    {name: 'footer', title: 'Footer'},
  ],
  fields: [
    defineField({
      name: 'announcementText',
      title: 'Announcement Text',
      type: 'string',
      group: 'announcement',
    }),
    defineField({
      name: 'announcementCtaLabel',
      title: 'Announcement CTA Label',
      type: 'string',
      group: 'announcement',
    }),
    defineField({
      name: 'announcementCtaHref',
      title: 'Announcement CTA Link',
      type: 'string',
      group: 'announcement',
    }),
    defineField({
      name: 'primaryNavLinks',
      title: 'Primary Navigation Links',
      type: 'array',
      group: 'header',
      of: [
        defineField({
          type: 'object',
          name: 'navLink',
          fields: [
            defineField({
              name: 'id',
              title: 'ID',
              type: 'string',
              description: 'Used for special items like "platform".',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'utilityLinks',
      title: 'Desktop Utility Links',
      type: 'array',
      group: 'header',
      of: [
        defineField({
          type: 'object',
          name: 'utilityLink',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'variant',
              title: 'Style Variant',
              type: 'string',
              initialValue: 'text',
              options: {
                list: [
                  {title: 'Text', value: 'text'},
                  {title: 'Filled', value: 'filled'},
                  {title: 'Outline', value: 'outline'},
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'variant',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'mobileCtaLabel',
      title: 'Mobile Contact Button Label',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'mobileCtaHref',
      title: 'Mobile Contact Button Link',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'platformAdvantageLinks',
      title: 'Platform Menu: Advantage Column',
      type: 'array',
      group: 'platform',
      of: [
        defineField({
          type: 'object',
          name: 'advantageLink',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
            defineField({name: 'href', title: 'Link', type: 'string', validation: (rule) => rule.required()}),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'href',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'platformServiceLinks',
      title: 'Platform Menu: Services Column',
      type: 'array',
      group: 'platform',
      of: [
        defineField({
          type: 'object',
          name: 'menuLink',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'href', title: 'Link', type: 'string', validation: (rule) => rule.required()}),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'platformFocusLinks',
      title: 'Platform Menu: Focus Areas Column',
      type: 'array',
      group: 'platform',
      of: [
        defineField({
          type: 'object',
          name: 'focusLink',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'href', title: 'Link', type: 'string', validation: (rule) => rule.required()}),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 3,
      group: 'footer',
    }),
    defineField({
      name: 'footerCompanyLinks',
      title: 'Footer Company Links',
      type: 'array',
      group: 'footer',
      of: [
        defineField({
          type: 'object',
          name: 'footerLink',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'href', title: 'Link', type: 'string', validation: (rule) => rule.required()}),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'footerEmail',
      title: 'Footer Email',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerPhone',
      title: 'Footer Phone',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerLegalLinks',
      title: 'Footer Legal Links',
      type: 'array',
      group: 'footer',
      of: [
        defineField({
          type: 'object',
          name: 'legalLink',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'href', title: 'Link', type: 'string', validation: (rule) => rule.required()}),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global header, menus, and footer content',
      };
    },
  },
});
