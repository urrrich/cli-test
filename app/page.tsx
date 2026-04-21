import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main>
      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__title">Teamo 博客</h1>
          <p className="hero__subtitle">记录思考、技术与日常</p>
        </div>
      </section>
      <div className="container">
      <h2 className="page-title">最新文章</h2>
      <div className="post-list">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="post-card"
          >
            <h2 className="post-card__title">{post.title}</h2>
            <div className="post-card__meta">
              <time>{post.date}</time>
              {post.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <p className="post-card__excerpt">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      </div>
    </main>
  );
}
