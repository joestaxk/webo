"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7850],{77850:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(67349),o=n(57251),s=n(89927),a=n.n(s),i=n(30812),c=n(66542),l=n(24614),u=n(45973),d=n(27730),f=function(){return(0,d.jsxs)("svg",{width:21,height:20,viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M14.1854 16.1905C14.1854 18.2944 12.4798 20 10.3758 20C8.2719 20 6.56631 18.2944 6.56631 16.1905C6.56631 14.0865 8.2719 12.381 10.3758 12.381C12.4798 12.381 14.1854 14.0865 14.1854 16.1905Z",fill:"#EDF2F7"}),(0,d.jsx)("path",{d:"M17.5962 6.64364C17.2832 2.88844 14.1441 0 10.3759 0V0C6.60764 0 3.46849 2.88844 3.15555 6.64364L2.90405 9.66168C2.80718 10.8241 2.44472 11.9487 1.8446 12.9489L1.0474 14.2776C0.372866 15.4018 0.746216 16.5579 2.04461 16.7397C3.55482 16.9511 6.10246 17.1429 10.3759 17.1429C14.6493 17.1429 17.1969 16.9511 18.7071 16.7397C20.0055 16.5579 20.3788 15.4018 19.7043 14.2776L18.9071 12.9489C18.307 11.9487 17.9445 10.8241 17.8477 9.66168L17.5962 6.64364Z",fill:"#718096"}),(0,d.jsx)("path",{d:"M17.9949 2.85714C17.9949 4.4351 16.7157 5.71429 15.1378 5.71429C13.5598 5.71429 12.2806 4.4351 12.2806 2.85714C12.2806 1.27919 13.5598 0 15.1378 0C16.7157 0 17.9949 1.27919 17.9949 2.85714Z",fill:"#A0AEC0",fillOpacity:.9})]})},p=n(20484),x=n(53251),v=n.n(x),h=n(65396),m=n(67996),b=n(63487),g=n.n(b),w=n(92738),j=n(56575),y=n(74657);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){(0,p.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var N=function(e){var t,n=e.notif,r=e.markAsSeen,o=v()({"flex flex-col w-full cursor-pointer":!0,"text-xs text-bone-900 dark:text-bone-200 font-700":n.unread,"text-xs text-bone-700 dark:text-bone-500 font-600":!n.unread}),s=v()({"hover:text-azureblue dark:hover:text-cyan":!0}),a=v()({"text-xs font-400":!0,"text-bone-700 dark:text-bone-500":n.unread,"text-bone-600 dark:text-bone-600":!n.unread}),i="";return["TRADE_STATUS","TRADE_MSG"].includes(n.event)&&(i="/contract/".concat(n.metadata.trade_uuid,"/")),"DIRECT_MSG"==n.event&&(i="/dm/".concat(n.metadata.room_uuid,"/")),"SWAP"==n.event&&(i="/my-swaps/past-swaps"),"REFERRAL"==n.event&&(i="/referral"),"ACCOUNT"==n.event&&(i="/preferences/security"),"PROMO"==n.event&&(i=null!==(t=n.metadata)&&void 0!==t&&t.url?n.metadata.url:"https://spendcrypto.io/?utm_source=localcoinswap&utm_content=notifs"),(0,d.jsx)(g(),{href:i,prefetch:!1,className:"flex flow-row items-center",onClick:function(){n.unread&&r(n.id),e.setIsOpen(!1)},target:"PROMO"==n.event?"_blank":"",children:(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("div",{className:s,children:n.title}),(0,d.jsx)("div",{className:a,children:n.description}),(0,d.jsx)("div",{className:"text-xs font-400 text-bone-500 dark:text-bone-700",children:n.since})]})})},C=function(){return(0,d.jsx)("div",{className:"bg-white dark:bg-ocean-800 rounded-lg w-full animate-pulse",style:{height:"80px"}})},_=function(e){var t,n,s,f,p,x,v=i.useRef(),b=(0,w.Z)(y),g=(0,o.Z)(b,1)[0],k=(0,m.Z)("unauth-common").t,_=(0,j.Z)(),E=(0,l.a)(),Z=E.authData,D=E.refreshUserData,S=(0,u.q)(),A=S.notifs,P=S.fetchUserNotifs,R=S.fetchMoreNotifs,L=function(t){var n,r=(null==v?void 0:v.current)||null;!r||r.contains(t.target)||null!==(n=e.bell)&&void 0!==n&&n.current.contains(t.target)||e.setIsOpen(!1)};i.useEffect(function(){return document.addEventListener("mousedown",L),function(){document.removeEventListener("mousedown",L)}},[]);var M=i.useState({response:void 0,status:"",errors:void 0}),T=(0,o.Z)(M,2),I=T[0],U=T[1],F=null===(s=A.data)||void 0===s?void 0:null===(f=s.results)||void 0===f?void 0:f.map(function(t){return(0,d.jsx)(N,{notif:t,setIsOpen:e.setIsOpen,markAsSeen:function(e){return z(e)}},t.id)}),z=(t=(0,r.Z)(a().mark(function e(t){var n;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="/api/v2/notifs/read/".concat(t,"/"),e.next=3,(0,c.jB)(n,{});case 3:e.sent.ok&&P();case 5:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),B=(n=(0,r.Z)(a().mark(function e(t){var n,r,o,s;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return U(function(e){return O(O({},e),{},{status:"loading",errors:void 0})}),n={sound_notifications:t},e.next=5,(0,c.fv)("/api/rest-auth/user/",n);case 5:if(!(r=e.sent).ok){e.next=15;break}return e.next=9,r.json();case 9:if(o=e.sent,U(function(e){return O(O({},e),{},{data:o,status:"success",errors:void 0})}),t){_.success(k("weWillNotifyYouForNewTrades"));try{g()}catch(e){console.log(e)}}else _.error(k("doNotDisturbModeActivated"));D(),e.next=19;break;case 15:return e.next=17,r.json();case 17:s=e.sent,U(function(e){return O(O({},e),{},{status:"error",errors:s})});case 19:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)});return(0,d.jsx)(h.ww.div,{initial:!1,animate:e.isNotifListOpen?"open":"closed",variants:{closed:{visibility:"hidden",opacity:0,y:-20},open:{visibility:"visible",opacity:1,transition:{delay:.1},y:0}},className:"z-50 origin-top-right fixed top-12 left-0 right-0 w-full mx-auto mt-2 rounded-md shadow-lg lg:origin-top lg:absolute lg:right-0 lg:top-auto lg:left-auto lg:w-96 lg:mt-3",ref:v,children:(0,d.jsxs)("div",{className:"rounded-lg bg-white dark:bg-ocean-900 border border-bone-300 dark:border-ocean-700 drop-shadow-2xl p-3 max-h-96 overflow-y-auto backdrop-filter backdrop-blur-lg",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",onScroll:function(e){var t=e.target.scrollHeight-e.target.offsetHeight-e.target.scrollTop;t>0&&t<50&&R()},children:[(0,d.jsx)("div",{className:"flex flow-row items-center justify-between gap-1",children:(0,d.jsxs)("div",{className:"text-sm font-600 text-bone-600 dark:text-bone-500",children:[(0,d.jsx)("span",{children:k("notifications")}),(null===(p=Z.data)||void 0===p?void 0:p.sound_notifications)=="True"||(null===(x=Z.data)||void 0===x?void 0:x.sound_notifications)==!0?(0,d.jsx)("i",{className:"lcs-icon volume-up cursor-pointer text-xl text-azureblue dark:text-cyan",onClick:function(){return B(!1)},children:""}):(0,d.jsx)("i",{className:"lcs-icon icon-volume-off cursor-pointer text-xl text-cherry",onClick:function(){return B(!0)},children:""}),"loading"==I.status&&(0,d.jsx)("i",{className:"lcs-icon icon-spin4 animate-spin mr-2 text-bone-500",children:""})]})}),(0,d.jsxs)("div",{className:"flex flex-col gap-y-5 mt-4",children:[F,"loading"==A.status&&(0,d.jsx)(C,{})]})]})})},E=function(){var e,t,n=i.useState(!1),s=(0,o.Z)(n,2),p=s[0],x=s[1],v=i.useRef(),h=(0,u.q)(),m=h.notifs,b=h.fetchUserNotifs,g=(0,l.a)().authData,w=(e=(0,r.Z)(a().mark(function e(){var t;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,(0,c.jB)("/api/v2/notifs/seen/",{});case 3:if(!(t=e.sent).ok){e.next=8;break}return e.next=7,t.json();case 7:b();case 8:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)});return g.loggedIn?(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsxs)("button",{onClick:function(){var e;(null===(e=m.data)||void 0===e?void 0:e.unseen_count)>0&&w(),p?x(!1):x(!0)},className:"flex overflow-hidden text-bone-300 duration-300 transition ease-out focus:outline-none lg:mt-1 mr-6 mt-px lg:mr-2",children:[(0,d.jsx)("div",{ref:v,className:"duration-300 transition ease-out opacity-70 hover:opacity-100",children:(0,d.jsx)(f,{})}),(null===(t=m.data)||void 0===t?void 0:t.unseen_count)>0&&(0,d.jsx)("span",{className:"absolute -top-1 lg:-top-0 left-3 px-1 text-xs w-3 h-3 rounded-full bg-cherry font-600"})]}),(0,d.jsx)(_,{bell:v,isNotifListOpen:p,setIsOpen:x})]}):null}}}]);