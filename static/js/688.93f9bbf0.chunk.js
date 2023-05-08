"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[688],{8688:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var r,o,i,u,c=t(2791),s=t(9434),l=t(6052),h=t(6351),a=t(5218),d=t(168),f=t(6444),m=f.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border: ",";\n  border-radius: ","px;\n  width: ","px;\n  margin-top: ","px;\n  background-color: ",";\n"])),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.formRound}),(function(n){return n.theme.sizes.width[5]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.twoBackgroundColor})),x=f.ZP.input(o||(o=(0,d.Z)(["\n  border: ",";\n  border-radius: ","px;\n  color: ",";\n\n  width: ","px;\n  height: ","px;\n\n  :active,\n  :hover,\n  :focus {\n    outline: none;\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.width[3]}),(function(n){return n.theme.sizes.height[1]}),(function(n){return n.theme.colors.text})),p=f.ZP.h2(i||(i=(0,d.Z)(["\n  font-size: ","px;\n  margin: ","px;\n"])),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.space[3]})),b=f.ZP.button(u||(u=(0,d.Z)(["\n  width: ","px;\n  height: ","px;\n\n  border: ",";\n  border-radius: ","px;\n\n  margin-top: ","px;\n  margin-bottom: ","px;\n\n  cursor: pointer;\n\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n\n  transition: ",";\n  :hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.sizes.width[1]}),(function(n){return n.theme.sizes.height[0]}),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.btnRound}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontWeights.middle}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.transitionBtn}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.twoTextColor})),g=t(184);var w,v,j,Z,z,C,y,k,P,S=function(){var n=(0,s.I0)(),e=(0,s.v9)(h.K2);return(0,g.jsx)("div",{children:(0,g.jsxs)(m,{onSubmit:function(t){t.preventDefault();var r=t.currentTarget,o=r.elements.name.value,i=r.elements.number.value;return e.find((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?a.ZP.error("".concat(o," is already on the list!")):e.find((function(n){return n.number.toLowerCase()===i.toLowerCase()}))?a.ZP.error("".concat(i," is already on the list!")):o||i?(n(l.uK({name:o,number:i})),void r.reset()):a.ZP.error("Enter name and number!")},children:[(0,g.jsx)(p,{children:"Name"}),(0,g.jsx)("label",{children:(0,g.jsx)(x,{type:"text",name:"name"})}),(0,g.jsx)(p,{children:"Number"}),(0,g.jsx)("label",{children:(0,g.jsx)(x,{type:"tel",name:"number"})}),(0,g.jsx)(b,{type:"submit",children:"Add contact"})]})})},B=t(9439),T=t(4164),L=t(2134),N=f.ZP.div(w||(w=(0,d.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(138, 138, 135, 0.26);\n"]))),_=f.ZP.div(v||(v=(0,d.Z)(["\n  background-color: aliceblue;\n  max-width: calc(100vw - 30px);\n  max-height: calc(100vh - 20px);\n  border-radius: ","px;\n"])),(function(n){return n.theme.radii.round})),K=(0,f.ZP)(L.SV5)(j||(j=(0,d.Z)(["\n  width: ","px;\n  height: ","px;\n  color: ",";\n  display: block;\n  position: absolute;\n  bottom: 73%;\n  left: 62%;\n  z-index: 333;\n  cursor: pointer;\n"])),(function(n){return n.theme.sizes.width[0]}),(function(n){return n.theme.sizes.height[0]}),(function(n){return n.theme.colors.accent})),R=document.querySelector("#modal-root");function D(n){var e=n.onClose,t=n.children;return(0,T.createPortal)((0,g.jsxs)(N,{children:[(0,g.jsx)(K,{onClick:function(n){n.target===n.currentTarget&&e()},children:"Close"}),(0,g.jsx)(_,{children:t})]}),R)}var I,W,F,V,A=f.ZP.li(Z||(Z=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  border: ",";\n  padding: ","px;\n  margin-top: ","px;\n  background-color: ",";\n  border-radius: ","px;\n"])),(function(n){return n.theme.borders.superSmall}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.radii.round})),E=f.ZP.ul(z||(z=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n"]))),G=f.ZP.li(C||(C=(0,d.Z)(["\n  display: flex;\n  justify-content: start;\n  width: ","px;\n\n  &:not(:last-child) {\n    margin-bottom: ","px;\n  }\n  border-bottom: ",";\n"])),(function(n){return n.theme.sizes.width[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.borders.dottedLine})),U=f.ZP.ul(y||(y=(0,d.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),q=f.ZP.button(k||(k=(0,d.Z)(["\n  width: ","px;\n  height: ","px;\n\n  border: ",";\n  border-radius: ","px;\n  margin-top: ","px;\n  cursor: pointer;\n\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n\n  transition: ",";\n  :hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.sizes.width[0]}),(function(n){return n.theme.sizes.height[0]}),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.btnRound}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontWeights.middle}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.transitionBtn}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.twoTextColor})),O=f.ZP.li(P||(P=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Y=t(9273),$=f.ZP.form(I||(I=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border: ",";\n  border-radius: ","px;\n  width: ","px;\n  background-color: ",";\n"])),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.formRound}),(function(n){return n.theme.sizes.width[4]}),(function(n){return n.theme.colors.twoBackgroundColor})),H=f.ZP.input(W||(W=(0,d.Z)(["\n  border: ",";\n  border-radius: ","px;\n  color: ",";\n\n  width: ","px;\n  height: ","px;\n\n  :active,\n  :hover,\n  :focus {\n    outline: none;\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.width[3]}),(function(n){return n.theme.sizes.height[1]}),(function(n){return n.theme.colors.text})),J=f.ZP.h2(F||(F=(0,d.Z)(["\n  font-size: ","px;\n  margin: ","px;\n  color: ",";\n"])),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text})),M=f.ZP.button(V||(V=(0,d.Z)(["\n  width: ","px;\n  height: ","px;\n\n  border: ",";\n  border-radius: ","px;\n\n  margin-top: ","px;\n  margin-bottom: ","px;\n\n  cursor: pointer;\n\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n\n  transition: ",";\n  :hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.sizes.width[1]}),(function(n){return n.theme.sizes.height[0]}),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.btnRound}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontWeights.middle}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.transitionBtn}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.twoTextColor}));var Q,X,nn,en=function(n){var e=n.activeContact,t=(n.onClose,(0,s.I0)()),r=(0,s.v9)(h.K2).find((function(n){return n.id===e})),o=(0,c.useState)(r.name),i=(0,B.Z)(o,2),u=i[0],a=i[1],d=(0,c.useState)(r.number),f=(0,B.Z)(d,2),m=f[0],x=f[1],p=r.id,b={name:u,number:m};return(0,g.jsx)("div",{children:(0,g.jsxs)($,{onSubmit:function(n){n.preventDefault(),t(l.Tk(p,b)),console.log(p,b)},children:[(0,g.jsx)(J,{children:"New name"}),(0,g.jsx)("label",{children:(0,g.jsx)(H,{type:"text",name:"newName",value:u,onChange:function(n){n.preventDefault(),a(n.target.value)}})}),(0,g.jsx)(J,{children:"New number"}),(0,g.jsx)("label",{children:(0,g.jsx)(H,{type:"tel",name:"newNumber",value:m,onChange:function(n){n.preventDefault(),x(n.target.value)}})}),(0,g.jsx)(M,{type:"submit",children:"Update"})]})})},tn=function(){var n=(0,s.I0)(),e=(0,s.v9)(h.K2),t=(0,s.v9)(h.zK),r=(0,c.useState)(!1),o=(0,B.Z)(r,2),i=o[0],u=o[1],a=(0,c.useState)(0),d=(0,B.Z)(a,2),f=d[0],m=d[1],x=function(){u(!i)},p=function(n){"BUTTON"===n.target.nodeName&&u(!0)};(0,c.useEffect)((function(){var e=new AbortController;return n(l.yF(),{signal:e.signal}),function(){e.abort()}}),[n]);var b=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,g.jsx)(g.Fragment,{children:b.length>0?b.map((function(e){var t=e.name,r=e.number,o=e.id;return(0,g.jsxs)(A,{children:[(0,g.jsx)(Y.ZP,{color:Y.ZP.getRandomColor("sitebase",["LightSeaGreen","BlueViolet","DeepSkyBlue"]),name:t,round:!0}),(0,g.jsxs)(E,{children:[(0,g.jsxs)(G,{children:[t,":"]}),(0,g.jsx)(G,{children:r})]}),(0,g.jsxs)(U,{children:[(0,g.jsx)("li",{children:(0,g.jsx)(q,{type:"submit",onClick:p,onClickCapture:function(){!function(n){m(n)}(o)},children:(0,g.jsx)(L.$iz,{})})}),(0,g.jsx)("li",{children:(0,g.jsx)(q,{type:"submit",onClick:function(){n(l.GK(o))},children:(0,g.jsx)(L.VPh,{})})})]}),i&&(0,g.jsx)(D,{onClose:x,children:(0,g.jsx)(en,{activeContact:f,onClose:x})})]},o)})):(0,g.jsx)(O,{children:(0,g.jsx)("p",{children:"Your contacts will be displayed here"})})})},rn=f.ZP.ul(Q||(Q=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  border: ",";\n  border-radius: ","px;\n  color: ",";\n\n  width: ","px;\n  padding: 10px;\n  background-color: ",";\n"])),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.width[5]}),(function(n){return n.theme.colors.twoBackgroundColor})),on=function(){return(0,g.jsx)(rn,{children:(0,g.jsx)(tn,{})})},un=t(4808),cn=f.ZP.input(X||(X=(0,d.Z)(["\n  border: ",";\n  border-radius: ","px;\n  color: ",";\n\n  width: ","px;\n  height: ","px;\n\n  :active,\n  :hover,\n  :focus {\n    outline: none;\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.sizes.width[3]}),(function(n){return n.theme.sizes.height[1]}),(function(n){return n.theme.colors.text})),sn=f.ZP.button(nn||(nn=(0,d.Z)(["\n  display: inline-block;\n  width: ","px;\n  height: ","px;\n  border: ",";\n  border-radius: ","px;\n\n  margin-top: ","px;\n  margin-bottom: ","px;\n\n  cursor: pointer;\n\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n\n  transition: ",";\n  :hover,\n  :focus {\n    background-color: ",";\n    color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.sizes.width[0]}),(function(n){return n.theme.sizes.height[1]}),(function(n){return n.theme.borders.small}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontWeights.middle}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.transitionBtn}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.color}),(function(n){return n.theme.colors.twoTextColor})),ln=function(){var n=(0,c.useRef)(null),e=(0,s.I0)(),t=(0,s.v9)(h.zK);return(0,g.jsxs)("div",{children:[(0,g.jsx)(cn,{type:"text",name:"filter",value:t,onChange:function(n){var t=n.target.value.trim();e((0,un.T)(t))},ref:n}),(0,g.jsx)(sn,{type:"button",onClick:function(){n.current.value=""},children:"Clear"})]})},hn=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(S,{}),(0,g.jsx)(ln,{}),(0,g.jsx)(on,{})]})}}}]);
//# sourceMappingURL=688.93f9bbf0.chunk.js.map