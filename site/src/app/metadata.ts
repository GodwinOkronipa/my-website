import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Godwin Okronipa Exornam | Product Manager & AI Engineer',
  description: 'Godwin Okronipa Exornam - Experienced Product Manager, Systems Analyst, and AI Engineer specializing in ethical and responsible AI solutions. Explore my portfolio and connect with me.',
  keywords: [
    'Godwin Okronipa',
    'Godwin Exornam',
    'Product Manager',
    'AI Engineer',
    'Systems Analyst',
    'Ethical AI',
    'Responsible AI',
    'Tech Portfolio'
  ],
  authors: [{ name: 'Godwin Okronipa Exornam' }],
  creator: 'Godwin Okronipa Exornam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://godwinokronipa.github.io/my-website',
    title: 'Godwin Okronipa Exornam | Product Manager & AI Engineer',
    description: 'Experienced Product Manager, Systems Analyst, and AI Engineer specializing in ethical and responsible AI solutions.',
    siteName: 'Godwin Okronipa Exornam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Godwin Okronipa Exornam | Product Manager & AI Engineer',
    description: 'Experienced Product Manager, Systems Analyst, and AI Engineer specializing in ethical and responsible AI solutions.',
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google292271a51eb8fd7f',
  },
};

export default metadata;
