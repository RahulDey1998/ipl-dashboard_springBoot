(this["webpackJsonpfrontend-react"]=this["webpackJsonpfrontend-react"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(4)),j=c(2),l=c(8),h=c.n(l),m=c(10),o=c(11),d=(c(28),c(0)),b=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=t===c.team1?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchDetailsCard won-card":"MatchDetailsCard lost-card",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsxs)(i.b,{to:n,children:[" ",a," "]})}),Object(d.jsx)("h2",{className:"match-date",children:c.date}),Object(d.jsx)("h3",{className:"match-venue",children:c.venue}),Object(d.jsxs)("h3",{className:"match-winner",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(d.jsxs)("div",{className:"additional-details",children:[Object(d.jsx)("h3",{children:"First Inings"}),Object(d.jsx)("p",{children:c.team1}),Object(d.jsx)("h3",{children:"Second Inings"}),Object(d.jsx)("p",{children:c.team2}),Object(d.jsx)("h3",{children:"Man of the match"}),Object(d.jsx)("p",{children:c.playerOfMatch}),Object(d.jsx)("h3",{children:"Second Inings"}),Object(d.jsx)("p",{children:c.team2}),Object(d.jsx)("h3",{children:"Umpires"}),Object(d.jsxs)("p",{children:[c.umpire1," , ",c.umpire2," "]})]})]})},u=(c(35),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=t===c.team1?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsxs)(i.b,{to:n,children:[" ",a," "]})}),Object(d.jsxs)("p",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]})}),O=c(20),x=(c(36),function(){var e=Object(a.useState)({matches:[]}),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(j.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8080","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.teamName?Object(d.jsxs)("div",{className:"TeamPage",children:[Object(d.jsxs)("div",{className:"team-name-section",children:[Object(d.jsx)("h1",{children:Object(d.jsx)(i.b,{to:"/",children:"< Home"})}),Object(d.jsx)("h1",{className:"team-name",children:c.teamName})]}),Object(d.jsxs)("div",{className:"win-loss-section",children:[" Win/Losses",Object(d.jsx)(O.PieChart,{data:[{title:"Loss",value:c.totalMatches-c.totalWins,color:"#a34d5d"},{title:"Wins",value:c.totalWins,color:"#4da375"}]})]}),Object(d.jsxs)("div",{className:"match-detail-section",children:[Object(d.jsx)("h3",{children:"Latest Matches"}),Object(d.jsx)(b,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(d.jsx)(u,{teamName:c.teamName,match:e},e.id)})),Object(d.jsx)("div",{className:"more-link",children:Object(d.jsx)(i.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More >"})})]}):Object(d.jsx)("h1",{children:"Team Not Found"})}),f=(c(37),function(e){for(var t=e.teamName,c=e.currentYear,a=[],n="2008";n<"2020";n++)a.push(n);return Object(d.jsx)("ol",{className:"YearSelector",children:a.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:e===c?"currentYear":"",children:Object(d.jsx)(i.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})})})}))})}),p=(c(38),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(j.f)(),r=s.teamName,l=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8080","/team/").concat(r,"/matches/?year=").concat(l));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l,r]),Object(d.jsxs)("div",{className:"MatchPage",children:[Object(d.jsxs)("div",{className:"yearSelector",children:[Object(d.jsx)("div",{className:"back_btn",children:Object(d.jsx)(i.b,{to:"/teams/".concat(r),children:Object(d.jsx)("h1",{children:" < Back "})})}),Object(d.jsx)("h3",{children:"Select Year"}),Object(d.jsx)(f,{teamName:r,currentYear:l})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"page-heading",children:[r," matches in ",l]}),c.map((function(e){return Object(d.jsx)(b,{teamName:r,match:e},e.id)}))]})]})}),v=(c(39),function(e){var t=e.teamName;return Object(d.jsx)(i.b,{to:"/teams/".concat(t),children:Object(d.jsx)("div",{className:"TeamGrid",children:Object(d.jsx)("h1",{children:t})})})}),N=c.p+"static/media/ipl_logo.7cf43390.png",g=(c(40),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8080","/team"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"HomePage",children:[Object(d.jsxs)("div",{className:"header-section",children:[Object(d.jsx)("div",{className:"ipl_logo",children:Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("img",{className:"ipl_logo",src:N})})}),Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"app-name",children:"IPL Dashbord"})})]}),Object(d.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(d.jsx)(v,{teamName:e.teamName},e.id)}))})]})});var w=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/teams/:teamName/matches/:year",children:Object(d.jsx)(p,{})}),Object(d.jsx)(j.a,{path:"/teams/:teamName",children:Object(d.jsx)(x,{})}),Object(d.jsx)(j.a,{path:"/",children:Object(d.jsx)(g,{})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),M()}},[[41,1,2]]]);
//# sourceMappingURL=main.5390ffd2.chunk.js.map