// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Precision Farming Revolution | World Expo',
  description: 'Discover the future of sustainable agriculture',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navigation />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}