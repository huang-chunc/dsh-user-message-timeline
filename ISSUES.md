# dsh-user-message-timeline 问题清单

> 版本：v0.2.0
> 审计日期：2026-08-28
> 目标：修复卸载残留 + 简化存储架构

---

## 问题 P1：卸载残留（localStorage）[✅ 已修复 v0.2.1]

**严重程度**：低（无功能影响，但"脏"）

### 描述
插件卸载后，以下 localStorage 键会残留，不会被清理：

| 键名 | 类型 | 用途 |
|---|---|---|
| `umtl:enabled` | boolean | 开关状态 |
| `umtl:position` | string | 位置（left/right） |
| `umtl:debug` | boolean | 调试模式开关 |
| `umtl:hinted` | boolean | onboarding 提示已播放标记 |

### 位置
- `lib/client.js` 第 25、36、60、723 行（读取）
- `lib/client.js` 第 726、1123-1124 行（写入）

### 修复方案
在 `lib/index.js` 的 `apply()` 函数中添加卸载清理钩子：

```js
export function apply(ctx) {
  ctx.inject(["settings"], (sctx) => {
    try {
      sctx.settings.register(NS, Schema);
    } catch (e) {
      try { console.warn("[umtl] settings register failed", e); } catch(_){}
    }
  });
  
  // 新增：卸载时清理 localStorage
  ctx.effect(() => () => {
    try {
      localStorage.removeItem('umtl:enabled');
      localStorage.removeItem('umtl:position');
      localStorage.removeItem('umtl:debug');
      localStorage.removeItem('umtl:hinted');
    } catch(e) {}
  });
}
```

### 注意事项
- `ctx.effect()` 的清理函数会在插件卸载时执行
- 需要确认 DSH/Cordis 的 `ctx.effect()` 是否支持卸载时调用
- 如果不支持，可能需要用 `ctx.on('dispose', ...)` 或其他钩子

---

## 问题 P2：卸载残留（全局变量）[✅ 已修复 v0.2.1]

**严重程度**：低（仅调试时产生）

### 描述
以下全局变量在插件卸载后会残留：

| 变量名 | 类型 | 用途 |
|---|---|---|
| `window.__UMTL__` | object | 调试日志存储（logs 数组 + dump 方法） |
| `window.__UMTL_DEBUG__` | boolean | 调试开关（用户手动设置） |

### 位置
- `lib/client.js` 第 61-62 行（创建 `window.__UMTL__`）
- `lib/client.js` 第 60 行（读取 `window.__UMTL_DEBUG__`）

### 修复方案
在 `lib/client.js` 的 `apply()` 函数开头添加全局变量清理：

```js
function apply(ctx) {
  // 清理旧的全局变量（如果存在）
  ctx.effect(() => () => {
    try {
      delete window.__UMTL__;
      delete window.__UMTL_DEBUG__;
    } catch(e) {}
  });
  
  // ... 原有代码
}
```

### 注意事项
- 全局变量清理应该在插件卸载时执行
- 需要确认 `window.__UMTL__` 是否被其他工具依赖（如调试日志导出）
- 如果依赖，可以考虑保留或提供替代方案

---

## 问题 P3：双重存储架构复杂度

**严重程度**：中（架构层面，不影响功能）

### 描述
当前插件同时使用两种存储方式：

```
settingsScope (DSH 设置系统)
    ↓ 迁移桥
localStorage (浏览器本地存储)
```

这导致：
1. **代码复杂度高**：读取/写入时需要判断走哪个路径
2. **迁移逻辑**：v0.2.0 新增了从 localStorage 到 settingsScope 的迁移代码
3. **降级路径**：当 settingsScope 不可用时，降级到 localStorage

### 相关代码
- `lib/client.js` 第 27-58 行：迁移桥逻辑
- `lib/client.js` 第 246-273 行：storage 事件监听（降级）
- `lib/client.js` 第 1119-1131 行：保存时的降级写入

