# 主页面重构方案与双语文案讨论稿

- **状态**：已完成实施与本地验收
- **参考站点**：`https://creative-class.site/kodama-001-archive/`
- **适用范围**：色板与透明渐进顶栏全站统一；主页面（`/` 与 `/zh/`）先行完成重构，其余详情页与法律页渐进调整

---

## 1. 背景与现状诊断

当前主页（`_layouts/apps-home.html`、`_sass/pages/_page-app.scss`）存在以下问题：

1. **视觉人格割裂**：顶栏与 Hero 采用深紫暗黑底（`#2d2737`）、网络网格背景、鼠标跟随霓虹光斑与亮橙主按钮，偏传统科技模板；而下方作品区与原则区已转向浅色极简中性风，两段衔接生硬。
2. **首屏记忆点弱**：`100vh` 居中单栏文字 + 双按钮，大面积暗背景留白空旷，缺乏独立创作者的辨识度。
3. **文案偏「产品说明书」**：现有首页文案过于理性防御（如「数据去向写清楚」「没有广告与冗余步骤」），适合放在各 App 详情页，但在首页未能传达创作者的审美偏好与态度。
4. **样式耦合**：主页样式集中在 `_sass/pages/_page-app.scss`，而 `_sass/pages/_page-home.scss` 几乎为空，后续重构应先完成职责拆分。

---

## 2. 视觉与交互设计方向

参考 `kodama-001-archive` 的**「建筑感瑞士网格 + 柔和弥散几何氛围」**，同时结合独立软件作品集的信息体量进行取舍。

### 2.1 视觉基调与色板建议

| 视觉要素 | 建议方向 | 说明 |
| :--- | :--- | :--- |
| **基底色（Paper）** | `#fafaf7` | 温润纸白，替代生硬的纯白与深紫暗底 |
| **主墨色（Ink）** | `#263846` | 深青灰墨色，比纯黑更有建筑与出版物气质 |
| **次色 / 暗带底色（Muted）** | `#5d6f7d` | 浅色区作元信息文字；中后段作「创作观」暗色带背景（配 `#fafaf7` 文字） |
| **分割线（Hairline）** | `#d7e0e5`（浅区）/ `rgba(250,250,247,0.35)`（暗带） | 全站以 `1px` 细线建立结构秩序 |
| **形体与阴影** | `border-radius: 0`、零 `box-shadow` | 取消 `12px` 圆角卡片与投影，靠留白、比例与细线体现质感 |
| **字重策略** | 标题统一常规字重（`400`） | 用字号反差、字距、行高、等宽索引建立层级，而非粗体堆砌 |
| **品牌点缀色** | 柔和弥散化处理 | 将原有高饱和橙/青收敛为 Hero 与按钮悬停时的低饱和弥散光晕 |

### 2.2 页面区块结构（从上到下）

1. **固定透明渐进顶栏（Header）**
   - 取消厚重实心深色底，改为透明悬浮 + 多层 `mask-image` 渐进模糊（`blur` 由浅入深）。
   - 左侧 `lane4dev • apps` + 可选直角 `1px` 细框副标；右侧精简导航、`1px` 直角边框语言切换标签（`EN` / `中文`）与紧凑深墨色跳转按钮。
2. **首屏 Hero（全屏浅纸白 + 底部非对称分栏）**
   - 居中偏上层叠柔和弥散的几何氛围图形（替代网络底纹与霓虹光斑）。
   - 底部左右分栏：左下放大号常规字重主标题 + 英文副标；右下放 2 句定位导语 + 单一主行动按钮（`查看应用 ↓` / `Browse apps ↓`）。
3. **作品区 `01 — SELECTED WORK`（参考 Section 03 视差步进舞台）**
   - **桌面端 Sticky 滚动遍历**：
     - 外层轨道高度随应用数量动态计算：`--app-count: {{ sorted_apps.size }}`，约 `calc(var(--app-count) * 80vh + 40vh)`。
     - 内层舞台 `position: sticky; top: var(--header-h); height: calc(100svh - var(--header-h));`，随滚动进度逐个遍历 `01 Beyond Words` → `02 Accounted For` → `03 AI Heading Brief`。
   - **三列非对称布局**：
     - 左侧（约 48%）：固定统一高度与比例的直角展示画框，兼容手机竖屏与桌面浏览器窗口截图，切换时不跳动；背景叠加慢速视差弥散色晕，截图随局部滚动进度产生微幅垂直视差（约 `±14px`）。
     - 中右（约 40%）：等宽平台编号、常规字重大标题、简介、`查看详情 →` 链接，以及底部横向 `01 / 02 / 03` 步进进度条（顶部 `1px` 线条随局部滚动实时 `scaleX` 延展，且支持点击直达对应应用）。
     - 最右边缘（中英差异化）：中文页放 `writing-mode: vertical-rl` 竖排短句；英文页改为极简竖向索引标签或省略。
   - **响应式与无障碍降级**：
     - `<= 1023px` 移动端退出 `sticky`，降级为纵向依次排列的作品块。
     - `prefers-reduced-motion: reduce` 或无 JS 时展开为静态列表；桌面端键盘 `Tab` 聚焦到非激活项时自动联动切换并滚动对齐。
