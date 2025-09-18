# SCP: 熵增 — Game Mode (Sapi Engine)
**Produced by Fission Track Studio · FT工作室**

A fast‑paced, round‑based SCP roleplay/combat game mode for **Minecraft: Bedrock Edition** powered by the **@minecraft/server** (Sapi) scripting engine. Features multiple sub‑modes, rich class/阵营系统, facility events (warheads, breaches, Tesla gates), Site‑style maps, a light EXP/掉落系统, and player cosmetics (skins, decals, weapon finishes).

> Default map: **Site‑217** · Included maps: **Site‑15**, **Site‑217**  
> Default modes (pre/round/reset seconds):  
> - **Entropy Increases (EI)**: 70 / 1800 / 60  
> - **Inbreak**: 60 / 720 / 60  
> - **Infection**: 30 / 720 / 60

---

## ✨ Core Features

- **三大玩法模式**
  - **Entropy Increases (EI)**：标准对抗/收容失效循环，完整的回合计时与重置流程。
  - **Inbreak**：以渗透/突围为核心的短局模式。
  - **Infection**：感染扩散与围堵博弈。
- **阵营与职业（classes.ts）**
  - 人类阵营（科研、后勤、安保、机动特遣、情报、GOC/Civilian等）、Class‑D、以及多种 **SCP角色**（173/035/049/066/096/106/457/966…）。
  - 每个职业配置出生点、初始背包与护甲（inventory/armor），配套目标提示（target_tip）。
- **地图系统（maps/）**
  - 复刻 **Site‑15**、**Site‑217** 的设施点位：Gate A/B/C、Alpha/Omega Warhead、Tesla Gates、Remote Door Control、应急疏散、停机坪、终端按钮等。
  - 通过数据化坐标清单驱动事件（map_event.ts）。
- **事件与流程（main.ts / map_event.ts）**
  - 开局准备/回合/重置三段式时间轴；回合胜利判定（CI/基金会/SCP胜利）。
  - 统一重置、疏散流程与广播、音效。
- **实体与物品（entities/、item_components.ts、items_function/）**
  - **SCP‑035** 面具交互换装；**喷雾器**（喷射/DoT/视线/位移射线检测）；**MTF终端**、模型切换、定制菜单等自定义 Item Components。
- **经验与掉落（exp_system/exp_system.ts）**
  - 动态属性存档（world dynamic properties）；基础经验曲线与升级；特定成就掉落（武器皮肤等）。
- **自定义外观（customize/）**
  - 角色皮肤/武器皮肤数据表与启用状态写入，游戏内 **UI 菜单** 打开与选择。
- **投票换模式（mode_control/vote_change.ts）**
  - 回合内实时统计，防重复投票，时间到自动结算并切换。

---

## 🗂 Repository Layout

```
activity.ts                          # 活动/在线状态（如AFK等）
character_skills.ts                  # 角色与SCP技能：射线检测、门禁重置、燃烧/减益等
classes.ts                           # 全部职业/阵营/出生点/装备/提示，含随机SCP生成
customize/                           # 外观系统：玩家皮肤与武器皮肤配置与状态
entities/scp035.ts                   # SCP-035 交互逻辑（换装/标签/清空背包）
exp_system/exp_system.ts             # EXP/等级 + 掉落逻辑（动态属性存档）
item_components.ts                   # 注册与实现自定义物品组件（MTF终端、换模、UI等）
items_function/spray_can.ts          # 喷雾器逻辑（持续射线/伤害/命中检测）
items_spawn.ts                       # 随机/固定物品刷新（按地图点位表）
map_event.ts                         # 设施事件编排：门禁/爆破/电力/终端等
maps/ft_site_15.ts                   # Site-15 的点位配置
maps/ft_site_217.ts                  # Site-217 的点位配置
main.ts                              # 模式控制台：时间轴/胜利判定/回合重置/奖励掉落
misc.ts                              # 工具函数：时间格式化、向量解析、标签与通用操作
mode_control/vote_change.ts          # 投票切换模式（EI/Inbreak/Infection）
```

---

## 🚀 Getting Started

> 需要 Minecraft: Bedrock Edition v1.21.x（与 @minecraft/server API 相容版本）。

1. 将脚本打包到行为包（Behavior Pack），确保 `@minecraft/server` 与 `@minecraft/server-ui` 可用。
2. 在世界/服务器启用行为包与脚本功能（试验性功能、Gametest/Sapi 相关开关）。
3. 默认地图为 **Site‑217**，可在 `main.ts` 切换：`export const Map = Maps.Site_15 | Maps.Site_217`。
4. 进入游戏后使用 **模式投票** 或管理指令启动回合。

---

## 🛠 Admin / Ops

- **模式切换**：通过投票菜单或 `setGameMode(Entropy_Increases | Inbreak | Infection)`。
- **回合控制**：ForceStart / Reset 等流程已封装（main.ts）。
- **定点/道具**：使用自定义物品组件完成 SCP‑106 传送点设置、MTF 终端、模型切换、定制UI 等操作。

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

10. **配置化回合参数**  
    - 将 `{{Pre/Round/Reset}}TimeDef` 暴露到 JSON/资源包设置或游戏内管理面板，便于服主管理。

11. **日志与诊断**  
    - 增加统一 `logger()`，带时间戳与分级（info/warn/error），关键事件打印上下文（玩家/坐标/模式）。

12. **型别与防空**  
    - 若未来升级 TS 目标，补充更多 `EntityQueryOptions`/`Vector3` 的窄化与 `?.`/null‑guard。

---

## 📣 Player‑Facing Description (可直接用于页面/README)

**SCP: 熵增** 是一款围绕**收容失效**与**设施撤离**展开的回合制模组玩法：  
扮演 **研究员、安保、机动特遣** 或 **SCP 实体**，在 **Site‑15/217** 的复杂结构中完成任务或逃出生天。电力切换、Tesla 门、Alpha/Omega 核弹、停机坪撤离——每个决策都在和时间赛跑。支持轻量级升级与外观收集，并可通过投票一键切换玩法模式（EI / Inbreak / Infection）。

---

## 🔧 Tech Stack

- TypeScript + `@minecraft/server` / `@minecraft/server-ui`
- Data‑driven maps & events
- Dynamic properties for persistence

---

## 📜 License

> （根据你的计划选择：）
- **开放源代码**：推荐采用 **AGPL‑3.0**（强传染，保障二次分发开源）或 **MPL‑2.0**（文件级开源，商业友好）。
- **源可见但限制商用**：使用 **CC BY‑NC‑SA 4.0** 并在仓库中明确“服务器二次分发须署名且不得商用”。
- **黑名单限制**：可在 LICENSE 与 `SERVER_POLICY.md` 加“**禁止以下实体/名单使用与分发**”条款，并在开服端通过签名校验/白名单校验技术性地执行。

---

## 🙌 Credits

- Fission Track Studio（FT工作室）
- Contributors & Playtesters
- 社区与参考：SCP Fandom、Minecraft Sapi docs
