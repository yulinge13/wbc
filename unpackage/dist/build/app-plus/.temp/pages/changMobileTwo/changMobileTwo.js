require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([20],{44:function(e,t,n){"use strict";var o=a(n(1)),i=a(n(45));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(i.default))},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(47),i=n.n(o),a=n(51);var s=function(e){n(46)},l=n(0)(i.a,a.a,s,"data-v-ff13dfea",null);t.default=l.exports},46:function(e,t){},47:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(3),a=(o=i)&&o.__esModule?o:{default:o};t.default={data:function(){return{personInfo:{},code:"",mobile:""}},computed:{isMobile:function(){return!/^1[34578]\d{9}$/.test(this.mobile)}},components:{TimeBtn:a.default},onLoad:function(){this.personInfo=e.getStorageSync("personInfo")||this.$store.state.personInfo},methods:{linkTo:function(){}}}}).call(t,n(2).default)},51:function(e,t,n){"use strict";var o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"changMobileTwo"},[n("view",{staticClass:"fill"},[n("view",{staticClass:"val"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{placeholder:"请输入修改后的手机号",eventid:"5A3-0"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})])]),n("view",{staticClass:"fill"},[n("view",{staticClass:"val"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{placeholder:"请输入手机短信验证码",eventid:"cc2-1"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]),n("TimeBtn",{attrs:{disable:e.isMobile,mobile:e.mobile,mpcomid:"fQV-0"}})],1),n("view",{class:e.isMobile?"btn no_btn":"btn",attrs:{eventid:"yJZ-2"},on:{tap:e.linkTo}},[e._v("\n\t\t下一步\n\t")])])},staticRenderFns:[]};t.a=o}},[44]);