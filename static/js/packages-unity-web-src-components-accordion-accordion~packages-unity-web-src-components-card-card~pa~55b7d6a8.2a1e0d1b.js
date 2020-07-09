(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./packages/unity-web/src/components/Card/Card.js":function(e,n,t){"use strict";t.d(n,"a",function(){return g});var o=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=t("./packages/unity-core/lib/borders.js"),i=t.n(a),s=t("./packages/unity-core/lib/colors.js"),c=t.n(s),d=t("./packages/unity-web/src/components/Card/CardHeader.js"),l=t("./packages/unity-web/src/components/Card/CardBody.js"),u={name:"fpir79",styles:"box-shadow:0 0 0 1px rgba(0,0,0,0);"},p={name:"xi606m",styles:"text-align:center;"},m={name:"q7u3uc",styles:"transition:box-shadow 0.2s ease-in-out;&:hover{box-shadow:0 0 0 1px rgba(50,50,93,.1),0 7px 14px 0 rgba(50,50,93,.1),0 3px 6px 0 rgba(0,0,0,.07)}"},b=Object(o.default)("div",{target:"e6pferz0"})(Object(r.css)("position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;border-radius:",i.a.borderRadius.rem,"rem;"),function(e){return e.flat?u:Object(r.css)("box-shadow:",c.a.shadow.default,";")},function(e){switch(e.type){case"notification":return Object(r.css)("background:",c.a.gradient.default,";",l.a,"{padding-top:2rem;padding-bottom:2rem;}");case"highlight":return Object(r.css)("background:",c.a.highlight.default,";");case"callout":return Object(r.css)("background:#F9FAFC;border:1px solid ",c.a.primary.default,";");default:return Object(r.css)("background-color:",c.a.white.default,";")}},Object(r.css)(">:not(",d.a,"){h3{margin:0;padding:0;}h4{margin-top:0.6rem;}p:only-child{margin:0;}}"),function(e){return e.center&&p},function(e){return e.hoverable&&m},""),g=function(){return React.createElement("div",null)};g.defaultProps={center:!1,hoverable:!1,flat:!1},b.propTypes=g.propTypes,n.b=b,g.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"CardPropTypes",props:{center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},hoverable:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},flat:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},type:{type:{name:"enum",value:[{value:"'notification'",computed:!1},{value:"'highlight'",computed:!1},{value:"'callout'",computed:!1}]},required:!1,description:""}}}},"./packages/unity-web/src/components/Card/CardBody.js":function(e,n,t){"use strict";var o=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=Object(o.default)("div",{target:"em76frp0"})({name:"1xljzoe",styles:"flex:1 1 auto;padding:1.25rem;"});n.a=r},"./packages/unity-web/src/components/Card/CardHeader.js":function(e,n,t){"use strict";t.d(n,"a",function(){return p});var o=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=t("./node_modules/react/index.js"),a=t.n(r),i=t("./packages/unity-core/lib/borders.js"),s=t.n(i),c=t("./packages/unity-core/lib/colors.js"),d=t.n(c),l=t("./packages/unity-web/src/components/Typography/index.js");function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=Object(o.default)("div",{target:"eedi62r0"})("padding:.75rem 1.25rem;margin-bottom:0;border-bottom:1px solid ",d.a.muted.default,";&:first-of-type{border-radius:calc(",s.a.borderRadius.rem,"rem - 1px) calc(",s.a.borderRadius.rem,"rem - 1px) 0 0;}"),m=function(e){var n=e.children,t=u(e,["children"]);return a.a.createElement(p,t,a.a.createElement(l.a,{noMargin:!0,noPadding:!0,type:"h3"},n))};n.b=m,m.__docgenInfo={description:"",methods:[],displayName:"CardHeader"}},"./packages/unity-web/src/components/Card/index.js":function(e,n,t){"use strict";var o=t("./packages/unity-web/src/components/Card/Card.js"),r=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=Object(r.default)("div",{target:"eq07m5o0"})({name:"15g2oxy",styles:"margin-top:1rem;"}),i=t("./packages/unity-web/src/components/Card/CardBody.js"),s=t("./packages/unity-core/lib/typography.js"),c=t("./packages/unity-core/lib/borders.js"),d=t.n(c),l=t("./packages/unity-core/lib/colors.js"),u=t.n(l),p=Object(r.default)("div",{target:"e1xi9xbg0"})(s.variants.text.string," color:",u.a.dark.default,";padding:.75rem 1.25rem;border-top:1px solid ",u.a.muted.default,";&:last-child{border-radius:0 0 calc(",d.a.borderRadius.rem,"rem - 1px) calc(",d.a.borderRadius.rem,"rem - 1px);}"),m=t("./packages/unity-web/src/components/Card/CardHeader.js"),b=Object(r.default)("img",{target:"e1d18klp0"})("display:block;margin:0 auto;max-width:100%;border-top-left-radius:calc(",d.a.borderRadius.rem,"rem - 1px);border-top-right-radius:calc(",d.a.borderRadius.rem,"rem - 1px);");t.d(n,"f",function(){return o.b}),t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i.a}),t.d(n,"c",function(){return p}),t.d(n,"d",function(){return m.b}),t.d(n,"e",function(){return b})},"./packages/unity-web/src/components/Typography/Typography.js":function(e,n,t){"use strict";var o=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),r=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=t("./packages/unity-core/lib/colors.js"),i=t.n(a),s=t("./packages/unity-core/lib/typography.js"),c=t("./packages/unity-web/src/theme/fonts.js");function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=function(e){var n=e.type,t=void 0===n?"text":n,a=e.variant,l=e.color,u=void 0===l?"dark":l,p=e.children,m=e.component,b=void 0===m?"p":m,g=e.noMargin,f=void 0!==g&&g,y=e.noPadding,h=void 0!==y&&y,v=e.inline,x=void 0!==v&&v,j=e.css,k=e.center,w=void 0!==k&&k,O=d(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),z=[Boolean(t)?c.a[t]:{},Boolean(a)?s.variants[a]:{},Boolean(u)?{color:i.a[u].default}:{},Boolean(h)?"\n    padding: 0;\n":{},Boolean(f)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(j)?j:{},Boolean(x)?{display:"inline-block"}:{},Boolean(w)?{textAlign:"center"}:{}];if("string"===typeof b){var C=b;"p"===b&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(C=t);var q=o.default[C](z,"");return Object(r.jsx)(q,O,p)}var H=b;return Object(r.jsx)(H,Object.assign({},O,{css:z}),p)};n.a=l,l.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/components/Typography/index.js":function(e,n,t){"use strict";var o=t("./packages/unity-web/src/components/Typography/Typography.js");t.d(n,"a",function(){return o.a})},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var o=t("./packages/unity-core/lib/typography.js"),r=t("./packages/unity-core/lib/colors.js"),a=t.n(r),i=t("./packages/unity-core/lib/utilities/color.js"),s={h1:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h1.rem,"rem;\n        line-height: ").concat(o.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h2.rem,"rem;\n        line-height: ").concat(o.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h3.rem,"rem;\n        line-height: ").concat(o.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h4.rem,"rem;\n        line-height: ").concat(o.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h5.rem,"rem;\n        line-height: ").concat(o.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h6.rem,"rem;\n        line-height: ").concat(o.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(o.variants.readable.string,"\n\n        font-size: ").concat(o.sizes.p.rem,"rem;\n        line-height: ").concat(o.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text.rem,"rem;\n        line-height: ").concat(o.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text2.rem,"rem;\n        line-height: ").concat(o.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(o.variants.text.string,"\n\n        color: ").concat(a.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(o.sizes.subtext.rem,"rem;\n        line-height: ").concat(o.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(a.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(a.a.primary.default,";\n        color: ").concat(a.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(a.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(a.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(i.darken)(a.a.primary.default,.2),";\n            color: ").concat(Object(i.darken)(a.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(a.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(a.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(a.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-accordion-accordion~packages-unity-web-src-components-card-card~pa~55b7d6a8.1440fd586bf40659facc.js.map