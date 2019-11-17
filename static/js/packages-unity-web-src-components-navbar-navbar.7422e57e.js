(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./packages/unity-web/src/components/Avatar/Avatar.js":function(e,n,t){"use strict";var a=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./node_modules/react-image/umd/index.js"),s=t.n(i),c=Object(a.default)("span",{target:"e1syn5zm0"})({name:"xdgs2d",styles:"display:inline-block;img{border-radius:50%;height:2.8rem;max-height:2.8rem;max-width:2.8rem;width:2.8rem;}"}),l=function(e){var n=e.alt,t=void 0===n?"Avatar":n,a=e.url,r=e.fallbackUrl;return o.a.createElement(c,null,o.a.createElement(s.a,{src:[a,r].filter(Boolean),loader:r&&o.a.createElement("img",{alt:t,src:r}),alt:t}))};n.a=l,l.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{alt:{defaultValue:{value:"'Avatar'",computed:!1},type:{name:"string"},required:!1,description:""},fallbackUrl:{type:{name:"string"},required:!0,description:""},url:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/components/Link/Link.js":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./packages/unity-web/src/components/Typography/index.js");function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=function(e){var n=e.component,t=void 0===n?"a":n,a=e.children,s=e.variant,c=void 0===s?"text":s,l=e.color,d=void 0===l?"primary":l,m=e.type,u=i(e,["component","children","variant","color","type"]);return r.a.createElement(o.a,Object.assign({type:m||"link",variant:c,color:d,component:t},u),a)},c=function(){return r.a.createElement("div",null)};n.b=s,c.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LinkPropTypes",props:{children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},component:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}},s.__docgenInfo={description:"",methods:[],displayName:"Link",props:{component:{defaultValue:{value:"'a'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Link/LinkButton.js":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./packages/unity-web/src/components/Buttons/Button.js");function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=function(e){var n=e.history,t=e.to,a=e.onClick,s=i(e,["history","to","onClick"]);return r.a.createElement(o.b,Object.assign({},s,{onClick:function(e){a&&a(e),n.push(t)}}))};n.a=s,s.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{children:{type:{name:"node"},required:!0,description:""},history:{type:{name:"shape",value:{push:{name:"func",required:!0}}},required:!0,description:""},to:{type:{name:"string"},required:!0,description:""}}}},"./packages/unity-web/src/components/Link/index.js":function(e,n,t){"use strict";var a=t("./packages/unity-web/src/components/Link/Link.js");t.d(n,"a",function(){return a.b});t("./packages/unity-web/src/components/Link/LinkButton.js")},"./packages/unity-web/src/components/Navbar/NavItem.js":function(e,n,t){"use strict";var a=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=(t("./node_modules/@emotion/core/dist/core.browser.esm.js"),t("./packages/unity-core/lib/colors.js")),o=t.n(r),i={name:"in3yi3",styles:"font-weight:bold;"},s=Object(a.default)("div",{target:"efsgewv0"})("a{color:",o.a.white.default,";",function(e){return e.selected&&i},"}&:not(:first-of-type){margin-left:3rem;}img{margin-top:4px;}");n.a=s},"./packages/unity-web/src/components/Navbar/Navbar.js":function(e,n,t){"use strict";var a=t("./node_modules/@emotion/css/dist/css.browser.esm.js"),r=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=t("./node_modules/react/index.js"),i=t.n(o),s=t("./packages/unity-core/lib/colors.js"),c=t.n(s),l=t("./packages/unity-web/src/components/Link/index.js"),d=t("./packages/unity-web/src/components/Typography/index.js"),m=t("./packages/unity-web/src/components/Navbar/config.js"),u=Object(r.default)("nav",{target:"e1rvg8h0"})("background:",c.a.notification.default,";color:",c.a.white.default,";height:",m.a,"rem;padding-top:0;"),p=Object(r.default)("div",{target:"e1rvg8h1"})("height:",m.a,"rem;display:flex;line-height:1;margin:0 auto;padding:0 3rem;justify-items:center;align-items:center;",function(e){var n=e.maxWidth;return n&&Object(a.a)("max-width:",n,"px;@media (max-width:",n+40,"px){width:auto;}")},""),g=Object(r.default)("section",{target:"e1rvg8h2"})({name:"1qw8pey",styles:"a{align-items:center;display:flex;justify-content:center;margin-bottom:0;margin-right:40px;text-align:center;width:auto;border-bottom-color:transparent;text-decoration:none;&:visited{border-bottom-color:transparent;}&:hover{border-bottom-color:transparent;}}span{font-size:1rem;line-height:2rem;margin-left:15px;@media (max-width:480px){display:none;}}img,svg{height:40px;width:auto;}"}),f=Object(r.default)("div",{target:"e1rvg8h3"})({name:"1nfsx2o",styles:"width:2rem;"}),b=Object(r.default)("div",{target:"e1rvg8h4"})({name:"172d8m3",styles:"display:flex;flex:1;flex-direction:row;justify-items:center;align-items:center;justify-content:flex-end;"}),y=function(e){var n=e.path,t=e.children;return i.a.createElement(l.a,{href:n},t)},v=function(e){var n=e.navBrandPath,t=e.navBrandRenderer,a=e.navBrandText,r=e.navBrandLogo;return i.a.createElement(g,null,t({path:n,children:i.a.createElement(o.Fragment,null,i.a.createElement(r,null),i.a.createElement(d.a,{variant:"heading",color:"white",component:"span"},a))}))},h=function(e){var n=e.children,t=e.maxWidth,a=void 0!==t&&t,r=e.navBrandText,o=void 0===r?"Clarity Hub":r,s=e.navBrandLogo,c=e.navBrandPath,l=void 0===c?"/":c,d=e.navBrandRenderer,m=void 0===d?y:d;return i.a.createElement(u,null,i.a.createElement(p,{maxWidth:a},i.a.createElement(v,{navBrandLogo:s,navBrandPath:l,navBrandRenderer:m,navBrandText:o}),i.a.createElement(f,null),i.a.createElement(b,null,n)))};n.a=h,h.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{maxWidth:{defaultValue:{value:"false",computed:!1},type:{name:"union",value:[{name:"number"},{name:"bool"}]},required:!1,description:""},navBrandText:{defaultValue:{value:"'Clarity Hub'",computed:!1},type:{name:"string"},required:!1,description:""},navBrandPath:{defaultValue:{value:"'/'",computed:!1},type:{name:"string"},required:!1,description:""},navBrandRenderer:{defaultValue:{value:"({ path, children }) => (\n\t<Link href={path}>{children}</Link>\n)",computed:!1},type:{name:"func"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},navBrandLogo:{type:{name:"union",value:[{name:"node"},{name:"func"},{name:"element"}]},required:!0,description:""}}}},"./packages/unity-web/src/components/Navbar/Navbar.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),s=t("./packages/unity-web/src/components/Navbar/Navbar.js"),c=t("./packages/unity-web/src/components/Navbar/NavItem.js"),l=t("./packages/unity-web/src/components/UserProfile/index.js"),d=t("./packages/unity-web/src/components/Link/index.js"),m=t("./packages/unity-web/src/components/svgs/Logo.js"),u=t("./packages/unity-web/src/components/Menu/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function f(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var h=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=b(this,y(n).call(this,e))).layout=null,t}var t,a,p;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(n,r.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components,t=g(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"navbar"}},"Navbar"),r.a.createElement(o.MDXTag,{name:"p",components:n},"The ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Navbar")," (aka Header or App Bar) is the header of the app. It can contain navigation links."),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import Navbar, { NavItem } from '@clarityhub/unity-web/lib/components/Navbar';\n")),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(i.f,{of:s.a}),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"links"}},"Links"),r.a.createElement(o.MDXTag,{name:"p",components:n},"The ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Link")," component used is agnostic of any router that you may use in your project."),r.a.createElement(o.MDXTag,{name:"p",components:n},"Because of this, you will need to supply a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"profileMenuItemRenderer")," and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"brandRenderer"),"\nthat returns the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-router-dom")," or ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@reach/router")," link you may want to use."),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"examples"}},"Examples"),r.a.createElement(i.e,{__position:1,__code:'<Navbar navBrandLogo={Logo}>\n  <NavItem>\n    <UserProfile\n      avatarUrl="/public/ivan-avatar.png"\n      avatarFallbackUrl="/public/avatar-placeholder.png"\n      menuItems={[\n        <MenuItem>Profile</MenuItem>,\n        <MenuItem>Account</MenuItem>,\n        <MenuItemDivider />,\n        <MenuItem>Logout</MenuItem>,\n      ]}\n    />\n  </NavItem>\n</Navbar>',__scope:{props:this?this.props:t,Navbar:s.a,NavItem:c.a,UserProfile:l.a,Link:d.a,Logo:m.a,MenuItem:u.b,MenuItemDivider:u.c}},r.a.createElement(s.a,{navBrandLogo:m.a},r.a.createElement(c.a,null,r.a.createElement(l.a,{avatarUrl:"/public/ivan-avatar.png",avatarFallbackUrl:"/public/avatar-placeholder.png",menuItems:[r.a.createElement(u.b,null,"Profile"),r.a.createElement(u.b,null,"Account"),r.a.createElement(u.c,null),r.a.createElement(u.b,null,"Logout")]})))),r.a.createElement(i.e,{__position:2,__code:'<Navbar navBrandText="Dashboard" navBrandLogo={Logo} maxWidth={500}>\n  <NavItem selected>\n    <Link type="blockLink" href="#">\n      Dashboard\n    </Link>\n  </NavItem>\n  <NavItem>\n    <Link type="blockLink" href="#">\n      Integrations\n    </Link>\n  </NavItem>\n  <NavItem>\n    <UserProfile\n      avatarUrl="/public/ivan-avatar.png"\n      avatarFallbackUrl="/public/avatar-placeholder.png"\n      menuItems={[\n        <MenuItem>Profile</MenuItem>,\n        <MenuItem>Account</MenuItem>,\n        <MenuItemDivider />,\n        <MenuItem>Logout</MenuItem>,\n      ]}\n    />\n  </NavItem>\n</Navbar>',__scope:{props:this?this.props:t,Navbar:s.a,NavItem:c.a,UserProfile:l.a,Link:d.a,Logo:m.a,MenuItem:u.b,MenuItemDivider:u.c}},r.a.createElement(s.a,{navBrandText:"Dashboard",navBrandLogo:m.a,maxWidth:500},r.a.createElement(c.a,{selected:!0},r.a.createElement(d.a,{type:"blockLink",href:"#"},"Dashboard")),r.a.createElement(c.a,null,r.a.createElement(d.a,{type:"blockLink",href:"#"},"Integrations")),r.a.createElement(c.a,null,r.a.createElement(l.a,{avatarUrl:"/public/ivan-avatar.png",avatarFallbackUrl:"/public/avatar-placeholder.png",menuItems:[r.a.createElement(u.b,null,"Profile"),r.a.createElement(u.b,null,"Account"),r.a.createElement(u.c,null),r.a.createElement(u.b,null,"Logout")]})))))}}])&&f(t.prototype,a),p&&f(t,p),n}();h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Navbar/config.js":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a=5.3},"./packages/unity-web/src/components/Typography/Typography.js":function(e,n,t){"use strict";var a=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),r=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=t("./packages/unity-core/lib/colors.js"),i=t.n(o),s=t("./packages/unity-core/lib/typography.js"),c=t("./packages/unity-web/src/theme/fonts.js");function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=function(e){var n=e.type,t=void 0===n?"text":n,o=e.variant,d=e.color,m=void 0===d?"dark":d,u=e.children,p=e.component,g=void 0===p?"p":p,f=e.noMargin,b=void 0!==f&&f,y=e.noPadding,v=void 0!==y&&y,h=e.inline,k=void 0!==h&&h,j=e.css,x=e.center,w=void 0!==x&&x,E=l(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),O=[Boolean(t)?c.a[t]:{},Boolean(o)?s.variants[o]:{},Boolean(m)?{color:i.a[m].default}:{},Boolean(v)?"\n    padding: 0;\n":{},Boolean(b)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(j)?j:{},Boolean(k)?{display:"inline-block"}:{},Boolean(w)?{textAlign:"center"}:{}];if("string"===typeof g){var I=g;"p"===g&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(I=t);var _=a.default[I](O,"");return Object(r.jsx)(_,E,u)}var L=g;return Object(r.jsx)(L,Object.assign({},E,{css:O}),u)};n.a=d,d.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/components/Typography/index.js":function(e,n,t){"use strict";var a=t("./packages/unity-web/src/components/Typography/Typography.js");t.d(n,"a",function(){return a.a})},"./packages/unity-web/src/components/UserProfile/UserProfile.js":function(e,n,t){"use strict";var a=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./packages/unity-web/src/components/Avatar/Avatar.js"),s=t("./packages/unity-web/src/components/Menu/index.js"),c=Object(a.default)("button",{target:"e5d28200"})({name:"kmy07c",styles:"background:transparent;border:0;cursor:pointer;padding:0;"}),l=function(e){var n=e.avatarUrl,t=e.avatarFallbackUrl,a=e.menuItems;return o.a.createElement(s.a,{items:a},function(e){var a=e.open;return o.a.createElement(c,{onClick:a},o.a.createElement(i.a,{url:n,fallbackUrl:t}))})};n.a=l;l.__docgenInfo={description:"",methods:[],displayName:"UserProfile",props:{avatarFallbackUrl:{type:{name:"string"},required:!0,description:""},avatarUrl:{type:{name:"string"},required:!0,description:""},menuItems:{type:{name:"arrayOf",value:{name:"node"}},required:!1,description:""}}}},"./packages/unity-web/src/components/UserProfile/index.js":function(e,n,t){"use strict";var a=t("./packages/unity-web/src/components/UserProfile/UserProfile.js");t.d(n,"a",function(){return a.a})},"./packages/unity-web/src/components/svgs/Logo.js":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),r=t.n(a),o=function(){return r.a.createElement("svg",{width:"392px",height:"313px",viewBox:"0 0 392 313",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Clarity Hub"),r.a.createElement("defs",null),r.a.createElement("g",{id:"Logo",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Simple-Reversed-Filled",transform:"translate(-14.000000, -54.000000)",fill:"#FFFFFF"},r.a.createElement("g",{id:"Simple",transform:"translate(14.000000, 54.000000)"},r.a.createElement("g",{id:"Body"},r.a.createElement("path",{d:"M19,0 L373,0 C383.49341,-1.92760819e-15 392,8.50658975 392,19 L392,294 C392,304.49341 383.49341,313 373,313 L19,313 C8.50658975,313 1.28507213e-15,304.49341 0,294 L0,19 C-1.28507213e-15,8.50658975 8.50658975,1.92760819e-15 19,0 Z M94.3110522,219.890145 C131.145116,249.95077 164.584555,268.451335 195.052311,275.39184 C225.097126,268.451335 258.536566,249.95077 295.370629,219.890145 C348.341694,176.659962 363.445819,112.032788 345.398601,79.8638289 C326.474838,46.1324376 286.428443,38.5339668 243.286713,55.1533026 C219.720716,64.2315483 203.572092,81.1892036 194.840841,106.026269 C186.10959,81.1892036 169.960966,64.2315483 146.394968,55.1533026 C103.253238,38.5339668 63.2068437,46.1324376 44.2830802,79.8638289 C26.2358624,112.032788 41.3399879,176.659962 94.3110522,219.890145 Z",id:"Combined-Shape"})),r.a.createElement("g",{id:"Eyes",transform:"translate(81.000000, 90.000000)"},r.a.createElement("ellipse",{id:"Oval",cx:"34",cy:"34.1555017",rx:"34",ry:"34.1555017"}),r.a.createElement("ellipse",{id:"Oval",cx:"193",cy:"34.1555017",rx:"34",ry:"34.1555017"})),r.a.createElement("g",{id:"Nose",transform:"translate(176.208469, 155.861224)"},r.a.createElement("path",{d:"M20.4739975,0 C6.82466584,18.3562632 0,32.7064293 0,43.0504983 C0,53.3945674 6.82466584,58.6335169 20.4739975,58.7673469 C32.758396,58.7673469 38.9005953,53.5283974 38.9005953,43.0504983 C38.9005953,32.5725993 32.758396,18.2224332 20.4739975,0 Z",id:"Line-2"}))))))};n.a=o,o.__docgenInfo={description:"",methods:[],displayName:"Logo"}},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var a=t("./packages/unity-core/lib/typography.js"),r=t("./packages/unity-core/lib/colors.js"),o=t.n(r),i=t("./packages/unity-core/lib/utilities/color.js"),s={h1:"\n        ".concat(a.variants.heading.string,"\n\n        font-size: ").concat(a.sizes.h1.rem,"rem;\n        line-height: ").concat(a.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(a.variants.heading.string,"\n\n        font-size: ").concat(a.sizes.h2.rem,"rem;\n        line-height: ").concat(a.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(a.variants.heading.string,"\n\n        font-size: ").concat(a.sizes.h3.rem,"rem;\n        line-height: ").concat(a.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(a.variants.secondary.string,"\n\n        font-size: ").concat(a.sizes.h4.rem,"rem;\n        line-height: ").concat(a.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(a.variants.secondary.string,"\n\n        font-size: ").concat(a.sizes.h5.rem,"rem;\n        line-height: ").concat(a.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(a.variants.secondary.string,"\n\n        font-size: ").concat(a.sizes.h6.rem,"rem;\n        line-height: ").concat(a.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(a.variants.readable.string,"\n\n        font-size: ").concat(a.sizes.p.rem,"rem;\n        line-height: ").concat(a.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(a.variants.text.string,"\n\n        font-size: ").concat(a.sizes.text.rem,"rem;\n        line-height: ").concat(a.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(a.variants.text.string,"\n\n        font-size: ").concat(a.sizes.text2.rem,"rem;\n        line-height: ").concat(a.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(a.variants.text.string,"\n\n        color: ").concat(o.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(a.sizes.subtext.rem,"rem;\n        line-height: ").concat(a.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(o.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(o.a.primary.default,";\n        color: ").concat(o.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(o.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(o.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(i.darken)(o.a.primary.default,.2),";\n            color: ").concat(Object(i.darken)(o.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(o.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(o.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(o.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-navbar-navbar.f4ce4b00bd8228060463.js.map