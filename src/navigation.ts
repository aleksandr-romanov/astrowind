import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [],
  actions: [],
};

export const footerData = {
  links: [
    {
      links: [
        { text: 'Blog', href: '#' }
        ]
    },
    {
      links: [
       { text: 'Support', href: 'mailto:support@budgethound.app' }
       ]
    },
    {
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy')  } 
      ]
    }
  ],
  secondaryLinks: [],
  socialLinks: []
};
