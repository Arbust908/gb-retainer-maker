(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{188:function(t,e,r){"use strict";var n=r(4),l=r(18),o=r(22),c=r(119),d=r(63),f=r(11),h=r(48).f,x=r(64).f,v=r(9).f,m=r(191).trim,_=n.Number,C=_,y=_.prototype,S="Number"==o(r(78)(y)),w="trim"in String.prototype,k=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,l,o=(e=w?e.trim():m(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(S?f((function(){y.valueOf.call(r)})):"Number"!=o(r))?c(new C(k(e)),r,_):k(e)};for(var E,I=r(8)?h(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)l(C,E=I[N])&&!l(_,E)&&v(_,E,x(C,E));_.prototype=y,y.constructor=_,r(12)(n,"Number",_)}},190:function(t,e,r){t.exports=r.p+"img/9f75eb4.jpg"},191:function(t,e,r){var n=r(6),l=r(23),o=r(11),c=r(192),d="["+c+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),x=function(t,e,r){var l={},d=o((function(){return!!c[t]()||"​"!="​"[t]()})),f=l[t]=d?e(v):c[t];r&&(l[r]=f),n(n.P+n.F*d,"String",l)},v=x.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=x},192:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},197:function(t,e,r){"use strict";r.r(e);r(19);var n=r(3),l=(r(188),{props:{size:{type:Number,default:4}},computed:{iconSize:function(){return"w-"+this.size+" h-"+this.size}}}),o=r(10),c={components:{CircleIcon:Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{class:this.iconSize,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("g",[e("path",{staticClass:"fill-current",attrs:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z"}}),this._v(" "),e("path",{staticClass:"opacity-0",attrs:{d:"M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z"}})])])}),[],!1,null,null,null).exports},props:{name:{type:String,default:"Action"},times:{type:Number,default:0},type:{type:String,default:"Action"},description:{type:String,default:'You take an <span class="font-bold italic">Action</span>'}}},d={components:{SkillBox:Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"rounded border border-gray-500 bg-white p-2 mb-2 text-sm"},[r("header",{staticClass:"flex justify-between"},[r("div",{staticClass:"flex items-center"},[r("span",{staticClass:"font-bold mr-2"},[t._v(" "+t._s(t.name)+" ")]),t._v(" "),t._l(t.times,(function(time,t){return r("CircleIcon",{key:t,staticClass:"mr-1",attrs:{size:3}})}))],2),t._v(" "),r("div",[r("span",{staticClass:"italic"},[t._v("\n        "+t._s(t.type)+"\n      ")])])]),t._v(" "),r("main",[r("p",{staticClass:"text-xs",domProps:{innerHTML:t._s(t.description)}})])])}),[],!1,null,null,null).exports},props:{title:{type:String,default:"Actions"},skills:{type:Array,default:function(){return[{}]}}}},f=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("h4",{staticClass:"pb-2 text-sm"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.skills,(function(e,n){return r("SkillBox",t._b({key:n},"SkillBox",e,!1))}))],2)}),[],!1,null,null,null).exports,h={props:{text:{type:String,default:"Level 1"}}},x=Object(o.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"border-4 border-white rounded-xl flex justify-center items-center h-20 w-20"},[e("span",{staticClass:"text-xs"},[this._v(this._s(this.text))])])}),[],!1,null,null,null).exports,v={props:{name:{type:String,default:"Rojak"},type:{type:String,default:"Half-Elf Champion"},armor:{type:String,default:"AC 17"}}},m=Object(o.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("h5",{staticClass:"text-xs"},[t._v(t._s(t.type))]),t._v(" "),r("h2",{staticClass:"text-2xl font-semibold -mt-1"},[t._v(t._s(t.name))]),t._v(" "),r("h3",{staticClass:"text-lg font-semibold -mt-1"},[t._v(t._s(t.armor))])])}),[],!1,null,null,null).exports,_={props:{skills:{type:String,default:"All da Skillz"},special:{type:Object,default:function(){return{title:"Disadvantage",stat:"dex"}}},mainSkills:{type:Array,default:function(){return[{stat:"con",mod:"+3"},{stat:"str",mod:"+2"}]}}}},C={components:{SkillSection:f,LevelBox:x,CharacterBox:m,MidStatBox:Object(o.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"rounded-full flex border-6 border-orange-700 justify-around mx-4 shadow -mt-8 bg-orange-700 text-white leading-tight"},[r("article",{staticClass:"bg-orange-900 rounded-l-full rounded-r justify-end flex w-1/2 p-1 pl-5 mr-1"},[t._l(t.mainSkills,(function(e,n){return r("div",{key:n,staticClass:"flex flex-col justify-center mr-2"},[r("h3",{staticClass:"font-semibold text-lg"},[t._v(t._s(e.mod))]),t._v(" "),r("span",{staticClass:"uppercase font-light"},[t._v(t._s(e.stat))])])})),t._v(" "),r("div",{staticClass:"bg-orange-700 rounded-md flex flex-col justify-center p-1 items-center"},[r("h5",{staticClass:"text-2xs font-bold"},[t._v(t._s(t.special.title))]),t._v(" "),r("span",{staticClass:"uppercase font-light"},[t._v(t._s(t.special.stat))])])],2),t._v(" "),r("article",{staticClass:"bg-orange-900 rounded-full rounded-l flex flex-col w-1/2 p-1 pr-4"},[r("h3",{staticClass:"text-2xs"},[t._v("Skills")]),t._v(" "),r("p",{staticClass:"text-xs"},[t._v(t._s(t.skills))])])])}),[],!1,null,null,null).exports},computed:{retainerSrc:function(){return r(190)}}},y=Object(o.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"rounded-xl border-8 border-orange-700 overflow-hidden",staticStyle:{width:"380px",height:"572px"}},[e("section",{staticClass:"relative"},[e("img",{staticClass:"object-cover rounded-t-lg",staticStyle:{height:"240px"},attrs:{src:this.retainerSrc,alt:"Retainer Image"}}),this._v(" "),e("section",{staticClass:"w-full flex justify-between p-4 absolute top-0 text-white"},[e("CharacterBox"),this._v(" "),e("LevelBox")],1)]),this._v(" "),e("section",{staticClass:"border-t-8 border-orange-700 relative z-20 bg-gray-200 h-full"},[e("MidStatBox"),this._v(" "),e("article",{staticClass:"p-4"},[e("SkillSection"),this._v(" "),e("SkillSection")],1)],1)])}),[],!1,null,null,null).exports,S={components:{BackSlot:Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("article",{staticClass:"w-24 h-24 border-2 border-white bg-gray-400 opacity-25 rounded-lg m-1"})}),[],!1,null,null,null).exports},props:{text:{type:String,default:"I was stunt"},slots:{type:Number,default:12}},computed:{backgroundImg:function(){return"background-image: url(".concat(this.retainerSrc,")")},retainerSrc:function(){return r(190)},textSize:function(){var t=this.text.length;return t<10?"text-2xl":t<20?"text-lg":t<30?"text-sm":t<40?"text-xs":"text-2xs"}}},w={components:{RetainerCard:y,BackCard:Object(o.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"rounded-xl border-8 border-orange-700 overflow-hidden bg-center bg-cover bg-no-repeat relative",staticStyle:{width:"380px",height:"572px"},style:this.backgroundImg},[e("aside",{staticClass:"absolute inset-0 bg-orange-600 opacity-75 z-10"}),this._v(" "),e("section",{staticClass:"pt-4 relative z-20",staticStyle:{"background-color":"rgba()"}},[e("header",{staticClass:"text-white text-center mt-3 mx-4 font-spacial italic",class:this.textSize},[this._v('\n      "I thought adventuring would be more dragons and maidens, you know?\n      Like... less ghouls..."\n    ')]),this._v(" "),e("div",{staticClass:"flex flex-wrap pt-4 px-6"},this._l(this.slots,(function(slot,t){return e("BackSlot",{key:t})})),1)])])}),[],!1,null,null,null).exports},data:function(){return{output:null}},methods:{print:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$refs.front,console.log(t.$refs),console.log(r),n={type:"dataURL"},e.next=6,t.$html2canvas(r,n).then((function(canvas){console.log(canvas.toDataURL("image/jpg"))}));case 6:case"end":return e.stop()}}),e)})))()}}},k=Object(o.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto"},[t.output?r("section",[r("img",{attrs:{src:t.output}})]):t._e(),t._v(" "),r("section",{staticClass:"bg-white overflow-hidden shadow rounded-lg"},[r("div",{staticClass:"border-b border-gray-200 px-4 py-5 sm:px-6"},[t._v("\n      gb-retainer-maker\n    ")]),t._v(" "),r("div",{staticClass:"px-4 py-5 sm:p-6 flex"},[r("RetainerCard",{ref:"front",staticClass:"mr-6",attrs:{id:"front"}}),t._v(" "),r("BackCard")],1),t._v(" "),r("div",{staticClass:"border-t border-gray-200 px-4 py-4 sm:px-6"},[r("button",{staticClass:"border-2 border-blue-500 text-blue-500 bg-transparent rounded hover:text-white hover:bg-blue-500 transition ease-in duration-150 px-4 py-2 mr-4",on:{click:t.print}},[t._v("\n        printMe\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"border-2 border-purple-500 text-purple-500 bg-transparent rounded hover:text-white hover:bg-purple-500 transition ease-in duration-150 px-4 py-2 mr-4",attrs:{to:"/retainers/create"},on:{click:t.print}},[t._v("\n        Edit\n      ")])],1)])])}),[],!1,null,null,null);e.default=k.exports}}]);