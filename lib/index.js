// Host half - settings namespace for durable config
import z from "@deepseek-ai/schemastery";
import { settingsNamespace } from "@deepseek-ai/dsh-settings";

const NS = settingsNamespace("user-message-timeline");
const Schema = z.object({
  enabled: z.boolean().default(true),
  position: z.union(["left", "right"]).default("left"),
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
}
