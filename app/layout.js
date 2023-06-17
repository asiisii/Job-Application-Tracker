import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Job Application Trackier',
  description: 'personal app to track job applications',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-[#E3FDFD]'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
