import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import CustomCursor from '@/components/CustomCursor';
import ClientLayout from '@/components/ClientLayout';

const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'StudentsRoute - Your Gateway to Global Education',
  description: 'StudentsRoute helps students achieve their dreams of studying abroad with expert guidance and support.',
  keywords: 'study abroad, international education, student visa, university admission, IELTS coaching, education consultancy',
  authors: [{ name: 'StudentsRoute' }],
  openGraph: {
    title: 'StudentsRoute - Your Gateway to Global Education',
    description: 'StudentsRoute helps students achieve their dreams of studying abroad with expert guidance and support.',
    url: 'https://studentsroute.com',
    siteName: 'StudentsRoute',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'StudentsRoute - Study Abroad Consultancy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudentsRoute - Your Gateway to Global Education',
    description: 'StudentsRoute helps students achieve their dreams of studying abroad with expert guidance and support.',
    images: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://studentsroute.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#44a27a" />
      </head>
      <body className={`${poppins.variable} font-poppins`}>
        <CustomCursor />
        <ClientLayout>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}