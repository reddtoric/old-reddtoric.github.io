(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(40)},32:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(17),o=n.n(c),s=n(18),r=n(19),i=n(24),u=n(20),m=n(23),h=n(6),v=n(9),p=n(5),d=n(10),N=n.n(d),b=n(11);n(32);function E(e){var t=e.showNav,n=e.handleClick;return l.a.createElement("button",{className:"nav-toggle",onClick:n},t?l.a.createElement(N.a,{className:"close-icon",path:b.c}):l.a.createElement(N.a,{className:"menu-icon",path:b.j}))}var f=function(e){var t=e.showNav,n=e.pages,a=e.handleClick;return l.a.createElement("nav",{className:t?"nav-show":""},l.a.createElement("div",{className:"nav-aligner"},n.map(function(e){return e.showInNav?l.a.createElement(v.c,{key:e.id,exact:!0,className:"nav-link",to:e.path,activeClassName:"active",onClick:a},l.a.createElement("span",null,e.name)):null})))},w=(n(39),Object(a.lazy)(function(){return n.e(4).then(n.bind(null,52))})),g=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,51))}),j=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,48))}),k=Object(a.lazy)(function(){return n.e(6).then(n.bind(null,49))}),O=[{id:0,showInNav:!0,path:"/",name:"About",component:w},{id:1,showInNav:!0,path:"/projects",name:"Projects",component:g},{id:2,path:"/blog",name:"Blog",component:Object(a.lazy)(function(){return n.e(7).then(n.bind(null,50))})},{id:3,path:"/projects/disorientis",name:"Disorentis",component:j}],y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={showNav:!1},n.toggleNav=n.toggleNav.bind(Object(h.a)(Object(h.a)(n))),n.closeNav=n.closeNav.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"toggleNav",value:function(){this.setState(function(e){return{showNav:!e.showNav}})}},{key:"closeNav",value:function(){this.setState({showNav:!1}),document.activeElement.blur()}},{key:"render",value:function(){return l.a.createElement(v.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("span",{className:"site-title"},"Ed Devs")),l.a.createElement(E,{showNav:this.state.showNav,handleClick:this.toggleNav}),l.a.createElement(f,{showNav:this.state.showNav,pages:O,handleClick:this.closeNav}),l.a.createElement(a.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(p.c,null,O.map(function(e){return l.a.createElement(p.a,{key:e.id,exact:!0,path:e.path,component:e.component})}),l.a.createElement(p.a,{component:k}))),l.a.createElement("footer",null,l.a.createElement("span",null,"\xa9 2017-",(new Date).getFullYear()," ","Ed Devs"))))}}]),t}(a.Component);o.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.704dc0d1.chunk.js.map