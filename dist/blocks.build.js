!function(e){function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var r=n(2),l=(n.n(r),n(3)),__=(n.n(l),wp.i18n.__);(0,wp.blocks.registerBlockType)("cgb/block-pageflow-embeds",{title:__("Pageflow-Embed"),icon:"format-video",category:"common",attributes:{width:{type:"string"},height:{type:"string"},url:{type:"string"}},keywords:[__("pageflow-embeds"),__("pageflow"),__("embed"),__("iframe")],edit:function(e){function t(t){e.setAttributes({width:t.target.value})}function n(t){e.setAttributes({height:t.target.value})}function r(t){e.setAttributes({url:t.target.value})}return wp.element.createElement("div",{className:"pageflow-block-editor-container",id:"pageflow-block-editor"},wp.element.createElement("img",{src:js_data.pgf_image}),wp.element.createElement("div",{className:"pgf-align-center"},wp.element.createElement("label",{className:"pgf-block-label"},"Width"),wp.element.createElement("input",{type:"string",placeholder:"px, rem, vw or %...",value:e.attributes.width,onChange:t}),wp.element.createElement("label",{className:"pgf-block-label"},"Height"),wp.element.createElement("input",{type:"string",placeholder:"px, rem, vh or %...",value:e.attributes.height,onChange:n})),wp.element.createElement("div",{className:"pgf-align-center pgf-story-section"},wp.element.createElement("label",{className:"pgf-block-label"},"Story URL"),wp.element.createElement("input",{className:"pgf-text-input",type:"text",placeholder:"Enter story Url here...",value:e.attributes.url,onChange:r})))},save:function(){return null}})},function(e,t){},function(e,t){}]);