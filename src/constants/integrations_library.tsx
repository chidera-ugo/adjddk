import zero from '/public/assets/product/integrations/zero.jpg';
import zapier from '/public/assets/product/integrations/zapier.jpg';
import mono from '/public/assets/product/integrations/mono.jpg';
import woo_commerce from '/public/assets/product/integrations/woo_commerce.jpg';
import free_agent from '/public/assets/product/integrations/free_agent.jpg';
import zoho from '/public/assets/product/integrations/zoho.jpg';
import fresh_books from '/public/assets/product/integrations/fresh_books.jpg';
import shopify from '/public/assets/product/integrations/shopify.jpg';
import sage from '/public/assets/product/integrations/sage.jpg';
import xero from '/public/assets/product/integrations/xero.jpg';
import qb from '/public/assets/product/integrations/qb.jpg';
import slack from '/public/assets/product/integrations/slack.jpg';
import { StaticImageData } from 'next/image';

export type IntegrationLibraryItem = {
  image: StaticImageData;
  name: string;
  description: string;
};

export const integrationsLibrary: Record<string, IntegrationLibraryItem[]> = {
  accounting: [
    {
      image: xero,
      name: 'Xero',
      description: `Save time and work smarter by synchronizing your Jitaku Business data with Xero`,
    },
    {
      image: sage,
      name: 'Sage',
      description:
        'Easy to get started, just as easy to use. Get your business accounts sorted with Sage Accounting.',
    },
    {
      image: qb,
      name: 'Quick Books',
      description:
        'Manage everything in one place, from payments to payroll and save hours every month on admin.',
    },
    {
      image: zoho,
      name: 'Zoho Books',
      description: `Automatically import and reconcile your Jitaku transactions by connecting to Zoho Books.`,
    },
    {
      image: free_agent,
      name: 'FreeAgent',
      description: `Award-winning accounting software for small businesses.`,
    },
    {
      image: fresh_books,
      name: 'FreshBooks',
      description: `Billing and Accounting Software Built for Business Owners`,
    },
  ],
  payments: [
    {
      image: shopify,
      name: 'Shopify',
      description: `Get paid via your Shopify eStore using Jitaku Plugin`,
    },
    {
      image: mono,
      name: 'Bank Integrations',
      description: `Seamlessly connect all your accounts for effortless direct debit management.`,
    },
    {
      image: woo_commerce,
      name: 'WooCommerce',
      description: `Get paid via your WooCommerce eStore using Jitaku Plugin`,
    },
  ],
  automation: [
    {
      image: zapier,
      name: 'Zapier',
      description: `Connect your Jitaku account to 1000’s of apps on Zapier and automate the repetitive stuff.`,
    },
    {
      image: slack,
      name: 'Slack',
      description: `Your business accounts can now speak! Setup rules to receive real-time Slack notifications for events happening in your accounts.`,
    },
  ],
  expenses: [
    {
      image: zero,
      name: 'Zero',
      description: `Save time and work smarter by synchronizing your Jitaku Business data with Xero`,
    },
  ],
};
