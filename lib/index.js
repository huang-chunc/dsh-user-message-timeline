// Host half - settings namespace for durable config
import z from "@deepseek-ai/schemastery";
import { settingsNamespace } from "@deepseek-ai/dsh-settings";

const NS = settingsNamespace("user-message-timeline");
const Schema = z.object({
  enabled: z.boolean().default(true),
  position: z.union(["left", "right"]).default("left"),
  prefixEnabled: z.boolean().default(false),
  prefixPatterns: z.string().default("!, *, 📌, 【重点】"),
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
  // P1: 卸载时清理 localStorage 残留（防守性探测）
  ctx.effect(() => () => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('umtl:enabled');
        localStorage.removeItem('umtl:position');
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
