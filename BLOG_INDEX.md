# Sher 的博客 · 文章索引

> 自动汇总自 `lib/posts.ts`，共 **21** 篇。按日期倒序 + 主题分组。

## 统计一览

| 维度 | 数量 |
|---|---|
| 文章总数 | 21 |
| 最新日期 | 2026-04-22 |
| 最早日期 | 2026-04-21 |
| 主题分区 | AI/Agent（11）· 前端（8）· 投资研报（1）· 公司观察（1）· 职业思考（1） |

---

## 按日期倒序

### 2026-04-22

| Slug | 标题 | 标签 |
|---|---|---|
| `anatomy-of-a-harness` | 解剖一个 Agent Harness：七个零件与它们的设计空间 | 技术 · AI · Agent · Harness |
| `openclaw-personal-ai-assistant` | OpenClaw：把 AI 助手装进你每天在用的那些聊天软件里 | AI · Agent · OpenClaw · 开源 · 效率工具 |
| `programmers-survival-in-ai-era` | AI 时代程序员该如何自保 | AI · 程序员 · 职业发展 · 思考 |
| `floating-point-miracles` | 浮点奇迹：让每个不甘平凡的人拥有顶级 AI 生产力 | AI · Agent · 创业 · 生产力 · Teamo |

### 2026-04-21

| Slug | 标题 | 标签 |
|---|---|---|
| `pop-mart-equity-research` | 泡泡玛特（9992.HK）研报：从盲盒公司到全球 IP 运营商 | 研报 · 投资 · 消费 · IP · 泡泡玛特 |
| `vue-3-reactivity-deep-dive` | 深入理解 Vue 3 的响应式原理：Proxy 如何取代 Object.defineProperty | 技术 · 前端 · Vue · 原理 · JavaScript |
| `vue-3-getting-started` | Vue 3 入门：从 Options API 到 Composition API | Vue · 前端 · 技术 · JavaScript |
| `skills-as-shared-primitive` | Skill 作为一种新的"共享原子"：从 npm 到 agent 生态 | 技术 · AI · Agent · Ecosystem · Claude Code |
| `writing-good-skills` | 怎么写一个好用的 Skill：一份给自己的复盘 | 技术 · AI · Agent · Claude Code · Skill |
| `claude-code-skill` | Claude Code 的 Skill：把专业知识塞进 agent 的一种方式 | 技术 · AI · Agent · Claude Code |
| `what-is-a-harness` | 聊聊 Agent 的"Harness"：模型之外的那一层 | 技术 · AI · Agent |
| `writing-your-first-skill` | 动手写第一个 Skill：一份踩过坑之后的实操笔记 | 技术 · AI · Agent · Claude Code |
| `skill-vs-mcp-vs-rag-vs-finetune` | 给 agent 喂知识的四条路：Skill、MCP、RAG、Fine-tune 到底该怎么选 | 技术 · AI · Agent · MCP · RAG |
| `skill-anti-patterns` | Skill 的反模式：哪些东西不该写成 Skill | 技术 · AI · Agent · Claude Code · Skill |
| `react-hooks-guide` | React Hooks 入门与最佳实践 | React · 前端 · Hooks |
| `react-server-components` | React Server Components 深度解析 | React · RSC · Next.js |
| `react-getting-started` | React 基础入门：组件、JSX、props、state 与单向数据流 | React · 前端 · 入门 · JavaScript |
| `react-19-new-features` | React 19 的新特性与变化：Actions、useOptimistic 与 use() | React · 前端 · React 19 |
| `react-hooks-deep-dive` | React Hooks 深入：从实现原理到闭包陷阱与自定义 Hook | React · Hooks · 前端 · 原理 |
| `rsc-client-boundary` | RSC 与 Client Component 的边界设计：'use client' / 'use server' 的心智模型 | React · Next.js · RSC |
| `react-19-and-rsc-mental-model` | React 19 新特性与 RSC 实战心智模型：use、Actions、useOptimistic 一次讲透 | React · 前端 · React 19 · RSC · Server Components |
| `react-hooks-internals` | 从源码和调度视角理解 React Hooks 的本质 | React · Hooks · 前端 · 原理 · Fiber |

---

## 按主题分组

### 🤖 AI / Agent（概念与生态）

- **[what-is-a-harness]** 《聊聊 Agent 的"Harness"：模型之外的那一层》
  很多人讨论 AI Agent 时，眼睛都盯着模型本身。但真正决定一个 Agent 好不好用的，往往是模型外面那一层——harness。这篇聊聊它到底是什么、在做什么，以及为什么它比想象中重要。

- **[anatomy-of-a-harness]** 《解剖一个 Agent Harness：七个零件与它们的设计空间》
  把一个典型的 coding agent harness 拆成七个零件——事件循环、上下文管理、工具层、权限系统、Hook、状态持久化、错误恢复——逐一聊聊它们在做什么、有哪些设计选择、以及踩过的坑。配套前一篇《聊聊 Agent 的 Harness》一起读更佳。

