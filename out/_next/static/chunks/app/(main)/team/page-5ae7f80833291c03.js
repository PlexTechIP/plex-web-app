(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[693],{117:(e,t,r)=>{Promise.resolve().then(r.bind(r,9267))},5565:(e,t,r)=>{"use strict";r.d(t,{default:()=>a.a});var n=r(4146),a=r.n(n)},4146:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return l}});let n=r(306),a=r(666),i=r(7970),s=n._(r(5514));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/home/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=i.Image},9267:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(5155),a=r(2115);let i=e=>{let{backgroundImage:t,title:r,subtitle:a,children:i,center:s}=e;return(0,n.jsxs)("section",{id:"hero-section",className:"relative h-screen bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url('".concat(t,"')")},children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-10"}),(0,n.jsx)("div",{className:"flex items-center justify-center h-full ".concat(s?"":"transform translate-y-28"),children:(0,n.jsxs)("div",{className:"text-white drop-shadow-2xl text-center",children:[r&&(0,n.jsx)("h1",{className:"text-5xl font-extrabold",children:r}),a&&(0,n.jsx)("h2",{className:"text-2xl font-bold m-4",children:a}),i]})})]})},s=e=>{let{title:t,summary:r,children:a,isAlternate:i,bgClassName:s}=e,l=s?"":i?"shapes-bg-alt.webp":"shapes-bg.webp";return(0,n.jsx)("section",{className:"py-16 ".concat(s||""," ").concat(!s&&l?"bg-contain bg-center":""," ").concat(i?"text-white":"text-black"),style:!s&&l?{backgroundImage:"url('".concat(l,"')")}:{},children:(0,n.jsxs)("div",{className:"container mx-auto px-6",children:[(0,n.jsxs)("div",{className:"mb-12 text-center",children:[(0,n.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mt-5",children:t}),(0,n.jsx)("div",{className:"mx-auto my-4 w-32 h-1 ".concat(i?"bg-white":"bg-orange-500")}),r&&(0,n.jsx)("p",{className:"text-xl mt-4",children:r})]}),a]})})};var l=r(5565),o=r(8173),c=r.n(o),u=r(6084),d=r(1536);r(205);let m=e=>{let{members:t}=e,r=t.length<3?"justify-center":"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";return(0,n.jsx)("div",{className:"grid ".concat(r," gap-6"),children:t.map((e,t)=>(0,n.jsx)("div",{className:"flip-card w-[90%]",children:(0,n.jsxs)("div",{className:"flip-card-inner",children:[(0,n.jsxs)("div",{className:"flip-card-front",style:{background:"linear-gradient(to bottom, #FF833D 6.6%, #FF833D 13.3%, #F06751 20%, #E04867 26.6%, #B9009B 33%, #A736CE 40%, #ffffff 0%)"},children:[(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("div",{className:"relative aspect-square rounded-full overflow-hidden mt-[20%] w-[57%]",children:(0,n.jsx)(l.default,{src:e.imageUrl?e.imageUrl:"/team/not-found.jpg",alt:"".concat(e.firstName),layout:"fill",objectFit:"cover"})})}),(0,n.jsxs)("div",{className:"absolute bottom-5 w-full text-center",children:[(0,n.jsx)("h5",{className:"font-bold text-2xl",children:e.firstName+" "+e.lastName}),(0,n.jsx)("h6",{className:"font-semibold text-xl text-gray-500",children:e.position}),"Alumni"===e.position&&(0,n.jsx)("p",{className:"text-sm text-gray-600",children:e.currentCompany}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("div",{className:"rounded-full bg-orange-400 text-white mt-5 px-4 py-2 text-center max-w-fit",children:"Hover to learn more!"})})]})]}),(0,n.jsxs)("div",{className:"flip-card-back flex flex-col justify-between text-center h-full p-10",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h5",{className:"font-bold text-xl mb-0",children:e.firstName+" "+e.lastName}),(0,n.jsx)("h6",{className:"text-lg text-gray-700 mb-3",children:e.position}),(0,n.jsx)("p",{className:"text-left",children:e.blurb})]}),(0,n.jsxs)("ul",{children:[e.linkedin&&(0,n.jsx)("li",{children:(0,n.jsxs)(c(),{href:e.linkedin,passHref:!0,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2",children:[(0,n.jsx)(d.H1h,{}),(0,n.jsx)("span",{className:"text-blue-500 hover:text-blue-800",children:"LinkedIn"})]})}),e.instagram&&(0,n.jsx)("li",{children:(0,n.jsxs)(c(),{href:e.instagram,passHref:!0,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2",children:[(0,n.jsx)(d.ao$,{}),(0,n.jsx)("span",{className:"text-blue-500 hover:text-blue-800",children:"Instagram"})]})}),e.calendly&&(0,n.jsx)("li",{children:(0,n.jsxs)(c(),{href:e.calendly,passHref:!0,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2",children:[(0,n.jsx)(u.cPs,{}),(0,n.jsx)("span",{className:"text-blue-500 hover:text-blue-800",children:"Coffee Chat"})]})})]})]})]})},t))})},h=async()=>{let e=await fetch("".concat("http://localhost:8000/member-portal-api","/members/public-info"));if(!e.ok)throw Error("Failed to fetch members");return(await e.json()).users.map(e=>({firstName:e.first_name,lastName:e.last_name,imageUrl:"".concat("http://localhost:8000","/public/profile-pictures/").concat(e.id,".jpg"),position:e.current_position||"Unknown",blurb:e.profile_blurb||"No blurb available",linkedin:e.linkedin_username||void 0,instagram:e.instagram_username||void 0,calendly:e.calendly_username||void 0,currentCompany:e.current_company||void 0}))},f=()=>{let[e,t]=(0,a.useState)([]);return(0,a.useEffect)(()=>{(async()=>{try{let e=await h();t(e)}catch(e){console.log(e)}})()},[]),(0,n.jsxs)("main",{children:[(0,n.jsx)(i,{backgroundImage:"team/team-bg.webp",title:"Our Team",subtitle:"Meet the #PlexFam",center:!1}),[{title:"Executive Board",description:"The Executive Board spearheads PlexTech as a whole, managing and planning all aspects of the club, including our external events, our client projects, curriculum, to our clubwide social events.",key:["President","VP of Public Relations","VP of Curriculum","VP of Projects","VP of External","VP of Internal","Treasurer"]},{title:"Course Instructors",description:"Our Project Managers and Course Instructors are key leaders within PlexTech, serving as the main touchpoint for our new students. They are heavily involved in planning projects and teaching software engineering concepts. They also are responsible for creating a tight-knit community aspect within their teams to give students another community within the club.",key:["Curriculum Instructor"]},{title:"Project Managers",description:"Our Project Managers are key leaders within PlexTech, serving as the main touchpoint for our new members and developers. They are heavily involved in planning projects and teaching software engineering concepts. They also are responsible for creating a tight-knit community aspect within their teams to give students another community within the club.",key:["Project Manager"]},{title:"Industry Developers",description:"Our developers are the heart and foundation of PlexTech. Devs constantly learn and gain experience in the software engineering industry through their project teams and carry PlexTech's culture throughout the club.",key:["Developer"]},{title:"Senior Advisors",description:"Our Senior Advisors provided a plethora of experience and knowledge regarding not only software development but also leadership and management. Senior Advisors work on either a project team to help support Project Managers or help the executive board with high-level decision input.",key:["Senior Advisor"]},{title:"Alumni",description:"Our alumni have contributed immensely during their time in PlexTech and have gone on to become greatly successful in the tech industry. We are grateful for their contributions and regularly collaborate with them, and they are valuable sources of knowledge.",key:["Alumni"]}].map((t,r)=>{let a=e.filter(e=>t.key.includes(e.position));return(0,n.jsx)(s,{title:t.title,summary:t.description,isAlternate:!1,bgClassName:"bg-white",children:(0,n.jsx)(m,{members:a})},r)})]})}},205:()=>{},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),s=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:a,size:i,title:o}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,s),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(a)}}},e=>{var t=t=>e(e.s=t);e.O(0,[340,711,873,521,173,441,517,358],()=>t(117)),_N_E=e.O()}]);