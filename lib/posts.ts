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
    slug: 'openclaw-personal-ai-assistant',
    title: 'OpenClaw：把 AI 助手装进你每天在用的那些聊天软件里',
    date: '2026-04-22',
    tags: ['AI', 'Agent', 'OpenClaw', '开源', '效率工具'],
    excerpt:
      'OpenClaw 是一个自托管的个人 AI 助手，主打"任何系统、任何平台、用龙虾的方式" 🦞 —— 它不造一个新 App，而是钻进你已经在用的 WhatsApp、Telegram、Slack、Discord、飞书、微信、iMessage 里，以"多一个联系人"的形态出现。这篇文章聊聊它是什么、为什么值得关注，以及它和主流 AI 助手的差别。',
    contentHTML: `<h2>为什么又冒出来一个 AI 助手</h2>
<p>打开手机看看，你每天其实不缺"AI 助手"：ChatGPT、Claude、Gemini、豆包、Kimi……一堆 App 在抢你的点击。问题是，它们都有自己的界面、自己的账号、自己的上下文孤岛。你要用它，就要<strong>切换到另一个 App</strong>，把想问的事情重新再说一遍。</p>
<p>OpenClaw 的切入点很直接：<strong>不做新 App，把助手塞进你已经在用的聊天软件。</strong> 你给它发消息像给朋友发消息一样，它在 WhatsApp / Telegram / Slack / Discord / 飞书 / 微信里作为一个"联系人"回你。你不用改变任何使用习惯，只是多了一个特别聪明、而且永远在线的"人"在列表里。</p>
<h2>OpenClaw 是什么</h2>
<p>用官方的一句话描述：<em>"Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞"</em></p>
<p>拆开看：</p>
<ul>
<li><strong>Your own personal</strong> — 自托管，你自己跑。模型、数据、聊天记录都在你自己的机器 / 服务器上，不走第三方 SaaS</li>
<li><strong>Any OS / Any Platform</strong> — macOS、iOS、Android 都支持语音收听和播报；Canvas 能实时渲染一个你控制的可视画布</li>
<li><strong>The lobster way</strong> — 吉祥物是龙虾 🦞，这是它的社区文化梗，别多想</li>
</ul>
<p>本质上，OpenClaw 是一个"<strong>网关 + 工作区 + 渠道 + 技能</strong>"的开源框架。你接上模型（GPT-5 系列、Claude、本地模型都行），配好你要接入的聊天渠道，它就在那些聊天软件里以你的助手身份出现。</p>
<h2>支持的聊天渠道</h2>
<p>这大概是 OpenClaw 最让人惊讶的部分。你能想到的几乎都在：</p>
<ul>
<li><strong>国际主流</strong>：WhatsApp、Telegram、Slack、Discord、Signal、iMessage、Microsoft Teams、Google Chat、Matrix、IRC</li>
<li><strong>国内主流</strong>：飞书、微信、QQ</li>
<li><strong>区域 / 小众</strong>：LINE、Zalo、Zalo Personal、Mattermost、Nextcloud Talk、BlueBubbles、Synology Chat、Nostr、Tlon、Twitch、WebChat</li>
</ul>
<p>这种"渠道无差别"的野心在同类项目里并不多见。大部分 AI 助手要么只做 Web / App，要么只做一两个 IM Bot。OpenClaw 把"渠道"本身抽象成了一层可插拔的 provider。</p>
<h2>快速上手</h2>
<p>运行环境推荐 <strong>Node 24</strong>，最低要求 Node 22.16+。安装完之后最关键的一条命令是：</p>
<ul>
<li><code>openclaw onboard</code> — 在终端里一步步引导你配置 <strong>gateway（网关）</strong>、<strong>workspace（工作区）</strong>、<strong>channels（渠道）</strong> 和 <strong>skills（技能）</strong></li>
</ul>
<p>这四个概念基本就是 OpenClaw 的心智模型：</p>
<ul>
<li><strong>Gateway</strong>：面向外部世界的接入层，负责接收各渠道的消息并路由</li>
<li><strong>Workspace</strong>：你的工作空间，存配置、上下文、记忆</li>
<li><strong>Channels</strong>：具体的聊天平台接入（WhatsApp / 飞书 / iMessage……）</li>
<li><strong>Skills</strong>：技能——助手能干什么，能调什么工具</li>
</ul>
<h2>近期的版本动向</h2>
<p>2026.4.14 版本是一次质量为主的更新，重点在两块：</p>
<ul>
<li><strong>Model provider</strong>：对 GPT-5 家族的"显式轮次"行为做了不少改进，让多轮对话在新模型下更稳定</li>
<li><strong>Channel provider</strong>：修复了一批渠道接入层的问题，底层 core 做了重构，整体性能有提升</li>
</ul>
<p>紧接着 2026.4.20 又发了 beta.1，节奏相当快，说明项目还在活跃迭代期。</p>
<h2>生态与周边</h2>
<p>OpenClaw 组织下已经不止一个仓库，周边生态在慢慢长起来：</p>
<ul>
<li><strong>awesome-claws</strong>（LHL3341/awesome-claws）— 按使用场景整理的产品、技能、社区资源合集，🦞 风格浓厚，适合入门</li>
<li><strong>ClawWork</strong>（HKUDS/ClawWork）— 把 OpenClaw 当成"AI 同事"的工作流项目，官方描述是"11 小时赚了 15K 美金"，营销味挺重但思路很有意思</li>
<li><strong>OpenClaw-RL</strong>（Gen-Verse/OpenClaw-RL）— 通过自然语言训练任意 Agent 的强化学习项目</li>
</ul>
<h2>它适合谁</h2>
<p>我的直觉是 OpenClaw 并不是给"随便试试 AI"的普通用户做的。它最合适的人群是：</p>
<ul>
<li>对<strong>数据隐私</strong>敏感，不想把聊天都交给 SaaS 厂商的人</li>
<li>已经深度依赖某个 IM（尤其是 Slack / Telegram / 飞书）做工作流的人</li>
<li>喜欢<strong>自托管</strong>、自己折腾基础设施的开发者</li>
<li>想做多 Agent / 多渠道联动，需要一个"消息总线 + 技能框架"底座的人</li>
</ul>
<p>如果你属于以上任何一类，OpenClaw 至少值得你花半小时跑一遍 <code>openclaw onboard</code>。</p>
<h2>和"云端 AI 助手"的根本差别</h2>
<p>最后说一点我自己的感受。ChatGPT / Claude.ai 这类产品的心智是"<strong>你来到 AI 的场子里</strong>"——你打开它们的 App 或网页，进入它们设计好的交互。OpenClaw 的心智刚好反过来："<strong>AI 走进你的场子里</strong>"——它不抢你的注意力，而是伪装成你联系人列表里的一个人，在你已有的工作流里沉默地工作。</p>
<p>这两种哲学没有绝对优劣，但随着 AI 工具越来越多，<strong>"不要让我再多装一个 App"</strong> 可能会成为越来越强的诉求。从这个角度看，OpenClaw 踩的是一个挺聪明的方向。</p>
<h2>小结</h2>
<ul>
<li>OpenClaw = 自托管 + 渠道无差别 + 技能可扩展 的个人 AI 助手框架</li>
<li>核心卖点：把 AI 助手塞进你已经在用的 20+ 聊天软件</li>
<li>上手成本：需要 Node 24，一条 <code>openclaw onboard</code> 命令引导完成</li>
<li>状态：活跃迭代中，生态正在形成</li>
</ul>
<p>如果你也烦透了每天在十几个 AI App 之间反复切换，不妨去 <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener">github.com/openclaw/openclaw</a> 瞅一眼这只龙虾 🦞。</p>`,
  },
  {
    slug: 'programmers-survival-in-ai-era',
    title: 'AI 时代程序员该如何自保',
    date: '2026-04-22',
    tags: ['AI', '程序员', '职业发展', '思考'],
    excerpt:
      'AI 写代码越来越强，GitHub Copilot、Cursor、Claude Code……程序员的饭碗真的要被端走了吗？与其焦虑，不如想清楚：什么能力是 AI 替代不了的，什么姿势能让你在 AI 浪潮里不仅不被淘汰，反而借势起飞。',
    contentHTML: `<h2>危机是真实的，但没你想的那么简单</h2>
<p>过去两年，AI 编程工具的能力提升速度快得让人心慌。从 GitHub Copilot 的代码补全，到 Cursor 的整文件重写，再到 Claude Code 直接在终端帮你跑命令、改 Bug——很多初级程序员做的事情，AI 已经能做得八九不离十。</p>
<p>但焦虑归焦虑，有一件事值得想清楚：<strong>AI 替代的是"任务"，不是"工程师"。</strong> 一个任务能被 AI 完成，不代表整个岗位会消失，就像计算器普及之后会计师没有消失一样。问题在于：同样的产出，以后可能只需要更少的人。这才是真正的压力所在。</p>
<h2>哪些能力正在被蚕食</h2>
<p>先诚实面对现实。以下这些能力，AI 已经做得相当不错，或者在快速追赶：</p>
<ul>
<li><strong>样板代码编写</strong> — CRUD、API 对接、数据格式转换，AI 信手拈来</li>
<li><strong>常见 Bug 修复</strong> — 给个报错堆栈，大部分情况 AI 能给出靠谱方案</li>
<li><strong>文档与注释</strong> — 读懂代码然后写注释，AI 比很多程序员写得还认真</li>
<li><strong>单元测试</strong> — 生成覆盖率不错的测试用例，已经是基本操作</li>
<li><strong>技术选型调研</strong> — 让 AI 列出某个场景下的技术方案对比，往往比自己 Google 快</li>
</ul>
<p>如果你的日常工作 90% 都是上面这些，那确实需要认真思考了。</p>
<h2>AI 还做不好什么</h2>
<p>但 AI 有它的天花板，而且这个天花板短期内很难被突破：</p>
<ul>
<li><strong>系统级判断</strong> — 这个功能现在做还是以后做？这个架构三年后会不会成为债？这类需要业务理解和长远眼光的判断，AI 没有上下文，也没有立场。</li>
<li><strong>跨团队协作与推动</strong> — 技术方案要落地，要说服产品、说服老板、协调多个团队。这是人的游戏。</li>
<li><strong>模糊需求的拆解</strong> — 用户说"感觉这个功能用起来怪怪的"，你需要追问、观察、猜测，把模糊感受变成可执行的技术任务。AI 做不到这个。</li>
<li><strong>生产环境的直觉</strong> — 凌晨两点报警，监控图表异常，凭经验判断是哪里出了问题。这种直觉来自无数次踩坑，AI 没有这种"身体记忆"。</li>
<li><strong>对"够不够好"的判断</strong> — 80 分的方案现在上，还是等 100 分的方案下个月上？这是工程权衡，也是对业务节奏的感知。</li>
</ul>
<h2>自保的姿势</h2>
<h3>1. 把 AI 当乘数，不是竞争对手</h3>
<p>最聪明的程序员现在在干嘛？不是抵制 AI，而是让 AI 把自己的产出放大 3 倍、5 倍。用 AI 处理那些重复的、机械的部分，把节省出来的时间放在只有你能做的事情上——理解业务、设计架构、做技术决策。</p>
<p>会用 AI 的程序员，和不会用的，产出差距会越来越大。这个差距本身就是你的护城河。</p>
<h3>2. 往"T 型"发展，不要做纯粹的"螺丝钉"</h3>
<p>纯粹的执行型工程师风险最高。横向的宽度（能理解产品、能看懂数据、能和非技术人员沟通）+ 纵向的深度（在某个领域真正做到专家级），这个组合很难被替代。</p>
<p>AI 是"万金油"，但它在每个领域都差那么一口气。你要做的，是在某件事上比 AI 那口气还足。</p>
<h3>3. 深耕"人机协作"本身成为稀缺技能</h3>
<p>Prompt Engineering 听起来像玄学，但本质是：<strong>你能不能清晰地描述问题、拆解任务、验证结果、迭代改进。</strong> 这其实是工程能力的另一种形态。</p>
<p>能把一个复杂的工程目标拆成一系列 AI 可以执行的子任务，并且知道怎么验收、怎么兜底——这个能力现在还很稀缺，而且越来越值钱。</p>
<h3>4. 建立个人品牌和影响力</h3>
<p>写技术博客、做开源项目、在社区里分享——这些事情以前很多人觉得"性价比不高"。但在 AI 时代，<strong>能被记住的人</strong>比能写代码的人更值钱。AI 能帮你写代码，但它帮不了你建立信任和声誉。</p>
<h3>5. 离业务更近一点</h3>
<p>技术能力越来越商品化，业务理解越来越稀缺。能把技术和业务真正打通的人，在任何时代都不会失业。多参加产品会议，多和用户聊，多思考"为什么要做这个功能"而不只是"怎么实现这个功能"。</p>
<h2>最后说一句</h2>
<p>AI 浪潮不是第一次技术革命，也不会是最后一次。蒸汽机、互联网、移动互联网，每一次都有人喊"这次不一样，这次真的要完"。最终活得好的，都是那些<strong>主动拥抱变化、持续学习、把新工具变成自己杠杆</strong>的人。</p>
<p>与其焦虑 AI 会不会替代你，不如今天就打开 Cursor 或者 Claude Code，感受一下它能做什么、不能做什么。知己知彼，才能走得稳。</p>`,
  },
  {
    slug: 'floating-point-miracles',
    title: '浮点奇迹：让每个不甘平凡的人拥有顶级 AI 生产力',
    date: '2026-04-22',
    tags: ['AI', 'Agent', '创业', '生产力', 'Teamo'],
    excerpt:
      '浮点奇迹（北京）科技有限公司成立于 2023 年，核心团队来自百度、微软，致力于打造面向知识工作者的 AI Agent 生产力工具。从 AskManyAI 到多 Agent 协作平台 Teamo，他们用"5 人核心团队"的极致效率，践行着"赋能知识工作者，驱动未来生产力"的使命。',
    contentHTML: `<h2>公司简介</h2>
<p><strong>浮点奇迹（北京）科技有限公司</strong>成立于 2023 年 5 月，总部位于北京海淀区，是一家专注于 AI Agent 生产力方向的创业公司。公司使命是<strong>赋能知识工作者，驱动未来生产力</strong>，致力于让每个"不甘平凡"的人都能拥有顶级的 Agent 生产工具，成为新时代的超级个体。</p>
<h2>团队背景</h2>
<p>核心团队主要来自<strong>百度</strong>和<strong>微软</strong>的 AI 与搜索核心算法部门，在大模型自研和 C 端亿级平台产品研究方面积累了丰富经验。团队由一群"极致的效率主义者和生产力狂热者"组成，早期仅用 5 人核心团队便打造出了多款深受用户喜爱的产品。</p>
<h2>融资历程</h2>
<p>2023 年 8 月，浮点奇迹获得<strong>奇绩创坛</strong>数百万元天使轮投资，正式踏上 AI Agent 创业之路。</p>
<h2>产品线</h2>
<ul>
<li><strong>TiMO</strong>（2023.05）— 商业级 Agent 框架，公司创立初期的技术底座</li>
<li><strong>赛博马良</strong>（2023.11）— 面向内容创作者的 Agent 工具</li>
<li><strong>浮点深瞳 FloatEyes</strong>（2024.02）— 针对营销人员的社媒流量洞察 Agent</li>
<li><strong>AskManyAI</strong>（2024.04）— 面向国内知识工作者的 ChatBot 生产力平台，接入 OpenAI GPT、Claude、Gemini、Kimi 等主流大模型，调用量持续增长</li>
<li><strong>FloatSearch</strong> — 跨语种 AI 搜索引擎，调用量突破千万</li>
<li><strong>Teamo</strong>（2025.04）— 全球首个多 Agent 团队协作智能体平台，面向知识工作者，是公司目前的旗舰产品</li>
</ul>
<h2>Teamo：多 Agent 协作平台</h2>
<p>Teamo 是浮点奇迹在 2025 年发布的旗舰产品，核心理念是 <strong>"AI gets reliable when it's not alone"</strong>——当多个 AI Agent 协同工作时，可靠性才真正得到保障。产品面向专业人士、自由职业者和中小企业，帮助他们增强智能能力并扩展运营规模。</p>
<h3>核心能力</h3>
<ul>
<li><strong>多 Agent 协作</strong> — 系统级可靠性设计，针对复杂知识工作而构建，多个专业化 Agent 分工协同</li>
<li><strong>大幅削减幻觉</strong> — 通过跨 Agent 交叉验证，从互联网或私有数据中获取共识驱动的结果，减少 AI 事实错误</li>
<li><strong>分治策略</strong> — 将大目标拆解成清晰、个性化的执行步骤，从营销活动到投资报告均适用</li>
<li><strong>具记忆的自动化</strong> — 利用过往任务洞察持续优化输出，创建始终智能、符合品牌调性的内容</li>
<li><strong>认知复利</strong> — 各 Agent 将学习存入共享"团队大脑"，随时间积累团队专属智能</li>
</ul>
<h3>典型应用场景</h3>
<ul>
<li>文献综述与研究报告</li>
<li>营销策略制定</li>
<li>技术博客与内容创作</li>
<li>商业研究与投资分析</li>
</ul>
<p>有趣的是，你现在正在浏览的这个博客，就是用 Teamo 搭建的。</p>
<h2>官网</h2>
<p>了解更多，请访问 <a href="https://www.floatmiracle.com/" target="_blank">floatmiracle.com</a> 或 <a href="https://www.floatai.cn/" target="_blank">floatai.cn</a>。</p>`,
  },
  {
    slug: 'pop-mart-equity-research',
    title: '泡泡玛特（9992.HK）研报：从盲盒公司到全球 IP 运营商',
    date: '2026-04-21',
    tags: ['研报', '投资', '消费', 'IP', '泡泡玛特'],
    excerpt:
      '2024 到 2025 年，泡泡玛特完成了一次相当彻底的叙事切换：从"中国年轻人的盲盒"变成"全球潮玩 IP 运营商"。Labubu 在海外的爆发、自营门店和机器人商店的全球铺设、北京乐园的落地，让这家公司第一次被放到万代、三丽鸥甚至迪士尼的坐标系里去比较。这篇把业务结构、IP 矩阵、财务与估值、风险点梳理一遍，作为一次独立思考的草稿。',
    contentHTML: `<p><strong>免责声明：</strong>本文是一篇个人研究笔记，所有数字均为作者根据公开资料整理/估算，不构成任何投资建议。涉及具体交易请以公司公告及你自己的研究为准。</p>
<h2>一、公司速览</h2>
<p>泡泡玛特（Pop Mart International，港股代码 9992.HK）是一家总部位于北京的潮流玩具公司，2010 年成立，2020 年 12 月在港交所主板上市。核心业务是基于艺术家 IP 设计和销售潮流玩具，盲盒（Blind Box）是其最具识别度的售卖形式，但本质上更接近"签约艺术家 + 自有 IP 池 + 全渠道零售 + 主题乐园 + 衍生授权"的一个综合 IP 运营平台。</p>
<p>业务最粗的切分：</p>
<ul>
<li><strong>自有 & 独家 IP 产品</strong>：收入大头，毛利率最高。来自和艺术家签约的独家 IP，以及收购/孵化的自有 IP。</li>
<li><strong>非独家 IP 与授权产品</strong>：和迪士尼、三丽鸥、哈利波特等第三方 IP 合作推出的潮玩产品，毛利率相对低。</li>
<li><strong>主题乐园（Pop Land）与 IP 衍生</strong>：2023 年底在北京朝阳公园开业的 Pop Land 是公司在"乐园 + 线下体验"方向的第一次重资产尝试。</li>
<li><strong>海外业务</strong>：东南亚（泰国、越南、新马）、北美、欧洲、日韩。从 2023 年开始进入明显加速期，2024–2025 年是爆发点。</li>
</ul>
<h2>二、为什么这家公司值得重新看一遍</h2>
<p>2021 年上市高点之后，泡泡玛特经历过一轮非常明显的"盲盒叙事退潮"：监管收紧未成年人盲盒购买、国内消费增速回落、Molly 单一 IP 依赖度被反复质疑，股价一度从 100 港元上方跌到 20 港元以下。</p>
<p>真正让市场重新给估值的，是 2024 年开始的两件事：</p>
<ol>
<li><strong>Labubu 在海外的破圈</strong>。Kasing Lung 的 The Monsters 系列（代表形象 Labubu）通过东南亚明星、欧美社媒博主的自发传播，在 2024 年下半年到 2025 年成为全球级的流行符号——从曼谷到洛杉矶的 Pop Mart 门店都出现过排队抢购和二级市场溢价。</li>
<li><strong>海外收入占比显著跃升</strong>。2023 年海外收入占比还在 16% 左右，2024 年跳升到 30%+，2025 年已经接近甚至超过 50%，并且海外毛利率高于国内。这是一个"中国消费公司"向"全球消费公司"切换的关键分水岭。</li>
</ol>
<p>这两件事的共同含义是：泡泡玛特的估值锚不再只是"中国年轻人的可选消费支出"，而是要放到全球 IP 运营商的坐标系里去看——和万代（Bandai Namco）、三丽鸥（Sanrio）、Funko、甚至乐高/迪士尼消费品业务比较。这是估值倍数可以被整体抬升的结构性原因。</p>
<h2>三、业务结构与 IP 矩阵</h2>
<h3>3.1 IP 是这家公司唯一重要的资产</h3>
<p>所有模具、门店、机器人商店、乐园都是前端；真正在产生经济利润的，是 IP 矩阵本身。截至 2025 年，公司披露的核心 IP 大致可以分成三档：</p>
<ul>
<li><strong>全球级大 IP（单一 IP 年销 &gt; 10 亿元量级）</strong>：Labubu / The Monsters、Molly、Skullpanda、Dimoo、Crybaby。其中 Labubu 是目前最强增长引擎，Crybaby（Molly Yllana 作品）是近两年爬升最快的新秀。</li>
<li><strong>腰部 IP（年销 3–10 亿元量级）</strong>：Hirono 小野、Zsiga、Peach Riot、Hacipupu 等。这些 IP 的作用是对冲单一爆款风险，并且通过不同艺术家风格覆盖不同审美客群。</li>
<li><strong>长尾与新孵化 IP</strong>：签约艺术家池里的新形象、合作款、区域限定款。作用是保持内容供给节奏和二级市场热度。</li>
</ul>
<p>一个值得盯的结构性指标是 <strong>Top 1 IP 收入占比</strong>。2021 年 Molly 占比一度接近 20%，市场担心"单点失败风险"；2023–2024 年随着 Skullpanda、Dimoo、Labubu 崛起，这一比例一度摊薄到 15% 以下；但 2025 年 Labubu 现象级爆发又把"头部 IP 占比"重新推高到 25%+。这不是坏事，但意味着未来 1–2 年如果 Labubu 热度边际回落，公司必须靠新 IP 补上——这是我们后面讨论风险时最重要的一条。</p>
<h3>3.2 渠道：从盲盒自助机到全球旗舰店</h3>
<p>泡泡玛特的渠道从重到轻大致是：</p>
<ol>
<li><strong>自营零售店（Retail Store）</strong>：一二线核心商圈旗舰店，承担品牌露出和新品首发。2025 年海外旗舰店（曼谷 Central World、洛杉矶 Americana、伦敦 Westfield 等）的单店产出已经显著高于国内平均店效。</li>
<li><strong>机器人商店（Robo Shop）</strong>：无人值守的自动贩卖点位，覆盖密度和坪效都非常可观，是公司在下沉市场和海外机场/地铁等流量场景的重要抓手。</li>
<li><strong>线上</strong>：天猫、抖音、微信小程序"泡泡玛特抽盒机"，海外 Shopify 独立站 + TikTok Shop。抽盒机是很聪明的数字化产品——它把盲盒体验完整搬到线上，同时绕开了国内线下未成年人盲盒销售的合规限制。</li>
<li><strong>批发 & 经销</strong>：主要用于海外早期市场开拓，随着自营门店铺开，占比在下降。</li>
</ol>
<h3>3.3 Pop Land 与 IP 长期主义</h3>
<p>2023 年底开业的北京 Pop Land 是一个信号性投入。短期看它不会贡献可观利润（占地和投入都不算大，收入体量和主业比也很小），但它的意义在于：</p>
<ul>
<li>验证 IP 是否具备"脱离商品形态独立变现"的能力——乐园门票、餐饮、快闪表演、周边，是典型的迪士尼/环球影城逻辑。</li>
<li>给海外市场讲一个可复制的故事：如果北京能跑通，东京、曼谷、洛杉矶都可以是下一站。</li>
</ul>
<p>从投资视角，Pop Land 不应该被当成一个乐园生意估值，而应该当成"IP 长期价值的一次期权"。如果 IP 矩阵足够强，这个期权几乎没有成本；如果 IP 矩阵塌了，这块重资产反而会成为拖累。</p>
<h2>四、财务画像</h2>
<p>下面的数字基于公司年报与公开披露整理，口径以人民币计；2025 年数据以年报为准，此处用作结构性讨论。</p>
<table>
<thead><tr><th>指标</th><th>2022</th><th>2023</th><th>2024</th><th>2025</th></tr></thead>
<tbody>
<tr><td>营业收入（亿元）</td><td>~46</td><td>~63</td><td>~130</td><td>~280+</td></tr><tr><td>YoY</td><td>个位数</td><td>+36%</td><td>+107%</td><td>+110%+</td></tr>
<tr><td>毛利率</td><td>~58%</td><td>~61%</td><td>~67%</td><td>~68–70%</td></tr>
<tr><td>经调整净利率</td><td>~11%</td><td>~17%</td><td>~25%</td><td>~28–30%</td></tr>
<tr><td>海外收入占比</td><td>~10%</td><td>~16%</td><td>~30%+</td><td>~50%</td></tr>
</tbody>
</table>
<p>这张表里最值得画重点的其实只有两件事：</p>
<ol>
<li><strong>毛利率持续上行</strong>。从 58% 抬到 67%+，主因是海外占比上升（海外单价更高、打折更少）、自有 IP 占比上升、以及机器人商店等高毛利渠道放量。</li>
<li><strong>经营杠杆释放</strong>。收入翻倍但费用率没有同比例上升，净利率从 11% 爬到接近 30%。这是典型的"内容型平台进入规模效应阶段"的财务形态。</li>
</ol>
<p>现金流方面，公司净现金常年为正，资本开支主要集中在门店装修、模具与 IP 投入、以及 Pop Land。不依赖杠杆，这一点在港股消费板块里算稀缺。</p>
<h2>五、竞争格局</h2>
<p>我倾向于把泡泡玛特放在下面四个对照组里看：</p>
<ul>
<li><strong>日系 IP 巨头（万代、三丽鸥、Takara Tomy）</strong>：IP 积累更久、授权业务更成熟。泡泡玛特的优势是 IP 迭代速度快、更贴近 Z 世代审美、直营零售能力强；劣势是 IP 还没有经过几十年的时间检验。</li>
<li><strong>西方潮玩/收藏玩具（Funko、乐高、Jazwares）</strong>：Funko 是最直接的对照——也走"签约 IP + 收藏玩具"路线，但它严重依赖外部授权（漫威、DC、动漫），自己没有强原创 IP。泡泡玛特的原创 IP 占比远高于 Funko，是更优的商业模型。</li>
<li><strong>国内同行（52TOYS、TOP TOY、寻找独角兽等）</strong>：规模差距已经拉开一个数量级，短期难以撼动。真正的竞争在"下一个爆款签约权"上。</li>
<li><strong>广义的迪士尼/消费品授权</strong>：这是终局参照系。泡泡玛特距离迪士尼还非常远，但方向是对的——做"自己生产内容，而不是只做别人内容的载体"。</li>
</ul>
<h2>六、估值讨论</h2>
<p>港股对泡泡玛特的估值在过去三年里波动极大，从 2022 年最低点的 15x 前瞻 PE，到 2025 年高点的 40x+ 前瞻 PE。这个区间本身说明市场对它的"定性"一直在来回切换：</p>
<ul>
<li>当它被当成"一家中国消费公司"时，合理 PE 通常 15–20x；</li>
<li>当它被当成"一家全球 IP 运营商"时，合理 PE 可以给到 30–40x，并且可以使用 PEG 框架（增长 40%+ 时 PEG &lt; 1 不算离谱）。</li>
</ul>
<p>我的框架是分两段折现：</p>
<ol>
<li><strong>2026–2028：高速增长阶段</strong>。假设收入 CAGR 35–45%，净利率稳定在 28–30%。这段期间合理使用 EV/Sales 或前瞻 PE 进行相对估值，并盯紧海外同店增速和新 IP 贡献比。</li>
<li><strong>2029 之后：成熟阶段</strong>。IP 进入"老炮 + 新秀"并存的稳态，增长回落到 15–20%，这时候切换到 DCF，给出终值折现。关键假设是"IP 矩阵能否长期保持每年至少一个新的全球级 IP 诞生"——这是定价里最难、也最重要的一个假设。</li>
</ol>
<p>用一个粗略的情景分析：</p>
<ul>
<li><strong>乐观情景</strong>：Labubu 热度维持 2–3 年，同时 Crybaby、Hirono 接力成长，海外 CAGR 保持 50%+。对应 2028 年净利润可能到 100 亿元量级，按 30x PE 给出约 3000 亿港元市值。</li>
<li><strong>中性情景</strong>：Labubu 2026 年见顶回落，但新 IP 补位成功，整体收入 CAGR 25–30%。2028 年净利润 60–70 亿元，对应市值 1500–2000 亿港元。</li>
<li><strong>悲观情景</strong>：Labubu 快速退潮、新 IP 未能接力、海外增长失速。估值被重新打回"中国消费品"标签，PE 压到 15–18x，有 40%+ 的下行空间。</li>
</ul>
<h2>七、风险清单</h2>
<ol>
<li><strong>单一 IP 依赖风险</strong>。Labubu 是当下最大的增长引擎，也是最大的单点风险。2026 年如果出现明显的二级市场价格崩塌或社交媒体热度反转，市场会迅速重估。</li>
<li><strong>潮流生命周期风险</strong>。潮玩 IP 的生命周期天然比传统玩具短。公司能不能长期维持"每 2–3 年诞生一个全球级 IP"的节奏，没有历史可以验证。</li>
<li><strong>合规与舆论风险</strong>。盲盒对未成年人的销售管理、海外（尤其北美）对"赌博式消费"的监管讨论、二级市场炒作被定性为投机——这些都会直接影响销售。</li>
<li><strong>地缘与关税风险</strong>。公司目前产能主要在国内，海外销售占比上升后，关税、物流、跨境支付、数据合规都会成为新议题。</li>
<li><strong>估值本身的波动风险</strong>。这类 IP 公司的估值天然带叙事性，一旦增长曲线出现哪怕轻微的边际减速，估值倍数就会被压缩，Funko 在 2022–2023 年经历过一次典型的"戴维斯双杀"可以作为参照。</li>
<li><strong>Pop Land 与重资产扩张</strong>。如果管理层在海外快速复制乐园，而 IP 本身无法支撑乐园级别的长期流量，这块会变成成本中心。</li>
</ol>
<h2>八、几个值得长期跟踪的指标</h2>
<p>如果我持有这只票，我会每个季度只盯这几件事：</p>
<ul>
<li>海外收入增速、海外毛利率，以及海外同店增速（剔除新开店影响）。</li>
<li>Top 1 IP 收入占比，以及 Top 5 IP 收入集中度的变化。</li>
<li>新 IP 首次上架后 3 个月的复购率与二级市场溢价。</li>
<li>抽盒机 / 机器人商店等数字与无人渠道的占比。</li>
<li>Pop Land 单日客流与客单价。</li>
<li>港股通南下资金和海外长线资金的持股结构变化。</li>
</ul>
<h2>九、结论</h2>
<p>泡泡玛特现在正处在一个"定性正在被重写"的窗口期。它已经不完全是一个盲盒公司，但距离真正意义上的全球 IP 运营商又还差几个关键证明——尤其是 Labubu 之后的第二、第三个全球级 IP。</p>
<p>在这个窗口里，它的股价既享受了叙事切换带来的估值溢价，也要承担"万一叙事退潮"的对称下行风险。对投资者而言，真正值得思考的不是"现在该不该买"，而是：<strong>你是在为当下的 Labubu 付钱，还是在为这家公司长期孵化 IP 的能力付钱？</strong></p>
<p>这两种答案，会导向完全不同的持仓周期和止盈/止损纪律。我自己的答案是后者——但也因此，对 IP 迭代节奏、海外同店数据、以及新 IP 的冷启动表现，会比对季度利润本身更敏感。</p>
<p>这篇只是一次独立思考的草稿，后续我会专门再写一篇只讨论 IP 生命周期方法论的长文——把 Hello Kitty、米老鼠、Snoopy、Kumamon、皮卡丘、Labubu 放在同一张图上，看看潮玩 IP 到底能活多久。</p>`,
  },
  {
    slug: 'vue-3-reactivity-deep-dive',
    title: '深入理解 Vue 3 的响应式原理：Proxy 如何取代 Object.defineProperty',
    date: '2026-04-21',
    tags: ['技术', '前端', 'Vue', '原理', 'JavaScript'],
    excerpt:
      'Vue 3 把响应式系统从 Object.defineProperty 换成了 Proxy，看起来只是换了个 API，实际上把整套依赖收集、触发更新、ref/reactive 的心智模型都重做了一遍。这篇从 Vue 2 的局限讲起，一路走到 effect 和 track/trigger，顺带聊聊 ref 和 reactive 到底该怎么选。',
    contentHTML: `<p>Vue 3 发布这几年，响应式系统这一块一直是面试和源码阅读里最容易被拎出来反复咀嚼的部分。表面上看，它只是把 <code>Object.defineProperty</code> 换成了 <code>Proxy</code>，但真正动手写过几次 mini-vue 就会发现：这次换的不只是一个 API，而是整套依赖收集的心智模型。</p>
<p>这篇想从 Vue 2 的局限讲起，一路走到 Vue 3 的 Proxy + Reflect、track/trigger，以及 ref 和 reactive 该怎么选。</p>
<h2>一、Vue 2 基于 Object.defineProperty 的实现及其局限</h2>
<p>Vue 2 的响应式核心，是给对象的每一个属性都做一次 <code>Object.defineProperty</code>，把它改写成带 getter / setter 的访问器属性。大概长这样：</p>
<pre><code>function defineReactive(obj, key, val) {
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    get() {
      if (Dep.target) dep.depend();
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      dep.notify();
    },
  });
}

function observe(obj) {
  if (!obj || typeof obj !== 'object') return;
  Object.keys(obj).forEach((key) =&gt; defineReactive(obj, key, obj[key]));
}</code></pre>
<p>思路很朴素——读的时候把当前 watcher 收集进 dep，写的时候通知 dep 里所有 watcher 重新跑一遍。但这种做法有几个绕不过去的硬伤：</p>
<ul>
<li><strong>必须在初始化时递归遍历</strong>。对象有多深，<code>defineReactive</code> 就要递归调多少层。大对象的初始化成本很显眼。</li>
<li><strong>新增/删除属性不会触发更新</strong>。<code>this.obj.newKey = 1</code> 不会被侦测到，必须用 <code>Vue.set</code> / <code>Vue.delete</code> 这样的"逃生舱"。</li>
<li><strong>数组处理要打补丁</strong>。Vue 2 只能通过重写 <code>push</code>、<code>pop</code>、<code>splice</code> 等方法来拦截数组变更；直接用下标赋值（<code>arr[0] = x</code>）或改 <code>length</code> 依然失效。</li>
<li><strong>Map / Set 等集合类型完全没法代理</strong>。只能手写 shim，代价很高。</li>
</ul>
<p>这些问题的根源是同一个：<code>Object.defineProperty</code> 劫持的是<em>属性</em>，而不是<em>对象</em>。它永远只看得见初始化那一刻已经存在的 key。</p>
<h2>二、Vue 3 的 Proxy + Reflect</h2>
<p>Proxy 的能力是 <code>defineProperty</code> 的超集。它拦截的是一整个对象的元操作——<code>get</code>、<code>set</code>、<code>has</code>、<code>deleteProperty</code>、<code>ownKeys</code>……任何跟这个对象打交道的路径，都可以在一个 handler 里被统一接管。</p>
<p>一个最小版的 <code>reactive</code> 长这样：</p>
<pre><code>function reactive(target) {
  return new Proxy(target, {
    get(obj, key, receiver) {
      track(obj, key);
      const res = Reflect.get(obj, key, receiver);
      // 惰性递归：访问到对象属性时，才把它也包成 reactive
      return typeof res === 'object' &amp;&amp; res !== null ? reactive(res) : res;
    },
    set(obj, key, value, receiver) {
      const oldValue = obj[key];
      const result = Reflect.set(obj, key, value, receiver);
      if (oldValue !== value) trigger(obj, key);
      return result;
    },
    deleteProperty(obj, key) {
      const hadKey = Object.prototype.hasOwnProperty.call(obj, key);
      const result = Reflect.deleteProperty(obj, key);
      if (hadKey) trigger(obj, key);
      return result;
    },
  });
}</code></pre>
<p>几个关键差异值得单独拎出来讲：</p>
<ol>
<li><strong>惰性代理</strong>。上面的 <code>get</code> 只在真正被访问到时，才把嵌套对象再包一层。对比 Vue 2 的"初始化即全量递归"，对大对象友好得多。</li>
<li><strong>原生支持增删</strong>。新增一个 key 会走 <code>set</code>，删一个 key 会走 <code>deleteProperty</code>，不再需要 <code>Vue.set</code> / <code>Vue.delete</code>。</li>
<li><strong>数组下标和 length 一视同仁</strong>。<code>arr[0] = 1</code>、<code>arr.length = 0</code> 都会正常触发 <code>set</code>，不用重写原型方法。</li>
<li><strong>Map / Set 原生可代理</strong>。Vue 3 源码里针对集合类型单独写了一套 handler，对 <code>get</code> / <code>add</code> / <code>delete</code> 这些方法做特殊处理，但整体路径还是统一的。</li>
</ol>
<p>这里顺带说一句 <code>Reflect</code> 为什么要登场。直接 <code>obj[key]</code> 取值在大部分时候没问题，但当 target 上有访问器属性、并且这个 getter 里用了 <code>this</code> 时，<code>Reflect.get(obj, key, receiver)</code> 会把 <code>this</code> 正确指向 proxy，使得 getter 内部对其他属性的访问也能被依赖收集。用 <code>Reflect</code>，是为了让"代理"这件事对 getter / setter 是透明的。</p>
<h2>三、依赖收集：track / trigger 与 effect</h2>
<p>代理只是"拦截"，响应式真正的核心是<strong>把"谁读了哪个属性"记下来，在"那个属性变了"时把它再跑一遍</strong>。这件事在 Vue 3 里由三个东西合作完成：<code>effect</code>、<code>track</code>、<code>trigger</code>。</p>
<p>先看 <code>effect</code>——它相当于 Vue 2 的 watcher，但更朴素：就是一个"会被重新执行的函数"。</p>
<pre><code>let activeEffect = null;

function effect(fn) {
  const run = () =&gt; {
    activeEffect = run;
    try {
      fn();
    } finally {
      activeEffect = null;
    }
  };
  run();
  return run;
}</code></pre>
<p>再看 <code>track</code> 和 <code>trigger</code>，它们维护一张三层结构的"依赖表"：<code>target -&gt; key -&gt; Set&lt;effect&gt;</code>。</p>
<pre><code>const targetMap = new WeakMap();

function track(target, key) {
  if (!activeEffect) return;
  let depsMap = targetMap.get(target);
  if (!depsMap) targetMap.set(target, (depsMap = new Map()));
  let dep = depsMap.get(key);
  if (!dep) depsMap.set(key, (dep = new Set()));
  dep.add(activeEffect);
}

function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const dep = depsMap.get(key);
  if (dep) dep.forEach((run) =&gt; run());
}</code></pre>
<p>串起来用一下：</p>
<pre><code>const state = reactive({ count: 0 });

effect(() =&gt; {
  console.log('count is', state.count);
});
// 立即打印一次：count is 0

state.count++;
// 触发 set -&gt; trigger -&gt; effect 重跑
// 打印：count is 1</code></pre>
<p>整个链路是：<em>effect 执行时把自己挂成 activeEffect → 读属性走 Proxy 的 get → track 把 activeEffect 塞进这个属性的 dep → 属性被写 → trigger 从 dep 里把所有 effect 再跑一遍</em>。几十行代码就能跑通的东西，但它正是 Vue 3 组件渲染、<code>computed</code>、<code>watch</code> 背后的同一套机制。</p>
<p>真正的 Vue 3 源码在这基础上做了很多工程化处理：effect 嵌套（渲染函数里又有 computed）、调度器 scheduler（把重新执行攒到微任务里做批量更新）、依赖清理（每次 effect 跑之前先把上次收集的 dep 清掉，避免条件分支留下"僵尸依赖"），但骨架还是上面这三件套。</p>
<h2>四、ref vs reactive：到底该怎么选</h2>
<p>Proxy 的一个天然局限是：<em>它只能代理对象</em>。<code>new Proxy(1, {})</code> 直接报错。这也就是为什么 Vue 3 需要两个 API：</p>
<ul>
<li><code>reactive(obj)</code>：把一个对象变成响应式代理。访问和赋值都跟普通对象一样。</li>
<li><code>ref(value)</code>：把任意值（包括原始值）包进一个 <code>{ value }</code> 对象里，再用类似 reactive 的机制代理它。访问要写 <code>.value</code>。</li>
</ul>
<p>看代码体感一下：</p>
<pre><code>import { ref, reactive } from 'vue';

const count = ref(0);
count.value++;            // 需要 .value

const state = reactive({ count: 0 });
state.count++;            // 直接用

// 但下面这个写法是错的
let { count: c } = state;
c++;                      // 不会触发更新——c 是解构出来的普通数字，已经脱离代理</code></pre>
<p>从"能用"的角度，两个 API 功能上有很大重叠。真正影响选择的，是下面几个点：</p>
<ol>
<li><strong>原始值只能用 ref</strong>。number、string、boolean 没法被 Proxy 代理，绕不过去。</li>
<li><strong>reactive 会在解构后失去响应性</strong>。因为解构出来的就是普通属性值。如果要保留响应性，要么继续用整个对象，要么用 <code>toRefs</code> 把它拆成一堆 ref。</li>
<li><strong>ref 在模板里会自动解包，但在 JS 里不会</strong>。模板里写 <code>{{ count }}</code> 就行，但 <code>setup</code> 里必须 <code>count.value</code>。这个不一致是 ref 被吐槽最多的地方，但也正是它能支持原始值的代价。</li>
<li><strong>跨组件传递时 ref 更稳</strong>。<code>ref</code> 把值装在一个"盒子"里，这个盒子的引用不会变，传到哪里都能访问到最新的 <code>.value</code>。reactive 一旦被整体替换（<code>state = newObj</code>），响应性就断了。</li>
</ol>
<p>我自己的经验法则：</p>
<ul>
<li>单个、独立的值（计数、loading 状态、输入框文本）——用 <code>ref</code>。</li>
<li>一组紧密关联的字段，需要整体作为一个概念传递的——用 <code>reactive</code>。</li>
<li>写 composable（组合函数）并需要把返回值解构使用——内部 reactive 也行，但返回时用 <code>toRefs</code> 或干脆全 ref，避免调用方解构之后踩坑。</li>
</ul>
<p>更极端一点的建议：<em>如果拿不准，就全用 ref</em>。多打几个 <code>.value</code> 是小代价，踩到解构失去响应性、整体替换断链这些坑是大代价。</p>
<h2>五、一个不算结论的结论</h2>
<p>Vue 3 的响应式重写，表面上是 API 升级，内里其实是把"对属性打补丁"这件事，彻底换成了"对对象做统一元编程"。新增删除、数组、Map/Set、嵌套惰性代理，这些 Vue 2 的痛点一次性全被消掉。</p>
<p>但真正让这套系统跑起来的，其实还是 track / trigger / effect 这三兄弟——它们跟具体用 <code>Object.defineProperty</code> 还是 <code>Proxy</code> 无关，换成 Vue 2 的那套 dep + watcher 依然成立。Proxy 改变的是"拦截能力的上限"，而依赖收集才是"响应式"这个词真正的含义。</p>
<p>理解了这一层，再看 <code>computed</code>、<code>watch</code>、<code>watchEffect</code> 的源码会轻松很多——它们无非是在 effect 这个朴素原语上，叠加不同的调度策略和返回约定罢了。</p>`,
  },
  {
    slug: 'vue-3-getting-started',
    title: 'Vue 3 入门：从 Options API 到 Composition API',
    date: '2026-04-21',
    tags: ['Vue', '前端', '技术', 'JavaScript'],
    excerpt:
      'Vue 3 带来了 Composition API，但 Options API 并没有被抛弃。这篇用可运行的小例子把两种写法摆在一起，聊聊它们各自适合什么场景、以及在实际项目里怎么选。',
    contentHTML: `<p>从 Vue 2 到 Vue 3，最大的变化不是性能，也不是体积，而是一个新的组织代码的方式：<strong>Composition API</strong>。它没有取代原本的 Options API，而是和它并排站在一起，让你在同一个框架里有两种完全不同的写组件的思路。</p>
<p>这篇算是一份最短的上手指南——把两种写法放在一起对照着看，顺便聊聊真实项目里我会怎么选。</p>
<h2>一、Vue 3 简介</h2>
<p>Vue 3 在 2020 年发布，底层用 TypeScript 重写，引入了基于 Proxy 的响应式系统。对使用者来说，最直接的几个变化是：</p>
<ul>
<li><strong>更好的 TypeScript 支持</strong>：类型推导不再靠 decorator 或插件硬凑。</li>
<li><strong>更小的运行时 + Tree-shaking 友好</strong>：只用到的 API 才会被打进 bundle。</li>
<li><strong>Composition API</strong>：把"一个功能的逻辑"聚在一起，而不是分散在 data / methods / computed / watch 几个选项里。</li>
<li><strong>多根节点 (Fragments)</strong>：template 不再被迫只有一个根元素。</li>
</ul>
<p>一个最简单的 Vue 3 应用启动长这样：</p>
<pre><code>import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
</code></pre>
<p>到这里为止，Vue 2 的使用者应该都还认得。真正的分叉点在组件怎么写。</p>
<h2>二、Options API：熟悉的老朋友</h2>
<p>Options API 就是 Vue 2 时代那套写法：一个组件是一个对象，<code>data</code>、<code>methods</code>、<code>computed</code>、<code>watch</code> 各归各位。它在 Vue 3 里<strong>完全保留</strong>，没有任何被废弃的计划。</p>
<p>一个计数器组件写成 Options API 是这样：</p>
<pre><code>&lt;script&gt;
export default {
  data() {
    return {
      count: 0,
      step: 1,
    };
  },
  computed: {
    doubled() {
      return this.count * 2;
    },
  },
  methods: {
    increment() {
      this.count += this.step;
    },
  },
  watch: {
    count(newVal) {
      console.log('count changed:', newVal);
    },
  },
};
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="increment"&gt;+{{ step }}&lt;/button&gt;
  &lt;p&gt;count: {{ count }}, doubled: {{ doubled }}&lt;/p&gt;
&lt;/template&gt;
</code></pre>
<p>这种写法的好处是<strong>结构稳定</strong>——任何一个 Vue 组件，你都知道去哪里找状态、哪里找方法、哪里找副作用。缺点是当一个组件同时处理多件事（比如"计数" + "表单校验" + "分页"），这些事会被拆散到四个选项里，阅读时要上下跳。</p>
<h2>三、Composition API：把逻辑按"功能"聚在一起</h2>
<p>Composition API 的核心是 <code>setup</code>（或语法糖 <code>&lt;script setup&gt;</code>），以及一组响应式 API：<code>ref</code>、<code>reactive</code>、<code>computed</code>、<code>watch</code>。</p>
<p>同样的计数器，用 <code>&lt;script setup&gt;</code> 写出来是这样：</p>
<pre><code>&lt;script setup&gt;
import { ref, reactive, computed, watch } from 'vue';

// ref：包装单个值，访问时用 .value
const count = ref(0);

// reactive：包装对象，字段直接访问
const config = reactive({ step: 1 });

// computed：派生状态，自动追踪依赖
const doubled = computed(() =&gt; count.value * 2);

function increment() {
  count.value += config.step;
}

watch(count, (newVal) =&gt; {
  console.log('count changed:', newVal);
});
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="increment"&gt;+{{ config.step }}&lt;/button&gt;
  &lt;p&gt;count: {{ count }}, doubled: {{ doubled }}&lt;/p&gt;
&lt;/template&gt;
</code></pre>
<p>几个新概念值得单独展开一下：</p>
<ul>
<li><strong><code>ref</code></strong>：把一个"单个值"变成响应式。读写时要用 <code>.value</code>，但在 template 里 Vue 会帮你自动解包。适合基本类型和"一个单独的引用"。</li>
<li><strong><code>reactive</code></strong>：把一个对象变成响应式代理，字段访问像普通对象一样。不适合基本类型，也不能整体替换（<code>reactive({...})</code> 赋值会丢失响应性）。</li>
<li><strong><code>computed</code></strong>：接收一个 getter，返回一个只读的 ref。依赖变了才重新计算，有缓存。</li>
<li><strong><code>watch</code></strong>：显式声明"监听什么、变了做什么"。还有个 <code>watchEffect</code>，自动收集 getter 里用到的依赖。</li>
</ul>
<p>Composition API 真正发光的场景是<strong>逻辑复用</strong>。你可以把一组相关的状态和方法抽成一个函数（社区约定叫 <code>useXxx</code>）：</p>
<pre><code>// composables/useCounter.ts
import { ref, computed } from 'vue';

export function useCounter(initial = 0, step = 1) {
  const count = ref(initial);
  const doubled = computed(() =&gt; count.value * 2);

  function increment() {
    count.value += step;
  }

  return { count, doubled, increment };
}
</code></pre>
<p>然后在任何组件里直接用：</p>
<pre><code>&lt;script setup&gt;
import { useCounter } from '@/composables/useCounter';

const { count, doubled, increment } = useCounter(0, 2);
&lt;/script&gt;
</code></pre>
<p>这种 composable 函数就是 Vue 3 版本的"逻辑复用单元"，比 Vue 2 时代的 mixin 清晰得多——数据流完全靠返回值和参数，不存在命名冲突和"这个字段从哪来的"问题。</p>
<h2>四、两种 API 怎么选</h2>
<p>官方的立场是：<strong>两种 API 都是一等公民</strong>，选哪种主要看项目和团队习惯。下面是我自己的几条经验：</p>
<ul>
<li><strong>小组件、展示型组件</strong>：Options API 依然很香。一个按钮、一个卡片、一个表格行，用 Options API 写出来可能比 Composition API 更短。</li>
<li><strong>逻辑复杂、跨组件复用多的场景</strong>：优先 Composition API。把逻辑抽成 <code>useXxx</code>，比起 mixin 或 renderless 组件，心智负担小一个数量级。</li>
<li><strong>TypeScript 重度用户</strong>：Composition API + <code>&lt;script setup&gt;</code> 的类型推导是目前 Vue 生态里最顺的组合。</li>
<li><strong>老项目迁移</strong>：不用一次重写。Vue 3 允许一个项目里两种 API 共存，新组件用新写法，旧组件保持不动，按需迁移。</li>
<li><strong>团队新人多</strong>：Options API 的"固定槽位"对新人更友好；Composition API 的自由度要求你有一套团队共识（composable 的命名、文件放哪、什么时候拆）。</li>
</ul>
<p>一个常见误区是"Composition API 更高级所以一定更好"。其实不是——它只是<em>把组织逻辑的责任从框架交回给你</em>。责任拿回来之后，你能写出更灵活的代码，也能写出更乱的代码。</p>
<h2>五、一个不算结论的结论</h2>
<p>Vue 3 最让我欣赏的地方，是它没有用"新 API 取代旧 API"的方式去推进。Options API 还在，文档里位置没动，只是旁边多了一条 Composition API 的路。选哪条，看你手头这块代码的形状。</p>
<p>如果你刚开始学 Vue 3，我的建议是：<em>先用 Options API 把 Vue 的响应式、模板、组件通信这些基础概念跑通，再去学 Composition API，把它当作"逻辑复用和复杂状态组织"的升级工具</em>。两种写法在脑子里都有之后，你会发现选择题其实没那么难——大多数时候，代码的形状会自己告诉你它该用哪种写法。</p>`,
  },
  {
    slug: 'skills-as-shared-primitive',
    title: 'Skill 作为一种新的"共享原子"：从 npm 到 agent 生态',
    date: '2026-04-21',
    tags: ['技术', 'AI', 'Agent', 'Ecosystem', 'Claude Code'],
    excerpt:
      '如果说 npm 之于 Node、Homebrew 之于 macOS、extension 之于 VSCode，那么 Skill 正在成为 agent 生态里那个新的"共享原子"。但它的粒度、分发方式和信任模型，又都明显不一样。这篇从生态视角聊聊 Skill 为什么可能比它看起来更大。',
    contentHTML: `<p>每一个成熟的技术生态，背后几乎都有一个"共享原子"：Node 有 npm 包，macOS 有 Homebrew formula，VSCode 有 extension，Kubernetes 有 Helm chart。它是这个生态里最小的、可被独立分发和组合的能力单位。</p>
<p>最近我越看 Claude Code 的 Skill 越觉得——它可能正在扮演 agent 生态里的这个角色。但它跟前面那些前辈又都不太一样，不一样的地方，恰恰是它有意思的地方。</p>
<h2>一、为什么说 Skill 是一种"新的"原子</h2>
<p>npm 包是代码，装上就能 <code>require</code>；Homebrew formula 是二进制，装上就能在 shell 里敲；VSCode extension 是注册进编辑器的一组 hook 和命令。它们的共同点是：<strong>安装 = 让系统拥有一种确定性的能力</strong>。</p>
<p>Skill 不是这样。它是一个目录，里面是一份自然语言描述、一些示例、偶尔夹杂脚本或模板。它"安装"之后，并不会立刻让 agent 获得一个新函数、一条新命令。它只是让 agent 在未来的某个时刻，<em>有可能</em>去翻一下这份手册。</p>
<p>换句话说，过去的共享原子是<strong>能力</strong>，Skill 是<strong>一段被按需消费的知识</strong>。这个差别看着细，实际上把分发、组合、信任这几件事整个翻了一遍。</p>
<h2>二、跟老办法比，它赢在哪、输在哪</h2>
<p>给模型加能力这件事，过去几年试过不少路子，各有脾气：</p>
<ul>
<li><strong>Fine-tune</strong>：能力最深，但一次迭代成本高，知识长在权重里，没法 diff，也没法多人协作。</li>
<li><strong>RAG</strong>：适合海量资料的召回，但它的粒度是"文档片段"，对"在什么场景下该用哪种做法"这种程序性知识表达得很别扭。</li>
<li><strong>Prompt 模板</strong>：灵活，但没有结构，很快就变成一堆互相冲突的长字符串。</li>
<li><strong>Function calling / 工具</strong>：非常适合确定性动作，但你没法用一个工具去教模型"我们团队 code review 时看哪些东西"。</li>
</ul>
<p>Skill 赢的地方是：它卡在了一个别人没好好填的生态位——<em>程序性的、领域相关的、需要被选择性加载的知识</em>。它输的地方也很明显：它不保证执行，只提供建议；它的"触发"依赖模型的判断，而不是一个 if-else。</p>
<p>所以它不是来替代上面这些的，是在它们旁边开了一个新抽屉。</p>
<h2>三、为什么分发单位是一个目录</h2>
<p>这件事我一开始有点看不懂。为什么不是一个 <code>.skill</code> 二进制、一个远端 API、一个注册中心里的 ID？为什么是一个平平无奇的目录？</p>
<p>想通之后觉得这个选择挺狠的。目录意味着：</p>
<ol>
<li><strong>可版本化</strong>：直接 git。每一次改动是一个 commit，每一次发布是一个 tag。生态里已有的工具链全能复用。</li>
<li><strong>可读</strong>：不用解压、不用反编译、不用打开专门的 viewer。一个 <code>cat SKILL.md</code> 就能看懂它在干嘛。</li>
<li><strong>可 diff</strong>：review 一个 Skill 的变更，跟 review 一段代码没有本质区别。团队已经会做这件事了。</li>
<li><strong>可组合</strong>：目录里可以放子脚本、模板、引用；它既是内容，又是一个小型工作区。</li>
</ol>
<p>用目录作分发单位，等于宣布："Skill 的治理方式就是软件工程的治理方式"——这句话比它听起来的要激进得多。</p>
<h2>四、想象一个"团队 Skill 市场"</h2>
<p>顺着这个思路往前推一步。如果每个团队都有自己内部的一套 Skill，会发生什么？</p>
<ul>
<li><strong>新人入职</strong>：不再是读一周 wiki，而是 <code>clone</code> 一个 skills 仓库。模型替他/她把那些规约"随叫随到"地带在身边。</li>
<li><strong>团队规约</strong>：code style、commit 规范、发布流程、on-call 手册，每一份都是一个 Skill。改规约 = 提 PR，而不是群里发公告。</li>
<li><strong>合规要求</strong>：某些 Skill 可以是"强制加载"的——比如数据脱敏、审计日志、敏感词——不是靠人记得，是靠 harness 保证。</li>
<li><strong>跨团队复用</strong>：基础设施团队维护一组"平台 Skill"，业务团队直接依赖，就像今天依赖内部 npm 包一样。</li>
</ul>
<p>这不是科幻，这只是把今天团队已经在做的事——写 wiki、做 onboarding、维护 runbook——<em>挪了个位置</em>，让它们真正能被日常工作中的 agent 消费到。</p>
<h2>五、也得说说风险</h2>
<p>再好的原子，也会带来新的问题。Skill 至少有三个我现在能看到的坑：</p>
<ul>
<li><strong>Skill 污染</strong>：当 Skill 数量从十几个涨到几百个，很多描述会彼此重叠。模型面对一堆"看起来都挺相关"的候选，可能选错，也可能选不动。这件事本质上是一个<em>命名空间 + 相关性排序</em>问题，早晚要被严肃处理。</li>
<li><strong>权威性</strong>：谁写的 Skill 可信？一个公开市场里，怎么区分"某大厂官方发布的 PostgreSQL 运维手册"和"某个匿名账号复制粘贴的版本"？签名、来源、版本、依赖——这些包管理器踩过的坑，Skill 生态一个都跑不掉。</li>
<li><strong>Debug 难度</strong>：模型悄悄加载了一个 Skill，按它的指引做了一件你没预期的事。你看 transcript 才反应过来"哦，它是被那份手册带偏的"。可观测性必须跟上，否则 Skill 会变成新一代的"玄学配置"。</li>
</ul>
<h2>六、"文档即能力"为什么反直觉</h2>
<p>最后想说一句容易被当成口号、但其实挺反直觉的话：<strong>在 agent 时代，文档本身就是一种能力</strong>。</p>
<p>过去我们写文档，是写给人看的——人读完，把知识装进脑子，再靠人去执行。文档和执行之间，隔着一个"人类理解并照做"的步骤，很厚。</p>
<p>Skill 把这一层抽掉了。你写的手册，不再只是等着被人读，而是随时可能被一个正在干活的 agent 翻到、照做。这意味着一份写得好的文档，<em>直接</em>等价于一份能被执行的能力。</p>
<p>反过来说，一份写得糊涂的文档，以前最多让新人困惑，现在会让无数个 agent session 集体犯同一个错。文档的"杠杆"被放大了，好的被放大，烂的也被放大。</p>
<h2>七、一个不算结论的结论</h2>
<p>npm 出现之前，没人觉得 JavaScript 会有今天这个生态。VSCode 开放 extension 之前，编辑器大战的格局看起来完全不一样。共享原子的威力，往往要在它铺开好几年之后，才会被事后追认。</p>
<p>Skill 现在还很早。生态里没几个人真的写过，更没几个团队真的在共享。但它选对了分发单位（目录）、选对了消费方式（按需加载）、选对了治理框架（软件工程），这三件事凑齐之后，剩下的基本就是时间问题。</p>
<p>我愿意下一个小小的注：五年后回头看，Skill 这一类"可分发的、按需加载的知识单元"，会被认为是 agent 生态真正跑起来的那个关键原子。至于它最终叫不叫 Skill，不重要。</p>`,
  },
  {
    slug: 'writing-good-skills',
    title: '怎么写一个好用的 Skill：一份给自己的复盘',
    date: '2026-04-21',
    tags: ['技术', 'AI', 'Agent', 'Claude Code', 'Skill'],
    excerpt:
      '知道 Skill 是什么和能写出一个好用的 Skill 之间，差的不是一点点。这篇不聊概念，只聊手感：description 为什么是命门、SKILL.md 该长什么样、为什么要把 Skill 当成 onboarding 文档来写，以及我踩过的几个坑。',
    contentHTML: `<p>上一篇写了 Skill 的机制和它在扩展体系里的位置，偏"是什么"。写完之后自己又折腾了一段时间，发现"知道 Skill 是什么"和"能写出一个好用的 Skill"之间，差的还挺远的。</p>
<p>这篇算是一份给自己的复盘，不讲原理，只讲我在"怎么动手写"这件事上被教育过的几个点。</p>
<h2>一、一个 Skill 的最小解剖</h2>
<p>剥到最小，一个 Skill 就是一个目录 + 一份 <code>SKILL.md</code>。<code>SKILL.md</code> 的开头是一段 YAML frontmatter，大致长这样：</p>
<ul>
<li><strong>name</strong>：Skill 的标识，一般跟目录名一致。</li>
<li><strong>description</strong>：一句话说清"我是干嘛的，什么时候该用我"。后面会专门说它。</li>
</ul>
<p>frontmatter 下面，就是正文——一份给模型看的操作手册。目录里除了 <code>SKILL.md</code>，还可以放参考文档、示例文件、模板、脚本。这些东西<em>不会</em>自动进上下文，只有模型在读了 <code>SKILL.md</code>、判断需要时，才会再主动去 Read 它们。</p>
<p>这个"分层"很关键，后面会展开。</p>
<h2>二、description 是那行最贵的字</h2>
<p>如果你只能在一个 Skill 上花十分钟，那十分钟都该花在 description 上。</p>
<p>原因很朴素：<strong>description 是模型决定"要不要加载这个 Skill"的唯一依据</strong>。它平时就占这几十个 token，其他什么都不进模型视野。写得不好的后果有两种：</p>
<ol>
<li><strong>写太泛</strong>："辅助处理文档相关任务"——几乎任何涉及文档的对话都会把它拽出来，最后它变成噪音。</li>
<li><strong>写太窄或太内部黑话</strong>："处理 <code>XYZ-v2</code> 协议"——模型看不出来当前任务跟它有关，真正该用的时候反而 miss。</li>
</ol>
<p>我现在写 description 会刻意包两部分：<em>做什么</em> + <em>什么场景该触发</em>。后者可以直接列几个典型的用户说法或代码特征，相当于给模型一张"认人脸"的小抄。Anthropic 官方的 skill 也是这个套路——你会看到它们的 description 里经常出现"TRIGGER when..."、"用户提到 XX / YY / ZZ 时"这种非常具体的引导。</p>
<h2>三、把 Skill 当成"给新人的 onboarding 文档"来写</h2>
<p>这是我觉得最有用的一个心智模型。</p>
<p>不要把 Skill 写成 prompt。Prompt 是你对一个<em>特定任务</em>的当下指令；Skill 是你对一个<em>领域</em>的长期沉淀。前者是邮件，后者是 wiki。</p>
<p>具体来说，当我卡住不知道该怎么下笔时，我会把问题换成："如果今天新来一个同事要接这摊活，我会怎么给他写一份上手文档？"——然后答案就顺了：</p>
<ul>
<li>会先讲这个领域是做什么的、边界在哪。</li>
<li>会列关键概念和术语。</li>
<li>会给一个"典型流程"的骨架：遇到这类需求，一般按什么步骤走。</li>
<li>会在容易踩坑的地方写"注意"。</li>
<li>不会去预测"如果用户说 A 就怎样、说 B 就怎样"——那是 prompt 的活，不是文档的活。</li>
</ul>
<h2>四、分层：SKILL.md 要短，细节放到旁边的文件里</h2>
<p>渐进式披露不只是机制层面的概念，它也直接影响你<em>写</em> Skill 的方式。</p>
<p>我的经验是：</p>
<ul>
<li><code>SKILL.md</code> 主体保持在"一页纸以内读完"的长度，只放<strong>通用流程</strong>和<strong>判断分支</strong>。</li>
<li>具体的 API 签名、长示例、边缘情况的处理细节，拆成 <code>reference.md</code> / <code>examples/</code> 这类文件。</li>
<li>在 <code>SKILL.md</code> 里<em>明确告诉模型</em>："遇到 X 情况，去读 <code>reference/x.md</code>"。</li>
</ul>
<p>这样做的好处是，平时这个 Skill 被加载时，只占一页纸的上下文；真需要翻细节时，模型会按你写的路径主动去读。既不浪费，也不遗漏。</p>
<h2>五、我踩过的几个坑</h2>
<ol>
<li><strong>写得像 prompt 而不是像文档</strong>。通篇"你应该…"、"请先…"、"然后请…"，读起来像对某一次对话说话，而不是一份能反复用的手册。</li>
<li><strong>把用户的触发意图塞进 Skill 正文</strong>。"当用户说想要 XX 时…"——这种判断应该在 description 里帮模型做出来，一旦 Skill 被加载，就默认"已经该用了"，不用再在正文里反复确认。</li>
<li><strong>堆太多 if/else 分支</strong>。Skill 一旦变成一棵巨大的决策树，模型反而容易迷路。大部分分支其实可以折叠成一句"根据情况选择最合适的做法"，把判断权还给模型。</li>
<li><strong>什么都想塞进一个 Skill</strong>。结果 description 被迫写得很抽象，触发反而变差。</li>
</ol>
<h2>六、什么时候拆、什么时候合</h2>
<p>判断拆不拆，我一般看两件事：</p>
<ul>
<li><strong>触发场景是否能用一句话说清</strong>。如果一个 Skill 的 description 必须写成"用于 A 或 B 或 C，其中 A 时…B 时…"，基本就是该拆的信号。</li>
<li><strong>正文里的流程是否共享同一套概念</strong>。共享的留一起，不共享的分开。两个 Skill 如果互相之间没有概念重叠，硬合只会让 description 变糊。</li>
</ul>
<p>反过来，如果两个 Skill 的正文经常互相引用、描述的是同一件事的不同侧面，那它们大概率应该是一个 Skill 的两个章节，而不是两个独立 Skill。</p>
<h2>七、一个不算结论的结论</h2>
<p>写 Skill 这件事，技术门槛其实很低——没有 SDK，没有编译步骤，本质上就是写 Markdown。但"写出让模型用得顺的 Skill"是一件需要手感的事，跟写好一份技术文档所需要的能力高度重合：<em>知道读者是谁、知道什么该说、更知道什么不用说</em>。</p>
<p>从这个角度看，Skill 把 agent 的能力扩展，悄悄变成了一个每个工程师都已经练了很多年的动作：<strong>把自己脑子里的那套东西，写清楚给别人看</strong>。</p>`,
  },
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
  {
    slug: 'writing-your-first-skill',
    title: '动手写第一个 Skill：一份踩过坑之后的实操笔记',
    date: '2026-04-21',
    tags: ['技术', 'AI', 'Agent', 'Claude Code'],
    excerpt:
      '写一个能跑的 Skill，比想象中简单；写一个模型愿意加载、用得顺手的 Skill，比想象中讲究。这篇不谈理念，只谈怎么动手：目录怎么摆、SKILL.md 怎么写、脚本和模板怎么组织、调试"为什么没加载"的思路，以及个人 Skill 和团队 Skill 该怎么选。',
    contentHTML: `<p>上一篇聊了 Skill 的设计哲学，这篇来干点实在的——从零写一个能用的 Skill，顺便把我自己踩过的坑记一下。</p>
<p>前提不多：你用着 Claude Code，手上有一件想让它稳定做好的事（跑压测、生成 release note、按规范提交代码都行），但每次都要重新解释一遍，烦。那就适合写成一个 Skill。</p>
<h2>一、最小目录长什么样</h2>
<p>一个 Skill 的最小单位，是一个文件夹加一份 <code>SKILL.md</code>。放在 <code>~/.claude/skills/</code> 下是个人 Skill，放在仓库里的 <code>.claude/skills/</code> 下是团队 Skill。</p>
<p>举个例子，假设我们要写一个叫 <code>release-notes</code> 的 Skill：</p>
<ul>
<li><code>release-notes/SKILL.md</code> — 入口文件，必须叫这个名字</li>
<li><code>release-notes/template.md</code> — 我们团队的 release note 模板</li>
<li><code>release-notes/scripts/collect-commits.sh</code> — 从 git log 拉变更的脚本</li>
<li><code>release-notes/examples/v1.2.0.md</code> — 一份写好的样本</li>
</ul>
<p>就这四个文件，够用了。不需要 <code>package.json</code>，不需要注册，不需要声明依赖。丢进目录，Claude Code 下次扫 Skill 列表时就会看到它。</p>
<h2>二、SKILL.md 的头部：description 是胜负手</h2>
<p>SKILL.md 开头是一段 YAML frontmatter，长这样：</p>
<ul>
<li><code>name</code>：Skill 的名字，小写带连字符，跟目录名保持一致</li>
<li><code>description</code>：一句话说明"这个 Skill 是干嘛的、什么时候该用"</li>
</ul>
<p>这里藏着一个新手最容易栽的坑：<strong>description 不是写给人看的，是写给模型判断"要不要加载我"看的</strong>。</p>
<p>反面例子："生成 release notes 的工具。" —— 模型看完等于没看。什么时候该用？跟别的 Skill 怎么区分？它不知道。</p>
<p>好一点的写法：<em>"当用户要求生成 release notes、整理版本变更、或基于 git 提交生成更新日志时使用。输出遵循团队 Markdown 模板，包含 Breaking Changes / Features / Fixes 三段式。"</em></p>
<p>注意两个要点：<strong>触发场景</strong>写得具体（用户会用什么说法来表达这个需求），<strong>产出形态</strong>写得清楚（这个 Skill 会产生什么）。模型在几十个 Skill 的目录里挑一个，靠的全是这一行。</p>
<h2>三、正文：写给"一个聪明但不了解你们团队的新人"</h2>
<p>SKILL.md 的正文，就是一份操作手册。我自己的写法是假想在给一个刚入职的同事讲："遇到这类任务，你按下面这几步做。"</p>
<p>几个经验：</p>
<ol>
<li><strong>分步骤、给顺序</strong>。别只堆规范，要写成"先做 A，再做 B，如果 C 就跳到 D"。模型非常吃这种结构化流程。</li>
<li><strong>引用附带文件，而不是把内容抄进来</strong>。模板放 <code>template.md</code>，在 SKILL.md 里写"读取 <code>template.md</code> 作为骨架"就行。渐进式披露的好处就在这儿——模板文件只有真正走到那一步才会被加载。</li>
<li><strong>把脚本当工具用</strong>。能用 shell 一行搞定的事（拉 commit、算 diff、生成时间戳），写成脚本让模型调用，别让模型"自己推理 git log 该怎么 parse"。</li>
<li><strong>把常见错误和边界条件单独列一节</strong>。"如果仓库里没有上一个 tag 怎么办"、"如果 commit message 不规范怎么办"，写清楚，模型会照做。</li>
</ol>
<h2>四、调试：为什么模型没加载我的 Skill</h2>
<p>写完之后最常见的困惑是：我明明放进去了，它怎么没用？几个排查顺序：</p>
<ul>
<li><strong>先确认能被发现</strong>。在 Claude Code 里直接问"你现在能看到哪些 Skill"，确认你的 Skill 出现在列表里。没出现，就是路径或者文件名的问题（<code>SKILL.md</code> 大小写敏感）。</li>
<li><strong>再确认 description 能触发</strong>。用你期望的"用户说法"去提任务，观察模型有没有主动说"我来用一下 xxx Skill"。如果它在干一件明显该用 Skill 的活但没加载，八成是 description 写得太含糊。</li>
<li><strong>最后才看正文</strong>。加载了但效果不对，才是正文的问题——步骤不够明确、模板没被引用、脚本路径写错之类。</li>
</ul>
<p>顺序很重要：不要一上来就改正文，大多数"没加载"的问题都死在第二步。</p>
<h2>五、个人 Skill 还是团队 Skill</h2>
<p>这两个位置有一条很清晰的分界线。</p>
<p><strong>个人 Skill（<code>~/.claude/skills/</code>）</strong>：你自己的工作习惯。比如你喜欢某种 commit message 风格、习惯某套调试脚本、有自己的一套笔记模板。这些东西别人未必认，也不该强加给别人。</p>
<p><strong>团队 Skill（仓库里 <code>.claude/skills/</code>）</strong>：属于这个项目的知识。发布流程、代码规范、测试策略、部署 checklist——任何"新人加入项目第一周该掌握"的东西，都适合放这儿，跟着仓库一起 git 版本化。</p>
<p>判断方法很简单：<em>这份手册换个项目还成立吗？</em> 成立就放个人目录，不成立就放仓库。</p>
<h2>六、工程化一点的小建议</h2>
<p>写多了之后，我给自己立了几条规矩：</p>
<ul>
<li>每个 Skill 单独一个目录，不要图省事把多个能力塞进一个 SKILL.md。description 是按 Skill 粒度匹配的，合并会让模型更难判断。</li>
<li>脚本写得幂等、可重入。模型可能会重试，副作用大的操作记得加确认或 dry-run 开关。</li>
<li>把样例输出放到 <code>examples/</code> 里。比起抽象地说"按照我们的风格"，给一份样本让模型对着仿，效果好得多。</li>
<li>SKILL.md 顶部写一小段 changelog。跟代码一样会迭代，写清楚"v2 改了什么、为什么"对后来的维护者（包括未来的你）很有用。</li>
</ul>
<p>写 Skill 这件事，本质上跟写一份好 README 没区别——清晰、具体、给新人看得懂。区别只在于，这个"新人"是一个记忆力极好但每次都失忆的模型。你把手册写得越好，它每次"入职"就越快。</p>`,
  },
  {
    slug: 'skill-vs-mcp-vs-rag-vs-finetune',
    title: '给 agent 喂知识的四条路：Skill、MCP、RAG、Fine-tune 到底该怎么选',
    date: '2026-04-21',
    tags: ['技术', 'AI', 'Agent', 'MCP', 'RAG'],
    excerpt:
      '想让一个通用模型"懂你的业务"，现在主流有四条路：Skill 写成文件、MCP 暴露成接口、RAG 喂成向量、fine-tune 烧进权重。这篇不聊哪个最强，只聊各自的成本曲线、失效模式和团队协作上的差异——以及为什么 Skill 在不少场景下是被严重低估的那个。',
    contentHTML: `<p>"我想让 agent 懂我们公司的业务"——这句话我这两年听了不下五十遍。每次展开聊，最后都会收敛到同一个问题：<strong>知识到底放哪儿</strong>。</p>
<p>放在模型权重里、放在向量库里、放在一个 API 后面、还是放在一份 Markdown 文件里，听起来像实现细节，其实是完全不同的四种工程哲学。这篇想把它们摆一起看看。</p>
<h2>一、四条路，分别在做一件什么事</h2>
<p>先给四个名词做个最朴素的翻译：</p>
<ul>
<li><strong>Fine-tune</strong>：把知识<em>烧进模型权重</em>。训练一轮之后，模型"天生"就知道这些事。</li>
<li><strong>RAG</strong>：把知识切成块、向量化、存进库里。每次对话前做一次检索，把相关片段塞进 prompt。</li>
<li><strong>MCP</strong>：把知识或能力<em>暴露成一个接口</em>。模型通过工具调用去问、去做。</li>
<li><strong>Skill</strong>：把知识写成<em>文件</em>，挂在约定目录下。模型看到标题和描述，需要时才把全文拉进上下文。</li>
</ul>
<p>四种都是"让 agent 懂一点原本不懂的东西"，但注入时机、注入单位、更新成本、失效方式完全不同。</p>
<h2>二、成本曲线：你到底在为什么付钱</h2>
<p>挑方案不能只看"能不能实现"，得看<strong>代价长什么样</strong>。</p>
<ol>
<li><strong>Fine-tune</strong>：前期贵得吓人——数据清洗、训练算力、评估集。但推理时几乎零额外成本，因为知识已经在权重里了。代价在"改"：业务一变，整套流程重来一遍。</li>
<li><strong>RAG</strong>：前期中等——建索引、做 embedding、调 chunk 策略。推理时每次都要检索、都要把片段拼进 prompt，<em>token 成本是持续线性增长的</em>。代价在"脏"：检索结果不准时，模型会被误导，而你很难一眼看出是哪一段文本害的。</li>
<li><strong>MCP</strong>：前期成本在"做一个靠谱的服务"——定义接口、写实现、处理认证和限流。推理时按调用次数算，通常比 RAG 省 token，但多一次网络往返。代价在"运维"：MCP server 挂了，agent 这条能力就瞎了。</li>
<li><strong>Skill</strong>：前期几乎是零——写一份 Markdown，丢进目录。推理时只有被"翻开"的那几次才占 token。代价在"克制"：你得愿意用写文档的方式思考，而不是用写代码的方式。</li>
</ol>
<p>一句话版本：<em>fine-tune 是买断，RAG 是订阅，MCP 是外包，Skill 是写书</em>。</p>
<h2>三、失效模式：出问题的时候都长什么样</h2>
<p>这部分其实比"正常情况下多好用"更重要。</p>
<ul>
<li><strong>Fine-tune 失效</strong>：模型会<em>一本正经地说错话</em>。因为错误知识已经被权重内化，它不知道自己在错。定位极难，修复只能再训一轮。</li>
<li><strong>RAG 失效</strong>：最常见的是"检索到了无关段落"或"正确段落没进 top-k"。模型拿着错料做菜，输出看起来言之凿凿，实际跟问题错位。调试要同时看检索日志和生成日志，双线排错。</li>
<li><strong>MCP 失效</strong>：相对最干净——接口报错、超时、返回格式变了，基本能在日志里看到。坏处是"接口设计得不好"会让模型反复乱调、陷入循环。</li>
<li><strong>Skill 失效</strong>：主要是"模型没意识到该翻这本手册"。好处是出问题时<em>上下文里有完整原文</em>，很容易复盘——要么 description 没写好，要么 Skill 本身覆盖不到这个场景。</li>
</ul>
<p>可观测性从好到差排一下，大概是：<strong>MCP ≈ Skill &gt; RAG &gt; Fine-tune</strong>。这也是为什么越靠谱的团队越倾向前两种。</p>
<h2>四、团队协作：谁能改、改了谁知道</h2>
<p>这是一个很少被拿出来谈、但对长期使用至关重要的维度：<em>知识的所有权</em>。</p>
<ul>
<li>Fine-tune 的知识，<strong>只有会训模型的人能改</strong>。产品同学写的一句新规则，要排进下一轮训练。</li>
<li>RAG 的知识，改起来容易（扔文档进库），但"为什么这次检索没命中"经常要算法同学来查。</li>
<li>MCP 的知识，改起来像改一个微服务，<strong>属于后端工程师的领地</strong>。</li>
<li>Skill 的知识，就是一份 Markdown。<em>任何会写 README 的人都能贡献、都能 review、都能回滚</em>。</li>
</ul>
<p>把这一栏单独拎出来看，Skill 的独特之处就很明显了：它把"给 agent 喂知识"这件事，从一个 ML 问题或后端问题，变成了一个<strong>普通的写作和 code review 流程</strong>。而写作和 code review，是这个行业最成熟的两个协作范式。</p>
<h2>五、那到底怎么选</h2>
<p>给几个我自己在用的判断启发：</p>
<ol>
<li><strong>知识是"规则/流程/模板"</strong>——写成 Skill。版本化、可审阅、按需加载，成本最低。</li>
<li><strong>知识是"大量半结构化文本，问法千变万化"</strong>——用 RAG。比如客服知识库、产品文档全量搜索。</li>
<li><strong>知识其实是"能力"，需要实时查询或执行动作</strong>——做 MCP。比如查订单状态、下发一个审批。</li>
<li><strong>知识是"语气、风格、输出偏好"，而且量足够大</strong>——考虑 fine-tune。但八成时候你会发现，前三种组合就够了。</li>
</ol>
<p>很多团队的误区是<em>默认跳到 RAG 或 fine-tune</em>，因为这两个名词在行业里更响。但如果你的"知识"本质上是一份操作手册，硬塞进向量库反而会丢结构、丢上下文。写成 Skill，模型按需翻页，既省 token 又省心。</p>
<h2>六、一个不算结论的结论</h2>
<p>四条路不是互斥的。现实里一个成熟 agent 系统，往往是<strong>Skill 做骨架、MCP 接能力、RAG 兜底检索、fine-tune 只在风格层动一下</strong>。</p>
<p>但如果你只能先选一个起步，我会推荐从 Skill 开始——它最轻、最可逆、最便于团队集体贡献。等真的遇到 Skill 解不了的问题，再加 MCP 或 RAG 也不迟。</p>
<p>毕竟工程上一个朴素的道理是：<em>先用最便宜的方式解决，再用最贵的方式优化</em>。把顺序搞反，才是最常见的那种昂贵错误。</p>`,
  },
  {
    slug: 'skill-anti-patterns',
    title: 'Skill 的反模式：哪些东西不该写成 Skill',
    date: '2026-04-21',
    tags: ['技术', 'AI', 'Agent', 'Claude Code', 'Skill'],
    excerpt:
      '写了一堆 Skill 之后，我踩到的真正的坑，不在"怎么把 Skill 写好"，而在"这件事压根就不该写成 Skill"。这篇是一份反向清单——哪些需求你以为该写 Skill，其实写了会后悔。',
    contentHTML: `<p>前面几篇一直在讲怎么写 Skill、Skill 有多好。这篇想反过来聊聊：<strong>哪些东西，看起来挺像 Skill 的活，但你一旦真的写成 Skill，就会开始后悔</strong>。</p>
<p>我自己这段时间写了不下二十个 Skill，真正让我学到东西的，不是那些写得顺手的，而是那几个写完越用越别扭、最后默默删掉的。它们有一些共同的模式，值得单独拎出来说。</p>
<h2>一、需要"每次都执行"的事，别写成 Skill</h2>
<p>这是最常见、也最容易犯的错。</p>
<p>举个例子：团队要求每次 commit 前跑一遍 lint、每次写完 SQL 都要过一遍脱敏检查、每次部署前都要校验某个配置。这类需求的关键词是<strong>"每次"</strong>——它不是"看情况"，是刚性执行。</p>
<p>写成 Skill 的话，触发权在模型。模型可能心情好记得翻手册，也可能这一轮任务上下文紧、description 没命中、手一滑就跳过了。你以为加了一道防线，其实只加了一道<em>半透明的提醒</em>。</p>
<p>这种事应该写成 <strong>hook</strong>。harness 帮你保证执行，跟模型的判断无关。Skill 是"建议"，hook 是"合约"。把合约塞进建议里，是把一件确定性的事，硬拗成了一件概率性的事。</p>
<h2>二、只用一次的任务，别写成 Skill</h2>
<p>Skill 的价值是<em>摊销</em>——写一次，未来无数个 session 受益。如果你今天要干一件以后很可能再也不干的活（做一次性数据迁移、清一次历史表、给某个同事做一次特殊 onboarding），请直接写一个长 prompt，或者塞一份临时说明给当前对话。</p>
<p>把一次性任务写成 Skill 的代价有两个：</p>
<ol>
<li><strong>污染 Skill 列表</strong>。description 永远在那儿，每次决策都要被模型扫一遍，长期看是纯噪音。</li>
<li><strong>维护惯性</strong>。你会不自觉地"为了完整"往里补内容，结果为一件一次性的事，花了写三次性东西的精力。</li>
</ol>
<p>一个朴素的判断：<em>这件事你预期半年内会做几次？少于三次，就别写 Skill</em>。</p>
<h2>三、高频、低变化的能力，应该是 MCP</h2>
<p>有些事，模型每次做都得走一整套流程：查订单状态、读某个内部数据库、调一个审批接口。这类需求的特点是——<strong>动作高度确定，只是参数不同</strong>。</p>
<p>写成 Skill 可以吗？可以。你可以在 SKILL.md 里写"遇到查询订单的需求，按以下步骤：先 curl 这个 endpoint、再 parse 这段 JSON、再格式化成表格……"。模型照做，多半也能跑。</p>
<p>但这是在让模型<em>每次重新推导一件本该是函数调用的事</em>。token 花得冤，出错的面还大。正确的做法是把它封装成一个 MCP 工具，给模型一个干净的接口，让它专注在"什么时候调"，而不是"怎么调"。</p>
<p>我的粗略分界线：如果一件事的"怎么做"部分，写出来基本是一段可执行代码，就该变成工具；如果"怎么做"的核心是<em>判断、取舍、风格、流程编排</em>，Skill 才合适。</p>
<h2>四、合规与安全，不能靠 Skill</h2>
<p>这个点我想单独强调，因为代价最大。</p>
<p>"所有涉及用户数据的操作都要脱敏"、"所有外发邮件都要走审核"、"生产环境不能直接执行写操作"——这些规则如果只写在 Skill 里，等于把最后一道防线建在<strong>模型的注意力</strong>之上。</p>
<p>模型的注意力不是合约。它会被长上下文稀释、会被紧急任务挤走、会被 description 写得不够好而 miss。一旦 miss，后果不是"效果差一点"，是"合规事故"。</p>
<p>这类规则必须落在 harness 层——hook、权限配置、工具白名单。Skill 可以<em>辅助</em>说明，但不能是唯一依赖。写合规 Skill 时多问自己一句：<em>如果模型这次没读它，后果能不能承受</em>？不能承受，就别只靠它。</p>
<h2>二、三、四 加起来其实是同一个道理：<strong>触发权在谁手里，决定了这东西能不能承担这件事</strong>。</p>
<h2>五、别写"大杂烩 Skill"</h2>
<p>新手最容易写出来的一种 Skill，是那种标题叫"后端开发助手"、"前端通用工具"、"数据处理"的庞然大物。里面装了二十个 use case，description 写成"协助进行后端相关的各类开发任务"。</p>
<p>这种 Skill 的结局基本只有一个：<em>什么场景都能匹配，什么场景都匹配得不准</em>。模型要么反复加载一个重得要命的 SKILL.md、吃掉一大块上下文，要么在 description 太泛的情况下根本触发不了。</p>
<p>判断一个 Skill 是不是大杂烩，有个简单的尺子：你能不能用一句话、不带"或"字，说清它是干嘛的？说不清，就该拆。</p>
<p>Skill 的粒度应该跟"一次典型任务"对齐，而不是跟"一个领域"对齐。"生成 release notes"是一个 Skill，"后端开发"不是。</p>
<h2>六、别用 Skill 装状态和数据</h2>
<p>我见过有人把一份每天都在更新的值班表、一个在线变化的功能开关列表、一段最近的 incident 记录——写进 SKILL.md。</p>
<p>想法能理解：反正模型会读，那我就把"现在的实际情况"也塞进去，它就能用了。</p>
<p>问题是，Skill 文件的更新路径是 <strong>git commit</strong>。你真的要每次值班轮换都提一个 PR 吗？更现实的情况是，文件很快就过期，而模型还在一本正经地照着读。错误输出的归因会非常难——你花很久才能意识到，它是被一份半年前的手册带偏的。</p>
<p>规则很简单：<em>Skill 里放不变或慢变的知识，放"怎么做"；动态的"现在是什么"应该通过工具查，或者由用户在对话里提供</em>。手册是手册，运行时状态是运行时状态，不能混。</p>
<h2>七、别把 Skill 当搜索索引</h2>
<p>还有一种反模式是把一堆文档的全文——API 参考、整本产品手册、历史 ADR——原样塞进 Skill 目录里，指望模型"需要的时候自己翻"。</p>
<p>这是在错位地使用两个工具。大批量、问法多变的全文资料，天然适合 RAG：切块、向量化、按问题召回相关片段。硬塞进 Skill 的结果是：要么 SKILL.md 本身体积失控，加载一次就吃掉半个上下文；要么内容被切到了附属文件里，但模型找不到精确的入口。</p>
<p>Skill 擅长表达的是<strong>程序性知识</strong>——"遇到这种情况，按这个流程做"。RAG 擅长表达的是<strong>陈述性知识</strong>——"关于 X，我们的文档里是这么描述的"。不要指望一个干另一个的活。</p>
<h2>八、别把 Skill 写成"提示词库"</h2>
<p>最后一个比较隐蔽的反模式：把自己收藏的一堆"好用 prompt"，按主题打包成 Skill。SKILL.md 的正文是一段段"你是一个资深 XX，请按以下要求……"。</p>
<p>这种 Skill 表面上能跑，实际上每次被加载，都会让模型进入一种<em>角色扮演状态</em>，反而干扰它正常的任务判断。Skill 应该描述"这个领域要怎么做"，不是"请你假装成某种角色"。前者是文档，后者是 prompt——两种东西糅在一起，读起来精分。</p>
<p>如果你有好用的 prompt，收在自己的笔记里；真正值得进 Skill 的，是你在用这个 prompt 的过程中，沉淀下来的那些<em>流程、判断、边界条件</em>。</p>
<h2>九、一个不算结论的结论</h2>
<p>写到这里，会发现上面这些反模式背后其实是同一件事：<strong>Skill 是一种特定形态的东西，它不是万能容器</strong>。</p>
<p>它的形态决定了它适合什么：</p>
<ul>
<li>触发权在模型 → 适合建议性、场景性的知识，不适合刚性合约。</li>
<li>内容是静态文本 → 适合慢变的手册，不适合动态状态。</li>
<li>按需加载一份 → 适合聚焦的单件任务，不适合海量检索，也不适合一次性杂事。</li>
<li>作为"怎么做"的文档 → 不适合替代工具、也不适合伪装成 prompt。</li>
</ul>
<p>Skill 好用，但不是因为它能干所有事，恰恰是因为它<em>只干一件事，并且干得很克制</em>。判断一个需求适不适合写 Skill，比判断"这个 Skill 怎么写好"更重要，也更省事——因为后者最多让你多改几版，前者能让你避免写一个注定要删的东西。</p>
<p>下次动手前，不妨先问自己一句：<em>这件事真的是 Skill 的形状吗</em>？不是的话，它可能是个 hook、一个 MCP、一条 RAG 索引，或者干脆就是一段当场写的 prompt。工具用对形状，比用得花哨更重要。</p>`,
  },
  {
    slug: 'react-hooks-guide',
    title: 'React Hooks 入门与最佳实践',
    date: '2026-04-21',
    tags: ['React', '前端', 'Hooks'],
    excerpt:
      'Hooks 把 React 的心智模型从"生命周期"推向了"副作用 + 数据流"，但真正上手时，依赖数组、闭包陷阱、过度 memo 也是最容易踩坑的地方。这篇从 useState 讲到自定义 Hook，顺带聊聊几条能救命的最佳实践。',
    contentHTML: `<p>React 16.8 引入 Hooks 已经是好几年前的事了，但直到今天，团队里还是经常能看到"什么时候该 useMemo"、"依赖数组到底写不写这个变量"之类的讨论。Hooks 的 API 数量不多，真正的门槛在于背后的那套心智模型：组件函数每次渲染都会重新执行，Hook 只是让你在这种"一次性执行"里挂住一些跨渲染的状态和副作用。</p>
<p>这篇尝试把常用 Hook 串一遍，再挑几个最容易踩的坑聊聊。</p>
<h2>一、什么是 Hooks</h2>
<p>Hooks 是一组让函数组件也能拥有状态、副作用、上下文等能力的函数。在 Hooks 之前，这些能力只属于 class 组件——你要写 <code>this.state</code>、<code>componentDidMount</code>、<code>componentDidUpdate</code>，在生命周期之间手动对齐逻辑。</p>
<p>Hooks 的核心思路是：<strong>把"某个功能"所需的状态、订阅、清理放在一起</strong>，而不是按生命周期拆散。一个典型对比：</p>
<ul>
<li>class 时代：订阅事件写在 <code>componentDidMount</code>，解绑写在 <code>componentWillUnmount</code>，两段逻辑隔得很远。</li>
<li>Hooks 时代：一个 <code>useEffect</code> 里既写订阅、也写清理，一眼看得完。</li>
</ul>
<p>使用 Hooks 有两条铁律：<strong>只能在函数组件或自定义 Hook 的顶层调用</strong>，<strong>不能在条件、循环、嵌套函数里调用</strong>。React 依赖调用顺序来匹配每个 Hook 的状态，顺序一变，数据就错位了。</p>
<h2>二、useState：最基本的状态</h2>
<p><code>useState</code> 返回一个状态值和一个更新函数。更新函数既可以接收新值，也可以接收一个"上一状态 → 新状态"的函数：</p>
<pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;button onClick={() =&gt; setCount((c) =&gt; c + 1)}&gt;
      点了 {count} 次
    &lt;/button&gt;
  );
}</code></pre>
<p>这里有个容易忽略的细节：当新状态依赖旧状态时，<strong>永远用函数式更新</strong>（<code>setCount(c =&gt; c + 1)</code>），而不是 <code>setCount(count + 1)</code>。后者在异步回调或批量更新里会拿到陈旧的 <code>count</code>。</p>
<h2>三、useEffect：处理副作用</h2>
<p><code>useEffect</code> 用来处理"渲染之外的事情"——网络请求、订阅、手动操作 DOM、定时器等。它接收两个参数：一个副作用函数，一个依赖数组。</p>
<pre><code>import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() =&gt; {
    let cancelled = false;
    fetchUser(userId).then((data) =&gt; {
      if (!cancelled) setUser(data);
    });
    return () =&gt; {
      cancelled = true;
    };
  }, [userId]);

  if (!user) return &lt;p&gt;加载中…&lt;/p&gt;;
  return &lt;p&gt;{user.name}&lt;/p&gt;;
}</code></pre>
<p>几个要点：</p>
<ul>
<li>依赖数组决定副作用什么时候重跑。空数组表示"只在挂载时跑一次"，不写则每次渲染都会跑。</li>
<li>返回的函数是清理函数，在组件卸载或下一次副作用执行前调用。上例里用 <code>cancelled</code> 标志位避免请求回来的旧数据覆盖新数据。</li>
<li>副作用里用到的<em>所有</em>外部变量都应该出现在依赖数组里，否则就会遇到闭包陷阱（见下文）。</li>
</ul>
<h2>四、useMemo 与 useCallback：克制地做缓存</h2>
<p><code>useMemo</code> 缓存的是"计算结果"，<code>useCallback</code> 缓存的是"函数引用"。两者都接收一个依赖数组，只有依赖变化时才重新计算。</p>
<pre><code>import { useMemo, useCallback } from 'react';

function ProductList({ products, keyword, onSelect }) {
  // 只在 products / keyword 变化时才重新过滤
  const filtered = useMemo(
    () =&gt; products.filter((p) =&gt; p.name.includes(keyword)),
    [products, keyword],
  );

  // 稳定函数引用，避免子组件每次都重新渲染
  const handleClick = useCallback(
    (id) =&gt; onSelect(id),
    [onSelect],
  );

  return filtered.map((p) =&gt; (
    &lt;Item key={p.id} product={p} onClick={handleClick} /&gt;
  ));
}</code></pre>
<p>但要注意：<strong>缓存本身也是有成本的</strong>——React 需要存储依赖、做比较。大部分普通计算其实比维护 memo 的成本还低。只在两种情况下真的需要：计算本身昂贵，或者引用必须保持稳定（比如传给 <code>React.memo</code> 包装的子组件，或作为另一个 Hook 的依赖）。</p>
<h2>五、自定义 Hook：把逻辑封装起来</h2>
<p>自定义 Hook 只是一个以 <code>use</code> 开头、内部调用了其他 Hook 的普通函数。它的价值在于：<strong>把有状态的逻辑从组件里抽出来复用</strong>，而不是靠 HOC 或 render props。</p>
<pre><code>import { useState, useEffect } from 'react';

function useDebounce&lt;T&gt;(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() =&gt; {
    const id = setTimeout(() =&gt; setDebounced(value), delay);
    return () =&gt; clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

function SearchBox() {
  const [keyword, setKeyword] = useState('');
  const debounced = useDebounce(keyword, 400);

  useEffect(() =&gt; {
    if (debounced) search(debounced);
  }, [debounced]);

  return &lt;input value={keyword} onChange={(e) =&gt; setKeyword(e.target.value)} /&gt;;
}</code></pre>
<p>写自定义 Hook 的时候，脑子里要有一根线：<em>这个 Hook 对外暴露什么状态和方法，对内隐藏了什么实现细节</em>。接口越小，越好用。</p>
<h2>六、常见坑与最佳实践</h2>
<h3>1. 闭包陷阱</h3>
<p>函数组件每次渲染都会生成新的闭包。如果你在 <code>useEffect</code>、<code>setTimeout</code> 里用到了某个 state，却忘了把它写进依赖数组，读到的就是那一次渲染时的旧值。解决办法通常有两种：把变量放进依赖数组，或者用 <code>useRef</code> 保留一个"永远指向最新值"的引用。</p>
<h3>2. 依赖数组不要撒谎</h3>
<p>不要为了"少跑几次"就故意漏写依赖。这是 Bug 的温床。配置好 <code>eslint-plugin-react-hooks</code>，让 lint 替你盯着。如果确实不希望副作用因为某个依赖重跑，先想想是不是应该把这段逻辑挪到事件处理函数里，而不是 effect 里。</p>
<h3>3. 不要过度 memo</h3>
<p>到处套 <code>useMemo</code> / <code>useCallback</code> 并不会让应用变快，反而会增加心智负担和内存开销。默认不加，遇到实测的性能瓶颈再加。</p>
<h3>4. 副作用里区分"同步派生"和"真·副作用"</h3>
<p>如果某个值完全可以从 props / state 推导出来，用 <code>useMemo</code> 或者直接在渲染里算就够了，不需要 <code>useState</code> + <code>useEffect</code> 去"同步"它。能在渲染里算出来的东西，别扔进 effect。</p>
<h3>5. 清理函数别忘</h3>
<p>订阅、定时器、事件监听、WebSocket——凡是"挂上去"的东西，都要在 effect 的返回值里"拆下来"。否则组件卸载后还在跑，轻则内存泄漏，重则在已卸载组件上 setState 报警告。</p>
<h2>小结</h2>
<p>Hooks 的 API 很少，但它背后的模型——"组件是一个会被反复调用的纯函数，Hook 让这个函数在调用之间记住一些东西"——需要一点时间去内化。一旦想通这一层，<code>useState</code>、<code>useEffect</code>、<code>useMemo</code> 这些东西会变得顺手很多，写自定义 Hook 也会像写普通工具函数一样自然。</p>
<p>最后一句朴素的建议：<em>能少写一个 Hook 就少写一个</em>。React 的性能问题往往不是 Hook 用少了，而是抽象加错了层。</p>`,
  },
  {
    slug: 'react-server-components',
    title: 'React Server Components 深度解析',
    date: '2026-04-21',
    tags: ['React', 'RSC', 'Next.js'],
    excerpt:
      'React Server Components（RSC）把"组件"这件事拆成了服务端和客户端两种形态，改写了 React 的数据获取与渲染模型。这篇从 RSC 的本质讲起，聊聊 Server / Client Component 的边界、数据获取模式、以及 Suspense 与流式渲染的配合。',
    contentHTML: `<p>React Server Components（简称 RSC）这两年从 Next.js 13 的实验特性，一路走到了 App Router 的默认形态。很多人第一次接触它，都会被那个 <code>'use client'</code> 指令搞得有点懵——什么时候加、不加会怎样、加了之后组件到底在哪跑？</p>
<p>这篇想把 RSC 的心智模型讲清楚：它到底是什么、解决了什么问题、Server 和 Client Component 的边界怎么划、数据获取该怎么写、Suspense 和流式渲染又是怎么配合的。</p>
<h2>一、RSC 到底是什么</h2>
<p>先澄清一个最容易混淆的地方：<strong>RSC 不是 SSR</strong>。传统 SSR 是"在服务端把组件渲染成 HTML 字符串，发给浏览器，再由客户端 React 做 hydration"，组件本身还是同一份代码，既要能在 Node 里跑，也要能在浏览器里跑。</p>
<p>RSC 则是在类型层面就把组件分成了两种：</p>
<ul>
<li><strong>Server Component</strong>：只在服务端执行。它的代码不会被打包进客户端 bundle，可以直接 <code>await</code> 数据库查询、读文件系统、用 Node 的任何能力。输出的是一份序列化后的 React 树描述（不是 HTML 字符串）。</li>
<li><strong>Client Component</strong>：和传统 React 组件一样。会被打包进客户端，支持 <code>useState</code> / <code>useEffect</code> / 事件处理，以及一切需要浏览器环境的东西。</li>
</ul>
<p>RSC 真正的价值在于两点：<em>把数据获取下沉到组件内部、同时不把数据库驱动之类的依赖打到客户端</em>。这件事在纯 SSR 下做不到——SSR 下组件代码还是会被客户端加载一份。</p>
<h2>二、Server Component 能做什么，不能做什么</h2>
<p>Server Component 的典型样子长这样：</p>
<pre><code>// app/posts/page.tsx （默认就是 Server Component）
import { db } from '@/lib/db';

export default async function PostsPage() {
  const posts = await db.post.findMany();
  return (
    &lt;ul&gt;
      {posts.map((p) =&gt; (
        &lt;li key={p.id}&gt;{p.title}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
<p>几个关键点：</p>
<ul>
<li>组件函数本身是 <code>async</code> 的，可以直接 <code>await</code>。这是 Server Component 独有的能力，Client Component 目前不能 async。</li>
<li><code>db</code> 这个模块不会出现在客户端 bundle 里。即使你在 Server Component 里 <code>import</code> 了庞大的依赖，也不会增加首屏 JS 体积。</li>
<li>没有 <code>useState</code>、没有 <code>useEffect</code>、不能绑定 <code>onClick</code>。因为这些都需要在浏览器里存在一个"活着"的组件实例，而 Server Component 跑完就没了。</li>
</ul>
<p>换句话说，Server Component 适合"拿数据、拼结构、做静态渲染"，不适合任何需要用户交互的部分。</p>
<h2>三、'use client' 边界</h2>
<p>当你需要交互的时候，就要加 <code>'use client'</code>：</p>
<pre><code>'use client';

import { useState } from 'react';

export function Counter() {
  const [n, setN] = useState(0);
  return &lt;button onClick={() =&gt; setN(n + 1)}&gt;{n}&lt;/button&gt;;
}</code></pre>
<p>这里要重点理解的是：<strong><code>'use client'</code> 标记的是一个"边界"，不是"这个文件"</strong>。一旦某个文件顶部写了 <code>'use client'</code>，那么：</p>
<ul>
<li>这个文件本身变成 Client Component。</li>
<li>它 <code>import</code> 的所有模块（无论有没有写 <code>'use client'</code>）都会被打到客户端 bundle。</li>
<li>从这个组件往下，它再渲染的子组件也默认都是 Client Component——除非通过 <code>children</code> 或 props 的方式把一个 Server Component "传进来"。</li>
</ul>
<p>后面这一点很关键。下面这种写法其实是允许的：</p>
<pre><code>// Layout.tsx (Server Component)
import { ClientShell } from './ClientShell';
import { ServerSidebar } from './ServerSidebar';

export default function Layout() {
  return (
    &lt;ClientShell&gt;
      &lt;ServerSidebar /&gt;
    &lt;/ClientShell&gt;
  );
}</code></pre>
<p><code>ClientShell</code> 虽然是 Client Component，但它是通过 <code>children</code> 接收 <code>ServerSidebar</code> 的，<code>ServerSidebar</code> 依然在服务端渲染。这是"把交互壳放客户端、把内容放服务端"的常见模式。</p>
<h2>四、数据获取模式</h2>
<p>RSC 最大的体验改变就是<em>数据获取不再需要 useEffect + useState + loading 三件套</em>。推荐的几种模式：</p>
<h3>1. 直接在 Server Component 里 await</h3>
<pre><code>export default async function Page() {
  const data = await fetch('https://api.example.com/posts').then((r) =&gt; r.json());
  return &lt;PostList posts={data} /&gt;;
}</code></pre>
<p>简单直接。Next.js 还对 <code>fetch</code> 做了扩展，可以通过 <code>cache</code> / <code>next.revalidate</code> 控制缓存。</p>
<h3>2. 并行获取</h3>
<p>多个请求要并行时，不要串行 await，而是先启动再一起 await：</p>
<pre><code>export default async function Page() {
  const postsPromise = getPosts();
  const userPromise = getUser();
  const [posts, user] = await Promise.all([postsPromise, userPromise]);
  // ...
}</code></pre>
<h3>3. 把 Promise 传给 Client Component + use()</h3>
<p>React 19 的 <code>use()</code> 钩子允许在 Client Component 里"解包"一个从服务端传来的 Promise，这样可以让服务端先启动请求，客户端在需要数据时再挂起：</p>
<pre><code>// Server
export default function Page() {
  const postsPromise = getPosts(); // 不 await
  return &lt;Posts postsPromise={postsPromise} /&gt;;
}

// Client
'use client';
import { use } from 'react';
export function Posts({ postsPromise }) {
  const posts = use(postsPromise);
  return posts.map(...);
}</code></pre>
<h2>五、Streaming 与 Suspense</h2>
<p>RSC 和 Suspense 是天生一对。服务端渲染时，整棵树不再需要"等最慢的数据全拿到才能开始发 HTML"，而是可以按 Suspense 边界<strong>流式</strong>发送：</p>
<pre><code>import { Suspense } from 'react';

export default function Page() {
  return (
    &lt;&gt;
      &lt;Header /&gt;
      &lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;
        &lt;SlowPosts /&gt;
      &lt;/Suspense&gt;
      &lt;Footer /&gt;
    &lt;/&gt;
  );
}</code></pre>
<p>这里的行为是：</p>
<ul>
<li>服务端先把 <code>Header</code>、<code>Skeleton</code>、<code>Footer</code> 发给浏览器，用户立刻看到壳。</li>
<li><code>SlowPosts</code> 的数据拿到后，服务端把它这部分 HTML 通过同一个 HTTP 响应流追加过来，React 自动替换掉 <code>Skeleton</code>。</li>
</ul>
<p>结果是：<strong>首字节时间（TTFB）和有意义内容时间（LCP）都能大幅改善</strong>，而且这一切不需要手写任何 loading 状态机。</p>
<h2>六、什么时候用哪种</h2>
<p>一个经验性的划分：</p>
<ul>
<li><strong>默认写 Server Component</strong>。页面、布局、展示型组件，优先放服务端。</li>
<li><strong>遇到需要交互、需要浏览器 API、需要 state 的地方，才切到 Client Component</strong>。而且尽量把 <code>'use client'</code> 下沉到最小的叶子组件，而不是整个页面。</li>
<li><strong>把数据获取留在 Server Component</strong>。不要再写"组件挂载后 useEffect 里 fetch"这种范式了，既慢又容易 waterfall。</li>
<li><strong>用 Suspense 划分加载边界</strong>。慢的数据块独立 Suspense，快的先渲染出来。</li>
</ul>
<h2>七、一点心得</h2>
<p>RSC 的学习曲线其实不在 API 本身——<code>'use client'</code> 一共就一行——而在于要重新分辨"这件事该在服务端做，还是在客户端做"。写熟了之后你会发现，大部分代码根本不需要跑在浏览器里，而我们过去十年习惯的"全栈都在前端"，只是当时没有更好的工具。</p>
<p>RSC 不是银弹，它把复杂度从"客户端状态"挪到了"边界划分"。但这种复杂度是<em>可以一次理清、长期受益</em>的那种，而不是每个新需求都要重新搏斗的那种。值得花时间理顺。</p>`,
  },
  {
    slug: 'react-getting-started',
    title: 'React 基础入门：组件、JSX、props、state 与单向数据流',
    date: '2026-04-21',
    tags: ['React', '前端', '入门', 'JavaScript'],
    excerpt:
      'React 已经是前端世界的默认答案之一，但对刚入门的人来说，组件、JSX、props、state 这几个概念常常混成一团。这篇从最基础的"React 到底是什么"讲起，把组件模型、JSX、props、state、单向数据流串成一条线，配上可运行的小例子。',
    contentHTML: `<p>如果你刚开始学前端，大概率已经在各种地方听到过 "React" 这个词——它是 Facebook 在 2013 年开源的 UI 库，现在是前端世界的默认答案之一。但对真正动手的新人来说，"组件"、"JSX"、"props"、"state" 这几个概念常常混成一团，学着学着就不知道自己在写什么了。</p>
<p>这篇想把 React 最核心的几个基础概念按顺序摆一遍，每一节都配一个能直接跑的小例子。看完之后，你应该能自信地写出一个交互性的小组件，并且知道"这段代码为什么要这么写"。</p>
<h2>一、React 到底是什么</h2>
<p>官方的说法是"一个用于构建用户界面的 JavaScript 库"。这话没错，但不够具体。更落地的描述是：<strong>React 让你用"函数 + 数据"来描述界面长什么样，然后由它自己想办法高效地把真实 DOM 刷成那个样子</strong>。</p>
<p>换句话说，传统 jQuery 时代你需要写的是 "按钮被点击之后 → 找到那个 div → 把它的 innerText 改成新值"；在 React 里，你写的是 "界面 = 当前状态的一个函数"，状态变了，界面自动重新计算。这个视角的转变是 React 最核心的那件事，其他都只是实现细节。</p>
<p>具体带来的好处：</p>
<ul>
<li><strong>声明式</strong>：你描述"应该长成什么样"，不是"怎么一步步变成那样"。</li>
<li><strong>组件化</strong>：一个按钮、一个卡片、一整个页面都是组件，可以组合、复用。</li>
<li><strong>虚拟 DOM</strong>：React 先在内存里算出新界面的结构，和旧的对比，只把差异写回真实 DOM。大部分时候你不需要关心这一层，但它决定了性能。</li>
</ul>
<h2>二、第一个组件：函数就是组件</h2>
<p>在现代 React（16.8+）里，组件就是一个返回 JSX 的普通 JavaScript 函数。没有类，没有继承，就是函数。</p>
<pre><code>function Hello() {
  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}</code></pre>
<p>使用它和使用 HTML 标签几乎一样，只不过首字母要大写——这是 React 用来区分"内置 HTML 标签"和"你定义的组件"的约定。</p>
<pre><code>function App() {
  return (
    &lt;div&gt;
      &lt;Hello /&gt;
      &lt;Hello /&gt;
    &lt;/div&gt;
  );
}</code></pre>
<p>上面这段会在页面上渲染两行 "Hello, React!"。几个要点先记住：</p>
<ul>
<li>组件名必须<strong>大写开头</strong>（<code>Hello</code> 而不是 <code>hello</code>）。</li>
<li>组件必须<strong>返回单个根元素</strong>——如果不想多包一层 <code>div</code>，可以用 Fragment：<code>&lt;&gt;...&lt;/&gt;</code>。</li>
<li>组件可以嵌套组件，一层层组合，这就是 React 应用的基本结构。</li>
</ul>
<h2>三、JSX：长得像 HTML 的 JavaScript</h2>
<p>上面代码里那些"长得像 HTML"的东西就是 <strong>JSX</strong>。它不是字符串，也不是 HTML，而是 JavaScript 的一种语法扩展，最终会被编译成普通的函数调用。</p>
<p>比如这段 JSX：</p>
<pre><code>const element = &lt;h1 className="title"&gt;Hello&lt;/h1&gt;;</code></pre>
<p>实际上会被编译成大致等价于：</p>
<pre><code>const element = React.createElement('h1', { className: 'title' }, 'Hello');</code></pre>
<p>理解这一点很重要，因为它解释了 JSX 几个容易踩坑的地方：</p>
<ul>
<li><strong>属性名用 camelCase</strong>：<code>class</code> 写成 <code>className</code>，<code>for</code> 写成 <code>htmlFor</code>，<code>onclick</code> 写成 <code>onClick</code>。因为它最终是 JavaScript 对象的 key。</li>
<li><strong>大括号里放表达式</strong>：任何 JavaScript 表达式都可以塞进 <code>{}</code>。</li>
<li><strong>只能放表达式，不能放语句</strong>：<code>if</code> 不行，<code>for</code> 不行；但三元运算符、<code>&&</code>、<code>.map()</code> 都可以。</li>
</ul>
<p>一个综合例子：</p>
<pre><code>function Greeting({ name, isVip }) {
  const hour = new Date().getHours();
  return (
    &lt;div&gt;
      &lt;p&gt;
        {hour &lt; 12 ? '早上好' : '下午好'}，{name}
        {isVip &amp;&amp; ' (VIP)'}
      &lt;/p&gt;
      &lt;ul&gt;
        {['苹果', '香蕉', '橙子'].map((fruit) =&gt; (
          &lt;li key={fruit}&gt;{fruit}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</code></pre>
<p>这里面已经用上了 JSX 的绝大部分常见能力：变量插值、条件渲染、列表渲染。列表里那个 <code>key</code> 属性是 React 用来识别每一项身份的，在真正渲染变化的列表时非常关键——先记住"列表里每一项都要一个稳定且唯一的 key"。</p>
<h2>四、props：父传子的数据</h2>
<p>组件之所以有用，是因为它可以<strong>被参数化</strong>。这些参数在 React 里叫 <strong>props</strong>（properties 的缩写），从父组件传给子组件，在子组件里是一个只读的对象。</p>
<pre><code>function Welcome({ name, age }) {
  return (
    &lt;p&gt;
      你好，{name}，你今年 {age} 岁。
    &lt;/p&gt;
  );
}

function App() {
  return (
    &lt;div&gt;
      &lt;Welcome name="小明" age={18} /&gt;
      &lt;Welcome name="小红" age={20} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
<p>几个容易被新人忽略的细节：</p>
<ul>
<li><strong>props 是只读的</strong>。在子组件里做 <code>props.name = 'xxx'</code> 是不允许的——React 依赖这条规则来保证数据流向是可预测的。</li>
<li><strong>字符串直接写，其它类型要用大括号</strong>。<code>name="小明"</code> 是字符串，<code>age={18}</code> 是数字，<code>onClick={handleClick}</code> 是函数。</li>
<li><strong>函数也可以作为 prop</strong>。这是父组件把"回调"交给子组件的方式，后面讲 state 的时候会用到。</li>
<li><strong><code>children</code> 是一个特殊的 prop</strong>。组件标签之间的内容会以 <code>children</code> 的形式传进来：</li>
</ul>
<pre><code>function Card({ title, children }) {
  return (
    &lt;div className="card"&gt;
      &lt;h2&gt;{title}&lt;/h2&gt;
      &lt;div&gt;{children}&lt;/div&gt;
    &lt;/div&gt;
  );
}

// 使用
&lt;Card title="公告"&gt;
  &lt;p&gt;今天晚上停电维护&lt;/p&gt;
&lt;/Card&gt;</code></pre>
<h2>五、state：组件自己记住的事情</h2>
<p>光有 props 还不够——props 是父组件给的，组件自己内部的状态（比如"这个按钮被点了几次"、"这个输入框里现在是什么"）需要另一个机制：<strong>state</strong>。</p>
<p>在函数组件里，state 用 <code>useState</code> 这个 Hook 管理。它返回一个"当前值"和一个"更新函数"组成的数组：</p>
<pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;当前计数：{count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;+1&lt;/button&gt;
      &lt;button onClick={() =&gt; setCount(0)}&gt;重置&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
<p>这短短十几行里，藏着 React 的整个心智模型：</p>
<ol>
<li><code>useState(0)</code> 告诉 React："给我一块状态，初始值是 0"。</li>
<li>React 每次渲染这个组件时，都把当前的状态值通过数组解构还给你——<code>count</code>。</li>
<li>你要修改状态，<strong>不能</strong>直接 <code>count = count + 1</code>。必须调 <code>setCount(newValue)</code>。</li>
<li>一旦 <code>setCount</code> 被调用，React 会<strong>重新执行整个组件函数</strong>，拿到新的 JSX，对比旧的，更新真实 DOM。</li>
</ol>
<p>第 4 点是新人最容易卡住的地方——组件函数会被<em>一遍又一遍</em>地调用，每次 state 变化都跑一次。这意味着组件函数本身必须是"纯"的：同样的 props + state 进去，同样的 JSX 出来，不要有副作用。</p>
<p>还有一条必须记住的规矩：<strong>state 更新是异步的</strong>。</p>
<pre><code>function Bad() {
  const [count, setCount] = useState(0);

  const handleClick = () =&gt; {
    setCount(count + 1);
    setCount(count + 1); // 依然只加 1！
    setCount(count + 1);
  };

  return &lt;button onClick={handleClick}&gt;+3?&lt;/button&gt;;
}</code></pre>
<p>上面连调三次 <code>setCount(count + 1)</code>，最终 <code>count</code> 只会 +1。因为这一次渲染里 <code>count</code> 是一个固定的值（比如 0），三次调用都是 <code>setCount(0 + 1)</code>。</p>
<p>正确的写法是把函数传进去，让 React 基于"最新的 state"来算：</p>
<pre><code>setCount((prev) =&gt; prev + 1);
setCount((prev) =&gt; prev + 1);
setCount((prev) =&gt; prev + 1);</code></pre>
<h2>六、单向数据流：数据只朝一个方向流动</h2>
<p>React 的整个架构建立在一个简单的约束上：<strong>数据从父组件流向子组件，反过来不行</strong>。这就是"单向数据流"（one-way data flow）。</p>
<p>具体表现为：</p>
<ul>
<li>父组件通过 props 把数据传给子组件。</li>
<li>子组件想"修改父组件的状态"怎么办？——父组件把一个<em>回调函数</em>作为 prop 传下去，子组件调这个回调，让父组件自己去改自己的 state。</li>
</ul>
<p>经典例子是一个受控输入框：</p>
<pre><code>function SearchBox({ value, onChange }) {
  return (
    &lt;input
      value={value}
      onChange={(e) =&gt; onChange(e.target.value)}
      placeholder="搜索..."
    /&gt;
  );
}

function App() {
  const [keyword, setKeyword] = useState('');

  return (
    &lt;div&gt;
      &lt;SearchBox value={keyword} onChange={setKeyword} /&gt;
      &lt;p&gt;你正在搜索：{keyword || '(空)'}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
<p>注意数据走向：</p>
<ol>
<li>状态 <code>keyword</code> 住在 <code>App</code>（父组件）里。</li>
<li><code>App</code> 把 <code>keyword</code> 通过 <code>value</code> 传给 <code>SearchBox</code>——数据向下流。</li>
<li>用户在 input 里打字，<code>SearchBox</code> 调 <code>onChange(e.target.value)</code>——<strong>不是</strong>自己改状态，而是通知父组件。</li>
<li><code>App</code> 收到通知后，调 <code>setKeyword</code> 更新自己的状态，触发重新渲染，新的 <code>keyword</code> 再次通过 props 流下去。</li>
</ol>
<p>这种"状态上移 + 回调下发"的模式，是 React 组件间通信的基本功。听起来绕，但它保证了<strong>任何一个状态在任何时刻都有且只有一个"所有者"</strong>——这在中大型应用里是救命的特性，它让你永远知道"这个值在哪里被改"。</p>
<h2>七、一个把所有东西串起来的例子</h2>
<p>最后写一个稍微有点东西的 TodoList，把前面讲的组件、props、state、事件、列表渲染、单向数据流全用上：</p>
<pre><code>import { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    &lt;li&gt;
      &lt;input
        type="checkbox"
        checked={todo.done}
        onChange={() =&gt; onToggle(todo.id)}
      /&gt;
      &lt;span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}&gt;
        {todo.text}
      &lt;/span&gt;
      &lt;button onClick={() =&gt; onDelete(todo.id)}&gt;删除&lt;/button&gt;
    &lt;/li&gt;
  );
}

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '学习 React', done: false },
    { id: 2, text: '写第一个组件', done: true },
  ]);
  const [input, setInput] = useState('');

  const addTodo = () =&gt; {
    if (!input.trim()) return;
    setTodos((prev) =&gt; [
      ...prev,
      { id: Date.now(), text: input, done: false },
    ]);
    setInput('');
  };

  const toggleTodo = (id) =&gt;
    setTodos((prev) =&gt;
      prev.map((t) =&gt; (t.id === id ? { ...t, done: !t.done } : t))
    );

  const deleteTodo = (id) =&gt;
    setTodos((prev) =&gt; prev.filter((t) =&gt; t.id !== id));

  return (
    &lt;div&gt;
      &lt;input
        value={input}
        onChange={(e) =&gt; setInput(e.target.value)}
        placeholder="新任务"
      /&gt;
      &lt;button onClick={addTodo}&gt;添加&lt;/button&gt;
      &lt;ul&gt;
        {todos.map((todo) =&gt; (
          &lt;TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          /&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</code></pre>
<p>几个值得对照回去看的细节：</p>
<ul>
<li><strong>状态集中在 <code>TodoList</code></strong>。<code>TodoItem</code> 自己不存 state，只通过 props 接收要显示的内容，通过回调告诉父组件"用户想干什么"。</li>
<li><strong>更新数组用的是新数组，不是 <code>push</code> / <code>splice</code></strong>。React 比较 state 用的是引用比较，直接修改原数组它识别不到变化。</li>
<li><strong>列表每一项都有稳定的 <code>key</code></strong>。这里用 <code>todo.id</code>，不用数组下标——因为删除中间某一项时，下标会跟着变化，React 会错乱。</li>
</ul>
<h2>八、下一步学什么</h2>
<p>如果上面这些你都能看懂并且跟着写出来，恭喜——你已经掌握了 React 最核心的那一块心智模型。从这里往后，再学其他内容时会顺很多：</p>
<ul>
<li><strong>更多 Hooks</strong>：<code>useEffect</code>（副作用）、<code>useRef</code>（引用）、<code>useMemo</code> / <code>useCallback</code>（性能优化）、<code>useContext</code>（跨层传值）。</li>
<li><strong>路由</strong>：React Router 或者上层框架（Next.js / Remix）自带的路由系统。</li>
<li><strong>状态管理</strong>：当状态跨组件共享变得复杂时，再看 Context、Zustand、Redux Toolkit。不要一上来就上 Redux。</li>
<li><strong>框架</strong>：直接用 Next.js 写项目，比从 CRA / Vite 裸配 React 更接近现在的真实工作流。</li>
</ul>
<p>最后一个建议：<strong>写得比读得多</strong>。React 的很多"啊原来是这样"的瞬间，只有在自己踩坑、改 bug 的时候才会冒出来。先把这篇里的几个例子亲手敲一遍，再开始下一步。</p>`,
  },
  {
    slug: 'react-19-new-features',
    title: 'React 19 的新特性与变化：Actions、useOptimistic 与 use()',
    date: '2026-04-21',
    tags: ['React', '前端', 'React 19'],
    excerpt:
      'React 19 不是 18 的简单补丁版，它把这几年大家在业务里反复手写的那些模式——表单提交的 pending/error、乐观更新、在组件里读 Promise——直接变成了一等公民的 API。这篇挑 Actions、useOptimistic 和 use() 三个点聊聊，看看它们在实际项目里怎么落地。',
    contentHTML: `<p>React 19 正式版发布后，很多人第一反应是"又是一堆新 Hook"。但我自己从 18 升到 19 的几个项目看下来，感受刚好相反：React 19 做的事情，其实是把这几年大家在业务代码里反复手写的几个模式——表单的 pending / error 状态机、乐观更新的临时 state、在组件里消费 Promise——收敛成了官方 API。</p>
<p>这篇挑我用下来最有感觉的三个点聊聊：<strong>Actions</strong>、<strong>useOptimistic</strong>、以及 <strong>use() hook</strong>。其他变化（新的 ref 作为 prop、<code>&lt;Context&gt;</code> 直接作为 Provider、<code>useFormStatus</code> 等）会顺带带过。</p>
<h2>一、Actions 与 useActionState：表单提交的"默认形状"</h2>
<p>先想一个写了无数次的场景：一个表单，提交时要 loading，失败要显示错误，成功要清空。React 18 里的典型写法大概是这样：</p>
<pre><code class="language-tsx">function EditName() {
  const [name, setName] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState&lt;string | null&gt;(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);
    try {
      await updateName(name);
      setName('');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setPending(false);
    }
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input value={name} onChange={(e) =&gt; setName(e.target.value)} /&gt;
      &lt;button disabled={pending}&gt;{pending ? '保存中…' : '保存'}&lt;/button&gt;
      {error &amp;&amp; &lt;p&gt;{error}&lt;/p&gt;}
    &lt;/form&gt;
  );
}</code></pre>
<p>三个 state、一段 try/catch/finally、手动管 pending——这几乎是每个业务组件的"标配八股"。React 19 给了一个专门的 Hook：<code>useActionState</code>，配合 <code>&lt;form action={...}&gt;</code>，把这套流程内建化了。</p>
<pre><code class="language-tsx">import { useActionState } from 'react';

type State = { error: string | null };

async function updateNameAction(_prev: State, formData: FormData): Promise&lt;State&gt; {
  const name = formData.get('name') as string;
  try {
    await updateName(name);
    return { error: null };
  } catch (err) {
    return { error: (err as Error).message };
  }
}

function EditName() {
  const [state, formAction, isPending] = useActionState(updateNameAction, {
    error: null,
  });

  return (
    &lt;form action={formAction}&gt;
      &lt;input name="name" /&gt;
      &lt;button disabled={isPending}&gt;{isPending ? '保存中…' : '保存'}&lt;/button&gt;
      {state.error &amp;&amp; &lt;p&gt;{state.error}&lt;/p&gt;}
    &lt;/form&gt;
  );
}</code></pre>
<p>差别在哪里？</p>
<ul>
<li><strong>pending 状态是 React 自己管的</strong>。只要 action 是个 async 函数，<code>isPending</code> 就会在它 resolve / reject 之前自动为 <code>true</code>。不需要你手写 <code>setPending</code>。</li>
<li><strong>action 变成了"纯函数"</strong>。它接收上一次的 state 和 FormData，返回新的 state。组件本身不再需要散落一堆 useState。</li>
<li><strong>配合 <code>&lt;form action={...}&gt;</code> 原生工作</strong>。提交会走标准的表单语义，按回车、非 JS 环境（如果是 Server Action）都能降级。</li>
</ul>
<p>如果你只想在子组件里读表单的 pending 状态，还有个配套 Hook <code>useFormStatus</code>：</p>
<pre><code class="language-tsx">import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return &lt;button disabled={pending}&gt;{pending ? '提交中…' : '提交'}&lt;/button&gt;;
}</code></pre>
<p><code>SubmitButton</code> 不需要任何 props，也不需要 context，直接从最近的父 <code>&lt;form&gt;</code> 拿到状态。组件树一下就清爽很多——以前为了给按钮传 pending，要么 props 穿透，要么单独开个 context。</p>
<p>一个实际的建议：<strong>新写表单一律默认用 <code>useActionState</code></strong>。就算不用 Server Action，纯客户端的 async 函数也能直接塞进去，收益主要是"少写三个 useState 和一个 try/finally"。</p>
<h2>二、useOptimistic：乐观更新的正规做法</h2>
<p>乐观更新以前怎么写？大概是这样的套路：用一个本地 state 存"预期结果"，提交时先更新它，请求成功什么都不做，失败时再回滚。听起来简单，但真正写的时候要处理"多个请求并发"、"回滚时机"、"服务器返回的真实数据怎么合并"，每次都得重新想一遍。</p>
<p>React 19 的 <code>useOptimistic</code> 把这件事规范化了：</p>
<pre><code class="language-tsx">import { useOptimistic, useState } from 'react';

type Todo = { id: string; text: string; sending?: boolean };

function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [todos, setTodos] = useState(initialTodos);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) =&gt; [...state, { ...newTodo, sending: true }],
  );

  async function formAction(formData: FormData) {
    const text = formData.get('text') as string;
    const tempId = crypto.randomUUID();
    addOptimisticTodo({ id: tempId, text });
    const saved = await createTodo(text);
    setTodos((prev) =&gt; [...prev, saved]);
  }

  return (
    &lt;&gt;
      &lt;ul&gt;
        {optimisticTodos.map((t) =&gt; (
          &lt;li key={t.id} style={{ opacity: t.sending ? 0.5 : 1 }}&gt;
            {t.text}
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
      &lt;form action={formAction}&gt;
        &lt;input name="text" /&gt;
        &lt;button&gt;添加&lt;/button&gt;
      &lt;/form&gt;
    &lt;/&gt;
  );
}</code></pre>
<p>几个值得注意的地方：</p>
<ul>
<li><code>useOptimistic</code> 接收"当前真实 state"和一个 reducer，返回一个"叠加了乐观更新"的派生 state 和一个触发器。</li>
<li><strong>乐观状态只在当前 transition 内有效</strong>。一旦 action 结束（无论成功失败），<code>optimisticTodos</code> 会自动回到真实 <code>todos</code>。你不需要手动回滚，也不需要担心"乐观值卡住"的问题。</li>
<li>通过在乐观数据里加一个 <code>sending</code> 标志位，可以很自然地给"还没落地的条目"做视觉降级（半透明、禁止点击等）。</li>
</ul>
<p>以前我写这种功能，经常不小心写出"请求失败了但 UI 还是显示成功"的 bug，就是因为回滚逻辑散在 catch 里。现在把"临时叠加"和"真实状态"在类型层面分开了，心智清爽很多。</p>
<h2>三、use()：在组件里直接读 Promise 和 Context</h2>
<p><code>use()</code> 是 React 19 里最"小"但最改变写法的 API。它可以：</p>
<ol>
<li>读一个 Promise 的 resolved 值（组件会自动 Suspense）。</li>
<li>读一个 Context 的值，并且<strong>可以在条件分支里调用</strong>——这是它和 <code>useContext</code> 最大的区别。</li>
</ol>
<p>先看读 Promise 的场景。以前在客户端组件里拿数据，要么 <code>useEffect</code> + <code>useState</code>，要么借助 <code>SWR</code>/<code>React Query</code>。RSC 里服务端组件可以直接 <code>await</code>，但客户端组件一直没有一个简洁写法。<code>use()</code> 正好填了这个坑：</p>
<pre><code class="language-tsx">'use client';
import { use, Suspense } from 'react';

function UserName({ userPromise }: { userPromise: Promise&lt;{ name: string }&gt; }) {
  const user = use(userPromise);
  return &lt;span&gt;{user.name}&lt;/span&gt;;
}

function Page({ userPromise }: { userPromise: Promise&lt;{ name: string }&gt; }) {
  return (
    &lt;Suspense fallback={&lt;span&gt;加载中…&lt;/span&gt;}&gt;
      &lt;UserName userPromise={userPromise} /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>
<p>关键点：<strong>Promise 应该在父组件创建并以 prop 的形式传下来</strong>，而不是在组件渲染函数里 <code>fetch(...)</code>。因为组件每次渲染都会重新执行函数体，如果在里面直接创建 Promise，会导致请求被无限重发。</p>
<p>再看条件读 Context 的场景：</p>
<pre><code class="language-tsx">import { use } from 'react';

function Message({ showTheme }: { showTheme: boolean }) {
  if (showTheme) {
    const theme = use(ThemeContext); // 合法！useContext 不行
    return &lt;p style={{ color: theme.fg }}&gt;hello&lt;/p&gt;;
  }
  return &lt;p&gt;hello&lt;/p&gt;;
}</code></pre>
<p><code>useContext</code> 受 "Hook 只能在顶层调用" 的铁律限制，<code>use()</code> 则放宽了这一条。这在写一些"根据 prop 决定要不要读某个 context"的组件时特别有用，不用再强行把 useContext 提到顶层再判断。</p>
<h2>四、顺带一提的几个小变化</h2>
<ul>
<li><strong>ref 作为普通 prop</strong>。函数组件可以直接声明 <code>ref</code> 形参，不再需要 <code>forwardRef</code> 包一层。老代码不用急着改，但新组件可以少写一层 wrapper。</li>
<li><strong><code>&lt;Context&gt;</code> 可以直接作为 Provider</strong>。<code>&lt;MyContext value={...}&gt;</code> 合法，不用再写 <code>&lt;MyContext.Provider&gt;</code>。</li>
<li><strong>资源 hints API</strong>。<code>preload</code>、<code>preinit</code>、<code>prefetchDNS</code> 等 API 进了稳定版，配合 RSC 可以更精细地控制关键资源的加载时机。</li>
<li><strong>错误处理改进</strong>。未捕获的渲染错误默认只打一条带堆栈的日志，不再像 18 那样打两遍（一次 console、一次 ErrorBoundary）。</li>
</ul>
<h2>五、升级的一点建议</h2>
<p>从 18 升到 19 的机械成本其实很低——API 基本向后兼容，<code>forwardRef</code> 之类的老写法也还能用。真正的收益要看你愿不愿意借升级的机会，把老代码里那些"手写状态机 + 手写 pending + 手写回滚"的地方替换成新 Hook。</p>
<p>我自己的做法是：<strong>新代码一律用新 API，老代码按需重构</strong>——通常是改表单、改列表增删时顺手替换。一个季度下来，代码库里的 useState 数量肉眼可见地少了一截，回头读也更容易看懂"这段代码到底在干嘛"。</p>
<p>React 19 不是那种带来范式颠覆的大版本（那是 Hooks 和 RSC 干过的事），它更像是一次"把常见模式官方化"的清理。用惯之后，再写 React 18 的代码，会有一种明显的"倒退感"。这大概是对一个框架版本最朴素的好评。</p>`,
  },
  {
    slug: 'react-hooks-deep-dive',
    title: 'React Hooks 深入：从实现原理到闭包陷阱与自定义 Hook',
    date: '2026-04-21',
    tags: ['React', 'Hooks', '前端', '原理'],
    excerpt:
      '用了几年 Hooks 之后，该往下挖一层了。这篇从 Hook 背后的"链表 + Fiber"实现讲起，聊 useState/useEffect/useMemo/useCallback/useRef/useContext 各自的边界，顺便把闭包陷阱、依赖数组误区、自定义 Hook 的抽象原则都说透。',
    contentHTML: `<p>React Hooks 已经是日常写组件的默认方式了，但会用和讲得清楚是两回事。一旦涉及"为什么 setState 之后拿到的还是旧值"、"useCallback 到底省了什么"、"effect 里 cleanup 执行顺序是怎样的"，团队里大部分人就开始支吾。</p>
<p>这篇不讲入门，默认你已经写过几个月 Hooks。我们从 Hook 是怎么"挂"在组件上的讲起，再把常用 Hook 的内部行为、边界条件、和它们天生的坑一个一个过一遍。</p>
<h2>一、Hook 是什么：挂在 Fiber 上的链表</h2>
<p>很多人对 Hook 最初的困惑是："一个普通函数，凭什么能记住上一次的值？" 答案是：它并不"记住"，是 React 在 Fiber 节点上替它记着。</p>
<p>每个函数组件对应一个 Fiber 节点，这个节点上挂着一条<strong>单向链表</strong>，每调用一次 Hook（<code>useState</code> / <code>useEffect</code> / ...），就往链表末尾追加一个 hook 对象，大致结构像这样：</p>
<pre><code>// 简化后的 hook 节点
type Hook = {
  memoizedState: any;     // 当前状态（或 effect 描述、memo 值等）
  baseState: any;
  queue: UpdateQueue | null;
  next: Hook | null;
};</code></pre>
<p>渲染时 React 会把一个叫 <code>currentHook</code> 的指针从链表头往后走，第 n 次调用 Hook 就读第 n 个节点。这就是"<strong>Hook 必须在顶层、固定顺序调用</strong>"的底层原因——React 靠调用顺序来对齐每个 Hook 的身份，<em>不是</em>靠名字，也<em>不是</em>靠位置。</p>
<p>所以下面这段代码会直接炸：</p>
<pre><code>function Bad({ show }) {
  if (show) {
    const [x, setX] = useState(0); // 条件里调用 Hook
  }
  const [y, setY] = useState(0);
}</code></pre>
<p>第一次 <code>show</code> 为 true 时 React 以为你有两个 Hook，第二次 <code>show</code> 变 false，链表长度只剩一个，但你读 <code>y</code> 时读到的是原来 <code>x</code> 的槽位，整个状态错位。ESLint 的 <code>react-hooks/rules-of-hooks</code> 就是专门拦这个的，别关。</p>
<h2>二、useState：更新是"入队"，不是"赋值"</h2>
<p>初学者容易把 <code>setCount(count + 1)</code> 看成"立即把 count 改成 count+1"，其实它更接近"<strong>往这个 state 的队列里丢一条 update</strong>"。React 会在下一次渲染时，把所有 update 按顺序 reduce 一遍，算出最终值。</p>
<p>这解释了两个经典现象。第一个，函数式更新为什么重要：</p>
<pre><code>function Counter() {
  const [count, setCount] = useState(0);

  const addThree = () =&gt; {
    setCount(count + 1); // 读到的 count 是 0
    setCount(count + 1); // 还是 0
    setCount(count + 1); // 还是 0，最终只加到 1
  };

  const addThreeCorrect = () =&gt; {
    setCount((c) =&gt; c + 1);
    setCount((c) =&gt; c + 1);
    setCount((c) =&gt; c + 1); // 队列里有三条，reduce 完得到 3
  };
}</code></pre>
<p>第二个，<strong>相同值不会触发重渲染</strong>。React 用 <code>Object.is</code> 比较新旧 state，相等就直接 bail out：</p>
<pre><code>const [user, setUser] = useState({ name: 'Sher' });
setUser({ name: 'Sher' }); // 新对象，引用不同，会重渲
setUser(user);             // 同一个引用，不会重渲</code></pre>
<p>这意味着你不能靠 <code>setState(sameObject)</code> 强制刷新。想强刷只能塞个新引用，或者用 <code>useReducer</code> 配合一个计数器。</p>
<h2>三、useEffect：时机、清理顺序与竞态</h2>
<p><code>useEffect</code> 的执行时机常被讲模糊。准确说法是：<strong>effect 在浏览器把本次渲染的 DOM 变更 paint 之后异步执行</strong>；而 <code>useLayoutEffect</code> 在 DOM mutation 之后、paint 之前<em>同步</em>执行。涉及读 DOM 尺寸、避免视觉闪烁时用后者，其它场合优先用前者。</p>
<p>清理函数的顺序经常是 bug 源头。每次 effect 重新执行前，React 会先调用<em>上一次</em>的 cleanup：</p>
<pre><code>useEffect(() =&gt; {
  console.log('effect', id);
  return () =&gt; console.log('cleanup', id);
}, [id]);

// id 从 1 变成 2 时的日志：
// cleanup 1
// effect 2</code></pre>
<p>最常见的踩坑是异步请求的竞态。只用一个 <code>setUser</code> 是不够的：</p>
<pre><code>useEffect(() =&gt; {
  let cancelled = false;
  fetchUser(id).then((u) =&gt; {
    if (!cancelled) setUser(u);
  });
  return () =&gt; {
    cancelled = true;
  };
}, [id]);</code></pre>
<p>如果没有 <code>cancelled</code> 这面旗子，<code>id</code> 从 1 快速切到 2 时，两次请求都会跑，而 1 的响应如果比 2 慢，就会用旧数据覆盖新数据。现代项目里更推荐用 <code>AbortController</code>：</p>
<pre><code>useEffect(() =&gt; {
  const ac = new AbortController();
  fetch(\`/api/users/\${id}\`, { signal: ac.signal })
    .then((r) =&gt; r.json())
    .then(setUser)
    .catch((e) =&gt; {
      if (e.name !== 'AbortError') throw e;
    });
  return () =&gt; ac.abort();
}, [id]);</code></pre>
<p>再提一句严格模式：React 18 的 <code>&lt;StrictMode&gt;</code> 在开发环境会<strong>故意把 effect 跑两遍</strong>（mount → cleanup → mount），用来帮你发现没写清理的副作用。生产环境不会。所以看到本地控制台"请求发了两次"先别慌，先检查是不是 StrictMode。</p>
<h2>四、useMemo 与 useCallback：别乱 memo</h2>
<p>这两个是最容易被滥用的 Hook。很多人一看到"性能优化"就全加上，结果代码里到处是 <code>useMemo</code>、<code>useCallback</code>，反而更难读。</p>
<p>先看它们的本质：</p>
<ul>
<li><code>useMemo(fn, deps)</code>：缓存<strong>值</strong>。deps 没变就返回上次的值，变了就重新跑 fn。</li>
<li><code>useCallback(fn, deps)</code>：缓存<strong>函数引用</strong>。等价于 <code>useMemo(() =&gt; fn, deps)</code>。</li>
</ul>
<p>它们本身是有成本的——依赖数组要比较、旧值要存住。只有<strong>被缓存的东西足够贵，或者这个引用会被下游用来判等</strong>时，加 memo 才有意义。典型值得 memo 的场景：</p>
<pre><code>// 1) 下游组件用了 React.memo，靠引用判等跳过重渲
const onSelect = useCallback((item) =&gt; {
  dispatch({ type: 'SELECT', item });
}, [dispatch]);
return &lt;ExpensiveList onSelect={onSelect} /&gt;;

// 2) 计算量大，依赖变化不频繁
const sorted = useMemo(
  () =&gt; hugeArray.slice().sort(heavyComparator),
  [hugeArray],
);

// 3) 作为另一个 Hook 的依赖项，需要稳定引用
const config = useMemo(() =&gt; ({ url, headers }), [url, headers]);
useEffect(() =&gt; subscribe(config), [config]);</code></pre>
<p>反过来，<strong>给一个只在本组件用、下游没有 React.memo 的函数加 useCallback，完全没收益</strong>——你只是多写了点代码，多比了次依赖数组。</p>
<h2>五、useRef：不只是拿 DOM</h2>
<p><code>useRef</code> 真正的能力可以一句话概括：<strong>给你一个跨渲染持有的、可变的盒子，改它不会触发重渲</strong>。</p>
<p>它至少有三种正当用法：</p>
<pre><code>// 1) 拿 DOM 引用
const inputRef = useRef&lt;HTMLInputElement&gt;(null);
useEffect(() =&gt; inputRef.current?.focus(), []);
return &lt;input ref={inputRef} /&gt;;

// 2) 存"不想引起重渲"的可变值
const renderCount = useRef(0);
useEffect(() =&gt; {
  renderCount.current += 1;
});

// 3) 解决闭包陷阱：让 effect 永远读到最新的 prop/state
const onChangeRef = useRef(onChange);
useEffect(() =&gt; {
  onChangeRef.current = onChange;
});
useEffect(() =&gt; {
  const timer = setInterval(() =&gt; onChangeRef.current(Date.now()), 1000);
  return () =&gt; clearInterval(timer);
}, []); // 依赖数组空，但回调永远是最新的</code></pre>
<p>第三种模式又叫 "latest ref pattern"，它是处理<em>长生命周期订阅</em>（定时器、WebSocket、事件监听）里闭包问题的常用解。注意<strong>渲染期间不要读写 ref</strong>，这会破坏 React 的并发渲染假设；读写都放进 effect 或事件处理里。</p>
<h2>六、useContext：避免被高频更新连坐</h2>
<p><code>useContext</code> 的语义很简单——订阅最近的 <code>Provider</code> value，value 变了所有消费者重渲。问题是它<strong>没有任何"选择订阅"的粒度</strong>：哪怕你只用 value 里的一个字段，整个 value 变了你就得重渲。</p>
<pre><code>const AppContext = createContext(null);

function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  // 每次渲染都生成新对象，所有消费者全部重渲
  return (
    &lt;AppContext.Provider value={{ user, theme, setUser, setTheme }}&gt;
      {children}
    &lt;/AppContext.Provider&gt;
  );
}</code></pre>
<p>解决思路有几个层次：</p>
<ul>
<li><strong>拆 Context</strong>。user 和 theme 更新频率不同，就分成两个 Context，各管各的。</li>
<li><strong>稳定 value 引用</strong>。用 <code>useMemo</code> 把 value 包住，依赖只放真正的 state。</li>
<li><strong>高频场景换方案</strong>。涉及鼠标位置、滚动、输入值这种高频更新，直接用 Zustand / Jotai / Redux，或者自己用 ref + 订阅器实现选择性订阅。Context 不是万能胶。</li>
</ul>
<h2>七、闭包陷阱：依赖数组的本质</h2>
<p>这是 Hooks 最容易咬人的一块。看这段：</p>
<pre><code>function Chat({ roomId }) {
  const [count, setCount] = useState(0);

  useEffect(() =&gt; {
    const id = setInterval(() =&gt; {
      console.log(count); // 永远打印 0
      setCount(count + 1); // 永远把 count 设成 1
    }, 1000);
    return () =&gt; clearInterval(id);
  }, []); // ← 空依赖
}</code></pre>
<p>为什么 <code>count</code> 永远是 0？因为 effect 只在 mount 时跑了一次，它里头的 <code>count</code> 是那一次渲染的闭包快照，永远是 0。</p>
<p>处理闭包陷阱有三条路，按推荐程度排序：</p>
<ol>
<li><strong>如实写依赖</strong>。<code>deps: [count]</code>，然后用函数式更新 <code>setCount(c =&gt; c + 1)</code> 把对 count 的依赖彻底去掉。这是最干净的解。</li>
<li><strong>用 useReducer</strong>。当状态之间相互依赖时，reducer 把逻辑聚合到一起，dispatch 本身引用稳定，effect 只依赖 dispatch。</li>
<li><strong>latest ref pattern</strong>。上面讲过了，适用于订阅不能重建但回调需要读最新值的场景。</li>
</ol>
<p>绝对不要做的事：<strong>关掉 <code>react-hooks/exhaustive-deps</code> 然后随手写空依赖</strong>。99% 的时候你不是在优化，是在给自己挖坑。</p>
<h2>八、自定义 Hook：什么时候该抽、怎么抽</h2>
<p>自定义 Hook 不是"把代码复制到一个函数里"，它的真正价值是<strong>把一组相关的状态和副作用封装成一个可复用的行为</strong>。好的自定义 Hook 有几个特征：</p>
<ul>
<li>对外暴露的接口是<strong>值和动作</strong>，而不是 Hook 的实现细节。调用方不需要知道你里头用了几个 <code>useState</code>。</li>
<li>命名以 <code>use</code> 开头，不只是规范——这是 linter 判断是否按 Hook 规则检查的依据。</li>
<li>一次只干一件事。<code>useUser</code> 就别塞 <code>useTheme</code> 进去。</li>
</ul>
<p>一个例子，封装"带防抖的输入值"：</p>
<pre><code>function useDebouncedValue&lt;T&gt;(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() =&gt; {
    const id = setTimeout(() =&gt; setDebounced(value), delay);
    return () =&gt; clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

function SearchBox() {
  const [text, setText] = useState('');
  const debounced = useDebouncedValue(text, 300);

  useEffect(() =&gt; {
    if (debounced) search(debounced);
  }, [debounced]);

  return &lt;input value={text} onChange={(e) =&gt; setText(e.target.value)} /&gt;;
}</code></pre>
<p>再比如异步数据，把"loading / error / data / refetch"打包：</p>
<pre><code>function useAsync&lt;T&gt;(fn: () =&gt; Promise&lt;T&gt;, deps: unknown[]) {
  const [state, setState] = useState&lt;{
    data: T | null;
    error: Error | null;
    loading: boolean;
  }&gt;({ data: null, error: null, loading: true });

  useEffect(() =&gt; {
    let cancelled = false;
    setState((s) =&gt; ({ ...s, loading: true }));
    fn()
      .then((data) =&gt; {
        if (!cancelled) setState({ data, error: null, loading: false });
      })
      .catch((error) =&gt; {
        if (!cancelled) setState({ data: null, error, loading: false });
      });
    return () =&gt; {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}</code></pre>
<p>当然，这种"自己造 useAsync"在真实项目里建议直接换成 React Query / SWR——它们把缓存、去重、失效、重试都做掉了。自定义 Hook 的意义在于"<strong>沉淀当前项目特有的重复模式</strong>"，不是把所有轮子都重造一遍。</p>
<h2>九、一点建议</h2>
<p>写到这里，几条能显著提高代码寿命的经验：</p>
<ul>
<li><strong>依赖数组如实写，靠函数式更新和 useReducer 去掉依赖</strong>，不要靠空依赖骗 linter。</li>
<li><strong>默认不 memo</strong>。先把代码写清楚，profile 出来真有问题再加 <code>useMemo</code> / <code>useCallback</code> / <code>React.memo</code>。</li>
<li><strong>effect 里永远带清理</strong>。哪怕现在看起来不需要，写上一个空 return 也比以后漏掉好。</li>
<li><strong>把 Hook 的组合变成自定义 Hook</strong>。组件里超过 3 个 <code>useState</code> + <code>useEffect</code> 搅在一起时，八成能抽出一个有名字的行为。</li>
</ul>
<p>Hooks 的威力在于它把组件的状态和副作用从"生命周期方法"里解放出来，变成可以自由组合的小块逻辑。代价是你要对闭包、引用、渲染时机有更敏锐的直觉。这种直觉没有捷径，只能靠踩坑和读源码一点点攒。好在 API 本身就这么几个，值得花时间琢磨透。</p>`,
  },
  {
    slug: 'rsc-client-boundary',
    title: "RSC 与 Client Component 的边界设计：'use client' / 'use server' 的心智模型",
    date: '2026-04-21',
    tags: ['React', 'Next.js', 'RSC'],
    excerpt:
      "写 RSC 时真正难的不是 API，而是'这段代码到底该跑在哪一侧'。这篇从 'use client' / 'use server' 的本质讲起，聊数据流、序列化边界、常见踩坑（整页标 client、把函数当 prop 传、把大依赖拉进 client bundle），最后给一份可以直接照着用的边界划分清单。",
    contentHTML: `<p>用 App Router 写了一段时间业务之后，我越来越确信一件事：<strong>React Server Components 真正难的地方，从来不是那两条指令本身</strong>。<code>'use client'</code> 就一行，<code>'use server'</code> 也就一行。难的是每写一个新组件、每加一个新依赖、每改一处数据流，都要在脑子里回答一遍那个问题——<em>这段代码到底该跑在哪一侧？</em></p>
<p>这篇就想把我自己用的心智模型写下来。包括：这两条指令到底标的是什么、数据在边界上怎么流、哪些坑看着不起眼但会悄悄把 RSC 的收益吃掉，以及一份我平时真的会照着用的边界划分清单。</p>
<h2>一、先把两条指令的本质说清楚</h2>
<p>最容易产生误解的一个点：<code>'use client'</code> 并不是"在客户端执行"的开关，<code>'use server'</code> 也不是"在服务端执行"的开关。它们标的不是<em>执行位置</em>，而是<em>模块边界</em>。</p>
<ul>
<li><code>'use client'</code>：告诉打包器，"从这个文件开始，包括它 import 的所有东西，都要进客户端 bundle"。这个文件本身在首屏 SSR 时仍然会在服务端跑一次（生成初始 HTML），之后由客户端 React hydrate 并接管。</li>
<li><code>'use server'</code>：标记一个<strong>只在服务端执行的函数</strong>（Server Action）。客户端拿到的只是一个"可以被调用的引用"，真正的执行发生在服务端，调用过程会被 React 自动编译成一次 RPC。</li>
</ul>
<p>所以更精确的说法是：</p>
<ul>
<li>默认（没写任何指令）的文件 = <strong>Server Component</strong>，只在服务端跑，代码<em>不会</em>被打包进客户端 bundle。</li>
<li>带 <code>'use client'</code> 的文件 = <strong>Client Component</strong>，服务端和客户端都会执行，代码<em>会</em>被打包进客户端 bundle。</li>
<li>带 <code>'use server'</code> 的函数 = <strong>Server Action</strong>，只在服务端执行，客户端通过 RPC 调用。</li>
</ul>
<p>明白这件事，很多看似玄学的问题就不玄学了。比如"为什么我在 Client Component 里 <code>import</code> 了一个 fs 工具就报错"——因为 <code>'use client'</code> 的传染性是沿着 import 图走的，那个工具连带它依赖的 <code>fs</code> 都会被尝试打包进浏览器。</p>
<h2>二、边界上的数据流：序列化是硬约束</h2>
<p>Server Component 可以渲染 Client Component，并通过 props 把数据传过去。这件事在代码层面看起来和普通父子组件没区别，但它背后藏着一个硬约束：<strong>跨越 server → client 边界的 props 必须是可序列化的</strong>。</p>
<p>React 会把 Server Component 的渲染结果编码成一段特殊的流（RSC payload），再在客户端反序列化、拼装出 React 树。这段流能携带的东西是有限的：</p>
<ul>
<li>可以：基本类型、普通对象、数组、<code>Date</code>、<code>Map</code>、<code>Set</code>、Promise（会变成 thenable）、JSX、以及 <strong>Server Action 函数引用</strong>。</li>
<li>不可以：普通函数、class 实例、带原型方法的对象、Symbol（自定义的）、DOM 节点……</li>
</ul>
<p>典型的错误写法：</p>
<pre><code class="language-tsx">// app/page.tsx (Server Component)
import Button from './button';

export default function Page() {
  // 错：onClick 是普通函数，不能跨边界
  return &lt;Button onClick={() =&gt; console.log('hi')} /&gt;;
}</code></pre>
<p>这段代码在开发时会直接报错，但还有一类更隐蔽的情况——把 ORM 返回的实例对象（带方法的）整个传给 Client Component：</p>
<pre><code class="language-tsx">// app/page.tsx
import UserCard from './user-card';

export default async function Page() {
  const user = await db.user.findFirst(); // 可能是带方法的 model 实例
  return &lt;UserCard user={user} /&gt;; // 可能悄悄丢掉方法，或报错
}</code></pre>
<p>稳妥的做法是在边界上显式"投影"一次，只把纯数据传过去：</p>
<pre><code class="language-tsx">const user = await db.user.findFirst();
const userDTO = { id: user.id, name: user.name, avatar: user.avatar };
return &lt;UserCard user={userDTO} /&gt;;</code></pre>
<p>这个习惯很值得养成。它顺带解决了另一个问题——你不会在无意中把数据库里不该出现在前端的字段（密码 hash、内部 token）带到客户端。</p>
<h2>三、反向数据流：Server Action 就是跨边界的函数引用</h2>
<p>前面说 props 不能传普通函数，但有一个例外：<strong>Server Action</strong>。</p>
<pre><code class="language-tsx">// app/actions.ts
'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  await db.post.create({ data: { title: String(title) } });
}</code></pre>
<pre><code class="language-tsx">// app/new-post.tsx
'use client';
import { createPost } from './actions';

export default function NewPost() {
  return (
    &lt;form action={createPost}&gt;
      &lt;input name="title" /&gt;
      &lt;button&gt;Save&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
<p>这里 <code>createPost</code> 看起来像被 import 进了 Client Component，但实际上客户端拿到的只是一个指向服务端函数的引用。打包器不会把函数体打进客户端 bundle，调用它就是发一次 RPC。</p>
<p>所以可以把数据流总结成：</p>
<ul>
<li><strong>Server → Client</strong>：通过 props，传可序列化数据。</li>
<li><strong>Client → Server</strong>：通过 Server Action，传参数走 RPC。</li>
</ul>
<p>这个双向通道是 RSC 最优雅的部分之一，只要记住"传过去的是数据还是引用"，就不会迷路。</p>
<h2>四、几个把 RSC 收益吃掉的常见误区</h2>
<h3>1. 把整个页面标成 Client Component</h3>
<p>最常见、也最"看不见"的错误。经常是因为要加一个 <code>useState</code>、或者想用一个第三方 Client 组件库，就顺手在 <code>app/xxx/page.tsx</code> 顶上加了 <code>'use client'</code>。</p>
<p>后果是：这个页面下所有子树默认都变成了 Client Component，服务端数据获取、不打包到客户端这些收益全部作废。更糟的是，如果你还继续在里面写 <code>await db.x()</code>，会直接把数据库驱动拉进客户端 bundle，要么报错，要么体积炸掉。</p>
<p>正确做法是把 <code>'use client'</code> 推到<em>叶子</em>：把需要交互的那一小块单独抽成组件，让它成为 Client，外面继续是 Server。</p>
<pre><code class="language-tsx">// app/posts/page.tsx  —— 仍然是 Server Component
import LikeButton from './like-button';

export default async function Page() {
  const posts = await db.post.findMany();
  return (
    &lt;ul&gt;
      {posts.map((p) =&gt; (
        &lt;li key={p.id}&gt;
          {p.title} &lt;LikeButton postId={p.id} /&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
<pre><code class="language-tsx">// app/posts/like-button.tsx  —— 仅这个文件是 Client
'use client';
import { useState } from 'react';

export default function LikeButton({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false);
  return (
    &lt;button onClick={() =&gt; setLiked((v) =&gt; !v)}&gt;
      {liked ? '已赞' : '点赞'}
    &lt;/button&gt;
  );
}</code></pre>
<h3>2. Client Component 里嵌 Server Component，想当然地 import</h3>
<p>Client Component 里不能直接 <code>import</code> 一个 Server Component 来用——因为一旦被 import，它就会被卷进客户端 bundle。</p>
<p>但 Client Component <em>可以</em>通过 <code>children</code> / props "接收"一个已经渲染好的 Server Component 节点。这个模式非常好用：</p>
<pre><code class="language-tsx">// app/layout.tsx  (Server)
import ClientShell from './client-shell';
import ServerSidebar from './server-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    &lt;ClientShell sidebar={&lt;ServerSidebar /&gt;}&gt;
      {children}
    &lt;/ClientShell&gt;
  );
}</code></pre>
<p><code>ClientShell</code> 可以有自己的状态、动画、拖拽，而 <code>ServerSidebar</code> 仍然在服务端跑、不进 bundle。边界就靠"用 children/props 而不是 import"来隔开。</p>
<h3>3. 把大依赖拉进 Client Component</h3>
<p>比如在一个 Client Component 里随手 <code>import dayjs from 'dayjs'</code>、<code>import { marked } from 'marked'</code>。这些库很可能只是用来格式化一下时间、把 markdown 转成 HTML——这种"一次性、无交互"的计算，完全可以让 Server Component 做完再把结果传过来。</p>
<p>一个简单的判断：<em>如果这个计算不依赖 state、不依赖浏览器 API，就别在 Client 里做。</em>把结果当 prop 传过去就行，相应的依赖也不会进 bundle。</p>
<h3>4. 把 Server Action 当普通 API 用，忘了它是有成本的</h3>
<p>Server Action 方便到会让人上瘾，但每次调用都是一次真·网络往返。在 <code>onChange</code> 这种高频事件里直接调 Server Action，体验会明显变差。需要的话该 debounce 就 debounce，该用 <code>useOptimistic</code> 做乐观 UI 就做。</p>
<h3>5. 忘了 Server Component 的状态是"请求级别"的</h3>
<p>Server Component 没有 <code>useState</code>，它每次渲染都是一次全新执行。不要指望在里面放"跨请求的变量"——那叫全局模块状态，既不可靠也容易跨请求污染。需要持久化就写进数据库，需要跨组件共享就往上提到父 Server Component 里 fetch 一次再传下来（React 的 <code>cache()</code> 可以去重）。</p>
<h2>五、一份可以直接照着用的边界划分清单</h2>
<p>每写一个新组件时，按顺序问自己这几个问题，基本就不会跑偏：</p>
<ol>
<li><strong>它需要 state、effect、ref、事件处理器，或者浏览器 API 吗？</strong><br />不需要 → Server Component，默认就是，不用加指令。<br />需要 → 继续下一题。</li>
<li><strong>能不能把"需要交互的那一小块"单独拆出来？</strong><br />能 → 拆。让父组件继续是 Server，只把叶子做成 Client。<br />不能（整块都高度交互） → 整块做成 Client，但要警惕它的 import 链。</li>
<li><strong>传给它的 props 全都是可序列化数据吗？</strong><br />是 → 放心传。<br />不是（有函数、类实例） → 如果是函数，考虑做成 Server Action；如果是类实例，在边界上投影成纯对象。</li>
<li><strong>需要在客户端引入一个大库吗？</strong><br />先看这件事能不能在 Server 上做完，把结果传过去。<br />确实需要在客户端跑（如富文本编辑器、图表交互） → 再考虑 <code>dynamic(() =&gt; import(...), { ssr: false })</code> 按需加载。</li>
<li><strong>数据获取放哪？</strong><br />优先放在离使用点最近的 Server Component 里 <code>await</code>。不要习惯性地提到顶层再层层 prop drill——RSC 鼓励"就地 fetch"，React 的 <code>cache()</code> 会帮你去重。</li>
<li><strong>需要从客户端触发一个服务端动作吗？</strong><br />能用 Server Action 就用 Server Action，比手写 API route + fetch 简单得多，还天生支持 <code>&lt;form action&gt;</code> 的渐进增强。</li>
<li><strong>出现了"Client 里想用 Server Component"的诉求？</strong><br />不要 import，改成用 <code>children</code> / props 把 Server 节点"塞"进 Client。</li>
</ol>
<h2>六、一点体会</h2>
<p>RSC 改变的不是 React 的 API 形状，而是"组件"这个概念本身的含义。过去一个组件就是"一段会在浏览器里跑的 UI 代码"，现在它同时承担了"一段会在服务端跑的数据 + 渲染代码"。两种形态共用语法，但在执行模型上是两回事。</p>
<p>写熟了之后，<code>'use client'</code> 对我来说越来越像一个"成本标签"——每贴一次，就意味着多一点客户端 bundle、多一点 hydration 工作、多一点心智负担。所以我会尽量让它停在叶子节点，让树的其余部分安静地留在服务端。这种"默认 Server、按需 Client"的习惯一旦养成，RSC 的那些性能收益就是自然而然的事，不需要刻意优化。</p>
<p>边界划分不是一次性任务，它会随着业务复杂度一起长。但只要心里有那把尺子——<em>数据可序列化、交互在叶子、依赖看执行位置</em>——就不会走太偏。</p>`,
  },
  {
    slug: 'react-19-and-rsc-mental-model',
    title: 'React 19 新特性与 RSC 实战心智模型：use、Actions、useOptimistic 一次讲透',
    date: '2026-04-21',
    tags: ['React', '前端', 'React 19', 'RSC', 'Server Components'],
    excerpt:
      'React 19 正式版把这几年我们反复手写的模式——读 Promise、表单状态机、乐观更新——都收敛成了一等公民的 API，同时 Server Components 也从"实验特性"变成了日常工具。这篇把 use、Actions、useOptimistic 三个新 API 串在 RSC 的执行模型里聊一遍，看看它们在实际项目里怎么配合落地。',
    contentHTML: `<p>从 React 18 升级到 19 的过程里，我最大的感受不是"又多了几个 Hook"，而是<strong>心智模型在悄悄变化</strong>：过去写组件，脑子里只有一棵浏览器里跑的树；现在还要时刻意识到，有一半的节点可能根本不在浏览器里执行。React 19 的那些新 API——<code>use</code>、Actions、<code>useOptimistic</code>——放在"纯 CSR"视角下看是糖，放在 RSC 视角下看才是完整拼图。</p>
<p>这篇想把这几个点串起来聊，尽量避免单独介绍 API，而是看它们怎么在一个真实项目里协同工作。</p>
<h2>一、先把 RSC 的心智模型钉死</h2>
<p>聊新 API 之前，必须先把 Server Components 的几个"硬性事实"记牢，不然后面的讨论都会悬空：</p>
<ul>
<li><strong>Server Component 只在服务端执行一次</strong>，它的产物是一段可序列化的 UI 描述（不是 HTML），顺着流发给浏览器。</li>
<li><strong>Client Component 的 props 必须可序列化</strong>。函数、Class 实例、Symbol 不能穿越边界；Promise 可以，这是 <code>use</code> 能工作的前提。</li>
<li><strong>'use client' 是一条"下游边界"</strong>。它标记的是"从这个文件开始，往下的子树运行在浏览器"，而不是"这个组件是客户端的"。</li>
<li><strong>Server Component 里不能用 Hook</strong>（除了 <code>use</code>），因为根本没有"这一次渲染的 state" 这种东西——它就是一次性函数调用。</li>
</ul>
<p>记住这四条，后面的新 API 看起来就不再是零散的糖，而是围绕这条边界各自补齐了一块。</p>
<h2>二、use：在组件里直接读 Promise 和 Context</h2>
<p>React 18 里想在组件里拿一个异步结果，要么 <code>useEffect</code> + <code>useState</code>，要么借助数据层（SWR / React Query）。React 19 的 <code>use</code> hook 让这件事变得非常朴素：</p>
<pre><code class="language-tsx">// Server Component：把 Promise 当 prop 传下去
export default function PostPage({ params }: { params: { slug: string } }) {
  const postPromise = fetchPost(params.slug); // 不 await
  return &lt;PostView postPromise={postPromise} /&gt;;
}

// Client Component：用 use 把 Promise "拆包"
'use client';
import { use, Suspense } from 'react';

function PostView({ postPromise }: { postPromise: Promise&lt;Post&gt; }) {
  const post = use(postPromise);
  return &lt;article&gt;&lt;h1&gt;{post.title}&lt;/h1&gt;&lt;/article&gt;;
}</code></pre>
<p>这里有两个关键点容易被忽略：</p>
<ol>
<li><strong>Promise 是在 Server Component 里创建的，但在 Client Component 里被 "await"</strong>。React 会把这个 Promise 作为可序列化的东西跨越边界，浏览器拿到它、挂上 Suspense，等它 resolve 之后再继续渲染。</li>
<li><strong><code>use</code> 不是 <code>await</code></strong>。它可以写在条件分支里，可以写在循环里，不受 Hook 的"顶层调用"规则约束——因为它本质上是跟 Suspense 协作的"暂停渲染"指令，不是用来保存 state 的。</li>
</ol>
<p><code>use</code> 也能读 Context：<code>const theme = use(ThemeContext)</code>。这条路径和 <code>useContext</code> 等价，但因为不受顶层规则限制，条件性读取 Context 终于成了合法操作。</p>
<h2>三、Actions 与 useActionState：表单的"默认形状"</h2>
<p>第二个改变了我日常写法的特性是 Actions。它把"一个函数 + 它的 pending / error 状态"打包成了一等公民：</p>
<pre><code class="language-tsx">'use client';
import { useActionState } from 'react';

async function updateName(prevState: State, formData: FormData) {
  const name = formData.get('name') as string;
  try {
    await api.updateName(name);
    return { ok: true, error: null };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  }
}

export function EditName() {
  const [state, formAction, isPending] = useActionState(updateName, {
    ok: false,
    error: null,
  });

  return (
    &lt;form action={formAction}&gt;
      &lt;input name="name" /&gt;
      &lt;button disabled={isPending}&gt;{isPending ? '保存中...' : '保存'}&lt;/button&gt;
      {state.error &amp;&amp; &lt;p className="err"&gt;{state.error}&lt;/p&gt;}
    &lt;/form&gt;
  );
}</code></pre>
<p>和过去手写三个 <code>useState</code>（<code>pending</code> / <code>error</code> / <code>data</code>）再包一层 <code>try/finally</code> 相比，<code>useActionState</code> 的价值在于它把"表单提交的状态机"整个收编了：pending 自动管理、返回值自动变成下一次 state、和 <code>&lt;form action&gt;</code> 的原生语义对齐，没 JS 的时候也能 fallback 到浏览器原生提交。</p>
<p>如果这个 action 写在 Server Component 文件里并且标了 <code>'use server'</code>，它就是 <strong>Server Action</strong>——客户端调用时会自动序列化 <code>FormData</code>、走一次 RPC、返回值作为新 state 注入。这才是 Actions 设计的完整形态：<em>同一套 API，在纯客户端和 Server Action 两种场景下写法完全一样</em>。</p>
<h2>四、useOptimistic：把"假装已经成功"做成 API</h2>
<p>乐观更新是社交类 UI 的刚需——点赞、发评论、删消息，你不可能让用户对着 loading 圈等 500ms。React 19 之前的做法是自己维护一份"临时 state"，成功了合并、失败了回滚，代码很容易写乱。<code>useOptimistic</code> 把这件事变成了三行：</p>
<pre><code class="language-tsx">'use client';
import { useOptimistic } from 'react';

function Comments({ comments, addAction }: Props) {
  const [optimistic, addOptimistic] = useOptimistic(
    comments,
    (state, newText: string) =&gt; [...state, { id: 'temp', text: newText, pending: true }],
  );

  async function formAction(formData: FormData) {
    const text = formData.get('text') as string;
    addOptimistic(text);          // 立刻更新 UI
    await addAction(formData);    // 真正的提交
  }

  return (
    &lt;&gt;
      &lt;ul&gt;{optimistic.map((c) =&gt; &lt;li key={c.id} style={{ opacity: c.pending ? 0.5 : 1 }}&gt;{c.text}&lt;/li&gt;)}&lt;/ul&gt;
      &lt;form action={formAction}&gt;&lt;input name="text" /&gt;&lt;/form&gt;
    &lt;/&gt;
  );
}</code></pre>
<p>关键是这一句：<strong>当真实数据（<code>comments</code> prop）变化时，乐观状态会自动被"重放"一次</strong>。也就是说，你不需要手动 rollback——只要底层数据最终更新了（来自 Server Action 返回 / revalidate / router refresh），<code>useOptimistic</code> 就会以新数据为基准重新跑一遍 reducer，临时状态自然消失。失败时同理，数据没变，optimistic 就被丢弃。</p>
<p>这套模型和 Actions 是配套的：Action 提交 → Server 重新验证 → 新数据顺着 RSC 流下来 → <code>useOptimistic</code> 自动对齐。三个 API 在一条链路上各司其职。</p>
<h2>五、边界与组合：三者在 RSC 下的协作</h2>
<p>把上面三个拼在一起，一个典型的"列表 + 提交"页面大概是这个形状：</p>
<ul>
<li><strong>Server Component（<code>page.tsx</code>）</strong>：<code>await</code> 列表数据，或者把 <code>fetchList()</code> 的 Promise 原样传下去。定义一个 <code>'use server'</code> 的 Action，用来真正写数据库。</li>
<li><strong>Client Component（<code>List.tsx</code>）</strong>：用 <code>use</code> 拆包 Promise（如果父组件没 await），用 <code>useOptimistic</code> 维护本地幻觉状态，用 <code>useActionState</code> 把 Server Action 接到 <code>&lt;form&gt;</code> 上。</li>
<li><strong>revalidate / router.refresh</strong>：Action 成功后通知 RSC 重新跑一遍，新数据流下来替换旧 props，<code>useOptimistic</code> 自动对齐。</li>
</ul>
<p>这里有几个我自己踩过的坑，顺手记一下：</p>
<ol>
<li><strong>不要在 Server Component 里 <code>await</code> 后再传 Promise</strong>。要么 <code>await</code> 拿到值往下传（数据在服务端渲染时就绪），要么保留 Promise 往下传（配合 <code>use</code> + Suspense 做流式）。两者选一个，别混。</li>
<li><strong>Server Action 的入参出参必须可序列化</strong>。别把 class 实例、Date 对象（某些情况下）、函数塞进去，会在边界处静默失败。</li>
<li><strong><code>useOptimistic</code> 的 reducer 要保持纯净</strong>，不要在里面触发副作用或访问外部 state，它会被重放多次。</li>
<li><strong>Suspense 边界要明确</strong>。<code>use(promise)</code> 会抛出 Promise 触发 Suspense，外层必须有 <code>&lt;Suspense fallback&gt;</code>，否则会一路冒泡到 root。</li>
</ol>
<h2>六、一点体会</h2>
<p>React 19 给我最深的印象，是它终于承认了"一个现代 React 应用不只跑在浏览器里"这件事，并围绕它把 API 整理了一遍。<code>use</code> 是跨越 Server/Client 边界消费异步值的通用方式；Actions 是跨越边界触发副作用的通用方式；<code>useOptimistic</code> 是在这套异步流水线上维护即时反馈的通用方式。三者加起来覆盖了"读数据、写数据、即时 UI 反馈"这条最常见的链路。</p>
<p>如果说 Hooks 时代的核心心法是"组件即函数、状态即闭包"，那 RSC 时代的核心心法更像是"<em>组件是可以分布在两台机器上的函数</em>"。想清楚每段代码跑在哪、能传什么、会被执行几次，这些新 API 就不再让人眼花——它们只是把分布式系统里那些本来就要解决的问题，用 React 的方式重新表达了一遍。</p>`,
  },
  {
    slug: 'react-hooks-internals',
    title: '从源码和调度视角理解 React Hooks 的本质',
    date: '2026-04-21',
    tags: ['React', 'Hooks', '前端', '原理', 'Fiber'],
    excerpt:
      'Hooks 写多了之后，该从调用者视角切换成实现者视角。这篇从 Fiber 上那条 Hook 链表讲起，聊它为什么不能条件调用、useState 和 useReducer 在源码里到底是不是一回事、以及并发模式下 hook 的行为为什么变得"可丢弃"。',
    contentHTML: `<p>React Hooks 的 API 表面非常朴素——几个函数、几个数组依赖，看起来没什么门槛。但只要你读过一次 <code>react-reconciler</code> 的源码，就会发现所有"规则"和"反直觉"的地方，其实都是调度器和 Fiber 数据结构硬性约束下的必然结果。</p>
<p>这篇不讲怎么用 Hooks，而是试着站在 React 内部的角度看：一个 Hook 到底是什么、它挂在哪里、调度器怎么推进它、为什么 <code>useState</code> 和 <code>useReducer</code> 在实现上几乎是同一个东西，以及并发模式给 hook 语义带来了哪些变化。</p>
<h2>一、Hook 不是魔法，是 Fiber 上的一条链表</h2>
<p>读源码前很多人以为 Hook 靠闭包记住状态，读完之后会发现：它其实什么都没记住，是 Fiber 节点替它记着。</p>
<p>每个函数组件在协调（reconcile）时都对应一个 Fiber 节点，Fiber 上有一个字段 <code>memoizedState</code>，它是一条单向链表的头节点。每调用一次 Hook，React 就往链表尾部追加一个 hook 对象：</p>
<pre><code>// 极简化后的 hook 节点
type Hook = {
  memoizedState: any;         // 当前值：state、effect、memo 值……
  baseState: any;             // 并发模式下的"基础值"
  baseQueue: Update | null;   // 被跳过的 update 组成的环形队列
  queue: UpdateQueue | null;  // 当前待消费的 update 队列
  next: Hook | null;          // 指向下一个 hook
};</code></pre>
<p>渲染函数组件时，React 会把一个内部指针 <code>currentlyRenderingFiber.memoizedState</code> 从链表头推进到尾，<strong>第 n 次调用 Hook 就读第 n 个节点</strong>。整个机制靠"调用顺序"对齐 Hook 的身份，不靠名字、也不靠词法位置。</p>
<p>所以"不能在条件里调用 Hook"不是风格约束，而是数据结构约束。一旦某次渲染少调用了一个 <code>useState</code>，链表指针就会错位，后面所有 Hook 读到的都是上一个槽位的数据——等价于内存越位。<code>react-hooks/rules-of-hooks</code> 这条 lint 规则要拦住的就是这个，关掉它等于允许运行时崩。</p>
<h2>二、mount 和 update 走的是两套 dispatcher</h2>
<p>源码里有个很容易忽略的细节：<code>useState</code> 并不是一个固定的函数，而是从一个叫 <strong>dispatcher</strong> 的对象上动态读出来的。React 内部维护了两套 dispatcher：</p>
<ul>
<li><code>HooksDispatcherOnMount</code>：第一次渲染时挂上去。<code>useState</code> 在这里叫 <code>mountState</code>，负责创建 hook 节点、初始化 <code>memoizedState</code>、生成 <code>queue</code>。</li>
<li><code>HooksDispatcherOnUpdate</code>：后续每次更新时挂上去。<code>useState</code> 在这里叫 <code>updateState</code>，它不会再创建 hook 节点，而是<strong>复用上一棵 Fiber 树（current 树）上的对应 hook</strong>，再消费它的 update 队列算出新值。</li>
</ul>
<p>伪代码大概长这样：</p>
<pre><code>function renderWithHooks(current, workInProgress, Component, props) {
  ReactCurrentDispatcher.current =
    current === null
      ? HooksDispatcherOnMount
      : HooksDispatcherOnUpdate;

  const children = Component(props);

  ReactCurrentDispatcher.current = ContextOnlyDispatcher;
  return children;
}</code></pre>
<p>这解释了两件事：<strong>一，为什么在组件函数外部调用 Hook 会直接报错</strong>——那个时刻 dispatcher 是 <code>ContextOnlyDispatcher</code>，里面所有 Hook 都是抛错函数。<strong>二，为什么 Hook 行为在 mount 和 update 时完全不一样</strong>——它们实际上是两个不同的实现。</p>
<h2>三、useState 其实是 useReducer 的一个特例</h2>
<p>读源码时一个有点意外的发现：<code>useState</code> 和 <code>useReducer</code> 在内部共用同一套更新机制，前者只是后者预置了一个 reducer。</p>
<pre><code>function basicStateReducer(state, action) {
  return typeof action === 'function' ? action(state) : action;
}

function updateState(initialState) {
  return updateReducer(basicStateReducer, initialState);
}</code></pre>
<p>这段代码把所有"函数式更新"的特殊感都抹平了：<code>setCount(c =&gt; c + 1)</code> 里传的函数，只是被当成 action 丢进 <code>basicStateReducer</code>，reducer 发现它是 function 就调一次。</p>
<p>它也解释了这两条平时容易混的规则：</p>
<ul>
<li><strong>同一个 tick 内多次 setState 会批处理</strong>，因为它们都只是往 <code>hook.queue</code> 里追加 update，渲染时统一 reduce。</li>
<li><strong>相同值不触发重渲</strong>，因为 React 在 dispatch 时会用 <code>Object.is</code> 对比当前 state 和新 action 的 eager 结果，相等就标记为可 bail out。</li>
</ul>
<p>所以"什么时候用 <code>useReducer</code>"这个问题从实现角度看答案很简单：<strong>当状态更新逻辑本身已经复杂到值得抽成纯函数时，就用 useReducer</strong>。它不会更快，也不会更慢，只是让你手里握着那个 reducer。</p>
<h2>四、并发模式下的 hook：update 变成了"可丢弃"</h2>
<p>React 18 之后，hook 语义最大的变化来自并发渲染。在同步模式下，一次 setState 触发的渲染是不可中断的，队列里的 update 一次性全部应用。并发模式里，渲染可以被打断、可以被丢弃、可以被重新开始——这对 hook 的实现提出了新要求。</p>
<p>核心思想是给每个 update 打一个 <strong>lane</strong>（优先级车道）标签，渲染时只消费当前 lane 允许的 update，其它的先跳过、挂到 <code>baseQueue</code> 上：</p>
<pre><code>// 简化后的 updateReducer 思路
let newState = hook.baseState;
let update = hook.baseQueue?.next ?? hook.queue.pending?.next;

while (update !== null) {
  if (!isSubsetOfLanes(renderLanes, update.lane)) {
    // 优先级不够，跳过；记到 baseQueue 里等下次
    cloneIntoBaseQueue(update);
  } else {
    newState = reducer(newState, update.action);
  }
  update = update.next;
}
hook.memoizedState = newState;</code></pre>
<p>这带来几个容易忽略的后果：</p>
<ul>
<li><strong>一次渲染里拿到的 state 不一定是"最新"的</strong>，只是"在这个优先级下能看到的最新"。低优先级 update 会被推迟。</li>
<li><strong>渲染函数可能被丢弃重跑</strong>。也就是说，函数组件本身必须是纯的——把 <code>fetch</code>、写 <code>ref</code>、改全局变量这些副作用放到渲染里，就会被丢弃/重跑的机制放大成幽灵 bug。副作用必须待在 <code>useEffect</code> / <code>useLayoutEffect</code> 里。</li>
<li><strong>Strict Mode 故意双调用</strong>组件函数和 effect，就是在模拟这种"渲染可能被丢弃再跑一次"的未来行为，提前把不纯的代码曝光出来。</li>
</ul>
<p><code>useTransition</code> 和 <code>useDeferredValue</code> 本质上就是往上面那套 lane 系统里塞标签的 API——前者把一批 setState 打成低优先级 lane，后者把某个值的更新延后到空闲 lane。它们不是"魔法 debounce"，而是对调度器的一次显式表达。</p>
<h2>五、几个从实现反推回来的心智模型</h2>
<p>读完源码再回头看日常写 Hooks，有些原则会变得更牢固：</p>
<ul>
<li><strong>Hook 调用顺序是契约</strong>。任何会改变调用序列的分支、early return、动态 hook 数量，都是在破坏 React 和你的约定。</li>
<li><strong>state 是队列的 reduce 结果，不是一个被你直接赋值的变量</strong>。这条想清楚，函数式更新、批处理、bail out 都是推论。</li>
<li><strong>组件函数必须是纯函数</strong>。并发模式下它会被丢弃重跑，任何"在渲染里做一次"的副作用都会变成"在渲染里做了不确定次"。</li>
<li><strong>effect 的时机由调度器决定，不是你代码的书写顺序</strong>。<code>useLayoutEffect</code> 在 commit 阶段同步跑，<code>useEffect</code> 被推到 paint 之后异步跑，跨组件之间还要参与冒泡顺序。</li>
<li><strong>优先级是一等公民</strong>。在 React 18+ 里，"这次更新有多紧急"和"这次更新是什么内容"一样重要。紧急的交给默认优先级，非紧急的主动降级到 transition。</li>
</ul>
<p>Hooks 的 API 设计克制到像没设计过，但背后的这套"Fiber + 链表 + 调度 + lane"其实一点都不简单。理解它的好处不是为了面试时能答出"Hook 链表是怎么挂的"，而是在遇到奇怪的渲染行为时，脑子里能多一层可以往下挖的抽象——那才是把 React 当成基础设施使用，而不是仅仅当成组件库。</p>`,
  },
];

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
