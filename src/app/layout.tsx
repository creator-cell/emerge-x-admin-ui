import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/layout/sidebar';
import { Navbar } from '@/components/layout/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emerge-X Dashboard',
  description: 'Emerge-X Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full relative">
          <Navbar />
          <div className="hidden h-[calc(100vh-64px)] md:flex md:w-64 md:flex-col md:fixed md:bottom-0 z-[80] bg-white border-r">
            <Sidebar />
          </div>
          <main className="md:pl-64 pt-16 bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}