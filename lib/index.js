// Host half - settings namespace for durable config
import z from "@deepseek-ai/schemastery";

const NS = "user-message-timeline";
const Schema = z.object({
  enabled: z.boolean().default(true),
  position: z.union(["left", "right"]).default("left"),
  prefixEnabled: z.boolean().default(false),
  prefixPatterns: z.string().default("!, *, 📌, 【重点】"),
  takeoverOfficial: z.boolean().default(true),
});

export const inject = ["settings"];
export function apply(ctx) {
  ctx.inject(["settings"], (sctx) => {
    try {
      sctx.settings.register(NS, Schema);
    } catch (e) {
      // namespace conflict or schema error - degrade to localStorage, keep plugin usable
      try { console.warn("[umtl] settings register failed", e); } catch(_){}
    }
  });
  // v0.2.5：注册 turnTimes 轻量投影（会话轮次时间供给，可选注入，缺失时静默降级）
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
  // P1: 卸载时清理 localStorage 残留（防守性探测）
  ctx.effect(() => () => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('umtl:enabled');
        localStorage.removeItem('umtl:position');
        localStorage.removeItem('umtl:takeoverOfficial');
        localStorage.removeItem('umtl:prefixEnabled');
        localStorage.removeItem('umtl:prefixPatterns');
        localStorage.removeItem('umtl:bookmarks');
        localStorage.removeItem('umtl:debug');
        localStorage.removeItem('umtl:hinted');
        localStorage.removeItem('umtl:migrated-to-scope');
      }
    } catch {}
  });
}
