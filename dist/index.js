var e=require("stylelint"),r=require("shortcss"),n=require("shortcss/lib/list"),t=require("css-values"),o=require("path");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(e),u=i(r),s=i(n),l=i(t),c=i(o);function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,t)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach(function(r){f(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var g="scale-unlimited/declaration-strict-value",v=function(e,r){return"object"==typeof e&&Object.hasOwnProperty.call(e,r)},b={ignoreVariables:!0,ignoreFunctions:!0,ignoreKeywords:null,ignoreValues:null,expandShorthand:!1,recurseLonghand:!1,severity:"error",message:void 0,disableFix:!1,autoFixFunc:null};function h(e){var r=typeof e;return"string"===r||"number"===r}function x(e){return h(e)||Array.isArray(e)&&e.every(function(e){return h(e)})}function m(e){return!("object"!=typeof e||!e)&&Object.keys(e).every(function(r){return x(e[r])})}function O(e){return!("object"!=typeof e||!e)&&Object.keys(e).every(function(r){return"boolean"==typeof e[r]})}function j(e){if("object"!=typeof e)return!1;var r=Object.keys(b);return!(!Object.keys(e).every(function(e){return r.indexOf(e)>-1})||"ignoreVariables"in e&&"boolean"!=typeof e.ignoreVariables&&!O(e.ignoreVariables)&&null!==e.ignoreVariables||"ignoreFunctions"in e&&"boolean"!=typeof e.ignoreFunctions&&!O(e.ignoreFunctions)&&null!==e.ignoreFunctions||"severity"in e&&"string"!=typeof e.severity&&null!==e.severity||"ignoreKeywords"in e&&!x(e.ignoreKeywords)&&!m(e.ignoreKeywords)||"ignoreValues"in e&&!x(e.ignoreValues)&&!m(e.ignoreValues)||"expandShorthand"in e&&"boolean"!=typeof e.expandShorthand&&null!==e.expandShorthand||"recurseLonghand"in e&&"boolean"!=typeof e.recurseLonghand&&null!==e.recurseLonghand||"message"in e&&"string"!=typeof e.message&&null!==e.message||"disableFix"in e&&"boolean"!=typeof e.disableFix&&null!==e.disableFix||"autoFixFunc"in e&&"function"!=typeof e.autoFixFunc&&"string"!=typeof e.autoFixFunc&&null!==e.autoFixFunc)}function w(e,r){return"boolean"==typeof e?e:"object"==typeof e&&e&&{}.hasOwnProperty.call(e,r)?e[r]:!!e}function F(e,r){if(!e)return null;var n=e;return v(n,r)?n=n[r]:v(n,"")&&(n=n[""]),Array.isArray(n)?n:[n]}function A(e,r){if(!e)return null;var n=e;return v(n,r)?n=n[r]:v(n,"")&&(n=n[""]),Array.isArray(n)?n:[n]}var S=a.default.utils,V=S.ruleMessages(g,{expected:function(e,r,n,t){var o;if(void 0===t&&(t=""),Array.isArray(e)){var i=e.pop();o=e.length?e.join(", ")+" or "+i:i}else o=e;return"string"==typeof t&&t.length?t.replace("${types}",o).replace("${value}",r).replace("${property}",n):"Expected "+o+' for "'+r+'" of "'+n+'"'}}),$=/^(?:@|\$|--).+$/,E=/^-?(?:@.+|(?:(?:[a-zA-Z_-]|[^\x00-\x7F])+(?:[a-zA-Z0-9_-]|[^\x00-\x7F])*\.)?\$.+|var\(\s*--[\s\S]+\))$/,P=/^(?!var\(\s*--)[\s\S]+\([\s\S]*\)$/,k=/^\/(.*)\/([a-zA-Z]*)$/,q=/color/,K=function(e){return k.test(e)},R=function(e){var r,n=function(e){if(Array.isArray(e))return e}(r=function(e){return e.match(k).slice(1)}(e))||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done)&&(n.push(a.value),2!==n.length);t=!0);}catch(e){o=!0,i=e}finally{try{t||null==u.return||u.return()}finally{if(o)throw i}}return n}}(r)||function(e,r){if(e){if("string"==typeof e)return d(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,2):void 0}}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return new RegExp(n[0],n[1])},D=function(e){return K(""+e)?R(""+e):new RegExp("^"+e+"$")},L=function(e,r,n){return void 0===n&&(n={}),function(t,o){if(o&&o.stylelint&&o.stylelint.customMessages&&o.stylelint.customMessages[g]&&delete o.stylelint.customMessages[g],S.validateOptions(o,g,{actual:e,possible:x},{actual:r,possible:j,optional:!0})){Array.isArray(e)||(e=[e]);var i,a=y(y({},b),r),f=a.ignoreVariables,p=a.ignoreFunctions,d=a.ignoreKeywords,v=a.ignoreValues,h=a.message,m=a.disableFix,O=a.expandShorthand,k=a.recurseLonghand,L=function(e,r,n){if("function"==typeof e)return e;if("string"==typeof e){var t;try{t=require.resolve(e)}catch(r){t=require.resolve(c.default.join(process.cwd(),e))}return require(t)}return!r&&n&&console.warn('No `autoFix` function provided, consider using `disableFix` for "'+g+'"'),null}(a.autoFixFunc,m,n.fix),M=d?{}:null,z=v?{}:null;if(f){var I=[];t.walkAtRules("value",function(e){var r=e.params.split(":")[0].trim();I.push(r)}),i=new RegExp("^-?(:?"+I.join("|")+")$")}e.forEach(function(e){var r=e;function c(r,u,s,c){void 0===c&&(c=!1);var y=r.prop,b=s||r.value,x=!1,O=!1,j=!1,$=!1;if(f&&w(f,e)&&(x=E.test(b)||i.test(b)),p&&!x&&w(p,e)&&(O=P.test(b)),c&&(!f||f&&!x)&&(!p||p&&!O)&&!0!==function(e,r){return q.test(e)&&"transparent"===r||E.test(r)||P.test(r)||l.default(e,r)}(u,s))return!1;if(d&&(!x||!O)){var k=M[e];if(!k){var K=F(d,e);K&&(k=new RegExp("^"+K.join("$|^")+"$"),M[e]=k)}k&&(j=k.test(b))}if(v&&(!x||!O||!j)){var R=z[e];if(!R){var I=A(v,e);I&&(R=I.map(D),z[e]=R)}R&&($=R.filter(function(e){return e.test(b)}).length>0)}if(!(x||O||j||$)){var N=function(e,r){var n=e.ignoreFunctions,t=e.ignoreKeywords,o=e.ignoreValues,i=[];return e.ignoreVariables&&i.push("variable"),n&&i.push("function"),t&&F(t,r)&&i.push("keyword"),-1===i.indexOf("keyword")&&o&&A(o,r)&&i.push("keyword"),i}(a,e);if(n.fix&&!m&&L){var Z=L(r,{validVar:x,validFunc:O,validKeyword:j,validValue:$,longhandProp:u,longhandValue:s},t,a);Z&&(r.value=Z)}else S.report({ruleName:g,result:o,node:r,line:r.source.start.line,message:V.expected(N,b,y,h)});return!0}return!1}K(r)&&(r=R(r)),t.walkDecls(function(e){var n=e.value,t=e.prop;if(!$.test(t)){var o=O&&u.default.isShorthand(t);if(t===r||!o&&r instanceof RegExp&&r.test(t)){var i=s.default.space(n);if(i.length>1){var a=!1;i.forEach(function(r){a||(a=c(e,t,r))})}else c(e)}else if(o){var l=u.default.expand(t,n,k),f=!1;Object.keys(l).forEach(function(n){var t=l[n];!f&&(n===r||r instanceof RegExp&&r.test(n))&&(f=c(e,n,t,!0))})}}})})}}};L.primaryOptionArray=!0;var M=a.default.createPlugin(g,L);exports.default=M,exports.messages=V,exports.ruleName=g;
//# sourceMappingURL=index.js.map
