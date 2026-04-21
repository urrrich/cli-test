import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { POSTS, getPostBySlug } from '@/lib/posts';

type Params = { slug: string };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: '文章不存在 · Sher 的博客' };
  return { title: `${post.title} · Sher 的博客` };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="container">
      <article className="post">
        <Link href="/" className="back-link">
          ← 返回首页
        </Link>
        <h1 className="post__title">{post.title}</h1>
        <div className="post__meta">
          <time>{post.date}</time>
          {post.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div
          className="post__content"
          dangerouslySetInnerHTML={{ __html: post.contentHTML }}
        />
      </article>
    </main>
  );
}
