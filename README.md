# dsh-user-message-timeline

DSH Web 插件 — 对话内悬浮药丸导轨（User Message Timeline）。

- 悬浮在对话列内侧左侧，`fixed 12px` 贴边，跟随侧边栏“推”动，120fps
- 横向药丸按距离漏斗 `36→26→20→16→12`，常态最小 `12x4`，悬停以指针为中心放大
- 悬停 150ms 预览 `160` 字，`GAP 10px` 尖角贴壳外，固定 `240x48~108` 不遮文
- 点击/拖拽 `setPointerCapture + elementFromPoint` 跳转，`scroll-margin-top:14px` 贴顶
- 分页自动 `加载更多` 循环（20 次），首开多轮免滚可跳
- 设置 → 通用设置 一键开关，持久化 `localStorage umtl:enabled`

## 安装

```sh
dsh plugin --profile web add dsh-user-message-timeline
# 或本地
dsh plugin --profile web add file:~/dsh-user-message-timeline
```

重启 `dsh web` 后硬刷新 `http://127.0.0.1:3080`。

## 开关

设置 → 通用 → “用户消息时间线” 行内开关。

## 开发

```sh
# 修改 lib/client.js 后重新安装
dsh plugin --profile web add file:~/dsh-user-message-timeline
```
