(this["webpackJsonpfirst-react-website"]=this["webpackJsonpfirst-react-website"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},25:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(12),i=a.n(s),n=(a(16),a(15)),l=a(3),r=(a(25),a(0)),o=["btn--primary","btn--outline"],j=["btn--medium","btn--large"];var b=function(e){var t=e.children,a=e.type,c=e.onClick,s=e.buttonStyle,i=e.buttonSize;return o.includes(s)||o[0],j.includes(i)||j[0],Object(r.jsx)(l.b,{to:"/sign-up",className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(s," ").concat(i),onClick:c,type:a,children:t})})};a(32);var d=function(){var e=Object(c.useState)(!0),t=Object(n.a)(e,2),a=(t[0],t[1]),s=Object(c.useState)(!1),i=Object(n.a)(s,2),o=i[0],j=i[1],b=function(){j(!1)},d=function(){window.innerWidth<=960?a(!1):a(!0)};return Object(c.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsx)(l.b,{to:"/",className:"navbar-logo",onClick:b,children:Object(r.jsx)("img",{src:"../images/logo.png",height:"80px",width:"150px"})}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){j(!o)},children:Object(r.jsx)("i",{className:o?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:o?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/",className:"nav-links",onClick:function(e){b(),window.scrollTo({top:0,left:0,behavior:"smooth"})},children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/",className:"nav-links",onClick:function(e){b(),window.scrollTo({top:610,left:0,behavior:"smooth"})},children:"About Me"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/",className:"nav-links",onClick:function(e){b(),window.scrollTo({top:1200,left:0,behavior:"smooth"})},children:"Projects"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/",className:"nav-links",onClick:function(e){b(),window.scrollTo({top:2600,left:0,behavior:"smooth"})},children:"Skills"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{to:"/",className:"nav-links",onClick:function(e){b(),window.scrollTo({top:3600,left:0,behavior:"smooth"})},children:"Contact"})})]})]})})})},m=a(2),x=(a(33),a.p+"static/media/fb.fec3f252.jpg");var h=function(){return Object(r.jsxs)("div",{className:"about-me-container",children:[Object(r.jsx)("div",{className:"img-container",children:Object(r.jsx)("img",{src:x,className:"my-img"})}),Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("h1",{children:"About Me"}),"Front End Developer with working experience in ReactJS. Built and delivered quality code while working on various projects. Strong interpersonal skills proven through customer satisfaction and organizational recognition awards. Aspire to become an expert in the field of software development.",Object(r.jsx)("div",{className:"resume-btn",children:Object(r.jsx)(b,{buttonSize:"btn--large",buttonStyle:"btn--outline",children:"Download Resume"})})]})]})};a(18);var O=function(e){return Object(r.jsx)("div",{style:{marginTop:"20px"},children:Object(r.jsx)("li",{className:"cards__item",to:e.path,children:Object(r.jsxs)(l.b,{className:"cards__item__link",children:[Object(r.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(r.jsx)("img",{src:e.src,alt:"travel_image",className:"cards__item__img"})}),Object(r.jsx)("div",{className:"cards__item__info",children:Object(r.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})},u=a.p+"static/media/project-1.a0f58e29.png",f=a.p+"static/media/project-2.2d8be2a3.webp";a(19);var p=function(e){return Object(r.jsxs)("div",{className:"skill-container",children:[Object(r.jsx)("i",{className:e.clName,style:{fontSize:"48px",color:"#e0a80d",position:"relative",marginLeft:"80px",marginTop:"40px"}}),Object(r.jsx)("p",{children:e.skillName})]})};var v=function(){return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)("p",{className:"project-title",children:"Projects"}),Object(r.jsx)("div",{className:"cards__container",children:Object(r.jsx)("div",{className:"cards__wrapper",children:Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(O,{src:u,text:"Designed and developed the rain sensing smart helmet, was among top 50 projects at university",label:"Rain Sensing Smart Helmet",path:"/services"}),Object(r.jsx)(O,{src:f,text:"Study on how to machine non-conductive metals through electric discharge machining",label:"Electric Discharge Machining",path:"/services"})]})})})]})};a(34);var N=function(){return Object(r.jsxs)("div",{className:"footer-container",children:[Object(r.jsxs)("div",{className:"footer-container-2",children:[Object(r.jsx)("p",{className:"footer-header",children:"Get In Touch"}),Object(r.jsxs)("div",{className:"input-container",children:[Object(r.jsx)("input",{type:"text",className:"input-format",placeholder:"Name"}),Object(r.jsx)("input",{type:"email",className:"input-format",placeholder:"Email"})]}),Object(r.jsx)("div",{className:"input-container",children:Object(r.jsx)("input",{type:"text",className:"input-format-2",placeholder:"Subject"})}),Object(r.jsx)("div",{className:"input-container",children:Object(r.jsx)("input",{type:"text",className:"input-format-3",placeholder:"Message"})}),Object(r.jsx)("button",{className:"btn-style",children:"Send"})]}),Object(r.jsxs)("div",{className:"footer-container-3",children:[Object(r.jsx)("i",{className:"fa fa-map-marker-alt",style:{fontSize:"20px",color:"#e0a80d"}}),Object(r.jsxs)("p",{children:["Maharana Pratap Residency",Object(r.jsx)("br",{})," Kota 324002, Rajasthan"]}),Object(r.jsx)("i",{className:"fa fa-phone",style:{marginTop:"20px",fontSize:"20px",color:"#e0a80d"}}),Object(r.jsxs)("p",{children:["7381527345",Object(r.jsx)("br",{})," 8619093221"]}),Object(r.jsx)("i",{className:"fa fa-envelope",style:{marginTop:"20px",fontSize:"20px",color:"#e0a80d"}}),Object(r.jsxs)("p",{children:["mahendra55555555@gmail.com",Object(r.jsx)("br",{})," mahenderkumar1998jan@gmail.com"]})]}),Object(r.jsx)("section",{className:"social-media",children:Object(r.jsxs)("div",{className:"social-media-wrap",children:[Object(r.jsx)("small",{className:"website-rights",children:"all rights reserved \xa9 2021"}),Object(r.jsxs)("div",{className:"social-icons",children:[Object(r.jsx)(l.b,{className:"social-icon-link facebook",to:"/",targets:"_blank","aria-label":"facebook",children:Object(r.jsx)("i",{className:"fab fa-facebook-f"})}),Object(r.jsx)(l.b,{className:"social-icon-link instagram",to:"/",targets:"_blank","aria-label":"instagram",children:Object(r.jsx)("i",{className:"fab fa-instagram"})}),Object(r.jsx)(l.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(r.jsx)("i",{class:"fab fa-youtube"})}),Object(r.jsx)(l.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(r.jsx)("i",{class:"fab fa-twitter"})}),Object(r.jsx)(l.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(r.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})};a(35),a(36);var g=function(){return Object(r.jsxs)("div",{className:"hero-container",children:[Object(r.jsxs)("h1",{children:[Object(r.jsx)("span",{style:{fontSize:"50px"},class:"typer",id:"main","data-colors":"white,orange","data-words":"Mahender Kumar,Web Developer","data-delay":"100","data-deleteDelay":"10"}),Object(r.jsx)("span",{style:{fontSize:"0.1px"},class:"cursor","data-owner":"main"})]}),Object(r.jsx)("div",{className:"hero-btns",children:Object(r.jsx)(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"Download Resume"})})]})};function k(){return Object(r.jsxs)("div",{className:"skillbox-container",children:[Object(r.jsx)("h1",{children:"Skills"}),Object(r.jsx)(p,{clName:"fab fa-react",skillName:"ReactJS"}),Object(r.jsx)(p,{clName:"fab fa-java",skillName:"Java"}),Object(r.jsx)(p,{clName:"fab fa-js",skillName:"JavaScript"}),Object(r.jsx)(p,{clName:"fab fa-html5",skillName:"HTML5"}),Object(r.jsx)(p,{clName:"fab fa-css3-alt",skillName:"CSS3"}),Object(r.jsx)(p,{clName:"fab fa-git-alt",skillName:"git"})]})}var w=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{}),Object(r.jsx)(h,{}),Object(r.jsx)(v,{}),Object(r.jsx)(k,{}),Object(r.jsx)(N,{})]})};var _=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(d,{}),Object(r.jsx)(m.c,{children:Object(r.jsx)(m.a,{path:"/",exact:!0,component:w})})]})})};i.a.render(Object(r.jsx)(_,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2b719125.chunk.js.map