require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{35:function(t,e,n){"use strict";var a=s(n(2)),r=s(n(36));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(r.default))},36:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),r=n.n(a),s=n(39);var c=function(t){n(37)},i=n(0)(r.a,s.a,c,"data-v-453b3714",null);e.default=i.exports},37:function(t,e){},38:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=n(3);e.default={data:function(){return{qrcUrl:""}},computed:a({},(0,r.mapState)({personInfo:function(t){return t.personInfo}})),methods:{getQrc:function(){var e=this;this.Post({url:this.url.userShareQrcode,data:{uid:this.personInfo.id}}).then(function(n){200===n.code?e.qrcUrl=n.data:t.showToast({title:"获取二维码失败",duration:1e3,icon:"none"})}).catch(function(e){t.showToast({title:"获取二维码失败",duration:1e3,icon:"none"})})}},onLoad:function(){this.getQrc()}}}).call(e,n(1).default)},39:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"qrc"},[e("image",{staticClass:"bg",attrs:{src:"http://www.dbl.name/wbc/static/images/形状 4.png"}}),e("view",{staticClass:"qrc_box"},[e("image",{attrs:{src:this.qrcUrl}})]),e("view",{staticClass:"click"},[this._v("\n\t\t\t长按保存二维码\n\t\t")])])},staticRenderFns:[]};e.a=a}},[35]);