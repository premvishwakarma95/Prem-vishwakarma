import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Prem Vishwakarma | MERN Stack Developer & AI Engineer in Indore',
  description:
    'Explore the portfolio of Prem Vishwakarma, a MERN Stack Developer and AI Engineer experienced in React, Next.js, Node.js, MongoDB, and AI agents (OpenAI, Claude, LangChain, Vapi). View projects, skills, and resume.',
  keywords: [
    'Prem Vishwakarma',
    'Software Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Full Stack Developer',
    'AI Engineer',
    'AI Agent Developer',
    'Portfolio',
    'Web Developer India',
  ],
  authors: [{ name: 'Prem Vishwakarma', url: 'https://prem-vishwakarma-nine.vercel.app/' }],
  applicationName: 'Prem Vishwakarma',
  creator: 'Prem Vishwakarma',
  publisher: 'Prem Vishwakarma',
  metadataBase: new URL('https://prem-vishwakarma-nine.vercel.app/'),

  openGraph: {
    title: 'Prem Vishwakarma | MERN Stack Developer & AI Engineer',
    description:
      'Explore full-stack and AI agent projects by Prem Vishwakarma — skilled in React, Next.js, Node.js, MongoDB, and AI agents.',
    url: 'https://prem-vishwakarma-nine.vercel.app/',
    siteName: 'Prem Vishwakarma',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Prem Vishwakarma — MERN Stack Developer & AI Engineer',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Prem Vishwakarma | MERN Stack Developer & AI Engineer',
    description: 'View MERN stack and AI agent projects and the resume of Prem Vishwakarma.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },

  alternates: {
    canonical: '/',
  },

};

const SITE_URL = 'https://prem-vishwakarma-nine.vercel.app/';

// Structured data so search engines know this site is Prem Vishwakarma's
// and which profiles belong to the same person.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}#person`,
      name: 'Prem Vishwakarma',
      url: SITE_URL,
      image: `${SITE_URL}prem-vishwakarma.jpg`,
      jobTitle: 'MERN Stack Developer & AI Engineer',
      description:
        'MERN Stack Developer and AI Engineer in Indore, India, building web applications, AI agents, and API integrations.',
      email: 'mailto:premvishwakarma088@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
      worksFor: { '@type': 'Organization', name: 'IBR Infotech' },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Gujarati Innovative College, DAVV, Indore',
      },
      knowsAbout: [
        'MERN Stack',
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'AI Agents',
        'LangChain',
        'RAG',
        'OpenAI',
        'Claude',
        'Voice AI',
        'AWS',
        'Docker',
      ],
      sameAs: [
        'https://www.linkedin.com/in/premvishwakarma95/',
        'https://github.com/premvishwakarma95',
        'https://www.instagram.com/_prem_088/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: 'Prem Vishwakarma',
      alternateName: ['Prem Vishwakarma Portfolio', 'Prem Vishwakarma Developer'],
      about: { '@id': `${SITE_URL}#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${poppins.className} antialiased bg-[#0F1724] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