### 修复方案（可选，如果想简化）

#### 方案 A：保持现状（推荐）
- 理由：双重存储提供了降级能力，兼容旧版 DSH
- 改进：添加清晰的注释说明架构意图

#### 方案 B：纯 settingsScope
- 条件：只支持 DSH 0.1.1-rc.2 及以上版本
- 优点：代码更简洁
- 缺点：失去降级能力，旧版 DSH 用户无法使用

#### 方案 C：纯 localStorage
- 优点：最简单，无依赖
- 缺点：无法使用 DSH 设置系统的 UI（设置卡片）

### 建议
**保持方案 A**，但添加架构说明注释：

```js
// ===== 存储架构说明 =====
// 主源：settingsScope (namespace: "user-message-timeline")
//   - 由 Host (lib/index.js) 注册
//   - 支持 DSH 设置 UI（设置卡片）
//   - 跨会话持久化
//
// 降级：localStorage
//   - 键前缀: umtl:
//   - 当 settingsScope 不可用时使用（旧版 DSH）
//   - 迁移桥：v0.2.0 升级时自动从 localStorage 迁移到 settingsScope
// ===== 存储架构结束 =====
```

---

## 问题 P4：迁移逻辑残留[✅ 已修复 v0.2.1]

**严重程度**：低（一次性逻辑，不影响后续版本）

### 描述
`lib/client.js` 第 41-58 行包含从 localStorage 迁移到 settingsScope 的逻辑：

```js
// 一次性迁移旧 localStorage
try{
  if(umtlScope){
    const snap = umtlScope.getSnapshot();
    const v = snap && snap.value;
    if(v){
      if(window.localStorage.getItem('umtl:enabled')==='false' && v.enabled!==false){
        umtlScope.set("enabled", false).catch(()=>{});
        try{ window.localStorage.removeItem('umtl:enabled'); }catch(e){}
      }
      const lp = window.localStorage.getItem('umtl:position');
      if((lp==="left"||lp==="right") && v.position!==lp){
        umtlScope.set("position", lp).catch(()=>{});
        try{ window.localStorage.removeItem('umtl:position'); }catch(e){}
      }
    }
  }
}catch(e){}
```

### 问题
1. 这段代码会在**每次插件加载时**执行，而不是只执行一次
2. 虽然有 `removeItem` 清理，但如果迁移失败，会重复尝试

### 修复方案
添加一次性标记，确保迁移只执行一次：

```js
// 一次性迁移旧 localStorage（仅 v0.2.0 升级时执行）
try{
  const MIGRATION_KEY = 'umtl:migrated-to-scope';
  if(umtlScope && !localStorage.getItem(MIGRATION_KEY)){
    const snap = umtlScope.getSnapshot();
    const v = snap && snap.value;
    if(v){
      // ... 迁移逻辑
      localStorage.setItem(MIGRATION_KEY, '1');
    }
  }
}catch(e){}
```

或者，如果确定所有用户都已升级，可以**完全移除这段代码**。

---

## 问题 P5：settingsScope 注册无错误恢复

**严重程度**：低（已有 try-catch，但可以改进）

### 描述
`lib/index.js` 中 settingsScope 注册失败时只打印警告：

```js
try {
  sctx.settings.register(NS, Schema);
} catch (e) {
  // namespace conflict or schema error - degrade to localStorage, keep plugin usable
  try { console.warn("[umtl] settings register failed", e); } catch(_){}
}
```

### 问题
1. 没有设置标志位让 Client 知道注册失败
2. Client 仍然会尝试使用 settingsScope，可能失败

### 修复方案
在 Host 中设置标志位，Client 中检查：

```js
// lib/index.js
let settingsRegistered = false;
export function apply(ctx) {
  ctx.inject(["settings"], (sctx) => {
    try {
      sctx.settings.register(NS, Schema);
      settingsRegistered = true;
    } catch (e) {
      settingsRegistered = false;
      try { console.warn("[umtl] settings register failed", e); } catch(_){}
    }
  });
}

// 导出标志位供 Client 使用
export { settingsRegistered };
```

