(this.webpackJsonpprism=this.webpackJsonpprism||[]).push([[0],{223:function(e,a,t){},232:function(e,a,t){},233:function(e,a,t){},234:function(e,a,t){},235:function(e,a,t){},236:function(e,a,t){},237:function(e,a,t){},238:function(e,a,t){},239:function(e,a,t){},240:function(e,a,t){},241:function(e,a,t){},378:function(e,a,t){"use strict";t.r(a);var o=t(3),n=t(0),r=t.n(n),c=t(10),l=t.n(c),i=t(36),s=(t(223),t(111)),d=t(13),m=t(14),u=t(16),h=t(15),j=t(39),p=t(43),b=t(427),f=t(8),O=t(444),x=Object(O.a)({root:{flexGrow:1,cursor:"pointer","&:hover button":{opacity:"1"}},copyContainer:{padding:".2rem",zIndex:11},buttonBox:{flexGrow:1},copyButton:{marginBottom:"2rem",marginTop:"1rem"},button:{opacity:"0"},boxContent:{textTransform:"uppercase"},overlay:{opacity:0,zIndex:0,transition:"transform 500ms ease-in-out",display:"flex"},show:{opacity:1,zIndex:12,width:"100vw",height:"100vh",transform:"Scale(50)",position:"absolute"},seeMore:{textDecoration:"none",backgroundColor:"#6e737b",padding:"4px 7px"},dartText:{}}),v=t(426),g=t(443),C=t(442),y=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.handleClose,t=e.message,n=e.background,r=e.copied;return Object(o.jsx)(g.a,{open:r,autoHideDuration:2e3,onClose:a,children:Object(o.jsx)(C.a,{elevation:6,variant:"filled",onClose:a,severity:"success",children:"".concat(t," ").concat(n)})})}}]),t}(r.a.Component),N=t(38),k=t.n(N),B=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).myRef=r.a.createRef(),o}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.handleClick,t=e.handleClose,n=e.classes,r=e.copied,c=e.background,l=k()(c).luminance()<=.8?"white":"black";return Object(o.jsxs)("div",{ref:this.myRef,children:[Object(o.jsx)(v.a,{variant:"outlined",onClick:a,className:n.button,style:{color:"".concat(l),borderColor:"".concat(l)},children:"Copy"}),Object(o.jsx)(y,{background:c,copied:r,handleClose:t,message:"Copied on clipboard -"})]})}}]),t}(r.a.Component),S=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.classes,n=e.paletteId,r=e.id,c=e.background,l=k()(c).luminance()<=.8?"white":"black";return Object(o.jsx)("div",{children:Object(o.jsxs)(b.a,{container:!0,alignItems:"center",justify:"space-evenly",className:t.buttonBox,children:[Object(o.jsx)(b.a,{item:!0,className:t.copyButton,children:Object(o.jsx)(B,Object(j.a)({},this.props))}),Object(o.jsxs)(b.a,{item:!0,container:!0,justify:"space-between",alignItems:"flex-end",className:t.copyContainer,children:[Object(o.jsx)(b.a,{className:t.boxContent,style:{color:"".concat(l),flexWrap:"wrap",width:".5rem"},children:a}),Object(o.jsx)(b.a,{item:!0,children:Object(o.jsx)(i.b,{to:"/palette/".concat(n,"/").concat(r),className:t.seeMore,style:{color:"".concat(l)},onClick:function(e){return e.stopPropagation()},children:"More"})})]})]})})}}]),t}(r.a.Component),w=Object(f.a)(x)(S),F=t(107),P=t.n(F),L=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.background,t=e.handleClick,n=e.classes;return Object(o.jsx)(P.a,{text:a,onCopy:t,children:Object(o.jsx)(b.a,{item:!0,container:!0,xs:12,sm:4,md:3,direction:"column",style:{background:a},className:n.root,justify:"flex-end",children:Object(o.jsx)(b.a,{item:!0,children:Object(o.jsx)(w,Object(j.a)({},this.props))})})})}}]),t}(r.a.Component),I=Object(f.a)(x)(L),A=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).state={copied:!1},o.handleClick=o.handleClick.bind(Object(p.a)(o)),o.handleClose=o.handleClose.bind(Object(p.a)(o)),o}return Object(m.a)(t,[{key:"handleClick",value:function(){this.setState({copied:!0})}},{key:"handleClose",value:function(e,a){"clickaway"!==a&&this.setState({copied:!1})}},{key:"render",value:function(){var e=this.state.copied;return Object(o.jsx)(I,Object(j.a)({handleClick:this.handleClick,handleClose:this.handleClose,copied:e,ref:this.myRef},this.props))}}]),t}(r.a.Component),D=Object(O.a)({center:{flexGrow:1,minHeight:"82.5vh",fontFamily:"New Rocker"}}),E=t(199),R=(t(149),t(232),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).valuetext=o.valuetext.bind(Object(p.a)(o)),o}return Object(m.a)(t,[{key:"valuetext",value:function(e){this.props.changeLevel(e.target.ariaValueNow)}},{key:"render",value:function(){return console.log(this.props.level),Object(o.jsxs)("span",{style:{display:"flex",width:"320px",alignItems:"center"},children:[Object(o.jsx)("span",{style:{marginRight:"10px"},children:"Level"}),Object(o.jsx)(E.a,{defaultValue:this.props.level,onAfterChange:this.props.changeLevel,step:100,min:100,max:900}),Object(o.jsx)("span",{style:{marginLeft:"10px"},children:this.props.level})]})}}]),t}(r.a.Component)),G=t(446),T=t(428),M=t(441),U=(t(233),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).handleClick=function(e){o.setState({changed:!0}),o.props.handleChange(e)},o.state={changed:!1},o.handleClose=o.handleClose.bind(Object(p.a)(o)),o}return Object(m.a)(t,[{key:"handleClose",value:function(e,a){"clickaway"!==a&&this.setState({changed:!1})}},{key:"render",value:function(){var e=this.props,a=e.format;e.handleChange;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(T.a,{className:"formControl",children:Object(o.jsxs)(M.a,{value:a,onChange:this.handleClick,displayEmpty:!0,className:"selectEmpty",children:[Object(o.jsx)(G.a,{value:"hex",children:"HEX - #ffffff"}),Object(o.jsx)(G.a,{value:"rgb",children:"RGB - rgb(255,255, 255)"}),Object(o.jsx)(G.a,{value:"rgba",children:"RGBA - rgba(255,255,255, 1.0)"})]})}),Object(o.jsx)(y,{handleClose:this.handleClose,copied:this.state.changed,message:"Color Format Changed \ud83e\udd21 ",background:""})]})}}]),t}(r.a.Component)),q=(t(234),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.changeLevel,t=e.level,n=e.format,r=e.handleFormat,c=(e.paletteName,e.showSlider);return Object(o.jsxs)("div",{className:"header-root",children:[Object(o.jsx)(i.b,{to:"/",className:"title",children:Object(o.jsx)("span",{children:"Prism"})}),c&&Object(o.jsx)(R,{changeLevel:a,level:t}),Object(o.jsx)(U,{format:n,handleChange:r})]})}}]),t}(r.a.Component)),z=(t(235),function(e){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("span",{className:"footerText",children:[e.name," "]})})}),H=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(p.a)(o)),o.handleFormat=o.handleFormat.bind(Object(p.a)(o)),o}return Object(m.a)(t,[{key:"changeLevel",value:function(e){this.setState({level:e}),console.log(e)}},{key:"handleFormat",value:function(e){this.setState({format:e.target.value})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteId,r=this.props.palettes,c=r.colors,l=r.id,i=this.state,s=i.level,d=i.format;console.log(this.props);var m=c[s].map((function(e,a){var o=Object(j.a)(Object(j.a)({},e),{},{paletteId:t});return Object(n.createElement)(A,Object(j.a)(Object(j.a)({background:e[d]},o),{},{key:a}))}));return Object(o.jsxs)(b.a,{container:!0,direction:"column",children:[Object(o.jsx)(b.a,{item:!0,children:Object(o.jsx)(q,{changeLevel:this.changeLevel,level:this.state.level,format:d,handleFormat:this.handleFormat,paletteName:l,showSlider:!0})}),Object(o.jsx)(b.a,{item:!0,container:!0,className:a.center,children:m}),Object(o.jsx)(b.a,{item:!0,className:a.footer,children:Object(o.jsx)(z,{name:l})})]})}}]),t}(r.a.Component),V=Object(f.a)(D)(H),W=t(21),J=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Y=(t(236),t(90)),K=[50,100,200,300,400,500,600,700,800,900];function Q(e){var a,t={paletteName:e.name,id:e.id,emoji:e.emoji,colors:{}},o=Object(Y.a)(K);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,c,l,i=Object(Y.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,d=(c=s.color,l=10,k.a.scale(function(e){var a="#fff";return[k()(e).darken(1.4).hex(),e,a]}(c)).mode("lab").colors(l)).reverse();for(var m in d)t.colors[K[m]].push({name:"".concat(s.name," ").concat(K[m]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:d[m],rgb:k()(d[m]).css(),rgba:k()(d[m]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(u){i.e(u)}finally{i.f()}return t}t(237),t(238);var X=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).renderTinyColorBox=o.renderTinyColorBox.bind(Object(p.a)(o)),o}return Object(m.a)(t,[{key:"renderTinyColorBox",value:function(){return this.props.colors.map((function(e,a){return Object(o.jsx)("div",{className:"tinyBox",style:{backgroundColor:"".concat(e.color)}},a)}))}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"showBoxes",children:this.renderTinyColorBox()})}}]),t}(r.a.Component),Z=t(202),$=t(87),_=t.n($),ee=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).deletePale=function(a){e.props.deletePalette(e.props.id)},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.colors,t=e.emoji,n=e.id,r=e.paletteName;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(Z.a,{children:Object(o.jsxs)("div",{className:"paletteBox",children:[Object(o.jsx)(i.b,{to:"/palette/".concat(n),className:"links",children:Object(o.jsx)("div",{className:"colorBox",children:Object(o.jsx)(X,{colors:a,name:n})})}),Object(o.jsxs)("div",{className:"contentBox",children:[Object(o.jsxs)("span",{className:"p-title",children:[r," ",t]}),Object(o.jsx)(_.a,{onClick:this.deletePale})]})]})})})}}]),t}(r.a.Component),ae=t(431),te=t(142),oe=t.n(te),ne=(t(239),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).renderPalettes=function(){return e.props.palettes.map((function(a){return Object(o.jsx)("div",{children:Object(o.jsx)(ee,Object(j.a)(Object(j.a)({},a),{},{deletePalette:e.props.deletePalette}))},a.id)}))},e}return Object(m.a)(t,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"homePage",children:[Object(o.jsx)("div",{className:"sidebars"}),Object(o.jsxs)("div",{className:"outerBox",children:[Object(o.jsxs)("div",{className:"homeheader",children:[Object(o.jsxs)("h1",{children:["Prism ",Object(o.jsx)(oe.a,{})]}),Object(o.jsx)("span",{className:"homeheader-fab",children:Object(o.jsx)(i.b,{to:"/palette/createnew",children:Object(o.jsxs)(ae.a,{variant:"extended",size:"small",color:"primary","aria-label":"add",children:[Object(o.jsx)(oe.a,{className:"palicon"}),"Create Palette"]})})})]}),Object(o.jsx)("div",{className:"innerBox",children:this.renderPalettes()})]}),Object(o.jsx)("div",{className:"sidebars"})]})}}]),t}(r.a.Component)),re=(t(240),Object(O.a)({root:{cursor:"pointer","&:hover button":{opacity:"1"}},shade:{height:"41vh",textAlign:"center",textTransform:"uppercase"},contentBox:{display:"flex",height:"100%",flexDirection:"column",justifyContent:"center"},title:{},copyContainer:{padding:".2rem",zIndex:11},buttonBox:{flexGrow:1},copyButton:{marginBottom:"2rem",marginTop:"1rem"},button:{opacity:"0",marginBottom:"1rem"},boxContent:{textTransform:"uppercase"},overlay:{opacity:0,zIndex:0,transition:"transform 500ms ease-in-out",display:"flex"},show:{opacity:1,zIndex:12,width:"100vw",height:"100vh",transform:"Scale(50)",position:"absolute"},seeMore:{textDecoration:"none"}})),ce=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).handleClick=function(){o.setState({copied:!0})},o.handleClose=function(e,a){"clickaway"!==a&&o.setState({copied:!1})},o.state={copied:!1},o}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.shades,t=e.classes,n=e.format,r=k()(a[n]).luminance()<=.8?"white":"black";return console.log(this.props),Object(o.jsx)(P.a,{text:a[n],children:Object(o.jsx)("div",{className:t.root,children:Object(o.jsx)("div",{style:{backgroundColor:"".concat(a[n]),color:"".concat(r)},className:t.shade,children:Object(o.jsxs)("span",{className:t.contentBox,children:[Object(o.jsx)(B,{background:a[n],copied:this.state.copied,handleClick:this.handleClick,handleClose:this.handleClose,classes:t}),Object(o.jsx)("span",{className:t.title,children:a.name})]})})})})}}]),t}(r.a.Component),le=Object(f.a)(re)(ce),ie=(t(241),t(185)),se=t.n(ie),de=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).changeLevel=function(e){o.setState({level:e}),console.log(e)},o.handleFormat=function(e){o.setState({format:e.target.value})},o.findPalette=function(e){return o.props.palettes.find((function(a){return a.id===e}))},o.getShaded=function(){var e=[],a=o.props.match.params,t=a.paletteId,n=a.colorId,r=Q(o.findPalette(t));for(var c in r.colors){var l,i=Object(Y.a)(r.colors[c]);try{for(i.s();!(l=i.n()).done;){var s=l.value;s.id===n&&e.push(s)}}catch(d){i.e(d)}finally{i.f()}}o.setState({colorShades:e})},o.state={colorShades:[],level:500,format:"hex"},o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getShaded()}},{key:"render",value:function(){var e=this.state,a=e.colorShades,t=e.level,n=e.format,r=this.props.match.params.paletteId;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"shadesPage",children:[Object(o.jsx)(q,{changeLevel:this.changeLevel,level:t,format:n,handleFormat:this.handleFormat,showSlider:!1}),Object(o.jsxs)("div",{className:"shadesBox",children:[a.slice(1).map((function(e,a){return Object(o.jsx)(le,{shades:e,format:n},a)})),Object(o.jsxs)("div",{className:"goBack",children:[Object(o.jsx)(i.b,{to:"/palette/".concat(r),className:"goBackLink",children:Object(o.jsx)(v.a,{variant:"outlined",color:"default",startIcon:Object(o.jsx)(se.a,{}),children:"Go Back to"})}),Object(o.jsx)("span",{children:r})]})]}),Object(o.jsx)(z,{name:r})]})})}}]),t}(r.a.Component),me=Object(W.g)(de),ue=t(77),he=t(113),je=t(6),pe=t(447),be=t(439),fe=t(440),Oe=t(425),xe=t(195),ve=t.n(xe),ge=t(432),Ce=400,ye=Object(ge.a)((function(e){return{root:{display:"flex",fontFamily:"New Rocker, cursive"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(Ce,"px)"),marginLeft:Ce,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:Ce,flexShrink:0},drawerPaper:{width:Ce},drawerHeader:Object(j.a)(Object(j.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{textDecoration:"none",fontFamily:"New Rocker, cursive"},titleBox:{flexGrow:1},boxContainer:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)"},"@media only screen and (max-width: 750px)":{boxContainer:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}},"@media only screen and (min-width: 750px)":{boxContainer:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"}},"@media only screen and (min-width: 1000px)":{boxContainer:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)"}}}})),Ne=t(198),ke=t(191),Be=t.n(ke),Se=t(110),we=t.n(Se),Fe=t(192),Pe=t.n(Fe),Le=t(58),Ie=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).handleChangeComplete=function(e){o.setState({currentColor:e.hex}),o.props.onChangeColor(e.hex)},o.handleInputChange=function(e){var a=e.target.value;o.setState({colorName:a})},o.handleAddColor=function(e){var a={color:o.state.currentColor,name:o.state.colorName};console.log(a),o.props.addNewColor(a)},o.createRandomColor=function(){for(var e,a,t=o.props.allPalettes.map((function(e){return e.colors})).flat(),n=!0;n;)e=Math.floor(Math.random()*t.length),a=t[e],n=o.props.colorsList.some((function(e){return e.name==a.name})),console.log(a);o.props.addNewColor(a)},o.state={currentColor:"#0d84b2",colorName:""},o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Le.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colorsList.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Le.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colorsList.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"render",value:function(){var e=this.props.classes,a=k()(this.state.currentColor).luminance()<=.8?"white":"black",t=this.props.colorsList.length>=20,n=t?"grey":this.state.currentColor;return Object(o.jsxs)("div",{className:e.root,children:[Object(o.jsxs)("div",{className:e.buttonBox,children:[Object(o.jsx)(v.a,{variant:"contained",color:"secondary",className:e.button,onClick:this.props.clearColorsList,startIcon:Object(o.jsx)(Be.a,{}),children:"Clear Color"}),Object(o.jsx)(v.a,{variant:"contained",color:"default",onClick:this.createRandomColor,disabled:t,startIcon:Object(o.jsx)(we.a,{}),children:"Random Color"})]}),Object(o.jsx)(Ne.a,{color:this.state.currentColor,className:e.picker,onChangeComplete:this.handleChangeComplete}),Object(o.jsxs)(Le.ValidatorForm,{onSubmit:this.handleAddColor,onError:function(e){return console.log(e)},style:{marginTop:".5rem"},children:[Object(o.jsx)(Le.TextValidator,{onChange:this.handleInputChange,label:"Color Name",value:this.state.colorName,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["this field is required","Name should be unique","Color should be unique"]}),Object(o.jsx)(v.a,{variant:"contained",color:"primary",size:"large",style:{backgroundColor:n,marginTop:"1rem",cursor:"pointer",color:"".concat(a)},startIcon:Object(o.jsx)(Pe.a,{}),type:"submit",disabled:t,children:t?"Palette full":"Add Color"})]})]})}}]),t}(r.a.Component),Ae=Object(f.a)({root:{display:"flex",height:"70vh",flexDirection:"column",alignItems:"center",justifyContent:"space-around",fontFamily:"New Rocker, cursive"},buttonBox:{marginTop:"3rem"},button:{marginRight:".5rem"},picker:{marginTop:"1rem"}})(Ie),De=t(193),Ee=t.n(De),Re=t(112),Ge=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.color,t=e.classes,n=e.deleteColor,r=k()(a.color).luminance()<=.8?"white":"black";return Object(o.jsx)(Z.a,{elevation:2,style:{backgroundColor:a.color,borderRadius:"0px"},className:t.root,children:Object(o.jsxs)("div",{className:t.innerBox,children:[Object(o.jsx)("span",{style:{color:"".concat(r)},children:a.name.toUpperCase()}),Object(o.jsx)("span",{className:t.deleteButton,children:Object(o.jsx)(_.a,{style:{color:"".concat(r)},onClick:n})})]})})}}]),t}(r.a.Component),Te=Object(Re.b)(Object(f.a)({root:{display:"grid",gridTemplateColumn:"1fr 1fr 1fr",height:"23vh",color:"white",alignItem:"center",fontFamily:"New Rocker, cursive","& div":{gridRowStart:"2",gridColumnStart:"1",gridColumnEnd:"2",fontSize:"1.2rem"}},innerBox:{display:"flex",flexDirection:"column",textAlign:"center",wordBreak:"break-word"},deleteButton:{marginTop:"1rem",cursor:"pointer",transition:"all .5s ease-in-out","&:hover":{transform:"scaleY(1.2)"}}})(Ge)),Me=Object(Re.a)(Object(f.a)({root:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)"}})((function(e){var a=e.colorsList,t=e.deleteColor,n=e.classes;return Object(o.jsx)("div",{className:n.root,children:a.map((function(e,a){return Object(o.jsx)(Te,{color:e,index:a,sortIndex:a,deleteColor:function(){return t(e.name)}},a)}))})}))),Ue=t(437),qe=t(438),ze=t(380),He=t(194),Ve=t.n(He),We=t(433),Je=t(436),Ye=t(435),Ke=t(434),Qe=(t(367),t(200)),Xe=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=a.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleEmojiOpen=function(){o.setState({emojiBox:!0})},o.handleClose=function(){o.setState({open:!1})},o.handleSubmit=function(e){console.log(e.native);var a=o.state.paletteName,t={paletteName:a,id:a.toLowerCase().replace(/ /g,"-"),emoji:e.native,colors:o.props.colorsList};o.props.savePalette(t),o.props.history.push("/")},o.handleInputChange=function(e){console.log(e.target.value),o.setState({paletteName:e.target.value})},o.state={open:!1,paletteName:"",emojiBox:!1},o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Le.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName!==a}))}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(v.a,{variant:"contained",color:"default",onClick:this.handleClickOpen,startIcon:Object(o.jsx)(we.a,{}),children:"Save new palette"}),Object(o.jsxs)(We.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(o.jsx)(Ke.a,{id:"form-dialog-title",children:"Add Palette Name"}),Object(o.jsx)(Ye.a,{children:Object(o.jsxs)(Le.ValidatorForm,{ref:"form",onSubmit:this.handleEmojiOpen,onError:function(e){return console.log(e)},style:{marginBottom:"1rem"},children:[Object(o.jsx)(Le.TextValidator,{onChange:this.handleInputChange,label:"Color Name",value:this.state.paletteName,validators:["required","isPaletteNameUnique"],errorMessages:["this field is required","Name already taken"]}),Object(o.jsxs)(Je.a,{style:{marginTop:"1rem"},children:[Object(o.jsx)(v.a,{onClick:this.handleClose,color:"secondary",variant:"contained",children:"Cancel"}),Object(o.jsx)(v.a,{color:"primary",type:"submit",variant:"contained",children:"Choose emoji"})]})]})})]}),Object(o.jsxs)(We.a,{open:this.state.emojiBox,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(o.jsx)(Ke.a,{id:"form-dialog-title",children:"Add emoji for new palette"}),Object(o.jsx)(Qe.a,{onSelect:this.handleSubmit})]})]})}}]),t}(r.a.Component),Ze=Object(W.g)(Xe),$e=function(e){var a=ye(),t=e.open,n=e.headerColor,r=e.handleDrawerOpen,c=e.textColor,l=e.colorsList,s=e.savePalette,d=e.palettes;return Object(o.jsx)(Ue.a,{position:"fixed",style:{backgroundColor:n},className:Object(je.a)(a.appBar,Object(ue.a)({},a.appBarShift,t)),children:Object(o.jsxs)(qe.a,{children:[Object(o.jsx)(Oe.a,{color:"inherit","aria-label":"open drawer",onClick:r,edge:"start",className:Object(je.a)(a.menuButton,t&&a.hide),children:Object(o.jsx)(Ve.a,{})}),Object(o.jsx)(ze.a,{variant:"h6",noWrap:!0,className:a.titleBox,children:Object(o.jsx)(i.b,{to:"/",className:a.title,style:{color:"".concat(c)},children:"Prism"})}),Object(o.jsx)(Ze,{colorsList:l,savePalette:s,palettes:d})]})})};var _e=Object(W.g)((function(e){var a=ye(),t=r.a.useState(!0),n=Object(he.a)(t,2),c=n[0],l=n[1],i=r.a.useState("#0d84b2"),d=Object(he.a)(i,2),m=d[0],u=d[1],h=r.a.useState([{color:"#0d84b2",name:"blue"}]),j=Object(he.a)(h,2),p=j[0],b=j[1],f=k()(m).luminance()<=.8?"white":"black",O=e.palettes,x=e.savePalette,v=e.palettes;return Object(o.jsxs)("div",{className:a.root,children:[Object(o.jsx)(be.a,{}),Object(o.jsx)($e,{open:c,headerColor:m,handleDrawerOpen:function(){l(!0)},textColor:f,colorsList:p,savePalette:x,palettes:v}),Object(o.jsxs)(pe.a,{className:a.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:a.drawerPaper},children:[Object(o.jsx)("div",{className:a.drawerHeader,children:Object(o.jsx)(Oe.a,{onClick:function(){l(!1)},children:Object(o.jsx)(ve.a,{})})}),Object(o.jsx)(fe.a,{}),Object(o.jsx)("div",{children:Object(o.jsx)(Ae,{onChangeColor:function(e){u(e)},addNewColor:function(e){b([].concat(Object(s.a)(p),[e]))},clearColorsList:function(){b([])},allPalettes:O,colorsList:p})})]}),Object(o.jsxs)("main",{className:Object(je.a)(a.content,Object(ue.a)({},a.contentShift,c)),children:[Object(o.jsx)("div",{className:a.drawerHeader}),Object(o.jsx)(Me,{axis:"xy",colorsList:p,onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;b(Ee()(p,a,t))},deleteColor:function(e){var a=p.filter((function(a){return a.name!==e}));b(a)}})]})]})})),ea=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.savePalette,t=e.palettes;return Object(o.jsx)("div",{children:Object(o.jsx)(_e,{savePalette:a,palettes:t})})}}]),t}(r.a.Component),aa=t(196),ta=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;Object(d.a)(this,t),(o=a.call(this,e)).findPalette=function(e){return o.state.palettes.find((function(a){return a.id===e}))},o.saveNewPalette=function(e){console.log(e),o.setState({palettes:[].concat(Object(s.a)(o.state.palettes),[e])},o.syncLocalStorage)},o.syncLocalStorage=function(){window.localStorage.setItem("palettes",JSON.stringify(o.state.palettes))},o.deletePalette=function(e){var a=o.state.palettes.filter((function(a){return a.id!==e}));o.setState({palettes:a},o.syncLocalStorage),console.log(e)};var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||J},o}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.state.palettes;return console.log("palettes",a),Object(o.jsxs)(aa.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper",children:[Object(o.jsx)(W.a,{exact:!0,path:"/palette/createnew",render:function(){return Object(o.jsx)("div",{className:"",children:Object(o.jsx)(ea,{savePalette:e.saveNewPalette,palettes:a})})}}),Object(o.jsx)(W.a,{exact:!0,path:"/",render:function(){return Object(o.jsx)("div",{className:"",children:Object(o.jsx)(ne,{palettes:a,deletePalette:e.deletePalette})})}}),Object(o.jsx)(W.a,{exact:!0,path:"/palette/:paletteName",render:function(a){return Object(o.jsx)("div",{className:"",children:Object(o.jsx)(V,{paletteId:a.match.params.paletteName,palettes:Q(e.findPalette(a.match.params.paletteName))})})}}),Object(o.jsx)(W.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(){return Object(o.jsx)("div",{className:"",children:Object(o.jsx)(me,{palettes:a})})}})]})}}]),t}(r.a.Component),oa=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,448)).then((function(a){var t=a.getCLS,o=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),o(e),n(e),r(e),c(e)}))};l.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(ta,{})})}),document.getElementById("root")),oa()}},[[378,1,2]]]);
//# sourceMappingURL=main.08f2d621.chunk.js.map