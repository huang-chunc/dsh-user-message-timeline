# dsh-user-message-timeline

<p align="center"><strong>Lightweight timeline inside the chat column — one pill per user message</strong></p>

<p align="center">
  <a href="https://www.npmjs.com/package/dsh-user-message-timeline"><img src="https://img.shields.io/npm/v/dsh-user-message-timeline?label=npm&color=CB3837" alt="npm"></a>
  <a href="https://www.npmjs.com/package/dsh-user-message-timeline"><img src="https://img.shields.io/npm/dm/dsh-user-message-timeline?label=downloads" alt="downloads"></a>
  <a href="https://github.com/huang-chunc/dsh-user-message-timeline/actions"><img src="https://img.shields.io/badge/CI-passing-brightgreen" alt="CI"></a>
  <a href="https://github.com/huang-chunc/dsh-user-message-timeline/stargazers"><img src="https://img.shields.io/github/stars/huang-chunc/dsh-user-message-timeline?style=social" alt="Stars"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow" alt="License"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@deepseek-ai/dsh?activeTab=versions"><img src="https://img.shields.io/badge/DSH-0.1.1--rc.2-blue" alt="DSH"></a>
  <a href="https://github.com/topics/dsh-user-message-timeline"><img src="https://img.shields.io/badge/ecosystem-topic%20dsh--user--message--timeline-blue" alt="topic"></a>
</p>

<p align="center">
  DSH User Message Timeline — floating pill rail, hover preview, click/drag jump, paginated loading<br/>
  Hover to preview, click to jump, viewport scrollable, switch left/right in one click
</p>

<p align="center">
  <a href="./README.md">中文</a> · <a href="./README_EN.md"><b>English</b></a>
</p>

---

## Demo

| Light | Dark |
|---|---|
| ![light](docs/screenshot-light.png) | ![dark](docs/screenshot-dark.png) |

| Light | Dark |
|---|---|
| ![light](docs/light.gif) | ![dark](docs/dark.gif) |
| Hover funnel → 240px preview → click jump → scrub HUD | Same, dark with inky glass |

| Settings |
|---|
| ![settings](docs/settings.gif) |
| Toggle to hide · left/right (right only adapts to dsh-better-sidebar) |

> GIFs are 15fps / 128-color previews. Full demo: [Bilibili (to be added)](https://www.bilibili.com/) or raw files in `docs/`.

## Features

| Feature | Description |
|---|---|
| Pill funnel | Idle `12×4`, 5 levels `36→26→20→16→12` near hover/active, `gap 10px` |
| Sticky preview | Hover 150ms / continuous 60ms, inky glass `240×48~108`, `clamp 6`, copyable |
| Drag scrub | `setPointerCapture + elementFromPoint`, HUD follows pointer |
| Pagination | Top `is-older` pulse, auto-load 20 pages |
| Viewport scroll | ≤16 in one screen, >16 scrollable `386px` |
| Silky | 120fps push via `ResizeObserver+rAF` |
| Preferences | Settings → Plugins → Plugin Config card |

## Install

**Prereqs**: DSH installed (`dsh web` works), Node.js ≥ 20.

<a href="https://www.npmjs.com/package/@deepseek-ai/dsh?activeTab=versions"><img src="https://img.shields.io/badge/DSH-0.1.1--rc.2-blue" alt="DSH"></a>

```sh
dsh plugin --profile web add dsh-user-message-timeline
```

Hard refresh browser (`Cmd/Ctrl+Shift+R`) to see the rail.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) and [Releases](https://github.com/huang-chunc/dsh-user-message-timeline/releases).

## License

MIT © huang-chunc, see [LICENSE](LICENSE).
