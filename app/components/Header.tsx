import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="site-title">
          Sher 的博客
        </Link>
        <nav className="site-nav">
          <Link href="/">首页</Link>
          <Link href="/about">关于</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
