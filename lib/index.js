// Host half — DSH 0.1.7 配置面：导出 volatile Config schema，配置由 Loader 条目 id 寻址。
// 客户端通过 ctx.configForms.get("user-message-timeline") 读写；localStorage 仅作降级（见 lib/client.js）。
import z from "@deepseek-ai/schemastery";

const NS = "user-message-timeline";

// 每个字段都必须标 .volatile()：Loader 的 equalExceptVolatile 把 volatile 字段的变更
// 判定为“仅易变”，走 loader/volatile-update 热提交而不重挂插件。非 volatile 的字段
// 写入会报告成功但实际被丢弃（官方 dsh-better-sidebar 对此有明确警告）。
export const Config = z.object({
  enabled: z.boolean().default(true).volatile(),
  position: z.union(["left", "right"]).default("left").volatile(),
  prefixEnabled: z.boolean().default(false).volatile(),
  prefixPatterns: z.string().default("!, *, 📌, 【重点】").volatile(),
  takeoverOfficial: z.boolean().default(true).volatile(),
});

export function apply(ctx) {
  // turnTimes 轻量投影：会话轮次时间供给（可选注入，缺失时客户端静默降级到 DOM 时间）
  ctx.inject(["sessionProjections"], (pctx) => {
    try {
      pctx.sessionProjections.register({
        key: "turnTimes",
        stateVersion: 1,
        stateSchema: { parse: (v) => (typeof v === "object" && v !== null ? v : {}) },
        init: () => ({}),
        apply: (state, event) => {
          if (event.type === "turn/start" && typeof event.time === "number") {
            const d = new Date(event.time);
            const timeStr = !isNaN(d.getTime())
              ? String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0")
              : "";
            return { ...state, [String(event.data.turn)]: timeStr };
          }
          return state;
        },
        wire: {
          viewSchema: { parse: (v) => (typeof v === "object" && v !== null ? v : {}) },
          view: (state) => state,
        },
      });
    } catch (e) {
      try { console.warn("[umtl] turnTimes projection register failed", e); } catch (_) {}
    }
  });
  // Host 运行在 Node，不持有浏览器 localStorage；用户数据（书签/迁移标记）由客户端保留，
  // 不再在 Host 侧做“防御性清理”，避免插件重载时误删浏览器数据。
}
