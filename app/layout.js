import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Prem Vishwakarma | MERN Stack Developer Portfolio',
  description:
    'Explore the portfolio of Prem Vishwakarma, a MERN Stack Developer experienced in React, Node.js, Express, and MongoDB. View projects, skills, and resume.',
  keywords: [
    'Prem Vishwakarma',
    'Software Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Full Stack Developer',
    'Portfolio',
    'Web Developer India',
  ],
  authors: [{ name: 'Prem Vishwakarma', url: 'https://prem-vishwakarma-nine.vercel.app' }],
  creator: 'Prem Vishwakarma',
  publisher: 'Prem Vishwakarma',
  metadataBase: new URL('https://prem-vishwakarma-nine.vercel.app'),

  openGraph: {
    title: 'Prem Vishwakarma | MERN Stack Developer',
    description:
      'Explore full-stack projects and experience of Prem Vishwakarma — skilled in React, Node.js, Express & MongoDB.',
    url: 'https://prem-vishwakarma-nine.vercel.app',
    siteName: 'Prem Vishwakarma Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prem Vishwakarma Portfolio Preview',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Prem Vishwakarma | MERN Stack Developer',
    description: 'View MERN stack projects and resume of Prem Vishwakarma.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-[#0F1724] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
