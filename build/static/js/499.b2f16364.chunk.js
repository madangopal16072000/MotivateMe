"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[499],{499:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var s=n(791),r=n(880),u=n(152),o="Card_card__b+yjy",a=n(184),c=function(e){return(0,a.jsx)("div",{className:o,children:e.children})},i=n(556),l="QuoteForm_form__sksS3",d="QuoteForm_loading__SVpmm",f="QuoteForm_control__BcY4C",m="QuoteForm_actions__UfN5T",h=function(e){var t=(0,s.useState)(!1),n=(0,u.Z)(t,2),o=n[0],h=n[1],x=(0,s.useRef)(),_=(0,s.useRef)();return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(r.NL,{when:o,message:function(e){return"Are you sure, you want to leave? all your form data will be lost"}}),(0,a.jsx)(c,{children:(0,a.jsxs)("form",{onFocus:function(){h(!0)},className:l,onSubmit:function(t){t.preventDefault();var n=x.current.value,s=_.current.value;e.onAddQuote({author:n,text:s})},children:[e.isLoading&&(0,a.jsx)("div",{className:d,children:(0,a.jsx)(i.Z,{})}),(0,a.jsxs)("div",{className:f,children:[(0,a.jsx)("label",{htmlFor:"author",children:"Author"}),(0,a.jsx)("input",{type:"text",id:"author",ref:x})]}),(0,a.jsxs)("div",{className:f,children:[(0,a.jsx)("label",{htmlFor:"text",children:"Text"}),(0,a.jsx)("textarea",{id:"text",rows:"5",ref:_})]}),(0,a.jsx)("div",{className:m,children:(0,a.jsx)("button",{onClick:function(){h(!1)},className:"btn",children:"Add Quote"})})]})})]})},x=n(995),_=n(853),j=function(){var e=(0,x.Z)(_.KP),t=e.sendRequest,n=e.status,u=(0,r.k6)();(0,s.useEffect)((function(){"completed"===n&&u.push("/quotes")}),[n,u]);return(0,a.jsx)(h,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=499.b2f16364.chunk.js.map