import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme.provider";
import { redirect } from "next/navigation";
import { SessionProvider } from "@/providers/session.provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Emerge-x Admin Panel",
  description: "Emergex Internal Admin Panel",
};

export default function RootLayout({ children }) {

  const session = { role: 'admin' };

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider session={session}>
            {children}
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
