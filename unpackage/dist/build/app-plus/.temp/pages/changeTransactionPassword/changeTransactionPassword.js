require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([15],{67:function(t,e,n){"use strict";var s=o(n(1)),a=o(n(68));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},68:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(70),a=n.n(s),o=n(71);var i=function(t){n(69)},r=n(0)(a.a,o.a,i,"data-v-750ad6bf",null);e.default=r.exports},69:function(t,e){},70:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(3),o=(s=a)&&s.__esModule?s:{default:s};e.default={data:function(){return{personInfo:t.getStorageSync("personInfo")||this.$store.state.personInfo||{}}},components:{TimeBtn:o.default},onLoad:function(){console.log(t.getStorageSync("personInfo"))}}}).call(e,n(2).default)},71:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"changeTransactionPassword"},[e("view",{staticClass:"header"},[this._v("\n\t\t"+this._s(this.personInfo.mobile)+"\n\t")]),e("view",{staticClass:"fill"},[this._m(0),e("TimeBtn",{attrs:{mobile:this.personInfo.mobile,type:"reg",mpcomid:"UtV-0"}})],1),e("view",{staticClass:"btn"},[this._v("\n\t\t下一步\n\t")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"val"},[e("input",{attrs:{placeholder:"请输入手机短信验证码"}})])}]};e.a=s}},[67]);