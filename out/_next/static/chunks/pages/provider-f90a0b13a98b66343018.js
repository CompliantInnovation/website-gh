(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{2651:function(e,s,i){"use strict";i.d(s,{Z:function(){return n}});var a=i(5988),t=(i(1664),i(5893));function n(){return(0,t.jsxs)("footer",{className:"jsx-2802199121",children:[(0,t.jsx)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",className:"jsx-2802199121",children:"Footer"}),(0,t.jsx)(a.default,{id:"2802199121",children:["footer.jsx-2802199121{margin-top:50px;width:100%;background-color:white;height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-filter:drop-shadow(0 -10px 50px #cdf0fd);filter:drop-shadow(0 -10px 50px #cdf0fd);padding-left:30px;padding-right:30px;}","a.jsx-2802199121{color:black;-webkit-text-decoration:none;text-decoration:none;}"]})]})}},214:function(e,s,i){"use strict";i.d(s,{Z:function(){return c}});var a=i(5988),t=i(1664),n=i(1163),r=i(8168),l=i(5893);function c(){var e,s=(0,n.useRouter)(),i=function(){return!0};return i&&(e=(0,r.G)("(max-width: 775px)")),(0,l.jsxs)("nav",{className:"jsx-2997676456",children:[i&&(0,l.jsx)(t.default,{href:"/",children:(0,l.jsx)("a",{className:"jsx-2997676456",children:(0,l.jsx)("img",{src:"".concat(e?"images/logo-short.png":"images/logo.svg"),height:"".concat(e?40:70),width:"".concat(e?40:150),className:"jsx-2997676456"})})}),(0,l.jsxs)("div",{id:"right-side",className:"jsx-2997676456",children:[(0,l.jsxs)("div",{id:"nav-items",className:"jsx-2997676456",children:[(0,l.jsx)(t.default,{href:"/provider",children:(0,l.jsxs)("a",{className:"jsx-2997676456 "+("/provider"==s.pathname?"active_a":""),children:[(0,l.jsx)("span",{className:"jsx-2997676456",children:"Provider"}),(0,l.jsx)("div",{className:"jsx-2997676456 "+("/provider"==s.pathname?"underline":"")})]})}),(0,l.jsx)(t.default,{href:"/medical-device",children:(0,l.jsxs)("a",{className:"jsx-2997676456 "+("/medical-device"==s.pathname?"active_a":""),children:[(0,l.jsx)("span",{className:"jsx-2997676456",children:"Medical Device Co."}),(0,l.jsx)("div",{className:"jsx-2997676456 "+("/medical-device"==s.pathname?"underline":"")})]})})]}),(0,l.jsx)("button",{className:"jsx-2997676456",children:"Log In"})]}),(0,l.jsx)(a.default,{id:"2997676456",children:["nav.jsx-2997676456{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:white;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-filter:drop-shadow(0 10px 50px #cdf0fd);filter:drop-shadow(0 10px 50px #cdf0fd);padding-left:30px;padding-right:30px;position:fixed;top:0;z-index:10000;height:60px;}","#right-side.jsx-2997676456{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","#nav-items.jsx-2997676456{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:15vh;}","a.jsx-2997676456{color:var(--blueDark);-webkit-text-decoration:none;text-decoration:none;padding-right:30px;font-size:16px;}","a.jsx-2997676456:hover{color:var(--blueDocspera);}",".active_a.jsx-2997676456{color:var(--blueDocspera);font-weight:600;}",".underline.jsx-2997676456{height:3px;width:100%;background-color:var(--blueDocspera);border-radius:10px;}","button.jsx-2997676456{background-color:var(--blueDocspera);border:none;border-radius:5px;-webkit-filter:drop-shadow(0,3px,6px,black);filter:drop-shadow(0,3px,6px,black);color:white;padding:10px 15px;font-size:16px;}"]})]})}},6560:function(e,s,i){"use strict";i.d(s,{Z:function(){return l}});var a=i(5988),t=i(9920),n=i(8168),r=i(5893);function l(e){var s,i=e.imgSrc,l=e.number,c=e.title,o=e.plus;e.order;(function(){return!0})&&(s=(0,n.G)("(max-width: 775px)"));var x=(0,t.useSpring)({from:{val:0},to:{val:"number"==typeof l?l:0},config:{duration:2e3,config:t.config.molasses}}),d=(0,t.useSpring)({from:{opacity:0,fontSize:s?"5vw":"3vw",margin:0,color:"var(--blueDocspera)"},to:{opacity:1,fontSize:s?"5vw":"3vw"},config:{duration:2e3,config:t.config.molasses}}),p=(0,t.useSpring)({from:{opacity:0,fontSize:s?"5vw":"3vw",margin:0,color:"var(--blueDocspera)"},to:{opacity:1},config:{duration:2500}});return(0,r.jsxs)("div",{className:"jsx-2020587524 div",children:[(0,r.jsx)("img",{src:i,className:"jsx-2020587524"}),"number"===typeof l?(0,r.jsxs)("div",{style:{display:"flex"},className:"jsx-2020587524",children:[(0,r.jsx)(t.animated.h1,{style:d,children:isNaN(x)&&x.val.to((function(e){return Math.floor(e)}))}),(0,r.jsx)(t.animated.h1,{style:p,children:o&&"+"})]}):(0,r.jsx)(t.animated.h1,{style:d,children:l}),(0,r.jsx)("span",{className:"jsx-2020587524 title",children:c}),(0,r.jsx)(a.default,{id:"2020587524",children:["img.jsx-2020587524{height:12vw;}","@media (min-width:1000px){img.jsx-2020587524{height:100px;}}",".div.jsx-2020587524{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".title.jsx-2020587524{text-align:center;font-size:18px;max-width:200px;}","@media (max-width:800px){.title.jsx-2020587524{font-size:12px;}}"]})]})}},8168:function(e,s,i){"use strict";i.d(s,{G:function(){return t}});var a=i(7294);function t(e){var s=(0,a.useState)(),i=s[0],t=s[1];return(0,a.useEffect)((function(){var s=window.matchMedia(e);s.matches!==i&&t(s.matches);var a=function(){return t(s.matches)};return s.addListener(a),function(){return s.removeListener(a)}}),[e]),i}},4894:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return o}});var a=i(5988),t=i(9008),n=i(214),r=i(6560),l=i(2651),c=i(5893);function o(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.default,{children:[(0,c.jsx)("title",{className:"jsx-2932715899",children:"DocSpera"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-2932715899"})]}),(0,c.jsx)(n.Z,{}),(0,c.jsxs)("div",{className:"jsx-2932715899 container",children:[(0,c.jsx)("h2",{style:{maxWidth:450},className:"jsx-2932715899",children:"Intelligent Surgical Coordination: Enabling Efficiency and Profitability"}),(0,c.jsx)("p",{className:"jsx-2932715899",children:"DocSpera is an integrated solution, helping manage coordination across multiple sites and teams, drive improved efficiencies and deliver better care."}),(0,c.jsxs)("div",{className:"jsx-2932715899 statistics",children:[(0,c.jsxs)("div",{className:"jsx-2932715899",children:[(0,c.jsx)(r.Z,{imgSrc:"images/surgeon-users.png",number:6e3,title:"Surgeons",plus:!0}),(0,c.jsx)(r.Z,{imgSrc:"images/patient-volume.png",number:1e5,title:"Monthly Patient Visits",plus:!0})]}),(0,c.jsxs)("div",{className:"jsx-2932715899",children:[(0,c.jsx)(r.Z,{imgSrc:"images/practices.png",number:300,title:"Practices, ASCs and Hospitals",plus:!0}),(0,c.jsx)(r.Z,{imgSrc:"images/tech-partners.png",number:35e4,title:"Tech Partners",plus:!0})]})]}),(0,c.jsxs)("div",{className:"jsx-2932715899 provider-solutions",children:[(0,c.jsx)("h2",{className:"jsx-2932715899",children:"Integrated Provider Solutions"}),(0,c.jsx)("p",{className:"jsx-2932715899",children:"Best in class SaaS, real-time, predictive platform for the entire surgical ecosystem"}),(0,c.jsxs)("div",{className:"jsx-2932715899 provider-solutions-row",children:[(0,c.jsxs)("div",{className:"jsx-2932715899",children:[(0,c.jsx)("img",{src:"images/scheduling.png",className:"jsx-2932715899"}),(0,c.jsx)("h4",{className:"jsx-2932715899",children:"Integrated Surgical Scheduling"}),(0,c.jsx)("h6",{className:"jsx-2932715899",children:"Coordination across entire care team"}),(0,c.jsx)("p",{className:"jsx-2932715899",children:(0,c.jsxs)("ul",{className:"jsx-2932715899",children:[(0,c.jsx)("li",{className:"jsx-2932715899",children:"Case scheduling & OR management"}),(0,c.jsx)("li",{className:"jsx-2932715899",children:"Image Sharing"}),(0,c.jsx)("li",{className:"jsx-2932715899",children:"EMR & Telelhealth intergration"})]})})]}),(0,c.jsxs)("div",{className:"jsx-2932715899",children:[(0,c.jsx)("img",{src:"images/smart-scheduling.png",className:"jsx-2932715899"}),(0,c.jsx)("h4",{className:"jsx-2932715899",children:"Optimized & Coordinated"}),(0,c.jsx)("h6",{className:"jsx-2932715899",children:"Coordination across entire care team"}),(0,c.jsx)("p",{className:"jsx-2932715899",children:(0,c.jsxs)("ul",{className:"jsx-2932715899",children:[(0,c.jsx)("li",{className:"jsx-2932715899",children:"Real time coordination between clinic, OR Team & Device Rep"}),(0,c.jsx)("li",{className:"jsx-2932715899",children:"Intelligent case backlog booking"})]})})]}),(0,c.jsxs)("div",{className:"jsx-2932715899",children:[(0,c.jsx)("img",{src:"images/episode-of-care.png",className:"jsx-2932715899"}),(0,c.jsx)("h4",{className:"jsx-2932715899",children:"Episode of Care"}),(0,c.jsx)("h6",{className:"jsx-2932715899",children:"Coordination across entire care team"}),(0,c.jsx)("p",{className:"jsx-2932715899",children:(0,c.jsxs)("ul",{className:"jsx-2932715899",children:[(0,c.jsx)("li",{className:"jsx-2932715899",children:"Post-acute management and recovery coordination"}),(0,c.jsx)("li",{className:"jsx-2932715899",children:"Risk stratification & management"})]})})]})]})]})]}),(0,c.jsx)(l.Z,{}),(0,c.jsx)(a.default,{id:"2932715899",children:[".container.jsx-2932715899{padding:0 5vw;}","h2.jsx-2932715899{margin-top:80px;max-width:600px;}",".provider-solutions.jsx-2932715899{margin:0 auto;max-width:1150px;}",".provider-solutions-row.jsx-2932715899{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".provider-solutions-row.jsx-2932715899>div.jsx-2932715899{padding:10px;}",".provider-solutions-row.jsx-2932715899 img.jsx-2932715899{width:300px;height:180px;border-radius:10px;-webkit-filter:drop-shadow(0 0px 10px lightgray);filter:drop-shadow(0 0px 10px lightgray);}",".provider-solutions-row.jsx-2932715899 h4.jsx-2932715899{margin:0;margin-top:20px;color:var(--blueDocspera);}",".provider-solutions-row.jsx-2932715899 h6.jsx-2932715899{color:var(--blueDark);font-size:16px;font-weight:500;margin:0;}",".provider-solutions-row.jsx-2932715899 ul.jsx-2932715899{margin-left:-20px;}",".provider-solutions-row.jsx-2932715899 p.jsx-2932715899{max-width:300px;}"]})]})}},4796:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/provider",function(){return i(4894)}])}},function(e){e.O(0,[503,774,888,179],(function(){return s=4796,e(e.s=s);var s}));var s=e.O();_N_E=s}]);