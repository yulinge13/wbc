require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([21],{58:function(e,t,o){"use strict";var i=l(o(1)),n=l(o(59));function l(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},59:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(61),n=o.n(i),l=o(62);var s=function(e){o(60)},a=o(0)(n.a,l.a,s,"data-v-22f972d0",null);t.default=a.exports},60:function(e,t){},61:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},l=o(3),s=o(4),a=(i=s)&&i.__esModule?i:{default:i};t.default={data:function(){return{mobileCode:"",mobile:""}},computed:n({},(0,l.mapState)({personInfo:function(e){return e.personInfo},code:function(e){return e.code}}),{isMobile:function(){return!/^1[34578]\d{9}$/.test(this.mobile)}}),components:{TimeBtn:a.default},onLoad:function(){},methods:{linkTo:function(){this.isMobile?e.showToast({title:"请输入正确的手机号",duration:1e3,icon:"none"}):this.code.length>0&&this.mobileCode.length>0&&this.code===this.mobileCode?this.Post({url:this.url.userEditMobile,data:{mobile:this.personInfo.mobile,new_mobile:this.mobile,code:this.code}}).then(function(t){200===t.code&&e.reLaunch({url:"../changeMobileSuccess/changeMobileSuccess"})}):(console.log(this.code),console.log(this.mobileCode),e.showToast({title:"手机验证码不对",duration:1e3,icon:"none"}))}}}}).call(t,o(2).default)},62:function(e,t,o){"use strict";var i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"changMobileTwo"},[o("view",{staticClass:"fill"},[o("view",{staticClass:"val"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{placeholder:"请输入修改后的手机号",eventid:"8LR-0"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})])]),o("view",{staticClass:"fill"},[o("view",{staticClass:"val"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.mobileCode,expression:"mobileCode"}],attrs:{placeholder:"请输入手机短信验证码",eventid:"1TL-1"},domProps:{value:e.mobileCode},on:{input:function(t){t.target.composing||(e.mobileCode=t.target.value)}}})]),o("TimeBtn",{attrs:{disable:e.isMobile,mobile:e.mobile,type:"reg",mpcomid:"34q-0"}})],1),o("view",{class:e.isMobile?"btn no_btn":"btn",attrs:{eventid:"nym-2"},on:{tap:e.linkTo}},[e._v("\n\t\t下一步\n\t")])])},staticRenderFns:[]};t.a=i}},[58]);