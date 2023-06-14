(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{7133:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return i(8090)}])},3537:function(n,e,i){"use strict";i.d(e,{u:function(){return r}});var t=i(1953),r=(0,i(7074).ZP)(t.Z)(function(n){var e=n.size;return{display:"grid",gridTemplateColumns:"1fr",alignContent:"start",gap:({small:"1rem",medium:"2rem",large:"3rem"})[null!=e?e:"medium"]}});r.defaultProps={className:"ContentGrid-root"}},2340:function(n,e,i){"use strict";i.d(e,{L:function(){return w}});var t=i(6042),r=i(9396),a=i(9534),o=i(7297),s=i(5893),d=i(6010),c=i(6829),l=i(2562),g=i(696),p=i(6765);function m(){var n=(0,o.Z)(["\n	cursor: pointer;\n	position: relative;\n	display: grid;\n	place-items: start;\n	grid-template-columns: 4.75rem 2fr;\n	gap: 1.25rem;\n\n	&::before {\n		content: '';\n		position: absolute;\n		z-index: -1;\n		top: 50%;\n		left: 50%;\n		transform: translate(-50%, -50%);\n\n		width: 0.25rem;\n		height: calc(100% + 1rem);\n		width: calc(100% + 1rem);\n		background-color: var(--color-gray-50);\n		border-radius: 0.5rem;\n\n		opacity: 0;\n	}\n\n	&:hover::before {\n		opacity: 0.5;\n	}\n"]);return m=function(){return n},n}function h(){var n=(0,o.Z)(["\n	margin: unset;\n\n	position: relative;\n	padding: 0.5rem;\n	background-color: ",";\n	border-radius: 0.5rem;\n	overflow: hidden;\n	display: flex;\n	width: 100%;\n	place-items: center;\n	place-content: center;\n"]);return h=function(){return n},n}function u(){var n=(0,o.Z)(["\n	position: relative;\n	width: 100%;\n	height: auto;\n	object-fit: contain;\n"]);return u=function(){return n},n}function f(){var n=(0,o.Z)(["\n	display: grid;\n	align-content: start;\n	grid-template-columns: 1fr;\n	grid-template-rows: auto 1fr auto;\n	gap: 0.5rem;\n\n	.ActionStack-root {\n		margin-top: 0.25rem;\n		justify-content: start;\n	}\n"]);return f=function(){return n},n}var b=c.Z.a(m()),y=c.Z.figure(h(),function(n){return n.color}),v=c.Z.img(u()),x=c.Z.div(f()),w=function(n){var e=n.title,i=(n.subtitle,n.description),o=n.className,c=n.image,m=n.imageColor,h=(n.actions,(0,a.Z)(n,["title","subtitle","description","className","image","imageColor","actions"])),u=(0,p.Vi)(null!=m?m:"lightgray").alpha(.375).toHex();return(0,s.jsxs)(b,(0,r.Z)((0,t.Z)({className:(0,d.Z)("HorizontalCard-root",o)},h),{children:[(0,s.jsx)(y,{color:u,children:(0,s.jsx)(v,(0,t.Z)({},c))}),(0,s.jsxs)(x,{children:[(0,s.jsx)(l.X,{className:"title",level:5,children:e}),(0,s.jsx)(g.x,{spacing:"small",color:"secondary",children:i})]})]}))}},9053:function(n,e,i){"use strict";i.d(e,{t:function(){return h}});var t=i(7297),r=i(5893),a=i(7074),o=i(5968),s=i(1944),d=i(351);function c(){var n=(0,t.Z)(["\n	--content-grid-padding-block-end: 50%;\n	--action-stack-spacing: 1rem;\n\n	@media screen and (min-width: 425px) {\n		--content-grid-padding-block-end: 52%;\n	}\n\n	@media screen and (min-width: 768px) {\n		--content-grid-padding-block-end: 6.5rem;\n	}\n\n	@media screen and (min-width: 911px) {\n		--content-grid-padding-block-end: 5rem;\n	}\n\n	@media screen and (min-width: 1024px) {\n		--content-grid-padding-block-end: 3rem;\n	}\n\n	display: grid;\n	/* gap: 2rem; */\n	max-width: 900px;\n	z-index: 1;\n\n	padding-block-end: var(--content-grid-padding-block-end);\n\n	.ActionStack-root {\n		margin-top: var(--action-stack-spacing);\n	}\n"]);return c=function(){return n},n}function l(){var n=(0,t.Z)(["\n	--adornment-image-position: absolute;\n	--adornment-image-z-index: 0;\n\n	--adornment-image-width: 100%;\n	--adornment-image-max-width: 100%;\n	--adornment-image-inset: auto -1rem 0 auto;\n\n	@media screen and (min-width: 768px) {\n		--adornment-image-max-width: 36rem;\n		--adornment-image-inset: auto -1rem -2rem auto;\n	}\n\n	padding: 0 0 0 1rem;\n	max-width: var(--adornment-image-max-width);\n	width: var(--adornment-image-width);\n	height: auto;\n\n	position: var(--adornment-image-position);\n	inset: var(--adornment-image-inset);\n\n	z-index: var(--adornment-image-z-index);\n"]);return l=function(){return n},n}function g(){var n=(0,t.Z)(["\n	display: block;\n	margin-block-start: var(--spacing-2);\n	padding-block-start: var(--spacing-2);\n	margin-block-end: var(--spacing-10);\n	border-block-start: solid 2px var(--color-brand-magenta-lighter);\n"]);return g=function(){return n},n}function p(){var n=(0,t.Z)(["\n	display: grid;\n	max-width: 50rem;\n	place-items: start;\n	gap: 1rem;\n	grid-template-columns: 1fr;\n\n	margin-bottom: 3rem;\n\n	@media screen and (min-width: 768px) {\n		grid-template-columns: repeat(6, minmax(0, 1fr));\n\n		* {\n			grid-column: span 2;\n		}\n\n		*:nth-of-type(1) {\n			grid-column: span 3;\n		}\n\n		*:nth-of-type(2) {\n			grid-column: span 3;\n		}\n	}\n"]);return p=function(){return n},n}(0,a.ZP)("div")(c());var m=(0,a.ZP)("img")(l());(0,a.ZP)("em")(g()),(0,a.ZP)("div")(p());var h=function(){return new Date().toISOString().split("T")[0],(0,r.jsx)(s.W,{children:(0,r.jsxs)(o.g,{isClipped:!0,isRounded:!0,color:"grey",className:"EstimatorBlock-root",children:[(0,r.jsx)(d.O,{}),(0,r.jsx)(m,{src:"assets/juicy-business-coach-explains-the-material-min@512w.webp",alt:"Explaining the material"})]})})}},2040:function(n,e,i){"use strict";i.d(e,{G:function(){return v}});var t=i(6042),r=i(7297),a=i(5893),o=i(7074),s=i(917),d=i(5968),c=i(1944),l=i(2562),g=i(696),p=i(6651);function m(){var n=(0,r.Z)(["\n		--wrapper-padding-bottom: 6rem;\n\n		@media screen and (min-width: 1123px) {\n			--wrapper-padding-bottom: 5rem;\n		}\n\n		background-color: var(--color-brand-","-lighter);\n		margin-top: calc(5rem - 10rem);\n\n		padding-bottom: var(--wrapper-padding-bottom);\n\n		.PageHeaderBlock-container {\n			position: relative;\n		}\n\n		.Heading-root,\n		.Text-root {\n			color: var(--color-brand-tertiary-darker);\n		}\n	"]);return m=function(){return n},n}function h(){var n=(0,r.Z)(["\n	/* background-color: rgba(0, 0, 0, 0.1); */\n\n	width: 100%;\n	max-width: 40rem;\n	display: block;\n	margin-bottom: -12rem;\n	padding: 3rem; // TODO: shouldn't be applied to all images\n\n	@media screen and (min-width: 600px) {\n		float: right;\n	}\n\n	@media screen and (min-width: 768px) {\n		margin-top: -2.5rem;\n	}\n\n	@media screen and (min-width: 1027px) {\n		margin-top: -5rem;\n		margin-right: -2.5rem;\n	}\n\n	@media screen and (min-width: 1123px) {\n		position: absolute;\n		inset: 100% 0 auto auto;\n		margin-top: -15rem;\n		max-width: 35rem;\n	}\n\n	@media screen and (min-width: 1200px) {\n		max-width: 40rem;\n	}\n"]);return h=function(){return n},n}function u(){var n=(0,r.Z)(["\n	max-width: 40rem;\n"]);return u=function(){return n},n}var f=(0,o.ZP)(d.g)(function(n){var e=n.color;return(0,s.iv)(m(),void 0===e?"tertiary":e)}),b=(0,o.ZP)("img")(h()),y=(0,o.ZP)("hgroup")(u()),v=function(n){var e=n.title,i=n.description,r=n.color,o=n.ImageProps;return(0,a.jsx)(f,{color:r,children:(0,a.jsxs)(c.W,{className:"PageHeaderBlock-container",children:[(0,a.jsxs)(y,{children:[(0,a.jsx)(l.X,{hasMargin:!0,level:1,children:(0,a.jsx)(p.v,{brand:!0,children:e})}),(0,a.jsx)(g.x,{children:i})]}),o&&(0,a.jsx)(b,(0,t.Z)({},o))]})})};v.displayName="PageHeaderBlock"},8090:function(n,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return nP},default:function(){return nZ}});var t,r,a=i(6042),o=i(9396),s=i(7297),d=i(5893),c=i(6651),l=i(7074),g=i(5968),p=i(1944),m=i(3537),h=i(1687),u=i(4065),f=i(917),b=i(9618),y=i(7028),v=i(4944);function x(){var n=(0,s.Z)(["\n		padding: 1rem 1rem;\n		border-left: none;\n		border-right: none;\n		border-bottom: none;\n		background-color: transparent;\n\n		&:nth-of-type(1) {\n			border-top: none;\n		}\n\n		.MuiSvgIcon-root {\n			padding: 4px;\n			height: ",";\n			width: ",";\n\n			display: block;\n			margin-right: 0.25rem;\n			opacity: 0.5;\n\n			transition: all 300ms;\n			transform: rotate(0deg);\n		}\n\n		.MuiAccordionSummary-root {\n			display: flex;\n			gap: 2rem;\n			padding: 0;\n			font-size: ",";\n			line-height: ",";\n\n			font-weight: normal;\n		}\n\n		&.Mui-expanded {\n			.MuiSvgIcon-root {\n				transform: rotate(45deg);\n				opacity: 1;\n				color: var(--color-brand-primary-main);\n			}\n		}\n\n		.MuiAccordionDetails-root {\n			padding-left: calc(0.25rem + ",");\n		}\n	"]);return x=function(){return n},n}var w="28px",k=(0,l.ZP)(u.Z)(function(n){return n.theme,(0,f.iv)(x(),w,w,"18px",w,w)}),j=(0,l.ZP)(b.Z)(function(n){var e=n.theme;return(0,a.Z)({},e.typography.body2)}),P=function(n){var e=n.question,i=n.answer,t=n.actions;return n.resources,(0,d.jsxs)(k,{variant:"outlined",children:[(0,d.jsxs)(j,{children:[(0,d.jsx)(h.Z,{}),e]}),(0,d.jsxs)(y.Z,{children:[i,t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)(v.k,{size:"small",actions:t})]})]})]})},Z=i(2562);function C(){var n=(0,s.Z)(["\n	margin-bottom: 2rem;\n	justify-content: center;\n	text-align: center;\n"]);return C=function(){return n},n}var T=(0,l.ZP)("div")(C()),S=function(n){var e=n.title,i=(n.subtitle,n.description,n.actions,n.faqs);return n.children,(0,d.jsx)(p.W,{children:(0,d.jsx)(g.g,{isRounded:!0,color:"grey",children:(0,d.jsxs)(m.u,{children:[(0,d.jsx)(p.W,{size:"small",children:(0,d.jsx)(T,{children:(0,d.jsx)(Z.X,{level:2,children:e})})}),(0,d.jsx)(p.W,{size:"small",children:null==i?void 0:i.map(function(n,e){return(0,d.jsx)(P,(0,a.Z)({},n),e)})})]})})})},D=i(2040),N=i(5843),z=i(1953),G=i(2546),O=i(2340),B=i(696);function F(){var n=(0,s.Z)(["\n		max-width: ","px;\n\n		.ActionStack-root {\n			margin-top: 1.5rem;\n		}\n\n		.Heading-root {\n			margin-bottom: 0.5rem;\n		}\n	"]);return F=function(){return n},n}function E(){var n=(0,s.Z)(["\n	padding-block: 3rem !important;\n"]);return E=function(){return n},n}function M(){var n=(0,s.Z)(["\n		display: grid;\n		grid-template-columns: 1fr;\n		gap: 3rem;\n\n		hgroup {\n			display: block;\n\n			h2 {\n				max-width: 1200px;\n			}\n			p {\n				max-width: 500px;\n			}\n		}\n\n		.container {\n			text-align: center;\n			display: grid;\n			grid-template-columns: 1fr;\n			gap: 1rem;\n\n			.ActionStack-root {\n				justify-content: center !important;\n			}\n		}\n\n		.services {\n			display: grid;\n			grid-template-columns: 1fr;\n			column-gap: 1rem;\n			row-gap: 1rem;\n		}\n\n		"," {\n			.services {\n				column-gap: 3rem;\n				row-gap: 4rem;\n				grid-template-columns: repeat(2, 1fr);\n			}\n		}\n\n		"," {\n			.services {\n				grid-template-columns: repeat(3, 1fr);\n			}\n		}\n	"]);return M=function(){return n},n}(0,l.ZP)("div")(function(n){var e=n.theme;return(0,f.iv)(F(),e.breakpoints.values.sm)});var A=(0,l.ZP)(g.g)(E()),I=(0,l.ZP)("div")(function(n){var e=n.theme;return(0,f.iv)(M(),e.breakpoints.up("sm"),e.breakpoints.up("lg"))}),_=function(n){var e=n.title,i=n.description,t=n.services;return(0,d.jsx)(A,{children:(0,d.jsx)(p.W,{children:(0,d.jsxs)(I,{children:[(0,d.jsxs)("hgroup",{children:[(0,d.jsx)(Z.X,{hasMargin:!0,level:2,children:(0,d.jsx)(c.v,{brand:!0,children:e})}),(0,d.jsx)(B.x,{children:i})]}),(0,d.jsx)("div",{className:"services",children:null==t?void 0:t.map(function(n,e){return(0,d.jsx)(O.L,{title:n.name,description:n.summary,image:n.image,imageColor:n.color},e)})}),(0,d.jsxs)(v.k,{color:"secondary",children:[(0,d.jsx)(z.Z,{mr:-1,zIndex:1,children:"Looking for something else?"}),(0,d.jsx)(G.z,{color:"text",endIcon:(0,d.jsx)(N.Z,{}),children:"Contact Us"})]})]})})})};_.displayName="ServicesBlock";var V=i(828),W=i(7294),X=JSON.parse('[{"id":"402ec515-94ef-5795-81e4-d89445d548d4","title":"Screen Printing","slug":"screen-printing","description":"A brief step-by-step on screen printing.","steps":[{"id":"f266f55c-3914-5dc2-91f5-b60d786ab26a","title":"Design Creation","description":"The first step in screen printing is to create the design that will be printed. This design is typically created using graphic design software and is saved as a high-resolution file.","image":{"src":"assets/process/screen-printing/design-creation-min@512w.webp","alt":"Design Creation"}},{"id":"327ea96c-a63b-5592-893b-c5eeeb89112e","title":"Screen Preparation","description":"Once the design is created, a mesh screen is prepared by coating it with a light-sensitive emulsion. The emulsion is then allowed to dry, and the design is printed onto a transparent film.","image":{"src":"assets/process/screen-printing/print-machine-min@512w.webp","alt":"Screen Preparation"}},{"id":"dfed906e-fb71-5a9b-acca-d9417eb2b2ff","title":"Exposure","description":"The printed film is placed on the prepared screen and exposed to a bright light. The light hardens the emulsion on the screen, except for the areas where the design has been printed. These areas remain soft and can be washed away later.","image":{"src":"assets/process/screen-printing/prepared-screen-min@512w.webp","alt":""}},{"id":"b02d6fbb-52cf-413b-a87f-5084658c68aa","title":"Washing","description":"After exposure, the screen is washed with water, which removes the soft emulsion, leaving the design on the screen.","image":{"src":"assets/process/screen-printing/screen-preparation-min@512w.webp","alt":""}},{"id":"f05debb0-d433-5763-a9bd-6553a6973de8","title":"Ink Preparation","description":"The ink is mixed and prepared according to the color and type of substrate being printed on.","image":{"src":"assets/process/screen-printing/ink-preparation-min@512w.webp","alt":""}},{"id":"62c5e875-66cc-5203-b190-000939666b9d","title":"Drying and Curing","description":"After printing, the substrate is dried and cured to ensure that the ink is fully set and will not smudge or wash away.","image":{"src":"assets/process/screen-printing/drying-and-curing-min@512w.webp","alt":"Drying and Curing"}}],"created":"2023-04-26T14:03:36.241Z"},{"id":"6e4f4b13-ec4a-57d1-9749-362a90fa214a","title":"Embroidery","slug":"embroidery","description":"","steps":[{"id":"08add4df-c2d2-5c79-bb26-0f50b64d1248","title":"Design Creation","description":"Create a digital or physical design that you want to embroider on your chosen item, such as a garment, accessory, or promotional product.","image":{"src":"","alt":"Embroidery Design Creation"}},{"id":"bfff5388-590f-5433-bd98-90507dd04f1b","title":"Digitization","description":"Convert the design into a digital embroidery file format that can be read by an embroidery machine.","image":{"src":"","alt":"Embroidery Digitization"}},{"id":"9ce092ef-1ae2-5a9d-b307-1be13fa867f6","title":"Material Preparation","description":"Choose the appropriate type and color of fabric or material for your embroidery project, and hoop it securely onto the embroidery machine.","image":{"src":"","alt":"Embroidery Material Preparation"}},{"id":"bd13b1e2-8233-5684-a82c-44791dbd8019","title":"Embroidery","description":"Load the digitized design into the embroidery machine and start the embroidery process. The machine will stitch the design onto the fabric according to the programmed pattern, using various colored threads to create the final embroidered design.","image":{"src":"","alt":"Embroidery Embroidery"}},{"id":"57ca55ff-663b-5fa8-aa09-887adc915581","title":"Finishing","description":"Once the embroidery is complete, trim any excess threads and remove the fabric from the hoop. The embroidered item may then be finished with additional steps, such as steaming, ironing, or adding backing material for stability.","image":{"src":"","alt":"Embroidery Finishing"}}],"createdOn":"2023-04-26T16:54:55.760Z","createBy":""},{"id":"4d0722aa-3447-5d7e-b941-787e74a82e25","title":"Direct to Garment (DTG) Printing","slug":"direct-to-garment-dtg-printing","description":"","steps":[{"id":"498ac389-472d-5f4d-a2f3-673db8be1bd2","title":"Design Creation","description":"Create a digital design using computer software or choose an existing design that you want to print on a garment using DTG printing.","image":{"src":"","alt":"Direct to Garment (DTG) Printing Design Creation"}},{"id":"d5ee7c4a-4911-51a2-870c-9a1cc28c7b83","title":"Garment Preparation","description":"Choose a suitable garment made of 100% cotton or a cotton blend, and pre-treat it with a special solution to prepare the fabric for optimal ink absorption.","image":{"src":"","alt":"Direct to Garment (DTG) Printing Garment Preparation"}},{"id":"5c48e323-37af-53e0-acd2-23e17565a4f0","title":"Printing","description":"Load the pre-treated garment onto the DTG printer, and using specialized inkjet technology, the printer will directly apply the ink onto the fabric according to the design file. Multiple passes may be required for full color saturation.","image":{"src":"","alt":"Direct to Garment (DTG) Printing Printing"}},{"id":"4f3b9fc3-9685-55b5-9b6b-b4048d4739be","title":"Curing","description":"After printing, the garment is heat pressed or cured using a heat press machine or a conveyor dryer to cure the ink and ensure it adheres to the fabric.","image":{"src":"","alt":"Direct to Garment (DTG) Printing Curing"}},{"id":"7a2a32ac-ee86-5383-9c5b-0ba2b59ba9b6","title":"Finishing","description":"Once cured, the DTG printed garment may be finished with additional steps, such as steaming, ironing, or adding any additional embellishments, such as rhinestones or studs.","image":{"src":"","alt":"Direct to Garment (DTG) Printing Finishing"}}],"createdOn":"2023-04-26T16:54:55.761Z","createBy":""},{"id":"f9ec252d-5590-5fe2-ac44-c597b7691db3","title":"Screen Printing","slug":"screen-printing","description":"","steps":[{"id":"b257b033-02cf-54d6-abeb-5d80b772a91d","title":"Design Creation","description":"Create a digital or physical design that you want to print on your chosen item, such as a t-shirt, poster, or flyer.","image":{"src":"","alt":"Screen Printing Design Creation"}},{"id":"243ff469-6776-553d-9a95-b54cefa6d023","title":"Screen Preparation","description":"Create a screen for each color in the design by coating a mesh screen with a light-sensitive emulsion, exposing it to UV light through the design, and washing away the emulsion to create a stencil.","image":{"src":"","alt":"Screen Printing Screen Preparation"}},{"id":"ef0b1264-431b-592e-a167-58cc29dd0a84","title":"Ink Preparation","description":"Mix the ink colors according to the design specifications, and load them onto the appropriate screens.","image":{"src":"","alt":"Screen Printing Ink Preparation"}},{"id":"b274359d-2e24-54f9-b289-e2b95652fc02","title":"Printing","description":"Place the item to be printed onto a flat surface, and position the screens over the item. Using a squeegee, force the ink through the stencil onto the item, creating the design. Repeat this process for each color in the design.","image":{"src":"","alt":"Screen Printing Printing"}},{"id":"3ceec6fb-b86e-520c-861d-f6ab48f5aa71","title":"Curing","description":"Once the ink is applied, the item is dried and cured using a heat press machine, a conveyor dryer, or other curing methods, to ensure the ink bonds permanently to the fabric or surface.","image":{"src":"","alt":"Screen Printing Curing"}},{"id":"66d3908b-6b9d-56a1-b55b-cc3c3a46e410","title":"Finishing","description":"After curing, the screen printed item may be finished with additional steps, such as steaming, ironing, or adding any additional embellishments.","image":{"src":"","alt":"Screen Printing Finishing"}}],"createdOn":"2023-04-26T16:54:55.761Z","createBy":""},{"id":"dff5a11e-b737-50ab-b9cc-de89c8814adc","title":"Vinyl Cutting","slug":"vinyl-cutting","description":"","steps":[{"id":"67863a0c-5ea3-5c89-bc51-cfb9ea46aaca","title":"Design Creation","description":"Create a digital design using computer software or choose an existing design that you want to cut out of vinyl material.","image":{"src":"","alt":"Vinyl Cutting Design Creation"}},{"id":"af6ec665-c975-5cc1-a0f8-1d8df4b060c5","title":"Material Preparation","description":"Choose the appropriate type and color of vinyl material for your project, and load it onto a vinyl cutting machine.","image":{"src":"","alt":"Vinyl Cutting Material Preparation"}},{"id":"4b25669a-7a72-597d-b74a-667aba22dab7","title":"Cutting","description":"Using specialized blades, the vinyl cutting machine will precisely cut the design out of the vinyl material according to the design file. The excess vinyl material is peeled away, leaving only the desired design on the backing sheet.","image":{"src":"","alt":"Vinyl Cutting Cutting"}},{"id":"ef083ca9-9165-516a-8b34-57148713e562","title":"Weeding","description":"Once the design is cut, the excess vinyl material needs to be carefully removed from the backing sheet, a process known as weeding. This leaves only the desired design on the backing sheet, ready for application.","image":{"src":"","alt":"Vinyl Cutting Weeding"}},{"id":"15a3d7fe-3f97-530c-b986-7673522663a5","title":"Transfer Tape Application","description":"Transfer tape, also known as application tape, is applied over the top of the weeded design to help transfer it to the final surface.","image":{"src":"","alt":"Vinyl Cutting Transfer Tape Application"}},{"id":"a7c6284c-f2bd-59c1-a01d-03b728e398f1","title":"Application","description":"The transfer tape with the design is carefully positioned and applied onto the final surface, such as a garment, a sign, or a promotional product. The design is then pressed down firmly to ensure proper adhesion.","image":{"src":"","alt":"Vinyl Cutting Application"}},{"id":"ec127e9b-321c-556c-9e8c-272e894bed25","title":"Removal of Transfer Tape","description":"The transfer tape is peeled away, leaving behind the vinyl design on the final surface.","image":{"src":"","alt":"Vinyl Cutting Removal of Transfer Tape"}},{"id":"6f709c89-8386-59f1-9cc5-3712dd9f018a","title":"Finishing","description":"Once the vinyl design is applied, any excess vinyl material or transfer tape is trimmed away, and the final product may be finished with additional steps, such as heat pressing or additional embellishments.","image":{"src":"","alt":"Vinyl Cutting Finishing"}}],"createdOn":"2023-04-26T16:54:55.761Z","createBy":""},{"id":"f9267fa1-d809-58fd-bf12-ee537db15abd","title":"T-Shirt Printing","slug":"t-shirt-printing","description":"","steps":[{"id":"2af6073b-28bd-59d7-9ec1-cbcdcaf5e605","title":"Design Creation","description":"Create a digital or physical design that you want to print on a t-shirt.","image":{"src":"","alt":"T-Shirt Printing Design Creation"}},{"id":"b1013ee7-fff5-5713-b1f7-961e1e6e69ef","title":"Garment Preparation","description":"Choose a suitable t-shirt made of 100% cotton or a cotton blend, and pre-treat it with a special solution to prepare the fabric for optimal ink absorption, if necessary.","image":{"src":"","alt":"T-Shirt Printing Garment Preparation"}},{"id":"b7f40094-088e-5732-b364-7fc81670a4f8","title":"Printing","description":"Using the chosen printing method, such as screen printing, DTG printing, or vinyl cutting, apply the design onto the t-shirt according to the design file and method-specific steps.","image":{"src":"","alt":"T-Shirt Printing Printing"}},{"id":"d525cf74-1f49-5f76-9575-8bb5ad18d2ff","title":"Curing","description":"After printing, the t-shirt is heat pressed or cured using a heat press machine or a conveyor dryer to cure the ink or vinyl and ensure it adheres to the fabric.","image":{"src":"","alt":"T-Shirt Printing Curing"}},{"id":"4ff9ecf8-af51-5293-887b-1c68da4f3f26","title":"Finishing","description":"Once cured, the printed t-shirt may be finished with additional steps, such as steaming, ironing, or adding any additional embellishments.","image":{"src":"","alt":"T-Shirt Printing Finishing"}}],"createdOn":"2023-04-26T16:54:55.761Z","createBy":""},{"id":"ad24adb2-256f-5954-8383-d3e6bf34e0d7","title":"Poster Printing","slug":"poster-printing","description":"","steps":[{"id":"affd2c26-7e7e-5b7d-ba23-84d46337332c","title":"Design Creation","description":"Create a digital or physical design that you want to print on a poster.","image":{"src":"","alt":"Poster Printing Design Creation"}},{"id":"b3cde994-c815-5533-a141-a5dd0abcc0cb","title":"File Preparation","description":"Convert the design into a high-resolution digital file with the appropriate color mode, resolution, and dimensions for poster printing.","image":{"src":"","alt":"Poster Printing File Preparation"}},{"id":"0b7e9c8b-786f-5880-9037-5f38c8baa23c","title":"Material Selection","description":"Choose the appropriate type and size of paper or material for your poster, considering factors such as durability, finish, and intended use.","image":{"src":"","alt":"Poster Printing Material Selection"}},{"id":"b77789b4-c68d-5fdf-a046-8266cd9b5d5f","title":"Printing","description":"Load the selected paper or material into the printer, and using the appropriate printing method, such as digital printing or offset printing, print the design onto the poster material according to the design file and method-specific steps.","image":{"src":"","alt":"Poster Printing Printing"}},{"id":"083846af-b7ce-5064-857b-9fec1bd73506","title":"Finishing","description":"Once printed, the poster may be finished with additional steps, such as laminating, mounting onto a backing board, or trimming to the desired size.","image":{"src":"","alt":"Poster Printing Finishing"}}],"createdOn":"2023-04-26T16:54:55.761Z","createBy":""},{"id":"c2e9be47-1467-5ebe-96ec-ed1aea4c5ef6","title":"Business Cards","slug":"business-cards","description":"","steps":[{"id":"5b4d11ce-d31f-5e21-a259-e77ab74a3e03","title":"Design Creation","description":"Create a digital or physical design that you want to print on your business cards.","image":{"src":"","alt":"Business Cards Design Creation"}},{"id":"588e5041-ca1d-5aab-b5fd-6bdfccd152ff","title":"File Preparation","description":"Convert the design into a high-resolution digital file with the appropriate color mode, resolution, and dimensions for business card printing.","image":{"src":"","alt":"Business Cards File Preparation"}},{"id":"66801f34-42d9-53f9-8789-1b00feadd12d","title":"Material Selection","description":"Choose the appropriate type and size of paper or material for your business cards, considering factors such as durability, finish, and intended use.","image":{"src":"","alt":"Business Cards Material Selection"}},{"id":"99219e26-9348-5d62-8525-9a1e5a548dca","title":"Printing","description":"Load the selected paper or material into the printer, and using the appropriate printing method, such as digital printing or offset printing, print the design onto the business card material according to the design file and method-specific steps.","image":{"src":"","alt":"Business Cards Printing"}},{"id":"9282fa2b-8479-5072-acbd-f210b244ba90","title":"Finishing","description":"Once printed, the business cards may be finished with additional steps, such as laminating, die-cutting into","image":{"src":"","alt":"Business Cards Finishing"}}],"createdOn":"2023-04-26T16:54:55.762Z","createBy":""}]');function H(){var n=(0,s.Z)(["\n	height: ",";\n	width: ",";\n	border-radius: 0.5rem 0 0.5rem 0;\n\n	position: absolute;\n	top: 0;\n	left: 0;\n\n	display: flex;\n	align-items: center;\n	justify-content: center;\n\n	font-family: 'Inter';\n	font-style: normal;\n	font-weight: 700;\n	font-size: 0.875rem;\n	text-align: center;\n	letter-spacing: -0.02em;\n\n	color: #111827;\n"]);return H=function(){return n},n}function L(){var n=(0,s.Z)(["\n	z-index: -1;\n	box-sizing: border-box;\n	position: absolute;\n	top: 0;\n\n	height: calc(100%);\n	width: 0;\n	left: 0.5rem;\n\n	border-left: dotted "," #cbd5e1;\n"]);return L=function(){return n},n}function q(){var n=(0,s.Z)(["\n	--image-border-radius: 0.5rem;\n\n	list-style: none;\n\n	position: relative;\n	z-index: 0;\n	display: grid;\n	grid-template-columns: 1fr;\n	align-content: start;\n\n	.image {\n		overflow: hidden;\n		position: relative;\n		padding: unset;\n		margin: unset;\n\n		display: block;\n		width: 100%;\n		background-color: #cbd5e1;\n		border-radius: var(--image-border-radius);\n\n		min-height: 160px;\n		aspect-ratio: 1.75/1;\n\n		img {\n			width: 100%;\n			height: 100%;\n			object-fit: cover;\n		}\n	}\n\n	.content {\n		padding-inline: 1.75rem 0;\n		padding-block: 1rem 3rem;\n\n		.title {\n			font-family: Inter;\n			font-size: 1.5rem;\n			line-height: 1.125;\n			font-weight: 700;\n			letter-spacing: -0.02em;\n			text-align: left;\n\n			margin-bottom: 0.5rem;\n		}\n\n		.description {\n			font-family: Inter;\n			font-size: 1rem;\n			font-weight: 400;\n			line-height: 1.5rem;\n			letter-spacing: 0em;\n			text-align: left;\n		}\n	}\n\n	&:last-of-type {\n		margin-bottom: 0;\n	}\n\n	/* sequence */\n	&:nth-of-type(1n) {\n		.marker {\n			background-color: var(--color-brand-cyan-main);\n			color: var(--color-brand-cyan-contrast);\n		}\n	}\n\n	&:nth-of-type(2n) {\n		.marker {\n			background-color: var(--color-brand-magenta-main);\n			color: var(--color-brand-magenta-contrast);\n		}\n	}\n\n	&:nth-of-type(3n) {\n		.marker {\n			background-color: var(--color-brand-yellow-main);\n			color: var(--color-brand-yellow-contrast);\n		}\n	}\n\n	&:nth-of-type(4n) {\n		.marker {\n			background-color: var(--color-brand-key-main);\n			color: var(--color-brand-key-contrast);\n		}\n	}\n"]);return q=function(){return n},n}var R="1.75rem",U=(0,l.ZP)("div")(H(),R,R),Y=(0,l.ZP)("div")(L(),"0.25rem"),J=(0,l.ZP)(function(n){return(0,d.jsxs)("li",{id:n.id,className:n.className,children:[(0,d.jsxs)("figure",{className:"image",children:[(0,d.jsx)("img",(0,a.Z)({},n.image)),(0,d.jsx)(U,{className:"marker",children:null!==(t=n.stepNumber)&&void 0!==t?t:1})]}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("div",{className:"title",children:n.title}),(0,d.jsx)("div",{className:"description",children:n.description}),n.children]}),(0,d.jsx)(Y,{className:"connector"})]})})(q());function K(){var n=(0,s.Z)(["\n	height: ",";\n	width: ",";\n\n	position: absolute;\n	top: ",";\n\n	background-color: var(--image-background-color);\n	border-radius: var(--shape-rounding-full);\n\n	display: flex;\n	align-items: center;\n	justify-content: center;\n\n	font-family: 'Inter';\n	font-style: normal;\n	font-weight: 700;\n	font-size: 1.5rem;\n	text-align: center;\n	letter-spacing: -0.02em;\n\n	color: #111827;\n"]);return K=function(){return n},n}function Q(){var n=(0,s.Z)(["\n	z-index: -1;\n	box-sizing: border-box;\n	position: absolute;\n	top: 50%;\n	transform: translateY(-50%);\n\n	height: calc(100% + ",");\n	width: calc(25% + ",");\n\n	border: dotted "," var(--image-background-color);\n"]);return Q=function(){return n},n}function $(){var n=(0,s.Z)(["\n	padding-inline: 1rem;\n	gap: 5.75rem;\n\n	list-style: none;\n\n	position: relative;\n	z-index: 0;\n	display: grid;\n	grid-template-columns: 1fr 1fr;\n	align-content: start;\n\n	padding-block: ",";\n\n	.image,\n	.content {\n		order: 1;\n	}\n\n	.image {\n		display: inline-flex;\n		overflow: hidden;\n		position: relative;\n		padding: unset;\n		margin: unset;\n\n		width: 100%;\n		background-color: var(--image-background-color);\n		border-radius: 1rem;\n		aspect-ratio: 2/1.2;\n\n		img {\n			width: 100%;\n			height: 100%;\n			object-fit: cover;\n		}\n	}\n\n	.content {\n		.title {\n			font-family: Inter;\n			font-size: 2.0625rem;\n			font-weight: 700;\n			line-height: ",";\n			letter-spacing: -0.02em;\n			text-align: left;\n		}\n\n		.description {\n			font-family: Inter;\n			font-size: 1rem;\n			font-weight: 400;\n			line-height: 1.5rem;\n			letter-spacing: 0em;\n			text-align: left;\n		}\n	}\n\n	&:first-of-type {\n		.marker {\n			left: 50%;\n			transform: translateX(-50%);\n		}\n\n		.connector {\n			border-left-color: transparent;\n			border-top-color: transparent;\n			left: calc(25% - "," / 2);\n			border-radius: 0 0 5rem 0;\n		}\n	}\n\n	&:nth-of-type(2n + 2) {\n		padding-inline: 3rem;\n		gap: 2.25rem;\n\n		.marker {\n			transform: translateX(-50%);\n		}\n\n		.image {\n			order: 2;\n		}\n\n		.connector {\n			border-right-color: transparent;\n			left: calc(-"," / 2);\n			border-radius: 5rem 0 0 5rem;\n		}\n	}\n\n	&:nth-of-type(2n + 3) {\n		padding-inline: 1rem;\n		gap: 5.75rem;\n\n		.marker {\n			left: 50%;\n			transform: translateX(-50%);\n		}\n\n		.connector {\n			border-left-color: transparent;\n			left: calc(25% - "," / 2);\n			border-radius: 0 5rem 5rem 0;\n		}\n	}\n\n	&:last-of-type {\n		.connector {\n			border-bottom-color: transparent;\n			height: calc("," + ",");\n			top: calc(-"," / 2);\n			transform: translateY(0);\n		}\n	}\n\n	/* alternating color */\n	&:nth-of-type(1n) {\n		.marker {\n			background-color: var(--color-brand-cyan-main);\n			color: var(--color-brand-cyan-contrast);\n		}\n	}\n\n	&:nth-of-type(2n) {\n		.marker {\n			background-color: var(--color-brand-magenta-main);\n			color: var(--color-brand-magenta-contrast);\n		}\n	}\n\n	&:nth-of-type(3n) {\n		.marker {\n			background-color: var(--color-brand-yellow-main);\n			color: var(--color-brand-yellow-contrast);\n		}\n	}\n\n	&:nth-of-type(4n) {\n		.marker {\n			background-color: var(--color-brand-key-main);\n			color: var(--color-brand-key-contrast);\n		}\n	}\n"]);return $=function(){return n},n}var nn="0.25rem",ne="3.5rem",ni="4rem",nt=(0,l.ZP)("div")(K(),ne,ne,ni),nr=(0,l.ZP)("div")(Q(),nn,nn,nn),na=(0,l.ZP)(function(n){return(0,d.jsxs)("li",{id:n.id,className:n.className,children:[(0,d.jsx)(nt,{className:"marker",children:null!==(r=n.stepNumber)&&void 0!==r?r:1}),(0,d.jsx)("figure",{className:"image",children:(0,d.jsx)("img",(0,a.Z)({},n.image))}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("div",{className:"title",children:n.title}),(0,d.jsx)("div",{className:"description",children:n.description}),n.children]}),(0,d.jsx)(nr,{className:"connector"})]})})($(),ni,ne,nn,nn,nn,ni,ne,nn);function no(){var n=(0,s.Z)(["\n	max-width: 63.75rem;\n	margin-inline: auto;\n	padding-inline: 0;\n"]);return no=function(){return n},n}var ns=(0,l.ZP)("ol")(no()),nd=i(2097),nc=i(1225),nl=i(6829);function ng(){var n=(0,s.Z)(["\n	display: flex;\n	gap: 0.25rem;\n	align-items: center;\n	justify-content: center;\n"]);return ng=function(){return n},n}function np(){var n=(0,s.Z)(["\n	display: grid;\n	gap: 1rem;\n\n	.Heading-root {\n		text-align: center;\n	}\n"]);return np=function(){return n},n}(0,nl.Z)("div")(ng());var nm=(0,nl.Z)(p.W)(np()),nh=function(n){n.events;var e=(0,nd.Z)().breakpoints,i=(0,nc.Z)(e.down("sm")),t=(0,V.Z)((0,W.useState)(0),2),r=t[0];t[1];var a=i?J:na;return(0,d.jsxs)(g.g,{className:"EventBlock-root",children:[(0,d.jsx)(nm,{children:(0,d.jsxs)(Z.X,{isCentered:!0,level:2,className:"mb-4",children:["See how ",(0,d.jsx)(c.v,{color:"magenta",children:"Screen Print"})]})}),(0,d.jsx)(ns,{children:X[r].steps.map(function(n,e){return(0,d.jsx)(a,{stepNumber:e+1,title:n.title,description:n.description,image:n.image},e)})})]})},nu=i(4218),nf=i(9877),nb=i(9053);function ny(){var n=(0,s.Z)(["\n	display: inline-flex;\n	width: 100%;\n	max-width: 512px;\n"]);return ny=function(){return n},n}function nv(){var n=(0,s.Z)(["\n	position: absolute;\n	width: 100%;\n	top: 0;\n	left: 50%;\n	transform: translateX(-50%);\n\n	background: transparent;\n	z-index: -1;\n\n	display: none;\n	place-content: end;\n\n	top: 98rem;\n\n	@media screen and (min-width: 1200px) {\n		display: flex;\n	}\n"]);return nv=function(){return n},n}function nx(){var n=(0,s.Z)(["\n	top: 55rem;\n"]);return nx=function(){return n},n}var nw=nl.Z.img(ny()),nk=(0,nl.Z)(p.W)(nv()),nj=(0,nl.Z)(nk)(nx()),nP=!0,nZ=function(n){var e=n.PageHeaderBlockProps,i=n.FooterProps,t=n.serviceBlocks,r=n.FaqBlockProps;return(0,d.jsxs)(nu.H,{FooterProps:i,children:[(0,d.jsx)(nf.V,{text:"Services"}),(0,d.jsx)(D.G,(0,o.Z)((0,a.Z)({},e),{title:(0,d.jsx)(c.v,{brand:!0,children:"Our Services"})})),t.map(function(n,e){return(0,d.jsx)(_,(0,a.Z)({},n),e)}),(0,d.jsx)(nh,{}),(0,d.jsx)(nb.t,{}),(0,d.jsx)(S,(0,a.Z)({},r)),(0,d.jsx)(nk,{children:(0,d.jsx)(nw,{src:"assets/juicy-girl-is-working-on-laptop-at-a-remote-job-min@512w.webp",alt:"Services 1"})}),(0,d.jsx)(nj,{children:(0,d.jsx)(nw,{src:"assets/juicy-web-designer-girl-making-landing-page-with-video-color-palette-and-site-blocks-min@512w.webp",alt:"Services 2"})})]})}}},function(n){n.O(0,[493,63,218,351,774,888,179],function(){return n(n.s=7133)}),_N_E=n.O()}]);