4. **暗色带 `02 — NOTES / 创作观`**
   - 切换至雾灰蓝（`#5d6f7d`）暗色带 + 纸白文字，打破浅色长页单调感，作为整页中后段的视觉重心。
   - 采用 2×2 建筑感细线网格（或左栏大标题 + 右栏 `01`–`04` 索引列）呈现四条创作者理念。
5. **收尾区与精简页脚（Closing Note & Footer）**
   - 回归纸白底色，以轻盈落款承接 `tangyu.me` 个人网站与邮箱联系；页脚精简收束。

### 2.3 取舍与工程原则

- **不照搬 `100vw / 144` 纯视口缩放**：保留 `_sass/_tokens.scss` 的 `clamp()` + `rem` 体系，保障浏览器缩放与无障碍体验。
- **零第三方动效库**：延续 `assets/js/scripts.js` 的原生风格，用 `rAF` + `passive` 滚动监听与 CSS 自定义属性实现 60fps 视差；注意祖先容器使用 `overflow-x: clip` 而非 `overflow: hidden` 以免破坏 `sticky`。
- **样式职责分离**：将主页样式从 `_sass/pages/_page-app.scss` 抽离至 `_sass/pages/_page-home.scss`，避免影响各 App 详情页与法律页。

---

## 3. 首页中英双语文案方案

### 3.1 创作者核心理念（原始要点）

1. 突出个人审美倾向——因为喜欢**小而美**的工具。
2. 软件创作也是一种**自我表达**，是关于**「我如何看待这件事（问题）」**。
3. 这些工具**首先开发给自己**，然后希望**分享给全世界**。
4. 软件的**生命力来自持续迭代**，它的**价值来自解决了什么实际问题**。
5. 希望作品在**有趣和有用**之间找到平衡；如果无法兼得，**希望它首先是有趣的**。
6. **好的设计应该是符合直觉、不言自明的**。

---

### 3.2 分区块双语文案稿

> 说明：英文版不作逐字直译，而以同等个人态度与地道短句重写。

#### Hero 首屏（已选定方向 A）

- **主标题（H1）**
  - **中文**：`先做给自己，再分享给世界`
  - **English**：`Built for myself, shared with the world`
- **主标题下方副标（Eyebrow / Sub-label）**
  - **中文页副标**：`BUILT FOR MYSELF · SHARED WITH THE WORLD`
  - **English 副标**：`SMALL TOOLS AS SELF-EXPRESSION`
- **右下导语（Lead）**
  - **中文**：`我偏爱小而美的工具。对我而言，写软件也是一种自我表达——记录我如何拆解一个具体问题，并在「有趣」与「有用」之间寻找平衡。`
  - **English**：`I have a bias for small, well-crafted tools. Building software is how I express a point of view—how I frame a real problem, and look for the sweet spot between useful and interesting.`
- **主行动按钮（CTA）**
  - **中文**：`查看应用 ↓`
  - **English**：`Browse apps ↓`

---

#### 作品区 `01 — SELECTED WORK`

- **区块编号**：`(01 — SELECTED WORK)`
- **区块主标题（H2，已定稿）**
  - **中文**：`每一款工具，都是我看待一件事的方式`
  - **English**：`Every tool is how I see a problem.`
- **右侧竖排副标（中文页专属，已定稿）**
  - **中文**：`偏爱小而美，认真解每一题。`
- **单品详情入口**
  - **中文**：`查看详情 →`
  - **English**：`View app →`

##### 三款应用首页文案（问题 + 观点，替代原功能说明）

