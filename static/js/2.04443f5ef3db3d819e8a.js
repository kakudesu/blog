webpackJsonp([2],{TODu:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"freevideo",data:function(){return{list:{},selectVal:"",inputVal:""}},created:function(){var t=this;this.$axios.get("../../static/vlist.json").then(function(e){200==e.status&&(t.list=e.data)}).catch(function(t){console.log(t)})},mounted:function(){},methods:{go:function(t){t&&this.inputVal?this.inputVal.match("http")?window.open(""+t+this.inputVal):alert("你填写地址的格式恐怕不对吧，不要乱写好不好？٩(๑>◡<๑)۶"):alert("你没有选择线路或者没填写视频地址. !!!∑(ﾟДﾟノ)ノ")}},components:{}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"title",rawName:"v-title"}],attrs:{id:"freevideo","data-title":"免费看VIP电影"}},[t._m(0),t._v(" "),n("div",{staticClass:"layer"},[n("div",{staticClass:"content"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectVal,expression:"selectVal"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectVal=e.target.multiple?n:n[0]}}},t._l(t.list.list,function(e){return n("option",{domProps:{value:e.url}},[t._v(t._s(e.name))])})),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{type:"text",placeholder:"输入视频连接地址"},domProps:{value:t.inputVal},on:{input:function(e){e.target.composing||(t.inputVal=e.target.value)}}}),t._v(" "),n("button",{on:{click:function(e){t.go(t.selectVal)}}},[t._v("确定")]),t._v(" "),n("p",{staticClass:"video-tips"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-3"}})]),t._v("\n        提示：我觉得我不用提示你也知道怎么用。(｡◕ˇ∀ˇ◕)\n      ")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"video-banner"},[e("img",{attrs:{src:n("kgV+"),alt:""}})])}]};var s=n("VU/8")(a,i,!1,function(t){n("oWfa")},"data-v-48f86008",null);e.default=s.exports},"kgV+":function(t,e,n){t.exports=n.p+"static/img/video-banner.2a49d7b.png"},oWfa:function(t,e){}});