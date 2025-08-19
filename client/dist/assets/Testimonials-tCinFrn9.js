import{j as t,m as Z,f as K,g as Q,F as U,G as Y,T as ee}from"./index-B1hByUSF.js";const te=({quote:i,author:e,title:b,headshot:r,CompanyIcon:j})=>t.jsxs(Z.div,{className:"glass-pro flex h-full flex-col justify-between p-8",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.8,ease:"easeOut"},children:[t.jsx("div",{children:t.jsxs("p",{className:"mb-6 text-xl leading-relaxed text-gray-300",children:['"',i.replace(`a total game-changer,
          ${t.jsx("span",{className:"font-semibold text-[#46C4FA]",children:"a total game-changer"})}`),'"']})}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("img",{src:r,alt:e,className:"mr-4 h-14 w-14 rounded-full border-2 border-white/30"}),t.jsxs("div",{children:[t.jsx("p",{className:"font-['Syne'] text-lg font-bold text-white",children:e}),t.jsx("p",{className:"text-sm text-gray-400",children:b})]})]}),t.jsx(j,{className:"text-4xl text-white/50",width:36,height:36})]})]});var w={},$;function ne(){if($)return w;$=1;function i(s){if(typeof window>"u")return;const d=document.createElement("style");return d.setAttribute("type","text/css"),d.innerHTML=s,document.head.appendChild(d),s}Object.defineProperty(w,"__esModule",{value:!0});var e=K();function b(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var r=b(e);i(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const j=e.forwardRef(function({style:d={},className:z="",autoFill:m=!1,play:u=!0,pauseOnHover:N=!1,pauseOnClick:q=!1,direction:n="left",speed:x=50,delay:I=0,loop:E=0,gradient:D=!1,gradientColor:S="white",gradientWidth:v=200,onFinish:O,onCycleComplete:W,onMount:T,children:g},B){const[R,G]=e.useState(0),[p,H]=e.useState(0),[y,L]=e.useState(1),[M,P]=e.useState(!1),X=e.useRef(null),o=B||X,f=e.useRef(null),h=e.useCallback(()=>{if(f.current&&o.current){const a=o.current.getBoundingClientRect(),C=f.current.getBoundingClientRect();let l=a.width,c=C.width;(n==="up"||n==="down")&&(l=a.height,c=C.height),L(m&&l&&c&&c<l?Math.ceil(l/c):1),G(l),H(c)}},[m,o,n]);e.useEffect(()=>{if(M&&(h(),f.current&&o.current)){const a=new ResizeObserver(()=>h());return a.observe(o.current),a.observe(f.current),()=>{a&&a.disconnect()}}},[h,o,M]),e.useEffect(()=>{h()},[h,g]),e.useEffect(()=>{P(!0)},[]),e.useEffect(()=>{typeof T=="function"&&T()},[]);const k=e.useMemo(()=>m?p*y/x:p<R?R/x:p/x,[m,R,p,y,x]),J=e.useMemo(()=>Object.assign(Object.assign({},d),{"--pause-on-hover":!u||N?"paused":"running","--pause-on-click":!u||N&&!q||q?"paused":"running","--width":n==="up"||n==="down"?"100vh":"100%","--transform":n==="up"?"rotate(-90deg)":n==="down"?"rotate(90deg)":"none"}),[d,u,N,q,n]),V=e.useMemo(()=>({"--gradient-color":S,"--gradient-width":typeof v=="number"?`${v}px`:v}),[S,v]),A=e.useMemo(()=>({"--play":u?"running":"paused","--direction":n==="left"?"normal":"reverse","--duration":`${k}s`,"--delay":`${I}s`,"--iteration-count":E?`${E}`:"infinite","--min-width":m?"auto":"100%"}),[u,n,k,I,E,m]),_=e.useMemo(()=>({"--transform":n==="up"?"rotate(90deg)":n==="down"?"rotate(-90deg)":"none"}),[n]),F=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((C,l)=>r.default.createElement(e.Fragment,{key:l},e.Children.map(g,c=>r.default.createElement("div",{style:_,className:"rfm-child"},c)))),[_,g]);return M?r.default.createElement("div",{ref:o,style:J,className:"rfm-marquee-container "+z},D&&r.default.createElement("div",{style:V,className:"rfm-overlay"}),r.default.createElement("div",{className:"rfm-marquee",style:A,onAnimationIteration:W,onAnimationEnd:O},r.default.createElement("div",{className:"rfm-initial-child-container",ref:f},e.Children.map(g,a=>r.default.createElement("div",{style:_,className:"rfm-child"},a))),F(y-1)),r.default.createElement("div",{className:"rfm-marquee",style:A},F(y))):null});return w.default=j,w}var ae=ne();const re=Q(ae),se=[{quote:"devhance is a total game-changer for my portfolio. It's the first platform that truly understands the importance of process over just final pixels.",author:"Elena Rodriguez",title:"Lead Product Designer at Figma",headshot:"https://i.pravatar.cc/150?img=1",CompanyIcon:U},{quote:"I can finally connect my code to my design decisions in one cohesive narrative. This is the future of how we showcase technical projects.",author:"Marcus Chen",title:"Senior Frontend Engineer at Google",headshot:"https://i.pravatar.cc/150?img=2",CompanyIcon:Y}],ie=[{handle:"@sarah_dev",text:"devhance is a game-changer for my portfolio. Finally, a way to explain the 'why'!"},{handle:"@kenji_ux",text:"Just spent an hour on devhance. The future of showcasing work is here."},{handle:"@david_codes",text:"The ability to embed live code sandboxes is incredible. My case studies feel alive."},{handle:"@priya_creates",text:"Recruiters are loving my new devhance portfolio. The context is everything."},{handle:"@liam_design",text:"Finally, a platform that respects the entire creative process. A must-have for any serious designer."},{handle:"@chloe_builds",text:"The narrative editor is so intuitive. I built my first showcase in an afternoon."}],oe=()=>t.jsx("div",{className:"wall-of-love-container",children:t.jsx(re,{pauseOnHover:!0,speed:40,gradient:!1,children:ie.map((i,e)=>t.jsxs("div",{className:"tweet-card",children:[t.jsx(ee,{className:"mr-3 text-4xl text-blue-400",width:50,height:50}),t.jsxs("div",{children:[t.jsx("p",{className:"font-bold text-white",children:i.handle}),t.jsx("p",{className:"text-gray-300",children:i.text})]})]},e))})}),ce=()=>t.jsxs("section",{id:"testimonials",className:"w-full overflow-hidden bg-[#111827] py-32 px-8",children:[t.jsxs("div",{className:"mx-auto max-w-7xl text-center",children:[t.jsx("h2",{className:"font-['Syne'] text-4xl font-bold text-white",children:"Built for Creators. Loved by Innovators."}),t.jsx("p",{className:"mx-auto mt-4 max-w-3xl text-lg text-gray-300/80",children:"From solo developers to lead designers at top companies, see what our community is saying about devhance."})]}),t.jsx("div",{className:"mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2",children:se.map((i,e)=>t.jsx(te,{...i},e))}),t.jsx("div",{className:"mt-24 [transform:rotate(-2deg)]",children:t.jsx(oe,{})})]});export{ce as default};
