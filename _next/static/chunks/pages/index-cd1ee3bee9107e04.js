(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7793)}])},7793:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return ed}});var o=t(5893),l=t(9728),r=t(4343),i=t(7294),n=t(5675),c=t.n(n),s=t(1536),d=t(3946),p=t(7968),m=t.n(p),u={src:"/commerce-product-page//_next/static/media/icon-previous.047f7863.svg",height:18,width:12,blurWidth:0,blurHeight:0},h={src:"/commerce-product-page//_next/static/media/icon-next.08e3c2b4.svg",height:18,width:13,blurWidth:0,blurHeight:0},g=function(e){let{images:a}=e,[t,l]=(0,i.useState)(0);return a?(0,o.jsxs)("div",{className:m().root,children:[(0,o.jsx)(c(),{src:a[t].original,alt:"product image ".concat(t+1),fill:!0}),(0,o.jsxs)(s.Z,{direction:"row",className:m().actionButtons,sx:{justifyContent:"space-between"},children:[(0,o.jsx)(d.Z,{onClick:function(){a&&l(e=>0===e?a.length-1:e-1)},children:(0,o.jsx)(c(),{src:u,alt:"previous",width:8,height:8})}),(0,o.jsx)(d.Z,{onClick:function(){a&&l(e=>e===a.length-1?0:e+1)},children:(0,o.jsx)(c(),{src:h,alt:"next",width:8,height:8})})]})]}):null},v=t(4184),b=t.n(v),x=t(7357),f=t(5537),Z=t(3489),y=t.n(Z);function C(e){let{image:a,alt:t,isActive:l,makeActive:r}=e;return(0,o.jsx)(x.Z,{onClick:r,className:b()(y().smallImage,{[y().activeSmallImage]:l}),children:(0,o.jsx)(c(),{src:a,alt:t,fill:!0})})}var $=function(e){let{images:a,openLightbox:t,handleClose:l}=e,[r,n]=(0,i.useState)(0);function p(e){"previous"===e?n(e=>e-1<0?a.length-1:e-1):n(e=>e+1===a.length?0:e+1)}return(0,o.jsxs)(x.Z,{className:y().root,children:[!t&&(0,o.jsx)(d.Z,{className:y().closeButton,onClick:l,children:(0,o.jsx)(f.Z,{color:"primary"})}),(0,o.jsxs)(x.Z,{children:[!t&&(0,o.jsxs)(s.Z,{direction:"row",className:y().actionButtons,sx:{justifyContent:"space-between"},children:[(0,o.jsx)(d.Z,{onClick:()=>p("previous"),children:(0,o.jsx)(c(),{src:u,alt:"previous",width:8,height:8})}),(0,o.jsx)(d.Z,{onClick:()=>p("next"),children:(0,o.jsx)(c(),{src:h,alt:"next",width:8,height:8})})]}),(0,o.jsx)(x.Z,{className:y().bigImage,onClick:function(){t&&t()},sx:{cursor:t?"pointer":"initial"},children:(0,o.jsx)(c(),{src:a[r].original,alt:a[r].alt,fill:!0})})]}),(0,o.jsx)(x.Z,{className:y().thumbnails,children:a.map((e,a)=>{let t=e.thumbnail||e.original;return t?(0,o.jsx)(C,{image:t,alt:e.alt,isActive:r===a,makeActive:()=>{n(a)}},a+e.alt):null})})]})},j=t(5332),k=t(8075),I=t.n(k),S=function(e){let{images:a,open:t,onClose:l}=e;return(0,o.jsx)(j.Z,{open:t,onClose:l,children:(0,o.jsx)(x.Z,{className:I().root,children:(0,o.jsx)($,{images:a,handleClose:l})})})},_=function(e){let{images:a}=e,[t,l]=(0,i.useState)(!1);return(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(S,{images:a,open:t,onClose:function(){l(!1)}}),(0,o.jsx)($,{images:a,openLightbox:function(){l(!0)}})]})},w=t(3e3),N=t(6411),z=t(5861),R=t(3366),O=t(7462),T=t(6010),P=t(4780),W=t(1796),F=t(8169),L=(0,F.Z)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),E=t(1705),V=t(8216),D=t(8298),M=t(1657),q=t(948),B=t(1588),A=t(4867);function K(e){return(0,A.Z)("MuiChip",e)}let H=(0,B.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),U=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],X=e=>{let{classes:a,disabled:t,size:o,color:l,iconColor:r,onDelete:i,clickable:n,variant:c}=e,s={root:["root",c,t&&"disabled",`size${(0,V.Z)(o)}`,`color${(0,V.Z)(l)}`,n&&"clickable",n&&`clickableColor${(0,V.Z)(l)}`,i&&"deletable",i&&`deletableColor${(0,V.Z)(l)}`,`${c}${(0,V.Z)(l)}`],label:["label",`label${(0,V.Z)(o)}`],avatar:["avatar",`avatar${(0,V.Z)(o)}`,`avatarColor${(0,V.Z)(l)}`],icon:["icon",`icon${(0,V.Z)(o)}`,`iconColor${(0,V.Z)(r)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,V.Z)(o)}`,`deleteIconColor${(0,V.Z)(l)}`,`deleteIcon${(0,V.Z)(c)}Color${(0,V.Z)(l)}`]};return(0,P.Z)(s,K,a)},G=(0,q.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:t}=e,{color:o,iconColor:l,clickable:r,onDelete:i,size:n,variant:c}=t;return[{[`& .${H.avatar}`]:a.avatar},{[`& .${H.avatar}`]:a[`avatar${(0,V.Z)(n)}`]},{[`& .${H.avatar}`]:a[`avatarColor${(0,V.Z)(o)}`]},{[`& .${H.icon}`]:a.icon},{[`& .${H.icon}`]:a[`icon${(0,V.Z)(n)}`]},{[`& .${H.icon}`]:a[`iconColor${(0,V.Z)(l)}`]},{[`& .${H.deleteIcon}`]:a.deleteIcon},{[`& .${H.deleteIcon}`]:a[`deleteIcon${(0,V.Z)(n)}`]},{[`& .${H.deleteIcon}`]:a[`deleteIconColor${(0,V.Z)(o)}`]},{[`& .${H.deleteIcon}`]:a[`deleteIcon${(0,V.Z)(c)}Color${(0,V.Z)(o)}`]},a.root,a[`size${(0,V.Z)(n)}`],a[`color${(0,V.Z)(o)}`],r&&a.clickable,r&&"default"!==o&&a[`clickableColor${(0,V.Z)(o)})`],i&&a.deletable,i&&"default"!==o&&a[`deletableColor${(0,V.Z)(o)}`],a[c],a[`${c}${(0,V.Z)(o)}`]]}})(({theme:e,ownerState:a})=>{let t="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return(0,O.Z)({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${H.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${H.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:t,fontSize:e.typography.pxToRem(12)},[`& .${H.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${H.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${H.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${H.icon}`]:(0,O.Z)({marginLeft:5,marginRight:-6},"small"===a.size&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&(0,O.Z)({color:e.vars?e.vars.palette.Chip.defaultIconColor:t},"default"!==a.color&&{color:"inherit"})),[`& .${H.deleteIcon}`]:(0,O.Z)({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:(0,W.Fq)(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,W.Fq)(e.palette.text.primary,.4)}},"small"===a.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==a.color&&{color:e.vars?`rgba(${e.vars.palette[a.color].contrastTextChannel} / 0.7)`:(0,W.Fq)(e.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].contrastText}})},"small"===a.size&&{height:24},"default"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].main,color:(e.vars||e).palette[a.color].contrastText},a.onDelete&&{[`&.${H.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,W.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},a.onDelete&&"default"!==a.color&&{[`&.${H.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}})},({theme:e,ownerState:a})=>(0,O.Z)({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,W.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${H.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,W.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},a.clickable&&"default"!==a.color&&{[`&:hover, &.${H.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}}),({theme:e,ownerState:a})=>(0,O.Z)({},"outlined"===a.variant&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${H.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${H.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${H.avatar}`]:{marginLeft:4},[`& .${H.avatarSmall}`]:{marginLeft:2},[`& .${H.icon}`]:{marginLeft:4},[`& .${H.iconSmall}`]:{marginLeft:2},[`& .${H.deleteIcon}`]:{marginRight:5},[`& .${H.deleteIconSmall}`]:{marginRight:3}},"outlined"===a.variant&&"default"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:(0,W.Fq)(e.palette[a.color].main,.7)}`,[`&.${H.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,W.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity)},[`&.${H.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,W.Fq)(e.palette[a.color].main,e.palette.action.focusOpacity)},[`& .${H.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:(0,W.Fq)(e.palette[a.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].main}}})),J=(0,q.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{let{ownerState:t}=e,{size:o}=t;return[a.label,a[`label${(0,V.Z)(o)}`]]}})(({ownerState:e})=>(0,O.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===e.size&&{paddingLeft:8,paddingRight:8}));function Q(e){return"Backspace"===e.key||"Delete"===e.key}let Y=i.forwardRef(function(e,a){let t=(0,M.Z)({props:e,name:"MuiChip"}),{avatar:l,className:r,clickable:n,color:c="default",component:s,deleteIcon:d,disabled:p=!1,icon:m,label:u,onClick:h,onDelete:g,onKeyDown:v,onKeyUp:b,size:x="medium",variant:f="filled",tabIndex:Z,skipFocusWhenDisabled:y=!1}=t,C=(0,R.Z)(t,U),$=i.useRef(null),j=(0,E.Z)($,a),k=e=>{e.stopPropagation(),g&&g(e)},I=e=>{e.currentTarget===e.target&&Q(e)&&e.preventDefault(),v&&v(e)},S=e=>{e.currentTarget===e.target&&(g&&Q(e)?g(e):"Escape"===e.key&&$.current&&$.current.blur()),b&&b(e)},_=!1!==n&&!!h||n,w=_||g?D.Z:s||"div",N=(0,O.Z)({},t,{component:w,disabled:p,size:x,color:c,iconColor:i.isValidElement(m)&&m.props.color||c,onDelete:!!g,clickable:_,variant:f}),z=X(N),P=w===D.Z?(0,O.Z)({component:s||"div",focusVisibleClassName:z.focusVisible},g&&{disableRipple:!0}):{},W=null;g&&(W=d&&i.isValidElement(d)?i.cloneElement(d,{className:(0,T.Z)(d.props.className,z.deleteIcon),onClick:k}):(0,o.jsx)(L,{className:(0,T.Z)(z.deleteIcon),onClick:k}));let F=null;l&&i.isValidElement(l)&&(F=i.cloneElement(l,{className:(0,T.Z)(z.avatar,l.props.className)}));let V=null;return m&&i.isValidElement(m)&&(V=i.cloneElement(m,{className:(0,T.Z)(z.icon,m.props.className)})),(0,o.jsxs)(G,(0,O.Z)({as:w,className:(0,T.Z)(z.root,r),disabled:!!_&&!!p||void 0,onClick:h,onKeyDown:I,onKeyUp:S,ref:j,tabIndex:y&&p?-1:Z,ownerState:N},P,C,{children:[F||V,(0,o.jsx)(J,{className:(0,T.Z)(z.label),ownerState:N,children:u}),W]}))});var ee=function(e){let{price:a}=e,{formatValue:t}=(0,w.Z)(),{initialPrice:l,discount:r}=a,i=(0,N.Z)(e=>e.breakpoints.up("md"));return(0,o.jsxs)(s.Z,{direction:i?"column":"row",justifyContent:i?"stretch":"space-between",alignItems:i?"flex-start":"center",spacing:i?1:0,children:[(0,o.jsxs)(s.Z,{direction:"row",sx:{gap:"1rem"},children:[(0,o.jsx)(z.Z,{variant:"h5",component:"span",fontWeight:"bold",children:t(r?r.finalPrice:l)}),r&&(0,o.jsx)(Y,{label:"".concat(r.value,"%"),color:"primary",className:"light-chip"})]}),r&&(0,o.jsx)(z.Z,{color:"grey",sx:{textDecoration:"line-through"},children:t(l)})]})},ea=t(3464),et=t(3321),eo=(0,F.Z)((0,o.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove"),el=(0,F.Z)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),er=t(5917),ei=t(7036),en=function(e){let{product:a}=e,[t,l]=(0,i.useState)(0),{addToCart:r}=(0,ea.j)(),n=(0,N.Z)(e=>e.breakpoints.up("md"));return(0,o.jsxs)(s.Z,{direction:n?"row":"column",spacing:2,children:[(0,o.jsxs)(x.Z,{sx:{height:"42.25px",borderRadius:"4px",padding:"0.5rem 1.375rem",display:"flex",justifyContent:"space-between",alignItems:"center",background:ei.Z[200],width:n?"10rem":"100%"},children:[(0,o.jsx)(d.Z,{size:"small",onClick:function(){l(e=>e-1<0?e:e-1)},children:(0,o.jsx)(eo,{color:"primary",fontSize:"small"})}),(0,o.jsx)(z.Z,{children:t}),(0,o.jsx)(d.Z,{size:"small",onClick:function(){l(e=>e+1)},children:(0,o.jsx)(el,{color:"primary",fontSize:"small"})})]}),(0,o.jsx)(et.Z,{fullWidth:!0,variant:"contained",startIcon:(0,o.jsx)(er.Z,{}),color:"primary",size:"large",onClick:function(){return a.price?t?r?void(r(a,t),l(0)):alert("internal error!"):alert("you must set the quantity!"):alert("this product is unavailable!")},sx:{flex:"1 1 0px",minWidth:"170px"},children:"Add to cart"})]})},ec=function(e){let{product:a}=e,{description:t,price:l}=a;return(0,o.jsxs)(x.Z,{sx:{p:2,display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,o.jsx)(z.Z,{color:"primary",children:a.companyName}),(0,o.jsx)(z.Z,{variant:"h4",component:"span",children:a.title}),(0,o.jsx)(z.Z,{variant:"body1",color:"gray",children:t}),l&&(0,o.jsx)(ee,{price:l}),(0,o.jsx)(en,{product:a})]})},es=JSON.parse('{"id":"0001","companyName":"Sneakers company","title":"Fall Limited Edition Sneakers","description":"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.","price":{"initialPrice":250,"discount":{"value":50,"finalPrice":125}},"images":[{"original":"/images/image-product-1.jpg","thumbnail":"/images/image-product-1-thumbnail.jpg"},{"original":"/images/image-product-2.jpg","thumbnail":"/images/image-product-2-thumbnail.jpg"},{"original":"/images/image-product-3.jpg","thumbnail":"/images/image-product-3-thumbnail.jpg"},{"original":"/images/image-product-4.jpg","thumbnail":"/images/image-product-4-thumbnail.jpg"}]}');function ed(){let e=(0,N.Z)(e=>e.breakpoints.up("md")),a=(0,l.S)(es,r.s),t=(0,l.S)(es,r.b);return(0,o.jsxs)("main",{children:[!e&&(0,o.jsx)(g,{images:a}),(0,o.jsxs)(s.Z,{direction:e?"row":"column",sx:{gap:"5rem",maxWidth:"900px",margin:"auto"},children:[e&&(0,o.jsx)(x.Z,{sx:{flex:"1 1 0px"},children:(0,o.jsx)(_,{images:t})}),(0,o.jsx)(x.Z,{sx:{flex:"1 1 0px"},children:(0,o.jsx)(ec,{product:es})})]})]})}},7968:function(e){e.exports={root:"ImageCarusel_root__chLGc",actionButtons:"ImageCarusel_actionButtons__AV21K"}},8075:function(e){e.exports={root:"ImageLightbox_root__2PSar"}},3489:function(e){e.exports={root:"ImageWithThumbnails_root__6sd4D",bigImage:"ImageWithThumbnails_bigImage__QRc03",smallImage:"ImageWithThumbnails_smallImage__Fm1WU",activeSmallImage:"ImageWithThumbnails_activeSmallImage__SfqSZ",thumbnails:"ImageWithThumbnails_thumbnails__KIRN0",actionButtons:"ImageWithThumbnails_actionButtons__K4xU4",closeButton:"ImageWithThumbnails_closeButton__8R5PX"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);