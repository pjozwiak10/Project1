(this["webpackJsonpdrag-race"]=this["webpackJsonpdrag-race"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/wheel.d176bd3a.svg"},34:function(e,t,a){e.exports=a.p+"static/media/racing.fbcd9296.svg"},39:function(e,t,a){e.exports=a(54)},44:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),c=a.n(s),l=(a(44),a(4)),o=function(e){var t=e.gear,a=e.gameOver,s=e.finish,c=e.playAgain,o=e.startDelay,i=e.counterBlock,d=e.setCounterBlock,m=Object(n.useState)(0),u=Object(l.a)(m,2),_=u[0],f=u[1],h=Object(n.useRef)(!1);return Object(n.useEffect)((function(){s&&!1===c&&clearInterval(h.current),a&&(clearInterval(h.current),f(0)),o&&"N"===t&&!i&&(setTimeout((function(){h.current=setInterval((function(){f((function(e){return e+.1}))}),100)}),250),d(!0)),c&&(f(0),setTimeout((function(){d(!1)}),3e3))}),[f,a,t,s,c,o,i,d]),r.a.createElement("div",{className:"counter-container"},r.a.createElement("p",{className:"counter-container__header"},"Timer"),r.a.createElement("div",{className:"counter-container__counter"},_.toFixed(1)))},i=a(34),d=a.n(i),m=a(24),u=a.n(m),_=function(e){var t=e.speedResult,a=e.checkFinish,s=e.gameOver,c=e.playAgain,o=Object(n.useState)(0),i=Object(l.a)(o,2),m=i[0],_=i[1],f=Object(n.useState)(!1),h=Object(l.a)(f,2),b=h[0],y=h[1],v=Object(n.useRef)(!1);return Object(n.useEffect)((function(){s&&(_(0),clearInterval(v.current));var e=function(){a(b)};m>window.innerWidth&&!1===c&&(y(!0),e(),setTimeout((function(){clearInterval(v.current)}),500)),c&&(_(0),y(!1),e());return t>0&&(v.current=setInterval((function(){_(m+t/40)}),8)),function(){clearInterval(v.current)}}),[m,t,a,b,s,c,_]),r.a.createElement("div",{className:"car",style:{transform:"translateX(".concat(m,"px)")}},r.a.createElement("img",{src:d.a,alt:"car",className:"car__image"}),r.a.createElement("img",{src:u.a,alt:"wheel",className:"car__wheel",style:{transform:"rotate(".concat(6*m,"deg)")}}),r.a.createElement("img",{src:u.a,alt:"wheel",className:"car__wheel car__wheel--front",style:{transform:"rotate(".concat(6*m,"deg)")}}))},f=a(23),h=a(55),b=function(e){var t=e.stopAnimation,a=e.startDelay,n=Object(f.b)({from:{opacity:0},to:[{opacity:t||a?0:1},{opacity:0,delay:2e3}]}),s=Object(f.b)({from:{opacity:0},to:[{opacity:t?0:1},{opacity:0,delay:0}],delay:2e3}),c=Object(f.b)({from:{opacity:0},to:[{opacity:t?0:1},{opacity:0,delay:2e3}],delay:3e3});return r.a.createElement("div",{className:"starting-lights"},r.a.createElement(h.a.div,{className:"starting-lights__light",style:n}),r.a.createElement(h.a.div,{className:"starting-lights__light",style:s}),r.a.createElement(h.a.div,{className:"starting-lights__light starting-lights__light--green",style:c}))},y=function(e){var t=e.finish,a=e.setPlayAgain,s=e.setStartDelay,c=e.setStopAnimation,o=Object(n.useRef)(),i=Object(f.b)((function(){return{x:-200,opacity:0,ref:o}})),d=Object(l.a)(i,2),m=d[0],u=m.x,_=m.opacity;(0,d[1])({x:t?0:-200,opacity:t?1:0});var b=Object(n.useRef)(),y=Object(f.b)((function(){return{y:-200,ref:b}})),v=Object(l.a)(y,2),p=v[0].y;(0,v[1])({y:t?0:-200});var g=Object(n.useRef)(),E=Object(f.b)((function(){return{display:"none",ref:g}})),N=Object(l.a)(E,2),O=N[0].display;(0,N[1])({display:t?"flex":"none"}),Object(f.a)(t?[g,o,b]:[o,b,g],[0,0,2]);return r.a.createElement(h.a.div,{className:"finish-game",style:{display:O}},r.a.createElement(h.a.p,{className:"finish-game__text",style:{opacity:_,transform:u.to((function(e){return"translateX(".concat(e,"%)")}))}},"You made it, you finished the race. Play again to beat your score."),r.a.createElement(h.a.button,{className:"finish-game__button",style:{transform:p.to((function(e){return"translateY(".concat(e,"%)")}))},onClick:function(){a(!0),setTimeout((function(){a(!1),s(!1),c(!1)}),50)}},"Play Again"))},v=function(e){var t=e.location.state.name,a=Object(n.useState)(-135),s=Object(l.a)(a,2),c=s[0],i=s[1],d=Object(n.useState)(0),m=Object(l.a)(d,2),u=m[0],f=m[1],h=Object(n.useState)(-135),v=Object(l.a)(h,2),p=v[0],g=v[1],E=Object(n.useState)(0),N=Object(l.a)(E,2),O=N[0],j=N[1],x=Object(n.useState)(0),w=Object(l.a)(x,2),k=w[0],S=w[1],A=Object(n.useState)(0),I=Object(l.a)(A,2),R=I[0],C=I[1],T=Object(n.useState)(0),D=Object(l.a)(T,2),F=D[0],P=D[1],B=Object(n.useState)(0),L=Object(l.a)(B,2),X=L[0],W=L[1],Y=Object(n.useState)("N"),G=Object(l.a)(Y,2),H=G[0],J=G[1],$=Object(n.useState)(0),q=Object(l.a)($,2),z=q[0],K=q[1],M=Object(n.useState)(!1),Q=Object(l.a)(M,2),U=Q[0],V=Q[1],Z=Object(n.useRef)(!1),ee=Object(n.useRef)(!1),te=Object(n.useState)(!1),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],se=Object(n.useState)(!1),ce=Object(l.a)(se,2),le=ce[0],oe=ce[1],ie=Object(n.useState)(!1),de=Object(l.a)(ie,2),me=de[0],ue=de[1],_e=Object(n.useState)(!1),fe=Object(l.a)(_e,2),he=fe[0],be=fe[1],ye=Object(n.useState)(!1),ve=Object(l.a)(ye,2),pe=ve[0],ge=ve[1];Object(n.useEffect)((function(){var e=function(e){me&&(U||O>7800||(r(e),"N"!==H&&"N"!==H&&(clearInterval(Z.current),32===e.keyCode&&"keydown"===e.type&&p<135&&c<135?(i(c+k),g(p+F),f(((135+c)/270*240).toFixed()),j(((135+p)/270*8e3).toFixed())):t())))},t=function(){U||(c>-135&&c<=136&&(i(c-R),f(((135+c)/270*240).toFixed())),p>-135&&p<=140&&(g(p-X),j(((135+p)/270*8e3).toFixed())),a())},a=function(){X>10&&(S(1),C(.2),P(4.8),W(.96))},n=function(){var e,t;1===H?(e=4.8,t=.2,S(u>5&&u<20?1.2:u>20&&u<35?1.4:u>35&&u<55?1.6:1),C(k*t),P(k*e),W(k*e*t)):2===H?((O<1250||u<10)&&(V(!0),J("N"),i(-135),g(-135),f(0),j(0)),e=(8e3-O)/8e3/((100-u)/240),t=.3,z<4e3?S(1):z>4e3&&z<5e3?S(1.2):z>5e3&&z<6e3?S(1.4):z>6e3&&z<7e3?S(1.8):z>7e3&&z<8e3&&S(2.4),C(k*t),P(k*e),W(k*e*t)):3===H?((O<1250||u<25)&&(V(!0),J("N"),i(-135),g(-135),f(0),j(0)),e=(8e3-O)/8e3/((140-u)/240),t=.4,z<4e3?S(.8):z>4e3&&z<5e3?S(1):z>5e3&&z<6e3?S(1.2):z>6e3&&z<7e3?S(1.6):z>7e3&&z<8e3&&S(2.2),C(k*t),P(k*e),W(k*e*t)):4===H?((O<1250||u<40)&&(V(!0),J("N"),i(-135),g(-135),f(0),j(0)),e=(8e3-O)/8e3/((180-u)/240),t=.4,z<4e3?S(.6):z>4e3&&z<5e3?S(.8):z>5e3&&z<6e3?S(1):z>6e3&&z<7e3?S(1.4):z>7e3&&z<8e3&&S(2),C(k*t),P(k*e),W(k*e*t)):5===H?((O<1250||u<55)&&(V(!0),J("N"),i(-135),g(-135),f(0),j(0)),e=(8e3-O)/8e3/((210-u)/240),t=.4,z<4e3?S(.2):z>4e3&&z<5e3?S(.4):z>5e3&&z<6e3?S(.6):z>6e3&&z<7e3?S(1):z>7e3&&z<8e3&&S(1.6),C(k*t),P(k*e),W(k*e*t)):6===H&&((O<1250||u<70)&&(V(!0),J("N"),i(-135),g(-135),f(0),j(0)),e=(8e3-O)/8e3/((240-u)/240),t=.4,z<4e3?S(.1):z>4e3&&z<5e3?S(.15):z>5e3&&z<6e3?S(.2):z>6e3&&z<7e3?S(.6):z>7e3&&z<8e3&&S(1.2),C(k*t),P(k*e),W(k*e*t)),(ne||"N"===H)&&(u<=2&&(f(0),i(-135)),O<100&&(j(0),g(-135)))},r=function(e){38===e.keyCode&&"keydown"===e.type?"N"!==H||0!==u&&"0"!==u?(H<6||"N"===H)&&"keydown"===e.type&&(1===H?O>1500?(W(40),K(O),J(2)):alert("you don't have enough speed to change gear"):2===H?O>1500?(W(40),K(O),J(3)):alert("you don't have enough speed to change gear"):3===H?O>1500?(W(40),K(O),J(4)):alert("you don't have enough speed to change gear"):4===H?O>1500?(W(40),K(O),J(5)):alert("you don't have enough speed to change gear"):5===H&&(O>1500?(W(40),K(O),J(6)):alert("you don't have enough speed to change gear"))):(J(1),S(1),C(.2),P(4.8),W(.96)):78===e.keyCode&&(W(2),J("N"))};return window.addEventListener("keydown",e),window.addEventListener("keydown",n),X<10&&u>0&&(ee.current=setInterval(n,16.67)),(u>0||O>20)&&(Z.current=setInterval(t,16.67)),function(){window.removeEventListener("keydown",e),window.removeEventListener("keydown",n),clearInterval(ee.current),clearInterval(Z.current)}})),Object(n.useEffect)((function(){me||setTimeout((function(){ue(!0),setTimeout((function(){be(!0)}),2e3)}),3e3)}),[me,he,u]);return r.a.createElement("div",{className:"game-container"},he?null:r.a.createElement(b,{stopAnimation:he,startDelay:me,gameOver:U}),r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"dashboard__nickname"},r.a.createElement("p",{className:"dashboard__nickname-text"},""===t?"unknown":t)),r.a.createElement("div",{className:"dashboard__speedometer"},r.a.createElement("div",{className:"dashboard__indicator",style:{transform:"rotate(".concat(c,"deg) translateX(-50%)")}}),r.a.createElement("div",{className:"dashboard__info"},"km/h"),r.a.createElement("div",{className:"dashboard__text",style:{top:"70%",left:"20%"}},"0"),r.a.createElement("div",{className:"dashboard__text",style:{top:"60%",left:"12%"}},"20"),r.a.createElement("div",{className:"dashboard__text",style:{top:"45%",left:"8%"}},"40"),r.a.createElement("div",{className:"dashboard__text",style:{top:"32%",left:"12%"}},"60"),r.a.createElement("div",{className:"dashboard__text",style:{top:"22%",left:"20%"}},"80"),r.a.createElement("div",{className:"dashboard__text",style:{top:"12%",left:"28%"}},"100"),r.a.createElement("div",{className:"dashboard__text",style:{top:"8%",left:"43%"}},"120"),r.a.createElement("div",{className:"dashboard__text",style:{top:"10%",left:"58%"}},"140"),r.a.createElement("div",{className:"dashboard__text",style:{top:"21%",left:"70%"}},"160"),r.a.createElement("div",{className:"dashboard__text",style:{top:"32%",left:"78%"}},"180"),r.a.createElement("div",{className:"dashboard__text",style:{top:"47%",left:"80%"}},"200"),r.a.createElement("div",{className:"dashboard__text",style:{top:"60%",left:"76%"}},"220"),r.a.createElement("div",{className:"dashboard__text",style:{top:"70%",left:"68%"}},"240"),r.a.createElement("div",{className:"dashboard__line",style:{top:"78%",left:"12%",transform:"rotate(-135deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"62%",left:"2%",transform:"rotate(-120deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"44%",left:"-2%",transform:"rotate(-100deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"26%",left:"1%",transform:"rotate(-80deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"9%",left:"12%",transform:"rotate(-52deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"-3%",left:"28%",transform:"rotate(-30deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"-8%",left:"48%",transform:"rotate(0deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"-4%",left:"70%",transform:"rotate(30deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"8%",left:"86%",transform:"rotate(48deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"26%",left:"98%",transform:"rotate(80deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"43%",left:"100%",transform:"rotate(90deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"60%",left:"97%",transform:"rotate(105deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"76%",left:"86%",transform:"rotate(135deg)"}})),r.a.createElement("div",{className:"dashboard__tachometer"},r.a.createElement("div",{className:"dashboard__indicator",style:{transform:"rotate(".concat(p,"deg) translateX(-50%)")}}),r.a.createElement("div",{className:"dashboard__info"},"x1000r/min"),r.a.createElement("div",{className:"dashboard__text dashboard__text--tach",style:{top:"68%",left:"20%"}},"0"),r.a.createElement("div",{className:"dashboard__text dashboard__text--tach",style:{top:"50%",left:"13%"}},"1"),r.a.createElement("div",{className:"dashboard__text dashboard__text--tach",style:{top:"30%",left:"16%"}},"2"),r.a.createElement("div",{className:"dashboard__text dashboard__text--tach",style:{top:"14%",left:"26%"}},"3"),r.a.createElement("div",{className:"dashboard__text dashboard__text--tach",style:{top:"8%",left:"46%"}},"4"),r.a.createElement("div",{className:"dashboard__text dashboard__text--tach",style:{top:"15%",left:"68%"}},"5"),r.a.createElement("div",{className:"dashboard__text dashboard__text--tach",style:{top:"33%",left:"80%"}},"6"),r.a.createElement("div",{className:"dashboard__text dashboard__text--tach",style:{top:"52%",left:"82%"}},"7"),r.a.createElement("div",{className:"dashboard__text dashboard__text--tach",style:{top:"70%",left:"71%"}},"8"),r.a.createElement("div",{className:"dashboard__line",style:{top:"76%",left:"12%",transform:"rotate(-135deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"50%",left:"4%",transform:"rotate(-105deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"25%",left:"4%",transform:"rotate(-80deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"2%",left:"19%",transform:"rotate(-45deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"-8%",left:"48%",transform:"rotate(0deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"4%",left:"80%",transform:"rotate(45deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"25%",left:"94%",transform:"rotate(65deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"51%",left:"96%",transform:"rotate(100deg)"}}),r.a.createElement("div",{className:"dashboard__line",style:{top:"77%",left:"84%",transform:"rotate(130deg)"}})),r.a.createElement("div",{className:"dashboard__speed-info-container"},r.a.createElement("p",{className:"dashboard__speed-result"},"-0"===u?0:u),r.a.createElement("p",{className:"dashboard__speed-unit"},"km/h")),r.a.createElement("div",{className:"dashboard__gear-info-container"},r.a.createElement("p",{className:"dashboard__gear-result"},H))),U?r.a.createElement("div",{className:"game-over"},r.a.createElement("p",{className:"game-over__text"},"Your car has gone out. The engine speed was too low or you didn't adjust the speed to the current gear. Click the cross above to play again. Good Luck!!!"),r.a.createElement("button",{className:"game-over__button",onClick:function(){V(!1),ue(!1),be(!1),setTimeout((function(){ge(!1)}),3e3)}},r.a.createElement("span",{className:"far fa-times-circle"}))):null,r.a.createElement(o,{gear:H,gameOver:U,finish:ne,playAgain:le,startDelay:me,counterBlock:pe,setCounterBlock:ge}),r.a.createElement(_,{speedResult:u,checkFinish:function(e){re(e),ne&&(J("N"),C(2),W(2.5))},gameOver:U,playAgain:le,setPlayAgain:oe,startDelay:me}),r.a.createElement(y,{finish:ne,setPlayAgain:oe,speedResult:u,setStartDelay:ue,setStopAnimation:be}))},p=a(21),g=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),o=Object(l.a)(c,2),i=o[0],d=o[1];return r.a.createElement("div",{className:"game-container"},r.a.createElement("div",{className:"initial-menu"},r.a.createElement("span",{className:"fas fa-cog initial-menu__config",onClick:function(){return d(!i)},style:{color:i?"rgba(255,255,255)":"rgba(255,255,255,0.6"}}),r.a.createElement("h1",{className:"initial-menu__header"},"Drag Race"),r.a.createElement("input",{type:"text",className:"initial-menu__input",placeholder:"Enter your nickname",value:a,onChange:function(e){var t=e.target.value;s(t)}}),r.a.createElement(p.b,{className:"initial-menu__link",to:{pathname:"/drag-race/game",state:{name:a}}},"Start Game"),i?r.a.createElement("div",{className:"initial-menu__instruction"},r.a.createElement("h1",{className:"initial-menu__instruction-header"},"How to Play"),r.a.createElement("div",{className:"initial-menu__instruction-rule"},r.a.createElement("div",{className:"initial-menu__instruction-key",style:{marginRight:"20%",marginLeft:"10%"}},r.a.createElement("span",{className:"fas fa-arrow-up"})),r.a.createElement("p",{className:"initial-menu__instruction-text"},"Higher gear")),r.a.createElement("div",{className:"initial-menu__instruction-rule"},r.a.createElement("div",{className:"initial-menu__instruction-key"},"'SPACE'"),r.a.createElement("p",{className:"initial-menu__instruction-text"},"Acceleration")),r.a.createElement("div",{className:"initial-menu__instruction-rule"},r.a.createElement("div",{className:"initial-menu__instruction-key",style:{marginRight:"35%"}},"'N'"),r.a.createElement("p",{className:"initial-menu__instruction-text"},"Idle"))):null))},E=a(16),N=function(){return r.a.createElement(p.a,null,r.a.createElement(E.a,{path:"/drag-race",exact:!0,component:g}),r.a.createElement(E.a,{path:"/drag-race/game",component:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.892434b1.chunk.js.map