(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./packages/unity-web/src/forms/Input/Input.js":function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var a=r("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),n=r("./node_modules/react/index.js"),o=r.n(n),i=r("./node_modules/@emotion/core/dist/core.browser.esm.js"),d=r("./packages/unity-core/lib/typography.js"),l=r("./packages/unity-core/lib/borders.js"),u=r.n(l),c=r("./packages/unity-core/lib/colors.js"),s=r.n(c),p=r("./packages/unity-core/lib/utilities/color.js");function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f=function(e){var t=e.error;return Object(i.css)("box-sizing:border-box;display:inline-block;font-size:1rem;line-height:1.2rem;margin-bottom:0;min-height:",2.67,"rem;padding:0.625rem 1rem;transition:all 0.2s ease-in;transition-property:border-bottom-width,border-bottom-color,color,margin-bottom;width:100%;resize:vertical;",d.variants.text.string," &:active,&:focus{outline:0;}&:disabled{cursor:not-allowed;}&::placeholder,&::-webkit-datetime-edit-month-field,&::-webkit-datetime-edit-day-field,&::-webkit-datetime-edit-year-field{color:",s.a.gray.default,";}&[type=date]{&::-webkit-inner-spin-button{height:0.8rem}&::-webkit-calendar-picker-indicator{height:0.8rem;}}",t&&Object(i.css)("background-color:",Object(p.desaturate)(Object(p.lighten)(s.a.danger.default,.85),.4),";outline:0;"),"")},m=Object(a.default)("input",{target:"e1v12urk0"})("border:1px solid ",s.a.gray.default,";border-radius:",u.a.borderRadius.rem,"rem;",(function(e){var t=e.error;return f({error:t})})," ",(function(e){return e.prefixIcon&&Object(i.css)("padding-left:",2.5,"rem;")})," ",(function(e){switch(e.variant){case"white":return"\n                    background-color: ".concat(s.a.white.default,";\n                    border: 1px solid ").concat(s.a.white.default,";\n                ");default:return"\n                "}}),"  &:disabled{background-color:",s.a.muted.default,";}&:active,&:focus{border-color:",s.a.primary.default,";}",(function(e){return e.error&&Object(i.css)("border-color:",s.a.danger.default,";")}),""),g=Object(a.default)("div",{target:"e1v12urk1"})("border-bottom:1px solid ",s.a.gray.default,";border-top:1px solid ",s.a.gray.default,";border-left:1px solid ",s.a.gray.default,";border-radius:",u.a.borderRadius.rem,"rem 0 0 ",u.a.borderRadius.rem,"rem;width:",.79,"rem;min-height:100%;"),h=Object(a.default)("div",{target:"e1v12urk2"})("border-bottom:1px solid ",s.a.gray.default,";min-height:100%;width:0;",(function(e){switch(e.variant){case"white":return"\n                    border-top: 1px solid ".concat(s.a.white.default,";\n                    border-bottom: 1px solid ").concat(s.a.white.default,";\n                ");default:return"\n                    border-top: 1px solid transparent !important;\n                "}}),"  > span{color:transparent;}"),y=Object(a.default)("div",{target:"e1v12urk3"})("border-bottom:1px solid ",s.a.gray.default,";border-top:1px solid ",s.a.gray.default,";border-right:1px solid ",s.a.gray.default,";border-radius:0 ",u.a.borderRadius.rem,"rem ",u.a.borderRadius.rem,"rem 0;flex:1;min-height:100%;"),v=Object(a.default)("span",{target:"e1v12urk4"})(d.variants.text.string," padding:0 ",.3,"rem;"),x=Object(a.default)("div",{target:"e1v12urk5"})("box-sizing:border-box;& *{box-sizing:border-box;}display:flex;position:relative;height:100%;",(function(e){return e.error&&Object(i.css)(g,",",h,",",y,"{border-color:",s.a.danger.default,";background-color:",Object(p.desaturate)(Object(p.lighten)(s.a.danger.default,.85),.4),";outline:0;}")})," label{font-size:1rem;pointer-events:none;text-align:initial;padding:0 ",.3,"rem;padding-left:",(function(e){return e.prefixIcon?2:.3}),"rem;top:",.75,"rem;left:",.79,"rem;}textarea:disabled,input:disabled{& ~ ",g,",& ~ ",h,",& ~ ",y,"{background-color:",s.a.muted.default,";}}textarea:focus,textarea:active,input:focus,input:active{& ~ ",g,",& ~ ",h,",& ~ ",y,"{border-color:",s.a.primary.default,";}}textarea:placeholder-shown,textarea[data-not-empty],textarea:focus,input:placeholder-shown,input[data-not-empty],input:focus{& ~ ",h,"{width:auto;}& ~ label,& ~ * label{color:",s.a.darkGray.default,";font-size:0.8rem;top:-0.5rem;padding-left:",.3,"rem;}& ~ * ",v,"{font-size:0.8rem;}}",(function(e){switch(e.variant){case"white":return Object(i.css)(g,",",h,",",y,"{border-color:",s.a.white.default,";background-color:",s.a.white.default,";outline:0;}textarea:placeholder-shown,textarea[data-not-empty],textarea:focus,input:placeholder-shown,input[data-not-empty],input:focus{& ~ label,& ~ * label{color:",s.a.white.default,";top:-1.2rem;left:0.5rem;}}");default:return"\n                "}}),""),w={name:"ex27ez",styles:"margin:0.625rem 0;"},k={name:"1uk1gs8",styles:"margin:0;"},j=Object(a.default)("input",{target:"e1v12urk6"})("border:1px solid transparent;position:absolute;",(function(e){var t=e.error;return f({error:t})})," ",(function(e){return e.prefixIcon&&Object(i.css)("padding-left:",2,"rem;")})," ",(function(e){switch(e.variant){case"white":return"\n                background-color: ".concat(s.a.white.default,";\n            ");default:return""}})," background-color:transparent;padding-bottom:0;padding-top:0;height:calc(100% - 1.25rem);",(function(e){return"textarea"===e.inputType?w:k}),""),O=Object(a.default)("div",{target:"e1v12urk7"})({name:"79elbk",styles:"position:relative;"}),I=Object(a.default)("div",{target:"e1v12urk8"})("position:absolute;left:0;top:0;margin-top:",.65,"rem;margin-left:",.65,"rem;"),E=function(e){var t=e.children,r=e.error,a=void 0!==r&&r,n=e.height,i=e.targetRef,d=e.label,l=e.inputType,u=void 0===l?"input":l,c=e.prefixIcon,s=e.variant,p=b(e,["children","error","height","targetRef","label","inputType","prefixIcon","variant"]);return t?o.a.createElement("div",{style:{height:"".concat(n||"".concat(2.67,"rem"))}},o.a.createElement(x,{error:a,variant:s,prefixIcon:Boolean(c)},o.a.createElement(j,Object.assign({prefixIcon:c,variant:s,inputType:u},p,{ref:i})),o.a.createElement(g,null),o.a.createElement(h,{variant:s},c&&o.a.createElement(I,null,c),o.a.createElement(v,null,d),t),o.a.createElement(y,null))):o.a.createElement(O,null,c&&o.a.createElement(I,null,c),o.a.createElement(m,Object.assign({prefixIcon:Boolean(c),variant:s,error:a},p,{ref:i})))};t.b=E,E.__docgenInfo={description:"",methods:[],displayName:"StyledInput",props:{error:{defaultValue:{value:"false",computed:!1},type:{name:"any"},required:!1,description:""},inputType:{defaultValue:{value:"'input'",computed:!1},type:{name:"string"},required:!1,description:""},children:{type:{name:"union",value:[{name:"node"},{name:"func"}]},required:!1,description:""},height:{type:{name:"number"},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},prefixIcon:{type:{name:"node"},required:!1,description:""},targetRef:{type:{name:"func"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}}}}]);
//# sourceMappingURL=packages-unity-web-src-forms-index~packages-unity-web-src-forms-input-group-append-input-group-appen~9bfc8e39.26ac8c5cdd5aa6e0d6b9.js.map