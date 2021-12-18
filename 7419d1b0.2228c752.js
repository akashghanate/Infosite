(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(103)),o={id:"tips",title:"Tips & Tricks",sidebar_label:"Tips & Tricks"},c={unversionedId:"java/tips",id:"java/tips",isDocsHomePage:!1,title:"Tips & Tricks",description:"- Check if the number (a) is even or odd",source:"@site/docs/java/tips.md",slug:"/java/tips",permalink:"/InfoSite/docs/java/tips",editUrl:"https://github.com/akashghanate/InfoSite/tree/master/docs/java/tips.md",version:"current",sidebar_label:"Tips & Tricks",sidebar:"docs",previous:{title:"regex",permalink:"/InfoSite/docs/java/regex"},next:{title:"docker",permalink:"/InfoSite/docs/docker/docker"}},p=[],l={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Check if the number (a) is even or odd"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("inlineCode",{parentName:"p"},'boolean = (a & 1) == 0 ? "Even" : "ODD" '))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fast multiplication number (n) by factor 2"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("inlineCode",{parentName:"p"},"n = n << 1"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fast division number (n) by factor 2"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("inlineCode",{parentName:"p"},"n = n >> 1"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Swapping of 2 numbers using XOR"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"    a ^ = b;\n    b ^ = a;\n    a ^ = b;\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Calculate number of digits in a integer"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"})," int n = (int)Math.floor(Math.log10(Number))+1;\n")))))}b.isMDXComponent=!0}}]);