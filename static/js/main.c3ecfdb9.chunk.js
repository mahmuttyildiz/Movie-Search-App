(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),o=(t(11),t(12),t(1)),s=t.n(o),i=t(5),m=t(2);var u=function(e){var a=e.movie;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(a.poster_path),alt:a.title+" poster",className:"cardImage"}),r.a.createElement("div",{className:"cardContent"},r.a.createElement("h3",{className:"cardTitle"},a.title),r.a.createElement("p",null,r.a.createElement("small",null,"Release Date: ",a.release_date)),r.a.createElement("p",null,r.a.createElement("small",null,"Rating: ",a.vote_average)),r.a.createElement("p",{className:"cardDesc"},a.overview)))};var p=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),p=o[0],v=o[1],h=function(){var e=Object(i.a)(s.a.mark((function e(a){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=722794eadb8351ced9465ab3563f025c&language=en-US&query=".concat(t,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,console.log(c),v(c.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form",onSubmit:h},r.a.createElement("label",{htmlFor:"query",className:"label"},"Movie Name: "),r.a.createElement("input",{className:"input",type:"text",name:"query",placeholder:"Search a movie",value:t,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"button"},"Search")),r.a.createElement("div",{className:"cardList"},p.filter((function(e){return e.poster_path})).map((function(e){return r.a.createElement(u,{movie:e,key:e.id})}))))};var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Search Movies"),r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.c3ecfdb9.chunk.js.map