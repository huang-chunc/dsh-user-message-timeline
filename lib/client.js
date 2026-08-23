window.__ModuleLoader__.load({
  id: "dsh-user-message-timeline",
  factory: (require) => {
    var module = { exports: {} };
    var React = require("react");
    var inject = ["slots"];
    function apply(ctx) {
      // v0.1.3：P0 缺陷修复（拖拽抖动/resize 泄漏/scan 全量重渲/reduced-motion/tooltip 估高）
      //         + P1 材质升级（去壳化/药丸质感/阴影令牌化/序号内嵌/tooltip 精致化/入场编排/书签竖条）
      const css = ':root{--umtl-shadow-float:0 2px 6px color-mix(in srgb,var(--dsw-alias-label-primary) 10%,transparent),0 12px 32px color-mix(in srgb,var(--dsw-alias-label-primary) 18%,transparent);--umtl-shadow-knob:0 1px 3px color-mix(in srgb,var(--dsw-alias-label-primary) 20%,transparent),0 0 0 1px color-mix(in srgb,var(--dsw-alias-label-primary) 5%,transparent)}.umtl-root{position:fixed;left:0;top:50%;transform:translateX(var(--umtl-left,12px)) translateY(-50%);will-change:transform;contain:layout paint;z-index:6;max-height:min(70vh,40rem);overflow-y:auto;overflow-x:hidden;scrollbar-width:none;overscroll-behavior:contain;pointer-events:auto;background:transparent;border-radius:16px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:0;opacity:1;transition:transform var(--umtl-dur,220ms) var(--umtl-ease,cubic-bezier(.22,1,.36,1)),opacity .22s,background .22s ease,backdrop-filter .22s ease;mask-image:linear-gradient(to bottom,transparent 0,black 24px,black calc(100% - 24px),transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0,black 24px,black calc(100% - 24px),transparent 100%)}.umtl-root::-webkit-scrollbar{display:none}.umtl-root.is-tinted{background:color-mix(in srgb,var(--dsw-alias-bg-base) 55%,transparent);backdrop-filter:blur(10px) saturate(1.4);-webkit-backdrop-filter:blur(10px) saturate(1.4)}.umtl-root.is-hidden{opacity:0;pointer-events:none;transform:translateX(var(--umtl-left,12px)) translateY(-50%) translateX(-10px)}.umtl-root.umtl-pushing{transition:none!important}.umtl-track{display:none}.umtl-markers{position:relative;display:flex;flex-direction:column;align-items:center;gap:10px;padding:6px 0;z-index:1;contain:layout}.umtl-stagger .umtl-marker{animation:umtlPop .28s cubic-bezier(.22,1,.36,1) both;animation-delay:var(--umtl-stagger-delay,0ms)}.umtl-marker{position:relative;display:flex;align-items:center;justify-content:center;width:40px;height:14px;cursor:pointer;flex:none;contain:layout}.umtl-markerLine{display:none}.umtl-pill{border-radius:999px;background:var(--dsw-alias-border-l2);box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 30%,transparent);transition:width 180ms cubic-bezier(.22,1,.36,1),height 180ms,opacity 180ms,background 180ms,box-shadow 180ms;box-sizing:border-box;flex:none;will-change:width,height,opacity}.umtl-marker.is-active .umtl-pill{background:var(--dsw-alias-label-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 32%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-label-primary) 14%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-label-primary) 22%,transparent)}.umtl-marker.is-hovered .umtl-pill{background:var(--dsw-alias-brand-primary);opacity:1!important;box-shadow:inset 0 1px 0 color-mix(in srgb,#fff 35%,transparent),0 0 0 3px color-mix(in srgb,var(--dsw-alias-brand-primary) 16%,transparent),0 0 12px 2px color-mix(in srgb,var(--dsw-alias-brand-primary) 24%,transparent)}.umtl-bookmark{position:absolute;left:50%;top:2px;transform:translateX(-50%);width:3px;height:7px;border-radius:2px;background:var(--dsw-alias-state-warn-primary);z-index:2;pointer-events:none}.umtl-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10px;line-height:1;font-weight:600;color:var(--dsw-alias-label-primary-foreground);letter-spacing:.02em;pointer-events:none;user-select:none;-webkit-user-select:none}@keyframes umtlPop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}.umtl-tip{position:fixed;z-index:9999;width:240px;min-height:48px;pointer-events:none;box-shadow:var(--umtl-shadow-float);animation:umtlIn .16s cubic-bezier(.22,1,.36,1)}.umtl-tipBody{background:color-mix(in srgb,var(--dsw-alias-bg-overlay) 90%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:var(--dsw-alias-label-primary);border:1px solid var(--dsw-alias-border-l1);border-radius:12px;max-height:108px;overflow:hidden;padding:8px 10px;font-size:12.5px;line-height:17px;word-break:break-word}.umtl-tipArrow{position:absolute;top:0;width:0;height:0;pointer-events:none}.umtl-tipArrow.is-left::before{content:"";position:absolute;left:-8px;top:-8px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid var(--dsw-alias-border-l1)}.umtl-tipArrow.is-left::after{content:"";position:absolute;left:-7px;top:-7px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid color-mix(in srgb,var(--dsw-alias-bg-overlay) 90%,transparent)}.umtl-tipArrow.is-right::before{content:"";position:absolute;right:-8px;top:-8px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid var(--dsw-alias-border-l1)}.umtl-tipArrow.is-right::after{content:"";position:absolute;right:-7px;top:-7px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid color-mix(in srgb,var(--dsw-alias-bg-overlay) 90%,transparent)}@keyframes umtlIn{from{opacity:0;transform:scale(.98)}to{opacity:1;transform:none}}[data-chat-anchor-key]{scroll-margin-top:14px}.umtl-settingsRow{display:flex;align-items:center;gap:8px;padding:16px 0;border-bottom:1px solid var(--dsw-alias-border-l2)}.umtl-settingsText{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;padding-right:48px}.umtl-settingsTitle{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:400;line-height:22px}.umtl-settingsDesc{color:var(--dsw-alias-label-tertiary);font-size:12px;font-weight:400;line-height:18px}.umtl-switch{position:relative;display:inline-block;width:44px;height:26px;cursor:pointer;flex:none;-webkit-tap-highlight-color:transparent;border:none;padding:0;background:transparent;border-radius:999px}.umtl-switchTrack{position:absolute;inset:0;background:var(--dsw-alias-border-l2);border-radius:999px;transition:background .2s;box-sizing:border-box}.umtl-switchTrack.is-checked{background:var(--dsw-alias-brand-primary)}.umtl-switchKnob{position:absolute;top:2px;left:2px;width:22px;height:22px;background:#fff;border-radius:50%;box-shadow:var(--umtl-shadow-knob);transition:left .2s,background .2s}.umtl-switchKnob.is-checked{left:20px;background:var(--dsw-alias-label-primary-foreground)}.umtl-switch:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.umtl-switch:hover .umtl-switchTrack:not(.is-checked){background:var(--dsw-alias-border-l3)}@media (prefers-reduced-motion:reduce){.umtl-root,.umtl-root *,.umtl-tip,.umtl-tip *,.umtl-stagger .umtl-marker{transition-duration:0s!important;transition-delay:0s!important;animation:none!important}}';
      const styleEl = document.createElement('style');
      styleEl.textContent = css;
      document.head.appendChild(styleEl);
      ctx.effect(() => () => styleEl.remove());

      function isEnabled() {
        try { return window.localStorage.getItem('umtl:enabled') !== 'false'; } catch(e){ return true; }
      }
      let enabled = isEnabled();

      // P0-3：TreeWalker 增量读取，累计 ~220 字符即停，避免长文数万字全文 textContent
      function extractText(el){
        const b=el.querySelector('.gdEzaW_bubble')||el;
        let t='';
        try{
          const w=document.createTreeWalker(b,NodeFilter.SHOW_TEXT,null);
          let n=w.nextNode();
          while(n && t.length<220){
            const p=n.parentElement;
            const tag=p?p.tagName:'';
            if(tag!=='SCRIPT'&&tag!=='STYLE'&&tag!=='NOSCRIPT') t+=(n.nodeValue||'');
            n=w.nextNode();
          }
        }catch(e){ try{ t=(b.textContent||'').slice(0,240); }catch(_){ } }
        return t.trim().replace(/\s+/g,' ').trim();
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
      function getScrollRoot(){ const c=document.querySelector('[data-conversation-scroll]'); if(!c) return null; let n=c; while(n && n!==document.body){ try{ const s=window.getComputedStyle(n); if((s.overflowY==='auto'||s.overflowY==='scroll') && n.scrollHeight>n.clientHeight+4) return n; }catch(e){} n=n.parentElement; } return c; }
      // P0-3：markers 浅比较，无变化不触发 setState，消除每 800ms 强制全量 reconcile
      function markersEqual(a,b){
        if(a===b) return true;
        if(!a||!b||a.length!==b.length) return false;
        for(let i=0;i<a.length;i++){
          if(a[i].key!==b[i].key||a[i].preview!==b[i].preview||a[i].bm!==b[i].bm||a[i].time!==b[i].time||a[i].status!==b[i].status) return false;
        }
        return true;
      }

      function Timeline() {
        const [markers,setMarkers]=React.useState([]);
        const [activeKey,setActiveKey]=React.useState(null);
        const [visible,setVisible]=React.useState(false);
        const [tooltip,setTooltip]=React.useState(null);
        const [hoveredKey,setHoveredKey]=React.useState(null);
        const [isTimelineHovered,setIsTimelineHovered]=React.useState(false);
        const [enabledState,setEnabledState]=React.useState(enabled);
        const [entered,setEntered]=React.useState(false); // P1-6：入场编排仅播一次
        const rootRef=React.useRef(null);
        const tipRef=React.useRef(null); // P0-5：tooltip 实测校正
        const hoverTimerRef=React.useRef(null);
        const markersRef=React.useRef([]);
        const activeRef=React.useRef(null);
        const draggingRef=React.useRef(false);
        const rafPendingRef=React.useRef(false);
        const dragTargetRef=React.useRef(null); // P0-1：拖拽中最后目标，松手后 smooth 对齐
        const enteredRef=React.useRef(false);

        React.useEffect(()=>{
          const onStorage=(e)=>{ if(e.key==='umtl:enabled') setEnabledState(e.newValue !== 'false'); if(e.key===null) setEnabledState(isEnabled()); };
          window.addEventListener('storage', onStorage);
          const int = window.setInterval(()=> setEnabledState(isEnabled()), 500);
          return ()=>{ window.removeEventListener('storage', onStorage); window.clearInterval(int); };
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
              const conv=document.querySelector('[data-conversation-scroll]');
              if(!conv) return;
              let col=conv.closest('.wSkVaW_root')||conv.closest('.Md3f7G_root')||conv.parentElement;
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
              const sb=document.querySelector('.wSkVaW_root')||document.querySelector('[class*="sidebar"]')||document.querySelector('[class*="Sidebar"]')||document.querySelector('.sidebar');
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
          const conv=document.querySelector('[data-conversation-scroll]');
          if(conv) ro.observe(conv);
          const col2=document.querySelector('.wSkVaW_root')||document.querySelector('.Md3f7G_root');
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
            const running=document.querySelector('.Md3f7G_turnStatus')!==null; // 提到循环外，每轮只查一次
            for(let i=0;i<all.length;i++){
              const el=all[i]; const kind=el.getAttribute('data-chat-flow-kind')||'';
              if(kind!=='user') continue;
              const key=el.getAttribute('data-chat-anchor-key');
              if(!key || seen.has(key)) continue;
              seen.set(key,true);
              const text=extractText(el);
              const preview=text.slice(0,160);
              const bm=el.hasAttribute('data-bookmarked')||text.includes('📌')||!!el.querySelector('[data-bookmark]');
              const time=extractTime(el);
              const status=running && i===all.length-1 ? '进行中' : '已完成';
              out.push({key,preview,bm,time,status});
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
            debounce=window.setTimeout(()=>{ scan(); debounce=null; },80);
          };
          const mo=new MutationObserver(debouncedScan);
          const target=document.querySelector('[data-conversation-scroll]')||document.body;
          mo.observe(target,{childList:true,subtree:true,characterData:true});
          const bodyMo=new MutationObserver(debouncedScan);
          bodyMo.observe(document.body,{childList:true,subtree:true});
          const rootEl=document.querySelector('.wSkVaW_root');
          if(rootEl) mo.observe(rootEl,{attributes:true,attributeFilter:['data-phase']});
          const iv=window.setInterval(scan,800);
          return ()=>{ mo.disconnect(); bodyMo.disconnect(); window.clearInterval(iv); window.clearTimeout(t1); window.clearTimeout(t2); if(debounce) window.clearTimeout(debounce); };
        },[scan]);

        React.useEffect(()=>{
          const check=()=>{
            const count=markersRef.current.length;
            let isBlank=false;
            const pr=document.querySelector('.wSkVaW_root');
            if(pr){ const ph=pr.getAttribute('data-phase'); if(ph==='hero'||ph==='settling') isBlank=true; }
            if(document.querySelector('.wSkVaW_heroWorkspaceRow') && count===0) isBlank=true;
            let heightOk=true;
            if(rootRef.current){ const h=rootRef.current.getBoundingClientRect().height; if(h>0 && h<48) heightOk=false; else if(h===0 && count>0) heightOk=true; }
            if(!document.querySelector('[data-conversation-scroll]')) heightOk=false;
            const show=count>=1 && !isBlank && heightOk && enabledState;
            setVisible(show);
          };
          check();
          const t=window.setTimeout(check,120);
          const iv=window.setInterval(check,400);
          const ro2=new ResizeObserver(check);
          if(rootRef.current) ro2.observe(rootRef.current);
          const sp=document.querySelector('[data-conversation-scroll]');
          if(sp) ro2.observe(sp);
          window.addEventListener('resize',check);
          return ()=>{ window.clearTimeout(t); window.clearInterval(iv); ro2.disconnect(); window.removeEventListener('resize',check); };
        },[markers.length, enabledState]);

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

        // P0-5：渲染后一帧内实测 tooltip 高度，二次校正 top 与箭头位置（估高可差 >10px，贴底被裁）
        React.useLayoutEffect(()=>{
          const el=tipRef.current;
          if(!el || !tooltip) return;
          const h=el.getBoundingClientRect().height;
          if(!h) return;
          let top=tooltip.top;
          if(top<12) top=12;
          if(top+h>window.innerHeight-12) top=Math.max(12,window.innerHeight-h-12);
          const arrowTop=Math.max(12,Math.min(tooltip.anchorCenterY-top,h-12));
          if(Math.abs(top-tooltip.top)>0.5 || Math.abs(arrowTop-tooltip.arrowTop)>0.5){
            setTooltip(Object.assign({},tooltip,{top,arrowTop}));
          }
        },[tooltip]);

        const prefersReduced=()=>{ try{ return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }catch(e){ return false; } };
        const locateKey=(key)=>{ try{ return document.querySelector('[data-chat-anchor-key="'+CSS.escape(key)+'"]'); }catch(e){ return null; } };
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
            let btn=document.querySelector('.Md3f7G_older button:not([disabled])');
            if(!btn) btn=Array.from(document.querySelectorAll('button')).find(b=> /加载更多|Load more/i.test((b.textContent||'').trim()) && !b.disabled);
            if(!btn){
              const olderWrap=document.querySelector('.Md3f7G_older');
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
        const showTip=(m,rect)=>{
          const GAP=10, estW=240;
          const centerY=rect.top + rect.height/2;
          let estH=56;
          const len=(m.preview||'').length;
          if(len>100) estH=102;
          else if(len>48) estH=82;
          else if(len>20) estH=66;
          let left=rect.right+GAP;
          let isLeft=true;
          if(left+estW>window.innerWidth-12){ left=rect.left-estW-GAP; isLeft=false; }
          let top=centerY - estH/2;
          if(top<12) top=12;
          if(top+estH>window.innerHeight-12) top=Math.max(12,window.innerHeight-estH-12);
          const arrowTop=Math.max(12,Math.min(centerY-top, estH-12)); // 粗估即可，useLayoutEffect 会按实测高度二次校正
          setTooltip({key:m.key,preview:m.preview,bm:m.bm,time:m.time,status:m.status,left,top,arrowTop,isLeft,anchorCenterY:centerY});
        };
        const onEnter=(m,e)=>{
          setHoveredKey(m.key);
          if(hoverTimerRef.current){ window.clearTimeout(hoverTimerRef.current); hoverTimerRef.current=null; }
          const rect=e.currentTarget.getBoundingClientRect();
          hoverTimerRef.current=window.setTimeout(()=>showTip(m,rect),150);
        };
        const onLeave=()=>{
          if(hoverTimerRef.current){ window.clearTimeout(hoverTimerRef.current); hoverTimerRef.current=null; }
          setTooltip(null);
        };
        const onDown=(e)=>{
          if(e.button!==0) return;
          draggingRef.current=true;
          dragTargetRef.current=null;
          try{ e.currentTarget.setPointerCapture(e.pointerId); }catch(_){}
          const near=findNearestByY(e.clientY);
          if(near){ dragTargetRef.current=near.key; scrollToKey(near.key); } // 首次按下保持平滑跳转手感
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
              }
            };
            window.requestAnimationFrame(run);
          } else if(draggingRef.current){
            const target=findNearestByY(e.clientY);
            if(target){ dragTargetRef.current=target.key; scrollToKey(target.key,0,true); }
          }
        };
        const onUp=(e)=>{
          draggingRef.current=false;
          try{ e.currentTarget.releasePointerCapture(e.pointerId);}catch(_){}
          // 松手后对最终目标做一次平滑对齐收尾
          if(dragTargetRef.current){
            const el=locateKey(dragTargetRef.current);
            dragTargetRef.current=null;
            if(el) doScrollTop(el);
          }
        };
        const onRootEnter=()=> setIsTimelineHovered(true);
        const onRootLeave=()=>{ setIsTimelineHovered(false); setHoveredKey(null); if(hoverTimerRef.current){ window.clearTimeout(hoverTimerRef.current); hoverTimerRef.current=null; } setTooltip(null); };
        const onKeyDown=(e)=>{
          if(e.key==='ArrowDown'||e.key==='ArrowUp'){
            const idx=markers.findIndex(m=>m.key===activeKey);
            let ni=idx;
            if(e.key==='ArrowDown') ni=Math.min(markers.length-1, idx+1); else ni=Math.max(0, idx-1);
            if(ni>=0 && markers[ni]){ e.preventDefault(); scrollToKey(markers[ni].key); }
          }
        };
        const activeIdx=(()=>{ const i=markers.findIndex(m=>m.key===activeKey); return i===-1 ? 0 : i; })();
        const hoveredIdx=markers.findIndex(m=>m.key===hoveredKey);
        // P1-5：tooltip 单一实现（外层定位+令牌阴影，内层毛玻璃 body，双三角描边箭头），两处分支复用
        const renderTooltip=()=>{
          if(!tooltip) return null;
          const idx=markers.findIndex(x=>x.key===tooltip.key);
          return React.createElement('div',{ref:tipRef, className:'umtl-tip', style:{left:tooltip.left+'px', top:tooltip.top+'px', width:'240px', minHeight:'48px', transformOrigin:tooltip.isLeft?'left center':'right center'}},
            React.createElement('div',{className:'umtl-tipBody'},
              React.createElement('div',{style:{fontSize:'11px',fontWeight:600,color:'var(--dsw-alias-label-secondary)',marginBottom:'4px',display:'flex',alignItems:'center',gap:'6px', whiteSpace:'nowrap'}},
                tooltip.bm?React.createElement('span',{'aria-hidden':true, style:{width:'3px',height:'8px',borderRadius:'1.5px',background:'var(--dsw-alias-state-warn-primary)',display:'inline-block',flex:'none'}}):null,
                React.createElement('span',{style:{flex:'none'}},'第 '+(idx===-1?'—':idx+1)+' / '+markers.length+' 轮'),
                tooltip.time?React.createElement('span',{style:{flex:'none'}},'· '+tooltip.time):null,
                React.createElement('span',{style:{overflow:'hidden',textOverflow:'ellipsis'}},'· '+(tooltip.status||'已完成'))
              ),
              React.createElement('div',{style:{display:'-webkit-box',WebkitLineClamp:3,WebkitBoxOrient:'vertical',overflow:'hidden',color:'var(--dsw-alias-label-primary)',whiteSpace:'pre-wrap', wordBreak:'break-word', fontSize:'12.5px', lineHeight:'17px'}}, tooltip.preview || '（空消息）')
            ),
            React.createElement('div',{className:'umtl-tipArrow'+(tooltip.isLeft?' is-left':' is-right'), style:{top:tooltip.arrowTop+'px', left:tooltip.isLeft?'0':'auto', right:tooltip.isLeft?'auto':'0'}, 'aria-hidden':true})
          );
        };
        const cls='umtl-root'+(visible?'':' is-hidden')+(isTimelineHovered?' is-tinted':''); // P1-1：悬停才淡入玻璃底
        if(!enabledState) {
          return React.createElement(React.Fragment,null,
            React.createElement('div',{ref:rootRef, className:'umtl-root is-hidden'}),
            renderTooltip()
          );
        }
        return React.createElement(React.Fragment,null,
          React.createElement('div',{ref:rootRef, className:cls, role:'navigation','aria-label':'User message timeline', onPointerDown:onDown, onPointerMove:onMove, onPointerUp:onUp, onPointerEnter:onRootEnter, onPointerLeave:onRootLeave, onKeyDown:onKeyDown, tabIndex:0, style:{outline:'none'}},
            React.createElement('div',{className:'umtl-track'}),
            React.createElement('div',{className:'umtl-markers'+(entered?' umtl-stagger':'')},
              markers.length===0?React.createElement('div',{style:{fontSize:'11px',color:'var(--dsw-alias-label-tertiary)',padding:'6px 2px'}},'暂无轮次'):
              markers.map((m,idx)=>{
                const a=m.key===activeKey; const h=m.key===hoveredKey;
                const c='umtl-marker'+(a?' is-active':'')+(h?' is-hovered':'');
                let dims; let num=false;
                if(!isTimelineHovered){
                  dims={w:12,h:4,o: a?1:0.45};
                } else {
                  const effIdx=hoveredIdx!==-1?hoveredIdx:activeIdx;
                  const d=Math.abs(idx-effIdx);
                  const tier=d>=4?4:d;
                  if(tier===0){ dims={w:34,h:14,o:1}; num=true; } // P1-4：漏斗中心放大为椭圆，序号内嵌
                  else dims=[null,{w:26,h:6,o:.92},{w:20,h:5,o:.78},{w:16,h:5,o:.62},{w:12,h:4,o:.45}][tier];
                }
                return React.createElement('div',{key:m.key,'data-key':m.key, className:c, onMouseEnter:e=>onEnter(m,e), onMouseLeave:onLeave, onClick:()=>scrollToKey(m.key), 'aria-label':'跳至第 '+(idx+1)+' 轮', role:'button', tabIndex:-1,
                    style:{'--umtl-stagger-delay':Math.min(idx*8,72)+'ms'}}, // P1-6：每颗 +8ms，延迟上限 72ms ≈ 总长 350ms cap
                  React.createElement('div',{className:'umtl-pill', style:{width:dims.w+'px', height:dims.h+'px', opacity:dims.o}}),
                  m.bm?React.createElement('div',{className:'umtl-bookmark','aria-hidden':true}):null, // P1-7：3×7 竖条贴 pill 上缘
                  num?React.createElement('span',{className:'umtl-num'},String(idx+1)):null
                );
              })
            )
          ),
          renderTooltip()
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
