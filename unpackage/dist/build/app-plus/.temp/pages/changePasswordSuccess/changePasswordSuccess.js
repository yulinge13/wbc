require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([20],{58:function(t,e,n){"use strict";var s=i(n(2)),a=i(n(59));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},59:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(61),a=n.n(s),i=n(62);var r=function(t){n(60)},c=n(0)(a.a,i.a,r,"data-v-204a1422",null);e.default=c.exports},60:function(t,e){},61:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},a=n(3);e.default={data:function(){return{}},computed:{},methods:s({},(0,a.mapMutations)(["clearPersonInfo"]),{ok:function(){this.clearPersonInfo(),t.switchTab({url:"../index/index"})}})}}).call(e,n(1).default)},62:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"changePasswordSuccess"},[this._m(0),e("view",{staticClass:"moble_name"},[this._v("\n\t\t您的登录密码已更改！\n\t")]),e("view",{staticClass:"tishi"},[this._v("\n\t\t下次请使用此新密码登录账户\n\t")]),e("view",{staticClass:"btn",attrs:{eventid:"AuM-0"},on:{tap:this.ok}},[this._v("\n\t\t确定\n\t")]),e("view",{staticClass:"beizhu"},[this._v("\n\t\t备注：确定以后回到登录页面重新登录\n\t")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"top"},[e("image",{attrs:{src:"http://www.dbl.name/wbc/static/images/已完成 (1).png"}}),e("view",{staticClass:"name"},[this._v("\n\t\t\t密码设置成功！\n\t\t")])])}]};e.a=s}},[58]);