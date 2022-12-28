"use strict";(self.webpackChunksubmelon_dev=self.webpackChunksubmelon_dev||[]).push([[691],{3723:function(e,t,n){n.d(t,{L:function(){return m},M:function(){return E},P:function(){return w},S:function(){return z},_:function(){return l},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return s}});var r=n(7294),a=(n(2369),n(5697)),i=n.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n,r,a){return void 0===a&&(a={}),o({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function d(e,t,n,r,a,i,l,s){const c={};i&&(c.backgroundColor=i,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,n=l(e,u);return r.createElement(r.Fragment,null,r.createElement(p,o({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:n,loading:a,alt:i="",shouldLoad:s}=e,c=l(e,g);return r.createElement("img",o({},c,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:i}))},y=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,i=l(e,h);const s=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,o({},i,t,{sizes:s,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:s})})),c):c};var v;f.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},y.displayName="Picture",y.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const b=["fallback"],w=function(e){let{fallback:t}=e,n=l(e,b);return t?r.createElement(y,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},n))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const x=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:x},A=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],R=new Set;let S,N;const L=function(e){let{as:t="div",image:a,style:i,backgroundColor:c,className:d,class:u,onStartLoad:p,onLoad:m,onError:g}=e,h=l(e,A);const{width:f,height:y,layout:v}=a,b=function(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(f,y,v),{style:w,className:E}=b,x=l(b,k),C=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);u&&(d=u);const O=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,f,y);return(0,r.useEffect)((()=>{S||(S=Promise.all([n.e(774),n.e(223)]).then(n.bind(n,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return N=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void R.add(L);if(N&&R.has(L))return;let t,r;return S.then((e=>{let{renderImageToString:n,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=n(o({isLoading:!0,isLoaded:R.has(L),image:a},h)),R.has(L)||(t=requestAnimationFrame((()=>{C.current&&(r=l(C.current,L,R,i,p,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{R.has(L)&&N&&(C.current.innerHTML=N(o({isLoading:R.has(L),isLoaded:R.has(L),image:a},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,r.createElement)(t,o({},x,{style:o({},w,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(L,e):null}));O.propTypes=C,O.displayName="GatsbyImage";const j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],H=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},T=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:x,width:H,height:H,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!T.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},z=(I=O,function(e){let{src:t,__imageData:n,__error:a}=e,i=l(e,j);return a&&console.warn(a),n?r.createElement(I,o({image:n},i)):(console.warn("Image not loaded",t),null)});var I;z.displayName="StaticImage",z.propTypes=M},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,r=!1;for(let a=0;a<e.length;a++){const i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},4690:function(e,t,n){n.d(t,{F:function(){return i}});var r=n(7294),a=n(1980);function i(){const{author:e,description:t,title:n}=(0,a.$)();return r.createElement(r.Fragment,null,r.createElement("meta",{name:"twitter:description",content:null!=t?t:""}),r.createElement("meta",{name:"twitter:title",content:null!=n?n:""}),r.createElement("meta",{name:"twitter:creator",content:null!=e?e:""}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"description",content:null!=t?t:""}),r.createElement("title",null,n))}},955:function(e,t,n){n.d(t,{y:function(){return i},A:function(){return d}});var r=n(7294),a=n(1693);var i=e=>{let{children:t,...n}=e;return r.createElement(a.gp,{theme:{link:!0}},r.createElement(a.Jo,n,t))},o=n(4405),l=n(1980);const s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function c(e){let t="";for(;e>0;)t=s[e%62]+t,e=Math.floor(e/62);return t}var d=e=>{let{children:t}=e;const n=(0,l.w)();return r.createElement(r.StrictMode,null,r.createElement("main",null,r.createElement(o.Pd.Provider,{value:{size:"20",style:{marginBottom:"-4px"}}},r.createElement(a.VY,null,t),r.createElement(a.$_,null,r.createElement("span",null,"©2022 kjhoerr@https://submelon.dev/:",function(e){const t=new Date(1e3*e);return[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes()].map(c).join(".")+"-0"}(Number(n)))))))}},1980:function(e,t,n){n.d(t,{$:function(){return a},w:function(){return i}});var r=n(1883);const a=()=>{var e;const{site:t}=(0,r.useStaticQuery)("1151343463");return null!==(e=null==t?void 0:t.siteMetadata)&&void 0!==e?e:{}},i=()=>{var e,t;const{site:n}=(0,r.useStaticQuery)("3317292869");return null!==(e=null==n||null===(t=n.siteMetadata)||void 0===t?void 0:t.version)&&void 0!==e?e:"0"}},7200:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s.F}});var r=n(7294),a=n(3723),i=n(9583),o=n(955),l=n(1693),s=n(4690);t.default=()=>r.createElement(o.A,null,r.createElement("div",null,r.createElement(a.S,{src:"../images/main.png",alt:"Picture of Kevin Hoerr",placeholder:"blurred",layout:"fixed",width:350,height:350,__imageData:n(2252)})),r.createElement(l.ti,null,"Hello!"),r.createElement(l.gp,null,r.createElement("p",null,"I'm a computer science and math graduate from Millersville University. I work as a Solutions Architect and specialize in development operations and systems validation for web applications."),r.createElement("p",null,"My most recent projects have been focused on full-stack development. I use Kubernetes for orchestration and NextJS for the front-end. For back-end development, I have built services enabled by Java with Spring Boot, Quarkus, and rust+actix-web with a GraphQL serving public API."),r.createElement("p",null,"I run a personal Kubernetes cluster at home using MicroOS and k3d. I have also run multiple clusters via DigitalOcean with deployments dedicated for hosting git projects, CI/CD, and code coverage. Since then all projects have been moved to GitHub."),r.createElement("em",null,"- Kevin H.")),r.createElement(o.y,{href:"https://cybr.es/@kjhoerr",rel:"me","aria-label":"My Mastodon account"},r.createElement(i.WJp,null)," @kjhoerr@cybr.es"),r.createElement(o.y,{href:"https://github.com/kjhoerr",rel:"me","aria-label":"My GitHub account with my most active personal projects"},r.createElement(i.hJX,null)," kjhoerr on GitHub"))},1693:function(e,t,n){n.d(t,{Jo:function(){return a},gp:function(){return i},ti:function(){return o},VY:function(){return l},$_:function(){return s}});var r=n(2788),a=r.default.a.withConfig({displayName:"BlockAnchor",componentId:"sc-49dv1p-0"})(["padding:8px;width:328px;display:block;text-align:center;-webkit-text-decoration:none;text-decoration:none;color:#666;&:visited,&:active{padding:8px;width:328px;display:block;text-align:center;-webkit-text-decoration:none;text-decoration:none;color:#666;}"]),i=r.default.div.withConfig({displayName:"BlockBody",componentId:"sc-13lvm6o-0"})(["& + &{margin-top:3px;}background-color:#fff;border:1px #000 solid;border-left:3px #000 solid;border-right:3px #000 solid;padding:",";& > ","{&:hover{background-color:#ddd;color:#222;}}&:last-child,&:last-child > ","{border-bottom-left-radius:18px;border-bottom-right-radius:18px;}"],(e=>e.theme.link?"0":"4px 8px"),a,a),o=r.default.div.withConfig({displayName:"BlockHeader",componentId:"sc-1tkpfhe-0"})(["background-color:#000;width:100%;text-align:center;color:#fff;font-size:36px;font-weight:bold;margin-top:3px;padding-top:4px;"]),l=r.default.div.withConfig({displayName:"Content",componentId:"sc-1nsqces-0"})(["width:350px;margin:0px auto;margin-bottom:120px;padding-top:136px;"]),s=r.default.div.withConfig({displayName:"Footer",componentId:"sc-1as233t-0"})(["width:100%;position:fixed;left:0px;bottom:0px;text-align:center;font-size:12px;span{background-color:#e1e1e1;}"])},4405:function(e,t,n){n.d(t,{w_:function(){return c},Pd:function(){return i}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return r.createElement(d,o({attr:o({},e.attr)},t),s(e.child))}}function d(e){var t=function(t){var n,a=e.attr,i=e.size,s=e.title,c=l(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},2252:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,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"},"images":{"fallback":{"src":"/static/81e0da73927123f3f6b0c9a2d0750e76/88e48/main.png","srcSet":"/static/81e0da73927123f3f6b0c9a2d0750e76/88e48/main.png 350w","sizes":"350px"},"sources":[{"srcSet":"/static/81e0da73927123f3f6b0c9a2d0750e76/6cac9/main.webp 350w","type":"image/webp","sizes":"350px"}]},"width":350,"height":350}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-80f6efd0e7592285e097.js.map