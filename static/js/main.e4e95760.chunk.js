(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(37)},32:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(17),o=n.n(l),s=n(18),r=n(19),i=n(24),u=n(20),m=n(23),h=n(7),v=n(9),p=n(5),d=n(10),N=n.n(d),b=n(11);n(32);function E(e){var t=e.showNav,n=e.handleClick;return c.a.createElement("button",{className:"nav-toggle",onClick:n},t?c.a.createElement(N.a,{className:"close-icon",path:b.c}):c.a.createElement(N.a,{className:"menu-icon",path:b.j}))}var w=function(e){var t=e.showNav,n=e.pages,a=e.handleClick;return c.a.createElement("nav",{className:t?"nav-show":""},c.a.createElement("div",{className:"nav-aligner"},n.map(function(e){return e.showInNav?c.a.createElement(v.c,{key:e.id,exact:!0,className:"nav-link",to:e.path,activeClassName:"active",onClick:a},c.a.createElement("span",null,e.name)):null})))},f=(n(36),Object(a.lazy)(function(){return n.e(3).then(n.bind(null,47))})),g=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,46))}),j=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,43))}),k=Object(a.lazy)(function(){return n.e(6).then(n.bind(null,44))}),O=Object(a.lazy)(function(){return n.e(7).then(n.bind(null,45))}),y=[{id:0,showInNav:!0,path:"/",name:"About",component:f},{id:1,showInNav:!0,path:"/projects",name:"Projects",component:g},{id:2,path:"/blog",name:"Blog",component:O},{id:3,path:"/projects/disorientis",name:"Disorentis",component:j},{id:4,showInNav:!0,path:"/resume/",name:"Resume",component:O}],C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={showNav:!1},n.toggleNav=n.toggleNav.bind(Object(h.a)(Object(h.a)(n))),n.closeNav=n.closeNav.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"toggleNav",value:function(){this.setState(function(e){return{showNav:!e.showNav}})}},{key:"closeNav",value:function(){this.setState({showNav:!1}),document.activeElement.blur()}},{key:"render",value:function(){return c.a.createElement(v.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("span",{className:"site-title"},"Ed Devs")),c.a.createElement(E,{showNav:this.state.showNav,handleClick:this.toggleNav}),c.a.createElement(w,{showNav:this.state.showNav,pages:y,handleClick:this.closeNav}),c.a.createElement(a.Suspense,{fallback:c.a.createElement("main",null,"Loading...")},c.a.createElement(p.c,null,y.map(function(e){return c.a.createElement(p.a,{key:e.id,exact:!0,path:"".concat("").concat(e.path),component:e.component})}),c.a.createElement(p.a,{component:k}))),c.a.createElement("footer",null,c.a.createElement("span",null,"\xa9 2017-",(new Date).getFullYear()," ","Ed Devs"))))}}]),t}(a.Component);o.a.render(c.a.createElement(C,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e4e95760.chunk.js.map