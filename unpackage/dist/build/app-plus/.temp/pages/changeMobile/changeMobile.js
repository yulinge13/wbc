require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([18],{62:function(e,t,n){"use strict";var o=s(n(1)),a=s(n(63));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(a.default))},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(65),a=n.n(o),s=n(66);var i=function(e){n(64)},l=n(0)(a.a,s.a,i,"data-v-6fadf8aa",null);t.default=l.exports},64:function(e,t){},65:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(3),s=(o=a)&&o.__esModule?o:{default:o};t.default={data:function(){return{personInfo:{},code:""}},components:{TimeBtn:s.default},onLoad:function(){this.personInfo=e.getStorageSync("personInfo")||this.$store.state.personInfo,console.log(this.personInfo)},methods:{linkTo:function(){this.code.length>0?e.navigateTo({url:"../changMobileTwo/changMobileTwo"}):e.showToast({title:"请先验证手机!",duration:1e3,icon:"none"})}}}}).call(t,n(2).default)},66:function(e,t,n){"use strict";var o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"changeMobile"},[n("view",{staticClass:"header"},[e._v("\n\t\t"+e._s(e.personInfo.mobile)+"\n\t")]),n("view",{staticClass:"fill"},[n("view",{staticClass:"val"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{placeholder:"请输入手机短信验证码",eventid:"AEW-0"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]),n("TimeBtn",{attrs:{mobile:e.personInfo.mobile,mpcomid:"6tL-0"}})],1),n("view",{staticClass:"btn",attrs:{eventid:"NII-1"},on:{tap:e.linkTo}},[e._v("\n\t\t下一步\n\t")])])},staticRenderFns:[]};t.a=o}},[62]);