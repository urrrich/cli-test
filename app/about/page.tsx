import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于 · Sher 的博客',
};

export default function AboutPage() {
  return (
    <main className="container">
      <article className="about">
        <h1 className="page-title">关于我</h1>

        <section className="about__section">
          <p className="about__bio">
            你好，我是 Sher，一名热爱技术与写作的开发者。我喜欢把思考过的问题、
            踩过的坑、读过的书都整理成文字，既是给自己的备忘，也希望能帮到偶然路过的你。
            这个博客是我的个人空间，记录代码、生活以及一切让我好奇的事。
          </p>
        </section>

        <section className="about__section">
          <h2>技能</h2>
          <ul className="skills">
            <li>前端开发：HTML / CSS / JavaScript / TypeScript</li>
            <li>后端开发：Node.js / Python / Go</li>
            <li>工具与工程：Git / Docker / CI/CD</li>
            <li>设计与产品：信息架构 / 交互设计 / 用户研究</li>
            <li>写作与沟通：技术文档 / 博客写作</li>
          </ul>
        </section>

        <section className="about__section">
          <h2>联系方式</h2>
          <ul className="contacts">
            <li>
              <strong>GitHub：</strong>
              <a
                href="https://github.com/your-handle"
                target="_blank"
                rel="noopener"
              >
                github.com/your-handle
              </a>
            </li>
            <li>
              <strong>Email：</strong>
              <a href="mailto:you@example.com">you@example.com</a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
