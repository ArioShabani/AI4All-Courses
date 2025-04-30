import type { Metadata } from 'next';
import { Geist_Sans as GeistSans, Geist_Mono as GeistMono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

const geistSans = GeistSans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AI4All Training Hub',
  description: 'Comprehensive AI & ML Training Course by AI4All',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans antialiased dark:from-gray-900 dark:to-indigo-950', // Applied gradient here
          geistSans.variable,
          geistMono.variable
        )}
      >
        {children}
        <Toaster /> {/* Add Toaster component here */}
      </body>
    </html>
  );
}
