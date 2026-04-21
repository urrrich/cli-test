export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  contentHTML: string;
};

export const POSTS: Post[] = [
  {
    slug: 'claude-code-skill',
    title: 'Claude Code 的 Skill：把专业知识塞进 agent 的一种方式',
    date: '2026-04-21',
    tags: ['技术', 'AI', 'Agent', 'Claude Code'],
    excerpt:
      'Skill 是 Claude Code 里一种很"克制"的扩展机制：平时只占一行描述，真正需要时才把完整手册加载进来。这篇聊聊它跟 slash command、subagent、hook 的分工，以及它背后那个叫"渐进式披露"的想法，为什么可能比看上去更重要。',
    contentHTML: `<p>最近在折腾 Claude Code 的扩展机制，发现它们四个——<strong>slash command</strong>、<strong>subagent</strong>、<strong>hook</strong>、<strong>Skill</strong>——分工其实挺清楚的。其中 Skill 是我后知后觉才意识到"有点东西"的那个。</p>
<p>它不炫技，不像 hook 那样能在事件里插一脚，也不像 subagent 那样开一个独立的小宇宙。它只是安安静静地待在某个目录里，等模型自己决定要不要翻开它。</p>
<h2>一、Skill 是什么</h2>
<p>最小的形态，大概是这样一句话可以说清：<em>一个目录，加一份说明文件，告诉模型"我是干嘛的、什么时候该用我"</em>。</p>
<p>真正写过的人会发现，门槛低到有点不习惯——没有 SDK，没有注册流程，没有声明式的 schema。你写一份像"给新人看的操作手册"那样的文档，塞到约定的位置，模型就会在合适的时候把它读进来。</p>
<p>重点在于：<strong>加载动作是模型自己发起的</strong>。不是用户敲命令触发，也不是事件到达时自动执行，而是模型看着手头的任务，觉得"嗯，这事我好像需要翻一下那本手册"，才去翻。</p>
<h2>二、跟另外三种扩展方式的分工</h2>
<p>放在一起看，会清楚很多：</p>
<ul>
<li><strong>Slash command</strong>：用户主动触发。我知道我要干什么，打一串命令让 agent 照做。控制权在人手里。</li>
<li><strong>Subagent</strong>：任务外包。开一个独立上下文的子 agent 去跑一段活，跑完只把结论带回来，主线程不被污染。控制权在编排者手里。</li>
<li><strong>Hook</strong>：事件驱动。在工具调用前后、会话开始结束这些时机上，让 harness（而不是模型）执行一段确定性的逻辑。控制权在系统手里。</li>
<li><strong>Skill</strong>：按需知识注入。平时不占地方，模型判断需要时才加载。控制权在模型手里。</li>
</ul>
<p>四种扩展，对应着四种"谁来决定要不要做这件事"。Skill 是唯一一个把判断权交给模型自己的。</p>
<h2>三、渐进式披露：这套机制真正聪明的地方</h2>
<p>Skill 背后有一个很朴素但容易被忽略的想法，叫 <strong>progressive disclosure</strong>——渐进式披露。</p>
<p>道理说穿了就一句：<em>上下文是稀缺资源，不要一次性把所有知识都塞进去</em>。</p>
<p>平时进入模型视野的，只是一行 description——"这个 Skill 是干嘛的"。几十个 token。几十个 Skill 并排放着，成本也不过是一页纸的介绍目录。</p>
<p>真正需要时，模型才会把完整的 SKILL.md 以及附带的示例、脚本、模板拉进上下文。需要才加载，用完就过去。</p>
<p>这跟过去那种"把所有 system prompt 都堆一块"的做法，完全不是一个思路。前者是"事先把百科全书全文背下来"，后者是"先看目录，用的时候再翻到那一页"。人类做事就是后一种方式，让 agent 也这样做，反而是更自然的那个选择。</p>
<h2>四、它把"专业知识"从模型里拿了出来</h2>
<p>再往深一层想，Skill 做的事情，是把"领域知识 / 操作手册 / 团队规约"这类东西，从模型权重里<strong>解耦</strong>出来。</p>
<p>过去你想让一个通用模型懂你们公司的发布流程，选项不多：要么在每次对话里反复解释，要么指望 fine-tune，要么塞进越来越胖的 system prompt。这些都挺别扭的——知识长在模型身上，或者长在一条无法版本化的长 prompt 里。</p>
<p>Skill 提供了第四种：<strong>把知识写成文件</strong>。</p>
<p>文件意味着什么？意味着它可以被 git 追踪，可以 code review，可以在团队之间共享，可以随着流程变化迭代，可以被新人直接读懂。它是一份"长在仓库里的专业能力"，而不是"长在某个人 prompt 里的玄学"。</p>
<p>换句话说，Skill 把 agent 的能力扩展问题，变成了一个<em>软件工程问题</em>——而软件工程，人类已经做了五十年，是我们最熟悉的那种复杂度。</p>
<h2>五、一个不算结论的结论</h2>
<p>我越来越觉得，判断一个 agent 平台会不会走远，有个挺好用的标尺：<strong>它怎么处理"专业知识"的注入</strong>。</p>
<ul>
<li>如果答案是"fine-tune 一个行业版模型"，那这个生态不太会有外部贡献者。</li>
<li>如果答案是"往 system prompt 里堆"，那它迟早被上下文长度卡住。</li>
<li>如果答案是"做成可按需加载的文件"，那每一个写过 README 的人，都可能成为这个 agent 的能力贡献者。</li>
</ul>
<p>Skill 给出的是第三种答案。形式上它很轻，轻到第一眼容易看漏；但它赌的那个方向——<em>让 agent 像人一样，平时只记目录，用时才翻手册</em>——可能正是 agent 扩展性的长期解。</p>`,
  },
  {
    slug: 'what-is-a-harness',
    title: '聊聊 Agent 的"Harness"：模型之外的那一层',
    date: '2026-04-21',
    tags: ['技术', 'AI', 'Agent'],
    excerpt:
      '很多人讨论 AI Agent 时，眼睛都盯着模型本身。但真正决定一个 Agent 好不好用的，往往是模型外面那一层——harness。这篇聊聊它到底是什么、在做什么，以及为什么它比想象中重要。',
    contentHTML: `<p>最近跟朋友聊 AI Agent，发现一个词越来越常被提起：<strong>harness</strong>。直译是"马具"、"挽具"，用在 agent 语境里，大概可以理解成"把模型套进一个可控、可用的工作系统里的那一层"。</p>
<p>Claude Code、Cursor、各种 coding agent 的差距，很大一部分不在模型，而在 harness。</p>
<h2>一、harness 到底在做什么</h2>
<p>如果你只看 API 文档，一个 LLM 的输入输出其实很简单：给它消息、给它工具定义，它吐回文本和 tool call。真正复杂的部分，都发生在这个最小循环<em>外面</em>：</p>
<ul>
<li><strong>上下文管理</strong>：对话越来越长怎么办？哪些要保留、哪些可以压缩、哪些该丢掉？</li>
<li><strong>工具编排</strong>：模型说要调用 Read、Bash、Grep，谁真正去执行？执行结果怎么回填？并行调用怎么调度？</li>
<li><strong>权限与安全</strong>：哪些命令可以直接放行，哪些要弹确认，哪些必须拒绝？</li>
<li><strong>Hook 机制</strong>：在工具调用前后、会话开始结束、用户提交之前，能不能插入用户自定义逻辑？</li>
<li><strong>状态持久化</strong>：记忆、设置、权限、transcripts，这些跨会话的东西存在哪、怎么加载？</li>
<li><strong>错误恢复</strong>：工具失败了、context 爆了、用户中途 Ctrl-C 了，系统怎么优雅处理？</li>
</ul>
<p>这些事情加起来，就是 harness。模型是发动机，harness 是车身、悬挂、变速箱和方向盘。</p>
<h2>二、为什么同一个模型装进不同 harness，体感差这么多</h2>
<p>我自己切换过几个 coding agent，用的底层模型其实差不多。但用起来的感觉，差距大到不像一个时代的产品。</p>
<p>差距最明显的几个地方：</p>
<ol>
<li><strong>上下文策略</strong>：好的 harness 知道什么时候该重读文件、什么时候该信任之前的读取、什么时候该主动总结长对话。差的 harness 要么每次都重读浪费 token，要么信息过期了还在用旧数据。</li>
<li><strong>工具设计</strong>：同样是"编辑文件"，是一个臃肿的通用 <code>write_file</code>，还是一套细分的 <code>Read</code> / <code>Edit</code> / <code>Write</code>？工具越符合模型的"思考颗粒度"，模型就越少犯错。</li>
<li><strong>并行度</strong>：模型理论上可以一次发多个 tool call，但 harness 敢不敢真的并发执行？有没有处理好竞态？这直接决定了"查 5 个文件"是 30 秒还是 3 秒。</li>
<li><strong>失败处理</strong>：命令报错之后，是把原始 stderr 糊一脸塞回去，还是做一次结构化处理、给模型一个"可以下一步的"错误信息？</li>
</ol>
<h2>三、harness 的隐性约束</h2>
<p>有一点很容易被忽略：<strong>harness 不只是在帮模型，也在约束模型</strong>。</p>
<p>它决定了：</p>
<ul>
<li>模型能看到什么（哪些文件、哪些历史、哪些外部数据）</li>
<li>模型能做什么（哪些工具可用、哪些动作需要人类确认）</li>
<li>模型的输出会如何被解释（JSON 校验、格式强制、重试策略）</li>
</ul>
<p>同一个 Claude Opus 4.7，装在一个严格的 harness 里可能像个一本正经的高级工程师，装在一个宽松的 harness 里可能像个喜欢炫技的实习生。并不是模型人格变了，是它被允许表达的空间变了。</p>
<h2>四、写 harness 的人，正在做一件被低估的事</h2>
<p>过去两年，行业里的注意力几乎全在"模型训得多大、多聪明"上。但随着模型能力趋于饱和，<em>harness 的工程质量</em>正在成为新的分水岭。</p>
<p>一个好 harness 的设计者，需要同时理解：</p>
<ul>
<li>模型的行为偏好（它在什么时候会偷懒、会幻觉、会过度保守）</li>
<li>用户的真实工作流（什么是高频操作、什么是危险动作）</li>
<li>系统工程的权衡（缓存、并发、错误边界、可观测性）</li>
</ul>
<p>这三样东西的交集不大，能把它们都做好的团队更少。</p>
<h2>五、一个不算结论的结论</h2>
<p>下次评估一个 AI 产品，别只看它用了什么模型。问问它的 harness 长什么样：</p>
<ul>
<li>上下文怎么管理？</li>
<li>工具集合是不是克制又够用？</li>
<li>能不能 hook 进我自己的工作流？</li>
<li>出错的时候表现怎么样？</li>
</ul>
<p>模型决定了<strong>上限</strong>，harness 决定了<strong>你每天摸到的那部分</strong>。而我们大部分时间，其实都在和后者打交道。</p>`,
  },
];

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
