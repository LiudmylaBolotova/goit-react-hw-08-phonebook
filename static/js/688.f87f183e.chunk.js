"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[688],{8688:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var r,o,i,u,c=t(2791),s=t(9434),a=t(6052),l=t(6351),h=t(5218),d=t(168),m=t(6444),f=m.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border: ",";\n  border-radius: ","px;\n  width: ","px;\n  margin-top: ","px;\n  background-color: ",";\n"])),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.formRound}),(function(n){return n.theme.sizes.width[5]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.twoBackgroundColor})),x=m.ZP.input(o||(o=(0,d.Z)(["\n  border: ",";\n  border-radius: ","px;\n  color: ",";\n\n  width: ","px;\n  height: ","px;\n\n  :active,\n  :hover,\n  :focus {\n    outline: none;\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.width[3]}),(function(n){return n.theme.sizes.height[1]}),(function(n){return n.theme.colors.text})),p=m.ZP.h2(i||(i=(0,d.Z)(["\n  font-size: ","px;\n  margin: ","px;\n"])),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.space[3]})),b=m.ZP.button(u||(u=(0,d.Z)(["\n  width: ","px;\n  height: ","px;\n\n  border: ",";\n  border-radius: ","px;\n\n  margin-top: ","px;\n  margin-bottom: ","px;\n\n  cursor: pointer;\n\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n\n  transition: ",";\n  :hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.sizes.width[1]}),(function(n){return n.theme.sizes.height[0]}),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.btnRound}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontWeights.middle}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.transitionBtn}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.twoTextColor})),g=t(184);var w,v,j,Z,z,C=function(){var n=(0,s.I0)(),e=(0,s.v9)(l.K2);return(0,g.jsx)("div",{children:(0,g.jsxs)(f,{onSubmit:function(t){t.preventDefault();var r=t.currentTarget,o=r.elements.name.value,i=r.elements.number.value;return e.find((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?h.ZP.error("".concat(o," is already on the list!")):e.find((function(n){return n.number.toLowerCase()===i.toLowerCase()}))?h.ZP.error("".concat(i," is already on the list!")):o||i?(n(a.uK({name:o,number:i})),void r.reset()):h.ZP.error("Enter name and number!")},children:[(0,g.jsx)(p,{children:"Name"}),(0,g.jsx)("label",{children:(0,g.jsx)(x,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,g.jsx)(p,{children:"Number"}),(0,g.jsx)("label",{children:(0,g.jsx)(x,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,g.jsx)(b,{type:"submit",children:"Add contact"})]})})},y=t(9439),k=t(4164),P=m.ZP.div(w||(w=(0,d.Z)(["\n   position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(141, 141, 137, 0.107);\n \n\n"]))),S=m.ZP.div(v||(v=(0,d.Z)(["\n  background-color: aliceblue;\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),B=document.querySelector("#modal-root");function T(n){n.onClose;var e=n.children;return(0,k.createPortal)((0,g.jsx)(P,{children:(0,g.jsx)(S,{children:e})}),B)}var _,A,L,N,R=m.ZP.button(j||(j=(0,d.Z)(["\n  width: ","px;\n  height: ","px;\n\n  border: ",";\n  border-radius: ","px;\n  margin-top: ","px;\n  cursor: pointer;\n\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n\n  transition: ",";\n  :hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.sizes.width[0]}),(function(n){return n.theme.sizes.height[0]}),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.btnRound}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontWeights.middle}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.transitionBtn}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.twoTextColor})),K=m.ZP.li(Z||(Z=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  border: ",";\n  padding: ","px;\n  margin-top: ","px;\n  background-color: ",";\n  border-radius: ","px;\n"])),(function(n){return n.theme.borders.superSmall}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.radii.round})),D=m.ZP.li(z||(z=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),F=t(9273),I=m.ZP.form(_||(_=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border: ",";\n  border-radius: ","px;\n  width: ","px;\n  background-color: ",";\n"])),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.formRound}),(function(n){return n.theme.sizes.width[4]}),(function(n){return n.theme.colors.twoBackgroundColor})),W=m.ZP.input(A||(A=(0,d.Z)(["\n  border: ",";\n  border-radius: ","px;\n  color: ",";\n\n  width: ","px;\n  height: ","px;\n\n  :active,\n  :hover,\n  :focus {\n    outline: none;\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.width[3]}),(function(n){return n.theme.sizes.height[1]}),(function(n){return n.theme.colors.text})),q=m.ZP.h2(L||(L=(0,d.Z)(["\n  font-size: ","px;\n  margin: ","px;\n"])),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.space[3]})),U=m.ZP.button(N||(N=(0,d.Z)(["\n  width: ","px;\n  height: ","px;\n\n  border: ",";\n  border-radius: ","px;\n\n  margin-top: ","px;\n  margin-bottom: ","px;\n\n  cursor: pointer;\n\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n\n  transition: ",";\n  :hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.sizes.width[1]}),(function(n){return n.theme.sizes.height[0]}),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.btnRound}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontWeights.middle}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.transitionBtn}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.twoTextColor}));var E,G,J,M=function(n){var e=n.onClose,t=n.activeContact,r=(0,s.I0)();return(0,g.jsx)("div",{children:(0,g.jsxs)(I,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,o=e.elements.name.value,i=e.elements.number.value;r(a.Tk(t.id,{name:o,number:i}))},children:[(0,g.jsx)("button",{onClick:function(n){n.target===n.currentTarget&&e()},children:"Close"}),(0,g.jsx)(q,{children:"New name"}),(0,g.jsx)("label",{children:(0,g.jsx)(W,{type:"text",name:"name"})}),(0,g.jsx)(q,{children:"New number"}),(0,g.jsx)("label",{children:(0,g.jsx)(W,{type:"tel",name:"number"})}),(0,g.jsx)(U,{type:"submit",children:"Update"})]})})},O=function(){var n=(0,s.I0)(),e=(0,s.v9)(l.K2),t=(0,s.v9)(l.zK),r=(0,c.useState)(!1),o=(0,y.Z)(r,2),i=o[0],u=o[1],h=(0,c.useState)(0),d=(0,y.Z)(h,2),m=d[0],f=d[1],x=e.find((function(n){return n.id===m})),p=function(){u(!i)},b=function(n){"BUTTON"===n.target.nodeName&&u(!0)};(0,c.useEffect)((function(){var e=new AbortController;return n(a.yF(),{signal:e.signal}),function(){e.abort()}}),[n]);var w=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,g.jsx)(g.Fragment,{children:w.length>0?w.map((function(e){var t=e.name,r=e.number,o=e.id;return(0,g.jsxs)(K,{onClick:function(){return function(n){f(n)}(o)},children:[(0,g.jsx)(F.ZP,{color:F.ZP.getRandomColor("sitebase",["LightSeaGreen","BlueViolet","DeepSkyBlue"]),name:t,round:!0}),t,": ",r,(0,g.jsx)(R,{type:"submit",onClick:b,children:"Update"}),(0,g.jsx)(R,{type:"submit",onClick:function(){n(a.GK(o))},children:"Delete"}),i&&(0,g.jsx)(T,{onClose:p,children:(0,g.jsx)(M,{activeContact:x,onClose:p})})]},o)})):(0,g.jsx)(D,{children:(0,g.jsx)("p",{children:"Your contacts will be displayed here"})})})},V=m.ZP.ul(E||(E=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  border: ",";\n  border-radius: ","px;\n  color: ",";\n\n  width: ","px;\n  padding: 10px;\n  background-color: ",";\n"])),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.width[5]}),(function(n){return n.theme.colors.twoBackgroundColor})),Y=function(){return(0,g.jsx)(V,{children:(0,g.jsx)(O,{})})},$=t(4808),H=m.ZP.input(G||(G=(0,d.Z)(["\n  border: ",";\n  border-radius: ","px;\n  color: ",";\n\n  width: ","px;\n  height: ","px;\n\n  :active,\n  :hover,\n  :focus {\n    outline: none;\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.width[3]}),(function(n){return n.theme.sizes.height[1]}),(function(n){return n.theme.colors.text})),Q=m.ZP.button(J||(J=(0,d.Z)(["\n  display: inline-block;\n  width: ","px;\n  height: ","px;\n  border: ",";\n  border-radius: ","px;\n\n  margin-top: ","px;\n  margin-bottom: ","px;\n\n  cursor: pointer;\n\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n\n  transition: ",";\n  :hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.sizes.width[0]}),(function(n){return n.theme.sizes.height[1]}),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontWeights.middle}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.transitionBtn}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.twoTextColor})),X=function(){var n=(0,c.useRef)(null),e=(0,s.I0)(),t=(0,s.v9)(l.zK);return(0,g.jsxs)("div",{children:[(0,g.jsx)(H,{type:"text",name:"filter",value:t,onChange:function(n){var t=n.target.value.trim();e((0,$.T)(t))},ref:n}),(0,g.jsx)(Q,{type:"button",onClick:function(){n.current.value=""},children:"Clear"})]})},nn=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(C,{}),(0,g.jsx)(X,{}),(0,g.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=688.f87f183e.chunk.js.map