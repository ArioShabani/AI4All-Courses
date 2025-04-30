import type { Metadata } from 'next';
// Correctly import Geist fonts from the 'geist' package
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

// Font variables are applied directly to the html tag below

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
    // Apply font variables directly to the html tag for global availability
    <html lang="en" className={cn("h-full", GeistSans.variable, GeistMono.variable)}>
      <body
        className={cn(
          'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans antialiased dark:from-gray-900 dark:to-indigo-950', // Applied gradient here
          // Font variables are now on the html tag, font-sans will pick up --font-geist-sans
        )}
      >
        {children}
        <Toaster /> {/* Add Toaster component here */}
      </body>
    </html>
  );
}
