import type { Metadata } from 'next';
// Correctly import Geist fonts from the 'geist' package
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

// Initialize the font variables
const geistSans = GeistSans({
  variable: '--font-geist-sans',
  subsets: ['latin'], // Add subsets if needed, though Geist often handles this automatically
});

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'], // Add subsets if needed
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
          geistSans.variable, // Use the font variable class
          geistMono.variable  // Use the font variable class
        )}
      >
        {children}
        <Toaster /> {/* Add Toaster component here */}
      </body>
    </html>
  );
}
