window.__ModuleLoader__.load({
  id: "dsh-user-message-timeline",
  factory: (require) => {
    var module = { exports: {} };
    var React = require("react");
    var inject = ["slots"];
    function apply(ctx) {
      // v0.1.3：P0 缺陷修复 + P1 材质升级
      // v0.1.4：T 专项——预览框（tooltip）优化：
      //   T2.1 拖拽抑制气泡（bug）；T2.2 sticky tip 常驻挂载+分级延迟；T2.3 rAF 跟随器；
      //   T1 去箭头化/★墨玉玻璃材质/高度预算/段落结构/细节三连；T2.4 指针可入气泡可复制（方案①）
      // v0.1.5：T3 手感收尾——动效编排（入场参数对齐/120ms 缩退收场/扫动文字淡切）+ 一次性 onboarding 提示（umtl:hinted）
      // v0.1.6：预览会话状态机——sessionActive 组合条件 + is-preview 高亮
      // v0.1.7：P2-A minimap 压缩（阈值线性插值+等比收口保证一屏）· P2-B Scrub HUD（拖拽徽标零重渲直写）· P2-G 预览会话统一出口 endPreviewSession
      // v0.1.8：P3-A 定时器合并·P3-B 类名收拢·T3 仅“图”标记（键盘移除，鼠标专用）
      // v0.1.9：P2-H 分页头丸与统一分页链路——isOlderBtn 检测 + __older__ 哨兵 + loadAllOlder
      // v0.2.0：插件配置卡片 + 左右贴边设置 + 深浅自适应开关
      // v0.2.1：插件卸载生命周期清理 + 迁移防重
      // v0.4.4：只清理瞬态数据，保留用户书签/迁移标记；所有 DOM 查询按会话根隔离
      // v0.2.2：P2-C 跳转寻址反馈——目标药丸呼吸脉冲 (is-seeking)
      // v0.2.3：多模态图片缩略图预览 + 纯图摘要 + 新轮次生长动效
      // v0.2.4：T4-D 重点轮次体系——双触发（Ghost Micro-Action + 前缀/Emoji匹配）+ 三层视觉（琥珀金微光药丸 + Gold Rim + Scrub HUD 星标）+ 设置面板控制
      // v0.2.5 (feat/official-turn-outline-fusion):
      //   1. 彻底解耦混淆类名，改用标准 HTML5 Data 属性规范 (data-chat-turn, data-chat-flow 等)
      //   2. 智能接管官方标尺：新增 takeoverOfficial 配置，默认隐藏官方标尺，右侧非接管自动避让
      //   3. 原生双核引擎接入：订阅 sessions 服务与 turnOutline 投影，首帧掌控全量 N 轮，未加载轮次镂空幽光渲染
      //   4. 原生跳跃跳转：未加载轮次点击/拖拽调用 session.loadThrough(seq) 原生分页加载 + is-seeking 平滑着陆
      //   5. 视口阅读线跟手：readingLine 高精度比对 data-chat-turn 映射 activeKey
      const css = ':root{--umtl-shadow-tip:0 2px 6px color-mix(in srgb,var(--dsw-alias-label-primary) 18%,transparent),0 14px 36px color-mix(in srgb,var(--dsw-alias-label-primary) 32%,transparent);--umtl-shadow-knob:0 1px 3px color-mix(in srgb,var(--dsw-alias-label-primary) 20%,transparent),0 0 0 1px color-mix(in srgb,var(--dsw-alias-label-primary) 5%,transparent)}.umtl-root{position:fixed;left:0;top:50%;transform:translateX(var(--umtl-left,12px)) translateY(-50%);will-change:transform;contain:layout paint;z-index:6;max-height:min(70vh,40rem);overflow-y:auto;overflow-x:hidden;scrollbar-width:none;overscroll-behavior:contain;pointer-events:auto;background:color-mix(in srgb,var(--dsw-alias-bg-base) 8%,transparent);border:1px solid color-mix(in srgb,var(--dsw-alias-label-primary) 6%,transparent);border-radius:16px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:0;opacity:1;transition:transform var(--umtl-dur,220ms) var(--umtl-ease,cubic-bezier(.22,1,.36,1)),opacity .22s,background .22s ease,backdrop-filter .22s ease;mask-image:linear-gradient(to bottom,transparent 0,black 24px,black calc(100% - 24px),transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0,black 24px,black calc(100% - 24px),transparent 100%)}.umtl-root::-webkit-scrollbar{display:none}.umtl-root.is-tinted{background:color-mix(in srgb,var(--dsw-alias-bg-base) 55%,transparent);backdrop-filter:blur(10px) saturate(1.4);-webkit-backdrop-filter:blur(10px) saturate(1.4)}.umtl-root.is-hidden{opacity:0;pointer-events:none;transform:translateX(var(--umtl-left,12px)) translateY(-50%) translateX(-10px)}.umtl-root.is-right{left:auto;right:0;transform:translateX(calc(-1*var(--umtl-right,12px))) translateY(-50%)}.umtl-root.is-right.is-hidden{opacity:0;pointer-events:none;transform:translateX(calc(-1*var(--umtl-right,12px))) translateY(-50%) translateX(10px)}.umtl-root.is-right.is-tinted{background:color-mix(in srgb,var(--dsw-alias-bg-base) 55%,transparent);backdrop-filter:blur(10px) saturate(1.4);-webkit-backdrop-filter:blur(10px) saturate(1.4)}.umtl-root.umtl-pushing{transition:none!important}.umtl-track{display:none}.umtl-markers{position:relative;display:flex;flex-direction:column;align-items:center;gap:var(--umtl-gap,10px);padding:6px 0;z-index:1;contain:layout}.umtl-stagger .umtl-marker{animation:umtlPop .28s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--umtl-stagger-delay,0ms)}.umtl-marker{position:relative;display:flex;align-items:center;justify-content:center;width:40px;height:14px;cursor:pointer;flex:none;contain:layout}.umtl-markerLine{display:none}.umtl-pill{border-radius:999px;background:var(--dsw-alias-border-l2);box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 30%,transparent);transition:width 180ms cubic-bezier(.22,1,.36,1),height 180ms,opacity 180ms,background 180ms,box-shadow 180ms;box-sizing:border-box;flex:none;will-change:width,height,opacity}.umtl-marker.is-active .umtl-pill,.umtl-marker.is-preview .umtl-pill{background:var(--dsw-alias-label-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 32%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-label-primary) 14%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-label-primary) 22%,transparent)}.umtl-marker.is-hovered .umtl-pill{background:var(--dsw-alias-brand-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 35%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-brand-primary) 16%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-brand-primary) 24%,transparent)}.umtl-marker.is-milestone .umtl-pill{background:var(--dsw-alias-state-warn-primary);box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 35%,transparent),0 0 6px 1px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 38%,transparent)}.umtl-marker.is-milestone.is-active .umtl-pill,.umtl-marker.is-milestone.is-preview .umtl-pill{background:var(--dsw-alias-state-warn-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 40%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 22%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 32%,transparent)}.umtl-marker.is-milestone.is-hovered .umtl-pill{background:var(--dsw-alias-brand-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 35%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 24%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 32%,transparent)}.umtl-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10px;line-height:1;font-weight:600;color:var(--dsw-alias-label-primary-foreground);letter-spacing:.02em;pointer-events:none;user-select:none;-webkit-user-select:none}@keyframes umtlPop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}.umtl-tip{position:fixed;z-index:9999;width:240px;min-height:48px;box-shadow:var(--umtl-shadow-tip);opacity:0;pointer-events:none;transform:scale(.95) translateX(var(--umtl-in-x,-8px));transition:opacity .12s ease,transform .12s cubic-bezier(.22,1,.36,1);transform-origin:left center;animation:umtlIn .2s cubic-bezier(.22,1,.36,1)}.umtl-tip.is-open{opacity:1;pointer-events:auto;transform:none}.umtl-tipBody{position:relative;background:color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent);backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);color:var(--dsw-alias-label-primary-foreground);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 14%,transparent),inset 0 0 0 1px color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 7%,transparent);border-radius:14px;max-height:min(36vh,280px);overflow:hidden;padding:8px 10px;font-size:12.5px;line-height:17px;word-break:break-word}.umtl-tipBody *::selection{background:color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 25%,transparent)}@keyframes umtlIn{from{opacity:0;transform:scale(.92) translateX(var(--umtl-in-x,-8px))}to{opacity:1;transform:none}}@keyframes umtlTextIn{from{opacity:.25}to{opacity:1}}@keyframes umtlPulse{0%,100%{opacity:1}50%{opacity:.35}}.umtl-hint{position:fixed;z-index:9998;background:color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent);backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);color:var(--dsw-alias-label-primary-foreground);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 14%,transparent),var(--umtl-shadow-tip);border-radius:999px;padding:6px 14px;font-size:11.5px;line-height:16px;font-weight:500;white-space:nowrap;opacity:1;transform:none;transition:opacity .2s ease,transform .2s ease;animation:umtlHintIn .24s cubic-bezier(.22,1,.36,1)}.umtl-hint.is-off{opacity:0;transform:translateX(-4px) scale(.96)}@keyframes umtlHintIn{from{opacity:0;transform:translateX(-4px) scale(.94)}to{opacity:1;transform:none}}.umtl-hud{position:fixed;z-index:10000;left:0;top:0;background:color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent);backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);color:var(--dsw-alias-label-primary-foreground);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 14%,transparent),var(--umtl-shadow-tip);border-radius:999px;padding:4px 11px;font-size:11px;line-height:16px;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s ease}.umtl-hud.is-on{opacity:1}[data-chat-anchor-key]{scroll-margin-top:14px}.umtl-settingsRow{display:flex;align-items:center;gap:8px;padding:16px 0;border-bottom:1px solid var(--dsw-alias-border-l2)}.umtl-settingsText{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;padding-right:48px}.umtl-settingsTitle{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:400;line-height:22px}.umtl-settingsDesc{color:var(--dsw-alias-label-tertiary);font-size:12px;font-weight:400;line-height:18px}.umtl-switch{position:relative;display:inline-block;width:44px;height:26px;cursor:pointer;flex:none;-webkit-tap-highlight-color:transparent;border:none;padding:0;background:transparent;border-radius:999px}.umtl-switchTrack{position:absolute;inset:0;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);box-shadow:inset 0 1px 2px rgba(0,0,0,0.12);border-radius:999px;transition:background .2s,border-color .2s;box-sizing:border-box}.umtl-switchTrack.is-checked{background:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-primary);box-shadow:none}.umtl-switchKnob{position:absolute;top:2px;left:2px;width:22px;height:22px;background:var(--dsw-alias-label-tertiary);border:1px solid var(--dsw-alias-label-tertiary);border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,0.18);transition:left .2s,background .2s,border-color .2s}.umtl-switchKnob.is-checked{left:20px;background:var(--dsw-alias-bg-base);border-color:var(--dsw-alias-bg-base);box-shadow:0 1px 2px rgba(0,0,0,0.18)}.umtl-switch:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.umtl-switch:hover .umtl-switchTrack:not(.is-checked){background:var(--dsw-alias-border-l3)}.umtl-root:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px;box-shadow:0 0 0 4px color-mix(in srgb,var(--dsw-alias-brand-primary) 20%,transparent)}.umtl-marker.is-older .umtl-pill{background:transparent;border:1.5px solid var(--dsw-alias-label-primary);box-shadow:none}.umtl-marker.is-older.is-loading .umtl-pill{animation:umtlPulse 1s ease-in-out infinite}.umtl-marker.is-seeking .umtl-pill{background:var(--dsw-alias-brand-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 35%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-brand-primary) 16%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-brand-primary) 24%,transparent);animation:umtlPulse .9s ease-in-out infinite}@media (prefers-reduced-motion:reduce){.umtl-root,.umtl-root *,.umtl-tip,.umtl-tip *,.umtl-stagger .umtl-marker,.umtl-hint,.umtl-hud{transition-duration:0s!important;transition-delay:0s!important;animation:none!important}}.umtl-card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:12px;list-style:none;transition:border-color .16s,background .16s}.umtl-card:hover{border-color:var(--dsw-alias-label-dimmed)}.umtl-cardOpen{background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-label-dimmed)}.umtl-cardHeader{appearance:none;width:100%;font:inherit;color:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:12px;align-items:center;gap:12px;padding:14px 16px;display:flex}.umtl-cardHeader:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:-2px}.umtl-cardHeadText{flex-direction:column;flex:1;gap:4px;min-width:0;display:flex}.umtl-cardName{color:var(--dsw-alias-label-primary);font-size:15px;font-weight:600;line-height:1.4}.umtl-cardDesc{color:var(--dsw-alias-label-tertiary);font-size:13px;line-height:1.5}.umtl-cardChevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .16s}.umtl-cardChevronOpen{transform:rotate(180deg)}.umtl-cardBody{border-top:1px solid var(--dsw-alias-border-l2);margin:0 16px;padding:12px 0 8px;display:flex;flex-direction:column;gap:14px}.umtl-cardRow{display:flex;align-items:center;justify-content:space-between;gap:12px}.umtl-cardLabel{color:var(--dsw-alias-label-primary);font-size:13px;font-weight:500;line-height:1.4}.umtl-cardHint{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:1.5}.umtl-cardPending{white-space:nowrap;background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-secondary);border-radius:999px;flex:none;padding:1px 8px;font-size:11px;font-weight:500;line-height:17px}.umtl-cardFooter{border-top:1px solid var(--dsw-alias-border-l2);justify-content:flex-end;align-items:center;gap:8px;padding:12px 0 4px;display:flex}.umtl-cardFailed{min-width:0;color:var(--dsw-alias-label-error);flex:1;margin:0;font-size:12px;line-height:1.5}.umtl-cardDiscard,.umtl-cardSave{appearance:none;font:inherit;cursor:pointer;border:1px solid #0000;border-radius:8px;padding:5px 14px;font-size:13px;line-height:1.5}.umtl-cardDiscard{border-color:var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);background:0 0}.umtl-cardDiscard:hover:not(:disabled){color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-dimmed)}.umtl-cardSave{background:var(--dsw-alias-label-primary);color:var(--dsw-alias-bg-layer-3)}.umtl-cardDiscard:disabled,.umtl-cardSave:disabled{opacity:.4;cursor:default}.umtl-cardDiscard:focus-visible,.umtl-cardSave:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}.umtl-seg{display:inline-flex;width:fit-content;gap:4px;background:var(--dsw-alias-bg-layer-3);border:1px solid var(--dsw-alias-border-l2);border-radius:999px;padding:3px}.umtl-segBtn{appearance:none;border:0;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:13px;line-height:1.5;padding:4px 16px;border-radius:999px;cursor:pointer;transition:background .16s,color .16s}.umtl-segBtn.is-active{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);box-shadow:0 1px 2px color-mix(in srgb,var(--dsw-alias-label-primary) 10%,transparent);border:1px solid var(--dsw-alias-border-l2)}.umtl-switchSm{box-sizing:border-box;position:relative;flex:0 0 auto;width:36px;height:20px;padding:2px;border:0;border-radius:999px;corner-shape:round;background:var(--dsw-alias-border-l3);cursor:pointer;outline:none;transition:background .14s ease;vertical-align:middle;display:inline-block}.umtl-switchSm.is-checked,.umtl-switchSm[aria-checked=true]{background:var(--dsw-alias-brand-primary)}.umtl-switchSm:hover:not(:disabled):not(.is-checked):not([aria-checked=true]){background:var(--dsw-alias-border-l4);opacity:.95}.umtl-switchSm:hover:not(:disabled).is-checked,.umtl-switchSm:hover:not(:disabled)[aria-checked=true]{opacity:.92}.umtl-switchSm:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.umtl-switchSm:disabled{opacity:.5;cursor:default}.umtl-switchSmKnob{display:block;width:16px;height:16px;border-radius:50%;corner-shape:round;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.22);transition:transform .14s cubic-bezier(.2,.8,.2,1),background .14s ease,box-shadow .14s ease;transform:translateX(0)}.umtl-switchSm.is-checked .umtl-switchSmKnob,.umtl-switchSm[aria-checked=true] .umtl-switchSmKnob{transform:translateX(16px);background:var(--dsw-alias-label-primary-foreground,var(--dsw-alias-bg-base));box-shadow:0 1px 3px rgba(0,0,0,0.35)}.umtl-tipImages{border-radius:6px;overflow:hidden;margin-bottom:6px}.umtl-tipImages.is-single{max-height:80px;width:100%;background:color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 8%,transparent);border:1px solid color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 12%,transparent)}.umtl-tipImages.is-single img{width:100%;max-height:80px;object-fit:cover;display:block}.umtl-tipImages.is-grid{display:flex;gap:6px}.umtl-tipImgItem{flex:0 0 48px;width:48px;height:48px;border-radius:6px;position:relative;overflow:hidden;background:color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 8%,transparent);border:1px solid color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 12%,transparent)}.umtl-tipImgItem img{width:100%;height:100%;object-fit:cover;display:block}.umtl-tipImgMore{position:absolute;inset:0;background:rgba(0,0,0,0.55);color:#fff;font-size:11px;font-weight:600;display:grid;place-items:center}@keyframes umtlGrow{from{transform:scale(0.35);opacity:0}to{transform:scale(1);opacity:1}}.umtl-marker.is-new-born{animation:umtlGrow 200ms cubic-bezier(.22,1,.36,1)}.umtl-tip.is-milestone{box-shadow:0 0 12px 2px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 30%,transparent),var(--umtl-shadow-tip)}.umtl-tip.is-milestone .umtl-tipBody{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 55%,transparent),inset 0 1px 0 color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 14%,transparent)}.umtl-tip.is-milestone .umtl-tipBody::before{content:"";position:absolute;top:0;left:18px;right:18px;height:2px;background:linear-gradient(90deg,transparent,var(--dsw-alias-state-warn-primary) 25%,var(--dsw-alias-state-warn-primary) 75%,transparent);border-radius:999px;z-index:2}.umtl-tipAction{position:absolute;top:7px;right:7px;display:flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:4px;cursor:pointer;background:transparent;border:none;padding:0;color:var(--dsw-alias-label-primary-foreground);opacity:0;transition:opacity .18s ease,transform .12s ease,background .15s}.umtl-tip:hover .umtl-tipAction{opacity:0.45}.umtl-tipAction:hover{opacity:1!important;background:color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 12%,transparent);transform:scale(1.1)}.umtl-tipAction.is-active{opacity:0.95!important;color:var(--dsw-alias-state-warn-primary)}.umtl-tipDot-bm{width:3.5px;height:3.5px;border-radius:50%;background:var(--dsw-alias-state-warn-primary);box-shadow:0 0 4px var(--dsw-alias-state-warn-primary);display:inline-block;flex:none;margin-right:4px}.umtl-input{width:100%;box-sizing:border-box;padding:6px 10px;border-radius:8px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-size:12px;outline:none;transition:border-color .15s}.umtl-input:focus{border-color:var(--dsw-alias-brand-primary)}body.umtl-takeover-official nav[aria-label="轮次导航"],body.umtl-takeover-official nav[aria-label="Turn navigation"],body.umtl-takeover-official div:has(> nav[aria-label="轮次导航"]),body.umtl-takeover-official div:has(> nav[aria-label="Turn navigation"]){display:none!important}.umtl-tipPrompt{font-size:13px;font-weight:500;line-height:18px;color:var(--dsw-alias-label-primary-foreground);white-space:pre-wrap;word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.umtl-tipResponse{font-size:11.5px;font-weight:400;line-height:15px;color:color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 65%,transparent);white-space:pre-wrap;word-break:break-word;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;margin-top:7px}';
      // 同一插件多次 HMR 时避免重复注入同一份样式
      try { document.querySelectorAll('style[data-plugin-css="dsh-user-message-timeline"]').forEach(el => el.remove()); } catch {}
      const styleEl = document.createElement('style');
      styleEl.dataset.pluginCss = 'dsh-user-message-timeline';
      styleEl.textContent = css + '.umtl-marker.is-unloaded:not(.is-active):not(.is-hovered) .umtl-pill{background:transparent;border:1px solid color-mix(in srgb,var(--dsw-alias-label-primary) 38%,transparent);box-shadow:none}';
      document.head.appendChild(styleEl);
      ctx.effect(() => () => styleEl.remove());
      // P1+P2: 卸载时只清理瞬态调试状态；书签/迁移标记/一次性提示属于用户数据，必须保留。
      // 插件禁用、HMR、重装都会走到这里，历史上误删 umtl:bookmarks 导致书签丢失。
      ctx.effect(() => () => {
        try {
          if (typeof localStorage !== 'undefined') localStorage.removeItem('umtl:debug');
        } catch {}
        try { delete window.__UMTL__; } catch {}
        try { delete window.__UMTL_DEBUG__; } catch {}
        try { document.body.classList.remove('umtl-takeover-official'); } catch {}
      });

      function isEnabled() {
        try { return window.localStorage.getItem('umtl:enabled') !== 'false'; } catch(e){ return true; }
      }
      // v0.4.0：DSH 0.1.7 配置面 —— ctx.configForms 主源，localStorage 仅作迁移桥与降级。
      // Host 半导出的 volatile Config 由 Loader 条目 id 寻址（见 lib/index.js）。
      const UMTL_NS = "user-message-timeline";
      // 惰性解析：configForms 由 dsh-client-ui-settings 提供，其 apply 次序不保证先于本插件。
      // 这里不缓存 ConfigForm 对象：插件热重载/重新启用后旧的 controller 可能已 dispose，
      // 缓存会让配置页永远读旧快照。ConfigForms.get 本身按 entry id 复用，调用开销可接受。
      function getForm(){
        try{
          const cf = ctx.get("configForms");
          if(cf && typeof cf.get === "function") return cf.get(UMTL_NS) || null;
        }catch(e){}
        return null;
      }
      try{ getForm(); }catch(e){}
      // volatile 字段在解析结果里是 cosmokit Volatile 引用，读值需解包
      function unvol(v){ return (v && typeof v.get === "function") ? v.get() : v; }
      // 表单快照 {status,value,revision,writable,mode}；value 为 schema 解析后的整段配置
      function formValue(){
        try{
          const f = getForm();
          if(!f) return null;
          const snap = f.getSnapshot();
          if(!snap || !snap.value) return null;
          return snap.value;
        }catch(e){ return null; }
      }
      function getEnabledFromScope(){
        try{ const v=formValue(); if(v) return unvol(v.enabled) !== false; }catch(e){}
        return isEnabled();
      }
      function getPositionFromScope(){
        try{ const v=formValue(); if(v){ const p=unvol(v.position); if(p==="left"||p==="right") return p; } }catch(e){}
        try{ const p=window.localStorage.getItem('umtl:position'); if(p==="left"||p==="right") return p; }catch(e){}
        return "left";
      }
      function getTakeoverOfficialFromScope(){
        try{ const v=formValue(); if(v){ const t=unvol(v.takeoverOfficial); if(typeof t==='boolean') return t; } }catch(e){}
        try{ return window.localStorage.getItem('umtl:takeoverOfficial') !== 'false'; }catch(e){ return true; }
      }
      function getPrefixEnabledFromScope(){
        try{ const v=formValue(); if(v){ const p=unvol(v.prefixEnabled); if(typeof p==='boolean') return p; } }catch(e){}
        try{ return window.localStorage.getItem('umtl:prefixEnabled')==='true'; }catch(e){ return false; }
      }
      function getPrefixPatternsFromScope(){
        try{ const v=formValue(); if(v){ const p=unvol(v.prefixPatterns); if(typeof p==='string') return p; } }catch(e){}
        try{ const v=window.localStorage.getItem('umtl:prefixPatterns'); if(v) return v; }catch(e){}
        return "!, *, 📌, 【重点】";
      }
      function getBookmarksMapFromStorage(){
        try{
          const raw=window.localStorage.getItem('umtl:bookmarks');
          if(raw){
            const obj=JSON.parse(raw);
            if(obj && typeof obj==='object') return new Map(Object.entries(obj));
          }
        }catch(e){}
        return new Map();
      }
      function saveBookmarksMapToStorage(map){
        try{
          const obj=Object.fromEntries(map.entries());
          window.localStorage.setItem('umtl:bookmarks', JSON.stringify(obj));
        }catch(e){}
      }
      // 会话切换时一次性预加载 sessionStorage 时间缓存，避免 scan 对每个未加载轮次反复 getItem
      function loadSessionTurnTimes(sessionId, target){
        if(!sessionId || !target) return target;
        try{
          const prefix='umtl:tt:'+String(sessionId)+':';
          for(let i=0;i<sessionStorage.length;i++){
            const k=sessionStorage.key(i);
            if(!k || k.indexOf(prefix)!==0) continue;
            const turn=Number(k.slice(prefix.length));
            if(!Number.isSafeInteger(turn) || target.has(turn)) continue;
            const value=sessionStorage.getItem(k);
            if(value) target.set(turn,value);
          }
        }catch(e){}
        return target;
      }
      let enabled = getEnabledFromScope();
      let initialPosition = getPositionFromScope();
      let initialTakeoverOfficial = getTakeoverOfficialFromScope();
      // 一次性迁移旧 localStorage（v0.2.1：MIGRATION_KEY 防重复，支持同步及订阅水合）
      const MIGRATION_KEY = 'umtl:migrated-to-scope';
      // 一次 mutate 提交多字段：原子、共用同一 revision 围栏（SettingsPathOp: {op:'set',path,value}）
      async function formApply(ops){
        try{
          const f = getForm();
          if(!f || !ops || !ops.length) return true;
          const snap = f.getSnapshot();
          const revision = snap ? snap.revision : undefined;
          const p = f.mutate(ops.map(([path,value])=>({op:'set',path:[path],value})), revision);
          if(!p) return true;
          if(typeof p.then === 'function'){
            const result = await p;
            return result !== false;
          }
          return true;
        }catch(e){ return false; }
      }
      // 旧 localStorage 迁移：只迁移明确存在且与当前配置不同的旧值；
      // 必须等 Host 接受写入后再删旧键，否则 transport/冲突失败会直接丢配置。
      async function tryMigrate(val){
        try{
          if(!getForm()) return;
          try{ if(window.localStorage.getItem(MIGRATION_KEY)==='1') return; }catch(e){}
          if(val===undefined){
            const v = formValue();
            if(v) val = {enabled:unvol(v.enabled), position:unvol(v.position), takeoverOfficial:unvol(v.takeoverOfficial), prefixEnabled:unvol(v.prefixEnabled), prefixPatterns:unvol(v.prefixPatterns)};
          }
          if(!val) return;
          const ops=[];
          const legacyKeys=[];
          const oldEnabled=window.localStorage.getItem('umtl:enabled');
          if(oldEnabled==='true'||oldEnabled==='false'){
            legacyKeys.push('umtl:enabled');
            const eVal=oldEnabled==='true';
            if(val.enabled!==eVal) ops.push(["enabled", eVal]);
          }
          const oldPosition=window.localStorage.getItem('umtl:position');
          if(oldPosition==="left"||oldPosition==="right"){
            legacyKeys.push('umtl:position');
            if(val.position!==oldPosition) ops.push(["position", oldPosition]);
          }
          const oldTakeover=window.localStorage.getItem('umtl:takeoverOfficial');
          if(oldTakeover==='true'||oldTakeover==='false'){
            legacyKeys.push('umtl:takeoverOfficial');
            const toVal = oldTakeover==='true';
            if(val.takeoverOfficial!==toVal) ops.push(["takeoverOfficial", toVal]);
          }
          const oldPrefixEnabled=window.localStorage.getItem('umtl:prefixEnabled');
          if(oldPrefixEnabled==='true'||oldPrefixEnabled==='false'){
            legacyKeys.push('umtl:prefixEnabled');
            const pVal = oldPrefixEnabled==='true';
            if(val.prefixEnabled!==pVal) ops.push(["prefixEnabled", pVal]);
          }
          const oldPrefixPatterns=window.localStorage.getItem('umtl:prefixPatterns');
          if(oldPrefixPatterns!==null && typeof val.prefixPatterns==='string'){
            legacyKeys.push('umtl:prefixPatterns');
            if(val.prefixPatterns!==oldPrefixPatterns) ops.push(["prefixPatterns", oldPrefixPatterns]);
          }
          if(ops.length){
            const ok = await formApply(ops);
            if(!ok) return;
          }
          for(const key of legacyKeys){ try{ window.localStorage.removeItem(key); }catch(e){} }
          try{ window.localStorage.setItem(MIGRATION_KEY,'1'); }catch(e){}
        }catch(e){}
      }
      tryMigrate();
      // 调试日志（默认关，localStorage umtl:debug=1 开启，不影响性能）
      const isDebug = ()=>{ try{ return window.localStorage.getItem('umtl:debug')==='1' || !!window.__UMTL_DEBUG__; }catch(e){ return false; } };
      const umtlLog = (...args)=>{ if(!isDebug()) return; try{ const msg='[umtl] '+args.map(a=> typeof a==='object'?JSON.stringify(a):String(a)).join(' '); console.log(msg); if(!window.__UMTL__) window.__UMTL__={logs:[], dump:()=>{ try{ const t=window.__UMTL__.logs.join('\n'); console.log(t); try{ navigator.clipboard.writeText(t); }catch(e){} return t; }catch(e){} }}; window.__UMTL__.logs.push(msg); if(window.__UMTL__.logs.length>500) window.__UMTL__.logs.shift(); if(window.__UMTL__.logs.length===1) console.log('[umtl] 调试已开启，复现后执行 copy(__UMTL__.logs.join("\\n")) 复制日志'); }catch(e){} };
      try{ if(!window.__UMTL__) window.__UMTL__={logs:[], dump:function(){ try{ const t=this.logs.join('\n'); console.log(t); try{ navigator.clipboard.writeText(t); }catch(e){} return t; }catch(e){ return ''; } }}; }catch(e){}

      // 解耦混淆类名，改用标准 HTML5 Data 属性规范
      const SEL = {
        CONTENT: '[data-conversation-content]',
        SESSION: '[data-conversation-session]',
        CONV_SCROLL: '[data-conversation-scroll]',
        FLOW: '[data-chat-flow]',
        TURN: '[data-chat-turn]',
        ANCHOR: '[data-chat-anchor-key]',
        COMPOSER: '[data-composer-seat]'
      };
      // 会话级作用域：DSH 0.2.1 的 [data-conversation-session] 能把主会话与右侧栏
      // 同时存在的会话区分开；0.1.7 没有该属性时回退到全局滚动容器。
      function getConversationScope(sessionId){
        try{
          if(sessionId){
            const escaped=CSS.escape(String(sessionId));
            const candidates=Array.from(document.querySelectorAll('[data-conversation-session="'+escaped+'"]'));
            let first=null;
            let best=null;
            let bestWidth=-1;
            for(const el of candidates){
              if(!el || !el.querySelector) continue;
              const scroll=el.matches(SEL.CONV_SCROLL)?el:el.querySelector(SEL.CONV_SCROLL);
              if(!scroll) continue;
              if(!first) first=scroll;
              try{ if(el.closest('[data-side="right"], [class*="rightSidebar"], [class*="RightSidebar"]')) continue; }catch(_){}
              // 同 session 可能同时出现在主面板和右侧栏；优先宽度更大的主会话面板。
              let width=0;
              try{ width=el.getBoundingClientRect().width || 0; }catch(_){}
              if(width>bestWidth){ bestWidth=width; best=scroll; }
            }
            if(best) return best;
            if(first) return first;
            // 新宿主支持 session 作用域但当前会话面板尚未挂载：不要退回其他会话的容器。
            if(document.querySelector(SEL.SESSION)) return null;
          }
        }catch(e){}
        try{ return document.querySelector(SEL.CONV_SCROLL); }catch(e){ return null; }
      }

      // Prompt 尾部时间戳智能去噪：剔除系统附加的形如 (2026-09-04 02:04) 或 (14:30) 的时间后缀
      // 提问尾部时间去噪：括号包裹时间 + 末尾裸露日期时间 + 中文日期全部清除
      function cleanOutlinePrompt(raw){
        if(!raw || typeof raw !== 'string') return '';
        return raw
          .replace(/\s*[\(（\[](?:\d{4}[-/.]\d{1,2}[-/.]\d{1,2}.*?|\d{1,2}:\d{2}.*?)[\)）\]][\s。；;]*$/, '')
          .replace(/\s+(?:\d{4}[-/.]\d{1,2}[-/.]\d{1,2}\s+)?\d{1,2}:\d{2}(?::\d{2})?[\s。；;]*$/, '')
          .replace(/\s+\d{1,2}月\d{1,2}日(?:\s+\d{1,2}:\d{2})?[\s。；;]*$/, '')
          .trim();
      }

      function extractPromptTime(raw){
        if(!raw || typeof raw !== 'string') return '';
        const m = raw.match(/[\(（\[](?:(?:\d{4}[-/]\d{1,2}[-/]\d{1,2}\s+)?(\d{1,2}:\d{2}(?::\d{2})?))[\)）\]][\s。；;]*$/);
        if(m && m[1]){
          const tp = m[1].match(/\d{1,2}:\d{2}/);
          return tp ? tp[0] : m[1];
        }
        return '';
      }

      // 重点轮次前缀判定：严格在 prefixActive 为 true 时，按开头（startsWith）匹配 patterns，杜绝全文 includes 误杀
      function checkPrefixMilestone(text, prefixActive, patternStr){
        if(!prefixActive || !patternStr || !text) return false;
        const clean = text.trim();
        if(!clean) return false;
        const patterns = patternStr.split(/[,，]/).map(s=>s.trim()).filter(Boolean);
        return patterns.some(p => clean.startsWith(p));
      }

      // 提取提问纯净文本：优先取气泡容器，过滤操作栏/时间元素，避免时间文本拼接到提问中
      function extractText(el){
        let raw='';
        try{
          const target=(el.querySelector && el.querySelector('[class*="bubble"]')) || el;
          const skipSel='[class*="actions"], [class*="time"], [class*="Time"], time, [aria-hidden="true"]';
          const filter=function(node){
            try{
              const p=node.parentElement;
              if(!p) return NodeFilter.FILTER_ACCEPT;
              const tag=p.tagName||'';
              if(tag==='BUTTON'||tag==='SVG'||tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT') return NodeFilter.FILTER_REJECT;
              if(p.closest && p.closest(skipSel)) return NodeFilter.FILTER_REJECT;
            }catch(_){}
            return NodeFilter.FILTER_ACCEPT;
          };
          let w=null;
          try{ w=document.createTreeWalker(target,NodeFilter.SHOW_TEXT,{acceptNode:filter}); }
          catch(_){ w=document.createTreeWalker(target,NodeFilter.SHOW_TEXT,null); }
          let n=w.nextNode();
          while(n && raw.length<340){
            let skip=false;
            try{
              const p=n.parentElement;
              const tag=p?p.tagName:'';
              if(tag==='BUTTON'||tag==='SVG'||tag==='SCRIPT'||tag==='STYLE'||tag==='NOSCRIPT') skip=true;
              else if(p&&p.closest&&p.closest(skipSel)) skip=true;
            }catch(_){}
            if(!skip) raw+=(n.nodeValue||'');
            n=w.nextNode();
          }
        }catch(e){ try{ raw=(el.textContent||'').slice(0,360); }catch(_){ } }
        // 压缩连续空格/制表符，保留换行；3个以上连换行折叠为一个空行
        return raw.replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim();
      }
      function extractTime(el){
        try{
          const tEl=el.querySelector('time, [data-time], [class*="time"], [class*="Time"]');
          if(tEl){
            const v=tEl.getAttribute('datetime')||tEl.getAttribute('data-time')||tEl.getAttribute('title')||tEl.textContent||'';
            if(v && /\d/.test(v)){
              const m=v.match(/\d{1,2}:\d{2}/);
              return m ? m[0] : v.trim().slice(0,16);
            }
          }
          const dt=el.getAttribute('data-time')||el.getAttribute('data-timestamp');
          if(dt){
            const d=new Date(Number(dt));
            if(!isNaN(d.getTime())) return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
          }
          const title=el.getAttribute('title');
          if(title){
            const m=title.match(/\d{1,2}:\d{2}/);
            if(m) return m[0];
          }
        }catch(e){}
        return '';
      }
      // 区分用户多模态图片与按钮/操作栏图标（排除 dsh-easyrewrite 撤回按钮等，保留官方图片附件）
      function isUserContentImage(img, src){
        try{
          if(!img || !src) return false;
          if(src.startsWith('data:image/svg')) return false;

          // 1. 优先白名单：若处于官方消息图片画廊/图片展示容器中，在排除明确图标后予以放行
          try{
            if(img.closest && img.closest('[class*="gallery"], [class*="frame"], [data-align]')){
              // 进一步确认其不是 easyrewrite 的图标（双重保险）
              if(!img.classList.contains('dbe-icon-img') && !img.closest('[data-dsh-easyrewrite="recall-key"]')) {
                return true;
              }
            }
          }catch(_){}

          // 2. 精确排除 dsh-easyrewrite 的撤回/操作图标：
          // 注意：不要匹配 [data-dsh-easyrewrite]（因为外层消息容器属性是 data-dsh-easyrewrite="user"）
          // 只匹配撤回键特定属性 [data-dsh-easyrewrite="recall-key"] 或 .dbe-icon-img
          try{
            if(img.classList && img.classList.contains('dbe-icon-img')) return false;
            if(img.closest && img.closest('[data-dsh-easyrewrite="recall-key"], .dbe-icon-img')) return false;
          }catch(_){}

          // 3. 排除显式带有图标特征类名的元素
          try{
            if(img.classList && Array.from(img.classList).some(c => /(^|[-_])icon([-_]|$)/i.test(c))) return false;
          }catch(_){}

          // 4. 排除操作栏及操作按钮（注意：绝对不能直接写 img.closest('button')！因为真实图片在点击放大的 button 里）
          try{
            if(img.closest){
              if(img.closest('[class*="actions"], [class*="actionBar"], [class*="toolbar"]')) return false;
              const btn = img.closest('button');
              if(btn){
                // 如果按钮是官方图片的 frame，不可过滤
                const btnCls = btn.className || '';
                if(btnCls.includes('frame')) return true;
                const title = btn.getAttribute('title') || btn.getAttribute('aria-label') || '';
                if(/撤回|改写|编辑|复制|重试|删除|Recall|Edit|Copy|Retry|Delete/i.test(title)) return false;
                if(/(^|\s)(?:.*action.*|.*btn.*)(?:\s|$)/i.test(btnCls)) return false;
              }
            }
          }catch(_){}

          // 5. 排除微型小图标：显式 width 与 height 均 <= 32（例如 18x18 撤回图标）
          try{
            const w = img.getAttribute('width'); const h = img.getAttribute('height');
            if (w && Number(w) <= 32 && h && Number(h) <= 32) return false;
          }catch(_){}

          return true;
        }catch(_){ return true; }
      }
      function getScrollRoot(sessionId){
        try{
          // 优先使用当前会话作用域内的滚动容器；右侧栏同时打开另一会话时不会串线。
          const primary=getConversationScope(sessionId);
          if(!primary && sessionId){
            try{ if(document.querySelector(SEL.SESSION)) return null; }catch(e){}
          }
          if(primary){
            let n=primary;
            while(n && n!==document.body){
              try{
                const s=window.getComputedStyle(n);
                if((s.overflowY==='auto'||s.overflowY==='scroll'||s.overflowY==='overlay') && n.scrollHeight>n.clientHeight+4) return n;
              }catch(e){}
              n=n.parentElement;
            }
            umtlLog('getScrollRoot primary', {tag: primary.tagName, h: primary.scrollHeight, ch: primary.clientHeight, sessionId});
            return primary;
          }
          // 兜底：从当前会话内的 anchor 向上找最深的可滚祖先
          const scope=getConversationScope(sessionId);
          const anchor=(scope || document).querySelector(SEL.ANCHOR);
          if(anchor){
            let n=anchor.parentElement;
            let best=null;
            let fallback=null;
            while(n && n!==document.body){
              try{
                const s=window.getComputedStyle(n);
                if((s.overflowY==='auto'||s.overflowY==='scroll'||s.overflowY==='overlay')){
                  if(n.scrollHeight>n.clientHeight+4) return n;
                  if(!fallback) fallback=n;
                  best=n;
                }
              }catch(e){}
              n=n.parentElement;
            }
            if(fallback) return fallback;
            if(best) return best;
          }
          const fallback=scope || document.querySelector(SEL.CONV_SCROLL) || document.querySelector('main [class*="scroll"]') || document.scrollingElement || document.documentElement;
          umtlLog('getScrollRoot fallback', {tag: fallback?.tagName, cls: fallback?.className?.slice(0,40), h: fallback?.scrollHeight, ch: fallback?.clientHeight, sessionId});
          return fallback;
        }catch(e){ try{ return document.querySelector(SEL.CONV_SCROLL)||null; }catch(_){ return null; } }
      }
      // B2：确保滚动容器已水合（轮询至可滚动或超时，期间不改 scrollTop）
      function ensureScrollRoot(timeout=900, sessionId){
        return new Promise(resolve=>{
          const start=Date.now();
          const tick=()=>{
            try{
              const r=getScrollRoot(sessionId);
              if(r && r.scrollHeight>r.clientHeight+8) return resolve(r);
            }catch(e){}
            if(Date.now()-start>=timeout){ try{ resolve(getScrollRoot(sessionId)); }catch(e){ resolve(null);} return; }
            const d=Math.min(60, timeout-(Date.now()-start));
            window.setTimeout(()=>{ if(window.requestAnimationFrame) window.requestAnimationFrame(tick); else tick(); }, d);
          };
          if(window.requestAnimationFrame) window.requestAnimationFrame(tick); else tick();
        });
      }
      // 优先在当前会话的 [data-chat-flow] 内寻找包含 "加载更早/加载更多" 或 "Load more" 的非 disabled 按钮
      function findOlderBtn(sessionId){
        try{
          const scope=getConversationScope(sessionId);
          if(!scope && sessionId && document.querySelector(SEL.SESSION)) return null;
          const flow=(scope && scope.querySelector(SEL.FLOW)) || scope || document.body;
          const all=flow.querySelectorAll('button:not([disabled])');
          for(let i=0;i<all.length;i++){
            const b=all[i];
            const txt=(b.textContent||'').trim();
            if(/加载更早|加载更多|Load more/i.test(txt)) return b;
          }
          if(!scope) return null;
          const scopedBtns=scope.querySelectorAll('button:not([disabled])');
          for(let i=0;i<scopedBtns.length;i++){
            const b=scopedBtns[i];
            const txt=(b.textContent||'').trim();
            if(/加载更早|加载更多|Load more/i.test(txt)) return b;
          }
        }catch(e){}
        return null;
      }
      function isOlderBtn(sessionId){ try{ return !!findOlderBtn(sessionId); }catch(e){ return false; } }
      function imagesEqual(a,b){
        if(a===b) return true;
        if(!a||!b||a.length!==b.length) return false;
        for(let i=0;i<a.length;i++) if(a[i]!==b[i]) return false;
        return true;
      }
      // markers 浅比较，无变化不触发 setState（seq 变化也必须刷新，否则 loadThrough 会拿到旧 seq）
      function markersEqual(a,b){
        if(a===b) return true;
        if(!a||!b||a.length!==b.length) return false;
        for(let i=0;i<a.length;i++){
          if(a[i].key!==b[i].key||a[i].bookmarkKey!==b[i].bookmarkKey||a[i].turn!==b[i].turn||a[i].seq!==b[i].seq||a[i].isUnloaded!==b[i].isUnloaded||a[i].preview!==b[i].preview||a[i].response!==b[i].response||a[i].bm!==b[i].bm||a[i].time!==b[i].time||a[i].status!==b[i].status||a[i].hasImage!==b[i].hasImage||a[i].isOlder!==b[i].isOlder||!imagesEqual(a[i].images,b[i].images)) return false;
        }
        return true;
      }
      // 一次遍历当前会话的 flow item，避免为每个轮次做多次 document.querySelector。
      // 只有 user/steering 行代表“用户提问”；assistant 行只用于回答摘要。
      function indexTurnRows(root){
        const map=new Map();
        try{
          if(!root || !root.querySelectorAll) return map;
          const rows=root.querySelectorAll(SEL.TURN);
          for(let i=0;i<rows.length;i++){
            const row=rows[i];
            try{ if(row.closest('[hidden]')) continue; }catch(_){}
            const t=Number(row.getAttribute('data-chat-turn'));
            if(!Number.isSafeInteger(t)) continue;
            const kind=row.getAttribute('data-chat-flow-kind')||'';
            let bucket=map.get(t);
            if(!bucket){ bucket={user:null,steering:null,assistant:null}; map.set(t,bucket); }
            if(kind==='user' && !bucket.user) bucket.user=row;
            else if(kind==='steering' && !bucket.steering) bucket.steering=row;
            else if(kind==='assistant') bucket.assistant=row;
          }
        }catch(e){}
        return map;
      }
      function getBookmarkKey(sessionId,key){
        return sessionId ? (String(sessionId)+':'+String(key)) : String(key||'');
      }

      function Timeline() {
        let sessions = null;
        try { sessions = ctx.get("sessions"); } catch(e){}
        // DSH 0.1.7：SessionListState 已无 current 字段；当前会话由 uiSession 的
        // main 绑定发布（adapter.current.key === 主视图保留的 sessionId）。
        let uiSession = null;
        try { const us = ctx.get("uiSession"); if(us && us.adapter) uiSession = us.adapter; } catch(e){}
        const [markers,setMarkers]=React.useState([]);
        const [activeKey,setActiveKey]=React.useState(null);
        const [visible,setVisible]=React.useState(false);
        // T2.2：tipData 常驻不置空（DOM 稳定→入场动画只播一次），显隐由 tipVisible/is-open 门控
        const [tipData,setTipData]=React.useState(null);
        const [tipVisible,setTipVisible]=React.useState(false);
        const [hoveredKey,setHoveredKey]=React.useState(null);
        // 分页 hasMore 与头丸加载态
        const [hasMore,setHasMore]=React.useState(false);
        const [olderLoading,setOlderLoading]=React.useState(false);
        const hasMoreRef=React.useRef(false);
        // 跳转寻址脉冲目标
        const [seekingKey,setSeekingKey]=React.useState(null);
        const seekingKeyRef=React.useRef(null);
        const [isTimelineHovered,setIsTimelineHovered]=React.useState(false);
        const [enabledState,setEnabledState]=React.useState(enabled);
        const [positionState,setPositionState]=React.useState(initialPosition);
        const [takeoverOfficialState,setTakeoverOfficialState]=React.useState(initialTakeoverOfficial);
        const takeoverOfficialRef=React.useRef(takeoverOfficialState);
        React.useEffect(()=>{ takeoverOfficialRef.current=takeoverOfficialState; },[takeoverOfficialState]);
        const [prefixEnabledState,setPrefixEnabledState]=React.useState(()=>getPrefixEnabledFromScope());
        const [prefixPatternsState,setPrefixPatternsState]=React.useState(()=>getPrefixPatternsFromScope());
        const [bookmarksMap,setBookmarksMap]=React.useState(()=>getBookmarksMapFromStorage());
        const bookmarksMapRef=React.useRef(bookmarksMap);
        React.useEffect(()=>{ bookmarksMapRef.current=bookmarksMap; },[bookmarksMap]);
        // 运行状态必须来自公开 SessionSnapshot；不要读 Session 的私有 running 字段。
        const [runningState,setRunningState]=React.useState(null);
        const runningStateRef=React.useRef(null);
        React.useEffect(()=>{ runningStateRef.current=runningState; },[runningState]);
        const prefixEnabledRef=React.useRef(prefixEnabledState);
        React.useEffect(()=>{ prefixEnabledRef.current=prefixEnabledState; },[prefixEnabledState]);
        const prefixPatternsRef=React.useRef(prefixPatternsState);
        React.useEffect(()=>{ prefixPatternsRef.current=prefixPatternsState; },[prefixPatternsState]);
        const [scrollReady,setScrollReady]=React.useState(false); // 滚动容器就绪才可点
        const [entered,setEntered]=React.useState(false); // 入场编排仅播一次
        // T3 onboarding：一次性操作提示（umtl:hinted 只播一次）
        const [hint,setHint]=React.useState(false);
        const [hintClosing,setHintClosing]=React.useState(false);
        const hintElRef=React.useRef(null);
        // P2-B Scrub HUD：常驻挂载徽标，拖拽期直写位置/文本（零重渲）
        const [hudOn,setHudOn]=React.useState(false);
        const hudElRef=React.useRef(null);
        const hudKeyRef=React.useRef(null);
        const rootRef=React.useRef(null);
        const tipRef=React.useRef(null);
        const markersRef=React.useRef([]);
        const activeRef=React.useRef(null);
        const draggingRef=React.useRef(false);
        const rafPendingRef=React.useRef(false);
        const dragTargetRef=React.useRef(null);
        const pointerDownRef=React.useRef(null);   // {startX,startY,target,pointerId}
        const didDragRef=React.useRef(false);
        const suppressClickRef=React.useRef(false); // 拖拽后的 click 必须吞掉，避免二次滚动
        const dragRafRef=React.useRef(0);
        const enteredRef=React.useRef(false);
        const openTimerRef=React.useRef(null);  // 开泡分级延迟定时器
        const hideTimerRef=React.useRef(null);  // root leave 宽容期/移出气泡防抖
        const tipVisibleRef=React.useRef(false);
        const suppressTipRef=React.useRef(false); // 拖拽期间抑制气泡
        const followRafRef=React.useRef(0);       // rAF 跟随器
        const prevCountRef=React.useRef(0);

        // 会话与原生大纲投影订阅（主绑定来源：uiSession.adapter.current）
        const [currentSessionId,setCurrentSessionId]=React.useState(()=>{
          try{ return uiSession?.current?.getSnapshot()?.key || null; }catch(e){ return null; }
        });
        const currentSessionRef=React.useRef(null);
        React.useEffect(()=>{
          if(!uiSession || !uiSession.current) return;
          const src = uiSession.current;
          const syncSession=()=>{
            try{
              const snap = src.getSnapshot();
              const nextId = (snap && snap.key) || null;
              setCurrentSessionId(prev=> prev===nextId ? prev : nextId);
            }catch(e){}
          };
          syncSession();
          const unsub = src.subscribe(syncSession);
          return ()=>{ try{ unsub(); }catch(e){} };
        },[uiSession]);

        const session=React.useMemo(()=>{
          if(!sessions || !currentSessionId) return null;
          try{
            return sessions.binding(currentSessionId)?.session || null;
          }catch(e){
            return null;
          }
        },[sessions,currentSessionId]);
        currentSessionRef.current=session;

        // 订阅 SessionSnapshot.running（官方公开字段），保证“进行中/已完成”及时刷新
        React.useEffect(()=>{
          if(!session || typeof session.getSnapshot!=='function'){ setRunningState(null); return; }
          const sync=()=>{
            try{
              const snap=session.getSnapshot();
              setRunningState(snap && typeof snap.running==='boolean' ? snap.running : null);
            }catch(e){}
          };
          sync();
          let unsub=null;
          try{ unsub=session.subscribe(sync); }catch(e){}
          return ()=>{ try{ if(unsub) unsub(); }catch(e){} };
        },[session]);

        // 订阅 turnOutline 投影
        const [outline,setOutline]=React.useState(()=>{
          try{
            return session?.projections?.faceOf("turnOutline")?.getSnapshot() || null;
          }catch(e){
            return null;
          }
        });
        const outlineRef=React.useRef(outline);
        React.useEffect(()=>{ outlineRef.current=outline; },[outline]);

        React.useEffect(()=>{
          if(!session || !session.projections){
            setOutline(null);
            return;
          }
          try{
            const face=session.projections.faceOf("turnOutline");
            if(!face){ setOutline(null); return; }
            const syncOutline=()=>{
              try{
                const snap=face.getSnapshot();
                setOutline(Array.isArray(snap)?snap:null);
              }catch(e){}
            };
            syncOutline();
            const unsub=face.subscribe(syncOutline);
            return ()=>{ try{ unsub(); }catch(e){} };
          }catch(e){
            setOutline(null);
          }
        },[session]);

        // 订阅 turnTimes 轻量投影（轮次时间供给，未注册时静默降级）
        const [turnTimes,setTurnTimes]=React.useState(null);
        const turnTimesRef=React.useRef(null);
        React.useEffect(()=>{ turnTimesRef.current=turnTimes; },[turnTimes]);
        React.useEffect(()=>{
          if(!session || !session.projections){
            setTurnTimes(null);
            return;
          }
          try{
            const face=session.projections.faceOf("turnTimes");
            if(!face){ setTurnTimes(null); return; }
            const syncTimes=()=>{
              try{
                const snap=face.getSnapshot();
                setTurnTimes(snap && typeof snap==='object' ? {...snap} : null);
              }catch(e){}
            };
            syncTimes();
            const unsub=face.subscribe(syncTimes);
            return ()=>{ try{ unsub(); }catch(e){} };
          }catch(e){
            setTurnTimes(null);
          }
        },[session]);
        // 已加载轮次 DOM 时间缓存（内存 Map + sessionStorage，会话隔离，键 umtl:tt:<sid>:<turn>）
        const cachedTurnTimesRef=React.useRef(new Map());
        // scan 为空依赖 useCallback，用 ref 镜像当前会话 id 避免闭包过期
        const currentSessionIdRef=React.useRef(currentSessionId);
        React.useEffect(()=>{ currentSessionIdRef.current=currentSessionId; },[currentSessionId]);

        // 会话切换时清理临时状态；旧会话的异步 loadThrough/分页不能影响新会话
        React.useEffect(()=>{
          seekingKeyRef.current=null;
          setSeekingKey(null);
          dragTargetRef.current=null;
          pointerDownRef.current=null;
          draggingRef.current=false;
          didDragRef.current=false;
          suppressClickRef.current=false;
          if(dragRafRef.current){ window.cancelAnimationFrame(dragRafRef.current); dragRafRef.current=0; }
          suppressTipRef.current=false;
          setHudOn(false);
          setHoveredKey(null);
          setHasMore(false);
          hasMoreRef.current=false;
          setOlderLoading(false);
          setActiveKey(null);
          setScrollReady(false);
          setVisible(false);
          setRunningState(null);
          try{ cachedTurnTimesRef.current = loadSessionTurnTimes(currentSessionId, new Map()); }catch(e){ cachedTurnTimesRef.current=new Map(); }
          setTurnTimes(null);
          setTipData(null);
          if(openTimerRef.current){ window.clearTimeout(openTimerRef.current); openTimerRef.current=null; }
          if(hideTimerRef.current){ window.clearTimeout(hideTimerRef.current); hideTimerRef.current=null; }
          try{ if(followRafRef.current){ window.cancelAnimationFrame(followRafRef.current); followRafRef.current=0; } }catch(e){}
          endPreviewSession();
        },[currentSessionId]);

        // 组件卸载时清理所有定时器/rAF，避免插件热重载后旧任务继续写 DOM
        React.useEffect(()=>()=>{
          try{
            if(openTimerRef.current) window.clearTimeout(openTimerRef.current);
            if(hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
            if(followRafRef.current) window.cancelAnimationFrame(followRafRef.current);
            if(dragRafRef.current) window.cancelAnimationFrame(dragRafRef.current);
            openTimerRef.current=null; hideTimerRef.current=null; followRafRef.current=0; dragRafRef.current=0;
          }catch(e){}
        },[]);

        // 接管官方标尺 body 类名联动
        React.useEffect(()=>{
          const shouldTakeover = enabledState && takeoverOfficialState;
          if(shouldTakeover){
            document.body.classList.add('umtl-takeover-official');
          } else {
            document.body.classList.remove('umtl-takeover-official');
          }
          return ()=>{
            document.body.classList.remove('umtl-takeover-official');
          };
        },[enabledState, takeoverOfficialState]);

        // configForms 订阅主源，storage 仅作降级；服务晚到时轮询重试，避免永久退回 localStorage。
        React.useEffect(()=>{
          let disposed=false;
          let unsub=null;
          let retry=null;
          const sync = ()=>{
            try{
              const raw = formValue();
              if(raw){
                const v = {
                  enabled: unvol(raw.enabled),
                  position: unvol(raw.position),
                  takeoverOfficial: unvol(raw.takeoverOfficial),
                  prefixEnabled: unvol(raw.prefixEnabled),
                  prefixPatterns: unvol(raw.prefixPatterns)
                };
                tryMigrate(v);
                if(typeof v.enabled==='boolean') setEnabledState(v.enabled);
                if(v.position==="left"||v.position==="right") setPositionState(v.position);
                if(typeof v.takeoverOfficial==='boolean') setTakeoverOfficialState(v.takeoverOfficial);
                if(typeof v.prefixEnabled==='boolean') setPrefixEnabledState(v.prefixEnabled);
                if(typeof v.prefixPatterns==='string') setPrefixPatternsState(v.prefixPatterns);
              }
            }catch(e){}
          };
          const bind=()=>{
            const f=getForm();
            if(!f) return false;
            try{
              sync();
              unsub=f.subscribe(sync);
              return true;
            }catch(e){ return false; }
          };
          if(!bind()){
            retry=window.setInterval(()=>{
              if(disposed){ return; }
              if(bind()){
                window.clearInterval(retry); retry=null;
              }
            },500);
          }
          // 书签始终监听 storage（configForms 订阅不覆盖 localStorage 书签）
          const onStorage=(e)=>{
            if(e.key==='umtl:bookmarks' || e.key===null) setBookmarksMap(getBookmarksMapFromStorage());
            if(unsub) return;
            if(e.key==='umtl:enabled' || e.key===null) setEnabledState(isEnabled());
            if(e.key==='umtl:position' || e.key===null){
              try{ const p=window.localStorage.getItem('umtl:position'); if(p==="left"||p==="right") setPositionState(p); }catch(e){}
            }
            if(e.key==='umtl:takeoverOfficial' || e.key===null) setTakeoverOfficialState(getTakeoverOfficialFromScope());
            if(e.key==='umtl:prefixEnabled' || e.key===null) setPrefixEnabledState(getPrefixEnabledFromScope());
            if(e.key==='umtl:prefixPatterns' || e.key===null) setPrefixPatternsState(getPrefixPatternsFromScope());
          };
          window.addEventListener('storage', onStorage);
          return ()=>{
            disposed=true;
            if(retry) window.clearInterval(retry);
            try{ if(unsub) unsub(); }catch(e){}
            window.removeEventListener('storage', onStorage);
          };
        },[]);

        React.useEffect(()=>{ activeRef.current=activeKey; },[activeKey]);
        React.useEffect(()=>{ markersRef.current=markers; },[markers]);
        React.useEffect(()=>{ prevCountRef.current=markers.length; },[markers.length]);
        // 首次可见时置位 stagger，之后不再重播
        React.useEffect(()=>{ if(visible && !enteredRef.current){ enteredRef.current=true; setEntered(true); } },[visible]);
        // 短会话立即就绪，长会话等待容器可滚
        React.useEffect(()=>{
          if(markers.length===0 || !enabledState){ setScrollReady(false); return; }
          if(markers.length<=16){
            setScrollReady(true);
            return;
          }
          let cancelled=false;
          ensureScrollRoot(1200, currentSessionId).then(r=>{
            if(cancelled) return;
            window.setTimeout(()=>{ if(!cancelled) setScrollReady(true); }, 80);
          }).catch(()=>{ if(!cancelled) setScrollReady(true); });
          return ()=>{ cancelled=true; };
        },[markers.length, enabledState, currentSessionId]);

        // 位置跟踪、侧边栏自适应与官方标尺避让
        React.useEffect(()=>{
          let lastLeft=-1;
          let lastDur=-1;
          let lastEase='';
          let lastRight=-1;
          const RIGHT_SEL = ['[data-side="right"]','[class*="rightSidebar"]','[class*="RightSidebar"]','[class*="sidebar"][class*="right"]','aside[class*="right"]'];
          const upd=(force)=>{
            if(document.hidden) return;
            try{
              const conv=getConversationScope(currentSessionId);
              if(!conv) return;
              let col=conv.closest(SEL.FLOW)||conv.parentElement||conv;
              const rect=col.getBoundingClientRect();
              const isRight = positionState==="right";
              try{ if(rootRef.current) rootRef.current.classList.toggle('is-right', isRight); }catch(e){}
              if(isRight){
                let desired=Math.round(window.innerWidth - rect.right + 12);
                // 右侧边栏避让
                try{
                  let rightBarWidth=0;
                  for(let i=0;i<RIGHT_SEL.length;i++){
                    const el=document.querySelector(RIGHT_SEL[i]);
                    if(!el) continue;
                    const r=el.getBoundingClientRect();
                    const cs=window.getComputedStyle(el);
                    if(cs.display==='none' || r.width<=0) continue;
                    if(r.left < window.innerWidth - 8 && r.top < window.innerHeight*0.6){
                      rightBarWidth = Math.max(rightBarWidth, window.innerWidth - Math.round(r.left));
                    }
                  }
                  if(rightBarWidth>0) desired = Math.max(12, desired + rightBarWidth - 12);
                }catch(e){}
                // 右侧模式且未接管官方标尺时，自动向内避让官方标尺
                if(!takeoverOfficialRef.current){
                  try{
                    const officialNav=document.querySelector('nav[aria-label="轮次导航"], nav[aria-label="Turn navigation"]');
                    if(officialNav){
                      const r=officialNav.getBoundingClientRect();
                      const cs=window.getComputedStyle(officialNav);
                      if(cs.display!=='none' && r.width>0){
                        desired += 32;
                      }
                    }
                  }catch(e){}
                }
                const clamped=Math.max(8,Math.min(desired, window.innerWidth-200));
                if(!force && clamped===lastRight) return;
                lastRight=clamped; lastLeft=-1;
                document.documentElement.style.setProperty('--umtl-right',clamped+'px');
              } else {
                const desired=Math.round(rect.left+12);
                const clamped=Math.max(8,Math.min(desired, window.innerWidth-56));
                if(!force && clamped===lastLeft) return;
                lastLeft=clamped; lastRight=-1;
                document.documentElement.style.setProperty('--umtl-left',clamped+'px');
              }
            }catch(e){}
          };
          const syncDur=()=>{
            try{
              const sb=document.querySelector('[class*="sidebar"]')||document.querySelector('[class*="Sidebar"]')||document.querySelector('aside');
              if(!sb) return;
              const cs=window.getComputedStyle(sb);
              const dRaw=(cs.transitionDuration||'0.22s').split(',')[0].trim();
              let ms=220;
              if(dRaw.includes('ms')) ms=parseFloat(dRaw);
              else if(dRaw.includes('s')) ms=parseFloat(dRaw)*1000;
              if(!isFinite(ms)||ms<50) ms=220;
              const eRaw=cs.transitionTimingFunction||'cubic-bezier(.22,1,.36,1)';
              const m=eRaw.match(/cubic-bezier\(.*?\)|steps\(.*?\)|[^,]+/);
              const ease=m?m[0].trim():eRaw.split(',')[0].trim();
              if(ms!==lastDur){ lastDur=ms; document.documentElement.style.setProperty('--umtl-dur',Math.round(ms)+'ms'); }
              if(ease!==lastEase){ lastEase=ease; document.documentElement.style.setProperty('--umtl-ease',ease); }
            }catch(e){}
          };
          syncDur();
          upd();
          const ro=new ResizeObserver(()=> window.requestAnimationFrame(upd));
          const conv=getConversationScope(currentSessionId);
          if(conv) ro.observe(conv);
          const flowEl=conv ? conv.querySelector(SEL.FLOW) : null;
          if(flowEl) ro.observe(flowEl);
          const sidebar=document.querySelector('[class*="sidebar"]')||document.querySelector('[class*="Sidebar"]')||document.querySelector('aside');
          if(sidebar) try{ ro.observe(sidebar); }catch(e){}
          try{ ro.observe(document.body); }catch(e){}
          const onResize=()=> window.requestAnimationFrame(upd);
          window.addEventListener('resize',onResize);
          let rafId=null;
          let rafActive=false;
          let endTimer=null;
          const parseDur=()=>{
            try{
              const durStr=window.getComputedStyle(document.documentElement).getPropertyValue('--umtl-dur')||'220ms';
              const d=durStr.trim().split(',')[0].trim();
              if(d.includes('ms')) return parseFloat(d);
              if(d.includes('s')) return parseFloat(d)*1000;
            }catch(e){}
            return 220;
          };
          const finishPush=()=>{
            if(!rafActive) return;
            rafActive=false;
            if(rafId) window.cancelAnimationFrame(rafId);
            rafId=null;
            if(endTimer){ window.clearTimeout(endTimer); endTimer=null; }
            try{
              if(rootRef.current) rootRef.current.classList.add('umtl-pushing');
              upd(true);
              window.requestAnimationFrame(()=> window.requestAnimationFrame(()=>{
                if(rootRef.current) rootRef.current.classList.remove('umtl-pushing');
              }));
            }catch(e){
              if(rootRef.current) rootRef.current.classList.remove('umtl-pushing');
            }
          };
          const startPush=()=>{
            syncDur();
            if(rafActive) return;
            rafActive=true;
            if(rootRef.current) rootRef.current.classList.add('umtl-pushing');
            const loop=()=>{ if(!rafActive) return; upd(); rafId=window.requestAnimationFrame(loop); };
            rafId=window.requestAnimationFrame(loop);
            const ms=parseDur();
            endTimer=window.setTimeout(finishPush, (isFinite(ms)?ms:220)+40);
          };
          const onTrans=(e)=>{
            if(!e.target || !e.target.closest) return;
            if(!e.target.closest('[class*="sidebar"], [class*="Sidebar"], aside, [data-side="right"]')) return;
            startPush();
          };
          document.addEventListener('transitionstart', onTrans);
          document.addEventListener('transitionrun', onTrans);
          const onTransEnd=(e)=>{
            if(e && e.propertyName && !/transform|width|left|margin/.test(e.propertyName)) return;
            if(!rafActive) return;
            if(e && e.target && e.target.closest){
              if(!e.target.closest('[class*="sidebar"], [class*="Sidebar"], aside, [data-side="right"]')) return;
            }
            finishPush();
          };
          document.addEventListener('transitionend', onTransEnd);
          document.addEventListener('transitioncancel', onTransEnd);
          const onClick=(e)=>{
            const t=e.target;
            if(t && t.closest){
              const b=t.closest('button');
              if(b){
                const txt=(b.textContent||'')+(b.getAttribute('aria-label')||'');
                if(/侧边|收起|展开|sidebar/i.test(txt)){
                  if(rafActive) return;
                  window.requestAnimationFrame(startPush);
                }
              }
            }
          };
          document.addEventListener('click', onClick);
          return ()=>{ ro.disconnect(); window.removeEventListener('resize',onResize); document.removeEventListener('transitionstart', onTrans); document.removeEventListener('transitionrun', onTrans); document.removeEventListener('transitionend', onTransEnd); document.removeEventListener('transitioncancel', onTransEnd); document.removeEventListener('click', onClick); if(rafId) window.cancelAnimationFrame(rafId); if(endTimer) window.clearTimeout(endTimer); };
        },[positionState, takeoverOfficialState, currentSessionId]);

        // 双核扫描引擎：turnOutline 投影与 DOM 智能融合
        const scan=React.useCallback(()=>{
          try{
            const curOutline = outlineRef.current;
            const curSession = currentSessionRef.current;
            const curSessionId = currentSessionIdRef.current;
            if(!curSessionId){
              if(markersRef.current.length){ markersRef.current=[]; setMarkers([]); }
              return;
            }
            const scanRoot = getScrollRoot(curSessionId);
            const isRunning = runningStateRef.current===true || (runningStateRef.current===null && !!(scanRoot && scanRoot.querySelector('[role="status"][aria-live="polite"]')));

            // 模式 A：turnOutline 投影存在且非空（原生双核大纲驱动，支持未加载药丸）
            if(curOutline && Array.isArray(curOutline) && curOutline.length>0){
              if(!scanRoot) return;
              const turnRows = indexTurnRows(scanRoot);
              const out=[];
              for(let i=0;i<curOutline.length;i++){
                const entry=curOutline[i];
                if(!entry || typeof entry.turn!=='number') continue;
                const cleanPrompt = cleanOutlinePrompt(entry.prompt || '');
                const bucket = turnRows.get(entry.turn) || null;
                const domEl = bucket ? (bucket.user || bucket.steering) : null;
                const turnNum = entry.turn;
                if(domEl){
                  // 已在 DOM 中挂载加载（Loaded）；只接受 user/steering 行，绝不把 assistant 行当提问
                  const key = domEl.getAttribute('data-chat-anchor-key') || ('turn_' + turnNum);
                  const bookmarkKey = getBookmarkKey(curSessionId, key);
                  const rawText = extractText(domEl);
                  const text = cleanOutlinePrompt(rawText);
                  const preview = text.slice(0,300) || cleanPrompt || ('第 ' + turnNum + ' 轮');
                  const manualVal = bookmarksMapRef.current ? (bookmarksMapRef.current.get(bookmarkKey) ?? bookmarksMapRef.current.get(key) ?? bookmarksMapRef.current.get(getBookmarkKey(curSessionId, 'turn_' + turnNum)) ?? bookmarksMapRef.current.get('turn_' + turnNum)) : undefined;
                  let bm = false;
                  if(typeof manualVal === 'boolean'){
                    bm = manualVal;
                  } else if(domEl.hasAttribute('data-bookmarked') || !!domEl.querySelector('[data-bookmark]')){
                    bm = true;
                  } else {
                    const cleanTarget = (text || cleanPrompt || '').trim();
                    bm = checkPrefixMilestone(cleanTarget, prefixEnabledRef.current, prefixPatternsRef.current);
                  }
                  // 已加载分支：DOM 时间优先，其次投影/缓存兜底；DOM 有效时间写回缓存
                  const domTime = extractTime(domEl);
                  const projTime = turnTimesRef.current ? turnTimesRef.current[String(turnNum)] : undefined;
                  const time = domTime || projTime || cachedTurnTimesRef.current.get(turnNum) || '';
                  if(domTime && curSessionId){
                    try{
                      cachedTurnTimesRef.current.set(turnNum, domTime);
                      sessionStorage.setItem('umtl:tt:' + curSessionId + ':' + turnNum, domTime);
                    }catch(_){}
                  }
                  const status = (isRunning && i === curOutline.length - 1) ? '进行中' : '已完成';
                  let images = [];
                  try{
                    const imgs = domEl.querySelectorAll('img');
                    for(let j=0;j<imgs.length;j++){
                      try{
                        const src = imgs[j].getAttribute('src') || imgs[j].src || '';
                        if(!isUserContentImage(imgs[j], src)) continue;
                        images.push(src);
                        if(images.length >= 4) break;
                      }catch(_){}
                    }
                  }catch(e){}
                  // 已加载轮次优先用 assistant DOM 的回答，比投影的 120 字上限更完整
                  let response = '';
                  try{
                    if(bucket.assistant) response = cleanOutlinePrompt(extractText(bucket.assistant)).slice(0,300);
                  }catch(_){}
                  if(!response) response = entry.response || '';
                  out.push({
                    key,
                    bookmarkKey,
                    turn: turnNum,
                    seq: entry.seq,
                    isUnloaded: false,
                    preview,
                    response,
                    time,
                    status,
                    hasImage: images.length > 0,
                    images,
                    bm
                  });
                } else {
                  // 尚未加载到 DOM 中（Unloaded）
                  const key = 'turn_' + turnNum;
                  const bookmarkKey = getBookmarkKey(curSessionId, key);
                  const manualBm = bookmarksMapRef.current ? (bookmarksMapRef.current.get(bookmarkKey) ?? bookmarksMapRef.current.get(key)) : undefined;
                  let bm = false;
                  if(typeof manualBm === 'boolean'){
                    bm = manualBm;
                  } else {
                    bm = checkPrefixMilestone(cleanPrompt, prefixEnabledRef.current, prefixPatternsRef.current);
                  }
                  // 未加载分支：投影 > 内存缓存 > prompt 尾部时间；sessionStorage 已在会话切换时预加载到内存
                  const projTimeUn = turnTimesRef.current ? turnTimesRef.current[String(turnNum)] : undefined;
                  const promptTime = extractPromptTime(entry.prompt || '');
                  const unloadedTime = projTimeUn || cachedTurnTimesRef.current.get(turnNum) || promptTime || '';
                  out.push({
                    key,
                    bookmarkKey,
                    turn: turnNum,
                    seq: entry.seq,
                    isUnloaded: true,
                    preview: cleanPrompt || ('第 ' + turnNum + ' 轮'),
                    response: entry.response || '',
                    time: unloadedTime,
                    status: '未加载',
                    hasImage: false,
                    images: [],
                    bm
                  });
                }
              }
              if(hasMoreRef.current !== false){
                hasMoreRef.current = false;
                setHasMore(false);
              }
              umtlLog('scan outline fusion', { count: out.length, unloaded: out.filter(x=>x.isUnloaded).length });
              if(!markersEqual(markersRef.current,out)){ markersRef.current=out; setMarkers(out); }
              return;
            }

            // 模式 B：纯 DOM 扫描降级（旧版 DSH 或无投影环境）
            const scope = getConversationScope(curSessionId);
            if(!scope) return;
            const all=Array.from(scope.querySelectorAll(SEL.ANCHOR));
            const userEls=all.filter(el=>{
              try{ if(el.closest('[hidden]')) return false; }catch(_){}
              const kind=el.getAttribute('data-chat-flow-kind')||'';
              return (kind==='user'||kind==='steering') && !!el.getAttribute('data-chat-anchor-key');
            });
            const seen=new Map(); const out=[];
            for(let i=0;i<userEls.length;i++){
              const el=userEls[i];
              const key=el.getAttribute('data-chat-anchor-key');
              if(!key || seen.has(key)) continue;
              seen.set(key,true);
              const bookmarkKey=getBookmarkKey(curSessionId,key);
              const rawText=extractText(el);
              const text=cleanOutlinePrompt(rawText);
              const preview=text.slice(0,300);
              const turnForBookmark=el.getAttribute('data-chat-turn');
              const manualVal = bookmarksMapRef.current ? (bookmarksMapRef.current.get(bookmarkKey) ?? bookmarksMapRef.current.get(key) ?? (turnForBookmark!==null ? bookmarksMapRef.current.get(getBookmarkKey(curSessionId,'turn_'+turnForBookmark)) : undefined)) : undefined;
              let bm = false;
              if(typeof manualVal === 'boolean'){
                bm = manualVal;
              } else if(el.hasAttribute('data-bookmarked') || !!el.querySelector('[data-bookmark]')){
                bm = true;
              } else {
                bm = checkPrefixMilestone(text, prefixEnabledRef.current, prefixPatternsRef.current);
              }
              const time=extractTime(el);
              const status=isRunning && i===userEls.length-1 ? '进行中' : '已完成';
              const turnAttr=el.getAttribute('data-chat-turn');
              const turnNum=turnAttr!==null?Number(turnAttr):NaN;
              // 纯 DOM 降级分支同样缓存有效时间，供后续未加载分支复用
              try{
                if(time && Number.isSafeInteger(turnNum) && curSessionId){
                  cachedTurnTimesRef.current.set(turnNum, time);
                  sessionStorage.setItem('umtl:tt:' + curSessionId + ':' + turnNum, time);
                }
              }catch(_){}
              let response='';
              if(turnAttr!==null && scope){
                try{
                  const asstEl=scope.querySelector('[data-chat-turn="'+CSS.escape(turnAttr)+'"][data-chat-flow-kind="assistant"]') ||
                               scope.querySelector('[data-chat-turn="'+CSS.escape(turnAttr)+'"][data-turn-process-answer]');
                  if(asstEl) response=extractText(asstEl).slice(0,300);
                }catch(_){}
              }
              let images=[];
              try{
                const imgs=el.querySelectorAll('img');
                for(let j=0;j<imgs.length;j++){
                  try{
                    const src=imgs[j].getAttribute('src')||imgs[j].src||'';
                    if(!isUserContentImage(imgs[j], src)) continue;
                    images.push(src);
                    if(images.length>=4) break;
                  }catch(_){}
                }
              }catch(e){}
              const hasImage=images.length>0;
              out.push({key,bookmarkKey,turn:Number.isSafeInteger(turnNum)?turnNum:undefined,preview,response,bm,time,status,hasImage,images,isUnloaded:false});
            }
            const hm=isOlderBtn(curSessionId);
            if(hm!==hasMoreRef.current){ hasMoreRef.current=hm; setHasMore(hm); }
            if(hm){
              out.unshift({key:'__older__',bookmarkKey:'__older__',isOlder:true,isUnloaded:false,preview:'加载更早轮次',bm:false,time:'',status:'',hasImage:false,images:[]});
            }
            umtlLog('scan dom fallback', {count: out.length, hasMore: hm, first: out[0]?.key, last: out[out.length-1]?.key});
            if(!markersEqual(markersRef.current,out)){ markersRef.current=out; setMarkers(out); }
          }catch(e){}
        },[]);

        const pollScan=React.useCallback((max=8, interval=260)=>{
          return new Promise(resolve=>{
            let lastLen=markersRef.current.length, stable=0, lastHasMore=hasMoreRef.current, count=0;
            const step=()=>{
              try{ scan(); }catch(e){}
              const curLen=markersRef.current.length; const curHasMore=hasMoreRef.current;
              if(curLen===lastLen && curHasMore===lastHasMore) stable++; else stable=0;
              lastLen=curLen; lastHasMore=curHasMore; count++;
              if(stable>=2 || count>=max) return resolve();
              window.setTimeout(step, interval);
            };
            window.setTimeout(step, interval);
          });
        },[scan]);

        React.useEffect(()=>{ scan(); },[scan, bookmarksMap, prefixEnabledState, prefixPatternsState, outline, turnTimes, runningState, currentSessionId]);
        React.useEffect(()=>{
          scan();
          try{ if(window.requestAnimationFrame) window.requestAnimationFrame(scan); }catch(e){}
          const t1=window.setTimeout(scan,80);
          const t2=window.setTimeout(scan,250);
          let debounce=null;
          const debouncedScan=()=>{
            if(debounce) window.clearTimeout(debounce);
            debounce=window.setTimeout(()=>{ if(!document.hidden){ scan(); } debounce=null; },150);
          };
          const target=getScrollRoot(currentSessionId)||document.body;
          const mo=new MutationObserver(debouncedScan);
          mo.observe(target,{childList:true,subtree:true,characterData:true});
          const flowEl=target && target.querySelector ? target.querySelector(SEL.FLOW) : null;
          if(flowEl) try{ mo.observe(flowEl,{childList:true,subtree:true}); }catch(e){}
          return ()=>{ mo.disconnect(); window.clearTimeout(t1); window.clearTimeout(t2); if(debounce) window.clearTimeout(debounce); };
        },[scan,currentSessionId]);

        React.useEffect(()=>{
          const check=()=>{
            if(document.hidden) return;
            const count=markersRef.current.length;
            let isBlank=false;
            const conv=getConversationScope(currentSessionId);
            if(!conv) isBlank=true;
            const hero=document.querySelector('[class*="hero"]')||document.querySelector('[data-phase="hero"]');
            if(hero && count===0) isBlank=true;
            let heightOk=true;
            if(rootRef.current){ const h=rootRef.current.getBoundingClientRect().height; if(h>0 && h<36 && count>2) heightOk=false; else if(h===0 && count>0) heightOk=true; }
            if(!conv) heightOk=false;
            const show=count>=1 && !isBlank && enabledState;
            const readyShow=show && scrollReady && heightOk;
            umtlLog('check', {count, isBlank, heightOk, h: rootRef.current?rootRef.current.getBoundingClientRect().height:0, scrollReady, enabledState, show, readyShow, hasMore: hasMoreRef.current});
            setVisible(readyShow);
          };
          check();
          const t=window.setTimeout(check,120);
          const ro2=new ResizeObserver(()=>{ if(!document.hidden) check(); });
          if(rootRef.current) ro2.observe(rootRef.current);
          const sp=getConversationScope(currentSessionId);
          if(sp) ro2.observe(sp);
          const onResize=()=>{ if(!document.hidden) check(); };
          window.addEventListener('resize',onResize);
          let iv=null;
          const startIv=()=>{
            if(iv) return;
            iv=window.setInterval(()=>{
              if(document.hidden) return;
              scan();
              check();
              if(getForm()){
                try{
                  const raw=formValue();
                  if(raw){
                    const en=unvol(raw.enabled); if(typeof en==='boolean') setEnabledState(en);
                    const ps=unvol(raw.position); if(ps==="left"||ps==="right") setPositionState(ps);
                    const to=unvol(raw.takeoverOfficial); if(typeof to==='boolean') setTakeoverOfficialState(to);
                    const pe=unvol(raw.prefixEnabled); if(typeof pe==='boolean') setPrefixEnabledState(pe);
                    const pp=unvol(raw.prefixPatterns); if(typeof pp==='string') setPrefixPatternsState(pp);
                  }
                }catch(e){}
              } else {
                setEnabledState(isEnabled());
                setTakeoverOfficialState(getTakeoverOfficialFromScope());
              }
            },2000);
          };
          const stopIv=()=>{ if(iv){ window.clearInterval(iv); iv=null; } };
          startIv();
          const onVisibilityChange=()=>{
            if(document.hidden){ stopIv(); }
            else {
              startIv(); scan(); check();
              if(getForm()){
                try{
                  const raw=formValue();
                  if(raw){
                    const en=unvol(raw.enabled); if(typeof en==='boolean') setEnabledState(en);
                    const ps=unvol(raw.position); if(ps==="left"||ps==="right") setPositionState(ps);
                    const to=unvol(raw.takeoverOfficial); if(typeof to==='boolean') setTakeoverOfficialState(to);
                    const pe=unvol(raw.prefixEnabled); if(typeof pe==='boolean') setPrefixEnabledState(pe);
                    const pp=unvol(raw.prefixPatterns); if(typeof pp==='string') setPrefixPatternsState(pp);
                  }
                }catch(e){}
              } else {
                setEnabledState(isEnabled());
                setTakeoverOfficialState(getTakeoverOfficialFromScope());
              }
            }
          };
          document.addEventListener('visibilitychange', onVisibilityChange);
          return ()=>{ window.clearTimeout(t); stopIv(); ro2.disconnect(); window.removeEventListener('resize',onResize); document.removeEventListener('visibilitychange', onVisibilityChange); };
        },[markers.length, enabledState, scan, scrollReady, currentSessionId]);

        // 视口阅读线跟手算法 (Active Turn)：高精度比对阅读线覆盖的 [data-chat-turn]
        React.useEffect(()=>{
          const root=getScrollRoot(currentSessionId);
          if(!root) return;
          let frameId=null;
          const onScroll=()=>{
            if(frameId!==null) return;
            frameId=window.requestAnimationFrame(()=>{
              frameId=null;
              try{
                const mList=markersRef.current;
                if(!mList||!mList.length) return;
                // 滚动触底检测
                if(root.scrollHeight - root.scrollTop - root.clientHeight <= 25){
                  const lastReal=mList.filter(m=>!m.isOlder).at(-1);
                  if(lastReal && lastReal.key!==activeRef.current){
                    setActiveKey(lastReal.key);
                  }
                  return;
                }
                const readingLine=root.getBoundingClientRect().top + Math.min(96, root.clientHeight * 0.2);
                let hitTurn=null;
                if(typeof document.elementsFromPoint==='function' && root.clientWidth>0){
                  const rect=root.getBoundingClientRect();
                  const midX=rect.left + rect.width / 2;
                  const els=document.elementsFromPoint(midX, readingLine);
                  for(let i=0;i<els.length;i++){
                    const row=els[i] instanceof HTMLElement ? els[i].closest('[data-chat-turn]') : null;
                    if(row && root.contains(row)){
                      const t=Number(row.getAttribute('data-chat-turn'));
                      if(Number.isSafeInteger(t)){ hitTurn=t; break; }
                    }
                  }
                }
                if(hitTurn===null){
                  const turnEls=root.querySelectorAll('[data-chat-turn]');
                  for(let i=0;i<turnEls.length;i++){
                    const el=turnEls[i];
                    if(el.getBoundingClientRect().top > readingLine) break;
                    const t=Number(el.getAttribute('data-chat-turn'));
                    if(Number.isSafeInteger(t)) hitTurn=t;
                  }
                }
                if(hitTurn!==null){
                  const match=mList.find(m=>m.turn===hitTurn);
                  if(match && match.key!==activeRef.current){
                    setActiveKey(match.key);
                    return;
                  }
                  const hitRows=indexTurnRows(root).get(hitTurn);
                  const turnDom=hitRows ? (hitRows.user || hitRows.steering) : null;
                  if(turnDom){
                    const k=turnDom.getAttribute('data-chat-anchor-key');
                    if(k && k!==activeRef.current) setActiveKey(k);
                  }
                }
              }catch(e){}
            });
          };
          root.addEventListener('scroll', onScroll, { passive: true });
          return ()=>{
            root.removeEventListener('scroll', onScroll);
            if(frameId!==null) window.cancelAnimationFrame(frameId);
          };
        },[markers.length, currentSessionId]);

        // IntersectionObserver 辅助锚定（短对话或无 turn 属性时的双重保险）
        React.useEffect(()=>{
          if(!markers.length) return;
          const root=getScrollRoot(currentSessionId);
          const scope=getConversationScope(currentSessionId);
          if(!scope) return;
          const allEls=Array.from(scope.querySelectorAll(SEL.ANCHOR));
          const userEls=allEls.filter(el=>el.getAttribute('data-chat-flow-kind')==='user'||el.getAttribute('data-chat-flow-kind')==='steering');
          if(!userEls.length) return;
          const obs=new IntersectionObserver((entries)=>{
            let best=null;
            const visible=entries.filter(e=>e.isIntersecting);
            if(visible.length){ visible.sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top); best=visible[0].target; }
            else {
              let min=Infinity; const baseTop=root ? root.getBoundingClientRect().top + root.clientHeight*0.3 : window.innerHeight*0.3;
              for(const el of userEls){ const r=el.getBoundingClientRect(); const d=Math.abs(r.top-baseTop); if(d<min){min=d; best=el;} }
            }
            if(best){ const k=best.getAttribute('data-chat-anchor-key'); if(k && k!==activeRef.current) setActiveKey(k); }
          },{root:root, threshold:[0,0.2,0.5,1], rootMargin:'-22% 0px -58% 0px'});
          userEls.forEach(el=>obs.observe(el));
          return ()=>obs.disconnect();
        },[markers,currentSessionId]);

        const prefersReduced=()=>{ try{ return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }catch(e){ return false; } };
        // 标准定位方法：支持 anchorKey 与 turn_N；turn_N 只解析 user/steering 行
        const locateKey=(key, sessionId=currentSessionIdRef.current)=>{
          if(!key) return null;
          try{
            const scope0=getConversationScope(sessionId);
            if(!scope0 && sessionId && document.querySelector(SEL.SESSION)) return null;
            const scope=scope0 || document;
            if(typeof key==='string' && key.startsWith('turn_')){
              const turn=Number(key.slice(5));
              const bucket=indexTurnRows(scope).get(turn);
              return bucket ? (bucket.user || bucket.steering) : null;
            }
            return scope.querySelector('[data-chat-anchor-key="'+CSS.escape(key)+'"]');
          }catch(e){ return null; }
        };

        // ===== T2 tooltip：sticky 常驻 + 分级延迟 + rAF 跟随 =====
        const stopFollow=()=>{ if(followRafRef.current){ window.cancelAnimationFrame(followRafRef.current); followRafRef.current=0; } };
        const hideTip=()=>{
          if(openTimerRef.current){ window.clearTimeout(openTimerRef.current); openTimerRef.current=null; }
          tipVisibleRef.current=false;
          setTipVisible(false);
          stopFollow();
        };
        const endPreviewSession=()=>{
          setHoveredKey(null);
          hideTip();
        };
        const placeTip=(key)=>{
          try{
            const el=rootRef.current?rootRef.current.querySelector('[data-key="'+CSS.escape(key)+'"]'):null;
            if(!el) return null;
            const rect=el.getBoundingClientRect();
            const m=markersRef.current.find(z=>z.key===key);
            const GAP=10, estW=240;
            const centerY=rect.top+rect.height/2;
            const len=m?(m.preview||'').length:0;
            let estH=66;
            if(len>120) estH=150;
            else if(len>60) estH=115;
            else if(len>24) estH=90;
            let left, isLeft;
            if(positionState==="right"){
              left=rect.left-estW-GAP; isLeft=false;
              if(left<12){ left=rect.right+GAP; isLeft=true; }
            } else {
              left=rect.right+GAP; isLeft=true;
              if(left+estW>window.innerWidth-12){ left=rect.left-estW-GAP; isLeft=false; }
            }
            let top=centerY-estH/2;
            if(top<12) top=12;
            if(top+estH>window.innerHeight-12) top=Math.max(12,window.innerHeight-estH-12);
            return {
              key,
              bookmarkKey:m?m.bookmarkKey:undefined,
              turn:m?m.turn:undefined,
              seq:m?m.seq:undefined,
              isUnloaded:m?m.isUnloaded:false,
              preview:m?m.preview:'',
              response:m?m.response:'',
              bm:m?m.bm:false,
              time:m?m.time:'',
              status:m?m.status:'',
              hasImage:m?m.hasImage:false,
              isOlder:m?m.isOlder:false,
              images:m?(m.images||[]):[],
              left,
              top,
              isLeft
            };
          }catch(e){ return null; }
        };
        const startFollow=(key)=>{
          stopFollow();
          const step=()=>{
            followRafRef.current=0;
            if(!tipVisibleRef.current || document.hidden || suppressTipRef.current) return;
            const tip=tipRef.current;
            if(!tip) return;
            let el=null;
            try{ el=rootRef.current?rootRef.current.querySelector('[data-key="'+CSS.escape(key)+'"]'):null; }catch(_){}
            if(!el){ hideTip(); return; }
            try{
              const rect=el.getBoundingClientRect();
              const GAP=10, estW=240;
              const h=tip.offsetHeight||80;
              let left, isLeft;
              if(positionState==="right"){
                left=rect.left-estW-GAP; isLeft=false;
                if(left<12){ left=rect.right+GAP; isLeft=true; }
              } else {
                left=rect.right+GAP; isLeft=true;
                if(left+estW>window.innerWidth-12){ left=rect.left-estW-GAP; isLeft=false; }
              }
              const centerY=rect.top+rect.height/2;
              let top=centerY-h/2;
              if(top<12) top=12;
              if(top+h>window.innerHeight-12) top=Math.max(12,window.innerHeight-h-12);
              tip.style.left=Math.round(left)+'px';
              tip.style.top=Math.round(top)+'px';
              tip.style.transformOrigin=isLeft?'left center':'right center';
            }catch(_){}
            followRafRef.current=window.requestAnimationFrame(step);
          };
          followRafRef.current=window.requestAnimationFrame(step);
        };
        const openTip=(key)=>{
          const p=placeTip(key);
          if(!p){ hideTip(); return; }
          setTipData(p);
          tipVisibleRef.current=true;
          setTipVisible(true);
          startFollow(key);
        };
        React.useEffect(()=>{
          if(!hoveredKey) return;
          if(draggingRef.current || suppressTipRef.current) return;
          if(hideTimerRef.current){ window.clearTimeout(hideTimerRef.current); hideTimerRef.current=null; }
          if(openTimerRef.current) window.clearTimeout(openTimerRef.current);
          const k=hoveredKey;
          const delay=tipVisibleRef.current?60:150;
          openTimerRef.current=window.setTimeout(()=>{
            openTimerRef.current=null;
            if(draggingRef.current || suppressTipRef.current) return;
            openTip(k);
          },delay);
          return ()=>{ if(openTimerRef.current){ window.clearTimeout(openTimerRef.current); openTimerRef.current=null; } };
        },[hoveredKey]);
        React.useEffect(()=>{
          if(!tipVisible) return;
          const onEsc=(e)=>{ if(e.key==='Escape'){ endPreviewSession(); } };
          document.addEventListener('keydown',onEsc);
          return ()=>document.removeEventListener('keydown',onEsc);
        },[tipVisible]);
        React.useEffect(()=>{
          if(tipData && tipVisibleRef.current && !markers.some(z=>z.key===tipData.key)) hideTip();
        },[markers]);
        React.useEffect(()=>{ if(!enabledState) hideTip(); },[enabledState]);

        // ===== T3 onboarding：一次性提示 =====
        React.useEffect(()=>{
          if(!visible || markers.length<3) return;
          let hinted=false;
          try{ hinted=window.localStorage.getItem('umtl:hinted')==='1'; }catch(e){}
          if(hinted) return;
          const t=window.setTimeout(()=>{
            try{ window.localStorage.setItem('umtl:hinted','1'); }catch(e){}
            setHintClosing(false); setHint(true);
          },600);
          return ()=>window.clearTimeout(t);
        },[visible,markers.length]);
        React.useLayoutEffect(()=>{
          if(!hint) return;
          try{
            const el=hintElRef.current, root=rootRef.current;
            if(el && root){
              const r=root.getBoundingClientRect();
              el.style.left=Math.round(r.right+10)+'px';
              el.style.top=Math.round(r.top+r.height/2-14)+'px';
            }
          }catch(e){}
          const t=window.setTimeout(()=>setHintClosing(true),4000);
          return ()=>window.clearTimeout(t);
        },[hint]);
        React.useEffect(()=>{
          if(!hintClosing) return;
          const t=window.setTimeout(()=>{ setHint(false); setHintClosing(false); },220);
          return ()=>window.clearTimeout(t);
        },[hintClosing]);
        React.useEffect(()=>{
          if(!hint || hintClosing) return;
          const root=rootRef.current; if(!root) return;
          const off=()=>setHintClosing(true);
          root.addEventListener('pointerdown',off,{passive:true});
          root.addEventListener('wheel',off,{passive:true});
          root.addEventListener('keydown',off);
          return ()=>{ root.removeEventListener('pointerdown',off,{passive:true}); root.removeEventListener('wheel',off,{passive:true}); root.removeEventListener('keydown',off); };
        },[hint,hintClosing]);

        // 平滑对齐（支持打破宿主尾部跟随锁定）
        const doScrollTop=(el, key)=>{
          if(!el) return;
          try{
            const anchorKey=el.getAttribute('data-chat-anchor-key');
            const k = anchorKey || key || (el.getAttribute('data-chat-turn') ? ('turn_' + el.getAttribute('data-chat-turn')) : '');
            if(k) setActiveKey(k);

            const root=getScrollRoot(currentSessionIdRef.current);
            if(root){
              const elRect=el.getBoundingClientRect();
              const rootRect=root.getBoundingClientRect();
              const targetTop=Math.max(0, elRect.top - rootRect.top + root.scrollTop - 14);

              // 检查是否处于会话尾部跟随状态（距离底部较近且目标在上方）
              const isNearBottom=(root.scrollHeight - root.scrollTop - root.clientHeight) <= 35;
              if(isNearBottom && targetTop < root.scrollTop - 10){
                // 1. 派发滚轮交互意图，打断宿主 navigation 锁定
                try{ root.dispatchEvent(new WheelEvent('wheel', { deltaY: -100, bubbles: true })); }catch(_){}
                // 2. 瞬间先脱离底部 >25px 门限，迫使 DSH ChatReading 将 followingTail 解除为 false
                try{
                  root.scrollTop = Math.max(targetTop, root.scrollTop - 32);
                  void root.scrollTop;
                }catch(_){}
                // 3. 在下一帧顺畅启动平滑滚动
                if(prefersReduced()){
                  root.scrollTop = targetTop;
                } else {
                  window.requestAnimationFrame(()=>{
                    try{
                      root.scrollTo({ top: targetTop, behavior: 'smooth' });
                    }catch(_){
                      root.scrollTop = targetTop;
                    }
                  });
                }
                return;
              }

              // 非底部锁定场景：直接平滑滚动或 instant 对齐
              if(prefersReduced()){
                root.scrollTop = targetTop;
              } else {
                try{
                  root.scrollTo({ top: targetTop, behavior: 'smooth' });
                }catch(_){
                  root.scrollTop = targetTop;
                }
              }
              return;
            }

            // 兜底回退：若无 root 则使用原生 scrollIntoView
            el.scrollIntoView({behavior:prefersReduced()?'auto':'smooth', block:'start'});
          }catch(e){ try{ el.scrollIntoView({behavior:'instant', block:'start'}); }catch(_){} }
        };
        // 瞬时直写跟手
        const jumpInstant=(el, key)=>{
          if(!el) return;
          try{
            const anchorKey=el.getAttribute('data-chat-anchor-key');
            const k = anchorKey || key || (el.getAttribute('data-chat-turn') ? ('turn_' + el.getAttribute('data-chat-turn')) : '');
            if(k) setActiveKey(k);
            const root=getScrollRoot(currentSessionIdRef.current);
            if(root){
              const top=Math.max(0, el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 14);
              root.scrollTop=top;
            } else {
              el.scrollIntoView({block:'start'});
            }
          }catch(e){}
        };
        const loadAllOlder=React.useCallback(async (limit=20)=>{
          const sessionId=currentSessionIdRef.current;
          for(let attempt=0; attempt<limit; attempt++){
            if(document.hidden || currentSessionIdRef.current!==sessionId) break;
            if(attempt===0){
              const root=getScrollRoot(sessionId); if(root) try{ root.scrollTop=0; }catch(e){}
            }
            const btn=findOlderBtn(sessionId);
            if(!btn || btn.disabled) break;
            try{ btn.click(); }catch(e){}
            await new Promise(r=> window.setTimeout(r, attempt===0?680:420));
            if(!isOlderBtn(sessionId)) break;
          }
        },[]);

        // 原生跳跃跳转 (loadThrough) 与视口对齐
        const scrollToKey=async (key, attempt=0, instant=false)=>{
          const sessionId=currentSessionIdRef.current;
          try{
            umtlLog('scrollToKey', {key, attempt, instant, hasEl: !!locateKey(key)});
            const target=markersRef.current.find(m=>m.key===key);
            // 同一个未加载目标已经有 loadThrough 在飞行中：直接复用等待，不重复发起。
            if(target && target.isUnloaded && seekingKeyRef.current===key) return;

            // 1. 原生跳跃加载器：未加载轮次调用 session.loadThrough(seq)
            if(target && target.isUnloaded && target.seq!==undefined && currentSessionRef.current && typeof currentSessionRef.current.loadThrough==='function'){
              seekingKeyRef.current=key;
              setSeekingKey(key);
              try{
                await currentSessionRef.current.loadThrough(target.seq);
              }catch(e){
                umtlLog('loadThrough error', e);
              }
              if(currentSessionIdRef.current!==sessionId) return;
              // 等待 DOM 中对应 turn 挂载（最多等待 1.5s，轮询 locateKey）
              const startTime=Date.now();
              while(Date.now()-startTime < 1500){
                const el=locateKey(key);
                if(el){
                  if(instant) jumpInstant(el, key); else doScrollTop(el, key);
                  break;
                }
                await new Promise(r=> window.setTimeout(r, 50));
              }
              if(seekingKeyRef.current===key){
                seekingKeyRef.current=null;
                setSeekingKey(null);
              }
              return;
            }

            // 2. 已在 DOM 中直接着陆
            const el=locateKey(key);
            if(el){
              if(seekingKeyRef.current===key){ seekingKeyRef.current=null; setSeekingKey(null); }
              if(instant) jumpInstant(el, key); else doScrollTop(el, key);
              umtlLog('scrollToKey hit', {key});
              return;
            }

            // 3. 降级回退：DOM 扫描模式下未命中时的多拍分页兜底
            if(attempt===0 && !instant && seekingKeyRef.current!==key){
              seekingKeyRef.current=key;
              setSeekingKey(key);
            }
            if(attempt>=14){
              try{
                const targetPreview=(target||{}).preview||'';
                const needle=targetPreview.slice(0,12);
                if(needle){
                  const scope=getConversationScope(currentSessionIdRef.current);
                  const allEls=Array.from((scope||document).querySelectorAll(SEL.ANCHOR));
                  for(let i=0;i<allEls.length;i++){
                    const cand=allEls[i];
                    try{
                      const txt=extractText(cand).slice(0,24);
                      if(txt.includes(needle)){
                        if(seekingKeyRef.current===key){ seekingKeyRef.current=null; setSeekingKey(null); }
                        if(instant) jumpInstant(cand, key); else doScrollTop(cand, key);
                        return;
                      }
                    }catch(e){}
                  }
                }
              }catch(e){}
            }
            if(attempt>=20){
              if(seekingKeyRef.current===key){ seekingKeyRef.current=null; setSeekingKey(null); }
              return;
            }
            let root=getScrollRoot(currentSessionIdRef.current);
            if(attempt===0){
              try{
                if(root && root.scrollHeight<=root.clientHeight+8){
                  try{ root.dispatchEvent(new WheelEvent('wheel',{deltaY:1,bubbles:true, deltaMode:0})); }catch(e){}
                  try{ root.scrollTop+=1; root.scrollTop-=1; }catch(e){}
                }
              }catch(e){}
              try{
                root = await ensureScrollRoot(900, currentSessionIdRef.current);
                if(root) try{ root.scrollTop=0; }catch(e){}
                await new Promise(r=> setTimeout(r, 140));
              }catch(e){}
            }
            const btn=findOlderBtn(currentSessionIdRef.current);
            if(btn && !btn.disabled){
              try{ btn.click(); }catch(e){}
              window.setTimeout(()=> scrollToKey(key, attempt+1, instant), attempt===0?680:420);
            } else if(attempt<14){
              if(root) try{ root.scrollTop=0; }catch(e){}
              window.setTimeout(()=> scrollToKey(key, attempt+1, instant), 420);
            } else {
              if(seekingKeyRef.current===key){ seekingKeyRef.current=null; setSeekingKey(null); }
            }
          }catch(e){
            if(seekingKeyRef.current===key){ seekingKeyRef.current=null; setSeekingKey(null); }
          }
        };

        const findNearestByY=(y)=>{
          const dots=rootRef.current?Array.from(rootRef.current.querySelectorAll('.umtl-marker')):[];
          let closest=null, min=Infinity;
          for(let i=0;i<dots.length;i++){
            const m=markersRef.current[i];
            if(m && m.isOlder) continue;
            const r=dots[i].getBoundingClientRect(); const d=Math.abs((r.top+r.height/2)-y); if(d<min){min=d; closest=m;}
          }
          return closest;
        };
        const updateHoveredByPoint=(x,y)=>{
          try{
            const el=document.elementFromPoint(x,y);
            if(el){ const m=el.closest('.umtl-marker'); if(m){ const k=m.getAttribute('data-key'); if(k){ if(k!==hoveredKey) setHoveredKey(k); return; } } }
          }catch(_){}
          const near=findNearestByY(y);
          if(near && near.key!==hoveredKey) setHoveredKey(near.key);
        };
        const hudWrite=(x,y)=>{
          try{
            const el=hudElRef.current; if(!el) return;
            el.style.left=Math.min(x+14, window.innerWidth-170)+'px';
            el.style.top=Math.min(y+18, window.innerHeight-44)+'px';
          }catch(_){}
        };
        const hudText=(key)=>{
          try{
            const el=hudElRef.current;
            if(!el || !key) return;
            const m=markersRef.current.find(z=>z.key===key); if(!m) return;
            if(m.isOlder){
              hudKeyRef.current=key;
              el.textContent='加载更早轮次';
              return;
            }
            if(hudKeyRef.current===key) return;
            hudKeyRef.current=key;
            const all=markersRef.current;
            const hm=hasMoreRef.current;
            const realAll=all.filter(z=>!z.isOlder);
            const idx=realAll.findIndex(z=>z.key===key);
            const total=realAll.length;
            const raw=((m.preview||'（空消息）').split('\n')[0]||'');
            const suffix=hm ? ' · 还有更早' : (m.isUnloaded ? ' · 未加载' : '');
            const star=m.bm?'★ ':'';
            if(!m.preview && m.hasImage){
              const imgCount=m.images?m.images.length:1;
              const imgLabel=imgCount>1 ? '['+imgCount+' 张图片]' : '[图片]';
              el.textContent=star+'第 '+(idx+1)+' / '+total+' 轮'+suffix+' · '+imgLabel;
              return;
            }
            el.textContent=star+'第 '+(idx+1)+' / '+total+' 轮'+suffix+' · '+(raw.length>12 ? raw.slice(0,12)+'…' : raw);
          }catch(_){}
        };
        const onEnter=(m)=>{ setHoveredKey(m.key); };
        const startDrag=(x,y)=>{
          if(didDragRef.current) return;
          const p=pointerDownRef.current;
          didDragRef.current=true;
          draggingRef.current=true;
          suppressTipRef.current=true;
          // 只有确认进入拖拽后才捕获指针，避免普通点击被根节点捕获后丢失 click 事件。
          if(p){ try{ if(rootRef.current) rootRef.current.setPointerCapture(p.pointerId); }catch(_){} }
          dragTargetRef.current=(p && p.target) || null;
          if(!dragTargetRef.current){
            const near=findNearestByY(y);
            if(near) dragTargetRef.current=near.key;
          }
          setHudOn(true);
          hudKeyRef.current=null;
          hudWrite(x,y);
          if(dragTargetRef.current) hudText(dragTargetRef.current);
        };
        const onDown=(e)=>{
          if(e.button!==0) return;
          const near=findNearestByY(e.clientY);
          pointerDownRef.current={startX:e.clientX,startY:e.clientY,target:near?near.key:null,pointerId:e.pointerId};
          didDragRef.current=false;
          suppressClickRef.current=false;
          dragTargetRef.current=null;
          if(openTimerRef.current){ window.clearTimeout(openTimerRef.current); openTimerRef.current=null; }
          hideTip();
          // 在 pointerdown 捕获/阻止默认会让子节点 marker 永远收不到 click；捕获延后到拖拽阈值。
        };
        const onMove=(e)=>{
          const p=pointerDownRef.current;
          if(p && !didDragRef.current){
            const dx=e.clientX-p.startX, dy=e.clientY-p.startY;
            if((dx*dx+dy*dy)>16) startDrag(e.clientX,e.clientY);
          }
          if(draggingRef.current){
            if(dragRafRef.current) return;
            const x=e.clientX, y=e.clientY;
            dragRafRef.current=window.requestAnimationFrame(()=>{
              dragRafRef.current=0;
              if(!draggingRef.current) return;
              let target=null;
              try{ const el=document.elementFromPoint(x,y); if(el){ const m=el.closest('.umtl-marker'); if(m){ const k=m.getAttribute('data-key'); if(k) target=markersRef.current.find(z=>z.key===k); } } }catch(_){}
              if(!target) target=findNearestByY(y);
              if(target){ dragTargetRef.current=target.key; scrollToKey(target.key,0,true); }
              hudWrite(x,y);
              if(dragTargetRef.current) hudText(dragTargetRef.current);
            });
            return;
          }
          if(isTimelineHovered){
            if(rafPendingRef.current) return;
            rafPendingRef.current=true;
            const x=e.clientX, y=e.clientY;
            const run=()=>{
              rafPendingRef.current=false;
              updateHoveredByPoint(x,y);
            };
            window.requestAnimationFrame(run);
          }
        };
        const onUp=(e)=>{
          const wasDrag=didDragRef.current;
          pointerDownRef.current=null;
          draggingRef.current=false;
          setHudOn(false);
          suppressTipRef.current=false;
          try{ e.currentTarget.releasePointerCapture(e.pointerId);}catch(_){}
          if(wasDrag){
            suppressClickRef.current=true;
            if(dragTargetRef.current){
              const target=markersRef.current.find(m=>m.key===dragTargetRef.current);
              if(target && target.isUnloaded){
                scrollToKey(dragTargetRef.current, 0, false);
              } else {
                const el=locateKey(dragTargetRef.current);
                if(el) doScrollTop(el, dragTargetRef.current);
              }
            }
          }
          dragTargetRef.current=null;
          didDragRef.current=false;
          if(dragRafRef.current){ window.cancelAnimationFrame(dragRafRef.current); dragRafRef.current=0; }
        };
        const onPointerCancel=()=>{
          pointerDownRef.current=null;
          draggingRef.current=false;
          didDragRef.current=false;
          suppressClickRef.current=false;
          dragTargetRef.current=null;
          setHudOn(false);
          if(dragRafRef.current){ window.cancelAnimationFrame(dragRafRef.current); dragRafRef.current=0; }
        };
        const onRootEnter=()=>{
          setIsTimelineHovered(true);
          if(hideTimerRef.current){ window.clearTimeout(hideTimerRef.current); hideTimerRef.current=null; }
        };
        const onRootLeave=()=>{
          setIsTimelineHovered(false);
          setHoveredKey(null);
          if(openTimerRef.current){ window.clearTimeout(openTimerRef.current); openTimerRef.current=null; }
          if(hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
          hideTimerRef.current=window.setTimeout(()=>{ hideTimerRef.current=null; endPreviewSession(); },260);
        };
        const onTipEnter=()=>{
          if(hideTimerRef.current){ window.clearTimeout(hideTimerRef.current); hideTimerRef.current=null; }
        };
        const onTipLeave=()=>{
          if(hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
          hideTimerRef.current=window.setTimeout(()=>{ hideTimerRef.current=null; endPreviewSession(); },80);
        };
        const activeIdx=(()=>{ const i=markers.findIndex(m=>m.key===activeKey); return i===-1 ? 0 : i; })();
        const hoveredIdx=markers.findIndex(m=>m.key===hoveredKey);
        const sessionActive = isTimelineHovered || tipVisible || hudOn;
        const anchorIdx = hoveredIdx!==-1 ? hoveredIdx : (tipData ? markers.findIndex(x=>x.key===tipData.key) : -1);

        // 长会话：active 药丸自动滚入导轨可视区；用户正在悬停/拖拽时不打扰
        React.useEffect(()=>{
          if(!activeKey || !rootRef.current || isTimelineHovered || hudOn || draggingRef.current) return;
          const root=rootRef.current;
          let el=null;
          try{ el=root.querySelector('[data-key="'+CSS.escape(activeKey)+'"]'); }catch(_){}
          if(!el) return;
          try{
            const rr=root.getBoundingClientRect();
            const er=el.getBoundingClientRect();
            if(er.top >= rr.top+12 && er.bottom <= rr.bottom-12) return;
            const target=root.scrollTop + (er.top-rr.top) - root.clientHeight/2 + er.height/2;
            if(prefersReduced()) root.scrollTop=target;
            else root.scrollTo({top:target,behavior:'smooth'});
          }catch(_){}
        },[activeKey,markers.length,isTimelineHovered,hudOn]);

        const layout=(()=>{
          return {gap:10,mh:14,ph:4,k:1};
        })();
        const toggleBookmark=(key, bookmarkKey, e)=>{
          if(e){ try{ e.preventDefault(); e.stopPropagation(); }catch(_){} }
          if(!key || key==='__older__') return;
          const storeKey=bookmarkKey || getBookmarkKey(currentSessionIdRef.current,key);
          const legacyTurnKey=(tipData && tipData.key===key && Number.isSafeInteger(tipData.turn)) ? getBookmarkKey(currentSessionIdRef.current,'turn_'+tipData.turn) : null;
          const curVal=bookmarksMapRef.current.has(storeKey)
            ? !!bookmarksMapRef.current.get(storeKey)
            : (legacyTurnKey && bookmarksMapRef.current.has(legacyTurnKey)
              ? !!bookmarksMapRef.current.get(legacyTurnKey)
              : (tipData && tipData.key===key ? !!tipData.bm : false));
          const nextVal=!curVal;
          const m=new Map(bookmarksMapRef.current);
          if(legacyTurnKey && legacyTurnKey!==storeKey) m.delete(legacyTurnKey);
          m.set(storeKey,nextVal);
          bookmarksMapRef.current=m;
          saveBookmarksMapToStorage(m);
          setBookmarksMap(m);
          setTipData(d=>{
            if(d && d.key===key){ return {...d, bm: nextVal}; }
            return d;
          });
        };

        // tooltip 实现：支持大纲缓存预览（prompt + response 摘要展示）
        const renderTooltip=()=>{
          if(!tipData) return null;
          const isOlderTip=!!tipData.isOlder;
          const isUnloadedTip=!!tipData.isUnloaded;
          const isMilestone=!isOlderTip && !!tipData.bm;
          const allReal=markers.filter(z=>!z.isOlder);
          const realTotal=allReal.length;
          const idx=isOlderTip ? -1 : allReal.findIndex(x=>x.key===tipData.key);
          const suffix=hasMore ? ' · 还有更早' : '';
          const imgCountTip = tipData.images ? tipData.images.length : 0;
          const chipLabel = tipData.hasImage ? (imgCountTip>1 ? '图 · '+imgCountTip : '图') : null;
          return React.createElement('div',{ref:tipRef, className:'umtl-tip'+(tipVisible?' is-open':'')+(isMilestone?' is-milestone':''), 'aria-live':'polite', 'aria-atomic':'true',
              onPointerEnter:onTipEnter, onPointerLeave:onTipLeave,
              style:{left:tipData.left+'px', top:tipData.top+'px', width:'240px', minHeight:'48px', transformOrigin:tipData.isLeft?'left center':'right center',
                '--umtl-in-x':tipData.isLeft?'-8px':'8px'}},
            React.createElement('div',{className:'umtl-tipBody'},
              !isOlderTip ? React.createElement('button',{
                type:'button',
                className:'umtl-tipAction'+(isMilestone?' is-active':''),
                onClick:(e)=>toggleBookmark(tipData.key,tipData.bookmarkKey,e),
                title:isMilestone?'取消重点标记':'标记为重点轮次',
                'aria-label':isMilestone?'取消重点标记':'标记为重点轮次'
              },
                React.createElement('svg',{width:12,height:12,viewBox:'0 0 24 24',fill:isMilestone?'currentColor':'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'},
                  React.createElement('path',{d:'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'})
                )
              ) : null,
              React.createElement('div',{style:{fontSize:'11px',fontWeight:600,color:'color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 65%,transparent)',marginBottom:'4px',display:'flex',alignItems:'center',gap:'6px', whiteSpace:'nowrap', fontVariantNumeric:'tabular-nums'}},
                React.createElement('span',{style:{flex:'none', display:'inline-flex', alignItems:'center', background:isMilestone?'color-mix(in srgb,var(--dsw-alias-state-warn-primary) 24%,transparent)':'color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 10%,transparent)', borderRadius:'999px', padding:'1px 7px', fontSize:'10px', lineHeight:'16px', color:'var(--dsw-alias-label-primary-foreground)', boxShadow:isMilestone?'inset 0 0 0 1px color-mix(in srgb,var(--dsw-alias-state-warn-primary) 45%,transparent)':'none'}},
                  isMilestone?React.createElement('span',{className:'umtl-tipDot-bm','aria-hidden':true}):null,
                  isOlderTip ? '加载更早' : '第 '+(idx===-1?'—':idx+1)+' / '+realTotal+' 轮'+suffix
                ),
                !isOlderTip && chipLabel?React.createElement('span',{style:{flex:'none', background:'color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 12%,transparent)', borderRadius:'999px', padding:'1px 6px', fontSize:'10px', lineHeight:'16px', color:'var(--dsw-alias-label-primary-foreground)'}},chipLabel):null,
                !isOlderTip && tipData.time?React.createElement('span',{style:{flex:'none'}},'· '+tipData.time):null,
                !isOlderTip && tipData.status==='进行中'?React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'4px',overflow:'hidden'}},
                  React.createElement('span',{'aria-hidden':true, style:{width:'6px',height:'6px',borderRadius:'50%',background:'var(--dsw-alias-brand-primary)',display:'inline-block',flex:'none',animation:'umtlPulse 1.2s ease-in-out infinite'}}),
                  React.createElement('span',{style:{flex:'none'}},'进行中')
                ):null
              ),
              (tipData.images && tipData.images.length>0 && !isOlderTip) ? (
                tipData.images.length===1 ?
                  React.createElement('div',{className:'umtl-tipImages is-single'},
                    React.createElement('img',{src:tipData.images[0], loading:'lazy', onError:function(e){ try{ e.target.style.display='none'; }catch(_){} }})
                  ) :
                  React.createElement('div',{className:'umtl-tipImages is-grid'},
                    tipData.images.slice(0,3).map(function(src,i){
                      const isLast = i===2 && tipData.images.length>3;
                      return React.createElement('div',{key:i, className:'umtl-tipImgItem'},
                        React.createElement('img',{src:src, loading:'lazy', onError:function(e){ try{ e.target.style.display='none'; }catch(_){} }}),
                        isLast ? React.createElement('div',{className:'umtl-tipImgMore'}, '+'+(tipData.images.length-3)) : null
                      );
                    })
                  )
              ) : null,
              (function(){
                if(isOlderTip) return React.createElement('div',{key:tipData.key, style:{display:'-webkit-box',WebkitLineClamp:6,WebkitBoxOrient:'vertical',overflow:'hidden',color:'var(--dsw-alias-label-primary-foreground)',whiteSpace:'pre-wrap', wordBreak:'break-word', fontSize:'12.5px', lineHeight:'17px', userSelect:'text', WebkitUserSelect:'text', cursor:'auto', animation:'umtlTextIn 80ms ease-out'}}, '点击加载更早轮次');
                const hasResp = !!(tipData.response && tipData.response.trim());
                const clamp = (hasResp || tipData.hasImage) ? 3 : 6;
                let promptNode;
                if(tipData.preview){
                  promptNode = React.createElement('div',{key:tipData.key+'_p', className:'umtl-tipPrompt', style:{WebkitLineClamp:clamp, userSelect:'text', WebkitUserSelect:'text', cursor:'auto', animation:'umtlTextIn 80ms ease-out'}}, tipData.preview);
                } else if(tipData.hasImage){
                  const hint = tipData.images && tipData.images.length>1 ? '[包含 ' + tipData.images.length + ' 张图片提问]' : '[纯图片提问]';
                  promptNode = React.createElement('div',{key:tipData.key+'_p', className:'umtl-tipPrompt', style:{WebkitLineClamp:3, fontStyle:'italic', color:'color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 60%,transparent)', userSelect:'text', WebkitUserSelect:'text', cursor:'auto', animation:'umtlTextIn 80ms ease-out'}}, hint);
                } else {
                  promptNode = React.createElement('div',{key:tipData.key+'_p', className:'umtl-tipPrompt', style:{WebkitLineClamp:6, userSelect:'text', WebkitUserSelect:'text', cursor:'auto', animation:'umtlTextIn 80ms ease-out'}}, '（空消息）');
                }
                const responseNode = hasResp ? React.createElement('div',{key:tipData.key+'_r', className:'umtl-tipResponse', style:{userSelect:'text', WebkitUserSelect:'text', cursor:'auto', animation:'umtlTextIn 80ms ease-out'}}, tipData.response.trim()) : null;
                return React.createElement('div',{key:tipData.key, style:{display:'flex',flexDirection:'column'}},
                  promptNode,
                  responseNode
                );
              })()
            )
          );
        };
        const cls='umtl-root'+(visible?'':' is-hidden')+(sessionActive?' is-tinted':'')+(positionState==="right"?' is-right':'');
        const rootMaxHeight = (()=>{ const N=markers.length; const v=N>16 ? (16*layout.mh + 15*layout.gap + 12) : null; umtlLog('layout', {N, gap: layout.gap, mh: layout.mh, rootMaxHeight: v, isShort: N<=16}); return v; })();
        if(!enabledState) {
          return React.createElement(React.Fragment,null,
            React.createElement('div',{ref:rootRef, className:'umtl-root is-hidden'}),
            renderTooltip()
          );
        }
        const isShort = markers.length <= 16;
        const newBornStart = (markers.length > prevCountRef.current && prevCountRef.current>0) ? prevCountRef.current : -1;
        return React.createElement(React.Fragment,null,
          React.createElement('div',{ref:rootRef, className:cls, role:'navigation','aria-label':'User message timeline', onPointerDown:onDown, onPointerMove:onMove, onPointerUp:onUp, onPointerCancel:onPointerCancel, onPointerEnter:onRootEnter, onPointerLeave:onRootLeave, style:{outline:'none', maxHeight: rootMaxHeight ? rootMaxHeight+'px' : undefined, overflowY: rootMaxHeight ? 'auto' : undefined, maskImage: isShort ? 'none' : undefined, WebkitMaskImage: isShort ? 'none' : undefined}},
            React.createElement('div',{className:'umtl-track'}),
            React.createElement('div',{className:'umtl-markers'+(entered?' umtl-stagger':''), style:{gap:layout.gap+'px','--umtl-gap':layout.gap+'px'}},
              markers.length===0?React.createElement('div',{style:{fontSize:'11px',color:'var(--dsw-alias-label-tertiary)',padding:'6px 2px'}},'暂无轮次'):
              markers.map((m,idx)=>{
                const isOlder=!!m.isOlder;
                const isUnloaded=!!m.isUnloaded;
                const isMilestone=!isOlder && !!m.bm;
                const isSeeking=!isOlder && m.key===seekingKey;
                const a=!isOlder && m.key===activeKey; const h=m.key===hoveredKey;
                const newBornClass = (!isOlder && !isUnloaded && newBornStart!==-1 && idx>=newBornStart) ? ' is-new-born' : '';
                const c='umtl-marker'+(isOlder?' is-older':'')+(isUnloaded?' is-unloaded':'')+(isOlder && olderLoading?' is-loading':'')+(isSeeking?' is-seeking':'')+(isMilestone?' is-milestone':'')+(a?' is-active':'')+(h?' is-hovered':'')+((!h && tipVisible && tipData && m.key===tipData.key)?' is-preview':'')+newBornClass;
                const typeSuffix = isOlder ? '' : ((m.hasImage ? ' · 含图' : '') + (isMilestone ? ' · 重点' : ''));
                let dims; let num=false;
                if(isOlder){
                  dims={w:12,h:layout.ph,o:0.9};
                } else if(!sessionActive){
                  dims={w:isMilestone?14:12,h:layout.ph,o: a?1:(isMilestone?0.85:0.45)};
                } else {
                  const effIdx=anchorIdx!==-1?anchorIdx:activeIdx;
                  const d=Math.abs(idx-effIdx);
                  const tier=d>=4?4:d;
                  const kk=layout.k;
                  if(tier===0){ dims={w:34,h:14*kk,o:1}; num=kk>=0.72; }
                  else { const td=[null,{w:26,h:6,o:.92},{w:20,h:5,o:.78},{w:16,h:5,o:.62},{w:isMilestone?14:12,h:4,o:isMilestone?.85:.45}][tier]; dims={w:td.w,h:td.h*kk,o:td.o}; }
                }
                const allReal=markers.filter(z=>!z.isOlder);
                const realIdx=isOlder ? -1 : allReal.findIndex(z=>z.key===m.key);
                const label=isOlder ? '加载更早轮次' : ('跳至第 '+(realIdx+1)+' 轮'+typeSuffix+(hasMore?' · 还有更早':''));
                const handleClick=isOlder ? (async (e)=>{
                  if(e){ try{ e.preventDefault(); e.stopPropagation(); }catch(_){} }
                  if(olderLoading) return;
                  if(seekingKeyRef.current){ seekingKeyRef.current=null; setSeekingKey(null); }
                  setOlderLoading(true);
                  endPreviewSession();
                  const root=getScrollRoot(currentSessionIdRef.current); if(root) try{ root.scrollTop=0; }catch(_){}
                  await loadAllOlder(20);
                  try{ await pollScan(8,260); }catch(e){}
                  setOlderLoading(false);
                }) : ((e)=>{
                  if(e) try{ e.stopPropagation(); }catch(_){}
                  if(suppressClickRef.current){ suppressClickRef.current=false; return; }
                  endPreviewSession();
                  scrollToKey(m.key);
                });
                const handlePointerDown=isOlder ? ((e)=>{ try{ e.stopPropagation(); }catch(_){} }) : undefined;
                return React.createElement('div',{key:m.key,'data-key':m.key, className:c, onMouseEnter:()=>onEnter(m), onPointerDown:handlePointerDown, onClick:handleClick, 'aria-label':label, role:'button', tabIndex:-1,
                    style:{height:layout.mh+'px','--umtl-stagger-delay':Math.min(idx*8,72)+'ms'}},
                  React.createElement('div',{className:'umtl-pill'+(isSeeking?' is-seeking':''), style:{width:dims.w+'px', height:dims.h+'px', opacity:dims.o}}),
                  !isOlder && num?React.createElement('span',{className:'umtl-num'},String(realIdx+1)):null
                );
              })
            )
          ),
          renderTooltip(),
          hint?React.createElement('div',{ref:hintElRef, 'aria-hidden':true, className:'umtl-hint'+(hintClosing?' is-off':'')},'悬停预览 · 点击跳转 · 按住拖动快速滑动'):null,
          React.createElement('div',{ref:hudElRef, 'aria-hidden':true, className:'umtl-hud'+(hudOn?' is-on':'')}),
          isDebug()?React.createElement('div',{style:{position:'fixed', right:'12px', bottom:'12px', zIndex:10001, background:'color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent)', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)', color:'var(--dsw-alias-label-primary-foreground)', padding:'4px 8px', borderRadius:'999px', fontSize:'10px', lineHeight:'14px', opacity:0.9}},'· 调试中'):null
        );
      }

      // v0.4.0：插件配置页 —— DSH 0.1.7 将旧 settings.plugin.item 卡片替换为 Plugins 页的
      // 配置面注册于两个座位（均在 Plugins 页）：
      //   · plugins.bundle.config —— key 为包名，配置直接显示在插件卡片详情页（一次点击可达，主力入口）；
      //     该座位不传 form，须自行解析。
      //   · plugins.row.config    —— key 为「包名#Loader 条目 id」，行上出现「配置」按钮（保留的次入口）；
      //     该座位由页面外壳传入 {state,mutate} 与 revision 围栏。
      function configFromRaw(raw){
        return {
          enabled: unvol(raw.enabled) !== false,
          position: unvol(raw.position) === 'right' ? 'right' : 'left',
          takeoverOfficial: unvol(raw.takeoverOfficial) !== false,
          prefixEnabled: unvol(raw.prefixEnabled) === true,
          prefixPatterns: typeof unvol(raw.prefixPatterns) === 'string' ? unvol(raw.prefixPatterns) : "!, *, 📌, 【重点】"
        };
      }
      function sameConfig(a,b){
        return a.enabled===b.enabled && a.position===b.position && a.takeoverOfficial===b.takeoverOfficial &&
          a.prefixEnabled===b.prefixEnabled && a.prefixPatterns===b.prefixPatterns;
      }
      function UmtlSettingsSummary(){
        // 纯展示组件：不调用任何 Hook，避免 summary/page 复用同一实例时破坏 Hook 顺序
        return '对话列药丸导轨：悬停预览、点击/拖拽跳转、分页自动加载，可切换左右贴边与重点标记';
      }
      function UmtlSettingsPage(props){
        const pageForm = props && props.form;
        const [snapshot,setSnapshot]=React.useState(()=>{
          try{
            if(pageForm && pageForm.state) return pageForm.state;
            const f=getForm();
            return f ? f.getSnapshot() : null;
          }catch(e){ return null; }
        });
        // 页面未传 form 时自行订阅 configForms；服务晚到时轮询，不能只读一次。
        React.useEffect(()=>{
          let disposed=false, unsub=null, timer=null;
          const sync=()=>{
            if(disposed) return;
            try{
              if(pageForm && pageForm.state){ setSnapshot(pageForm.state); return; }
              const f=getForm();
              if(f) setSnapshot(f.getSnapshot() || null);
            }catch(e){}
          };
          const bind=()=>{
            if(pageForm){ if(pageForm.state) setSnapshot(pageForm.state); return true; }
            const f=getForm();
            if(!f) return false;
            try{ unsub=f.subscribe(sync); sync(); return true; }catch(e){ return false; }
          };
          if(!bind()){
            timer=window.setInterval(()=>{
              if(disposed) return;
              if(bind()){ window.clearInterval(timer); timer=null; }
            },500);
          }
          return ()=>{
            disposed=true;
            if(timer) window.clearInterval(timer);
            try{ if(unsub) unsub(); }catch(e){}
          };
        },[pageForm, pageForm && pageForm.state]);
        const raw = snapshot && snapshot.value;
        const defaults = { enabled:true, position:'left', takeoverOfficial:true, prefixEnabled:false, prefixPatterns:"!, *, 📌, 【重点】" };
        const cur = raw ? configFromRaw(raw) : defaults;
        const [draft,setDraft]=React.useState(cur);
        const [saving,setSaving]=React.useState(false);
        const [failed,setFailed]=React.useState("");
        const [conflict,setConflict]=React.useState(false);
        const committedRef=React.useRef(cur);
        const draftRef=React.useRef(draft);
        draftRef.current=draft;
        // 外部快照变化：未编辑时回灌；已编辑且外部值变化时保留草稿并标记冲突，禁止静默覆盖。
        React.useEffect(()=>{
          if(!raw) return;
          const next=configFromRaw(raw);
          const prev=committedRef.current;
          const dirty=!sameConfig(draftRef.current,prev);
          const externalChanged=!sameConfig(prev,next);
          committedRef.current=next;
          if(!dirty){
            setDraft(next);
            setConflict(false);
            setFailed("");
          } else if(externalChanged){
            setConflict(true);
            setFailed("外部配置已变更，请先放弃草稿再重试");
          }
        },[raw]);
        const isDirty=!sameConfig(draft,committedRef.current);
        const writable=!!snapshot && snapshot.writable !== false;
        const status=snapshot ? snapshot.status : 'loading';
        const row=(label,hint,control)=>React.createElement('div',{className:'umtl-cardRow'},
          React.createElement('div',null,
            React.createElement('div',{className:'umtl-cardLabel'}, label),
            hint?React.createElement('div',{className:'umtl-cardHint'}, hint):null
          ), control);
        const sw=(on,onClick,label)=>React.createElement('button',{type:'button', role:'switch', 'aria-checked':on, 'aria-label':label, onClick, className:'umtl-switchSm'+(on?' is-checked':''), disabled:saving||!writable},
          React.createElement('span',{className:'umtl-switchSmKnob'+(on?' is-checked':'')})
        );
        const onToggleEnabled=()=>{ setDraft(d=>({...d, enabled: !d.enabled})); setFailed(""); };
        const onToggleTakeover=()=>{ setDraft(d=>({...d, takeoverOfficial: !d.takeoverOfficial})); setFailed(""); };
        const onTogglePrefix=()=>{ setDraft(d=>({...d, prefixEnabled: !d.prefixEnabled})); setFailed(""); };
        const onSelectPos=(pos)=>{ if(pos!=="left"&&pos!=="right") return; setDraft(d=>({...d, position: pos})); setFailed(""); };
        const onDiscard=()=>{ setDraft({...committedRef.current}); setConflict(false); setFailed(""); };
        const submitOps=async(ops)=>{
          if(pageForm && typeof pageForm.mutate==='function'){
            return pageForm.mutate(ops, pageForm.state ? pageForm.state.revision : undefined);
          }
          const f=getForm();
          if(!f) return false;
          const s=f.getSnapshot();
          return f.mutate(ops, s ? s.revision : undefined);
        };
        const onSave=async ()=>{
          if(conflict){ setFailed("外部配置已变更，请先放弃草稿再重试"); return; }
          setSaving(true); setFailed("");
          try{
            const ops=[];
            if(committedRef.current.enabled!==draft.enabled) ops.push({op:'set',path:['enabled'],value:draft.enabled});
            if(committedRef.current.position!==draft.position) ops.push({op:'set',path:['position'],value:draft.position});
            if(committedRef.current.takeoverOfficial!==draft.takeoverOfficial) ops.push({op:'set',path:['takeoverOfficial'],value:draft.takeoverOfficial});
            if(committedRef.current.prefixEnabled!==draft.prefixEnabled) ops.push({op:'set',path:['prefixEnabled'],value:draft.prefixEnabled});
            if(committedRef.current.prefixPatterns!==draft.prefixPatterns) ops.push({op:'set',path:['prefixPatterns'],value:draft.prefixPatterns});
            if(!ops.length){ setSaving(false); return; }
            const ok = await submitOps(ops);
            if(ok===false){ setFailed("已被外部修改，请重试"); }
            else { committedRef.current={...draft}; setConflict(false); }
          }catch(e){
            const msg=(e&&e.message)||"";
            setFailed(msg.includes("conflict")||msg.includes("CONFLICT") ? "已被外部修改，请重试" : ("保存失败："+msg.slice(0,80)));
          } finally { setSaving(false); }
        };
        if(status === 'loading' || !snapshot){
          return React.createElement('div',{className:'umtl-cardHint', style:{padding:'8px 0'}}, '配置加载中…');
        }
        if(status !== 'ready' || !raw){
          return React.createElement('div',{className:'umtl-cardHint', style:{padding:'8px 0'}}, '配置不可用（Host 未提供 user-message-timeline 命名空间）');
        }
        return React.createElement('div',{className:'umtl-cardBody'},
          row('启用导轨','关闭后隐藏所有药丸与预览', sw(draft.enabled, onToggleEnabled, '启用导轨')),
          row('接管官方轮次标尺','自动隐藏官方右侧简易标尺，由功能更强大的悬浮药丸导轨独占接管', sw(draft.takeoverOfficial, onToggleTakeover, '接管官方轮次标尺')),
          React.createElement('div',null,
            React.createElement('div',{className:'umtl-cardLabel', style:{marginBottom:'6px'}}, '导轨位置'),
            React.createElement('div',{className:'umtl-seg', role:'group', 'aria-label':'导轨位置'},
              React.createElement('button',{type:'button', className:'umtl-segBtn'+(draft.position==="left"?' is-active':''), onClick:()=>onSelectPos("left"), disabled:saving||!writable}, '左侧 · 贴近左栏'),
              React.createElement('button',{type:'button', className:'umtl-segBtn'+(draft.position==="right"?' is-active':''), onClick:()=>onSelectPos("right"), disabled:saving||!writable}, '右侧 · 贴近右栏')
            ),
            React.createElement('div',{className:'umtl-cardHint', style:{marginTop:'6px'}}, '右侧模式自动避让已安装的右侧边栏扩展（如 dsh-better-sidebar）')
          ),
          row('重点轮次前缀识别','以指定前缀开头的提问自动标记为琥珀金重点药丸', sw(draft.prefixEnabled, onTogglePrefix, '重点轮次前缀识别')),
          draft.prefixEnabled?React.createElement('div',null,
            React.createElement('div',{className:'umtl-cardLabel', style:{marginBottom:'6px'}}, '自定义识别前缀'),
            React.createElement('input',{type:'text', className:'umtl-input', value:draft.prefixPatterns||'', placeholder:'!, *, 📌, 【重点】', onChange:(e)=>setDraft(d=>({...d, prefixPatterns: e.target.value})), disabled:saving||!writable}),
            React.createElement('div',{className:'umtl-cardHint', style:{marginTop:'6px'}}, '支持多个前缀，用逗号隔开（如 !, *, 📌）')
          ):null,
          React.createElement('div',{className:'umtl-cardFooter'},
            failed?React.createElement('p',{className:'umtl-cardFailed', role:'status'}, failed):null,
            React.createElement('button',{type:'button', className:'umtl-cardDiscard', disabled:!isDirty||saving, onClick:onDiscard}, '放弃'),
            React.createElement('button',{type:'button', className:'umtl-cardSave', disabled:!isDirty||saving||!writable||conflict, onClick:onSave}, saving?'保存中…':'保存')
          )
        );
      }
      function UmtlSettingsCard(props){
        if(props && props.view === 'summary') return React.createElement(UmtlSettingsSummary);
        return React.createElement(UmtlSettingsPage, props || {});
      }

      // 注册面：DSH 0.1.7 —— Plugins 页的两个配置座位都注册，保证可达性。
      // 导轨本体仍走 shell.overlay（root 作用域，与配置面互不影响）。
      try{
        const slots = ctx.get("slots");
        if(slots){
          slots.inject("plugins.bundle.config", () => slots.register({ name: "plugins.bundle.config", key: "dsh-user-message-timeline" }, UmtlSettingsCard));
          slots.inject("plugins.row.config", () => slots.register({ name: "plugins.row.config", key: "dsh-user-message-timeline#user-message-timeline" }, UmtlSettingsCard));
        }
      }catch(e){}
      try{
        const slots = ctx.get("slots");
        if(slots){
          slots.inject("shell.overlay", () => slots.register({ name: "shell.overlay", id: "user-message-timeline" }, () => React.createElement(Timeline)));
        }
      }catch(e){}
    }
    module.exports.inject = inject;
    module.exports.apply = apply;
    return module.exports;
  }
});
