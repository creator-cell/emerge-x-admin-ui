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
        <div className="h-screen flex flex-col">
          {/* Navbar */}
          <Navbar />
          <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="hidden h-full md:flex md:w-64 mt-12 md:flex-col md:fixed bg-white border-r z-[80]">
              <Sidebar />
            </aside>
            {/* Main Content */}
            <main className="flex-1 md:pl-64 pt-16 bg-[#f9fafb] overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
