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
      const css = ':root{--umtl-shadow-tip:0 2px 6px color-mix(in srgb,var(--dsw-alias-label-primary) 18%,transparent),0 14px 36px color-mix(in srgb,var(--dsw-alias-label-primary) 32%,transparent);--umtl-shadow-knob:0 1px 3px color-mix(in srgb,var(--dsw-alias-label-primary) 20%,transparent),0 0 0 1px color-mix(in srgb,var(--dsw-alias-label-primary) 5%,transparent)}.umtl-root{position:fixed;left:0;top:50%;transform:translateX(var(--umtl-left,12px)) translateY(-50%);will-change:transform;contain:layout paint;z-index:6;max-height:min(70vh,40rem);overflow-y:auto;overflow-x:hidden;scrollbar-width:none;overscroll-behavior:contain;pointer-events:auto;background:transparent;border-radius:16px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:0;opacity:1;transition:transform var(--umtl-dur,220ms) var(--umtl-ease,cubic-bezier(.22,1,.36,1)),opacity .22s,background .22s ease,backdrop-filter .22s ease;mask-image:linear-gradient(to bottom,transparent 0,black 24px,black calc(100% - 24px),transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0,black 24px,black calc(100% - 24px),transparent 100%)}.umtl-root::-webkit-scrollbar{display:none}.umtl-root.is-tinted{background:color-mix(in srgb,var(--dsw-alias-bg-base) 55%,transparent);backdrop-filter:blur(10px) saturate(1.4);-webkit-backdrop-filter:blur(10px) saturate(1.4)}.umtl-root.is-hidden{opacity:0;pointer-events:none;transform:translateX(var(--umtl-left,12px)) translateY(-50%) translateX(-10px)}.umtl-root.umtl-pushing{transition:none!important}.umtl-track{display:none}.umtl-markers{position:relative;display:flex;flex-direction:column;align-items:center;gap:var(--umtl-gap,10px);padding:6px 0;z-index:1;contain:layout}.umtl-stagger .umtl-marker{animation:umtlPop .28s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--umtl-stagger-delay,0ms)}.umtl-marker{position:relative;display:flex;align-items:center;justify-content:center;width:40px;height:14px;cursor:pointer;flex:none;contain:layout}.umtl-markerLine{display:none}.umtl-pill{border-radius:999px;background:var(--dsw-alias-border-l2);box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 30%,transparent);transition:width 180ms cubic-bezier(.22,1,.36,1),height 180ms,opacity 180ms,background 180ms,box-shadow 180ms;box-sizing:border-box;flex:none;will-change:width,height,opacity}.umtl-marker.is-active .umtl-pill,.umtl-marker.is-preview .umtl-pill{background:var(--dsw-alias-label-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 32%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-label-primary) 14%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-label-primary) 22%,transparent)}.umtl-marker.is-hovered .umtl-pill{background:var(--dsw-alias-brand-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 35%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-brand-primary) 16%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-brand-primary) 24%,transparent)}.umtl-bookmark{position:absolute;left:50%;top:2px;transform:translateX(-50%);width:3px;height:7px;border-radius:2px;background:var(--dsw-alias-state-warn-primary);z-index:2;pointer-events:none}.umtl-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10px;line-height:1;font-weight:600;color:var(--dsw-alias-label-primary-foreground);letter-spacing:.02em;pointer-events:none;user-select:none;-webkit-user-select:none}@keyframes umtlPop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}.umtl-tip{position:fixed;z-index:9999;width:240px;min-height:48px;box-shadow:var(--umtl-shadow-tip);opacity:0;pointer-events:none;transform:scale(.95) translateX(var(--umtl-in-x,-8px));transition:opacity .12s ease,transform .12s cubic-bezier(.22,1,.36,1);transform-origin:left center;animation:umtlIn .2s cubic-bezier(.22,1,.36,1)}.umtl-tip.is-open{opacity:1;pointer-events:auto;transform:none}.umtl-tipBody{background:color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent);backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);color:var(--dsw-alias-label-primary-foreground);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 14%,transparent),inset 0 0 0 1px color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 7%,transparent);border-radius:14px;max-height:min(36vh,280px);overflow:hidden;padding:8px 10px;font-size:12.5px;line-height:17px;word-break:break-word}.umtl-tipBody *::selection{background:color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 25%,transparent)}@keyframes umtlIn{from{opacity:0;transform:scale(.92) translateX(var(--umtl-in-x,-8px))}to{opacity:1;transform:none}}@keyframes umtlTextIn{from{opacity:.25}to{opacity:1}}@keyframes umtlPulse{0%,100%{opacity:1}50%{opacity:.35}}.umtl-hint{position:fixed;z-index:9998;background:color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent);backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);color:var(--dsw-alias-label-primary-foreground);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 14%,transparent),var(--umtl-shadow-tip);border-radius:999px;padding:6px 14px;font-size:11.5px;line-height:16px;font-weight:500;white-space:nowrap;opacity:1;transform:none;transition:opacity .2s ease,transform .2s ease;animation:umtlHintIn .24s cubic-bezier(.22,1,.36,1)}.umtl-hint.is-off{opacity:0;transform:translateX(-4px) scale(.96)}@keyframes umtlHintIn{from{opacity:0;transform:translateX(-4px) scale(.94)}to{opacity:1;transform:none}}.umtl-hud{position:fixed;z-index:10000;left:0;top:0;background:color-mix(in srgb,var(--dsw-alias-label-primary) 88%,transparent);backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);color:var(--dsw-alias-label-primary-foreground);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 14%,transparent),var(--umtl-shadow-tip);border-radius:999px;padding:4px 11px;font-size:11px;line-height:16px;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s ease}.umtl-hud.is-on{opacity:1}[data-chat-anchor-key]{scroll-margin-top:14px}.umtl-settingsRow{display:flex;align-items:center;gap:8px;padding:16px 0;border-bottom:1px solid var(--dsw-alias-border-l2)}.umtl-settingsText{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;padding-right:48px}.umtl-settingsTitle{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:400;line-height:22px}.umtl-settingsDesc{color:var(--dsw-alias-label-tertiary);font-size:12px;font-weight:400;line-height:18px}.umtl-switch{position:relative;display:inline-block;width:44px;height:26px;cursor:pointer;flex:none;-webkit-tap-highlight-color:transparent;border:none;padding:0;background:transparent;border-radius:999px}.umtl-switchTrack{position:absolute;inset:0;background:var(--dsw-alias-border-l2);border-radius:999px;transition:background .2s;box-sizing:border-box}.umtl-switchTrack.is-checked{background:var(--dsw-alias-brand-primary)}.umtl-switchKnob{position:absolute;top:2px;left:2px;width:22px;height:22px;background:#fff;border-radius:50%;box-shadow:var(--umtl-shadow-knob);transition:left .2s,background .2s}.umtl-switchKnob.is-checked{left:20px;background:var(--dsw-alias-label-primary-foreground)}.umtl-switch:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.umtl-switch:hover .umtl-switchTrack:not(.is-checked){background:var(--dsw-alias-border-l3)}.umtl-root:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px;box-shadow:0 0 0 4px color-mix(in srgb,var(--dsw-alias-brand-primary) 20%,transparent)}@media (prefers-reduced-motion:reduce){.umtl-root,.umtl-root *,.umtl-tip,.umtl-tip *,.umtl-stagger .umtl-marker,.umtl-hint,.umtl-hud{transition-duration:0s!important;transition-delay:0s!important;animation:none!important}}';
      const styleEl = document.createElement('style');
      styleEl.textContent = css;
      document.head.appendChild(styleEl);
      ctx.effect(() => () => styleEl.remove());

      function isEnabled() {
        try { return window.localStorage.getItem('umtl:enabled') !== 'false'; } catch(e){ return true; }
      }
      let enabled = isEnabled();
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
      function getScrollRoot(){ const c=document.querySelector(SEL.CONV_SCROLL); if(!c) return null; let n=c; while(n && n!==document.body){ try{ const s=window.getComputedStyle(n); if((s.overflowY==='auto'||s.overflowY==='scroll') && n.scrollHeight>n.clientHeight+4) return n; }catch(e){} n=n.parentElement; } return c; }
      // P0-3：markers 浅比较，无变化不触发 setState，消除每 800ms 强制全量 reconcile
      function markersEqual(a,b){
        if(a===b) return true;
        if(!a||!b||a.length!==b.length) return false;
        for(let i=0;i<a.length;i++){
          if(a[i].key!==b[i].key||a[i].preview!==b[i].preview||a[i].bm!==b[i].bm||a[i].time!==b[i].time||a[i].status!==b[i].status||a[i].hasImage!==b[i].hasImage) return false;
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
        const [isTimelineHovered,setIsTimelineHovered]=React.useState(false);
        const [enabledState,setEnabledState]=React.useState(enabled);
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

        // P3-A: storage 监听保留，500ms 轮询并入下方统一 2s 调度器
        React.useEffect(()=>{
          const onStorage=(e)=>{ if(e.key==='umtl:enabled') setEnabledState(e.newValue !== 'false'); if(e.key===null) setEnabledState(isEnabled()); };
          window.addEventListener('storage', onStorage);
          return ()=>{ window.removeEventListener('storage', onStorage); };
        },[]);

        React.useEffect(()=>{ activeRef.current=activeKey; },[activeKey]);
        React.useEffect(()=>{ markersRef.current=markers; },[markers]);
        // P1-6：首次可见时置位 stagger，之后不再重播
        React.useEffect(()=>{ if(visible && !enteredRef.current){ enteredRef.current=true; setEntered(true); } },[visible]);

        React.useEffect(()=>{
          let lastLeft=-1;
          let lastDur=-1;
          let lastEase='';
          // upd 支持 force：push 结束时强制写入最终值，避免 1px 余量被 CSS transition 再动画导致回跳
          const upd=(force)=>{
            if(document.hidden) return;
            try{
              const conv=document.querySelector(SEL.CONV_SCROLL);
              if(!conv) return;
              let col=conv.closest(SEL.ROOT)||conv.closest(SEL.ROOT_ALT)||conv.parentElement;
              if(!col) col=conv;
              const rect=col.getBoundingClientRect();
              const desired=Math.round(rect.left+12);
              const clamped=Math.max(8,Math.min(desired, window.innerWidth-56));
              if(!force && clamped===lastLeft) return;
              lastLeft=clamped;
              document.documentElement.style.setProperty('--umtl-left',clamped+'px');
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
        },[]);

        const scan=React.useCallback(()=>{
          try{
            const all=Array.from(document.querySelectorAll('[data-chat-anchor-key]'));
            const seen=new Map(); const out=[];
            const running=document.querySelector(SEL.TURN_STATUS)!==null; // 提到循环外，每轮只查一次
            for(let i=0;i<all.length;i++){
              const el=all[i]; const kind=el.getAttribute('data-chat-flow-kind')||'';
              if(kind!=='user') continue;
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
            if(!markersEqual(markersRef.current,out)){ markersRef.current=out; setMarkers(out); }
          }catch(e){}
        },[]);

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
            if(rootRef.current){ const h=rootRef.current.getBoundingClientRect().height; if(h>0 && h<48) heightOk=false; else if(h===0 && count>0) heightOk=true; }
            if(!document.querySelector(SEL.CONV_SCROLL)) heightOk=false;
            const show=count>=1 && !isBlank && heightOk && enabledState;
            setVisible(show);
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
              setEnabledState(isEnabled());
            },2000);
          };
          const stopIv=()=>{ if(iv){ window.clearInterval(iv); iv=null; } };
          startIv();
          const onVisibilityChange=()=>{
            if(document.hidden){ stopIv(); }
            else { startIv(); scan(); check(); setEnabledState(isEnabled()); }
          };
          document.addEventListener('visibilitychange', onVisibilityChange);
          return ()=>{ window.clearTimeout(t); stopIv(); ro2.disconnect(); window.removeEventListener('resize',onResize); document.removeEventListener('visibilitychange', onVisibilityChange); };
        },[markers.length, enabledState, scan]);

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
            let left=rect.right+GAP;
            let isLeft=true;
            if(left+estW>window.innerWidth-12){ left=rect.left-estW-GAP; isLeft=false; }
            let top=centerY-estH/2;
            if(top<12) top=12;
            if(top+estH>window.innerHeight-12) top=Math.max(12,window.innerHeight-estH-12);
            return {key,preview:m?m.preview:'',bm:m?m.bm:false,time:m?m.time:'',status:m?m.status:'',hasImage:m?m.hasImage:false,left,top,isLeft};
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
              let left=rect.right+GAP;
              let isLeft=true;
              if(left+estW>window.innerWidth-12){ left=rect.left-estW-GAP; isLeft=false; }
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
        const scrollToKey=(key, attempt=0, instant=false)=>{
          try{
            const el=locateKey(key);
            if(el){ if(instant) jumpInstant(el); else doScrollTop(el); return; }
            if(attempt>=20) return;
            const root=getScrollRoot();
            if(root && attempt===0){ try{ root.scrollTop=0; }catch(e){} }
            let btn=document.querySelector(SEL.OLDER + ' button:not([disabled])');
            if(!btn) btn=Array.from(document.querySelectorAll('button')).find(b=> /加载更多|Load more/i.test((b.textContent||'').trim()) && !b.disabled);
            if(!btn){
              const olderWrap=document.querySelector(SEL.OLDER);
              if(olderWrap) btn=olderWrap.querySelector('button');
            }
            if(btn && !btn.disabled){
              try{ btn.click(); }catch(e){}
              window.setTimeout(()=> scrollToKey(key, attempt+1, instant), 680);
            } else if(attempt<14){
              if(root) try{ root.scrollTop=0; }catch(e){}
              window.setTimeout(()=> scrollToKey(key, attempt+1, instant), 420);
            }
          }catch(e){}
        };
        const findNearestByY=(y)=>{
          const dots=rootRef.current?Array.from(rootRef.current.querySelectorAll('.umtl-marker')):[];
          let closest=null, min=Infinity;
          for(let i=0;i<dots.length;i++){ const r=dots[i].getBoundingClientRect(); const d=Math.abs((r.top+r.height/2)-y); if(d<min){min=d; closest=markersRef.current[i];} }
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
            if(!el || !key || hudKeyRef.current===key) return;
            const m=markersRef.current.find(z=>z.key===key); if(!m) return;
            hudKeyRef.current=key;
            const idx=markersRef.current.findIndex(z=>z.key===key);
            const raw=((m.preview||'（空消息）').split('\n')[0]||'');
            el.textContent='第 '+(idx+1)+' / '+markersRef.current.length+' 轮 · '+(raw.length>12 ? raw.slice(0,12)+'…' : raw);
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
        // P2-A：minimap 压缩布局——N≤34 默认观感；>34 线性插值，超可用高时整体等比收口保证一屏
        const layout=(()=>{
          const N=markers.length;
          if(N<=34) return {gap:10,mh:14,ph:4,k:1};
          const t=Math.min(1,(N-34)/46);
          let gap=10-8*t, mh=14-8*t, ph=Math.max(2,4-2*t);
          try{
            const avail=Math.min(window.innerHeight*0.7,640)-16; // 与 CSS max-height 对齐，扣除上下 padding 与缓冲
            const total=N*(mh+gap);
            if(total>avail){
              const f=avail/total;
              gap=Math.max(1,gap*f); mh=Math.max(4,mh*f); ph=Math.max(1.5,ph*f);
            }
          }catch(e){}
          return {gap,mh,ph,k:mh/14};
        })();
        // tooltip 单一实现：T1.1 无箭头；T1.5 tabular-nums 头部 + 仅"进行中"脉冲徽标；T2.4 可复制
        const renderTooltip=()=>{
          if(!tipData) return null;
          const idx=markers.findIndex(x=>x.key===tipData.key);
          return React.createElement('div',{ref:tipRef, className:'umtl-tip'+(tipVisible?' is-open':''), 'aria-live':'polite', 'aria-atomic':'true',
              onPointerEnter:onTipEnter, onPointerLeave:onTipLeave,
              style:{left:tipData.left+'px', top:tipData.top+'px', width:'240px', minHeight:'48px', transformOrigin:tipData.isLeft?'left center':'right center',
                '--umtl-in-x':tipData.isLeft?'-8px':'8px'}}, // ★墨玉玻璃②：入场从药丸侧平移滑出（方向随气泡在导轨左/右）
            React.createElement('div',{className:'umtl-tipBody'},
              React.createElement('div',{style:{fontSize:'11px',fontWeight:600,color:'color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 65%,transparent)',marginBottom:'4px',display:'flex',alignItems:'center',gap:'6px', whiteSpace:'nowrap', fontVariantNumeric:'tabular-nums'}}, // T1.5①：扫动数字不横跳；★墨玉玻璃：浅底配色失效，改 foreground 调制
                tipData.bm?React.createElement('span',{'aria-hidden':true, style:{width:'3px',height:'8px',borderRadius:'1.5px',background:'var(--dsw-alias-state-warn-primary)',display:'inline-block',flex:'none'}}):null,
                // ★墨玉玻璃①：序号装进迷你药丸 chip（foreground 10% 底 + 全圆角），与外侧大药丸首尾呼应
                React.createElement('span',{style:{flex:'none', background:'color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 10%,transparent)', borderRadius:'999px', padding:'1px 7px', fontSize:'10px', lineHeight:'16px', color:'var(--dsw-alias-label-primary-foreground)'}},'第 '+(idx===-1?'—':idx+1)+' / '+markers.length+' 轮'),
                // T3 类型标记（简化：仅“图”）
                tipData.hasImage?React.createElement('span',{style:{flex:'none', background:'color-mix(in srgb,var(--dsw-alias-label-primary-foreground) 12%,transparent)', borderRadius:'999px', padding:'1px 6px', fontSize:'10px', lineHeight:'16px', color:'var(--dsw-alias-label-primary-foreground)'}},'图'):null,
                tipData.time?React.createElement('span',{style:{flex:'none'}},'· '+tipData.time):null,
                // T1.5②："已完成"是常量零信息量不渲染；仅"进行中"显示脉冲徽标
                tipData.status==='进行中'?React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'4px',overflow:'hidden'}},
                  React.createElement('span',{'aria-hidden':true, style:{width:'6px',height:'6px',borderRadius:'50%',background:'var(--dsw-alias-brand-primary)',display:'inline-block',flex:'none',animation:'umtlPulse 1.2s ease-in-out infinite'}}),
                  React.createElement('span',{style:{flex:'none'}},'进行中')
                ):null
              ),
              // T1.3：clamp 6 行 + T2.4：userSelect 可选中复制；T3：key 随目标重挂，80ms 文字微淡切
              React.createElement('div',{key:tipData.key, style:{display:'-webkit-box',WebkitLineClamp:6,WebkitBoxOrient:'vertical',overflow:'hidden',color:'var(--dsw-alias-label-primary-foreground)',whiteSpace:'pre-wrap', wordBreak:'break-word', fontSize:'12.5px', lineHeight:'17px', userSelect:'text', WebkitUserSelect:'text', cursor:'auto', animation:'umtlTextIn 80ms ease-out'}}, tipData.preview || '（空消息）')
            )
          );
        };
        const cls='umtl-root'+(visible?'':' is-hidden')+(sessionActive?' is-tinted':''); // P1-1/v0.1.6：预览会话进行中保持玻璃底（母体不塌）
        if(!enabledState) {
          return React.createElement(React.Fragment,null,
            React.createElement('div',{ref:rootRef, className:'umtl-root is-hidden'}),
            renderTooltip()
          );
        }
        return React.createElement(React.Fragment,null,
          React.createElement('div',{ref:rootRef, className:cls, role:'navigation','aria-label':'User message timeline', onPointerDown:onDown, onPointerMove:onMove, onPointerUp:onUp, onPointerEnter:onRootEnter, onPointerLeave:onRootLeave, style:{outline:'none'}},
            React.createElement('div',{className:'umtl-track'}),
            React.createElement('div',{className:'umtl-markers'+(entered?' umtl-stagger':'')},
              markers.length===0?React.createElement('div',{style:{fontSize:'11px',color:'var(--dsw-alias-label-tertiary)',padding:'6px 2px'}},'暂无轮次'):
              markers.map((m,idx)=>{
                const a=m.key===activeKey; const h=m.key===hoveredKey;
                const c='umtl-marker'+(a?' is-active':'')+(h?' is-hovered':'')+((!h && tipVisible && tipData && m.key===tipData.key)?' is-preview':'');
                const typeSuffix = m.hasImage ? ' · 含图' : '';
                let dims; let num=false;
                if(!sessionActive){ // v0.1.6：气泡存活期间漏斗不塌缩
                  dims={w:12,h:layout.ph,o: a?1:0.45}; // P2-A：常态药丸高随压缩插值
                } else {
                  const effIdx=anchorIdx!==-1?anchorIdx:activeIdx; // v0.1.6：中心钉住悬停目标 ?? 预览目标 ?? active
                  const d=Math.abs(idx-effIdx);
                  const tier=d>=4?4:d;
                  const kk=layout.k; // P2-A：漏斗纵向随压缩缩放（宽度不变）
                  if(tier===0){ dims={w:34,h:14*kk,o:1}; num=kk>=0.72; } // P1-4/P2-A：深压缩时序号由 HUD/tooltip 承接
                  else { const td=[null,{w:26,h:6,o:.92},{w:20,h:5,o:.78},{w:16,h:5,o:.62},{w:12,h:4,o:.45}][tier]; dims={w:td.w,h:td.h*kk,o:td.o}; }
                }
                return React.createElement('div',{key:m.key,'data-key':m.key, className:c, onMouseEnter:()=>onEnter(m), onClick:()=>{ endPreviewSession(); scrollToKey(m.key); }, 'aria-label':'跳至第 '+(idx+1)+' 轮'+typeSuffix, role:'button', tabIndex:-1,
                    style:{height:layout.mh+'px','--umtl-stagger-delay':Math.min(idx*8,72)+'ms'}}, // P2-A：命中区高度随压缩插值
                  React.createElement('div',{className:'umtl-pill', style:{width:dims.w+'px', height:dims.h+'px', opacity:dims.o}}),
                  m.bm?React.createElement('div',{className:'umtl-bookmark','aria-hidden':true}):null, // P1-7：3×7 竖条贴 pill 上缘
                  num?React.createElement('span',{className:'umtl-num'},String(idx+1)):null
                );
              })
            )
          ),
          renderTooltip(),
          hint?React.createElement('div',{ref:hintElRef, 'aria-hidden':true, className:'umtl-hint'+(hintClosing?' is-off':'')},'悬停预览 · 点击跳转 · 按住拖动快速滑动'):null,
          React.createElement('div',{ref:hudElRef, 'aria-hidden':true, className:'umtl-hud'+(hudOn?' is-on':'')}) // P2-B Scrub HUD
        );
      }

      function ToggleRow() {
        const [checked,setChecked]=React.useState(()=>{ try{ return window.localStorage.getItem('umtl:enabled') !== 'false'; }catch(e){ return true; }});
        React.useEffect(()=>{
          const sync=()=>{ try{ setChecked(window.localStorage.getItem('umtl:enabled') !== 'false'); }catch(e){} };
          const onStorage=(e)=>{ if(e.key==='umtl:enabled' || e.key===null) sync(); };
          window.addEventListener('storage', onStorage);
          return ()=> window.removeEventListener('storage', onStorage);
        },[]);
        const toggle=()=>{
          const nv=!checked;
          setChecked(nv);
          try{ window.localStorage.setItem('umtl:enabled', String(nv)); window.dispatchEvent(new StorageEvent('storage',{key:'umtl:enabled', newValue:String(nv)})); }catch(e){}
        };
        return React.createElement('div',{className:'umtl-settingsRow'},
          React.createElement('div',{className:'umtl-settingsText'},
            React.createElement('div',{className:'umtl-settingsTitle'}, '用户消息时间线'),
            React.createElement('div',{className:'umtl-settingsDesc'}, '在对话列内侧显示悬浮药丸导轨，悬停预览、点击跳转、拖拽 scrub')
          ),
          React.createElement('button',{type:'button', role:'switch', 'aria-checked':checked, 'aria-label':'用户消息时间线', onClick:toggle, className:'umtl-switch'},
            React.createElement('span',{className:'umtl-switchTrack'+(checked?' is-checked':'')}),
            React.createElement('span',{className:'umtl-switchKnob'+(checked?' is-checked':'')})
          )
        );
      }

      ctx.slots.inject("settings.general.item", () => ctx.slots.register({ name: "settings.general.item", id: "user-message-timeline", order: 30 }, ToggleRow));
      ctx.slots.inject("shell.overlay", () => ctx.slots.register({ name: "shell.overlay", id: "user-message-timeline" }, () => React.createElement(Timeline)));
    }
    module.exports.inject = inject;
    module.exports.apply = apply;
    return module.exports;
  }
});
