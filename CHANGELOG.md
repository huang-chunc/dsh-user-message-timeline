# Changelog

## 0.4.5 — 2026-11-05

- 修复 v0.4.4 回归：普通点击药丸无响应、只有拖拽可跳转。将指针捕获与 `preventDefault` 延后到确认进入拖拽后，恢复 click 跳转。

## 0.4.4 — 2026-11-04

- 修复插件卸载/HMR 时误删用户书签、一次性提示与迁移标记的问题。
- 修复设置卡片外部配置变更被旧草稿回写覆盖的问题，并拆分 summary/page 组件消除条件 Hook。
- 修复拖拽/点击重复触发滚动与重复 `loadThrough` 的问题；拖拽增加 4px 阈值与 click 抑制。
- 修复未加载/半加载轮次可能把 assistant 行误认为用户提问的问题；跳转只解析 user/steering 行。
- 修复轮次兜底标签 1-based 偏移（第 1 轮不再显示为第 2 轮）。
- 所有 DOM 查询按 `data-conversation-session` 隔离，兼容右侧栏/多会话场景；旧版 DSH 回退到全局滚动容器。
- 长会话 active 药丸自动滚入导轨可视区；未加载药丸恢复空心视觉。
- 设置卡与主 Timeline 均监听 configForms，支持服务晚到重试；迁移补齐 `prefixEnabled`/`prefixPatterns` 且写入成功后才清理旧值。
- 性能优化：单次扫描构建 turnRowIndex、会话切换预加载 sessionStorage 时间缓存、减少 MutationObserver/rAF 踩踏。
- 包与文档：补齐 `engines.dsh`、README_EN/CHANGELOG 打包、修正 README 图片直链与 DSH 版本徽章。

## 0.4.3 — 2026-10-02

- 彻底修复会话打开未滚动时导轨点击跳转失效：击穿宿主 `followingTail` 尾部锁定，32px 瞬时位移 + 下一帧平滑对齐。
- 精准着陆与参数透传强化：绝对偏移保留 14px 呼吸间距。

## 0.4.2 — 2026-09-30

- 扩充 `@deepseek-ai/dsh-settings` peer 依赖范围，适配 DSH 0.2.0 严格门禁。
- README 徽章更新至 DSH ≥ 0.1.7。

## 0.4.1 — 2026-09-28

- 重点轮次前缀识别严格受控，消除 Emoji 全文误判。
- 深色模式原生 Switch 与分段控制器重构。

## 0.4.0 — 2026-09-28

- 适配 DSH 0.1.7 配置面：volatile `Config`、`ctx.configForms`、`uiSession.adapter.current`。
- 配置 UI 迁至 `plugins.bundle.config` / `plugins.row.config` 双座位；修复「加载更早」分页头丸。
