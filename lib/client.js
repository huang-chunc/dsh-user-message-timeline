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
      // v0.1.10：B2 冷启无响应（ensureScrollRoot+预热+模糊锚定，视口等待）· B3 16颗上限可滚（视口16固定，N>16导轨内滚轮翻找，不再等比收口）· B1 首轮消失暂搁置（仅单会话偶现）
      const css = ':root{--umtl-shadow-tip:0 2px 6px color-mix(in srgb,var(--dsw-alias-label-primary) 18%,transparent),0 14px 36px color-mix(in srgb,var(--dsw-alias-label-primary) 32%,transparent);--umtl-shadow-knob:0 1px 3px color-mix(in srgb,var(--dsw-alias-label-primary) 20%,transparent),0 0 0 1px color-mix(in srgb,var(--dsw-alias-label-primary) 5%,transparent)}.umtl-root{position:fixed;left:0;top:50%;transform:translateX(var(--umtl-left,12px)) translateY(-50%);will-change:transform;contain:layout paint;z-index:6;max-height:min(70vh,40rem);overflow-y:auto;overflow-x:hidden;scrollbar-width:none;overscroll-behavior:contain;pointer-events:auto;background:color-mix(in srgb,var(--dsw-alias-bg-base) 8%,transparent);border:1px solid color-mix(in srgb,var(--dsw-alias-label-primary) 6%,transparent);border-radius:16px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:0;opacity:1;transition:transform var(--umtl-dur,220ms) var(--umtl-ease,cubic-bezier(.22,1,.36,1)),opacity .22s,background .22s ease,backdrop-filter .22s ease;mask-image:linear-gradient(to bottom,transparent 0,black 24px,black calc(100% - 24px),transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0,black 24px,black calc(100% - 24px),transparent 100%)}.umtl-root::-webkit-scrollbar{display:none}.umtl-root.is-tinted{background:color-mix(in srgb,var(--dsw-alias-bg-base) 55%,transparent);backdrop-filter:blur(10px) saturate(1.4);-webkit-backdrop-filter:blur(10px) saturate(1.4)}.umtl-root.is-hidden{opacity:0;pointer-events:none;transform:translateX(var(--umtl-left,12px)) translateY(-50%) translateX(-10px)}.umtl-root.is-right{left:auto;right:0;transform:translateX(calc(-1*var(--umtl-right,12px))) translateY(-50%)}.umtl-root.is-right.is-hidden{opacity:0;pointer-events:none;transform:translateX(calc(-1*var(--umtl-right,12px))) translateY(-50%) translateX(10px)}.umtl-root.is-right.is-tinted{background:color-mix(in srgb,var(--dsw-alias-bg-base) 55%,transparent);backdrop-filter:blur(10px) saturate(1.4);-webkit-backdrop-filter:blur(10px) saturate(1.4)}.umtl-root.umtl-pushing{transition:none!important}.umtl-track{display:none}.umtl-markers{position:relative;display:flex;flex-direction:column;align-items:center;gap:var(--umtl-gap,10px);padding:6px 0;z-index:1;contain:layout}.umtl-stagger .umtl-marker{animation:umtlPop .28s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--umtl-stagger-delay,0ms)}.umtl-marker{position:relative;display:flex;align-items:center;justify-content:center;width:40px;height:14px;cursor:pointer;flex:none;contain:layout}.umtl-markerLine{display:none}.umtl-pill{border-radius:999px;background:var(--dsw-alias-border-l2);box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 30%,transparent);transition:width 180ms cubic-bezier(.22,1,.36,1),height 180ms,opacity 180ms,background 180ms,box-shadow 180ms;box-sizing:border-box;flex:none;will-change:width,height,opacity}.umtl-marker.is-active .umtl-pill,.umtl-marker.is-preview .umtl-pill{background:var(--dsw-alias-label-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 32%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-label-primary) 14%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-label-primary) 22%,transparent)}.umtl-marker.is-hovered .umtl-pill{background:var(--dsw-alias-brand-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 35%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-brand-primary) 16%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-brand-primary) 24%,transparent)}.umtl-bookmark{position:absolute;left:50%;top:2px;transform:translateX(-50%);width:3px;height:7px;border-radius:2px;background:var(--dsw-alias-state-warn-primary);z-index:2;pointer-events:none}.umtl-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10px;line-height:1;font-weight:600;color:var(--dsw-alias-label-primary-foreground);letter-spacing:.02em;pointer-events:none;user-select:none;-webkit-user-select:none}@keyframes umtlPop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}.umtl-tip{position:fixed;z-index:9999;width:240px;min-height:48px;box-shadow:var(--umtl-shadow-tip);opacity:0;pointer-events:none;transform:scale(.95) translateX(var(--umtl-in-x,-8px));transition:opacity .12s ease,transform .12s cubic-bezier(.22,1,.36,1);transform-origin:left center;animation:umtlIn .2s cubic-bezier(.22,1,.36,1)}.umtl-tip.is-open{opacity:1;pointer-events:auto;transform:none}.umtl-tipBody{background:color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent);backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);color:var(--dsw-alias-label-primary-foreground);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 14%,transparent),inset 0 0 0 1px color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 7%,transparent);border-radius:14px;max-height:min(36vh,280px);overflow:hidden;padding:8px 10px;font-size:12.5px;line-height:17px;word-break:break-word}.umtl-tipBody *::selection{background:color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 25%,transparent)}@keyframes umtlIn{from{opacity:0;transform:scale(.92) translateX(var(--umtl-in-x,-8px))}to{opacity:1;transform:none}}@keyframes umtlTextIn{from{opacity:.25}to{opacity:1}}@keyframes umtlPulse{0%,100%{opacity:1}50%{opacity:.35}}.umtl-hint{position:fixed;z-index:9998;background:color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent);backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);color:var(--dsw-alias-label-primary-foreground);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 14%,transparent),var(--umtl-shadow-tip);border-radius:999px;padding:6px 14px;font-size:11.5px;line-height:16px;font-weight:500;white-space:nowrap;opacity:1;transform:none;transition:opacity .2s ease,transform .2s ease;animation:umtlHintIn .24s cubic-bezier(.22,1,.36,1)}.umtl-hint.is-off{opacity:0;transform:translateX(-4px) scale(.96)}@keyframes umtlHintIn{from{opacity:0;transform:translateX(-4px) scale(.94)}to{opacity:1;transform:none}}.umtl-hud{position:fixed;z-index:10000;left:0;top:0;background:color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent);backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);color:var(--dsw-alias-label-primary-foreground);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 14%,transparent),var(--umtl-shadow-tip);border-radius:999px;padding:4px 11px;font-size:11px;line-height:16px;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s ease}.umtl-hud.is-on{opacity:1}[data-chat-anchor-key]{scroll-margin-top:14px}.umtl-settingsRow{display:flex;align-items:center;gap:8px;padding:16px 0;border-bottom:1px solid var(--dsw-alias-border-l2)}.umtl-settingsText{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;padding-right:48px}.umtl-settingsTitle{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:400;line-height:22px}.umtl-settingsDesc{color:var(--dsw-alias-label-tertiary);font-size:12px;font-weight:400;line-height:18px}.umtl-switch{position:relative;display:inline-block;width:44px;height:26px;cursor:pointer;flex:none;-webkit-tap-highlight-color:transparent;border:none;padding:0;background:transparent;border-radius:999px}.umtl-switchTrack{position:absolute;inset:0;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);box-shadow:inset 0 1px 2px rgba(0,0,0,0.12);border-radius:999px;transition:background .2s,border-color .2s;box-sizing:border-box}.umtl-switchTrack.is-checked{background:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-primary);box-shadow:none}.umtl-switchKnob{position:absolute;top:2px;left:2px;width:22px;height:22px;background:var(--dsw-alias-label-tertiary);border:1px solid var(--dsw-alias-label-tertiary);border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,0.18);transition:left .2s,background .2s,border-color .2s}.umtl-switchKnob.is-checked{left:20px;background:var(--dsw-alias-bg-base);border-color:var(--dsw-alias-bg-base);box-shadow:0 1px 2px rgba(0,0,0,0.18)}.umtl-switch:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.umtl-switch:hover .umtl-switchTrack:not(.is-checked){background:var(--dsw-alias-border-l3)}.umtl-root:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px;box-shadow:0 0 0 4px color-mix(in srgb,var(--dsw-alias-brand-primary) 20%,transparent)}.umtl-marker.is-older .umtl-pill{background:transparent;border:1.5px solid var(--dsw-alias-label-primary);box-shadow:none}.umtl-marker.is-older.is-loading .umtl-pill{animation:umtlPulse 1s ease-in-out infinite}@media (prefers-reduced-motion:reduce){.umtl-root,.umtl-root *,.umtl-tip,.umtl-tip *,.umtl-stagger .umtl-marker,.umtl-hint,.umtl-hud{transition-duration:0s!important;transition-delay:0s!important;animation:none!important}}.umtl-card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:12px;list-style:none;transition:border-color .16s,background .16s}.umtl-card:hover{border-color:var(--dsw-alias-label-dimmed)}.umtl-cardOpen{background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-label-dimmed)}.umtl-cardHeader{appearance:none;width:100%;font:inherit;color:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:12px;align-items:center;gap:12px;padding:14px 16px;display:flex}.umtl-cardHeader:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:-2px}.umtl-cardHeadText{flex-direction:column;flex:1;gap:4px;min-width:0;display:flex}.umtl-cardName{color:var(--dsw-alias-label-primary);font-size:15px;font-weight:600;line-height:1.4}.umtl-cardDesc{color:var(--dsw-alias-label-tertiary);font-size:13px;line-height:1.5}.umtl-cardChevron{color:var(--dsw-alias-label-tertiary);flex:none;transition:transform .16s}.umtl-cardChevronOpen{transform:rotate(180deg)}.umtl-cardBody{border-top:1px solid var(--dsw-alias-border-l2);margin:0 16px;padding:12px 0 8px;display:flex;flex-direction:column;gap:14px}.umtl-cardRow{display:flex;align-items:center;justify-content:space-between;gap:12px}.umtl-cardLabel{color:var(--dsw-alias-label-primary);font-size:13px;font-weight:500;line-height:1.4}.umtl-cardHint{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:1.5}.umtl-cardPending{white-space:nowrap;background:var(--dsw-alias-bg-module-platform);color:var(--dsw-alias-label-secondary);border-radius:999px;flex:none;padding:1px 8px;font-size:11px;font-weight:500;line-height:17px}.umtl-cardFooter{border-top:1px solid var(--dsw-alias-border-l2);justify-content:flex-end;align-items:center;gap:8px;padding:12px 0 4px;display:flex}.umtl-cardFailed{min-width:0;color:var(--dsw-alias-label-error);flex:1;margin:0;font-size:12px;line-height:1.5}.umtl-cardDiscard,.umtl-cardSave{appearance:none;font:inherit;cursor:pointer;border:1px solid #0000;border-radius:8px;padding:5px 14px;font-size:13px;line-height:1.5}.umtl-cardDiscard{border-color:var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);background:0 0}.umtl-cardDiscard:hover:not(:disabled){color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-dimmed)}.umtl-cardSave{background:var(--dsw-alias-label-primary);color:var(--dsw-alias-bg-layer-3)}.umtl-cardDiscard:disabled,.umtl-cardSave:disabled{opacity:.4;cursor:default}.umtl-cardDiscard:focus-visible,.umtl-cardSave:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}.umtl-seg{display:flex;gap:6px;background:var(--dsw-alias-bg-layer-3);border:1px solid var(--dsw-alias-border-l2);border-radius:999px;padding:3px}.umtl-segBtn{appearance:none;border:0;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:13px;line-height:1.5;padding:4px 14px;border-radius:999px;cursor:pointer;transition:background .16s,color .16s}.umtl-segBtn.is-active{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);box-shadow:0 1px 2px color-mix(in srgb,var(--dsw-alias-label-primary) 10%,transparent);border:1px solid var(--dsw-alias-border-l2)}.umtl-switchSm{position:relative;display:inline-block;width:40px;height:24px;cursor:pointer;flex:none;border:none;padding:0;background:transparent;border-radius:999px}.umtl-switchSmTrack{position:absolute;inset:0;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);box-shadow:inset 0 1px 2px rgba(0,0,0,0.12);border-radius:999px;transition:background .2s,border-color .2s,box-shadow .2s}.umtl-switchSmTrack.is-checked{background:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-label-primary);box-shadow:none}.umtl-switchSmKnob{position:absolute;top:2px;left:2px;width:20px;height:20px;background:var(--dsw-alias-label-tertiary);border:1px solid var(--dsw-alias-label-tertiary);border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,0.18);transition:left .2s,background .2s,border-color .2s}.umtl-switchSmKnob.is-checked{left:18px;background:var(--dsw-alias-bg-base);border-color:var(--dsw-alias-bg-base);box-shadow:0 1px 2px rgba(0,0,0,0.18)}.umtl-switchSm:hover .umtl-switchSmTrack:not(.is-checked){border-color:var(--dsw-alias-label-dimmed);opacity:0.9} .umtl-switchSm:hover .umtl-switchSmTrack.is-checked{opacity:0.9}.umtl-switchSm:disabled{opacity:.5;cursor:default}';
      const styleEl = document.createElement('style');
      styleEl.textContent = css;
      document.head.appendChild(styleEl);
      ctx.effect(() => () => styleEl.remove());
      // P1+P2: 卸载时清理 localStorage 与全局变量残留
      ctx.effect(() => () => {
        try {
          if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('umtl:enabled');
            localStorage.removeItem('umtl:position');
            localStorage.removeItem('umtl:debug');
            localStorage.removeItem('umtl:hinted');
            localStorage.removeItem('umtl:migrated-to-scope');
          }
        } catch {}
        try { delete window.__UMTL__; } catch {}
        try { delete window.__UMTL_DEBUG__; } catch {}
      });

      function isEnabled() {
        try { return window.localStorage.getItem('umtl:enabled') !== 'false'; } catch(e){ return true; }
      }
      // v0.2: settingsScope 主源，localStorage 仅作迁移桥与降级
      let umtlScope = null;
      try { const ss = ctx.get("settingsScope"); if(ss) umtlScope = ss.bind({ namespace: "user-message-timeline" }); } catch(e){}
      function getEnabledFromScope(){
        try{ if(umtlScope){ const s=umtlScope.getSnapshot(); if(s && s.value) return s.value.enabled !== false; } }catch(e){}
        return isEnabled();
      }
      function getPositionFromScope(){
        try{ if(umtlScope){ const s=umtlScope.getSnapshot(); if(s && s.value && s.value.position) return s.value.position; } }catch(e){}
        try{ const p=window.localStorage.getItem('umtl:position'); if(p==="left"||p==="right") return p; }catch(e){}
        return "left";
      }
      let enabled = getEnabledFromScope();
      let initialPosition = getPositionFromScope();
      // 一次性迁移旧 localStorage（v0.2.1：MIGRATION_KEY 防重复，支持同步及订阅水合）
      const MIGRATION_KEY = 'umtl:migrated-to-scope';
      function tryMigrate(val){
        try{
          if(!umtlScope) return;
          try{ if(window.localStorage.getItem(MIGRATION_KEY)==='1') return; }catch(e){}
          if(val===undefined){
            try{ const snap=umtlScope.getSnapshot(); if(snap && snap.value) val=snap.value; }catch(e){}
          }
          if(!val) return;
          if(window.localStorage.getItem('umtl:enabled')==='false' && val.enabled!==false){
            try{ umtlScope.set("enabled", false).catch(()=>{}); }catch(e){}
            try{ window.localStorage.removeItem('umtl:enabled'); }catch(e){}
          }
          const lp=window.localStorage.getItem('umtl:position');
          if((lp==="left"||lp==="right") && val.position!==lp){
            try{ umtlScope.set("position", lp).catch(()=>{}); }catch(e){}
            try{ window.localStorage.removeItem('umtl:position'); }catch(e){}
          }
          try{ window.localStorage.setItem(MIGRATION_KEY,'1'); }catch(e){}
        }catch(e){}
      }
      tryMigrate();
      // 调试日志（默认关，localStorage umtl:debug=1 开启，不影响性能）
      const isDebug = ()=>{ try{ return window.localStorage.getItem('umtl:debug')==='1' || !!window.__UMTL_DEBUG__; }catch(e){ return false; } };
      const umtlLog = (...args)=>{ if(!isDebug()) return; try{ const msg='[umtl] '+args.map(a=> typeof a==='object'?JSON.stringify(a):String(a)).join(' '); console.log(msg); if(!window.__UMTL__) window.__UMTL__={logs:[], dump:()=>{ try{ const t=window.__UMTL__.logs.join('\n'); console.log(t); try{ navigator.clipboard.writeText(t); }catch(e){} return t; }catch(e){} }}; window.__UMTL__.logs.push(msg); if(window.__UMTL__.logs.length>500) window.__UMTL__.logs.shift(); if(window.__UMTL__.logs.length===1) console.log('[umtl] 调试已开启，复现后执行 copy(__UMTL__.logs.join("\n")) 复制日志'); }catch(e){} };
      try{ if(!window.__UMTL__) window.__UMTL__={logs:[], dump:function(){ try{ const t=this.logs.join('\n'); console.log(t); try{ navigator.clipboard.writeText(t); }catch(e){} return t; }catch(e){ return ''; } }}; }catch(e){}
      // P3-B：混淆类名回退表（集中维护，供 scan / scrollToKey / P2-H 复用）
      const SEL = {
        ROOT: '.wSkVaW_root',
        ROOT_ALT: '.Md3f7G_root',
        BUBBLE: '.gdEzaW_bubble',
        OLDER: '.Md3f7G_older',
        TURN_STATUS: '.Md3f7G_turnStatus',
        CONV_SCROLL: '[data-conversation-scroll]',
        HERO_ROW: '.wSkVaW_heroWorkspaceRow',
      };

      // P0-3/T1-4：TreeWalker 增量读取，累计 ~320 字符即停；压缩空格但保留换行段落结构
      function extractText(el){
        const b=el.querySelector(SEL.BUBBLE)||el;
        let raw='';
        try{
          const w=document.createTreeWalker(b,NodeFilter.SHOW_TEXT,null);
          let n=w.nextNode();
          while(n && raw.length<340){
            const p=n.parentElement;
            const tag=p?p.tagName:'';
            if(tag!=='SCRIPT'&&tag!=='STYLE'&&tag!=='NOSCRIPT') raw+=(n.nodeValue||'');
            n=w.nextNode();
          }
        }catch(e){ try{ raw=(b.textContent||'').slice(0,360); }catch(_){ } }
        // T1-4：仅压缩连续空格/制表符，保留 \n；≥3 连换行折叠为一个空行
        return raw.replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim();
      }
      function extractTime(el){
        try{
          const tEl=el.querySelector('time, [data-time], [class*="time"], [class*="Time"]');
          if(tEl){
            const v=tEl.getAttribute('datetime')||tEl.getAttribute('data-time')||tEl.getAttribute('title')||tEl.textContent||'';
            if(v && /\d/.test(v)) return v.trim().slice(0,16);
          }
          const dt=el.getAttribute('data-time')||el.getAttribute('data-timestamp');
          if(dt) return new Date(Number(dt)).toLocaleString().slice(0,16);
          const title=el.getAttribute('title');
          if(title && /\d{1,2}:\d{2}/.test(title)) return title.trim().slice(0,16);
        }catch(e){}
        return '';
      }
      function getScrollRoot(){
        try{
          // 优先用 SEL.CONV_SCROLL 向上找真正可滚的
          const primary=document.querySelector(SEL.CONV_SCROLL);
          if(primary){
            let n=primary;
            while(n && n!==document.body){
              try{
                const s=window.getComputedStyle(n);
                if((s.overflowY==='auto'||s.overflowY==='scroll'||s.overflowY==='overlay') && n.scrollHeight>n.clientHeight+4) return n;
              }catch(e){}
              n=n.parentElement;
            }
            umtlLog('getScrollRoot primary', {tag: primary.tagName, h: primary.scrollHeight, ch: primary.clientHeight});
            return primary;
          }
          // 兜底：从 anchor 向上找最深的可滚祖先
          const anchor=document.querySelector('[data-chat-anchor-key]');
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
          const fallback=document.querySelector('[data-conversation-scroll]') || document.querySelector('main [class*="scroll"]') || document.scrollingElement || document.documentElement;
          umtlLog('getScrollRoot fallback', {tag: fallback?.tagName, cls: fallback?.className?.slice(0,40), h: fallback?.scrollHeight, ch: fallback?.clientHeight});
          return fallback;
        }catch(e){ try{ return document.querySelector(SEL.CONV_SCROLL)||null; }catch(_){ return null; } }
      }
      // B2：确保滚动容器已水合（轮询至可滚动或超时，期间不改 scrollTop）
      function ensureScrollRoot(timeout=900){
        return new Promise(resolve=>{
          const start=Date.now();
          const tick=()=>{
            try{
              const r=getScrollRoot();
              if(r && r.scrollHeight>r.clientHeight+8) return resolve(r);
            }catch(e){}
            if(Date.now()-start>=timeout){ try{ resolve(getScrollRoot()); }catch(e){ resolve(null);} return; }
            const d=Math.min(60, timeout-(Date.now()-start));
            window.setTimeout(()=>{ if(window.requestAnimationFrame) window.requestAnimationFrame(tick); else tick(); }, d);
          };
          if(window.requestAnimationFrame) window.requestAnimationFrame(tick); else tick();
        });
      }
      // B1：pollScan 稳定化（连续两拍一致或 hasMore 翻转即停，需在 Timeline 内有 hasMoreRef/markersRef/scan）
      // 占位实现将在 Timeline 内重定义为闭包，此处预留全局兜底（不依赖 React refs）
      function pollScanGlobal(max=8, interval=260){
        return new Promise(resolve=>{
          let count=0;
          const step=()=>{
            try{ if(typeof scan==='function') try{ scan(); }catch(e){} }catch(e){}
            count++;
            if(count>=max) return resolve();
            window.setTimeout(step, interval);
          };
          window.setTimeout(step, interval);
        });
      }
      // P2-H：分页 Older 按钮检测（SEL.OLDER + 文案兜底，供 scan 与 scrollToKey 共用）
      function findOlderBtn(){
        try{
          let btn=document.querySelector(SEL.OLDER + ' button:not([disabled])');
          if(btn) return btn;
          const all=document.querySelectorAll('button');
          for(let i=0;i<all.length;i++){
            const b=all[i];
            if(b.disabled) continue;
            const txt=(b.textContent||'').trim();
            if(/加载更多|Load more/i.test(txt)) return b;
          }
          const wrap=document.querySelector(SEL.OLDER);
          if(wrap){
            const b=wrap.querySelector('button');
            if(b && !b.disabled) return b;
          }
        }catch(e){}
        return null;
      }
      function isOlderBtn(){ try{ return !!findOlderBtn(); }catch(e){ return false; } }
      // P0-3：markers 浅比较，无变化不触发 setState，消除每 800ms 强制全量 reconcile
      function markersEqual(a,b){
        if(a===b) return true;
        if(!a||!b||a.length!==b.length) return false;
        for(let i=0;i<a.length;i++){
          if(a[i].key!==b[i].key||a[i].preview!==b[i].preview||a[i].bm!==b[i].bm||a[i].time!==b[i].time||a[i].status!==b[i].status||a[i].hasImage!==b[i].hasImage||a[i].isOlder!==b[i].isOlder) return false;
        }
        return true;
      }

      function Timeline() {
        const [markers,setMarkers]=React.useState([]);
        const [activeKey,setActiveKey]=React.useState(null);
        const [visible,setVisible]=React.useState(false);
        // T2.2：tipData 常驻不置空（DOM 稳定→入场动画只播一次），显隐由 tipVisible/is-open 门控
        const [tipData,setTipData]=React.useState(null);
        const [tipVisible,setTipVisible]=React.useState(false);
        const [hoveredKey,setHoveredKey]=React.useState(null);
        // P2-H：分页 hasMore 与头丸加载态
        const [hasMore,setHasMore]=React.useState(false);
        const [olderLoading,setOlderLoading]=React.useState(false);
        const hasMoreRef=React.useRef(false);
        const [isTimelineHovered,setIsTimelineHovered]=React.useState(false);
        const [enabledState,setEnabledState]=React.useState(enabled);
        const [positionState,setPositionState]=React.useState(initialPosition);
        const [scrollReady,setScrollReady]=React.useState(false); // B2 D 所见即可点：滚动容器就绪才可点
        const [entered,setEntered]=React.useState(false); // P1-6：入场编排仅播一次
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
        const dragTargetRef=React.useRef(null); // P0-1：拖拽中最后目标，松手后 smooth 对齐
        const enteredRef=React.useRef(false);
        const openTimerRef=React.useRef(null);  // T2.2：开泡分级延迟定时器
        const hideTimerRef=React.useRef(null);  // T2.4：root leave 宽容期/移出气泡防抖
        const tipVisibleRef=React.useRef(false);
        const suppressTipRef=React.useRef(false); // T2.1：拖拽期间抑制气泡
        const followRafRef=React.useRef(0);       // T2.3：rAF 跟随器

        // v0.2: scope 订阅主源，storage 仅作旧 DSH 降级
        React.useEffect(()=>{
          if(umtlScope){
            try{
              const sync = ()=>{
                try{
                  const snap = umtlScope.getSnapshot();
                  const v = snap && snap.value;
                  if(v){
                    tryMigrate(v);
                    setEnabledState(v.enabled !== false);
                    if(v.position==="left"||v.position==="right") setPositionState(v.position);
                  }
                }catch(e){}
              };
              sync();
              const unsub = umtlScope.subscribe(sync);
              return ()=>{ try{ unsub(); }catch(e){} };
            }catch(e){}
          }
          // 降级：无 scope 时走 localStorage
          const onStorage=(e)=>{
            if(e.key==='umtl:enabled' || e.key===null) setEnabledState(isEnabled());
            if(e.key==='umtl:position' || e.key===null){
              try{ const p=window.localStorage.getItem('umtl:position'); if(p==="left"||p==="right") setPositionState(p); }catch(e){}
            }
          };
          window.addEventListener('storage', onStorage);
          return ()=>{ window.removeEventListener('storage', onStorage); };
        },[]);

        React.useEffect(()=>{ activeRef.current=activeKey; },[activeKey]);
        React.useEffect(()=>{ markersRef.current=markers; },[markers]);
        // P1-6：首次可见时置位 stagger，之后不再重播
        React.useEffect(()=>{ if(visible && !enteredRef.current){ enteredRef.current=true; setEntered(true); } },[visible]);
        // B2 D 所见即可点：短会话立即就绪，长会话等待容器可滚（D 淡入）
        React.useEffect(()=>{
          if(markers.length===0 || !enabledState){ setScrollReady(false); return; }
          // B3 短会话（≤16）无需等待滚动容器，立即就绪，保证玻璃 hover 立即可见
          if(markers.length<=16){
            setScrollReady(true);
            return;
          }
          let cancelled=false;
          ensureScrollRoot(1200).then(r=>{
            if(cancelled) return;
            window.setTimeout(()=>{ if(!cancelled) setScrollReady(true); }, 80);
          }).catch(()=>{ if(!cancelled) setScrollReady(true); });
          return ()=>{ cancelled=true; };
        },[markers.length, enabledState]);

        React.useEffect(()=>{
          let lastLeft=-1;
          let lastDur=-1;
          let lastEase='';
          // upd 支持 force：push 结束时强制写入最终值，避免 1px 余量被 CSS transition 再动画导致回跳
          let lastRight=-1;
          const RIGHT_SEL = ['[data-side="right"]','[class*="rightSidebar"]','[class*="RightSidebar"]','[class*="sidebar"][class*="right"]','aside[class*="right"]','.wSkVaW_right','.wSkVaW_sidebarRight'];
          const upd=(force)=>{
            if(document.hidden) return;
            try{
              const conv=document.querySelector(SEL.CONV_SCROLL);
              if(!conv) return;
              let col=conv.closest(SEL.ROOT)||conv.closest(SEL.ROOT_ALT)||conv.parentElement;
              if(!col) col=conv;
              const rect=col.getBoundingClientRect();
              const isRight = positionState==="right";
              // 同步 is-right 类到 root（供 CSS 切换 left/right）
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
              // 优先 wSkVaW_root，其次侧边栏，避免命中无关 sidebar 元素
              const sb=document.querySelector(SEL.ROOT)||document.querySelector('[class*="sidebar"]')||document.querySelector('[class*="Sidebar"]')||document.querySelector('.sidebar');
              if(!sb) return;
              const cs=window.getComputedStyle(sb);
              // duration 可能是多值 "0.22s, 0.22s"，取首值
              const dRaw=(cs.transitionDuration||'0.22s').split(',')[0].trim();
              let ms=220;
              if(dRaw.includes('ms')) ms=parseFloat(dRaw);
              else if(dRaw.includes('s')) ms=parseFloat(dRaw)*1000;
              if(!isFinite(ms)||ms<50) ms=220;
              // timingFunction 含逗号时不能简单 split，要取完整 cubic-bezier
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
          const conv=document.querySelector(SEL.CONV_SCROLL);
          if(conv) ro.observe(conv);
          const col2=document.querySelector(SEL.ROOT)||document.querySelector(SEL.ROOT_ALT);
          if(col2) ro.observe(col2);
          const sidebar=document.querySelector('.sidebar')||document.querySelector('[class*="sidebar"]')||document.querySelector('[class*="Sidebar"]');
          if(sidebar) try{ ro.observe(sidebar); }catch(e){}
          try{ ro.observe(document.body); }catch(e){}
          // P0-2：add/remove 必须是同一个具名 handler 引用，否则永远移除不掉（泄漏）
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
          // 结束推式：以无动画写入最终位置，两帧后恢复 transition，避免末帧 1px 被 CSS 再动画导致向右回跳
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
            if(rafActive) return; // 防 transitionstart/run/click 同帧多次触发
            rafActive=true;
            if(rootRef.current) rootRef.current.classList.add('umtl-pushing');
            const loop=()=>{ if(!rafActive) return; upd(); rafId=window.requestAnimationFrame(loop); };
            rafId=window.requestAnimationFrame(loop);
            const ms=parseDur();
            endTimer=window.setTimeout(finishPush, (isFinite(ms)?ms:220)+40);
          };
          const onTrans=(e)=>{
            if(!e.target || !e.target.closest) return;
            if(!e.target.closest('.wSkVaW_root, [class*="sidebar"], [class*="Sidebar"], .sidebar')) return;
            startPush();
          };
          document.addEventListener('transitionstart', onTrans);
          document.addEventListener('transitionrun', onTrans);
          const onTransEnd=(e)=>{
            if(e && e.propertyName && !/transform|width|left|margin/.test(e.propertyName)) return;
            if(!rafActive) return;
            if(e && e.target && e.target.closest){
              if(!e.target.closest('.wSkVaW_root, [class*="sidebar"], [class*="Sidebar"], .sidebar')) return;
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
        },[positionState]);

        const scan=React.useCallback(()=>{
          try{
            const all=Array.from(document.querySelectorAll('[data-chat-anchor-key]'));
            const seen=new Map(); const out=[];
            const running=document.querySelector(SEL.TURN_STATUS)!==null; // 提到循环外，每轮只查一次
            for(let i=0;i<all.length;i++){
              const el=all[i]; const kind=el.getAttribute('data-chat-flow-kind')||'';
              if(kind!=='user' && kind!=='steering') continue;
              const key=el.getAttribute('data-chat-anchor-key');
              if(!key || seen.has(key)) continue;
              seen.set(key,true);
              const text=extractText(el);
              const preview=text.slice(0,300); // T1-3：buffer 与 6 行 clamp 匹配
              const bm=el.hasAttribute('data-bookmarked')||text.includes('📌')||!!el.querySelector('[data-bookmark]');
              const time=extractTime(el);
              const status=running && i===all.length-1 ? '进行中' : '已完成';
              // T3 类型标记（简化版）：仅区分是否含图，探测整条锚点 el（含 bubble 外的附件区）
              let hasImage=false;
              try{ hasImage = !!el.querySelector('img'); }catch(e){}
              out.push({key,preview,bm,time,status,hasImage});
            }
            const hm=isOlderBtn();
            if(hm!==hasMoreRef.current){ hasMoreRef.current=hm; setHasMore(hm); }
            if(hm){
              out.unshift({key:'__older__', isOlder:true, preview:'加载更早轮次', bm:false, time:'', status:'', hasImage:false});
            }
            umtlLog('scan', {count: out.length, hasMore: hm, first: out[0]?.key, last: out[out.length-1]?.key, hasImage: out.filter(x=>x.hasImage).length});
            if(!markersEqual(markersRef.current,out)){ markersRef.current=out; setMarkers(out); }
          }catch(e){}
        },[]);
        // B1：pollScan（保留供头丸稳定化，B1 暂不启用拓宽但保留轮询能力）
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

        React.useEffect(()=>{
          scan();
          try{ if(window.requestAnimationFrame) window.requestAnimationFrame(scan); }catch(e){}
          const t1=window.setTimeout(scan,80);
          const t2=window.setTimeout(scan,250);
          let debounce=null;
          const debouncedScan=()=>{
            if(debounce) window.clearTimeout(debounce);
            debounce=window.setTimeout(()=>{ if(!document.hidden){ scan(); } debounce=null; },80);
          };
          const mo=new MutationObserver(debouncedScan);
          const target=document.querySelector(SEL.CONV_SCROLL)||document.body;
          mo.observe(target,{childList:true,subtree:true,characterData:true});
          const bodyMo=new MutationObserver(debouncedScan);
          bodyMo.observe(document.body,{childList:true,subtree:true});
          const rootEl=document.querySelector(SEL.ROOT);
          if(rootEl) mo.observe(rootEl,{attributes:true,attributeFilter:['data-phase']});
          const olderWrap=document.querySelector(SEL.OLDER);
          if(olderWrap) try{ mo.observe(olderWrap,{childList:true,subtree:true,characterData:true}); }catch(e){}
          return ()=>{ mo.disconnect(); bodyMo.disconnect(); window.clearTimeout(t1); window.clearTimeout(t2); if(debounce) window.clearTimeout(debounce); };
        },[scan]);

        React.useEffect(()=>{
          const check=()=>{
            if(document.hidden) return;
            const count=markersRef.current.length;
            let isBlank=false;
            const pr=document.querySelector(SEL.ROOT);
            if(pr){ const ph=pr.getAttribute('data-phase'); if(ph==='hero'||ph==='settling') isBlank=true; }
            if(document.querySelector(SEL.HERO_ROW) && count===0) isBlank=true;
            let heightOk=true;
            if(rootRef.current){ const h=rootRef.current.getBoundingClientRect().height; if(h>0 && h<36 && count>2) heightOk=false; else if(h===0 && count>0) heightOk=true; }
            if(!document.querySelector(SEL.CONV_SCROLL)) heightOk=false;
            const show=count>=1 && !isBlank && enabledState;
            const readyShow=show && scrollReady && heightOk;
            umtlLog('check', {count, isBlank, heightOk, h: rootRef.current?rootRef.current.getBoundingClientRect().height:0, scrollReady, enabledState, show, readyShow, hasMore: hasMoreRef.current});
            setVisible(readyShow);
          };
          check();
          const t=window.setTimeout(check,120);
          const ro2=new ResizeObserver(()=>{ if(!document.hidden) check(); });
          if(rootRef.current) ro2.observe(rootRef.current);
          const sp=document.querySelector(SEL.CONV_SCROLL);
          if(sp) ro2.observe(sp);
          const onResize=()=>{ if(!document.hidden) check(); };
          window.addEventListener('resize',onResize);
          // P3-A: 单调度器兜底 2s（原 500+800+400 合并），document.hidden 时暂停
          let iv=null;
          const startIv=()=>{
            if(iv) return;
            iv=window.setInterval(()=>{
              if(document.hidden) return;
              scan();
              check();
              if(umtlScope){
                try{
                  const snap=umtlScope.getSnapshot();
                  const v=snap&&snap.value;
                  if(v){ setEnabledState(v.enabled!==false); if(v.position==="left"||v.position==="right") setPositionState(v.position); }
                }catch(e){}
              } else {
                setEnabledState(isEnabled());
              }
            },2000);
          };
          const stopIv=()=>{ if(iv){ window.clearInterval(iv); iv=null; } };
          startIv();
          const onVisibilityChange=()=>{
            if(document.hidden){ stopIv(); }
            else {
              startIv(); scan(); check();
              if(umtlScope){
                try{
                  const snap=umtlScope.getSnapshot();
                  const v=snap&&snap.value;
                  if(v){ setEnabledState(v.enabled!==false); if(v.position==="left"||v.position==="right") setPositionState(v.position); }
                }catch(e){}
              } else {
                setEnabledState(isEnabled());
              }
            }
          };
          document.addEventListener('visibilitychange', onVisibilityChange);
          return ()=>{ window.clearTimeout(t); stopIv(); ro2.disconnect(); window.removeEventListener('resize',onResize); document.removeEventListener('visibilitychange', onVisibilityChange); };
        },[markers.length, enabledState, scan, scrollReady]);

        React.useEffect(()=>{
          if(!markers.length) return;
          const root=getScrollRoot();
          const allEls=Array.from(document.querySelectorAll('[data-chat-anchor-key]'));
          const userEls=allEls.filter(el=>el.getAttribute('data-chat-flow-kind')==='user');
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
        },[markers]);

        const prefersReduced=()=>{ try{ return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }catch(e){ return false; } };
        const locateKey=(key)=>{ try{ return document.querySelector('[data-chat-anchor-key="'+CSS.escape(key)+'"]'); }catch(e){ return null; } };

        // ===== T2 tooltip：sticky 常驻 + 分级延迟 + rAF 跟随 =====
        const stopFollow=()=>{ if(followRafRef.current){ window.cancelAnimationFrame(followRafRef.current); followRafRef.current=0; } };
        const hideTip=()=>{
          if(openTimerRef.current){ window.clearTimeout(openTimerRef.current); openTimerRef.current=null; }
          tipVisibleRef.current=false;
          setTipVisible(false);
          stopFollow();
        };
        // P2-G：预览会话统一出口——关气泡 + 清悬停信号，杜绝各出口清理不对称
        const endPreviewSession=()=>{
          setHoveredKey(null);
          hideTip();
        };
        // 计算某 key 的气泡定位与内容（首帧用；此后跟随器逐帧实测自校正）
        const placeTip=(key)=>{
          try{
            const el=rootRef.current?rootRef.current.querySelector('[data-key="'+CSS.escape(key)+'"]'):null;
            if(!el) return null;
            const rect=el.getBoundingClientRect();
            const m=markersRef.current.find(z=>z.key===key);
            const GAP=10, estW=240;
            const centerY=rect.top+rect.height/2;
            const len=m?(m.preview||'').length:0;
            let estH=66; // 粗估仅供首帧，跟随器下一帧按 offsetHeight 实测校正
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
            return {key,preview:m?m.preview:'',bm:m?m.bm:false,time:m?m.time:'',status:m?m.status:'',hasImage:m?m.hasImage:false,isOlder:m?m.isOlder:false,left,top,isLeft};
          }catch(e){ return null; }
        };
        // T2.3：存活期间 rAF 跟随 marker 实时 rect（导轨自滚/推式都不悬空）；直写样式零 reconcile
        const startFollow=(key)=>{
          stopFollow();
          const step=()=>{
            followRafRef.current=0;
            if(!tipVisibleRef.current || document.hidden || suppressTipRef.current) return;
            const tip=tipRef.current;
            if(!tip) return;
            let el=null;
            try{ el=rootRef.current?rootRef.current.querySelector('[data-key="'+CSS.escape(key)+'"]'):null; }catch(_){}
            if(!el){ hideTip(); return; } // marker 已不存在（切会话等）
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
        // T2.2：开泡唯一入口。覆盖 onMouseEnter 与 elementFromPoint 两条路径；
        // 分级延迟：已可见连续目标 60ms，首次 150ms（Radix/shadcn 成熟做法）
        React.useEffect(()=>{
          if(!hoveredKey) return;
          if(draggingRef.current || suppressTipRef.current) return; // T2.1：拖拽期间不调度
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
        // T2.4：Esc 关闭
        React.useEffect(()=>{
          if(!tipVisible) return;
          const onEsc=(e)=>{ if(e.key==='Escape'){ endPreviewSession(); } };
          document.addEventListener('keydown',onEsc);
          return ()=>document.removeEventListener('keydown',onEsc);
        },[tipVisible]);
        // 目标失效守护：markers 变化后当前 tipData.key 不存在 → 收起
        React.useEffect(()=>{
          if(tipData && tipVisibleRef.current && !markers.some(z=>z.key===tipData.key)) hideTip();
        },[markers]); // eslint-disable-line react-hooks/exhaustive-deps
        // 开关关闭时收起气泡（禁用分支仍会渲染常驻节点）
        React.useEffect(()=>{ if(!enabledState) hideTip(); },[enabledState]); // eslint-disable-line react-hooks/exhaustive-deps

        // ===== T3 onboarding：首次出现且 ≥3 轮时弹一次性提示，任意交互或 4s 淡出 =====
        React.useEffect(()=>{
          if(!visible || markers.length<3) return;
          let hinted=false;
          try{ hinted=window.localStorage.getItem('umtl:hinted')==='1'; }catch(e){}
          if(hinted) return;
          const t=window.setTimeout(()=>{
            try{ window.localStorage.setItem('umtl:hinted','1'); }catch(e){} // 触发即记账，刷新不复播
            setHintClosing(false); setHint(true);
          },600); // 等 stagger 入场与布局稳定
          return ()=>window.clearTimeout(t);
        },[visible,markers.length]);
        // 显示期间：定位一次（读导轨实时 rect）+ 4s 自动进入收场
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
        // 收场动画播完再卸载
        React.useEffect(()=>{
          if(!hintClosing) return;
          const t=window.setTimeout(()=>{ setHint(false); setHintClosing(false); },220);
          return ()=>window.clearTimeout(t);
        },[hintClosing]);
        // 存续期任一交互立即收场（独立挂卸，不侵入既有 handler）
        React.useEffect(()=>{
          if(!hint || hintClosing) return;
          const root=rootRef.current; if(!root) return;
          const off=()=>setHintClosing(true);
          root.addEventListener('pointerdown',off,{passive:true});
          root.addEventListener('wheel',off,{passive:true});
          root.addEventListener('keydown',off);
          return ()=>{ root.removeEventListener('pointerdown',off,{passive:true}); root.removeEventListener('wheel',off,{passive:true}); root.removeEventListener('keydown',off); };
        },[hint,hintClosing]);

        // 平滑对齐（点击跳转、拖拽松手收尾）；reduced-motion 时降级为 instant
        const doScrollTop=(el)=>{
          try{
            el.scrollIntoView({behavior:prefersReduced()?'auto':'smooth', block:'start'});
            setActiveKey(el.getAttribute('data-chat-anchor-key'));
          }catch(e){ try{ el.scrollIntoView({behavior:'instant', block:'start'}); }catch(_){} }
        };
        // P0-1：拖拽跟手用瞬时 scrollTop 直写，避免连续 smooth 动画互相打断导致画面抽搐
        const jumpInstant=(el)=>{
          try{
            setActiveKey(el.getAttribute('data-chat-anchor-key'));
            const root=getScrollRoot();
            if(root){
              const top=el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - 14; // 对齐 scroll-margin-top:14px
              root.scrollTop=top;
            } else {
              el.scrollIntoView({block:'start'});
            }
          }catch(e){}
        };
        // P2-H 统一分页加载（首击680ms，后续420ms，与 scrollToKey 对齐；hidden/disabled 早退；首击前滚顶暴露按钮）
        const loadAllOlder=React.useCallback(async (limit=20)=>{
          for(let attempt=0; attempt<limit; attempt++){
            if(document.hidden) break;
            if(attempt===0){
              const root=getScrollRoot(); if(root) try{ root.scrollTop=0; }catch(e){}
            }
            const btn=findOlderBtn();
            if(!btn || btn.disabled) break;
            try{ btn.click(); }catch(e){}
            await new Promise(r=> window.setTimeout(r, attempt===0?680:420));
            if(!isOlderBtn()) break;
          }
        },[]);
        const scrollToKey=async (key, attempt=0, instant=false)=>{
          try{
            umtlLog('scrollToKey', {key, attempt, instant, hasEl: !!locateKey(key), hasMore: hasMoreRef.current, rootH: getScrollRoot()?.scrollHeight});
            const el=locateKey(key);
            if(el){ if(instant) jumpInstant(el); else doScrollTop(el); umtlLog('scrollToKey hit', {key}); return; }
            // B2 模糊锚定回退（预览文本兜底，分页未命中时按文本匹配）
            if(attempt>=14){
              try{
                const targetPreview=(markersRef.current.find(m=>m.key===key)||{}).preview||'';
                const needle=targetPreview.slice(0,12);
                if(needle){
                  const allEls=Array.from(document.querySelectorAll('[data-chat-anchor-key]'));
                  for(let i=0;i<allEls.length;i++){
                    const cand=allEls[i];
                    try{
                      const txt=extractText(cand).slice(0,24);
                      if(txt.includes(needle)){
                        if(instant) jumpInstant(cand); else doScrollTop(cand);
                        return;
                      }
                    }catch(e){}
                  }
                }
              }catch(e){}
            }
            if(attempt>=20) return;
            let root=getScrollRoot();
            // B2 冷启预热：首跳前确保容器已水合，冷启时 scrollHeight==clientHeight 需轻推唤醒
            if(attempt===0){
              try{
                // 先尝试同步轻推
                if(root && root.scrollHeight<=root.clientHeight+8){
                  try{ root.dispatchEvent(new WheelEvent('wheel',{deltaY:1,bubbles:true, deltaMode:0})); }catch(e){}
                  try{ root.scrollTop+=1; root.scrollTop-=1; }catch(e){}
                }
              }catch(e){}
              try{
                // 异步等待水合（最多 900ms），期间不阻塞但首跳会多等一拍保证按钮出现
                root = await ensureScrollRoot(900);
                if(root) try{ root.scrollTop=0; }catch(e){}
                // 给 DSH 一拍时间把“加载更多”按钮渲染出来
                await new Promise(r=> setTimeout(r, 140));
              }catch(e){}
            }
            const btn=findOlderBtn();
            if(btn && !btn.disabled){
              try{ btn.click(); }catch(e){}
              window.setTimeout(()=> scrollToKey(key, attempt+1, instant), attempt===0?680:420);
            } else if(attempt<14){
              if(root) try{ root.scrollTop=0; }catch(e){}
              window.setTimeout(()=> scrollToKey(key, attempt+1, instant), 420);
            }
          }catch(e){}
        };
        const findNearestByY=(y)=>{
          const dots=rootRef.current?Array.from(rootRef.current.querySelectorAll('.umtl-marker')):[];
          let closest=null, min=Infinity;
          for(let i=0;i<dots.length;i++){
            const m=markersRef.current[i];
            if(m && m.isOlder) continue; // P2-H 头丸不参与拖拽定位
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
        // P2-B Scrub HUD：直写 DOM（位置随指针、文本随目标变化），不触发 React 渲染
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
            const suffix=hm ? ' · 还有更早' : '';
            el.textContent='第 '+(idx+1)+' / '+total+' 轮'+suffix+' · '+(raw.length>12 ? raw.slice(0,12)+'…' : raw);
          }catch(_){}
        };
        const onEnter=(m)=>{ setHoveredKey(m.key); }; // 开泡统一走 hoveredKey effect（T2.2）
        const onDown=(e)=>{
          if(e.button!==0) return;
          draggingRef.current=true;
          dragTargetRef.current=null;
          suppressTipRef.current=true; // T2.1：按下起抑制气泡
          if(openTimerRef.current){ window.clearTimeout(openTimerRef.current); openTimerRef.current=null; }
          hideTip();
          try{ e.currentTarget.setPointerCapture(e.pointerId); }catch(_){}
          const near=findNearestByY(e.clientY);
          if(near){ dragTargetRef.current=near.key; scrollToKey(near.key); } // 首次按下保持平滑跳转手感
          setHudOn(true); hudKeyRef.current=null; hudWrite(e.clientX,e.clientY); if(dragTargetRef.current) hudText(dragTargetRef.current); // P2-B：HUD 上屏
          e.preventDefault();
        };
        const onMove=(e)=>{
          if(isTimelineHovered){
            if(rafPendingRef.current) return;
            rafPendingRef.current=true;
            const x=e.clientX, y=e.clientY;
            const run=()=>{
              rafPendingRef.current=false;
              updateHoveredByPoint(x,y);
              if(draggingRef.current){
                let target=null;
                try{ const el=document.elementFromPoint(x,y); if(el){ const m=el.closest('.umtl-marker'); if(m){ const k=m.getAttribute('data-key'); if(k) target=markersRef.current.find(z=>z.key===k); } } }catch(_){}
                if(!target) target=findNearestByY(y);
                if(target){ dragTargetRef.current=target.key; scrollToKey(target.key,0,true); } // 拖拽中一律瞬时跟手
                hudWrite(x,y);
                if(dragTargetRef.current) hudText(dragTargetRef.current);
              }
            };
            window.requestAnimationFrame(run);
          } else if(draggingRef.current){
            const target=findNearestByY(e.clientY);
            if(target){ dragTargetRef.current=target.key; scrollToKey(target.key,0,true); }
            hudWrite(e.clientX,e.clientY);
            if(dragTargetRef.current) hudText(dragTargetRef.current);
          }
        };
        const onUp=(e)=>{
          draggingRef.current=false;
          setHudOn(false); // P2-B：HUD 淡出（文本冻结待下次覆盖）
          suppressTipRef.current=false; // T2.1：松手恢复（不主动补弹，下次 hover 再出）
          try{ e.currentTarget.releasePointerCapture(e.pointerId);}catch(_){}
          // 松手后对最终目标做一次平滑对齐收尾
          if(dragTargetRef.current){
            const el=locateKey(dragTargetRef.current);
            dragTargetRef.current=null;
            if(el) doScrollTop(el);
          }
        };
        const onRootEnter=()=>{
          setIsTimelineHovered(true);
          // 从气泡/空白区回到导轨：取消未决的隐藏计时（命中 marker 时 effect 也会取消，双保险）
          if(hideTimerRef.current){ window.clearTimeout(hideTimerRef.current); hideTimerRef.current=null; }
        };
        const onRootLeave=()=>{
          setIsTimelineHovered(false);
          setHoveredKey(null);
          if(openTimerRef.current){ window.clearTimeout(openTimerRef.current); openTimerRef.current=null; }
          // T2.4：260ms 宽容期，给指针经 gap 移入气泡的时间；入泡会取消
          if(hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
          hideTimerRef.current=window.setTimeout(()=>{ hideTimerRef.current=null; endPreviewSession(); },260);
        };
        const onTipEnter=()=>{ // 指针移入气泡：取消隐藏计时，保持显示以便选中复制
          if(hideTimerRef.current){ window.clearTimeout(hideTimerRef.current); hideTimerRef.current=null; }
        };
        const onTipLeave=()=>{ // 移出气泡：短防抖后关闭（容忍选字划出边缘）
          if(hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
          hideTimerRef.current=window.setTimeout(()=>{ hideTimerRef.current=null; endPreviewSession(); },80);
        };
        const activeIdx=(()=>{ const i=markers.findIndex(m=>m.key===activeKey); return i===-1 ? 0 : i; })();
        const hoveredIdx=markers.findIndex(m=>m.key===hoveredKey);
        // v0.1.6 会话状态机：展开态 = 指针在导轨 OR 气泡存活（含宽容期——tipVisible 到 hideTip 才落 false）
        const sessionActive = isTimelineHovered || tipVisible;
        // 漏斗中心锚点：悬停目标 ?? 预览目标（指针入气泡时钉住）?? active
        const anchorIdx = hoveredIdx!==-1 ? hoveredIdx : (tipData ? markers.findIndex(x=>x.key===tipData.key) : -1);
        // B3 16颗上限可滚（2026-08-25 修正：不再等比收口，N>16 锁死舒适尺寸可滚；density 兼容保留但默认 auto 固定）
        const layout=(()=>{
          const N=markers.length;
          // B1 暂搁，B3 固定：忽略旧压缩，直接锁死
          return {gap:10,mh:14,ph:4,k:1};
        })();
        // tooltip 单一实现：T1.1 无箭头；T1.5 tabular-nums 头部 + 仅"进行中"脉冲徽标；T2.4 可复制；P2-H hasMore 后缀
        const renderTooltip=()=>{
          if(!tipData) return null;
          const isOlderTip=!!tipData.isOlder;
          const allReal=markers.filter(z=>!z.isOlder);
          const realTotal=allReal.length;
          const idx=isOlderTip ? -1 : allReal.findIndex(x=>x.key===tipData.key);
          const suffix=hasMore ? ' · 还有更早' : '';
          return React.createElement('div',{ref:tipRef, className:'umtl-tip'+(tipVisible?' is-open':''), 'aria-live':'polite', 'aria-atomic':'true',
              onPointerEnter:onTipEnter, onPointerLeave:onTipLeave,
              style:{left:tipData.left+'px', top:tipData.top+'px', width:'240px', minHeight:'48px', transformOrigin:tipData.isLeft?'left center':'right center',
                '--umtl-in-x':tipData.isLeft?'-8px':'8px'}}, // ★墨玉玻璃②：入场从药丸侧平移滑出（方向随气泡在导轨左/右）
            React.createElement('div',{className:'umtl-tipBody'},
              React.createElement('div',{style:{fontSize:'11px',fontWeight:600,color:'color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 65%,transparent)',marginBottom:'4px',display:'flex',alignItems:'center',gap:'6px', whiteSpace:'nowrap', fontVariantNumeric:'tabular-nums'}}, // T1.5①：扫动数字不横跳；★墨玉玻璃：浅底配色失效，改 foreground 调制
                tipData.bm?React.createElement('span',{'aria-hidden':true, style:{width:'3px',height:'8px',borderRadius:'1.5px',background:'var(--dsw-alias-state-warn-primary)',display:'inline-block',flex:'none'}}):null,
                // ★墨玉玻璃①：序号装进迷你药丸 chip（foreground 10% 底 + 全圆角），与外侧大药丸首尾呼应
                React.createElement('span',{style:{flex:'none', background:'color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 10%,transparent)', borderRadius:'999px', padding:'1px 7px', fontSize:'10px', lineHeight:'16px', color:'var(--dsw-alias-label-primary-foreground)'}}, isOlderTip ? '加载更早' : '第 '+(idx===-1?'—':idx+1)+' / '+realTotal+' 轮'+suffix),
                // T3 类型标记（简化：仅“图”）
                !isOlderTip && tipData.hasImage?React.createElement('span',{style:{flex:'none', background:'color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 12%,transparent)', borderRadius:'999px', padding:'1px 6px', fontSize:'10px', lineHeight:'16px', color:'var(--dsw-alias-label-primary-foreground)'}},'图'):null,
                !isOlderTip && tipData.time?React.createElement('span',{style:{flex:'none'}},'· '+tipData.time):null,
                // T1.5②："已完成"是常量零信息量不渲染；仅"进行中"显示脉冲徽标
                !isOlderTip && tipData.status==='进行中'?React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'4px',overflow:'hidden'}},
                  React.createElement('span',{'aria-hidden':true, style:{width:'6px',height:'6px',borderRadius:'50%',background:'var(--dsw-alias-brand-primary)',display:'inline-block',flex:'none',animation:'umtlPulse 1.2s ease-in-out infinite'}}),
                  React.createElement('span',{style:{flex:'none'}},'进行中')
                ):null
              ),
              // T1.3：clamp 6 行 + T2.4：userSelect 可选中复制；T3：key 随目标重挂，80ms 文字微淡切
              React.createElement('div',{key:tipData.key, style:{display:'-webkit-box',WebkitLineClamp:6,WebkitBoxOrient:'vertical',overflow:'hidden',color:'var(--dsw-alias-label-primary-foreground)',whiteSpace:'pre-wrap', wordBreak:'break-word', fontSize:'12.5px', lineHeight:'17px', userSelect:'text', WebkitUserSelect:'text', cursor:'auto', animation:'umtlTextIn 80ms ease-out'}}, isOlderTip ? '点击加载更早轮次' : (tipData.preview || '（空消息）'))
            )
          );
        };
        const cls='umtl-root'+(visible?'':' is-hidden')+(sessionActive?' is-tinted':'')+(positionState==="right"?' is-right':''); // 玻璃悬停才现（is-tinted = hover||气泡），平时淡淡底色区分背景
        // B3 视口16：>16 时导轨壳固定 16 颗高度（内容386 =16*14+15*10+12 markers padding，根24另算），内部滚轮翻找
        const rootMaxHeight = (()=>{ const N=markers.length; const v=N>16 ? (16*layout.mh + 15*layout.gap + 12) : null; umtlLog('layout', {N, gap: layout.gap, mh: layout.mh, rootMaxHeight: v, isShort: N<=16}); return v; })();
        if(!enabledState) {
          return React.createElement(React.Fragment,null,
            React.createElement('div',{ref:rootRef, className:'umtl-root is-hidden'}),
            renderTooltip()
          );
        }
        const isShort = markers.length <= 16;
        return React.createElement(React.Fragment,null,
          React.createElement('div',{ref:rootRef, className:cls, role:'navigation','aria-label':'User message timeline', onPointerDown:onDown, onPointerMove:onMove, onPointerUp:onUp, onPointerEnter:onRootEnter, onPointerLeave:onRootLeave, style:{outline:'none', maxHeight: rootMaxHeight ? rootMaxHeight+'px' : undefined, overflowY: rootMaxHeight ? 'auto' : undefined, maskImage: isShort ? 'none' : undefined, WebkitMaskImage: isShort ? 'none' : undefined}},
            React.createElement('div',{className:'umtl-track'}),
            React.createElement('div',{className:'umtl-markers'+(entered?' umtl-stagger':''), style:{gap:layout.gap+'px','--umtl-gap':layout.gap+'px'}},
              markers.length===0?React.createElement('div',{style:{fontSize:'11px',color:'var(--dsw-alias-label-tertiary)',padding:'6px 2px'}},'暂无轮次'):
              markers.map((m,idx)=>{
                const isOlder=!!m.isOlder;
                const a=!isOlder && m.key===activeKey; const h=m.key===hoveredKey;
                const c='umtl-marker'+(isOlder?' is-older':'')+(isOlder && olderLoading?' is-loading':'')+(a?' is-active':'')+(h?' is-hovered':'')+((!h && tipVisible && tipData && m.key===tipData.key)?' is-preview':'');
                const typeSuffix = isOlder ? '' : (m.hasImage ? ' · 含图' : '');
                let dims; let num=false;
                if(isOlder){
                  dims={w:12,h:layout.ph,o:0.9};
                } else if(!sessionActive){ // v0.1.6：气泡存活期间漏斗不塌缩
                  dims={w:12,h:layout.ph,o: a?1:0.45}; // P2-A：常态药丸高随压缩插值
                } else {
                  const effIdx=anchorIdx!==-1?anchorIdx:activeIdx; // v0.1.6：中心钉住悬停目标 ?? 预览目标 ?? active
                  const d=Math.abs(idx-effIdx);
                  const tier=d>=4?4:d;
                  const kk=layout.k; // P2-A：漏斗纵向随压缩缩放（宽度不变）
                  if(tier===0){ dims={w:34,h:14*kk,o:1}; num=kk>=0.72; } // P1-4/P2-A：深压缩时序号由 HUD/tooltip 承接
                  else { const td=[null,{w:26,h:6,o:.92},{w:20,h:5,o:.78},{w:16,h:5,o:.62},{w:12,h:4,o:.45}][tier]; dims={w:td.w,h:td.h*kk,o:td.o}; }
                }
                // P2-H 真实序号（排除哨兵）
                const allReal=markers.filter(z=>!z.isOlder);
                const realIdx=isOlder ? -1 : allReal.findIndex(z=>z.key===m.key);
                const label=isOlder ? '加载更早轮次' : ('跳至第 '+(realIdx+1)+' 轮'+typeSuffix+(hasMore?' · 还有更早':'')); 
                const handleClick=isOlder ? (async (e)=>{
                  if(e){ try{ e.preventDefault(); e.stopPropagation(); }catch(_){} }
                  if(olderLoading) return;
                  setOlderLoading(true);
                  endPreviewSession();
                  const root=getScrollRoot(); if(root) try{ root.scrollTop=0; }catch(_){}
                  await loadAllOlder(20);
                  try{ await pollScan(8,260); }catch(e){}
                  setOlderLoading(false);
                }) : ((e)=>{ if(e) try{ e.stopPropagation(); }catch(_){} endPreviewSession(); scrollToKey(m.key); });
                const handlePointerDown=isOlder ? ((e)=>{ try{ e.stopPropagation(); }catch(_){} }) : undefined;
                return React.createElement('div',{key:m.key,'data-key':m.key, className:c, onMouseEnter:()=>onEnter(m), onPointerDown:handlePointerDown, onClick:handleClick, 'aria-label':label, role:'button', tabIndex:-1,
                    style:{height:layout.mh+'px','--umtl-stagger-delay':Math.min(idx*8,72)+'ms'}}, // P2-A：命中区高度随压缩插值
                  React.createElement('div',{className:'umtl-pill', style:{width:dims.w+'px', height:dims.h+'px', opacity:dims.o}}),
                  !isOlder && m.bm?React.createElement('div',{className:'umtl-bookmark','aria-hidden':true}):null, // P1-7：3×7 竖条贴 pill 上缘
                  !isOlder && num?React.createElement('span',{className:'umtl-num'},String(realIdx+1)):null
                );
              })
            )
          ),
          renderTooltip(),
          hint?React.createElement('div',{ref:hintElRef, 'aria-hidden':true, className:'umtl-hint'+(hintClosing?' is-off':'')},'悬停预览 · 点击跳转 · 按住拖动快速滑动'):null,
          React.createElement('div',{ref:hudElRef, 'aria-hidden':true, className:'umtl-hud'+(hudOn?' is-on':'')}), // P2-B Scrub HUD
          isDebug()?React.createElement('div',{style:{position:'fixed', right:'12px', bottom:'12px', zIndex:10001, background:'color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent)', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)', color:'var(--dsw-alias-label-primary-foreground)', padding:'4px 8px', borderRadius:'999px', fontSize:'10px', lineHeight:'14px', opacity:0.9}},'· 调试中'):null
        );
      }

      // v0.2: 插件配置卡片（settings.plugin.item，key 与 Host NS 同键）
      function UmtlSettingsCard(){
        const [open,setOpen]=React.useState(false);
        const [draft,setDraft]=React.useState(()=>{ try{ if(umtlScope){ const s=umtlScope.getSnapshot(); return s&&s.value?{...s.value}:{enabled:true,position:"left"}; } }catch(e){} return {enabled: isEnabled(), position: (function(){ try{ const p=window.localStorage.getItem('umtl:position'); return p==="right"?"right":"left"; }catch(e){ return "left"; } })()}; });
        const [saving,setSaving]=React.useState(false);
        const [failed,setFailed]=React.useState("");
        const committedRef=React.useRef(draft);
        // 订阅 scope，保持 draft 与 committed 同步（未 dirty 时）
        React.useEffect(()=>{
          if(!umtlScope) return;
          const sync=()=>{
            try{
              const snap=umtlScope.getSnapshot();
              const v=snap&&snap.value?{...snap.value}:null;
              if(!v) return;
              committedRef.current=v;
              // 若无未保存修改，跟随远端
              setDraft(prev=>{
                const isDirty = JSON.stringify(prev)!==JSON.stringify(v);
                return isDirty ? prev : {...v};
              });
              setFailed("");
            }catch(e){}
          };
          sync();
          let unsub=null;
          try{ unsub=umtlScope.subscribe(sync); }catch(e){}
          return ()=>{ try{ if(unsub) unsub(); }catch(e){} };
        },[]);
        const isDirty = JSON.stringify(draft)!==JSON.stringify(committedRef.current);
        const onToggleEnabled=()=>{
          setDraft(d=>({...d, enabled: !d.enabled}));
          setFailed("");
        };
        const onSelectPos=(pos)=>{
          if(pos!=="left"&&pos!=="right") return;
          setDraft(d=>({...d, position: pos}));
          setFailed("");
        };
        const onDiscard=()=>{
          setDraft({...committedRef.current});
          setFailed("");
        };
        const onSave=async ()=>{
          if(!umtlScope){
            // 降级：无 scope 时写 localStorage
            try{
              window.localStorage.setItem('umtl:enabled', String(draft.enabled));
              window.localStorage.setItem('umtl:position', draft.position);
              window.dispatchEvent(new StorageEvent('storage',{key:'umtl:enabled', newValue:String(draft.enabled)}));
              window.dispatchEvent(new StorageEvent('storage',{key:'umtl:position', newValue:draft.position}));
              committedRef.current={...draft};
              setFailed("");
            }catch(e){ setFailed("保存失败"); }
            return;
          }
          setSaving(true); setFailed("");
          try{
            // 逐字段 set，带 revision fence
            const cur = umtlScope.getSnapshot().value || {};
            if(cur.enabled!==draft.enabled) await umtlScope.set("enabled", draft.enabled);
            if(cur.position!==draft.position) await umtlScope.set("position", draft.position);
            committedRef.current={...draft};
            setFailed("");
          }catch(e){
            const msg = (e&&e.message)||"";
            if(msg.includes("SETTINGS_CONFLICT")||msg.includes("Conflict")){
              setFailed("已被外部修改，请重试");
            } else {
              setFailed("保存失败："+msg.slice(0,80));
            }
          } finally {
            setSaving(false);
          }
        };
        // 无 scope 且无 localStorage 时仍渲染卡片（降级路径），但显示提示
        const writable = true;
        const available = true;
        return React.createElement('li',{className:'umtl-card'+(open?' umtl-cardOpen':'')},
          React.createElement('button',{type:'button', className:'umtl-cardHeader', 'aria-expanded':open, 'aria-label':(open?'收起':'展开')+': 用户消息时间线', onClick:()=>setOpen(!open)},
            React.createElement('span',{className:'umtl-cardHeadText'},
              React.createElement('span',{className:'umtl-cardName'}, '用户消息时间线'),
              React.createElement('span',{className:'umtl-cardDesc'}, '对话列药丸导轨：悬停预览、点击/拖拽跳转、分页自动加载，可切换左右贴边')
            ),
            isDirty?React.createElement('span',{className:'umtl-cardPending'}, '未保存'):null,
            React.createElement('span',{className:'umtl-cardChevron'+(open?' umtl-cardChevronOpen':''), 'aria-hidden':true}, '⌄')
          ),
          open?React.createElement('div',{className:'umtl-cardBody'},
            React.createElement('div',{className:'umtl-cardRow'},
              React.createElement('div',null,
                React.createElement('div',{className:'umtl-cardLabel'}, '启用导轨'),
                React.createElement('div',{className:'umtl-cardHint'}, '关闭后隐藏所有药丸与预览')
              ),
              React.createElement('button',{type:'button', role:'switch', 'aria-checked':draft.enabled, 'aria-label':'启用导轨', onClick:onToggleEnabled, className:'umtl-switchSm', disabled: saving},
                React.createElement('span',{className:'umtl-switchSmTrack'+(draft.enabled?' is-checked':'')}),
                React.createElement('span',{className:'umtl-switchSmKnob'+(draft.enabled?' is-checked':'')})
              )
            ),
            React.createElement('div',null,
              React.createElement('div',{className:'umtl-cardLabel', style:{marginBottom:'6px'}}, '导轨位置'),
              React.createElement('div',{className:'umtl-seg', role:'group', 'aria-label':'导轨位置'},
                React.createElement('button',{type:'button', className:'umtl-segBtn'+(draft.position==="left"?' is-active':''), onClick:()=>onSelectPos("left"), disabled:saving}, '左侧 · 贴近左栏'),
                React.createElement('button',{type:'button', className:'umtl-segBtn'+(draft.position==="right"?' is-active':''), onClick:()=>onSelectPos("right"), disabled:saving}, '右侧 · 贴近右栏')
              ),
              React.createElement('div',{className:'umtl-cardHint', style:{marginTop:'6px'}}, '右侧模式自动避让已安装的右侧边栏扩展（如 dsh-better-sidebar）')
            ),
            React.createElement('div',{className:'umtl-cardFooter'},
              failed?React.createElement('p',{className:'umtl-cardFailed', role:'status'}, failed):null,
              React.createElement('button',{type:'button', className:'umtl-cardDiscard', disabled:!isDirty||saving, onClick:onDiscard}, '放弃'),
              React.createElement('button',{type:'button', className:'umtl-cardSave', disabled:!isDirty||saving, onClick:onSave}, saving?'保存中…':'保存')
            )
          ):null
        );
      }

      // 注册插件配置卡片（需 Host 已注册同名 NS，tab 才会分发）
      try{
        const slots = ctx.get("slots");
        if(slots){
          slots.inject("settings.plugin.item", () => slots.register({ name: "settings.plugin.item", key: "user-message-timeline" }, UmtlSettingsCard));
        }
      }catch(e){}
      ctx.slots.inject("shell.overlay", () => ctx.slots.register({ name: "shell.overlay", id: "user-message-timeline" }, () => React.createElement(Timeline)));
    }
    module.exports.inject = inject;
    module.exports.apply = apply;
    return module.exports;
  }
});
