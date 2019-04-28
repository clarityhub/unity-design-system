(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"./packages/unity-web/src/components/Buttons/ButtonGroup.js":function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/react/index.js"),a=n.n(r),i=n("./packages/unity-core/lib/colors.js"),s=n.n(i),c=n("./packages/unity-web/src/components/Buttons/Button.js");function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(o.default)("div",{target:"e1cjzffo0"})("box-shadow:",s.a.shadow.default,";display:inline-block;",c.a,"{box-shadow:none;}",c.a," + ",c.a,"{border-left-width:0;border-left:1px solid ",s.a.muted.default,";}",c.a,":not(:last-child):not(:first-of-type){border-radius:0;}",c.a,":first-of-type{border-top-right-radius:0;border-bottom-right-radius:0;}",c.a,":last-child{border-top-left-radius:0;border-bottom-left-radius:0;}"),u=function(e){var t=e.selected,n=d(e,["selected"]);return a.a.createElement(c.b,Object.assign({type:t?"primary":"default"},n))};u.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{selected:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonSet.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./node_modules/prop-types/index.js"),i=n("./packages/unity-web/src/components/Buttons/Button.js"),s=Object(o.default)("div",{target:"e1sq8kqm0"})(function(e){return e.spread&&Object(r.css)("display:flex;align-items:center;justify-content:flex-end;",i.a,"{&:not(:first-of-type){margin-left:auto!important;}}")}," button + button,a + a,a + button,button + a{margin-left:0.4rem;}");s.propTypes={spread:a.bool},t.a=s},"./packages/unity-web/src/components/Buttons/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/components/Buttons/Button.js");n.d(t,"b",function(){return o.b});var r=n("./packages/unity-web/src/components/Buttons/ButtonSet.js");n.d(t,"a",function(){return r.a});n("./packages/unity-web/src/components/Buttons/ButtonGroup.js")},"./packages/unity-web/src/components/Card/index.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),n("./packages/unity-core/lib/borders.js")),a=n.n(r),i=n("./packages/unity-core/lib/colors.js"),s=n.n(i),c=n("./node_modules/react/index.js"),d=n.n(c),l=n("./packages/unity-web/src/components/Typography/index.js");function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=Object(o.default)("div",{target:"eedi62r0"})("padding:.75rem 1.25rem;margin-bottom:0;border-bottom:1px solid ",s.a.muted.default,";&:first-of-type{border-radius:calc(",a.a.borderRadius.rem,"rem - 1px) calc(",a.a.borderRadius.rem,"rem - 1px) 0 0;}"),m=function(e){var t=e.children,n=u(e,["children"]);return d.a.createElement(p,n,d.a.createElement(l.a,{noMargin:!0,noPadding:!0,type:"h3"},t))},f=m;m.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};var b=Object(o.default)("div",{target:"em76frp0"})({name:"1xljzoe",styles:"flex:1 1 auto;padding:1.25rem;"}),g={name:"xi606m",styles:"text-align:center;"},y=Object(o.default)("div",{target:"e6pferz0"})("position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;border-radius:",a.a.borderRadius.rem,"rem;box-shadow:",s.a.shadow.default,";",function(e){switch(e.type){case"notification":return"\n                background: ".concat(s.a.gradient.default,";\n\n                ").concat(b," {\n                    padding-top: 2rem;\n                    padding-bottom: 2rem;\n                }\n            ");default:return"\n                background-color: ".concat(s.a.white.default,";\n            ")}}," >:not(",p,"){h3{margin:0;padding:0;}h4{margin-top:0.6rem;}p:only-child{margin:0;}}",function(e){return e.center&&g},""),h=Object(o.default)("div",{target:"eq07m5o0"})({name:"15g2oxy",styles:"margin-top:1rem;"}),x=n("./packages/unity-core/lib/typography.js"),j=Object(o.default)("div",{target:"e1xi9xbg0"})(x.variants.text.string," color:",s.a.dark.default,";padding:.75rem 1.25rem;border-top:1px solid ",s.a.muted.default,";&:last-child{border-radius:0 0 calc(",a.a.borderRadius.rem,"rem - 1px) calc(",a.a.borderRadius.rem,"rem - 1px);}"),w=Object(o.default)("img",{target:"e1d18klp0"})("display:block;margin:0 auto;max-width:100%;border-top-left-radius:calc(",a.a.borderRadius.rem,"rem - 1px);border-top-right-radius:calc(",a.a.borderRadius.rem,"rem - 1px);");n.d(t,"f",function(){return y}),n.d(t,"a",function(){return h}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return j}),n.d(t,"d",function(){return f}),n.d(t,"e",function(){return w})},"./packages/unity-web/src/components/Link/Link.js":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./packages/unity-web/src/components/Typography/index.js");function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=function(e){var t=e.component,n=void 0===t?"a":t,o=e.children,s=e.variant,c=void 0===s?"text":s,d=e.color,l=void 0===d?"primary":d,u=e.type,p=i(e,["component","children","variant","color","type"]);return r.a.createElement(a.a,Object.assign({type:u||"link",variant:c,color:l,component:n},p),o)},c=function(){return r.a.createElement("div",null)};t.b=s,c.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LinkPropTypes",props:{children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},component:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}},s.__docgenInfo={description:"",methods:[],displayName:"Link",props:{component:{defaultValue:{value:"'a'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Link/LinkButton.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./packages/unity-web/src/components/Buttons/Button.js");function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=function(e){var t=e.history,n=e.to,o=e.onClick,s=i(e,["history","to","onClick"]);return r.a.createElement(a.b,Object.assign({},s,{onClick:function(e){o&&o(e),t.push(n)}}))};t.a=s,s.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{children:{type:{name:"node"},required:!0,description:""},history:{type:{name:"shape",value:{push:{name:"func",required:!0}}},required:!0,description:""},to:{type:{name:"string"},required:!0,description:""}}}},"./packages/unity-web/src/components/Link/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/components/Link/Link.js");n.d(t,"a",function(){return o.b});n("./packages/unity-web/src/components/Link/LinkButton.js")},"./packages/unity-web/src/components/Typography/Typography.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-core/lib/colors.js"),i=n.n(a),s=n("./packages/unity-core/lib/typography.js"),c=n("./packages/unity-core/lib/utilities/color.js"),d={h1:"\n        ".concat(s.variants.heading.string,"\n\n        font-size: ").concat(s.sizes.h1.rem,"rem;\n        line-height: ").concat(s.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(s.variants.heading.string,"\n\n        font-size: ").concat(s.sizes.h2.rem,"rem;\n        line-height: ").concat(s.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(s.variants.heading.string,"\n\n        font-size: ").concat(s.sizes.h3.rem,"rem;\n        line-height: ").concat(s.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(s.variants.secondary.string,"\n\n        font-size: ").concat(s.sizes.h4.rem,"rem;\n        line-height: ").concat(s.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(s.variants.secondary.string,"\n\n        font-size: ").concat(s.sizes.h5.rem,"rem;\n        line-height: ").concat(s.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(s.variants.secondary.string,"\n\n        font-size: ").concat(s.sizes.h6.rem,"rem;\n        line-height: ").concat(s.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(s.variants.readable.string,"\n\n        font-size: ").concat(s.sizes.p.rem,"rem;\n        line-height: ").concat(s.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(s.variants.text.string,"\n\n        font-size: ").concat(s.sizes.text.rem,"rem;\n        line-height: ").concat(s.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(s.variants.text.string,"\n\n        font-size: ").concat(s.sizes.text2.rem,"rem;\n        line-height: ").concat(s.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(s.variants.text.string,"\n\n        color: ").concat(i.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(s.sizes.subtext.rem,"rem;\n        line-height: ").concat(s.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(i.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(i.a.primary.default,";\n        color: ").concat(i.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(i.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(i.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(c.darken)(i.a.primary.default,.2),";\n            color: ").concat(Object(c.darken)(i.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(i.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(i.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(i.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")};function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=function(e){var t=e.type,n=void 0===t?"text":t,a=e.variant,c=e.color,u=void 0===c?"dark":c,p=e.children,m=e.component,f=void 0===m?"p":m,b=e.noMargin,g=void 0!==b&&b,y=e.noPadding,h=void 0!==y&&y,x=e.inline,j=void 0!==x&&x,w=e.css,v=e.center,k=void 0!==v&&v,O=l(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),_=[Boolean(n)?d[n]:{},Boolean(a)?s.variants[a]:{},Boolean(u)?{color:i.a[u].default}:{},Boolean(h)?"\n    padding: 0;\n":{},Boolean(g)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(w)?w:{},Boolean(j)?{display:"inline-block"}:{},Boolean(k)?{textAlign:"center"}:{}];if("string"===typeof f){var z=f;"p"===f&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(n)&&(z=n);var B=o.default[z](_,"");return Object(r.jsx)(B,O,p)}var G=f;return Object(r.jsx)(G,Object.assign({},O,{css:_}),p)};t.a=u;u.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/components/Typography/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/components/Typography/Typography.js");n.d(t,"a",function(){return o.a})},"./packages/unity-web/src/scaffolding/Box/Box.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/prop-types/index.js"),a=Object(o.default)("div",{target:"e1b7liwf0"})("padding-top:",function(e){var t=e.withGutterTop,n=e.withGutter;return t||n?"1rem":"0rem"},";padding-bottom:",function(e){var t=e.withGutterBottom,n=e.withGutter;return t||n?"1rem":"0rem"},";padding-left:",function(e){var t=e.withGutterLeft,n=e.withGutter;return t||n?"1rem":"0rem"},";padding-right:",function(e){var t=e.withGutterRight,n=e.withGutter;return t||n?"1rem":"0rem"},";float:",function(e){var t=e.pull;return t||"inherit"},";");a.propTypes={pull:Object(r.oneOf)(["left","right"]),withGutter:r.bool,withGutterBottom:r.bool,withGutterLeft:r.bool,withGutterRight:r.bool,withGutterTop:r.bool},a.defaultProps={withGutter:!1,withGutterTop:!1,withGutterBottom:!1,withGutterLeft:!1,withGutterRight:!1},t.a=a},"./packages/unity-web/src/scaffolding/Box/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/scaffolding/Box/Box.js");n.d(t,"a",function(){return o.a})},"./packages/unity-web/src/scaffolding/FlexGrid/FlexColumn.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),{name:"zcxndt",styles:"align-items:center;"}),a=Object(o.default)("div",{target:"e1leuols0"})("display:flex;flex:1 1 50%;height:100%;",function(e){return e.center&&r},"");t.a=a},"./packages/unity-web/src/scaffolding/FlexGrid/FlexGrid.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),{name:"zcxndt",styles:"align-items:center;"}),a=Object(o.default)("div",{target:"e18tsg4b0"})("display:flex;height:100%;position:relative;width:100%;",function(e){return e.center&&r},"");t.a=a},"./packages/unity-web/src/scaffolding/FlexGrid/FlexGridContainer.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./packages/unity-web/src/theme/breakpoints.js"),a=n("./packages/unity-web/src/scaffolding/FlexGrid/config.js"),i=Object(o.default)("div",{target:"e1cks8la0"})("box-sizing:border-box;margin:0 auto;width:100%;",function(e){switch(e.size){case"xsmall":return"\n                max-width: ".concat(r.a.xsmallMaxWidth,"px;\n\n                @media (max-width: ").concat(r.a.xsmallMaxWidth+16*a.a,"px) {\n                    padding: 0 ").concat(a.a,"rem;\n                    width: 100%;\n                }\n            ");case"small":return"\n                max-width: ".concat(r.a.smallMaxWidth,"px;\n\n                @media (max-width: ").concat(r.a.smallMaxWidth+16*a.a,"px) {\n                    padding: 0 ").concat(a.a,"rem;\n                    width: 100%;\n                }\n            ");default:return"\n                max-width: ".concat(r.a.maxWidth,"px;\n\n                @media (max-width: ").concat(r.a.maxWidth+16*a.a,"px) {\n                    padding: 0 ").concat(a.a,"rem;\n                    width: 100%;\n                }\n            ")}},"");t.a=i},"./packages/unity-web/src/scaffolding/FlexGrid/config.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=2},"./packages/unity-web/src/scaffolding/FlexGrid/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/scaffolding/FlexGrid/FlexGrid.js");n.d(t,"b",function(){return o.a});var r=n("./packages/unity-web/src/scaffolding/FlexGrid/FlexColumn.js");n.d(t,"a",function(){return r.a});var a=n("./packages/unity-web/src/scaffolding/FlexGrid/FlexGridContainer.js");n.d(t,"c",function(){return a.a})},"./packages/unity-web/src/scaffolding/Layout/Layout.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./packages/unity-core/lib/colors.js"),a=n.n(r),i=Object(o.default)("div",{target:"e11730fd0"})("background-color:",a.a.muted.default,";display:flex;flex-direction:column;height:100vh;width:100%;position:relative;overflow:auto;");t.a=i},"./packages/unity-web/src/scaffolding/Layout/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/scaffolding/Layout/Layout.js");n.d(t,"a",function(){return o.a})},"./packages/unity-web/src/templates/AuthTemplate/AuthTemplate.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/unity-web/src/components/Link/index.js"),c=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),d=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),l=n("./packages/unity-core/lib/colors.js"),u=n.n(l),p=n("./packages/unity-web/src/scaffolding/Box/index.js"),m=n("./packages/unity-web/src/scaffolding/Layout/index.js"),f=n("./packages/unity-web/src/scaffolding/FlexGrid/index.js"),b=n("./packages/unity-web/src/components/Card/index.js"),g=n("./packages/unity-web/src/components/Typography/index.js"),y=n("./packages/unity-web/src/components/Buttons/index.js"),h=n("./packages/unity-web/src/theme/breakpoints.js"),x=Object(c.default)("div",{target:"e18vqf5y0"})("flex:1;padding:3rem;max-width:520px;",b.f," + ",b.f,"{margin-top:1rem;}"),j={name:"zdpt2t",styles:"margin-left:auto;"},w={name:"29g8ej",styles:"margin-top:3rem;margin-bottom:1rem;"},v=function(e){var t=e.newsFeed,n=e.onSignUp,o=e.onLogin;return Object(d.jsx)(m.a,{css:Object(d.css)("background-color:",u.a.dove.default,";")},Object(d.jsx)(f.b,{center:!0},Object(d.jsx)(f.a,{center:!0,css:Object(d.css)("background:",u.a.gradient.default,";@media(max-width:",h.a.smartphone,"){display:none;}")},Object(d.jsx)(x,{css:j},t.map(function(e,t){return Object(d.jsx)(b.f,{key:t},Object(d.jsx)(b.b,null,Object(d.jsx)(g.a,{type:"h3"},e.title),Object(d.jsx)(g.a,{type:"text"},e.content)))}))),Object(d.jsx)(f.a,{center:!0},Object(d.jsx)(x,{css:Object(d.css)("@media(max-width:",h.a.smartphone,"){margin-left:auto;margin-right:auto;}")},Object(d.jsx)(g.a,{center:!0,noMargin:!0,noPadding:!0,type:"h2"},"Welcome to Clarity Hub"),Object(d.jsx)(p.a,{withGutterTop:!0},Object(d.jsx)(y.b,{type:"primary",block:!0,onClick:n},"Sign Up"),Object(d.jsx)(g.a,{center:!0,css:w},"Already have an account?"),Object(d.jsx)(y.b,{type:"primary",outline:!0,block:!0,onClick:o},"Login"))))))},k=v;function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}v.__docgenInfo={description:"",methods:[],displayName:"AuthTemplate",props:{newsFeed:{type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"node",required:!1},content:{name:"node",required:!1}}}},required:!0,description:""},onLogin:{type:{name:"func"},required:!0,description:""},onSignUp:{type:{name:"func"},required:!0,description:""}}},n.d(t,"default",function(){return S});var S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=B(this,G(t).call(this,e))).layout=null,n}var n,c,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,r.a.Component),n=t,(c=[{key:"render",value:function(){var e=this.props,t=e.components,n=_(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"authtemplate"}},"AuthTemplate"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Use this template for the login page of Clarity Hub apps."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"authtemplate-"}},"<AuthTemplate /",">"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import AuthTemplate from '@clarityhub/unity-web/libtemplates/AuthTemplate';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(i.f,{of:k}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),r.a.createElement(i.e,{__position:1,__code:'<AuthTemplate\n  onSignUp={() => {}}\n  onLogin={() => {}}\n  newsFeed={[\n    {\n      title: "What\'s new",\n      content: (\n        <Fragment>\n          Integrate with new services, get analytics, and enhance your\n          customer service.\n          <br />\n          <Link href="#">Check out our release notes</Link>\n        </Fragment>\n      ),\n    },\n    {\n      title: \'Smart Compose\',\n      content: (\n        <Fragment>\n          Download our Google Chrome extension to enable Smart Compose for\n          Intercom.\n        </Fragment>\n      ),\n    },\n  ]}\n/>',__scope:{props:this?this.props:n,Fragment:o.Fragment,Link:s.a,AuthTemplate:k}},r.a.createElement(k,{onSignUp:function(){},onLogin:function(){},newsFeed:[{title:"What's new",content:r.a.createElement(o.Fragment,null,"Integrate with new services, get analytics, and enhance your customer service.",r.a.createElement("br",null),r.a.createElement(s.a,{href:"#"},"Check out our release notes"))},{title:"Smart Compose",content:r.a.createElement(o.Fragment,null,"Download our Google Chrome extension to enable Smart Compose for Intercom.")}]})))}}])&&z(n.prototype,c),d&&z(n,d),t}();S.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/theme/breakpoints.js":function(e,t,n){"use strict";t.a={mobile:"575.98px",smartphone:"767.98px",tablet:"991.98px",xsmallMaxWidth:620,smallMaxWidth:820,maxWidth:1250}}}]);
//# sourceMappingURL=packages-unity-web-src-templates-auth-template-auth-template.e0bce119375f652fbe57.js.map