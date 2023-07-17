(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{7794:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return r(3094)}])},2040:function(n,e,r){"use strict";r.d(e,{G:function(){return w}});var t=r(6042),i=r(7297),a=r(5893),o=r(7074),s=r(917),c=r(5968),d=r(1944),l=r(2562),m=r(696),u=r(6651);function p(){var n=(0,i.Z)(["\n		--wrapper-padding-bottom: 6rem;\n\n		@media screen and (min-width: 1123px) {\n			--wrapper-padding-bottom: 5rem;\n		}\n\n		background-color: var(--color-brand-","-lighter);\n		margin-top: calc(5rem - 10rem);\n\n		padding-bottom: var(--wrapper-padding-bottom);\n\n		.PageHeaderBlock-container {\n			position: relative;\n		}\n\n		.Heading-root,\n		.Text-root {\n			color: var(--color-brand-tertiary-darker);\n		}\n	"]);return p=function(){return n},n}function h(){var n=(0,i.Z)(["\n	/* background-color: rgba(0, 0, 0, 0.1); */\n\n	width: 100%;\n	max-width: 40rem;\n	display: block;\n	margin-bottom: -12rem;\n	padding: 3rem; // TODO: shouldn't be applied to all images\n\n	@media screen and (min-width: 600px) {\n		float: right;\n	}\n\n	@media screen and (min-width: 768px) {\n		margin-top: -2.5rem;\n	}\n\n	@media screen and (min-width: 1027px) {\n		margin-top: -5rem;\n		margin-right: -2.5rem;\n	}\n\n	@media screen and (min-width: 1123px) {\n		position: absolute;\n		inset: 100% 0 auto auto;\n		margin-top: -15rem;\n		max-width: 35rem;\n	}\n\n	@media screen and (min-width: 1200px) {\n		max-width: 40rem;\n	}\n"]);return h=function(){return n},n}function g(){var n=(0,i.Z)(["\n	max-width: 40rem;\n"]);return g=function(){return n},n}var x=(0,o.ZP)(c.g)(function(n){var e=n.color;return(0,s.iv)(p(),void 0===e?"tertiary":e)}),f=(0,o.ZP)("img")(h()),b=(0,o.ZP)("hgroup")(g()),w=function(n){var e=n.title,r=n.description,i=n.color,o=n.ImageProps;return(0,a.jsx)(x,{color:i,children:(0,a.jsxs)(d.W,{className:"PageHeaderBlock-container",children:[(0,a.jsxs)(b,{children:[(0,a.jsx)(l.X,{hasMargin:!0,level:1,children:(0,a.jsx)(u.v,{brand:!0,children:e})}),(0,a.jsx)(m.x,{children:r})]}),o&&(0,a.jsx)(f,(0,t.Z)({},o))]})})};w.displayName="PageHeaderBlock"},2485:function(n,e,r){"use strict";r.d(e,{C:function(){return t}});var t=function(n){return"".concat("https://api.crealgo.com","/").concat("graphixcollab","/").concat(n)}},3094:function(n,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return C},default:function(){return N}});var t=r(6042),i=r(5893),a=r(5968),o=r(1944),s=r(2040),c=r(9877),d=r(7297),l=r(2220),m=r(1026),u=(0,r(8175).Z)((0,i.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh"),p=r(754),h=r(4944),g=r(2546),x=r(6651),f=r(6838),b=r(3209),w=r(150),j=r(9003),v=r(4024),k=r(4251),y=[{itemType:"input",inputType:"text",label:"Full Name",name:"name",placeholder:"John",required:!0},{itemType:"input",inputType:"email",required:!0,label:"Email",name:"email",helperText:"We'll respond to this email address.",placeholder:"johnsnow@gmail.com"},{itemType:"textarea",name:"message",label:"Message",required:!0,placeholder:'Let us know how we can help you! Something like, "I would like to book an appointment, but I have a few questions first."',rows:5},{itemType:"checkbox",name:"terms",label:"Terms and Conditions",required:!0,options:[{value:"terms",label:(0,i.jsxs)(i.Fragment,{children:["I agree to the"," ",(0,i.jsx)(k.r,{href:"/terms/terms-and-conditions",children:"Terms and Conditions"})," ","and the"," ",(0,i.jsx)(k.r,{href:"/terms/privacy-policy",children:"Privacy Policy"}),"."]})}]}],T=r(2485);function _(){var n=(0,d.Z)(["\n	@media screen and (min-width: 768px) {\n		.FormControl-id-name,\n		.FormControl-id-email {\n			grid-column: span 3;\n		}\n	}\n"]);return _=function(){return n},n}var S=(0,l.Z)(b.T)(_()),Z=function(){var n=(0,f.c)();return(0,i.jsxs)(S,{noValidate:!0,method:"post",action:(0,T.C)("send-message/contact"),name:"contact-form",onSubmit:n.handleSubmit,children:[(0,i.jsx)(w.p,{title:(0,i.jsxs)(i.Fragment,{children:["Send us a"," ",(0,i.jsx)(x.v,{text:!0,color:"magenta",children:"message"}),"!"]}),instructions:"Fill out the form below to send us a message, and we'll get back to you as soon as possible!"}),(0,i.jsx)(j.U,{items:y,formState:n}),n.isSubmitted&&(0,v.z)(n.isSuccessful),(0,i.jsxs)(h.k,{children:[(0,i.jsx)(g.z,{size:"large",color:"secondary",endIcon:n.isSubmitting?(0,i.jsx)(p.Z,{size:"inherit",thickness:6,sx:{color:"white"}}):(0,i.jsx)(m.Z,{}),type:"submit",children:n.isSubmitting?"Sending...":"Send Message"}),(0,i.jsx)(g.z,{size:"large",color:"tertiary",endIcon:(0,i.jsx)(u,{}),type:"button",onClick:n.handleReset,children:"Reset"})]})]})},P=r(4218),C=!0,N=function(n){return(0,i.jsxs)(P.H,{children:[(0,i.jsx)(c.V,{text:n.pageTitle}),(0,i.jsx)(s.G,(0,t.Z)({title:n.pageTitle},n.pageHeaderProps)),(0,i.jsx)(a.g,{children:(0,i.jsx)(o.W,{children:(0,i.jsx)(Z,{})})})]})}}},function(n){n.O(0,[597,162,218,423,774,888,179],function(){return n(n.s=7794)}),_N_E=n.O()}]);