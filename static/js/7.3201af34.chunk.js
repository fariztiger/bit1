(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{703:function(e,t,n){"use strict";var c=n(4),r=n.n(c),a=n(17),i=n(25),s=n(0),o=n(23),j=n(13),b=n.n(j),u=n(53),l=n(70);t.a=function(){var e=Object(s.useState)(new b.a(0)),t=Object(i.a)(e,2),n=t[0],c=t[1],j=Object(u.a)().slowRefresh,O=Object(l.e)();return Object(s.useEffect)((function(){(function(){var e=Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.methods.userBalanceInPancake(Object(o.j)()).call();case 2:t=e.sent,c(new b.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j,O]),n}},704:function(e,t,n){"use strict";n.d(t,"b",(function(){return x}));var c=n(131),r=n(4),a=n.n(r),i=n(17),s=n(0),o=n(40),j=n(99),b=n(93),u=n(216),l=n(48),O=n(23),d=n(42),p=n(70),x=function(e){var t=Object(o.c)().account,n=Object(p.b)(),r=Object(p.d)(),j=Object(l.k)();return{onReward:Object(s.useCallback)(Object(i.a)(a.a.mark((function i(){var s,o,b;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.methods.getReferrer(t).call();case 2:return s=a.sent,o=s!==d.v?s:null!==j&&void 0!==j?j:Object(O.e)(),b=e.reduce((function(e,r){return[].concat(Object(c.a)(e),[Object(u.f)(n,r,t,o)])}),[]),a.abrupt("return",Promise.all(b));case 6:case"end":return a.stop()}}),i)}))),[t,e,n,r,j])}};t.a=function(e){var t=Object(j.b)(),n=Object(o.c)().account,c=Object(l.l)().toastSuccess,r=Object(p.b)(),x=Object(p.d)(),h=Object(l.k)();return{onReward:Object(s.useCallback)(Object(i.a)(a.a.mark((function i(){var s,o,j;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,x.methods.getReferrer(n).call();case 3:return s=a.sent,o=s!==d.v?s:null!==h&&void 0!==h?h:Object(O.e)(),a.next=7,Object(u.f)(r,e,n,o);case 7:return j=a.sent,t(Object(b.c)(n)),c("Transaction Verified","See your transactions on wallet"),a.abrupt("return",j);case 13:return a.prev=13,a.t0=a.catch(0),a.abrupt("return",!1);case 16:case"end":return a.stop()}}),i,null,[[0,13]])}))),[e,n,t,r,x,c,h])}}},929:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ye}));var c,r,a,i,s,o,j,b,u,l,O,d,p,x,h,m=n(22),f=n(0),g=n(8),v=n(922),w=n(6),k=n(219),S=n(63),y=n(218),z=n(2),L=Object(g.e)(w.i)(c||(c=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),R=g.e.div(r||(r=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),B=function(e){var t=e.totalSupply,n=e.burned,c=e.circu,r=e.tokenBlock,a=e.isMobile,i=t.gt(0)?Object(S.a)(t):0,s=n.gt(0)?Object(S.a)(n):0,o=t.gt(0)?Object(S.a)(t.minus(n).minus(c)):0;return Object(z.jsx)(L,{children:Object(z.jsxs)(w.j,{children:[Object(z.jsx)(w.p,{size:a?"lg":"xl",mb:"16px",children:"Bitfarm Stats"}),Object(z.jsxs)(R,{children:[Object(z.jsx)(w.L,{fontSize:"14px",children:"Total Supply"}),Object(z.jsx)(y.a,{fontSize:"14px",value:i})]}),Object(z.jsxs)(R,{children:[Object(z.jsx)(w.L,{fontSize:"14px",children:"Circulation Supply"}),Object(z.jsx)(y.a,{fontSize:"14px",value:o})]}),Object(z.jsxs)(R,{children:[Object(z.jsx)(w.L,{fontSize:"14px",children:"Total Burned"}),Object(z.jsx)(y.a,{fontSize:"14px",decimals:0,value:s})]}),Object(z.jsxs)(R,{children:[Object(z.jsx)(w.L,{fontSize:"14px",children:"Bitfarm/Block"}),Object(z.jsx)(y.a,{fontSize:"14px",decimals:0,value:r})]}),Object(z.jsxs)(R,{children:[Object(z.jsx)(w.L,{fontSize:"14px",children:"Transfer Tax"}),Object(z.jsx)(w.L,{bold:!0,fontSize:"14px",children:"5%"})]})]})})},H=n(13),M=n.n(H),C=Object(g.e)(w.i)(a||(a=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),T=function(e){var t=e.totalLiq,n=e.isMobile,c=e.tradeActive,r=t.gt(0)&&c?t:new M.a(0);return Object(z.jsx)(C,{children:Object(z.jsxs)(w.j,{children:[Object(z.jsx)(w.p,{size:n?"lg":"xl",mb:"16px",children:"Total Value Locked (TVL)"}),Object(z.jsx)(w.p,{size:"xl",children:"$".concat(Object(S.c)(r,3))}),Object(z.jsx)(w.L,{color:"textSubtle",children:"Across all Farms and Buyback Pool"})]})})},A=n(38),N=n(99),I=n(158),U=n(42),F=n(98),P=n(144),Q=n(23),E=n(48),q=n(102),V=n(703),W=n(229),D=Object(g.e)(w.i)(i||(i=Object(m.a)(["\n  background-repeat: no-repeat;\n  background-position: 100% center;\n  background-size: 100px;\n  min-height: 130px;\n"]))),J=g.e.a(s||(s=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n"]))),$=g.e.img(o||(o=Object(m.a)(["\n  margin-right: 10px;\n"]))),_=function(e){var t=e.imageBg,n=e.image,c=e.title,r=e.href;e.isMobile;return Object(z.jsx)(D,{className:"cursor-pointer-big",style:{backgroundImage:"url('/images/".concat(t,"')")},children:Object(z.jsx)(J,{target:"_blank",href:r,children:Object(z.jsxs)(w.o,{minHeight:"130px",height:"100%",alignItems:"center",px:"0.5rem",py:"0.5rem",children:[Object(z.jsx)($,{src:"/images/".concat(n),alt:"logo",width:64,height:64}),Object(z.jsx)(w.L,{bold:!0,textAlign:"center",fontSize:"26px",children:c})]})})})},K=n(4),G=n.n(K),X=n(17),Y=n(25),Z=n(40),ee=n(704),te=n(12),ne=n(57),ce=n(73),re=n(227),ae=n(53),ie=function(){var e=Object(f.useState)([]),t=Object(Y.a)(e,2),n=t[0],c=t[1],r=Object(Z.c)().account,a=Object(ae.a)().fastRefresh;return Object(f.useEffect)((function(){r&&function(){var e=Object(X.a)(G.a.mark((function e(){var t,n,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=re.a.filter((function(e){return e.isActive})).map((function(e){return{address:Object(Q.g)(),name:"pendingMoon",params:[e.pid,r]}})),e.next=3,Object(ne.a)(ce,t);case 3:n=e.sent,a=re.a.map((function(e,t){return Object(te.a)(Object(te.a)({},e),{},{balance:new M.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},se=n(141),oe=n(161),je=n(26),be=n(133),ue=function(){var e=Object(f.useState)([]),t=Object(Y.a)(e,2),n=t[0],c=t[1],r=Object(Z.c)().account,a=Object(ae.a)().fastRefresh;return Object(f.useEffect)((function(){r&&function(){var e=Object(X.a)(G.a.mark((function e(){var t,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=re.a.filter((function(e){return e.isActive})).map((function(e){return{address:Object(Q.g)(),name:"pendingMoon",params:[e.pid,r]}})),e.next=3,Object(ne.a)(ce,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},le=function(e){return Object(z.jsx)(y.a,Object(te.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))},Oe=g.e.div(j||(j=Object(m.a)(["\n  margin-bottom: 24px;\n"]))),de=function(){var e=Object(Z.c)().account,t=ue().reduce((function(e,t){return e+new M.a(t).div(new M.a(10).pow(18)).toNumber()}),0),n=new M.a(t).multipliedBy(Object(E.j)()).toNumber();return e?Object(z.jsxs)(Oe,{children:[Object(z.jsx)(y.a,{value:t,lineHeight:"1"}),Object(z.jsx)(le,{value:n})]}):Object(z.jsx)(w.L,{color:"textDisabled",style:{lineHeight:"76px"},children:"Locked"})},pe=function(){var e=Object(F.a)(),t=Object(P.a)(Object(Q.j)(),e),n=Object(E.j)(),c=new H.BigNumber(Object(S.a)(t)).multipliedBy(n).toNumber();return Object(Z.c)().account?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(y.a,{value:Object(S.a)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.eq(0)?Object(z.jsx)("br",{}):Object(z.jsx)(le,{value:c})]}):Object(z.jsx)(w.L,{color:"textDisabled",style:{lineHeight:"46px"},children:"Locked"})},xe=Object(g.e)(w.i)(b||(b=Object(m.a)(["\n  background-image: url('/images/logo-bg.png');\n  background-repeat: no-repeat;\n  background-position: 95% 10%;\n  background-size: 150px;\n  height: 100%;\n"]))),he=g.e.img(u||(u=Object(m.a)(["\n  margin-bottom: 8px;\n"]))),me=g.e.div(l||(l=Object(m.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),fe=g.e.div(O||(O=Object(m.a)(["\n  margin-top: 12px;\n"]))),ge=function(e){var t=e.isMobile,n=Object(f.useState)(!1),c=Object(Y.a)(n,2),r=c[0],a=c[1],i=Object(Z.c)().account,s=ie().filter((function(e){return e.balance.toNumber()>0})),o=Object(ee.b)(s.map((function(e){return e.pid}))).onReward,j=Object(f.useCallback)(Object(X.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,o();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,a(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[o]);return Object(z.jsx)(xe,{children:Object(z.jsxs)(w.j,{children:[Object(z.jsxs)(w.p,{size:"xl",mb:"12px",children:["Farms",Object(z.jsx)(w.K,{ml:"12px",variant:"success",outline:!t,startIcon:Object(z.jsx)(w.O,{color:"secondary"}),children:Object(z.jsx)(w.L,{color:t?"white":"success",bold:!0,fontSize:"14px",children:" No Tax Fee "})})]}),Object(z.jsx)(w.o,{alignItems:"center",children:Object(z.jsx)(he,{src:"/images/logo.png",alt:"logo",width:64,height:64})}),Object(z.jsxs)(w.o,{mt:"8px",justifyContent:"space-between",alignItems:"flex-end",children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(me,{children:"Bitfarm to Harvest:"}),Object(z.jsx)(de,{})]}),Object(z.jsxs)(w.g,{minWidth:t?void 0:"180px",onClick:function(){return Object(oe.a)(Object(Q.j)(),je.a.rbk.symbol,je.a.rbk.decimals,U.p)},variant:"primary",scale:"sm",children:[Object(z.jsx)(w.a,{width:"20px",color:"white"})," ",t?"":"Add Bitfarm to","  ",Object(z.jsx)(w.y,{ml:"8px"})]})]}),Object(z.jsxs)(w.o,{mt:"8px",justifyContent:"space-between",alignItems:"start",children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(me,{children:"Bitfarm in Wallet:"}),Object(z.jsx)(pe,{})]}),Object(z.jsxs)(w.g,{minWidth:t?void 0:"180px",onClick:function(){return window.open("".concat(U.f,"/").concat(Object(Q.j)()),"_blank")},variant:"primary",scale:"sm",children:[t?Object(be.b)(Object(Q.j)()):Object(be.a)(Object(Q.j)()),"  ",Object(z.jsx)(w.C,{ml:"4px",width:"20px",color:"white"})]})]}),Object(z.jsx)(fe,{children:i?Object(z.jsx)(w.g,{disabled:s.length<=0||r,onClick:j,width:"100%",children:r?"Collecting Bitfarm":"Harvest all (".concat(s.length,")")}):Object(z.jsx)(se.a,{width:"100%"})})]})})},ve=Object(g.e)(w.c)(d||(d=Object(m.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),we=Object(g.e)(w.c)(p||(p=Object(m.a)(["\n  align-items: start;\n  justify-content: center;\n\n  & > div {\n    grid-column: span 12;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ke=Object(g.e)(w.c)(x||(x=Object(m.a)(["\n  align-items: start;\n  justify-content: center;\n  margin-bottom: 24px;\n\n  \n  & > div {\n\n    grid-column: span 12;\n  }\n\n  "," {\n\n\n    & > div {\n      height: 100%;\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n\n    & > div {\n      height: 100%;\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Se=Object(g.e)(w.i)(h||(h=Object(m.a)(["\n  padding: 20px;\n  min-height: 400px;\n"]))),ye=function(){var e=Object(F.a)(),t=Object(N.b)(),n=Object(E.e)(),c=Object(E.h)().pancakeswap,r=Object(E.j)(),a=Object(V.a)(),i=Object(A.f)().search,s=Object(W.a)(e).tradeActive,o=new URLSearchParams(i).get("ref"),j=new URLSearchParams(i).get("saleRef"),b=Object(P.e)(e),u=Object(P.c)(Object(Q.j)(),e),l=Object(P.d)(Object(Q.j)(),e),O=Object(q.a)().width<1e3,d=a.div(new M.a(10).pow(18)),p=n.plus(r.times(d));return Object(f.useEffect)((function(){e.current&&(t(Object(I.b)({ref:o})),U.r.test(j)&&localStorage.setItem("saleRef",j))}),[t,o,j,e]),Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(k.a,{children:Object(z.jsxs)("div",{children:[Object(z.jsxs)(ke,{children:[Object(z.jsx)(ge,{isMobile:O}),Object(z.jsxs)(Se,{children:[Object(z.jsx)(w.p,{as:"h1",size:"xl",color:"text",children:"Announcements"}),Object(z.jsx)(v.a,{sourceType:"profile",id:"BitfarmTwitter",screenName:"BitfarmBSC",options:{height:300},noHeader:!0,noFooter:!0,noBorders:!0,noScrollbar:!0})]})]}),Object(z.jsxs)(ve,{children:[Object(z.jsx)(B,{isMobile:O,totalSupply:b,burned:u,circu:l,tokenBlock:c.tokenBlock}),Object(z.jsx)(T,{tradeActive:s,isMobile:O,totalLiq:p})]}),Object(z.jsxs)(we,{children:[Object(z.jsx)(_,{imageBg:"custom-bg.png",image:"custom.png",title:"Automatic LP",href:U.a,isMobile:O}),Object(z.jsx)(_,{imageBg:"custom-bg2.png",image:"custom2.png",title:"Harvest Lockup",href:U.n,isMobile:O}),Object(z.jsx)(_,{imageBg:"custom-bg3.png",image:"custom3.png",title:"Token Buyback",href:U.j,isMobile:O})]})]})})})}}}]);