```js
// lib/client.js
const settingsRegistered = require("../index.js").settingsRegistered;
if (!settingsRegistered) {
  // 直接走 localStorage 降级路径
}
```

### 注意事项
- 需要确认 DSH 的模块加载机制是否支持这种跨文件引用
- 可能需要通过 `window` 或其他全局方式传递标志位

---

## 问题 P6：onboarding 提示（umtl:hinted）无重置机制

**严重程度**：极低（用户体验小问题）

### 描述
`lib/client.js` 第 723-726 行：

```js
try{ hinted=window.localStorage.getItem('umtl:hinted')==='1'; }catch(e){}
// ...
try{ window.localStorage.setItem('umtl:hinted','1'); }catch(e){} // 触发即记账，刷新不复播
```

### 问题
1. onboarding 提示只播放一次，无法重置
2. 用户无法重新触发提示（用于学习/演示）

### 修复方案（可选）
添加重置命令或调试入口：

```js
// 在调试模式下提供重置命令
if (isDebug()) {
  window.__UMTL__.resetHint = () => {
    localStorage.removeItem('umtl:hinted');
    console.log('[umtl] hint 已重置，刷新页面可重新触发');
  };
}
```

用户可通过以下方式重置：
```js
localStorage.setItem('umtl:debug', '1');
// 刷新页面
__UMTL__.resetHint();
```

---

## 问题 P7：CSS 清理可能不完整

**严重程度**：极低（React 卸载时会自动清理）

### 描述
`lib/client.js` 第 19-22 行：

```js
const styleEl = document.createElement('style');
styleEl.textContent = css;
document.head.appendChild(styleEl);
ctx.effect(() => () => styleEl.remove());
```

### 问题
1. CSS 只在 `ctx.effect` 清理时移除
2. 如果 `ctx.effect` 不支持卸载清理，CSS 会残留

### 修复方案
确认 DSH/Cordis 的 `ctx.effect()` 行为：
- 如果支持卸载清理：当前代码已正确
- 如果不支持：需要额外的清理钩子

---

## 修复优先级

| 优先级 | 问题 | 影响 | 建议 |
|---|---|---|---|
| **P1** | localStorage 残留 | 用户体验 | ✅ 已修复 (v0.2.1) |
| **P2** | 全局变量残留 | 调试体验 | ✅ 已修复 (v0.2.1) |
| **P4** | 迁移逻辑残留 | 代码整洁 | ✅ 已修复 (v0.2.1) |
| **P3** | 双重存储复杂度 | 架构 | 保持现状+注释 |
| **P5** | settingsScope 注册 | 健壮性 | 可选修复 |
| **P6** | onboarding 重置 | 用户体验 | 可选修复 |
| **P7** | CSS 清理 | 稳定性 | 确认即可 |

---

## 测试建议

修复后需要验证：

1. **卸载测试**：
   - 安装插件 → 使用 → 卸载插件
   - 检查 `localStorage` 中是否还有 `umtl:*` 键
   - 检查 `window.__UMTL__` 是否被清理

2. **升级测试**：
   - 旧版 DSH（无 settingsScope）→ 新版 DSH
   - 验证 localStorage 数据是否正确迁移到 settingsScope

3. **降级测试**：
   - 新版 DSH → 旧版 DSH
   - 验证插件是否正常降级到 localStorage

4. **开关测试**：
   - 关闭插件 → 卸载 → 重新安装
   - 验证开关状态是否正确恢复

---

## 参考文件

- `lib/index.js`：Host 端，settings 注册
- `lib/client.js`：Client 端，渲染和交互
- `package.json`：插件元数据
- `cordis.patch.yml`：Cordis 补丁配置

---

## 联系方式

如有问题，请联系 etherealcc (1427922258@qq.com)
