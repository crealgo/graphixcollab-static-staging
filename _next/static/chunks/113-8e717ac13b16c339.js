"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[113],{8888:function(e,n,r){r.d(n,{O:function(){return eV}});var i=r(2236),t=r(7568),a=r(6042),l=r(9396),o=r(828),s=r(7297),c=r(6305),d=r(655),u=r(5893),p=r(6829),m=r(7533),h=r(1026),f=r(7331),v=r(9072),g=r(2741),x=r(8391),b=r(754),y=r(7294),Z=r(7536),j=r(6310),k=r(4944),w=r(2546),F=r(2562),T=r(6651),I=r(9534),S=r(9566),z=r(6010);function D(){var e=(0,s.Z)(["\n	font-weight: 500;\n	font-size: 0.75rem;\n	line-height: 1rem;\n\n	color: var(--color-text-secondary);\n"]);return D=function(){return e},e}var R=p.Z.span(D()),q=function(e){"touched"===e.type&&(e.stopPropagation(),[e.currentTarget].concat((0,c.Z)(e.currentTarget.querySelectorAll(".input-label, .input-helper-text"))).forEach(function(e){e.classList.add("touched")}))};function C(){var e=(0,s.Z)(["\n	display: inline-grid;\n	grid-template-columns: 1fr;\n	border: unset;\n	padding: unset;\n\n	color: var(--color-text-primary);\n	font-size: 14px;\n	line-height: 1rem;\n	font-weight: 500;\n	letter-spacing: -0.1px;\n\n	.FormControl-label {\n		margin-bottom: 0.25rem;\n		width: 100%;\n		display: block;\n	}\n\n	.FormControl-helper-text {\n		margin-top: 0.25rem;\n		max-width: 25rem;\n	}\n\n	&.is-full-width {\n		width: 100%;\n	}\n\n	&.is-fieldset .FormControl-label {\n		padding-bottom: 0.25rem;\n		margin-bottom: 0.5rem;\n		border-bottom: 1px solid var(--color-gray-400);\n	}\n\n	&.is-required .FormControl-label::after {\n		content: '*';\n		color: var(--color-feedback-error-main);\n	}\n\n	&.is-invalid {\n		.FormControl-label,\n		.FormControl-helper-text {\n			color: var(--color-feedback-error-main);\n		}\n	}\n\n	&.is-valid {\n		.FormControl-label,\n		.FormControl-helper-text {\n			color: var(--color-feedback-success-main);\n		}\n	}\n"]);return C=function(){return e},e}var N=p.Z.label(C()),V=function(e){var n=(0,y.useRef)(null);(0,y.useEffect)(function(){if(n.current){var e=n.current;return e.addEventListener("touched",q),function(){e.removeEventListener("touched",q)}}},[n]);var r="label",i="span";return e.isFieldset&&(r="fieldset",i="legend"),(0,u.jsxs)(N,{ref:n,as:r,htmlFor:e.labelFor,className:(0,z.Z)(e.className,"FormControl-root",{"is-full-width":e.isFullWidth,"is-fieldset":e.isFieldset,"is-required":e.isRequired,"is-invalid":e.isInvalid,"is-valid":e.isValid,"is-touched":e.isTouched}),children:[(0,u.jsx)(i,{className:"FormControl-label",children:e.label}),e.children,e.helperText&&(0,u.jsx)(R,{id:e.helperTextId,className:"FormControl-helper-text",children:e.helperText})]})};function W(){var e=(0,s.Z)(["\n	display: grid;\n	gap: var(--spacing-1-5);\n"]);return W=function(){return e},e}var E=p.Z.div(W());function P(){var e=(0,s.Z)(["\n	--control-size: 1rem;\n\n	display: flex;\n	place-items: center;\n	place-content: start;\n	gap: var(--spacing-1-5);\n\n	font-size: var(--input-font-size-medium);\n	font-weight: 400;\n\n	input[type='radio'],\n	input[type='checkbox'] {\n		height: var(--control-size);\n		width: var(--control-size);\n	}\n"]);return P=function(){return e},e}var X=(0,p.Z)("label")(P()),_=(0,y.forwardRef)(function(e,n){var r,i=e.label,t=e.helperText,a=(e.isFullWidth,e.options),l=(0,I.Z)(e,["label","helperText","isFullWidth","options"]),o=(0,S.o)(null!==(r=l.name)&&void 0!==r?r:"input-name");return(0,u.jsx)(V,{isFullWidth:!0,isFieldset:!0,label:i,labelFor:o,helperText:t,helperTextId:"".concat(o,"-helper-text"),isRequired:l.required,children:(0,u.jsx)(E,{children:null==a?void 0:a.map(function(e){return(0,u.jsxs)(X,{children:[(0,u.jsx)("input",{ref:n,value:e.value,type:"checkbox",id:o,name:o},o),e.label]},e.value)})})})}),A=r(4005),L=r(696),O=r(2386);function B(){var e=(0,s.Z)(["\n	list-style: none;\n	margin: unset;\n	width: 100%;\n	padding-inline-start: 0;\n\n	.FileDisplayList-title {\n		font-size: 0.875rem;\n		font-weight: 500;\n\n		& + hr {\n			margin-block-start: 0.125rem;\n			margin-block-end: 0.5rem;\n		}\n	}\n"]);return B=function(){return e},e}var M=(0,p.Z)("ul")(B()),U=function(e){return(0,u.jsxs)(M,{children:[e.listTitle&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(L.x,{className:"FileDisplayList-title",children:e.listTitle}),(0,u.jsx)("hr",{})]}),e.children]})};function G(){var e=(0,s.Z)(["\n	display: flex;\n	gap: 0.25em;\n	place-items: center;\n	place-content: start;\n\n	.FileListItem-icon {\n		opacity: 0.5;\n		font-size: 1.125em;\n	}\n"]);return G=function(){return e},e}var Q=(0,p.Z)("li")(G());function Y(){var e=(0,s.Z)(["\n	",";\n	cursor: pointer;\n	display: inline-grid;\n	background-color: var(--color-gray-100);\n\n	&:hover {\n		background-color: var(--color-gray-200);\n	}\n\n	&:active {\n		background-color: var(--color-gray-300);\n	}\n\n	min-height: 10rem;\n	height: auto;\n	padding-block: 1.75rem;\n	border-style: dashed;\n	place-content: center;\n	place-items: center;\n\n	font-size: 1rem;\n	font-weight: normal;\n\n	[type='file'] {\n		display: none;\n	}\n\n	&.hasFiles {\n		border-style: solid;\n		background-color: var(--color-gray-200);\n	}\n"]);return Y=function(){return e},e}function H(){var e=(0,s.Z)(["\n	display: grid;\n	gap: 0.5rem;\n	place-content: center;\n	place-items: center;\n\n	.accepts {\n		color: var(--color-gray-500);\n	}\n"]);return H=function(){return e},e}var K=(0,p.Z)("div")(Y(),O.I),$=(0,p.Z)("div")(H()),J=(0,p.Z)("input",{shouldForwardProp:function(e){return!["inputSize","isTouched","isInvalid","isValid"].includes(e)}})(),ee=(0,y.forwardRef)(function(e,n){var r=e.displayText,i=void 0===r?"\uD83C\uDF05 Upload a file":r,t=e.inputSize,s=e.className,d=(0,I.Z)(e,["displayText","inputSize","className"]),p=(0,o.Z)((0,y.useState)(null),2),m=p[0],h=p[1],f=(0,y.useMemo)(function(){var e;return m?(console.log(m),(0,u.jsx)(U,{listTitle:"Chosen Files:",children:(0,c.Z)(m).map(function(e,n){return(0,u.jsxs)(Q,{children:[(0,u.jsx)(A.Z,{fontSize:"small",sx:{color:"var(--color-brand-magenta-main)"}}),(0,u.jsx)(L.x,{children:e.name})]},n)})})):(0,u.jsxs)($,{children:[i,(0,u.jsxs)("small",{className:"accepts",children:["Supported file types:"," ",null===(e=d.accept)||void 0===e?void 0:e.replaceAll(",",", ")]})]})},[i,m,d.accept]);return(0,u.jsxs)(K,{className:(0,z.Z)("FileInput-root",s,{hasFiles:Boolean(m)}),inputSize:void 0===t?"medium":t,role:"combobox",tabIndex:0,children:[f,(0,u.jsx)(J,(0,l.Z)((0,a.Z)({},d),{ref:n,type:"file",onChange:function(e){var n,r;(null===(n=e.currentTarget.files)||void 0===n?void 0:n.length)&&h(e.currentTarget.files),null===(r=d.onChange)||void 0===r||r.call(d,e)}}))]})}),en=(0,y.forwardRef)(function(e,n){var r,i=e.label,t=e.helperText,o=(e.isFullWidth,e.className),s=(0,I.Z)(e,["label","helperText","isFullWidth","className"]),c=(0,S.o)(null!==(r=s.name)&&void 0!==r?r:"input-name");return(0,u.jsx)(V,{isFullWidth:!0,label:i,labelFor:c,helperText:t,helperTextId:"".concat(c,"-helper-text"),className:(0,z.Z)("FileInputField-root",o),isInvalid:s.isInvalid,isValid:s.isValid,isTouched:s.isTouched,children:(0,u.jsx)(ee,(0,l.Z)((0,a.Z)({},s),{ref:n,multiple:!0,type:"file",id:c,name:c}))})}),er=r(9462),ei=r(8857);function et(){var e=(0,s.Z)(["\n	display: grid;\n	grid-template-columns: "," 1fr;\n	gap: var(--spacing-1-5);\n	place-items: start;\n	place-content: start;\n\n	font-size: var(--input-font-size-medium);\n	font-weight: 400;\n\n	cursor: pointer;\n\n	.RadioInput-text {\n		display: grid;\n		line-height: ",";\n		grid-template-columns: 1fr;\n\n		.RadioInput-meta {\n			line-height: normal;\n			color: var(--color-gray-500);\n		}\n	}\n"]);return et=function(){return e},e}function ea(){var e=(0,s.Z)(["\n	opacity: 0;\n	position: absolute;\n	cursor: pointer;\n\n	+ .RadioInput-indicator {\n		display: flex;\n		border-radius: 50%;\n		overflow: hidden;\n		width: ",";\n		height: ",";\n\n		.RadioInput-icon {\n			width: inherit;\n			height: inherit;\n			color: var(--color-gray-500);\n			display: none;\n		}\n	}\n\n	&:not(:checked) + .RadioInput-indicator .RadioInput-icon.is-unchecked {\n		display: flex;\n	}\n\n	&:hover,\n	&:focus-visible {\n		+ .RadioInput-indicator .RadioInput-icon {\n			color: var(--color-gray-800);\n			background-color: var(--color-gray-100);\n		}\n	}\n\n	&:checked + .RadioInput-indicator .RadioInput-icon.is-checked {\n		color: var(--color-brand-magenta-main);\n		display: flex;\n	}\n"]);return ea=function(){return e},e}var el="1.25rem",eo=p.Z.label(et(),el,el),es=(0,p.Z)("input",{shouldForwardProp:function(e){return!["inputSize","isTouched","isInvalid","isValid"].includes(e)}})(ea(),el,el),ec=(0,y.forwardRef)(function(e,n){return(0,u.jsxs)(eo,{htmlFor:e.id,children:[(0,u.jsx)(es,(0,a.Z)({ref:n,type:"radio"},e)),(0,u.jsxs)("div",{className:"RadioInput-indicator",children:[(0,u.jsx)(ei.Z,{className:"RadioInput-icon is-checked"}),(0,u.jsx)(er.Z,{className:"RadioInput-icon is-unchecked"})]}),(0,u.jsxs)("span",{className:"RadioInput-text",children:[(0,u.jsx)("span",{children:e.label}),(0,u.jsx)("small",{className:"RadioInput-meta",children:e.meta})]})]})}),ed=(0,y.forwardRef)(function(e,n){var r,i=e.label,t=e.helperText,o=e.isFullWidth,s=e.options,c=e.defaultValue,d=(0,I.Z)(e,["label","helperText","isFullWidth","options","defaultValue"]),p=(0,S.o)(null!==(r=d.name)&&void 0!==r?r:"input-name");return(0,u.jsx)(V,{isFieldset:!0,isFullWidth:void 0===o||o,label:i,labelFor:p,helperText:t,helperTextId:"".concat(p,"-helper-text"),isRequired:d.required,isInvalid:d.isInvalid,isValid:d.isValid,isTouched:d.isTouched,children:(0,u.jsx)(E,{children:null==s?void 0:s.map(function(e,r){return(0,y.createElement)(ec,(0,l.Z)((0,a.Z)({},d),{key:r,ref:n,label:e.label,value:e.value,type:"radio",id:e.label,meta:e.meta,name:p,defaultChecked:e.value===c}))})})})}),eu=r(917),ep=r(5503);function em(){var e=(0,s.Z)(["\n		display: inline-block;\n		position: relative;\n\n		& svg {\n			pointer-events: none;\n			position: absolute;\n			top: 50%;\n			height: var(--input-group-action-size-",");\n			width: var(--input-group-action-size-",");\n			right: var(--input-spacing-gap-",");\n			transform: translateY(-50%);\n			opacity: 0.5;\n		}\n	"]);return em=function(){return e},e}function eh(){var e=(0,s.Z)(["\n		",";\n\n		padding-inline: var(--select-spacing-padding-inline-",");\n		appearance: none;\n		cursor: pointer;\n\n		width: 100%;\n	"]);return eh=function(){return e},e}var ef=(0,p.Z)("div")(function(e){var n=e.inputSize;return(0,eu.iv)(em(),n,n,n)}),ev=(0,p.Z)("select",{shouldForwardProp:function(e){return!["inputSize","isTouched","isInvalid","isValid"].includes(e)}})(function(e){return(0,eu.iv)(eh(),(0,O.I)({inputSize:e.inputSize}),e.inputSize)}),eg=(0,y.forwardRef)(function(e,n){var r=e.options,i=e.inputSize,t=void 0===i?"medium":i,o=e.className,s=(0,I.Z)(e,["options","inputSize","className"]);return(0,u.jsxs)(ef,{className:(0,z.Z)("Select-root",o),inputSize:t,children:[(0,u.jsx)(ev,(0,l.Z)((0,a.Z)({},s),{ref:n,inputSize:t,children:null==r?void 0:r.map(function(e,n){var r=e.label,i=e.value;return(0,u.jsx)("option",{value:i,children:r},n)})})),(0,u.jsx)(ep.Z,{})]})}),ex=(0,y.forwardRef)(function(e,n){var r,i=e.label,t=e.helperText,o=(e.isFullWidth,(0,I.Z)(e,["label","helperText","isFullWidth"])),s=(0,S.o)(null!==(r=o.name)&&void 0!==r?r:"input-name");return(0,u.jsx)(V,{isFullWidth:!0,label:i,labelFor:s,helperText:t,helperTextId:"".concat(s,"-helper-text"),isRequired:o.required,isInvalid:o.isInvalid,isValid:o.isValid,isTouched:o.isTouched,children:(0,u.jsx)(eg,(0,l.Z)((0,a.Z)({},o),{ref:n,id:s,name:s}))})}),eb=r(2469),ey=(0,y.forwardRef)(function(e,n){var r,i=e.label,t=e.helperText,o=(e.isFullWidth,(0,I.Z)(e,["label","helperText","isFullWidth"])),s=(0,S.o)(null!==(r=o.name)&&void 0!==r?r:"input-name");return(0,u.jsx)(V,{isFullWidth:!0,label:i,labelFor:s,helperText:t,helperTextId:"".concat(s,"-helper-text"),isRequired:o.required,isInvalid:o.isInvalid,isValid:o.isValid,isTouched:o.isTouched,children:(0,u.jsx)(eb.I,(0,l.Z)((0,a.Z)({},o),{ref:n,id:s,name:s}))})}),eZ=function(e){var n,r=e.helperText,i=(0,I.Z)(e,["helperText"]),t=(0,Z.Gc)(),l=t.register,o=t.getFieldState,s=/checkbox|radio|file|select/.test(i.type)?i.type:"default",c=o(i.name),d=c.invalid,p=c.error;return(0,u.jsx)({select:ex,checkbox:_,radio:ed,file:en,default:ey}[s],(0,a.Z)({inputSize:"large",isInvalid:d,helperText:null!==(n=null==p?void 0:p.message)&&void 0!==n?n:r},i,l(i.name,(0,a.Z)({disabled:i.disabled,min:i.min,max:i.max,required:i.required},i.registerOptions))))},ej=r(714),ek=r.n(ej),ew=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.map(function(e){return{label:e,value:(0,S.o)(e)}})},eF=ew("T-shirt","Hoodie","Sash","Poster","Sticker"),eT=ew("Embroidery","Print");ew("\uD83C\uDF05 Image","\uD83D\uDC64 Name","\uD83C\uDD70 Initials","\uD83D\uDCAC Quote"),new(ek());var eI=new Date,eS=Date.now()+2592e6,ez=[{legend:"\uD83D\uDC4B Your Information",fields:[{type:"text",name:"name",label:"Full Name",required:!0,span:4},{type:"text",name:"email",label:"Email",required:!0,span:4},{type:"number",name:"phone",label:"Phone Number",placeholder:"XXX-XXX-XXXX",min:1e9,max:9999999999,span:4}]},{legend:"⚙️ Service Request",fields:[{type:"select",name:"material",label:"Material Type",options:eF,span:4},{type:"select",name:"service",label:"Service Type",options:eT,span:4},{type:"number",name:"quantity",defaultValue:10,label:"Quantity",required:!0,min:10,max:9999,span:4},{type:"date",name:"deadline",defaultValue:new Date(eS).toISOString().split("T")[0],label:"Deadline",helperText:"By default, we will assume 1 month from now.",required:!0,min:eI.toISOString().split("T")[0],span:4},{type:"radio",name:"delivery",required:!0,label:"Delivery Method",options:[{value:"pickup",label:"Pick-Up \uD83D\uDCCD",meta:"Pick up your order at our store"},{value:"ship",label:"Ship \uD83D\uDCE6",meta:"We'll ship it to ya!"}],span:3}]},{legend:"\uD83C\uDFA8 Artwork Information",fields:[{type:"file",multiple:!0,name:"artwork",label:"Artwork File(s)",displayText:"\uD83C\uDF05 Upload your artwork",accept:".gif,.jpeg,.jpg,.png,.pdf,.svg,.webp",helperText:"Although this step is optional, uploading your artwork helps us come up with a more accurate estimate.",span:8}]}];function eD(){var e=(0,s.Z)(["\n	--content-grid-padding-block-end: 50%;\n	--action-stack-spacing: 1rem;\n\n	@media screen and (min-width: 425px) {\n		--content-grid-padding-block-end: 52%;\n	}\n\n	@media screen and (min-width: 768px) {\n		--content-grid-padding-block-end: 6.5rem;\n	}\n\n	@media screen and (min-width: 911px) {\n		--content-grid-padding-block-end: 5rem;\n	}\n\n	@media screen and (min-width: 1024px) {\n		--content-grid-padding-block-end: 3rem;\n	}\n\n	display: grid;\n	/* gap: 2rem; */\n	max-width: 900px;\n	z-index: 1;\n\n	padding-block-end: var(--content-grid-padding-block-end);\n\n	.ActionStack-root {\n		margin-top: var(--action-stack-spacing);\n	}\n"]);return eD=function(){return e},e}function eR(){var e=(0,s.Z)(["\n	font-style: normal;\n	margin-block-start: var(--spacing-2);\n	padding-block-start: var(--spacing-2);\n	margin-block-end: var(--spacing-10);\n	border-block-start: solid 2px var(--color-brand-magenta-lighter);\n\n	* > mark {\n		display: inline;\n	}\n\n	max-width: 40rem;\n"]);return eR=function(){return e},e}var eq=(0,p.Z)("div")(eD()),eC=(0,p.Z)("em")(eR()),eN=j.Ry().shape({name:j.Z_().required(),email:j.Z_().email().required(),phone:j.Vo(function(e){return e?j.Z_().matches(/^\d{10}$/,"Phone number is not valid"):j.Z_()}),material:j.Z_().required(),service:j.Z_().required(),quantity:j.Rx().min(10).max(9999).required(),deadline:j.hT().required(),delivery:j.Z_().required(),artwork:j.nK().notRequired()}),eV=function(e){var n,r=(0,Z.cI)({mode:"onBlur",resolver:(0,m.X)(eN),reValidateMode:"onChange"}),s=r.handleSubmit,p=r.formState,j=r.setError,I=(n=(0,t.Z)(function(e,n){var r,t,a,l,s,u,p,m,h,f,v,g,x,b;return(0,d.__generator)(this,function(d){switch(d.label){case 0:console.log("data",e,null==n?void 0:n.currentTarget),r=new FormData,t=!1,a=!1,d.label=1;case 1:d.trys.push([1,6,7,12]),s=(0,i.Z)(Object.entries(e)),d.label=2;case 2:return[4,s.next()];case 3:if(!(t=!(u=d.sent()).done))return[3,5];p=u.value,h=(m=(0,o.Z)(p,2))[0],f=m[1],"artwork"===h&&((0,c.Z)(f).forEach(function(e,n){r.append("artwork[".concat(n,"]"),e)}),r.delete("artwork")),r.append(h,f),d.label=4;case 4:return t=!1,[3,2];case 5:return[3,12];case 6:return v=d.sent(),a=!0,l=v,[3,12];case 7:if(d.trys.push([7,,10,11]),!(t&&null!=s.return))return[3,9];return[4,s.return()];case 8:d.sent(),d.label=9;case 9:return[3,11];case 10:if(a)throw l;return[7];case 11:return[7];case 12:return g=new URL("api/graphix-collab/get-estimate","https://api.crealgo.com/"),[4,fetch(g,{method:"POST",body:r})];case 13:if((x=d.sent()).ok)return[3,15];return[4,x.json()];case 14:console.log("json",b=d.sent()),Object.entries(b).forEach(function(e){var n=(0,o.Z)(e,2);j(n[0],{type:"server",message:n[1].join(" ")})}),d.label=15;case 15:return[2]}})}),function(e,r){return n.apply(this,arguments)}),S=ez.map(function(n,r){return(0,u.jsxs)(y.Fragment,{children:[!e.isSimple&&(0,u.jsxs)(v.ZP,{item:!0,xs:12,marginTop:r>0?3:0,children:[(0,u.jsx)(F.X,{level:4,children:n.legend}),(0,u.jsx)("hr",{})]}),n.fields.map(function(n,r){if(!e.isSimple||"phone"!==n.name)return(0,u.jsx)(v.ZP,{item:!0,xs:12,sm:n.span,children:(0,u.jsx)(eZ,(0,a.Z)({},n))},r)})]},r)});return(0,u.jsx)(Z.RV,(0,l.Z)((0,a.Z)({},r),{children:(0,u.jsx)("form",{noValidate:!0,encType:"multipart/form-data",id:"estimator-form",onSubmit:s(I,function(e){console.log("errors",e)}),children:(0,u.jsxs)(eq,{children:[(0,u.jsxs)(F.X,{level:2,children:["Get ",e.isSimple?"a quick ":"an ",(0,u.jsx)(T.v,{text:!0,color:"magenta",children:"estimate"}),"!"]}),(0,u.jsx)(eC,{children:(0,u.jsx)(T.v,{color:"magenta",children:"Fill out the form below to get your quick estimate, and a step closer to getting your project started!"})}),(0,u.jsx)(v.ZP,{container:!0,spacing:2,marginBottom:"1.5rem",children:S}),p.isSubmitSuccessful&&(0,u.jsxs)(g.Z,{severity:"success",children:[(0,u.jsx)(x.Z,{children:"Success!"}),"We’ve received your request and will get back to you shortly."]}),(0,u.jsxs)(k.k,{children:[(0,u.jsx)(w.z,{size:"large",color:"secondary",endIcon:p.isSubmitting?(0,u.jsx)(b.Z,{size:"inherit",thickness:6,sx:{color:"white"}}):(0,u.jsx)(h.Z,{}),type:"submit",children:p.isSubmitting?"Sending...":"Get Estimate"}),(0,u.jsx)(w.z,{size:"large",color:"text",href:"mailto:graphixcollab@gmail.com",endIcon:(0,u.jsx)(f.Z,{}),children:"Not sure? Contact us"})]})]})})}))}}}]);