| 应用 | 中文文案（首页展示） | English Copy (Homepage) |
| :--- | :--- | :--- |
| **01 · 言外**<br>`Beyond Words` | 表达这件事，不必每次都那么严肃。言外既能帮你在需要分寸的场合把话说得体面、说得准，也留了一块让你随手试探边界的游乐场——只要换个语境包，一句平平无奇的日常消息就能瞬间跑偏到另一个次元。有用是它的底线，有趣才是它真正好玩的理由。 | Expression doesn't always have to be so serious. Beyond Words can help you land the right tone when it counts, yet it also leaves room for a playground—swap the context pack and an ordinary message can veer straight into another universe. Being useful is the baseline; being fun to mess around with is the real point. |
| **02 · 记然**<br>`Accounted For` | 市面上成熟的记账软件已经足够多，并不缺一个大而全的新面孔。所以我没打算用记然去覆盖所有人的需求，而是把重心收束在周期性账单与预算管理上——不只记下一笔花销，更想留住这笔钱背后的「所以然」。在我看来，记账的终点从来不是把数字填满，而是回头复盘时能坦然看清每一笔花在哪儿、值不值当，然后更从容地规划下一次消费。 | There is no shortage of feature-packed finance apps, and I never set out to build another one that tries to do everything. Accounted For stays focused on recurring bills and thoughtful budgeting—less about logging numbers for the sake of it, and more about understanding the "why" behind them. Tracking money only matters when it helps you look back, ask where each dollar went and whether it was worth it, and spend more intentionally going forward. |
| **03 · AI 章节速览**<br>`AI Heading Brief` | 我始终认为，AI 不应该替代人去阅读——面对重要或有深度的内容，亲手读完一手原文依然无可替代。AI 章节速览想做的，其实是帮你削减进入长文时的那一点摩擦：在每个标题旁先递上一小段提要，让你在真正读下去之前，脑子里先有了落脚点和关注的重心。它不替你跳过原文，而是让接下来的阅读更顺畅、更有方向。 | AI shouldn't read on your behalf—there is no real substitute for engaging directly with original, primary text. AI Heading Brief is simply meant to take the friction out of diving into long writing. By placing a short preview right beside each heading, it gives your mind a few anchors before you read on—not to skip the text, but to enter it with sharper focus. |

---

#### 暗色带 `02 — NOTES`（创作观，基本定稿）

- **区块编号与标题**
  - **中文**：`(02 — NOTES)` / `创作观`
  - **English**：`(02 — NOTES)` / `How I build`

| 编号 | 中文标题与正文 | English Title & Copy |
| :--- | :--- | :--- |
| **01** | **偏爱小而美，不隐藏审美倾向**<br>不追求大而全。写软件对我来说是一种自我表达——关于我如何看待一个问题，也关于我对「好工具」的审美偏好。 | **Small tools, unhidden taste**<br>I'm not trying to build everything for everyone. Software is a form of self-expression—a record of how I see a problem, and what I think good tools should feel like. |
| **02** | **先有趣，再有用**<br>理想的作品在有趣与有用之间找到平衡；如果二者无法兼得，我希望它首先是有趣的。有趣让创作值得开始，也让日常使用多一点愉悦。 | **Interesting first, useful second**<br>The best tools are both useful and interesting. When I can't have both, I'll choose interesting first—it's what makes building worthwhile, and using it a little more joyful. |
| **03** | **符合直觉，不言自明**<br>好的设计不需要长篇大论的新手引导，也不该靠一堆说明文字去解释自己。拿起来就知道怎么用，每一步都顺着人的本能往下走——工具退后一步，你想做的事才能走到台前。 | **Intuitive, self-evident design**<br>Good design shouldn't need an onboarding tour or a wall of explanations to make sense. You should be able to pick it up and just know where things live—when the interface steps out of the way, what you actually came to do takes center stage. |
| **04** | **解决真问题，在迭代里生长**<br>工具先从我自己的需求出发，再分享给全世界。解决实际问题赋予它价值，而持续的打磨与迭代，才让软件真正拥有生命力。 | **Real problems, kept alive by iteration**<br>Every app starts with something I needed myself, before being shared with everyone else. Solving a real problem gives software its value; continuous iteration is what keeps it alive. |

---

#### 收尾区（Closing Note，已确认保留）

- **中文**：`如果你也在其中某款小工具里找到了共鸣，欢迎试用，或者来信聊聊。`
- **English**：`If any of these small tools resonates with you, take it for a spin—or write and say hello.`
- **链接**：`tangyu.me ↗`、`GitHub ↗`、`hi@tangyu.me`

---

## 4. 已确认范围与实施前最后确认

### 已确认事项
- **色板与顶栏**：全站统一采用 `#fafaf7` / `#263846` / `#5d6f7d` / `#d7e0e5` 色板与透明渐进顶栏；其余内页（App 详情页、法律页等）渐进调整。
- **首页结构**：Hero（方向 A）→ 作品区（Section 03 视差步进舞台）→ 暗色带创作观（4 条，2×2 细线网格或索引列）→ 轻收尾落款 → 精简页脚。
- **双语文案**：Hero、三款应用首页作者视角文案、4 条创作观、收尾落款均已定稿。

### 实施前仅余 1 处微调
- **中文页作品区右侧竖排副标**：从上面 3 个微调版本中选定一句（或继续调整），确认后即可进入代码实现阶段。
