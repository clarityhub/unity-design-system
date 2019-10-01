(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./packages/unity-forms/src/FormFromSchema/FormFromSchema.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),l=n("./packages/unity-forms/node_modules/google-map-react/lib/index.js"),s=n.n(l),d=n("./packages/unity-web/lib/components/Buttons/index.js"),c=n.n(d),u=n("./packages/unity-forms/node_modules/react-jsonschema-form/lib/index.js"),m=n.n(u),p=n("./packages/unity-web/lib/forms/InputGroup/index.js"),f=n.n(p),b=n("./packages/unity-web/lib/forms/LabelledInput/index.js"),y=n.n(b);function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=function(e){var t=e.onChange,n=e.rawErrors,a=g(e,["onChange","rawErrors"]);return r.a.createElement(y.a,Object.assign({},a,{name:a.label,onChange:function(e){t(e.target.value||"")},error:!!n}))},v=h;h.__docgenInfo={description:"",methods:[],displayName:"WrappedLabelledInput"};var j=n("./packages/unity-web/lib/forms/LabelledTextarea/index.js"),w=n.n(j);function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=function(e){var t=e.onChange,n=e.rawErrors,a=x(e,["onChange","rawErrors"]);return r.a.createElement(w.a,Object.assign({},a,{onChange:function(e){t(e.target.value||"")},error:!!n,maxLines:10}))},O=_;_.__docgenInfo={description:"",methods:[],displayName:"WrappedLabelledTextarea"};var C=n("./packages/unity-web/lib/components/Typography/index.js"),E=n.n(C),S=function(e){var t=e.id,n=e.title;return r.a.createElement(E.a,{id:t,noPadding:!0,type:"h2"},n)},k=S;S.__docgenInfo={description:"",methods:[],displayName:"Title"};var M=function(e){var t=e.id,n=e.description;return n?r.a.createElement(E.a,{id:t,type:"sectionLabel",component:"span",style:{fontSize:"0.8rem"}},n):null},T=M;M.__docgenInfo={description:"",methods:[],displayName:"Description"};var P=n("./packages/unity-forms/node_modules/react-jsonschema-form/lib/utils.js"),D=n("./packages/unity-web/lib/components/Notification/index.js"),F=n.n(D);function N(e){var t=e.errors;return r.a.createElement(F.a,{type:"danger",variant:"block"},t.map(function(e,t){return r.a.createElement("div",{key:t},e.stack)}))}function $(e){var t=e.errors,n=void 0===t?[]:t;return 0===n.length?null:r.a.createElement("div",null,n.filter(function(e){return!!e}).map(function(e,t){return r.a.createElement(E.a,{key:t,type:"sectionLabel",color:"danger",component:"div",style:{fontSize:"0.8rem"}},"Validation Error: ",e)}))}function I(e){var t=e.id,n=e.classNames,a=e.children,o=e.disabled,i=e.label,l=e.onKeyChange,s=e.onDropPropertyClick,d=e.readonly,u=e.required;return e.schema.hasOwnProperty(P.ADDITIONAL_PROPERTY_FLAG)?r.a.createElement(f.a,{className:n},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-5 form-additional"},r.a.createElement("div",{className:"form-group"},r.a.createElement(y.a,{label:i,required:u,id:"".concat(t,"-key"),onChange:l}))),r.a.createElement("div",{className:"form-additional form-group col-xs-5"},a),r.a.createElement("div",{className:"col-xs-2"},r.a.createElement(c.a,{type:"danger",icon:"remove",className:"array-item-remove btn-block",tabIndex:"-1",style:{border:"0"},disabled:o||d,onClick:s(i)},"Remove")))):r.a.createElement(f.a,{className:n},a)}function L(e){var t=e.children,n=e.rawErrors,a=e.help,o=e.description,i=e.hidden,l=e.id;return i?r.a.createElement("div",{className:"hidden"},t):r.a.createElement(I,e,t,"root"!==l&&o?o:null,n?r.a.createElement($,{errors:n}):null,a)}N.__docgenInfo={description:"",methods:[],displayName:"FormErrorList"},$.__docgenInfo={description:"",methods:[],displayName:"ErrorList"};var q=L;function A(e){var t=e.TitleField,n=e.DescriptionField;return console.log(e.idSchema.$id,e.uiSchema),r.a.createElement("div",{style:{width:"root"===e.idSchema.$id?"100%":void 0},id:e.idSchema.$id},"root"!==e.idSchema.$id||"root"===e.idSchema.$id&&!e.uiSchema._hideTitle?r.a.createElement(a.Fragment,null,(e.uiSchema["ui:title"]||e.title)&&r.a.createElement(t,{id:"".concat(e.idSchema.$id,"__title"),title:e.title||e.uiSchema["ui:title"],required:e.required,formContext:e.formContext}),e.description&&r.a.createElement(n,{id:"".concat(e.idSchema.$id,"__description"),description:e.description,formContext:e.formContext})):null,e.properties.map(function(e){return e.content}),function(){var t=e.formData,n=e.schema,a=e.uiSchema;if(!n.additionalProperties)return!1;var r=Object(P.getUiOptions)(a).expandable;return!1===r?r:void 0===n.maxProperties||Object.keys(t).length<n.maxProperties}()&&r.a.createElement(c.a,{type:"primary",className:"object-property-expand",onClick:e.onAddClick(e.schema),disabled:e.disabled||e.readonly},"Add"))}L.__docgenInfo={description:"",methods:[],displayName:"FieldTemplate"};var X=A;A.__docgenInfo={description:"",methods:[],displayName:"ObjectFieldTemplate"};var R=n("./node_modules/@material-ui/icons/ArrowUpward.js"),z=n.n(R),H=n("./node_modules/@material-ui/icons/ArrowDownward.js"),B=n.n(H),U=n("./node_modules/@material-ui/icons/Close.js"),G=n.n(U),J=n("./packages/unity-web/lib/components/Card/index.js"),Y=n.n(J);function V(e){var t=e.TitleField,n=e.idSchema,a=e.title,o=e.required;if(!a)return null;var i="".concat(n.$id,"__title");return r.a.createElement(t,{id:i,title:a,required:o})}var W=V;function Z(e){var t=e.DescriptionField,n=e.idSchema,a=e.description;if(!a)return null;var o="".concat(n.$id,"__description");return r.a.createElement(t,{id:o,description:a})}V.__docgenInfo={description:"",methods:[],displayName:"ArrayFieldTitle"};var K=Z;function Q(e){return r.a.createElement("div",{className:e.className,id:e.idSchema.$id},r.a.createElement(W,{key:"array-field-title-".concat(e.idSchema.$id),TitleField:e.TitleField,idSchema:e.idSchema,title:e.uiSchema["ui:title"]||e.title,required:e.required}),(e.uiSchema["ui:description"]||e.schema.description)&&r.a.createElement(K,{key:"array-field-description-".concat(e.idSchema.$id),DescriptionField:e.DescriptionField,idSchema:e.idSchema,description:e.uiSchema["ui:description"]||e.schema.description}),r.a.createElement(Y.a,{className:"row array-item-list",key:"array-item-list-".concat(e.idSchema.$id)},r.a.createElement(J.CardBody,null,e.items&&e.items.map(function(e){return r.a.createElement("div",{key:e.index,className:e.className},r.a.createElement("div",{className:e.hasToolbar?"col-xs-9":"col-xs-12"},e.children),e.hasToolbar&&r.a.createElement("div",{className:"col-xs-3 array-item-toolbox"},r.a.createElement(f.a,null,(e.hasMoveUp||e.hasMoveDown)&&r.a.createElement(c.a,{icon:r.a.createElement(z.a,null),className:"array-item-move-up",tabIndex:"-1",disabled:e.disabled||e.readonly||!e.hasMoveUp,onClick:e.onReorderClick(e.index,e.index-1)}),(e.hasMoveUp||e.hasMoveDown)&&r.a.createElement(c.a,{icon:r.a.createElement(B.a,null),className:"array-item-move-down",tabIndex:"-1",disabled:e.disabled||e.readonly||!e.hasMoveDown,onClick:e.onReorderClick(e.index,e.index+1)}),e.hasRemove&&r.a.createElement(c.a,{type:"danger",icon:r.a.createElement(G.a,null),className:"array-item-remove",tabIndex:"-1",disabled:e.disabled||e.readonly,onClick:e.onDropIndexClick(e.index)}))))}))),e.canAdd&&r.a.createElement(f.a,null,r.a.createElement(c.a,{className:"array-item-add",onClick:e.onAddClick,disabled:e.disabled||e.readonly},"Add Another")))}Z.__docgenInfo={description:"",methods:[],displayName:"ArrayFieldDescription"};var ee=Q;function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){ne(e,t,n[t])})}return e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Q.__docgenInfo={description:"",methods:[],displayName:"ArrayFieldTemplate"};var ae={BaseInput:v,TextareaWidget:O},re={TitleField:k,DescriptionField:T},oe=function(e){var t=e.children,n=e.hideTitle,a=e.additionalButtons,o=void 0===a?function(){return null}:a,i=e.submitText,l=void 0===i?"Submit":i,s=e.submitting,u=e.schema,p=e.uiSchema,b=e.onSubmit,y=e.formData;return r.a.createElement(m.a,{schema:u,fields:re,uiSchema:te({_hideTitle:n},p),FieldTemplate:q,ErrorList:N,ObjectFieldTemplate:X,ArrayFieldTemplate:ee,widgets:ae,formData:y,onSubmit:function(e){var t=e.formData;return b(t)}},t?t({submitting:s,submitText:l}):r.a.createElement(f.a,null,r.a.createElement(d.ButtonSet,null,o(),r.a.createElement(c.a,{type:"primary",buttonType:"submit",disabled:s,loading:s},l))))},ie=oe;function le(e){return(le="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function de(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ce(e,t){return!t||"object"!==le(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}oe.__docgenInfo={description:"",methods:[],displayName:"FormFromSchema",props:{additionalButtons:{defaultValue:{value:"() => null",computed:!1},type:{name:"func"},required:!1,description:""},submitText:{defaultValue:{value:"'Submit'",computed:!1},type:{name:"string"},required:!1,description:""},children:{type:{name:"func"},required:!1,description:""},formData:{type:{name:"object"},required:!1,description:""},hideTitle:{type:{name:"bool"},required:!1,description:""},onSubmit:{type:{name:"func"},required:!0,description:""},schema:{type:{name:"object"},required:!1,description:""},submitting:{type:{name:"bool"},required:!1,description:""},uiSchema:{type:{name:"object"},required:!1,description:""}}},n.d(t,"default",function(){return pe});var pe=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=ce(this,ue(t).call(this,e))).layout=null,n}var n,a,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components,n=se(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"formfromschema"}},"FormFromSchema"),r.a.createElement(o.MDXTag,{name:"p",components:t},"You can use FormFromSchema to automatically generate forms from JSON Schemas."),r.a.createElement(o.MDXTag,{name:"p",components:t},"For more information on how to write and use the FormFromSchema component, see\n",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},"mozilla-services/react-jsonschema-form"),"."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Check out ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://jsonschema.net/"}},"JSONschema.net")," to create schemas easily."),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import FormFromSchema from '@clarityhub/unity-forms/lib/FormFromSchema';\n")),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"simple-form"}},"Simple Form"),r.a.createElement(i.e,{__position:0,__code:"<FormFromSchema\n  additionalButtons={() => {\n    return <Button>Cancel</Button>\n  }}\n  onSubmit={data => alert(JSON.stringify(data))}\n  schema={{\n    definitions: {},\n    $schema: 'http://json-schema.org/draft-07/schema#',\n    $id: 'http://example.com/root.json',\n    type: 'object',\n    title: 'Organization',\n    required: ['name'],\n    properties: {\n      name: {\n        $id: '#/properties/name',\n        type: 'string',\n        title: 'Name',\n        default: '',\n        examples: ['Clarity Hub'],\n        pattern: '^(.*)$',\n      },\n      description: {\n        $id: '#/properties/description',\n        type: 'string',\n        title: 'Description',\n        default: '',\n        pattern: '^(.*)$',\n      },\n    },\n  }}\n/>",__scope:{props:this?this.props:n,GoogleMapReact:s.a,GoogleMapMarkers:l.GoogleMapMarkers,Button:c.a,FormFromSchema:ie}},r.a.createElement(ie,{additionalButtons:function(){return r.a.createElement(c.a,null,"Cancel")},onSubmit:function(e){return alert(JSON.stringify(e))},schema:{definitions:{},$schema:"http://json-schema.org/draft-07/schema#",$id:"http://example.com/root.json",type:"object",title:"Organization",required:["name"],properties:{name:{$id:"#/properties/name",type:"string",title:"Name",default:"",examples:["Clarity Hub"],pattern:"^(.*)$"},description:{$id:"#/properties/description",type:"string",title:"Description",default:"",pattern:"^(.*)$"}}}})),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prefilled-form"}},"Prefilled Form"),r.a.createElement(o.MDXTag,{name:"p",components:t},"You can pass in ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formData")," to prefill out the form"),r.a.createElement(i.e,{__position:1,__code:"<FormFromSchema\n  onSubmit={data => alert(JSON.stringify(data))}\n  formData={{\n    name: 'Clarity Hub',\n    description: 'Conversational APIs to power your business',\n  }}\n  schema={{\n    definitions: {},\n    $schema: 'http://json-schema.org/draft-07/schema#',\n    $id: 'http://example.com/root.json',\n    type: 'object',\n    title: 'Organization',\n    required: ['name'],\n    properties: {\n      name: {\n        $id: '#/properties/name',\n        type: 'string',\n        title: 'Name',\n        default: '',\n        examples: ['Clarity Hub'],\n        pattern: '^(.*)$',\n      },\n      description: {\n        $id: '#/properties/description',\n        type: 'string',\n        title: 'Description',\n        default: '',\n        pattern: '^(.*)$',\n      },\n    },\n  }}\n/>",__scope:{props:this?this.props:n,GoogleMapReact:s.a,GoogleMapMarkers:l.GoogleMapMarkers,Button:c.a,FormFromSchema:ie}},r.a.createElement(ie,{onSubmit:function(e){return alert(JSON.stringify(e))},formData:{name:"Clarity Hub",description:"Conversational APIs to power your business"},schema:{definitions:{},$schema:"http://json-schema.org/draft-07/schema#",$id:"http://example.com/root.json",type:"object",title:"Organization",required:["name"],properties:{name:{$id:"#/properties/name",type:"string",title:"Name",default:"",examples:["Clarity Hub"],pattern:"^(.*)$"},description:{$id:"#/properties/description",type:"string",title:"Description",default:"",pattern:"^(.*)$"}}}})),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"custom-form-fields"}},"Custom Form Fields"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Sometimes you may want to change how a form field is presented. You can use the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"uiSchema")," to change\nfields."),r.a.createElement(o.MDXTag,{name:"p",components:t},"In this example, we use ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/google-map-react/google-map-react"}},"google-map-react/google-map-react"),"\nas an example of a non-standard form component that the UI may want to render when given location objects with lat and lng\nproperties. "),r.a.createElement(o.MDXTag,{name:"p",components:t},"For more information on how to use the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"uiSchema")," property, see ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/#custom-widget-options"}},"react-jsonschema-form")),r.a.createElement(i.e,{__position:2,__code:"<FormFromSchema\n  hideTitle\n  onSubmit={data => alert(JSON.stringify(data))}\n  formData={{\n    name: 'Clarity Hub',\n    description: 'Conversational APIs to power your business',\n    location: { lat: -34.397, lng: 150.644 },\n  }}\n  uiSchema={{\n    location: {\n      'ui:field': props => {\n        return (\n          <div style={{ height: '300px', width: '100%' }}>\n            <GoogleMapReact\n              bootstrapURLKeys={{\n                key: 'AIzaSyDYNOZYEqYnkX2jyfpnIfJgmiLvuCViULo',\n              }}\n              defaultCenter={props.formData}\n              defaultZoom={8}\n            />\n          </div>\n        )\n      },\n      lat: {\n        'ui:widget': 'hidden',\n      },\n      lng: {\n        'ui:widget': 'hidden',\n      },\n    },\n  }}\n  schema={{\n    definitions: {},\n    $schema: 'http://json-schema.org/draft-07/schema#',\n    $id: 'http://example.com/root.json',\n    type: 'object',\n    title: 'Organization',\n    required: ['name'],\n    properties: {\n      name: {\n        $id: '#/properties/name',\n        type: 'string',\n        title: 'Name',\n        default: '',\n        examples: ['Clarity Hub'],\n        pattern: '^(.*)$',\n      },\n      description: {\n        $id: '#/properties/description',\n        type: 'string',\n        title: 'Description',\n        default: '',\n        pattern: '^(.*)$',\n      },\n      location: {\n        $id: '#/properties/location',\n        type: 'object',\n        title: 'Location',\n        default: '',\n        properties: {\n          lat: {\n            $id: '#/properties/location/latitude',\n            type: 'number',\n            title: 'Latitude',\n            default: '',\n          },\n          lng: {\n            $id: '#/properties/location/longitude',\n            type: 'number',\n            title: 'Longitude',\n            default: '',\n          },\n        },\n      },\n    },\n  }}\n/>",__scope:{props:this?this.props:n,GoogleMapReact:s.a,GoogleMapMarkers:l.GoogleMapMarkers,Button:c.a,FormFromSchema:ie}},r.a.createElement(ie,{hideTitle:!0,onSubmit:function(e){return alert(JSON.stringify(e))},formData:{name:"Clarity Hub",description:"Conversational APIs to power your business",location:{lat:-34.397,lng:150.644}},uiSchema:{location:{"ui:field":function(e){return r.a.createElement("div",{style:{height:"300px",width:"100%"}},r.a.createElement(s.a,{bootstrapURLKeys:{key:"AIzaSyDYNOZYEqYnkX2jyfpnIfJgmiLvuCViULo"},defaultCenter:e.formData,defaultZoom:8}))},lat:{"ui:widget":"hidden"},lng:{"ui:widget":"hidden"}}},schema:{definitions:{},$schema:"http://json-schema.org/draft-07/schema#",$id:"http://example.com/root.json",type:"object",title:"Organization",required:["name"],properties:{name:{$id:"#/properties/name",type:"string",title:"Name",default:"",examples:["Clarity Hub"],pattern:"^(.*)$"},description:{$id:"#/properties/description",type:"string",title:"Description",default:"",pattern:"^(.*)$"},location:{$id:"#/properties/location",type:"object",title:"Location",default:"",properties:{lat:{$id:"#/properties/location/latitude",type:"number",title:"Latitude",default:""},lng:{$id:"#/properties/location/longitude",type:"number",title:"Longitude",default:""}}}}}})),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The following prop types are available for FormFromSchema."),r.a.createElement(i.f,{of:ie}))}}])&&de(n.prototype,a),d&&de(n,d),t}();pe.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/lib/components/Card/Card.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CardPropTypes=void 0;var a=d(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=d(n("./packages/unity-core/lib/borders.js")),i=d(n("./packages/unity-core/lib/colors.js")),l=n("./packages/unity-web/lib/components/Card/CardHeader.js"),s=d(n("./packages/unity-web/lib/components/Card/CardBody.js"));function d(e){return e&&e.__esModule?e:{default:e}}var c={name:"2mf806-Card",styles:"box-shadow:0 0 0 1px rgba(0,0,0,0);label:Card;"},u={name:"pq4n33-Card",styles:"text-align:center;label:Card;"},m={name:"16ae7a3-Card",styles:"transition:box-shadow 0.2s ease-in-out;&:hover{box-shadow:0 0 0 1px rgba(50,50,93,.1),0 7px 14px 0 rgba(50,50,93,.1),0 3px 6px 0 rgba(0,0,0,.07)}label:Card;"},p=(0,a.default)("div",{target:"e6pferz0",label:"Card"})((0,r.css)("position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;border-radius:",o.default.borderRadius.rem,"rem;label:Card;"),function(e){return e.flat?c:(0,r.css)("box-shadow:",i.default.shadow.default,";label:Card;")},function(e){switch(e.type){case"notification":return(0,r.css)("background:",i.default.gradient.default,";",s.default,"{padding-top:2rem;padding-bottom:2rem;}label:Card;");case"highlight":return(0,r.css)("background:",i.default.highlight.default,";label:Card;");default:return(0,r.css)("background-color:",i.default.white.default,";label:Card;")}},(0,r.css)(">:not(",l.CardHeaderWrapper,"){h3{margin:0;padding:0;}h4{margin-top:0.6rem;}p:only-child{margin:0;}}label:Card;"),function(e){return e.center&&u},function(e){return e.hoverable&&m},""),f=function(){return React.createElement("div",null)};t.CardPropTypes=f,f.defaultProps={center:!1,hoverable:!1,flat:!1},p.propTypes=f.propTypes;var b=p;t.default=b},"./packages/unity-web/lib/components/Card/CardActions.js":function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"))&&a.__esModule?a:{default:a}).default)("div",{target:"eq07m5o0",label:"CardActions"})({name:"15g2oxy",styles:"margin-top:1rem;"});t.default=r},"./packages/unity-web/lib/components/Card/CardBody.js":function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"))&&a.__esModule?a:{default:a}).default)("div",{target:"em76frp0",label:"CardBody"})({name:"1xljzoe",styles:"flex:1 1 auto;padding:1.25rem;"});t.default=r},"./packages/unity-web/lib/components/Card/CardFooter.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),r=n("./packages/unity-core/lib/typography.js"),o=l(n("./packages/unity-core/lib/borders.js")),i=l(n("./packages/unity-core/lib/colors.js"));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,a.default)("div",{target:"e1xi9xbg0",label:"CardFooter"})(r.variants.text.string," color:",i.default.dark.default,";padding:.75rem 1.25rem;border-top:1px solid ",i.default.muted.default,";&:last-child{border-radius:0 0 calc(",o.default.borderRadius.rem,"rem - 1px) calc(",o.default.borderRadius.rem,"rem - 1px);}");t.default=s},"./packages/unity-web/lib/components/Card/CardHeader.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CardHeaderWrapper=void 0;var a=s(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),r=s(n("./node_modules/react/index.js")),o=s(n("./packages/unity-core/lib/borders.js")),i=s(n("./packages/unity-core/lib/colors.js")),l=s(n("./packages/unity-web/lib/components/Typography/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=(0,a.default)("div",{target:"eedi62r0",label:"CardHeaderWrapper"})("padding:.75rem 1.25rem;margin-bottom:0;border-bottom:1px solid ",i.default.muted.default,";&:first-of-type{border-radius:calc(",o.default.borderRadius.rem,"rem - 1px) calc(",o.default.borderRadius.rem,"rem - 1px) 0 0;}");t.CardHeaderWrapper=c;var u=function(e){var t=e.children,n=d(e,["children"]);return r.default.createElement(c,n,r.default.createElement(l.default,{noMargin:!0,noPadding:!0,type:"h3"},t))};t.default=u},"./packages/unity-web/lib/components/Card/CardImage.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),r=o(n("./packages/unity-core/lib/borders.js"));function o(e){return e&&e.__esModule?e:{default:e}}var i=(0,a.default)("img",{target:"e1d18klp0",label:"CardImage"})("display:block;margin:0 auto;max-width:100%;border-top-left-radius:calc(",r.default.borderRadius.rem,"rem - 1px);border-top-right-radius:calc(",r.default.borderRadius.rem,"rem - 1px);");t.default=i},"./packages/unity-web/lib/components/Card/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"CardActions",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"CardBody",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"CardFooter",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"CardHeader",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"CardImage",{enumerable:!0,get:function(){return s.default}});var a=d(n("./packages/unity-web/lib/components/Card/Card.js")),r=d(n("./packages/unity-web/lib/components/Card/CardActions.js")),o=d(n("./packages/unity-web/lib/components/Card/CardBody.js")),i=d(n("./packages/unity-web/lib/components/Card/CardFooter.js")),l=d(n("./packages/unity-web/lib/components/Card/CardHeader.js")),s=d(n("./packages/unity-web/lib/components/Card/CardImage.js"));function d(e){return e&&e.__esModule?e:{default:e}}},"./packages/unity-web/lib/forms/LabelledTextarea/LabelledTextarea.js":function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),i=n("./node_modules/prop-types/index.js"),l=d(n("./packages/unity-web/lib/forms/Textarea/index.js")),s=d(n("./packages/unity-web/lib/forms/Label/index.js"));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=(0,r.default)("div",{target:"e1qloykc0",label:"ControlledTextarea"})({name:"8atqhb",styles:"width:100%;"}),v=0,j=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=f(t).call(this,e),n=!r||"object"!==c(r)&&"function"!==typeof r?b(a):r,g(b(n),"calcSize",function(){var e=n.props.maxLines;if(n.textarea){var t=n.textarea.scrollHeight+20,a=20*e+20;e&&t>a?n.setState({height:a}):n.setState({height:n.textarea.scrollHeight+20})}}),g(b(n),"animationFrameCb",function(){n.calcSize(),n.stop||window.requestAnimationFrame(n.animationFrameCb)}),g(b(n),"onMouseDown",function(){n.stop=!1,window.requestAnimationFrame(n.animationFrameCb),window.addEventListener("mouseup",n._onMouseUp)}),g(b(n),"onMouseUp",function(){n.stop=!0,window.removeEventListener("mouseup",n._onMouseUp)}),n.textareaId="textarea-".concat(String(v)),v++,n.state={height:0},n._onMouseUp=n.onMouseUp.bind(b(n)),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.calcSize()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.calcSize()}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,a=t.value,r=t.defaultValue,i=m(t,["label","value","defaultValue"]),d=this.state.height,c={};return(r||a)&&(c["data-not-empty"]=!0),o.default.createElement(h,null,o.default.createElement(l.default,u({},i,{id:this.textareaId,targetRef:function(t){return e.textarea=t},defaultValue:r,value:a},c,{onMouseDown:this.onMouseDown,label:n,height:"".concat(d,"px")}),o.default.createElement(s.default,{htmlFor:this.textareaId},n)))}}])&&p(n.prototype,a),r&&p(n,r),t}();t.default=j,g(j,"propTypes",{defaultValue:i.string,label:i.string.isRequired,maxLines:i.number,value:i.string}),g(j,"defaultProps",{maxLines:5,type:"text"})},"./packages/unity-web/lib/forms/LabelledTextarea/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var a,r=(a=n("./packages/unity-web/lib/forms/LabelledTextarea/LabelledTextarea.js"))&&a.__esModule?a:{default:a}},"./packages/unity-web/lib/forms/Textarea/Textarea.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./node_modules/react/index.js")),r=o(n("./packages/unity-web/lib/forms/Input/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return a.default.createElement(r.default,i({},t,{inputType:"textarea",as:"textarea"}))};t.default=l},"./packages/unity-web/lib/forms/Textarea/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var a,r=(a=n("./packages/unity-web/lib/forms/Textarea/Textarea.js"))&&a.__esModule?a:{default:a}}}]);
//# sourceMappingURL=packages-unity-forms-src-form-from-schema-form-from-schema.7a516cfdc9b212c6146f.js.map