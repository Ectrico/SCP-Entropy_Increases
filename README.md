# SCP: Entropy Increases 异常：熵增）— Game Mode (Sapi Engine)

**Produced by Fission Track Studio Ectrico · 裂变径迹工作室 Ectrico**

A fast‑paced, round‑based SCP roleplay/combat game mode for **Minecraft: Bedrock Edition** powered by the **@minecraft/server** (Sapi) scripting engine. Features multiple sub‑modes, rich class/faction system, facility events (warheads, breaches, Tesla gates), SCP:Containment Breach Site‑style maps, a light EXP/Reward drops system, and weapon finishes.

> Default map: **Site‑15** · Included maps: **Site‑15**, **Site‑217(Invalid)**
> Default modes (pre/round/reset seconds):
>
> - **Entropy Increases (EI)**: 70 / 1800 / 60
> - **Inbreak**: 60 / 720 / 60
> - **Infection**: 30 / 720 / 60

---

# 📢 必须依赖的模组

**警告：** 本项目依赖以下必备模组才能正常运行，若缺少以下模组，可能导致软件功能无法正常体验或运行。

- **[FTRF-Infrastructures-Script]**：
  - 下载地址：[FT Offical Website](https://www.ftstudio.top/?download=ftrf-infrastructure)
  - 建筑方块，权限卡，特殊物品，护甲，部分武器。需要导入行为包与资源包。
- **[FT-Site-217's Arormy]**：
  - 下载地址：[FT Offical Website](https://www.ftstudio.top/?download=ft-site-217s-armory-217%e7%ab%99%e7%82%b9%e7%9a%84%e5%86%9b%e6%a2%b0%e5%ba%93-v0-1-0)
  - 主要枪械物品，生成物。需要导入行为包与资源包。
- **[FT-Site-15]**：
  - 下载地址：[FT Offical Website](https://www.ftstudio.top/?download=ft-site-15-standard-edition%e6%a0%87%e5%87%86%e7%89%88v-1-0-0)
  - 主要地图，导入至 BDS 服务器使用。
- **[FTRF-SCP.CB Sounds]**：
  - 下载地址：[FT Offical Website](https://www.ftstudio.top/?download=ftrf-scp-cb_sounds-v1-0-0-scp%e6%94%b6%e5%ae%b9%e5%a4%b1%e6%95%88%e9%9f%b3%e6%95%88%e5%8c%85)
  - 所需音乐、广播与环境音。需要导入资源包。
- **[Halloween BatProject]**：
  - 下载地址：[Github](当前项目的释放)
  - SCP 角色模型。需要导入行为包与资源包。
  - 此作品工作室从未正式发布，跟随模式作品发布，不得重新分发，传播，进行脱离此项目的任何使用。

请确保您已根据文档正确安装这些模组。

---

## ✨ Core Features

- **收容失效主要模式 & 两个小模式**
  - **Entropy Increases (EI)**：标准对抗/收容失效事件循环，完整的回合计时与重置流程。
  - **Inbreak**：以渗透/突围为核心的短局模式（设施安保 vs 混沌分裂者）。
  - **Infection**：感染扩散与围堵博弈（设施安保&ClassD vs SCP-008-1）。
- **阵营与职业（classes.ts）**
  - 人类阵营（Class‑D、科研、安保、机动特遣队、混沌分裂者、GOC 等）以及多种 **SCP 角色**（173/035/049/066/096/106/457/966…）。
  - 每个职业配置出生点、初始背包与护甲（inventory/armor），配套目标提示（target_tip）。
- **地图系统（maps/）**
  - 复刻 **Site‑15** 的设施点位：Gate A/B、Alpha/Omega Warhead、Tesla Gates、Remote Door Control、应急疏散、停机坪、终端按钮等。
  - 通过数据化坐标清单驱动事件（map_event.ts）。
- **事件与流程（main.ts / map_event.ts）**
  - 开局准备/回合/重置三段式时间轴；回合胜利判定（CI/基金会/SCP 胜利）。
  - 统一重置、疏散流程与广播、音效。
- **实体与物品（entities/、item_components.ts、items_function/）**
  - **SCP‑035** 面具交互转换；**喷雾器**（液氮/薰衣草/毒气）；**MTF 终端**、模型切换。
- **经验与掉落（exp_system/exp_system.ts）**
  - 动态属性存档（world dynamic properties）；基础经验曲线与升级；特定成就掉落（武器皮肤等）。
- **自定义外观（customize/）**
  - 武器皮肤数据表与启用状态写入，游戏内 **UI 菜单** 打开与选择。
- **投票换模式（mode_control/vote_change.ts）**
  - 回合内实时统计，防重复投票，时间到自动结算并切换。

---

## 🗂 Repository Layout

```
activity.ts                          # 活动/已无效
character_skills.ts                  # 角色与SCP技能
classes.ts                           # 全部职业/阵营/装备/提示/刷新函数
customize/                           # 外观系统：玩家皮肤与武器皮肤配置与状态
entities/scp035.ts                   # SCP-035实体 交互逻辑（换装/标签/清空背包）
exp_system/exp_system.ts             # EXP/等级 + 等级掉落逻辑（动态属性存档）
item_components.ts                   # 注册与实现自定义物品组件（MTF终端、换模、UI等）
items_function/spray_can.ts          # 喷雾器逻辑（持续射线/伤害/命中检测）
items_spawn.ts                       # 随机/固定物品刷新（按地图点位表）
map_event.ts                         # 设施事件编排：门禁/爆破/电力/终端/撤离等
maps/ft_site_15.ts                   # Site-15 的点位配置
maps/ft_site_217.ts                  # Site-217 的点位配置（无效）
main.ts                              # 模式控制台：时间轴/胜利判定/回合重置/奖励掉落
misc.ts                              # 工具函数：时间格式化、向量解析、标签与通用操作
mode_control/vote_change.ts          # 投票切换模式（EI/Inbreak/Infection）
```

---

## 🚀 Getting Started

> 需要 Minecraft: Bedrock Edition v1.21.x（与 @minecraft/server API 相容版本）。

一、自行使用源项目编译

1. 将脚本打包到行为包（Behavior Pack），确保 `@minecraft/server` 与 `@minecraft/server-ui` 可用。
2. 在世界/服务器启用行为包与脚本功能（试验性功能、Gametest/Sapi 相关开关）。
3. 默认地图为 **Site‑15**，可在 `main.ts` 切换：`export const Map = Maps.Site_15 | Maps.Site_217`，不过需要你自行编译地图配置文件，并在 main.ts 添加新的地图对象。
4. 进入游戏后使用 **模式投票** 或管理指令启动回合（要求最低两人，否则只能用命令强制启动）。
   二、下载最新的打包后的释放文件
5. 从 Github 或工作室官网下载最新释放
6. 将模组导入要使用的地图，并加入 MCBE 官方 BDS 客户端中使用

---

## 🛠 Admin / Ops

- **模式切换**：通过投票菜单或 `setGameMode(Entropy_Increases | Inbreak | Infection)`。
- **模式控制指令**：给自己添加“operator”标签，聊天栏发送#help 查看可选控制命令。
- **回合控制**：ForceStart / Reset 等流程已封装（main.ts）。
- **定点/道具**：使用自定义物品组件完成 SCP‑106 传送点设置、MTF 终端、模型切换、定制 UI 等操作。

---

## 📌 Design Notes & Strengths

- **数据驱动的地图点位**：`maps/*.ts` 仅描述坐标/朝向/类型，逻辑集中在 `map_event.ts`，利于拓展新地图。
- **统一的时间轴**：准备/回合/重置三段结构，事件挂载点明确，便于接入新胜利条件或 PvE 波次。
- **可成长与外观收集**：轻量级 EXP + 皮肤/掉落，增强长期可玩性。

---

## ✅ Code Review — What Looks Good

- **模块清晰**：地图/事件/职业/物品/技能/外观/经验分层明确。
- **Sapi 事件化**：广泛使用 `world.afterEvents` / `system.runInterval`，逻辑易读。
- **动态属性存档**：玩家进度与关键坐标（如 106 传送点）均可持久化。

---

## ⚠️ Improvement Ideas / TODO

1. **事件订阅的幂等性**

   - 某些 `afterEvents`/`runInterval` 在函数调用里注册，需确保只注册一次，防止多次进入同回合导致重复订阅与内存泄漏。可集中在 single‑flight 初始化或使用“已注册”标志。

2. **Magic Number → 常量/枚举**

   - 地图事件冷却、射线长度、伤害值、门状态等大量魔法数建议抽出到 `const` 或 `enum`，并在 `maps/*.ts` 做数据化。

3. **批量方块写入与性能**

   - 多次 `dimension.getBlock(...).setPermutation(...)` 的密集循环建议改成 `BlockVolume`/`fill` 批处理或隔帧分批；同时避免在高频 `runInterval` 里做重 I/O。

4. **字符串命令与安全**

   - 有少量 `dimension.runCommand` 拼接玩家名/坐标，建议统一封装转义函数；能 API 直调的尽量用 API 防注入/日志污染。

5. **本地化与可配置文本**

   - 所有提示/标题/掉落公告集中到 `i18n` 表（JSON/TS），便于中英双语与外部化。

6. **职业/阵营定义拆分**

   - `classes.ts` 较大（100k+），可按阵营/阵线拆分为多个文件，并暴露统一索引。

7. **存档 Schema**

   - `world.setDynamicProperty` 的 key 命名（如 `ExpExp^{id}`）建议集中常量化，补充版本迁移逻辑与默认值校验。

8. **可测试性**

   - 为关键流程（胜利判定/时间轴/掉落/事件触发）加上“模拟器”工具（只在开发世界可用）：快速跳过时间、伪造电力/终端开关。

9. **防并发/二次触发**

   - 例如爆破/解除等单次事件增加“占用/已执行”标识，避免多人同时触发重复效果。

10. **日志与诊断**

    - 增加统一 `logger()`，带时间戳与分级（info/warn/error），关键事件打印上下文（玩家/坐标/模式）。

11. **型别与防空**

    - 若未来升级 TS 目标，补充更多 `EntityQueryOptions`/`Vector3` 的窄化与 `?.`/null‑guard。

12. **奖励掉落**
    - 代码中所编写的奖励均为 FT 工作室官方服务器内容，任何的第三方使用者的 FT 作品奖励内容均视为无效，包括 FT 官方的地图作品，枪械武器皮肤，需要第三方使用者自行更改内容。

---

## 📣 Player‑Facing Description (可直接用于页面/README)

**SCP: 熵增** 是一款围绕**收容失效**与**设施撤离**展开的回合制模组玩法：  
扮演 **研究员、安保、机动特遣** 或 **SCP 实体**，在 **Site‑15/217** 的复杂设施中完成任务或逃出生天。电力修复、Tesla 门、Alpha/Omega 核弹、停机坪撤离——每个决策都在和时间赛跑。支持轻量等级升级与枪械外观收集，并可通过投票切换玩法模式（EI / Inbreak / Infection）。

---

## 🔧 Tech Stack

- TypeScript + `@minecraft/server` / `@minecraft/server-ui`
- Data‑driven maps & events
- Dynamic properties for persistence

---

## 📜 License

本项目遵循 **EI License v1** 开源许可证，具体条款如下：

### 1. 开放源代码

- 允许你：
  - 免费使用、学习和修改本软件的源代码；
  - 在非商业用途下修改、共享并分发软件及其修改版本。
  - 在不修改原作者署名的情况下，分发和共享软件及其修改版。

### 2. 禁止商业用途

- 不允许将本软件用于任何形式的商业用途，包含但不限于销售、服务提供、商业发行等。
- 本软件不允许用于盈利项目中，除非获得作者的书面授权。

### 3. 黑名单限制

- **禁止以下实体/名单使用与分发本项目**：
  - [列出具体群体/工作室/用户]
  - **禁止与分发、使用**的行为将会受到法律追究。
  - 若有争议，工作室保留最终解释权。

### 4. 限制与依赖

- 本软件不包含完整的功能体验（如某些功能依赖于付费模组或地图）。请注意，完全体验该软件需要配合付费模组/地图使用，这些内容不包含在本开源项目内。
- 本软件仅供个人学习、研究和非商业用途。任何违反上述条款的行为将视为对许可证的违反，且可能面临法律后果。

### 5. 免责条款

- 本软件按“现有状态”提供，作者不对任何由使用本软件产生的直接、间接、附带或后果性的损失或损害负责。

### 6. 适用法律

- 本许可证适用 **中华人民共和国** 的法律。

---

若你同意以上条款，请继续使用本软件，否则请停止使用。

---

## 🙌 Credits

- Fission Track Studio（裂变径迹工作室）Ectrico
- Contributors & Playtesters
- 社区与参考：SCP Containment Breach、Minecraft Sapi docs、SCP Fandom
