require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([18],{40:function(t,s,e){"use strict";var a=n(e(2)),o=n(e(41));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},41:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(43),o=e.n(a),n=e(44);var r=function(t){e(42)},i=e(0)(o.a,n.a,r,"data-v-87db1ee0",null);s.default=i.exports},42:function(t,s){},43:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0});var a=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},o=e(3);s.default={data:function(){return{old_password:"",password:""}},computed:a({},(0,o.mapState)({personInfo:function(t){return t.personInfo}})),onLoad:function(){},methods:{linkTo:function(){this.old_password.length>3&&this.password.length>3?this.old_password===this.password?t.showToast({title:"原交易密码和新密码不能相同",duration:1e3,icon:"none"}):this.Post({url:this.url.userEditpaypwd,data:{uid:this.personInfo.id,old_password:this.old_password,password:this.password}}).then(function(s){200===s.code&&(t.showToast({title:s.msg,duration:1e3}),t.reLaunch({url:"../changePasswordSuccess/changePasswordSuccess"}))}):t.showToast({title:"交易密码不能小于三位",duration:1e3,icon:"none"})}}}}).call(s,e(1).default)},44:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"changeTransactionPasswordTwo"},[e("view",{staticClass:"fill"},[e("view",{staticClass:"val"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.old_password,expression:"old_password"}],attrs:{placeholder:"请输入交易密码",password:!0,eventid:"TNJ-0"},domProps:{value:t.old_password},on:{input:function(s){s.target.composing||(t.old_password=s.target.value)}}})])]),e("view",{staticClass:"fill"},[e("view",{staticClass:"val"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"请输入新的交易密码",password:!0,eventid:"YSp-1"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})])]),e("view",{staticClass:"btn",attrs:{eventid:"lRt-2"},on:{tap:t.linkTo}},[t._v("\n\t\t下一步\n\t")])])},staticRenderFns:[]};s.a=a}},[40]);