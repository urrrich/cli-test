import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeScript from './components/ThemeScript';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sher 的博客',
  description: '一个纯静态的个人博客，记录代码、生活以及一切让我好奇的事。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <ThemeScript />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