- **[openclaw-personal-ai-assistant]** 《OpenClaw：把 AI 助手装进你每天在用的那些聊天软件里》
  自托管的个人 AI 助手，主打"任何系统、任何平台、用龙虾的方式" 🦞 —— 不造新 App，而是钻进你已经在用的 WhatsApp、Telegram、Slack、Discord、飞书、微信、iMessage 里，以"多一个联系人"的形态出现。

- **[floating-point-miracles]** 《浮点奇迹：让每个不甘平凡的人拥有顶级 AI 生产力》
  浮点奇迹（北京）科技有限公司的公司观察——5 人核心团队、从 AskManyAI 到多 Agent 协作平台 Teamo，践行"赋能知识工作者，驱动未来生产力"的使命。

### 🧩 Skill 系列（Claude Code 扩展机制）

> 一条从入门到反思的完整学习链路。

1. **[claude-code-skill]** 《Claude Code 的 Skill：把专业知识塞进 agent 的一种方式》
   Skill 跟 slash command / subagent / hook 的分工，以及背后"渐进式披露"的想法。

2. **[writing-your-first-skill]** 《动手写第一个 Skill：一份踩过坑之后的实操笔记》
   目录怎么摆、SKILL.md 怎么写、脚本和模板怎么组织、调试"为什么没加载"的思路。

3. **[writing-good-skills]** 《怎么写一个好用的 Skill：一份给自己的复盘》
   description 为什么是命门、SKILL.md 该长什么样、为什么要把 Skill 当成 onboarding 文档来写。

4. **[skill-anti-patterns]** 《Skill 的反模式：哪些东西不该写成 Skill》
   真正的坑不在"怎么把 Skill 写好"，而在"这件事压根就不该写成 Skill"。

5. **[skill-vs-mcp-vs-rag-vs-finetune]** 《给 agent 喂知识的四条路：Skill、MCP、RAG、Fine-tune 到底该怎么选》
   四条路的成本曲线、失效模式和团队协作差异——以及为什么 Skill 在不少场景下被严重低估。

6. **[skills-as-shared-primitive]** 《Skill 作为一种新的"共享原子"：从 npm 到 agent 生态》
   从生态视角聊聊 Skill 为什么可能比它看起来更大。

### ⚛️ React / 前端

**入门**
- **[react-getting-started]** 《React 基础入门：组件、JSX、props、state 与单向数据流》

**Hooks 三部曲**
- **[react-hooks-guide]** 《React Hooks 入门与最佳实践》
- **[react-hooks-deep-dive]** 《React Hooks 深入：从实现原理到闭包陷阱与自定义 Hook》
- **[react-hooks-internals]** 《从源码和调度视角理解 React Hooks 的本质》

**React 19 与 RSC**
- **[react-19-new-features]** 《React 19 的新特性与变化：Actions、useOptimistic 与 use()》
- **[react-server-components]** 《React Server Components 深度解析》
- **[rsc-client-boundary]** 《RSC 与 Client Component 的边界设计：'use client' / 'use server' 的心智模型》
- **[react-19-and-rsc-mental-model]** 《React 19 新特性与 RSC 实战心智模型：use、Actions、useOptimistic 一次讲透》

### 🟢 Vue

- **[vue-3-getting-started]** 《Vue 3 入门：从 Options API 到 Composition API》
- **[vue-3-reactivity-deep-dive]** 《深入理解 Vue 3 的响应式原理：Proxy 如何取代 Object.defineProperty》

### 💼 职业 / 思考

- **[programmers-survival-in-ai-era]** 《AI 时代程序员该如何自保》
  什么能力是 AI 替代不了的，什么姿势能让你在 AI 浪潮里借势起飞。

### 📈 投资 / 研报

- **[pop-mart-equity-research]** 《泡泡玛特（9992.HK）研报：从盲盒公司到全球 IP 运营商》
  业务结构、IP 矩阵、财务与估值、风险点——一次独立思考的草稿。

---

## 标签云（出现频次）

| 标签 | 次数 |
|---|---|
| 技术 | 11 |
| AI | 10 |
| Agent | 10 |
| 前端 | 8 |
| React | 8 |
| Claude Code | 5 |
| Hooks | 4 |
| Skill | 3 |
| RSC | 3 |
| React 19 | 2 |
| Vue | 2 |
| JavaScript | 3 |
| Next.js | 2 |
| 原理 | 3 |
| 其他 | Harness · OpenClaw · 开源 · 效率工具 · 程序员 · 职业发展 · 思考 · 创业 · 生产力 · Teamo · 研报 · 投资 · 消费 · IP · 泡泡玛特 · Ecosystem · MCP · RAG · 入门 · Server Components · Fiber |

---

*Generated from `lib/posts.ts` on 2026-04-22.*
