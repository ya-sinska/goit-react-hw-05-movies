"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{3641:function(e,r,n){n.r(r),n.d(r,{default:function(){return H}});var t,a,c,o,u=n(6871),s=n(5861),i=n(885),p=n(7757),f=n.n(p),l=n(2791),v=n(2475),h=n(151),d=n(168),m=n(2499),x=n(8820),g=m.Z.ul(t||(t=(0,d.Z)(["\nlist-style-type: none;\npadding: 10px;\n"]))),b=m.Z.li(a||(a=(0,d.Z)(["\nfont-size:16px;\nfont-family: 'Work Sans', sans-serif;\nfont-weight:400;\ncolor: #ca7628;\nborder: 1px solid rgba(255,185,43,0.66);;\nborder-radius: 10px;\npadding: 20px;\n&:not(:last-child){\n    margin-bottom:15px;\n}\n"]))),w=m.Z.p(c||(c=(0,d.Z)(["\nfont-size:18px;\nfont-weight:600;\nmargin-bottom:10px;\n"]))),k=(0,m.Z)(x.nf1)(o||(o=(0,d.Z)(["\nmargin-right:10px;\n"]))),y=n(5667),Z=n(8423),j=n(184),_=function(e){var r=e.reviews;return y.NY.scrollMore(500),(0,j.jsx)(j.Fragment,{children:0===r.length?(0,j.jsx)(Z.O,{text:"No reviews"}):(0,j.jsx)(g,{children:r.map((function(e){var r=e.author,n=e.content;return(0,j.jsxs)(b,{children:[(0,j.jsxs)(w,{children:[(0,j.jsx)(k,{}),"Autor: ",r]}),(0,j.jsx)("p",{children:n})]},r)}))})})};function H(){var e=function(e){var r=(0,l.useState)([]),n=(0,i.Z)(r,2),t=n[0],a=n[1];return(0,l.useEffect)((function(){function r(){return(r=(0,s.Z)(f().mark((function r(){var n;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,v.wH)(e);case 3:n=r.sent,a(n),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0.message),(0,h.H)(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[e]),t}((0,u.UO)().movieId);return(0,j.jsx)(j.Fragment,{children:e&&(0,j.jsx)(_,{reviews:e})})}},2475:function(e,r,n){n.d(r,{BG:function(){return i},LI:function(){return l},bD:function(){return f},vw:function(){return s},wH:function(){return p}});var t=n(5861),a=n(7757),c=n.n(a),o=n(4569),u=n.n(o),s=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("https://api.themoviedb.org/3/trending/movie/day?api_key=4a5a1e8e9c9af768c9d74bb009ae596f");case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=4a5a1e8e9c9af768c9d74bb009ae596f"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=4a5a1e8e9c9af768c9d74bb009ae596f"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=4a5a1e8e9c9af768c9d74bb009ae596f"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("https://api.themoviedb.org/3/search/movie?api_key=4a5a1e8e9c9af768c9d74bb009ae596f&query=".concat(r));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},151:function(e,r,n){n.d(r,{H:function(){return a}});var t=n(577),a=function(e){return t.Am.error(e,{autoClose:3e3})}}}]);
//# sourceMappingURL=Reviews.223a9ceb.chunk.js.map