(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/slide-1.1c748bea.jpg"},22:function(e,a,t){e.exports=t.p+"static/media/slide-2.163395ca.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/slide-3.df097209.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/accounting.6866009e.svg"},25:function(e,a,t){e.exports=t.p+"static/media/bars.87aec139.svg"},26:function(e,a,t){e.exports=t.p+"static/media/headset.46da6064.svg"},27:function(e,a,t){e.exports=t.p+"static/media/users.ae924cc5.svg"},28:function(e,a,t){e.exports=t.p+"static/media/profits.27c03808.svg"},31:function(e,a,t){e.exports=t.p+"static/media/footer.7cb9c228.jpg"},32:function(e,a,t){e.exports=t.p+"static/media/house.e6eed73a.svg"},33:function(e,a,t){e.exports=t.p+"static/media/mail.944e53c6.svg"},35:function(e,a,t){e.exports=t.p+"static/media/accounting.44b9ad86.svg"},36:function(e,a,t){e.exports=t(47)},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(20),r=t.n(s),i=t(2),l=t(3),o=t(5),m=t(4),d=t(6),u=t(8),p=t(12),_=function(e){var a=e.image,t=e.descriptionH1,n=e.descriptionH2,s={backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundAttachment:"fixed"};return c.a.createElement("div",{className:"header-slider__slide",style:s},c.a.createElement("div",{className:"header-slider__description"},c.a.createElement("h1",{className:"header-slider__description-h1"},t),c.a.createElement("h2",{className:"header-slider__description-h2"},n)))},f=t(21),h=t.n(f),E=t(22),w=t.n(E),N=t(23),z=t.n(N),k=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={images:[h.a,w.a,z.a],currentIndex:0,transformValue:0},t.description={h1:["Prestige Biuro Rachunkowe","Zajmij si\u0119 swoim biznesem!","Kompleksowa obs\u0142uga"],h2:["Nowoczesno\u015b\u0107 to nasza zaleta","Sprawy rachunkowe zostaw nam.","Atrakcyjne ceny i rabaty. Sprawd\u017a!"]},t.componentDidMount=function(){t.clsInterval=setInterval(t.automaticSlider,5e3)},t.componentWillUnmount=function(){clearInterval(t.clsInterval)},t.automaticSlider=function(){t.state.currentIndex===t.state.images.length-1?t.setState({currentIndex:0,transformValue:0}):t.setState((function(e){return{currentIndex:e.currentIndex+1,transformValue:e.transformValue+-t.slideWidth()}}))},t.onNextSlide=function(){clearInterval(t.clsInterval),t.state.currentIndex===t.state.images.length-1?t.setState({currentIndex:0,transformValue:0}):t.setState((function(e){return{currentIndex:e.currentIndex+1,transformValue:e.transformValue+-t.slideWidth()}})),t.componentDidMount()},t.slideWidth=function(){return document.querySelector(".header-slider__slide").clientWidth},t.onPreviousSlide=function(){clearInterval(t.clsInterval),0===t.state.currentIndex?t.setState({currentIndex:0,transformValue:0}):t.setState((function(e){return{currentIndex:e.currentIndex-1,transformValue:e.transformValue+t.slideWidth()}})),t.componentDidMount()},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("header",{className:"header-slider"},c.a.createElement("div",{className:"header-slider__slide-container",style:{transform:"translateX(".concat(this.state.transformValue,"px)"),transition:"1s linear"}},c.a.createElement(_,{image:this.state.images[0],descriptionH1:this.description.h1[0],descriptionH2:this.description.h2[0]}),c.a.createElement(_,{image:this.state.images[1],descriptionH1:this.description.h1[1],descriptionH2:this.description.h2[1]}),c.a.createElement(_,{image:this.state.images[2],descriptionH1:this.description.h1[2],descriptionH2:this.description.h2[2]})),c.a.createElement("span",{className:"fa fa-chevron-left","aria-hidden":"true",onClick:this.onPreviousSlide}),c.a.createElement("span",{className:"fa fa-chevron-right","aria-hidden":"true",onClick:this.onNextSlide}))}}]),a}(n.Component),v=t(7),g=t(24),y=t.n(g),j=t(25),b=t.n(j),x=t(26),O=t.n(x),S=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t.componentDidMount=function(){var e={origin:"right",duration:1e3,delay:150,distance:"500px",scale:1,easing:"ease"};Object(v.a)().reveal(t.refs.headset,e),Object(v.a)().reveal(t.refs.bars,{origin:"left",duration:1e3,delay:150,distance:"500px",scale:1,easing:"ease"}),Object(v.a)().reveal(t.refs.accounting,e)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"advertisements"},c.a.createElement("div",{className:"advertisements__advertisement",ref:"headset"},c.a.createElement("img",{src:O.a,alt:"headset",className:"advertisements__image"}),c.a.createElement("h2",{className:"advertisements__header"},"Masz pytanie? Zadzwo\u0144"),c.a.createElement("p",{className:"advertisements__description"},"Iwona J\xf3\u017awiak / tel. 698-227-887",c.a.createElement("br",null),"ijozwiak1959@gmail.com")),c.a.createElement("div",{className:"advertisements__advertisement",ref:"bars"},c.a.createElement("img",{src:b.a,alt:"bars",className:"advertisements__image"}),c.a.createElement("h2",{className:"advertisements__header"},"Zajmij si\u0119 swoj\u0105 firm\u0105"),c.a.createElement("p",{className:"advertisements__description"},"Finanse i sprawy ksi\u0119gowe zostaw nam.")),c.a.createElement("div",{className:"advertisements__advertisement",ref:"accounting"},c.a.createElement("img",{src:y.a,alt:"accounting",className:"advertisements__image"}),c.a.createElement("h2",{className:"advertisements__header"},"Jeste\u015bmy dla Ciebie"),c.a.createElement("p",{className:"advertisements__description"},"Zaufanie jest dla nas bardzo wa\u017cne, relacja biuro-podatnik jest dla nas kluczowa. Nigdy nie \u0142amiemy tej zasady.")))}}]),a}(n.Component),I=t(27),P=t.n(I),C=t(28),A=t.n(C),X=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t.componentDidMount=function(){var e={origin:"right",duration:2e3,delay:150,distance:"0px",scale:0,easing:"ease"},a={origin:"right",duration:1e3,delay:150,distance:"1000px",scale:1,easing:"ease"};Object(v.a)().reveal(t.refs.users1,e),Object(v.a)().reveal(t.refs.users2,e),Object(v.a)().reveal(t.refs.users3,e),Object(v.a)().reveal(t.refs.users4,a),Object(v.a)().reveal(t.refs.profits1,e),Object(v.a)().reveal(t.refs.profits2,e),Object(v.a)().reveal(t.refs.profits3,e),Object(v.a)().reveal(t.refs.profits4,a)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"features"},c.a.createElement("div",{className:"features__feature"},c.a.createElement("img",{src:P.a,alt:"users",className:"features__feature-image",ref:"users1"}),c.a.createElement("div",{className:"features__feature-element"},c.a.createElement("h1",{className:"features__feature-header",ref:"users2"},"Ksi\u0119gowo\u015b\u0107 powierz specjalistom"),c.a.createElement("p",{className:"features__feature-description",ref:"users3"},"Biuro rachunkowe Szczecin Prestige powsta\u0142o z my\u015bl\u0105 o ma\u0142ych i \u015brednich przedsi\u0119biorstwach, ich potrzebach oraz problemach pojawiaj\u0105cych si\u0119 w trakcie prowadzonej dzia\u0142alno\u015bci. Wspieranie i rozw\xf3j naszych przedsi\u0119biorc\xf3w to dla nas priorytet. Zapewniamy kompleksow\u0105 obs\u0142ug\u0119 w zakresie ksi\u0119gowym, finansowym oraz prawnym. Skontaktuj si\u0119 z nami i dowiedz si\u0119 wi\u0119cej."),c.a.createElement(u.b,{to:"Project2/kontakt",className:"features__feature-btn",ref:"users4"},"\u2713 Kontakt"))),c.a.createElement("div",{className:"features__feature features__feature--bgi"},c.a.createElement("img",{src:A.a,alt:"profits",className:"features__feature-image",ref:"profits1"}),c.a.createElement("div",{className:"features__feature-element"},c.a.createElement("h1",{className:"features__feature-header features__feature-header--second",ref:"profits2"},"Biuro Rachunkowe Szczecin"),c.a.createElement("p",{className:"features__feature-description features__feature-description--second",ref:"profits3"},"Ksi\u0119gowo\u015b\u0107 w biurze rachunkowym Prestige to us\u0142uga stworzona z my\u015bl\u0105 o tych, kt\xf3rzy najbardziej ceni\u0105 sobie profesjonaln\u0105 obs\u0142ug\u0119 i wygod\u0119. Zapewniamy indywidualne podej\u015bcie dla ka\u017cdego naszego klienta. Oferujemy szeroki zakres us\u0142ug dla ma\u0142ych jednoosobowych dzia\u0142alno\u015bci, prowadzimy podatkowe ksi\u0119gi przychod\xf3w i rozchod\xf3w, rycza\u0142tu ewidencjonowanego, \u015bwiadczymy tak\u017ce us\u0142ugi w zakresie prowadzenia pe\u0142nej ksi\u0119gowo\u015bci dla wi\u0119kszych przedsi\u0119biorstw. Zapewniamy obs\u0142ug\u0119 kadrowo \u2013 p\u0142acow\u0105, rozliczenia roczne, przygotowujemy te\u017c i wysy\u0142amy elektroniczne deklaracje podatkowe i VAT."),c.a.createElement(u.b,{to:"Project2/us\u0142ugi",className:"features__feature-btn features__feature-btn--second",ref:"profits4"},"\u2713 Oferta"))))}}]),a}(n.Component),M=function(){return c.a.createElement("main",{className:"main"},c.a.createElement(S,null),c.a.createElement(X,null))},W=t(31),Z=t.n(W),K=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("img",{src:Z.a,alt:"success",className:"footer__image"}),c.a.createElement("div",{className:"footer__about"},c.a.createElement("h2",{className:"footer__about-header"},"kim jeste\u015bmy"),c.a.createElement("p",{className:"footer__about-content"},"Nasze biuro rachunkowe powsta\u0142o z my\u015bl\u0105 o ma\u0142ych i \u015brednich przedsi\u0119biorstwach, ich potrzebach oraz problemach pojawiaj\u0105cych si\u0119 w trakcie prowadzonej dzia\u0142alno\u015bci. Posiadamy Certyfikat Ksi\u0119gowy Ministerstwa Finans\xf3w numer XXXXX/2007 po\u015bwiadczaj\u0105cy nasze wysokie kwalifikacje. Jeste\u015bmy m\u0142odym i dynamicznym zespo\u0142em specjalist\xf3w, kt\xf3rych celem jest ci\u0105g\u0142e wspieranie i rozw\xf3j naszych przedsi\u0119biorc\xf3w poprzez zapewnienie im kompleksowej obs\u0142ugi w zakresie us\u0142ug ksi\u0119gowych, finansowych oraz prawnych."),c.a.createElement("div",{className:"footer__about-address"},c.a.createElement("p",{className:"footer__about-address-info"},"Biuro Rachunkowe Prestige"),c.a.createElement("p",{className:"footer__about-address-info"},"ul. Pomorska 115B, pok\xf3j 612"),c.a.createElement("p",{className:"footer__about-address-info"},"70-812 Szczecin"),c.a.createElement("p",{className:"footer__about-address-info"},"+48 698 227 887"),c.a.createElement("p",{className:"footer__about-address-info"},"ijozwiak1959@gmail.com"))))},F=function(){return window.scroll({top:0,left:0,behavior:"smooth"}),c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null),c.a.createElement(M,null),c.a.createElement(K,null))},B=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t.componentDidMount=function(){var e={origin:"center",duration:1e3,delay:150,distance:"0px",scale:.2,opacity:.2,easing:"ease"},a=t.refs;[a.check1,a.check2,a.check3,a.check4,a.check5,a.check6,a.check7].forEach((function(a){Object(v.a)().reveal(a,e),e.delay+=150})),e.delay=150;var n=t.refs;[n.check8,n.check9,n.check10,n.check11,n.check12,n.check13].forEach((function(a){Object(v.a)().reveal(a,e),e.delay+=150}))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"services"},c.a.createElement("h1",{className:"services__main-header"},"Biuro rachunkowe Prestige Szczecin - Oferta"),c.a.createElement("section",{className:"services__elements-all"},c.a.createElement("ul",{className:"services__elements"},c.a.createElement("h1",{className:"services__side-header"},"\u015awiadczymy us\u0142ugi w zakresie:"),c.a.createElement("li",{className:"services__element"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true",ref:"check1"}),c.a.createElement("p",{className:"services__element-info"},"prowadzenia podatkowej ksi\u0119gi przychod\xf3w i rozchod\xf3w oraz rycza\u0142tu ewidencjonowanego w zakresie zgodnym z rozporz\u0105dzeniem Ministra Finans\xf3w,")),c.a.createElement("li",{className:"services__element"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true",ref:"check2"}),c.a.createElement("p",{className:"services__element-info"},"prowadzenia pe\u0142nej ksi\u0119gowo\u015bci zgodnie z ustaw\u0105 z dnia 29 wrze\u015bnia 1994 r. o rachunkowo\u015bci (Dz. U. nr 121 poz. 591, ze zm.),")),c.a.createElement("li",{className:"services__element"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true",ref:"check3"}),c.a.createElement("p",{className:"services__element-info"},"prowadzenia ewidencji dla potrzeb podatku od towar\xf3w i us\u0142ug,")),c.a.createElement("li",{className:"services__element"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true",ref:"check4"}),c.a.createElement("p",{className:"services__element-info"},"obs\u0142ugi kadrowo \u2013 p\u0142acowej,")),c.a.createElement("li",{className:"services__element"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true",ref:"check5"}),c.a.createElement("p",{className:"services__element-info"},"rozlicze\u0144 rocznych oraz sporz\u0105dzania deklaracji VZM-1 dotycz\u0105cej zwrotu VAT za materia\u0142y budowlane,")),c.a.createElement("li",{className:"services__element"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true",ref:"check6"}),c.a.createElement("p",{className:"services__element-info"},"pomocy przy rejestracji dzia\u0142alno\u015bci,")),c.a.createElement("li",{className:"services__element"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true",ref:"check7"}),c.a.createElement("p",{className:"services__element-info"},"sporz\u0105dzania wniosk\xf3w o wydanie za\u015bwiadcze\u0144 do ZUS i US."))),c.a.createElement("ul",{className:"services__elements"},c.a.createElement("h1",{className:"services__side-header"},"Wyr\xf3\u017cnia nas:"),c.a.createElement("li",{className:"services__element"},c.a.createElement("div",{className:"services__div-element"},c.a.createElement("h3",{className:"services__element-header"},"KOMPLEKSOWO\u015a\u0106"),c.a.createElement("p",{className:"services__element-info"},"wsp\xf3\u0142pracujemy z radcami prawnymi i adwokatami,")),c.a.createElement("i",{className:"fa fa-check fa-check--second","aria-hidden":"true",ref:"check8"})),c.a.createElement("li",{className:"services__element"},c.a.createElement("div",{className:"services__div-element"},c.a.createElement("h3",{className:"services__element-header"},"DO\u015aWIADCZENIE"),c.a.createElement("p",{className:"services__element-info"},"posiadamy niezb\u0119dne kwalifikacje i stale poszerzamy swoj\u0105 wiedz\u0119,")),c.a.createElement("i",{className:"fa fa-check fa-check--second","aria-hidden":"true",ref:"check9"})),c.a.createElement("li",{className:"services__element"},c.a.createElement("div",{className:"services__div-element"},c.a.createElement("h3",{className:"services__element-header"},"ZAANGA\u017bOWANIE"),c.a.createElement("p",{className:"services__element-info"},"pojawiaj\u0105ce si\u0119 w\u0105tpliwo\u015bci wyja\u015bniamy gruntownie i precyzyjnie,")),c.a.createElement("i",{className:"fa fa-check fa-check--second","aria-hidden":"true",ref:"check10"})),c.a.createElement("li",{className:"services__element"},c.a.createElement("div",{className:"services__div-element"},c.a.createElement("h3",{className:"services__element-header"},"CZAS DLA KLIENT\xd3W"),c.a.createElement("p",{className:"services__element-info"},"zawsze po\u015bwi\u0119camy Naszym klientom niezb\u0119dn\u0105 uwag\u0119 i czas,")),c.a.createElement("i",{className:"fa fa-check fa-check--second","aria-hidden":"true",ref:"check11"})),c.a.createElement("li",{className:"services__element"},c.a.createElement("div",{className:"services__div-element"},c.a.createElement("h3",{className:"services__element-header"},"SZYBKO\u015a\u0106 DZIA\u0141ANIA"),c.a.createElement("p",{className:"services__element-info"},"niezw\u0142ocznie odpowiadamy na pojawiaj\u0105ce si\u0119 pytania i reagujemy na pojawiaj\u0105ce si\u0119 problemy, rozumiemy jak wa\u017cne jest to dla naszych Klient\xf3w,")),c.a.createElement("i",{className:"fa fa-check fa-check--second","aria-hidden":"true",ref:"check12"})),c.a.createElement("li",{className:"services__element"},c.a.createElement("div",{className:"services__div-element"},c.a.createElement("h3",{className:"services__element-header"},"DOST\u0118PNO\u015a\u0106"),c.a.createElement("p",{className:"services__element-info"},"um\xf3w spotkanie, zadzwo\u0144, napisz e-mail, zawsze jeste\u015bmy do twojej dyspozycji!")),c.a.createElement("i",{className:"fa fa-check fa-check--second","aria-hidden":"true",ref:"check13"}))),c.a.createElement("h2",{className:"services__summary-text"},"Zakres oferowanych us\u0142ug dostosowujemy indywidualnie do potrzeb ka\u017cdego klienta.")))}}]),a}(n.Component),D=function(){return c.a.createElement("div",{className:"contact-strip"},c.a.createElement("p",{className:"contact-strip__info"},c.a.createElement("i",{className:"fa fa-envelope contact-strip__info-font","aria-hidden":"true"}),"ijozwiak1959@gmail.com"),c.a.createElement("p",{className:"contact-strip__info"},c.a.createElement("i",{className:"fa fa-phone contact-strip__info-font","aria-hidden":"true"}),"+48 698 227 887"))},V=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={},t.scrollImage=function(){var e=t.refs.image.clientHeight;window.scroll({top:e,behavior:"smooth"})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"smaller-header-image",ref:"image"},c.a.createElement(D,null),c.a.createElement("h2",{className:"smaller-header-image__info"},this.props.title),c.a.createElement("button",{className:"smaller-header-image__button",onClick:this.scrollImage},this.props.buttonContent))}}]),a}(n.Component),T=function(){window.scroll({top:0,left:0,behavior:"smooth"});return c.a.createElement(c.a.Fragment,null,c.a.createElement(V,{title:"Zapewniamy kompleksow\u0105 obs\u0142ug\u0119 w zakresie ksi\u0119gowym, finansowym oraz prawnym.",buttonContent:"Oferta"}),c.a.createElement(B,null),c.a.createElement(K,null))},R=function(e){return c.a.createElement("li",{className:"price-list__list-item"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}),e.service)},U=function(){return c.a.createElement("section",{className:"example-price"},c.a.createElement("h1",{className:"example-price__header"},"Przyk\u0142adowy cennik naszych us\u0142ug"),c.a.createElement("h1",{className:"example-price__smaller-header"},"Us\u0142ugi podstawowe:"),c.a.createElement("ul",{className:"example-price__list"},c.a.createElement("li",{className:"example-price__list-item"},c.a.createElement("p",{className:"example-price__list-item-header"},"Rycza\u0142t ewidencjonowany"),c.a.createElement("p",{className:"example-price__list-item-info"},"od ",c.a.createElement("span",{className:"element"},"80.00 z\u0142"),"*")),c.a.createElement("li",{className:"example-price__list-item"},c.a.createElement("p",{className:"example-price__list-item-header"},"Ksi\u0119ga przychod\xf3w i rozchod\xf3w"),c.a.createElement("p",{className:"example-price__list-item-info"},"od ",c.a.createElement("span",{className:"element"},"100.00 z\u0142"),"*")),c.a.createElement("li",{className:"example-price__list-item"},c.a.createElement("p",{className:"example-price__list-item-header"},"Ksi\u0119gi handlowe"),c.a.createElement("p",{className:"example-price__list-item-info"},"od",c.a.createElement("span",{className:"element"},"500.00 z\u0142"),"*")),c.a.createElement("li",{className:"example-price__list-item"},c.a.createElement("p",{className:"example-price__list-item-header"},"Obs\u0142uga kadrowo-p\u0142acowa"),c.a.createElement("p",{className:"example-price__list-item-info"},"od",c.a.createElement("span",{className:"element"},"25.00 z\u0142"),"*"))),c.a.createElement("p",{className:"example-price__summary"},"* Sporz\u0105dzanie deklaracji PIT, VAT, ZUS jest zawarte w cenie us\u0142ug podstawowych"))},H=["liczba dokument\xf3w do zaksi\u0119gowania w danym miesi\u0105cu;","rodzaj prowadzonej ewidencji ksi\u0119gowej;","w przypadku obs\u0142ugi kadr i p\u0142ac, liczba zatrudnionych pracownik\xf3w;","sporz\u0105dzanie dodatkowych dokument\xf3w, rejestr\xf3w, ewidencji;","stopie\u0144 trudno\u015bci prac wykonywanych przez nasze biuro rachunkowe. Operacje gospodarcze maj\u0105 r\xf3\u017cny stopie\u0144 skomplikowania na gruncie obowi\u0105zuj\u0105cych przepis\xf3w, szczeg\xf3lnie podatkowych i dotycz\u0105cych rachunkowo\u015bci;","dodatkowe czynno\u015bci \u2013 pomoc w redagowaniu pism wyja\u015bniaj\u0105cych, wezwa\u0144 do zap\u0142aty, rozliczanie rozrachunk\xf3w, itp."],J=function(){var e=H.map((function(e,a){return c.a.createElement(R,{key:a,service:e})}));return c.a.createElement("section",{className:"price-list"},c.a.createElement("h2",{className:"price-list__header"},"Biuro rachunkowe Prestige Szczecin - Cennik"),c.a.createElement("p",{className:"price-list__information"},"Ze wzgl\u0119du na zr\xf3\u017cnicowane potrzeby i wymagania naszych Klient\xf3w, wysoko\u015b\u0107 op\u0142at za nasze us\u0142ugi ustalana jest indywidualnie."),c.a.createElement("h2",{className:"price-list__smaller-header"},"Wp\u0142yw na cen\u0119 us\u0142ugi ma mi\u0119dzy innymi:"),c.a.createElement("ul",{className:"price-list__list"},e),c.a.createElement(U,null),c.a.createElement("section",{className:"additional-services"},c.a.createElement("h1",{className:"additional-services__header"},"Wybrane dodatkowe us\u0142ugi"),c.a.createElement("ul",{className:"additional-services__list"},c.a.createElement("li",{className:"price-list__list-item"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}),"Sprawozdania do GUS - od 100,00 z\u0142;"),c.a.createElement("li",{className:"price-list__list-item"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}),"Wniosek o wyp\u0142at\u0119 miesi\u0119cznego dofinansowania do PFRON - od 30,00 z\u0142;"),c.a.createElement("li",{className:"price-list__list-item"},c.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"}),"Sporz\u0105dzanie wniosk\xf3w o dotacj\u0119 z PUP - od 100,00 z\u0142 (w przypadku podpisania umowy o prowadzenie ewidencji ksi\u0119gowych, kwota ta jest odliczana od bie\u017c\u0105cej ceny us\u0142ugi);"))),c.a.createElement("h2",{className:"additional-description"},"Prosimy o kontakt z naszym biurem rachunkowym, by\u015bmy mog\u0142y przedstawi\u0107 Pa\u0144stwu ofert\u0119 i szczeg\xf3\u0142owy cennik."),c.a.createElement("p",{className:"additional-description-second"},"Podane ceny s\u0105 kwotami netto. Powy\u017cszy cennik s\u0142u\u017cy do wyliczenia szacunkowych koszt\xf3w wsp\xf3\u0142pracy i nie stanowi oferty w rozumieniu art. 66 Kodeksu cywilnego."))},q=function(){window.scroll({top:0,left:0,behavior:"smooth"});return c.a.createElement(c.a.Fragment,null,c.a.createElement(V,{title:"Rzetelno\u015b\u0107, fachowo\u015b\u0107 i wysoka jako\u015b\u0107 us\u0142ug ksi\u0119gowych dla twojej firmy w rozs\u0105dnej cenie.",buttonContent:"Cennik"}),c.a.createElement(J,null),c.a.createElement(K,null))},L=t(32),G=t.n(L),Y=t(33),$=t.n(Y),Q=t(34),ee=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={firstName:"",mail:"",title:"",textarea:"",message:"",errors:{firstName:!1,mail:!1,title:!1,textarea:!1,correct:!1}},t.handleChangeInput=function(e){var a=e.target.name;t.setState(Object(Q.a)({},a,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var a=t.validationForm();a.correct?t.setState({firstName:"",mail:"",title:"",textarea:"",message:"Twoja wiadomo\u015b\u0107 zosta\u0142o wys\u0142ana, odpowiemy najszybciej jak to mo\u017cliwe!",errors:{firstName:!1,mail:!1,title:!1,textarea:!1,correct:!1}}):t.setState({errors:{firstName:!a.firstName,mail:!a.mail,title:!a.title,textarea:!a.textarea,correct:!a.correct}})},t.validationForm=function(){var e=!1,a=!1,n=!1,c=!1,s=!1;return t.state.firstName.length>5&&(e=!0),-1!==t.state.mail.indexOf("@")&&(a=!0),t.state.title.length>5&&(n=!0),t.state.textarea.length>8&&(c=!0),e&&a&&n&&c&&(s=!0),{firstName:e,mail:a,title:n,textarea:c,correct:s}},t.componentDidUpdate=function(){""!==t.state.message&&setTimeout((function(){t.setState({message:""})}),3e3)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("form",{action:"",className:"contact__form",onSubmit:this.handleSubmit},c.a.createElement("p",{className:"contact__form-element"},c.a.createElement("label",{htmlFor:"",className:"contact__form-label"},"Imi\u0119"),c.a.createElement("input",{type:"text",name:"firstName",className:"contact__form-input",value:this.state.firstName,onChange:this.handleChangeInput}),this.state.errors.firstName&&c.a.createElement("span",{className:"contact__form-error"},"Podaj minimum 5 znak\xf3w")),c.a.createElement("p",{className:"contact__form-element"},c.a.createElement("label",{htmlFor:"",className:"contact__form-label"},"E-Mail"),c.a.createElement("input",{type:"mail",name:"mail",className:"contact__form-input",value:this.state.mail,onChange:this.handleChangeInput}),this.state.errors.mail&&c.a.createElement("span",{className:"contact__form-error"},"Podaj adres e-mail")),c.a.createElement("p",{className:"contact__form-element contact__form-element--big"},c.a.createElement("label",{htmlFor:"",className:"contact__form-label"},"Tytu\u0142 Wiadomo\u015bci"),c.a.createElement("input",{type:"text",name:"title",className:"contact__form-input",value:this.state.title,onChange:this.handleChangeInput}),this.state.errors.title&&c.a.createElement("span",{className:"contact__form-error"},"Podaj minimum 5 znak\xf3w")),c.a.createElement("p",{className:"contact__form-element contact__form-element--big"},c.a.createElement("label",{htmlFor:"",className:"contact__form-label"},"Wiadomo\u015b\u0107"),c.a.createElement("textarea",{name:"textarea",id:"",className:"contact__form-textarea",value:this.state.textarea,onChange:this.handleChangeInput}),this.state.errors.textarea&&c.a.createElement("span",{className:"contact__form-error"},"Podaj minimum 8 znak\xf3w")),c.a.createElement("input",{type:"submit",className:"contact__form-button",value:"Wy\u015blij"}),this.state.message&&c.a.createElement("h3",{className:"contact__form-final-message"},this.state.message))}}]),a}(n.Component),ae=function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("header",{className:"contact__header"},c.a.createElement("h1",{className:"contact__header-text"},"Skontaktuj si\u0119 z nami.",c.a.createElement("br",null)," Twoja firma na to zas\u0142uguje.")),c.a.createElement("div",{className:"contact__info"},c.a.createElement("div",{className:"contact__info-element"},c.a.createElement("div",{className:"contact__info-description"},c.a.createElement("p",{className:"contact__info-text"},"SIEDZIBA FIRMY"),c.a.createElement("p",{className:"contact__info-text contact__info-text--small"},"Budynek Animex Szczecin"),c.a.createElement("p",{className:"contact__info-text contact__info-text--small"},"ul. Pomorska 115B, pok\xf3j 612"),c.a.createElement("p",{className:"contact__info-text contact__info-text--small"},"70-812 Szczecin")),c.a.createElement("i",{className:"fa fa-map-signs contact__info-picture","aria-hidden":"true"})),c.a.createElement("div",{className:"contact__info-element"},c.a.createElement("i",{className:"fa fa-user-o contact__info-picture contact__info-picture--second","aria-hidden":"true"}),c.a.createElement("div",{className:"contact__info-description"},c.a.createElement("p",{className:"contact__info-text"},"KONTAKT"),c.a.createElement("p",{className:"contact__info-text contact__info-text--small"},"+48 698 227 887"),c.a.createElement("p",{className:"contact__info-text contact__info-text--small"},"ijozwiak1959@gmail.com")))),c.a.createElement("div",{className:"contact__company"},c.a.createElement("img",{src:G.a,alt:"house",className:"contact__company-logo"}),c.a.createElement("div",{className:"contact__company-data"},c.a.createElement("p",{className:"contact__company-data-text contact__company-data-text--important"},"Biuro Rachunkowe Prestige Iwona J\xf3\u017awiak"),c.a.createElement("p",{className:"contact__company-data-text"},"NIP: XXX-XXX-XX-XX"),c.a.createElement("p",{className:"contact__company-data-text"},"Regon: XXXXXXXXX"),c.a.createElement("p",{className:"contact__company-data-text"},"Certyfikat Ksi\u0119gowy Ministerstwa Finans\xf3w: XXXXX/2007"))),c.a.createElement("div",{className:"contact__message"},c.a.createElement("div",{className:"contact__message-aside"},c.a.createElement("img",{src:$.a,alt:"mail",className:"contact__message-image"}),c.a.createElement("p",{className:"contact__message-text"},"Skontaktuj si\u0119 z nami bezpo\u015brednio przez formularz."),c.a.createElement("p",{className:"contact__message-text contact__message-text--small"},"Odpowiemy na Twoj\u0105 wiadomo\u015b\u0107 jeszcze dzi\u015b!")),c.a.createElement(ee,null)))},te=function(){return window.scroll({top:0,left:0,behavior:"smooth"}),c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null),c.a.createElement(K,null))},ne=t(35),ce=t.n(ne),se=function(e){return c.a.createElement("nav",{className:"nav",style:e.isActive?{transform:"translateX(0)"}:null},c.a.createElement("div",{className:"nav__position"},c.a.createElement("div",{className:"nav__logo"},c.a.createElement("div",{className:"nav__logo-image"},c.a.createElement("img",{className:"img",src:ce.a,alt:"logo"})),c.a.createElement("div",{className:"nav__logo-name"},"Biuro Rachunkowe ",c.a.createElement("span",null,"Prestige"))),c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__list-item"},c.a.createElement(u.c,{to:"/Project2",exact:!0,className:"nav__link",onClick:e.changeMenu},c.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"}),"Start")),c.a.createElement("li",{className:"nav__list-item"},c.a.createElement(u.c,{to:"/Project2/us\u0142ugi",className:"nav__link",onClick:e.changeMenu},c.a.createElement("i",{className:"fa fa-list","aria-hidden":"true"}),"Us\u0142ugi")),c.a.createElement("li",{className:"nav__list-item"},c.a.createElement(u.c,{to:"/Project2/cennik",className:"nav__link",onClick:e.changeMenu},c.a.createElement("i",{className:"fa fa-money","aria-hidden":"true"}),"Cennik")),c.a.createElement("li",{className:"nav__list-item"},c.a.createElement(u.c,{to:"/Project2/kontakt",className:"nav__link",onClick:e.changeMenu},c.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"Kontakt"))),c.a.createElement("div",{className:"nav__social-media"},c.a.createElement(u.b,{to:"#",className:"nav__social-element"},c.a.createElement("span",{className:"fa fa-facebook-square","aria-hidden":"true"})),c.a.createElement(u.b,{to:"#",className:"nav__social-element"},c.a.createElement("span",{className:"fa fa-instagram","aria-hidden":"true"})),c.a.createElement(u.b,{to:"#",className:"nav__social-element"},c.a.createElement("span",{className:"fa fa-linkedin-square","aria-hidden":"true"})))))},re=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={isActive:!1},t.handleClick=function(){t.setState({isActive:!t.state.isActive})},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"nav-bar__btn"},c.a.createElement("span",{className:"fa fa-bars","aria-hidden":"true",onClick:this.handleClick,style:this.state.isActive?{transform:"rotate(90deg)"}:null}),c.a.createElement("p",{className:"nav-bar__name"},"Menu"))),c.a.createElement(se,{isActive:this.state.isActive,changeMenu:this.handleClick}))}}]),a}(n.Component),ie=(t(46),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(u.a,null,c.a.createElement(re,null),c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/Project2",exact:!0,component:F}),c.a.createElement(p.a,{path:"/Project2/us\u0142ugi",component:T}),c.a.createElement(p.a,{path:"/Project2/cennik",component:q}),c.a.createElement(p.a,{path:"/Project2/kontakt",component:te}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.55812b56.chunk.js.map