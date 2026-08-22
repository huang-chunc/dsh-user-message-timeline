window.__ModuleLoader__.load({
  id: "dsh-user-message-timeline",
  factory: (require) => {
    var module = { exports: {} };
    var React = require("react");
    var inject = ["slots"];
    function apply(ctx) {
      const css = '.umtl-root{position:fixed;left:0;top:50%;transform:translateX(var(--umtl-left,12px)) translateY(-50%);will-change:transform;contain:layout paint;z-index:6;max-height:min(70vh,40rem);overflow-y:auto;overflow-x:hidden;scrollbar-width:none;overscroll-behavior:contain;pointer-events:auto;background:color-mix(in srgb,var(--dsw-alias-bg-base) 94%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid var(--dsw-alias-border-l1);border-radius:16px;padding:12px 8px;box-shadow:0 4px 16px rgba(0,0,0,.08);display:flex;flex-direction:column;align-items:center;gap:0;opacity:1;transition:transform var(--umtl-dur,220ms) var(--umtl-ease, cubic-bezier(.22,1,.36,1)),opacity .22s;mask-image:linear-gradient(to bottom,transparent 0,black 24px,black calc(100% - 24px),transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0,black 24px,black calc(100% - 24px),transparent 100%)}.umtl-root::-webkit-scrollbar{display:none}.umtl-root.is-hidden{opacity:0;pointer-events:none;transform:translateX(var(--umtl-left,12px)) translateY(-50%) translateX(-10px)}.umtl-root.umtl-pushing{transition:none!important}.umtl-track{display:none}.umtl-markers{position:relative;display:flex;flex-direction:column;align-items:center;gap:10px;padding:6px 0;z-index:1;contain:layout}.umtl-marker{position:relative;display:flex;align-items:center;justify-content:center;width:40px;height:14px;cursor:pointer;flex:none;contain:layout}.umtl-markerLine{display:none}.umtl-pill{border-radius:999px;background:var(--dsw-alias-border-l2);transition:width 180ms cubic-bezier(.22,1,.36,1),height 180ms,opacity 180ms,background 180ms,box-shadow 180ms;box-sizing:border-box;flex:none;will-change:width,height,opacity}.umtl-marker.is-active .umtl-pill{background:var(--dsw-alias-label-primary);opacity:1!important;box-shadow:0 0 0 4px color-mix(in srgb,var(--dsw-alias-label-primary) 14%,transparent)}.umtl-marker.is-hovered .umtl-pill{background:var(--dsw-alias-brand-primary);opacity:1!important;box-shadow:0 0 0 3px color-mix(in srgb,var(--dsw-alias-brand-primary) 16%,transparent)}.umtl-bookmark{position:absolute;right:1px;top:50%;transform:translateY(-50%);width:5px;height:5px;background:var(--dsw-alias-state-warn-primary);border:1px solid var(--dsw-alias-bg-base);border-radius:50%;z-index:2;pointer-events:none}.umtl-label{position:absolute;left:46px;top:50%;transform:translateY(-50%) translateX(-4px);font-size:11px;line-height:14px;font-weight:500;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l1);border-radius:6px;padding:2px 6px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .14s,transform .14s;box-shadow:0 2px 8px rgba(0,0,0,.08)}.umtl-marker:hover .umtl-label{opacity:1;transform:translateY(-50%) translateX(0)}.umtl-tooltip{position:fixed;z-index:9999;width:240px;min-height:48px;max-height:108px;height:auto;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);border:1px solid var(--dsw-alias-border-l1);border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.12);padding:8px 10px;font-size:12.5px;line-height:17px;pointer-events:none;animation:umtlIn .14s ease;word-break:break-word;overflow:hidden}.umtl-tooltipArrow{position:absolute;width:11px;height:11px;background:var(--dsw-alias-bg-overlay);transform:rotate(45deg)}@keyframes umtlIn{from{opacity:0;transform:translateX(4px)}to{opacity:1;transform:translateX(0)}}[data-chat-anchor-key]{scroll-margin-top:14px}';
      const styleEl = document.createElement('style');
      styleEl.textContent = css;
      document.head.appendChild(styleEl);
      ctx.effect(() => () => styleEl.remove());

      function isEnabled() {
        try { return window.localStorage.getItem('umtl:enabled') !== 'false'; } catch(e){ return true; }
      }
      let enabled = isEnabled();

      function extractText(el){ const b=el.querySelector('.gdEzaW_bubble')||el; let t=(b.textContent||'').trim().replace(/\s+/g,' '); return t; }
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

      function Timeline() {
        const [markers,setMarkers]=React.useState([]);
        const [activeKey,setActiveKey]=React.useState(null);
        const [visible,setVisible]=React.useState(false);
        const [tooltip,setTooltip]=React.useState(null);
        const [hoveredKey,setHoveredKey]=React.useState(null);
        const [isTimelineHovered,setIsTimelineHovered]=React.useState(false);
        const [enabledState,setEnabledState]=React.useState(enabled);
        const rootRef=React.useRef(null);
        const hoverTimerRef=React.useRef(null);
        const markersRef=React.useRef([]);
        const activeRef=React.useRef(null);
        const draggingRef=React.useRef(false);
        const rafPendingRef=React.useRef(false);

        React.useEffect(()=>{
          const onStorage=(e)=>{ if(e.key==='umtl:enabled') setEnabledState(e.newValue !== 'false'); if(e.key===null) setEnabledState(isEnabled()); };
          window.addEventListener('storage', onStorage);
          const int = window.setInterval(()=> setEnabledState(isEnabled()), 500);
          return ()=>{ window.removeEventListener('storage', onStorage); window.clearInterval(int); };
        },[]);

        React.useEffect(()=>{ activeRef.current=activeKey; },[activeKey]);
        React.useEffect(()=>{ markersRef.current=markers; },[markers]);

        React.useEffect(()=>{
          let lastLeft=-1;
          const upd=()=>{
            if(document.hidden) return;
            try{
              const conv=document.querySelector('[data-conversation-scroll]');
              if(!conv) return;
              let col=conv.closest('.wSkVaW_root')||conv.closest('.Md3f7G_root')||conv.parentElement;
              if(!col) col=conv;
              const rect=col.getBoundingClientRect();
              const desired=Math.round(rect.left+12);
              const clamped=Math.max(8,Math.min(desired, window.innerWidth-56));
              if(clamped===lastLeft) return;
              lastLeft=clamped;
              document.documentElement.style.setProperty('--umtl-left',clamped+'px');
            }catch(e){}
          };
          const syncDur=()=>{
            try{
              const sb=document.querySelector('.sidebar')||document.querySelector('[class*="sidebar"]')||document.querySelector('[class*="Sidebar"]')||document.querySelector('.wSkVaW_root');
              if(!sb) return;
              const cs=window.getComputedStyle(sb);
              const d=cs.transitionDuration||'0.22s';
              const e=cs.transitionTimingFunction||'cubic-bezier(.22,1,.36,1)';
              let ms=220;
              if(d.includes('ms')) ms=parseFloat(d);
              else if(d.includes('s')) ms=parseFloat(d)*1000;
              if(!isFinite(ms)||ms<50) ms=220;
              document.documentElement.style.setProperty('--umtl-dur',Math.round(ms)+'ms');
              document.documentElement.style.setProperty('--umtl-ease',e.split(',')[0]);
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
          window.addEventListener('resize',()=> window.requestAnimationFrame(upd));
          let rafId=null;
          let rafActive=false;
          const startPush=()=>{
            syncDur();
            if(rafActive) return;
            rafActive=true;
            if(rootRef.current) rootRef.current.classList.add('umtl-pushing');
            const loop=()=>{ upd(); if(rafActive) rafId=window.requestAnimationFrame(loop); };
            rafId=window.requestAnimationFrame(loop);
            const durStr=window.getComputedStyle(document.documentElement).getPropertyValue('--umtl-dur')||'220ms';
            let ms=220;
            if(durStr.includes('ms')) ms=parseFloat(durStr);
            else if(durStr.includes('s')) ms=parseFloat(durStr)*1000;
            window.setTimeout(()=>{ rafActive=false; if(rootRef.current) rootRef.current.classList.remove('umtl-pushing'); upd(); if(rafId) window.cancelAnimationFrame(rafId); }, (isFinite(ms)?ms:220)+90);
          };
          const onTrans=(e)=>{ if(e.target && e.target.closest && e.target.closest('.wSkVaW_root, [class*="sidebar"], [class*="Sidebar"]')) startPush(); };
          document.addEventListener('transitionstart', onTrans);
          document.addEventListener('transitionrun', onTrans);
          const onTransEnd=()=>{ rafActive=false; if(rootRef.current) rootRef.current.classList.remove('umtl-pushing'); upd(); };
          document.addEventListener('transitionend', onTransEnd);
          document.addEventListener('transitioncancel', onTransEnd);
          const onClick=(e)=>{
            const t=e.target;
            if(t && t.closest){
              const b=t.closest('button');
              if(b){
                const txt=(b.textContent||'')+(b.getAttribute('aria-label')||'');
                if(/侧边|收起|展开|sidebar/i.test(txt)) startPush();
              }
            }
          };
          document.addEventListener('click', onClick);
          return ()=>{ ro.disconnect(); window.removeEventListener('resize',()=> window.requestAnimationFrame(upd)); document.removeEventListener('transitionstart', onTrans); document.removeEventListener('transitionrun', onTrans); document.removeEventListener('transitionend', onTransEnd); document.removeEventListener('transitioncancel', onTransEnd); document.removeEventListener('click', onClick); if(rafId) window.cancelAnimationFrame(rafId); };
        },[]);

        const scan=React.useCallback(()=>{
          try{
            const all=Array.from(document.querySelectorAll('[data-chat-anchor-key]'));
            const seen=new Map(); const out=[];
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
              const running=document.querySelector('.Md3f7G_turnStatus')!==null;
              const status=running && i===all.length-1 ? '进行中' : '已完成';
              out.push({key,text,preview,bm,time,status});
            }
            markersRef.current=out; setMarkers(out);
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

        const showTip=(key,rect,text,preview,time,status)=>{
          const GAP=10, estW=240;
          const centerY=rect.top + rect.height/2;
          let estH=56;
          const len=(preview||text||'').length;
          if(len>100) estH=102;
          else if(len>48) estH=82;
          else if(len>20) estH=66;
          let left=rect.right+GAP;
          let isLeft=true;
          if(left+estW>window.innerWidth-12){ left=rect.left-estW-GAP; isLeft=false; }
          let top=centerY - estH/2;
          if(top<12) top=12;
          if(top+estH>window.innerHeight-12) top=window.innerHeight-estH-12;
          const arrowTop=centerY - top - 5.5;
          const clampedArrow=Math.max(10, Math.min(arrowTop, estH-18));
          setTooltip({key,text,preview,left,top,arrowTop:clampedArrow,isLeft,time,status});
        };
        const onEnter=(m,e)=>{
          setHoveredKey(m.key);
          if(hoverTimerRef.current){ window.clearTimeout(hoverTimerRef.current); hoverTimerRef.current=null; }
          const rect=e.currentTarget.getBoundingClientRect();
          hoverTimerRef.current=window.setTimeout(()=>showTip(m.key,rect,m.text,m.preview,m.time,m.status),150);
        };
        const onLeave=()=>{
          if(hoverTimerRef.current){ window.clearTimeout(hoverTimerRef.current); hoverTimerRef.current=null; }
          setTooltip(null);
        };
        const doScrollTop=(el)=>{
          try{
            el.scrollIntoView({behavior:'smooth', block:'start'});
            setActiveKey(el.getAttribute('data-chat-anchor-key'));
          }catch(e){ try{ el.scrollIntoView({behavior:'instant', block:'start'}); }catch(_){} }
        };
        const scrollToKey=(key, attempt=0)=>{
          try{
            const sel='[data-chat-anchor-key="'+CSS.escape(key)+'"]';
            const el=document.querySelector(sel);
            if(el){ doScrollTop(el); return; }
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
              window.setTimeout(()=> scrollToKey(key, attempt+1), 680);
            } else {
              if(attempt<14){
                if(root) try{ root.scrollTop=0; }catch(e){}
                window.setTimeout(()=> scrollToKey(key, attempt+1), 420);
              }
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
        const onDown=(e)=>{
          if(e.button!==0) return;
          draggingRef.current=true;
          try{ e.currentTarget.setPointerCapture(e.pointerId); }catch(_){}
          const near=findNearestByY(e.clientY);
          if(near) scrollToKey(near.key);
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
                if(target) scrollToKey(target.key);
              }
            };
            window.requestAnimationFrame(run);
          } else if(draggingRef.current){
            let target=findNearestByY(e.clientY);
            if(target) scrollToKey(target.key);
          }
        };
        const onUp=(e)=>{ draggingRef.current=false; try{ e.currentTarget.releasePointerCapture(e.pointerId);}catch(_){} };
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
        const cls='umtl-root'+(visible?'':' is-hidden');
        if(!enabledState) {
          return React.createElement(React.Fragment,null,
            React.createElement('div',{ref:rootRef, className:'umtl-root is-hidden'}),
            tooltip?React.createElement('div',{className:'umtl-tooltip', style:{left:tooltip.left+'px', top:tooltip.top+'px', width:'240px', minHeight:'48px', maxHeight:'108px', height:'auto'}},
              React.createElement('div',{className:'umtl-tooltipArrow', style:{top:tooltip.arrowTop+'px', left:tooltip.isLeft?'-7px':'auto', right:tooltip.isLeft?'auto':'-7px', borderLeft:tooltip.isLeft?'1px solid var(--dsw-alias-border-l1)':'none', borderRight:tooltip.isLeft?'none':'1px solid var(--dsw-alias-border-l1)', borderBottom:'1px solid var(--dsw-alias-border-l1)', borderTop:'none', background:'var(--dsw-alias-bg-overlay)'}}),
              React.createElement('div',{style:{fontSize:'11px',fontWeight:600,color:'var(--dsw-alias-label-secondary)',marginBottom:'4px',display:'flex',alignItems:'center',gap:'6px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}, React.createElement('span',{style:{width:'6px',height:'6px',borderRadius:'50%',background:'var(--dsw-alias-brand-primary)',display:'inline-block',flex:'none'}}), '第 '+(markers.findIndex(x=>x.key===tooltip.key)+1)+' 轮 · '+(tooltip.time||'--')+' · '+(tooltip.status||'已完成')),
              React.createElement('div',{style:{display:'-webkit-box',WebkitLineClamp:3,WebkitBoxOrient:'vertical',overflow:'hidden',color:'var(--dsw-alias-label-primary)',whiteSpace:'pre-wrap', wordBreak:'break-word', fontSize:'12.5px', lineHeight:'17px'}}, tooltip.preview || tooltip.text.slice(0,80) || '（空消息）')
            ):null
          );
        }
        return React.createElement(React.Fragment,null,
          React.createElement('div',{ref:rootRef, className:cls, role:'navigation','aria-label':'User message timeline', onPointerDown:onDown, onPointerMove:onMove, onPointerUp:onUp, onPointerEnter:onRootEnter, onPointerLeave:onRootLeave, onKeyDown:onKeyDown, tabIndex:0, style:{outline:'none'}},
            React.createElement('div',{className:'umtl-track'}),
            React.createElement('div',{className:'umtl-markers'},
              markers.length===0?React.createElement('div',{style:{fontSize:'11px',color:'var(--dsw-alias-label-tertiary)',padding:'6px 2px'}},'暂无轮次'):
              markers.map((m,idx)=>{
                const a=m.key===activeKey; const h=m.key===hoveredKey;
                const c='umtl-marker'+(a?' is-active':'')+(h?' is-hovered':'');
                let dims;
                if(!isTimelineHovered){
                  dims={w:12,h:4,o: a?1:0.45};
                } else {
                  const effIdx=hoveredIdx!==-1?hoveredIdx:activeIdx;
                  const d=Math.abs(idx-effIdx);
                  const tier=d>=4?4:d;
                  dims=[{w:36,h:7,o:1},{w:26,h:6,o:.92},{w:20,h:5,o:.78},{w:16,h:5,o:.62},{w:12,h:4,o:.45}][tier];
                }
                return React.createElement('div',{key:m.key,'data-key':m.key, className:c, onMouseEnter:e=>onEnter(m,e), onMouseLeave:onLeave, onClick:()=>scrollToKey(m.key), 'aria-label':'跳至第 '+(idx+1)+' 轮', role:'button', tabIndex:-1},
                  React.createElement('div',{className:'umtl-pill', style:{width:dims.w+'px', height:dims.h+'px', opacity:dims.o}}),
                  m.bm?React.createElement('div',{className:'umtl-bookmark', title:'书签'}):null,
                  React.createElement('div',{className:'umtl-label'},String(idx+1))
                );
              })
            )
          ),
          tooltip?React.createElement('div',{className:'umtl-tooltip', style:{left:tooltip.left+'px', top:tooltip.top+'px', width:'240px', minHeight:'48px', maxHeight:'108px', height:'auto'}},
            React.createElement('div',{className:'umtl-tooltipArrow', style:{top:tooltip.arrowTop+'px', left:tooltip.isLeft?'-7px':'auto', right:tooltip.isLeft?'auto':'-7px', borderLeft:tooltip.isLeft?'1px solid var(--dsw-alias-border-l1)':'none', borderRight:tooltip.isLeft?'none':'1px solid var(--dsw-alias-border-l1)', borderBottom:'1px solid var(--dsw-alias-border-l1)', borderTop:'none', background:'var(--dsw-alias-bg-overlay)'}}),
            React.createElement('div',{style:{fontSize:'11px',fontWeight:600,color:'var(--dsw-alias-label-secondary)',marginBottom:'4px',display:'flex',alignItems:'center',gap:'6px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}, React.createElement('span',{style:{width:'6px',height:'6px',borderRadius:'50%',background:'var(--dsw-alias-brand-primary)',display:'inline-block',flex:'none'}}), '第 '+(markers.findIndex(x=>x.key===tooltip.key)+1)+' 轮 · '+(tooltip.time||'--')+' · '+(tooltip.status||'已完成')),
            React.createElement('div',{style:{display:'-webkit-box',WebkitLineClamp:3,WebkitBoxOrient:'vertical',overflow:'hidden',color:'var(--dsw-alias-label-primary)',whiteSpace:'pre-wrap', wordBreak:'break-word', fontSize:'12.5px', lineHeight:'17px'}}, tooltip.preview || tooltip.text.slice(0,80) || '（空消息）')
          ):null
        );
      }

      function ToggleRow() {
        const [checked,setChecked]=React.useState(()=>{ try{ return window.localStorage.getItem('umtl:enabled') !== 'false'; }catch(e){ return true; }});
        const toggle=()=>{
          const nv=!checked;
          setChecked(nv);
          try{ window.localStorage.setItem('umtl:enabled', String(nv)); window.dispatchEvent(new StorageEvent('storage',{key:'umtl:enabled', newValue:String(nv)})); }catch(e){}
        };
        return React.createElement('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'12px',padding:'10px 0',borderBottom:'1px solid var(--dsw-alias-border-l1)'}},
          React.createElement('div',{style:{flex:1, minWidth:0}},
            React.createElement('div',{style:{fontSize:'14px',fontWeight:500,color:'var(--dsw-alias-label-primary)',lineHeight:'20px'}}, '用户消息时间线'),
            React.createElement('div',{style:{fontSize:'12px',color:'var(--dsw-alias-label-secondary)',lineHeight:'16px',marginTop:'2px'}}, '在对话列内侧显示悬浮药丸导轨，悬停预览、点击跳转、拖拽 scrub')
          ),
          React.createElement('label',{style:{position:'relative',display:'inline-block',width:'44px',height:'26px',cursor:'pointer',flex:'none'}},
            React.createElement('input',{type:'checkbox', checked:checked, onChange:toggle, style:{opacity:0,width:0,height:0}}),
            React.createElement('span',{style:{position:'absolute',top:0,left:0,right:0,bottom:0,background:checked?'var(--dsw-alias-brand-primary)':'var(--dsw-alias-border-l2)',borderRadius:'999px',transition:'background .2s'}}),
            React.createElement('span',{style:{position:'absolute',top:'2px',left:checked?'20px':'2px',width:'22px',height:'22px',background:'#fff',borderRadius:'50%',boxShadow:'0 1px 3px rgba(0,0,0,.2)',transition:'left .2s'}})
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
