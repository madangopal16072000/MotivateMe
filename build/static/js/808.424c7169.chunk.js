"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[808],{808:function(e,s,t){t.r(s),t.d(s,{default:function(){return _}});var n=t(791),c=t(880),r=t(523),i="QuoteItem_item__ARxr2",u=t(184),a=function(e){return(0,u.jsxs)("li",{className:i,children:[(0,u.jsxs)("figure",{children:[(0,u.jsx)("blockquote",{children:(0,u.jsx)("p",{children:e.text})}),(0,u.jsx)("figcaption",{children:e.author})]}),(0,u.jsx)(r.rU,{className:"btn",to:"/quotes/".concat(e.id,"/comments"),children:"View FullScreen"})]})},o="QuoteList_list__540Ja",d="QuoteList_sorting__I2AnC",l=function(e){var s,t,r=(0,c.k6)(),i=(0,c.TH)(),l="asc"===new URLSearchParams(i.search).get("sort"),h=(s=e.quotes,t=l,s.sort((function(e,s){return t?e.id>s.id?1:-1:e.id<s.id?1:-1})));return(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)("div",{className:d,children:(0,u.jsxs)("button",{onClick:function(){r.push({pathname:i.pathname,search:"?sort=".concat(l?"dsc":"asc")})},children:["Sort ",l?"Descending":"Ascending"]})}),(0,u.jsx)("ul",{className:o,children:h.map((function(e){return(0,u.jsx)(a,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=t(556),x=t(995),j=t(853),m="NoQuotesFound_noquotes__J3sXQ",f=function(){return(0,u.jsxs)("div",{className:m,children:[(0,u.jsx)("p",{children:"No quotes found!"}),(0,u.jsx)(r.rU,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},_=function(){var e=(0,x.Z)(j.Lf,!0),s=e.sendRequest,t=e.status,c=e.data,r=e.error;return(0,n.useEffect)((function(){s()}),[s]),"pending"===t?(0,u.jsx)("div",{className:"centered",children:(0,u.jsx)(h.Z,{})}):r?(0,u.jsx)("p",{className:"centered focussed",children:r}):"completed"!==t||c&&0!==c.length?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"All Quotes Page"}),(0,u.jsx)(l,{quotes:c})]}):(0,u.jsx)(f,{})}}}]);
//# sourceMappingURL=808.424c7169.chunk.js.map