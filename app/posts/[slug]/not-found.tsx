import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container">
      <article className="post">
        <div className="post-not-found">
          <p>文章不存在 😢</p>
          <Link href="/">返回首页</Link>
        </div>
      </article>
    </main>
  );
}
