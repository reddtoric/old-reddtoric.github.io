(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(40)},32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(17),o=n.n(l),r=n(18),s=n(19),i=n(24),u=n(20),m=n(23),h=n(6),v=n(9),p=n(5),d=n(10),b=n.n(d),N=n(11);n(32);function E(e){var t=e.showNav,n=e.handleClick;return c.a.createElement("button",{className:"nav-toggle",onClick:n},t?c.a.createElement(b.a,{className:"close-icon",path:N.c}):c.a.createElement(b.a,{className:"menu-icon",path:N.j}))}var f=function(e){var t=e.showNav,n=e.pages,a=e.handleClick;return c.a.createElement("nav",{className:t?"nav-show":""},c.a.createElement("div",{className:"nav-aligner"},n.map(function(e){return e.showInNav?c.a.createElement(v.c,{key:e.id,exact:!0,className:"nav-link",to:e.path,activeClassName:"active",onClick:a},c.a.createElement("span",null,e.name)):null})))},w=(n(39),Object(a.lazy)(function(){return n.e(3).then(n.bind(null,50))})),j=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,49))}),g=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,46))}),k=Object(a.lazy)(function(){return n.e(6).then(n.bind(null,47))}),O=[{id:0,showInNav:!0,path:"/",name:"About",component:w},{id:1,showInNav:!0,path:"/projects",name:"Projects",component:j},{id:2,path:"/blog",name:"Blog",component:Object(a.lazy)(function(){return n.e(7).then(n.bind(null,48))})},{id:3,path:"/projects/disorientis",name:"Disorentis",component:g}],y=[{id:1,from:"/projects",to:"#/projects"}],C=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={showNav:!1},n.toggleNav=n.toggleNav.bind(Object(h.a)(Object(h.a)(n))),n.closeNav=n.closeNav.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggleNav",value:function(){this.setState(function(e){return{showNav:!e.showNav}})}},{key:"closeNav",value:function(){this.setState({showNav:!1}),document.activeElement.blur()}},{key:"render",value:function(){return c.a.createElement(v.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("span",{className:"site-title"},"Ed Devs")),c.a.createElement(E,{showNav:this.state.showNav,handleClick:this.toggleNav}),c.a.createElement(f,{showNav:this.state.showNav,pages:O,handleClick:this.closeNav}),c.a.createElement(a.Suspense,{fallback:c.a.createElement("main",null,"Loading...")},c.a.createElement(p.d,null,y.map(function(e){return c.a.createElement(p.a,{key:e.id,exact:!0,from:e.from,to:e.to})}),O.map(function(e){return c.a.createElement(p.b,{key:e.id,exact:!0,path:"".concat("").concat(e.path),component:e.component})}),c.a.createElement(p.b,{component:k}))),c.a.createElement("footer",null,c.a.createElement("span",null,"\xa9 2017-",(new Date).getFullYear()," ","Ed Devs"))))}}]),t}(a.Component);o.a.render(c.a.createElement(C,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f72f7643.chunk.js.map