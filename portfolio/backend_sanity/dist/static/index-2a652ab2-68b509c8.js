import{s as _,aG as g,z as j,P as w,cp as B,m as a,aq as L,co as O,am as T,aU as S,ar as z,q as A,ac as D,aa as G}from"./desk-eb7b3548-2de61ce2.js";import{P as W}from"./PaneItem-59fdbcf0-1afe2f1a.js";import{useDeskTool as q}from"./index-66ec8894-a45ec9ae.js";var r;function C(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const H=_.hr(r||(r=C([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function K(n){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=n,{features:h}=q(),{collapsed:m}=g(),{defaultLayout:y,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=u,P=c==null?void 0:c.showIcons,k=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return j(w,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[B,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:z,mode:"bleed"}),title:b}),a(A,{overflow:m?void 0:"auto",children:a(D,{padding:2,space:1,children:i&&i.map((e,o)=>{if(e.type==="divider")return a(G,{paddingY:1,children:a(H,{})},"divider-".concat(o));const s=!d&&t===e.id,x=d&&t===e.id;return a(W,{icon:k(e)?e.icon:!1,id:e.id,layout:y,pressed:s,schemaType:e.schemaType,selected:x,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{K as default};