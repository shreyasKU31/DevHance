import{c as s,j as e,m as a,a as n,r as d}from"./index-B1hByUSF.js";import{A as p}from"./index-DlfSVS1G.js";/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],h=s("code",m);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]],u=s("feather",x);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],g=s("play",y),f=()=>e.jsx(a.div,{className:"flex h-full w-full items-center justify-center p-8",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:e.jsxs(a.div,{className:"relative h-48 w-full max-w-sm rounded-lg border border-dashed border-white/20",initial:{scale:.8},animate:{scale:1},transition:{duration:.5,delay:.2},children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-gray-500",children:"Drop your embed here"}),e.jsxs(a.div,{className:"absolute inset-2 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 p-4 text-white shadow-lg",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:1},children:[e.jsx("p",{className:"font-bold",children:"Figma Prototype"}),e.jsx("div",{className:"mt-2 h-16 w-full rounded bg-white/20"})]})]})},"media"),v=()=>e.jsx(a.div,{className:"p-8 font-mono text-sm text-left text-gray-300",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:e.jsx(n,{sequence:[`// A simple function to check if a user has access.

function canUserAccess(user) {
  // 1. Check if the user is logged in.
  if (!user.isLoggedIn) {
    return "Access Denied: Please log in.";
  }

  // 2. Check if the user has the 'admin' role.
  if (user.role === "admin") {
    return "Welcome, Admin! Full access granted.";
  }

  // If not an admin, grant basic access.
  return "Welcome! Basic access granted.";
}`],wrapper:"pre",speed:60,cursor:!0,repeat:0,style:{whiteSpace:"pre-line"}})},"code"),j=()=>e.jsx(a.div,{className:"p-8 text-left text-gray-300",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:e.jsx(n,{sequence:["# Project Alpha: A Deep Dive",1e3,`# Project Alpha: A Deep Dive

The initial challenge was to create a scalable architecture...`,1e3,`# Project Alpha: A Deep Dive

The initial challenge was to create a scalable architecture...

> This became the foundational principle for the entire system.`],wrapper:"pre",speed:60,cursor:!0,repeat:0,style:{whiteSpace:"pre-line",fontFamily:"Lexend, sans-serif"}})},"narrative"),r=[{id:"narrative",title:"Rich Narrative Editor",description:"Weave your story with powerful text formatting, from headings and pull-quotes to inline comments."},{id:"media",title:"Dynamic Media Integration",description:"Embed anything—Figma prototypes, live code sandboxes, and high-resolution videos—directly into your narrative."},{id:"code",title:"Insightful Code Showcasing",description:"Go beyond static snippets. Highlight specific lines, add annotations, and link directly to your GitHub repo."}],w=()=>{const[i,o]=d.useState(r[0].id),c=[e.jsx(u,{}),e.jsx(g,{}),e.jsx(h,{})];return e.jsxs("section",{id:"features",className:"w-full bg-[#111827] py-32 px-8",children:[e.jsxs("div",{className:"mx-auto max-w-7xl text-center",children:[e.jsx("h2",{className:"font-['Syne'] text-4xl font-bold text-white",children:"Build Your Narrative, Block by Block."}),e.jsx("p",{className:"mt-4 text-lg text-gray-300/80",children:"devhance provides a powerful, intuitive editor to bring every piece of your project's story together."})]}),e.jsxs("div",{className:"mx-auto mt-16 grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-3",children:[e.jsx("div",{className:"flex flex-col gap-4",children:r.map((t,l)=>e.jsxs("div",{onClick:()=>o(t.id),className:"relative cursor-pointer rounded-lg p-6 text-left transition-colors hover:bg-white/5",children:[i===t.id&&e.jsx(a.div,{layoutId:"active-feature-bar",className:"active-feature-bar"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:`mb-3 text-2xl ${i===t.id?"text-[#46C4FA]":"text-gray-400"}`,children:c[l]}),e.jsx("h3",{className:`mb-2 font-['Syne'] text-lg font-bold ${i===t.id?"text-white":"text-gray-300"}`,children:t.title}),e.jsx("p",{className:"text-sm text-gray-400",children:t.description})]})]},t.id))}),e.jsx("div",{className:"sticky top-24 md:col-span-2",children:e.jsx("div",{className:"glass-pro min-h-[400px] w-full rounded-2xl",children:e.jsxs(p,{mode:"wait",children:[i==="narrative"&&e.jsx(j,{}),i==="media"&&e.jsx(f,{}),i==="code"&&e.jsx(v,{})]})})})]})]})};export{w as default};
