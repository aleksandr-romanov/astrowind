import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [],
  actions: [],
};

export const footerData = {
  links: [
    {
      links: [
        { text: 'Blog', href: getPermalink('/blog') }
        ]
    },
    {
      links: [
       { text: 'Support', href: 'mailto:support@budgethound.app' }
       ]
    },
    {
      links: [
        { text: 'Terms', href: getPermalink('/terms.pdf') },
        { text: 'Privacy Policy', href: getPermalink('/privacy.pdf') } 
      ]
    }
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `© 2021-2025 by Aleksandr Romanov`,
};
