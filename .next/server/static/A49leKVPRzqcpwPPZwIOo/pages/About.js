module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}},i=!0;try{e[r].call(o.exports,o,o.exports,n),i=!1}finally{i&&delete t[r]}return o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({"/+P4":function(e,t,n){var r=n("Bhuq"),o=n("TRZx");function i(t){return e.exports=i=o?r:function(e){return e.__proto__||r(e)},i(t)}e.exports=i},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"1iQl":function(e,t,n){var r=n("2Eek"),o=n("FbiP");e.exports=function(e,t){return t||(t=e.slice(0)),o(r(e,{raw:{value:o(t)}}))}},"2BOZ":function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("MX0m")),i=r(n("/HRN")),a=r(n("ZDA2")),u=r(n("/+P4")),s=r(n("K47E")),l=r(n("N9n2")),c=r(n("xHqa")),f=r(n("1iQl")),d=r(n("U7sd")),p=r(n("cDcd")),h=r(n("Dtiu")),m=r(n("NTes"));function y(){var e=(0,f.default)([""]);return y=function(){return e},e}var v=h.default.div(y()),b={title:"Next Weather",description:"The next city weather",image:"/assets/logos/weather-climate-logo.png",keywords:"city weather",url:"",type:"blog"},g=function(e){function t(){var e,n;(0,i.default)(this,t);for(var r=arguments.length,l=new Array(r),f=0;f<r;f++)l[f]=arguments[f];return n=(0,a.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(l))),(0,c.default)((0,s.default)(n),"render",function(){var e=n.props,t=e.children,r=e.metadata,i=void 0===r?b:r,a=e.scripts,u=void 0===a?[]:a;return p.default.createElement(p.default.Fragment,null,p.default.createElement(d.default,null,p.default.createElement("meta",{charSet:"utf-8"}),p.default.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),p.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),p.default.createElement("link",{rel:"icon",href:"/assets/favicon/favicon.ico",type:"image/x-icon"}),p.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.5/css/weather-icons.min.css"}),p.default.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.0.13/css/all.css",integrity:"sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",crossorigin:"anonymous"}),p.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap",rel:"stylesheet"}),p.default.createElement("link",{rel:"icon",type:"image/png",href:"/assets/icons/logo_16x16.png"}),p.default.createElement("meta",{name:"msapplication-TileColor",content:"#ffffff"}),p.default.createElement("meta",{name:"msapplication-TileImage",content:"/assets/icons/logo_16x16.png"}),p.default.createElement("meta",{name:"theme-color",content:"#ffffff"}),p.default.createElement("title",null,i.title),p.default.createElement("meta",{name:"description",content:i.description}),p.default.createElement("meta",{name:"keywords",content:i.keywords}),p.default.createElement("meta",{property:"og:title",content:i.title}),p.default.createElement("meta",{property:"og:type",content:i.type}),p.default.createElement("meta",{property:"og:url",content:i.url}),p.default.createElement("meta",{property:"og:image",content:i.image}),p.default.createElement("meta",{property:"og:description",content:i.description}),p.default.createElement("meta",{name:"twitter:card",content:"summary"}),p.default.createElement("meta",{name:"twitter:site",content:"@nextweather"}),p.default.createElement("meta",{name:"twitter:title",content:i.title}),p.default.createElement("meta",{name:"twitter:description",content:i.description}),p.default.createElement("meta",{name:"twitter:image",content:i.image}),u.length>0?u.map(function(e,t){return p.default.createElement("script",{src:e.src,key:t})}):null,p.default.createElement(o.default,{id:m.default.__hash},m.default)),p.default.createElement(v,null,t))}),n}return(0,l.default)(t,e),t}(p.default.Component);t.default=g},"2Eek":function(e,t,n){e.exports=n("ltjX")},"2ZX5":function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("cDcd")),i=r(n("1iQl")),a=n("KKbo"),u=r(n("Dtiu")),s=n("9Pu4"),l=r(n("3aX9"));function c(){var e=(0,i.default)([""]);return c=function(){return e},e}var f=u.default.div(c()),d=(0,s.makeStyles)(function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"white"}}});t.default=function(e){d();return o.default.createElement("div",null,o.default.createElement(a.Grid,{container:!0,justify:"center",alignItems:"center"},o.default.createElement(a.Grid,{item:!0,xs:12,md:8},o.default.createElement(f,null,o.default.createElement(l.default,null),e.children))))}},3:function(e,t,n){e.exports=n("Isl+")},"3aX9":function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("/HRN")),i=r(n("WaGi")),a=r(n("ZDA2")),u=r(n("/+P4")),s=r(n("N9n2")),l=r(n("1iQl")),c=r(n("cDcd")),f=r(n("Dtiu")),d=r(n("Ya08"));function p(){var e=(0,l.default)([""]);return p=function(){return e},e}var h=f.default.header(p()),m=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return c.default.createElement(h,null,c.default.createElement(d.default,null))}}]),t}(c.default.Component);t.default=m},"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=c.cssRules();return c.flush(),e},t.default=void 0;var r,o=n("cDcd");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,s(t).call(this,e))).prevProps={},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.Component),n=t,i=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return c.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){c.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&c.remove(this.prevProps),c.add(this.props),this.prevProps=this.props),null}}])&&a(n.prototype,r),i&&a(n,i),t}();t.default=f},"5Uuq":function(e,t,n){var r=n("Jo+v"),o=n("hfKm");e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=o&&r?r(e,n):{};i.get||i.set?o(t,n,i):t[n]=e[n]}return t.default=e,t}},"8cHP":function(e,t,n){"use strict";var r=n("90Kz"),o=e.exports=r();o.add("index","/","Index"),o.add("about","/about","About")},"90Kz":function(e,t){e.exports=require("next-routes")},"9Pu4":function(e,t){e.exports=require("@material-ui/core/styles")},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bhuq:function(e,t,n){e.exports=n("/+oN")},Dtiu:function(e,t){e.exports=require("styled-components")},FbiP:function(e,t,n){e.exports=n("Gf4D")},Gf4D:function(e,t){e.exports=require("core-js/library/fn/object/freeze")},"Isl+":function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("/HRN")),i=r(n("WaGi")),a=r(n("ZDA2")),u=r(n("/+P4")),s=r(n("N9n2")),l=r(n("cDcd")),c=r(n("UVoM")),f=r(n("Xsy/")),d=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return l.default.createElement(f.default,null,l.default.createElement(c.default,{variant:"h2",component:"h1",gutterBottom:!0},"Next Weather"),l.default.createElement(c.default,{variant:"h5",component:"h2",gutterBottom:!0},"Pin a footer to the bottom of the viewport.","The footer will move as the main element of the page grows."),l.default.createElement(c.default,{variant:"body1"},"Built with love."))}}]),t}(l.default.Component);t.default=d},"Jo+v":function(e,t,n){e.exports=n("Z6Kq")},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},KKbo:function(e,t){e.exports=require("@material-ui/core")},MX0m:function(e,t,n){e.exports=n("3niX")},N9n2:function(e,t,n){var r=n("SqZg"),o=n("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=r(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},NTes:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=["{/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */}","html{line-height:1.15;-webkit-text-size-adjust:100%;}","body{margin:0;}","h1{font-size:2em;margin:0.67em 0;}","hr{box-sizing:content-box;height:0;overflow:visible;}","pre{font-family:monospace,monospace;font-size:1em;}","a{background-color:transparent;}","abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}","b,strong{font-weight:bolder;}","code,kbd,samp{font-family:monospace,monospace;font-size:1em;}","small{font-size:80%;}","sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}","sub{bottom:-0.25em;}","sup{top:-0.5em;}","img{border-style:none;}","button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}","button,input{overflow:visible;}","button,select{text-transform:none;}",'button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}','button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}','button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}',"fieldset{padding:0.35em 0.75em 0.625em;}","legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}","progress{vertical-align:baseline;}","textarea{overflow:auto;}",'[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}','[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}','[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}','[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}',"::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}","details{display:block;}","summary{display:list-item;}","template{display:none;}","[hidden]{display:none;}","button{font-family:inherit;font-size:inherit;}","img,video,canvas{display:block;}",":focus,:active{outline:none;}",".app-bar-logo{width:35px;height:35px;}",'body{font-family:"Raleway",sans-serif;color:#2d3436;text-align:center;width:100%;}',".main-icon,.big-data h2{font-size:6em;border-radius:50%;padding:20px;margin:20px 0 20px 0;display:inline-block;border-top:20px;}",".big-data h2{border-left:1px solid #2d3436;border-radius:0;}",".big-data h2,.main-city,.main-description{font-weight:400;}",".main-content{display:contents;}",".main-description{font-size:2.5em;}",".main-city{font-size:2em;}",".boiling{background:#ff7675;}",".hot{background:#fab1a0;}",".warm{background:#fce498;}",".perfect{background:#6ac3a4;}",".cool{background:#67c6bb;}",".freezing{background:#80bcf8;}",".boiling-forecast{background:#d63031;}",".hot-forecast{background:#e17055;}",".warm-forecast{background:#fdcb6e;}",".perfect-forecast{background:#15a57a;}",".cool-forecast{background:#22a39c;}",".freezing-forecast{background:#278fdf;}",".horiz-menu{height:150px;margin:0 auto;margin-bottom:20px;}",".forecast-cell{height:150px;display:block !important;padding:4 10px !important;text-align:center !important;}",".forecast-area{width:100%;}",".forecast-cell>i{font-size:3em;padding:15px 0;}",".forecast-cell>p{font-size:0.7em;margin:0;}",".temp-text{font-size:1.5em;}",".forecast-cell h5{display:block;margin:0;}",".app-bar-logo{width:70px;height:70px;margin-left:-5px;}",'.menu{padding:0 !important;font-family:"Raleway",sans-serif !important;font-weight:400;}',".location-button{min-width:25% !important;}",".cell-data{text-align:right !important;}",'.weather-details{font-family:"Raleway",sans-serif !important;}',".weather-details>tbody>tr>td{color:#2d3436 !important;font-size:1.2em;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;}",".whole-details-area{padding:20px 2% 80px;font-weight:400;}",".whole-details-area h4{font-size:2em;margin:10px auto;}","button.add-button{position:absolute;right:0px;}","svg.MuiSvgIcon-root-103{color:black;}"];r.__hash="4262246542";var o=r;t.default=o},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,a=void 0!==i&&i,u=t.isBrowser,s=void 0===u?"undefined"!=typeof window:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"==typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=s,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,i;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var o=String(n),i=t+o;return e[i]||(e[i]="jsx-".concat((0,r.default)("".concat(t,"-").concat(o)))),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&a(t.prototype,n),i&&a(t,i),e}();t.default=u},SqZg:function(e,t,n){e.exports=n("o5io")},TRZx:function(e,t,n){e.exports=n("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},U7sd:function(e,t){e.exports=require("next-server/head")},UQSI:function(e,t){e.exports=require("@material-ui/icons/MoreVert")},UVoM:function(e,t){e.exports=require("@material-ui/core/Typography")},"W/Kq":function(e,t){e.exports=require("@material-ui/icons/Add")},WaGi:function(e,t,n){var r=n("hfKm");function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(e,o.key,o)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(e,t,n){e.exports=n("gHn/")},"Xsy/":function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("cDcd")),i=r(n("2BOZ")),a=r(n("2ZX5"));t.default=function(e){return o.default.createElement(i.default,null,o.default.createElement(a.default,null,e.children))}},Ya08:function(e,t,n){"use strict";var r=n("5Uuq"),o=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("/HRN")),a=o(n("WaGi")),u=o(n("ZDA2")),s=o(n("/+P4")),l=o(n("K47E")),c=o(n("N9n2")),f=o(n("xHqa")),d=r(n("cDcd")),p=o(n("UQSI")),h=(o(n("W/Kq")),n("KKbo")),m=n("8cHP"),y=function(e){function t(){var e,n;(0,i.default)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=(0,u.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(o))),(0,f.default)((0,l.default)(n),"state",{anchorEl:null,user:null}),(0,f.default)((0,l.default)(n),"handleOpen",function(e){n.setState({anchorEl:e.currentTarget})}),(0,f.default)((0,l.default)(n),"handleClose",function(){n.setState({anchorEl:null})}),n}return(0,c.default)(t,e),(0,a.default)(t,[{key:"setUser",value:function(e){this.setState({user:e})}},{key:"render",value:function(){var e=this.state.anchorEl;return d.default.createElement("div",null,d.default.createElement(h.Toolbar,{className:"menu"},d.default.createElement(h.IconButton,{"aria-owns":e?"simple-menu":null,onClick:this.handleOpen,"aria-label":"More","aria-haspopup":"true",color:"inherit"},d.default.createElement(p.default,null)),d.default.createElement(h.Menu,{id:"simple-menu",anchorEl:e,open:Boolean(e),onClose:this.handleClose,PaperProps:{style:{maxHeight:202.5,width:200}}},d.default.createElement(h.MenuItem,null,d.default.createElement(m.Link,{route:"/"},d.default.createElement("a",null,"Home"))),d.default.createElement(h.MenuItem,null,d.default.createElement(m.Link,{route:"/about"},d.default.createElement("a",null,"About"))),d.default.createElement(h.MenuItem,null,d.default.createElement(m.Link,{route:"#"},d.default.createElement("a",null,"Profile"))))))}}]),t}(d.Component);t.default=y},Z6Kq:function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-descriptor")},Z7t5:function(e,t,n){e.exports=n("vqFK")},ZDA2:function(e,t,n){var r=n("iZP3"),o=n("K47E");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},bVZc:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=process.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,s=void 0===a?o:a,l=t.isBrowser,c=void 0===l?"undefined"!=typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(i(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#".concat(r,"-deleted-rule____{}"),u("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,n,a;return t=e,(n=[{key:"setOptimizeForSpeed",value:function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(u(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){o||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];u(r,"old rule at index `".concat(e,"` not found")),r.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&u(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,n),a&&r(t,a),e}();function u(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=a},cDcd:function(e,t){e.exports=require("react")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,n){e.exports=n("TUA0")},iZP3:function(e,t,n){var r=n("XVgq"),o=n("Z7t5");function i(e){return(i="function"==typeof o&&"symbol"==typeof r?function(e){return typeof e}:function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function a(t){return"function"==typeof o&&"symbol"===i(r)?e.exports=a=function(e){return i(e)}:e.exports=a=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":i(e)},a(t)}e.exports=a},ltjX:function(e,t){e.exports=require("core-js/library/fn/object/define-properties")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},vjea:function(e,t,n){var r=n("TRZx");function o(t,n){return e.exports=o=r||function(e,t){return e.__proto__=t,e},o(t,n)}e.exports=o},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")},xHqa:function(e,t,n){var r=n("hfKm");e.exports=function(e,t,n){return t in e?r(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}});