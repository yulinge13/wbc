require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([24],{134:function(t,e,a){"use strict";var s=n(a(1)),i=n(a(135));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},135:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(137),i=a.n(s),n=a(138);var l=function(t){a(136)},r=a(0)(i.a,n.a,l,"data-v-74c75ea4",null);e.default=r.exports},136:function(t,e){},137:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},i=a(3);e.default={data:function(){return{typeLists:[{name:"互转WBC",id:1},{name:"互转团队收益",id:2},{name:"互转预期收益",id:3}],formData:{type:0,num:0,pay_password:"",in_mobile:""},actNum:0,cutNum:0,sxf:null}},computed:s({},(0,i.mapState)({personInfo:function(t){return t.personInfo}})),onLoad:function(){this.getActsxf()},methods:s({},(0,i.mapMutations)(["dateUpInfo"]),{getActNum:function(t){var e=(this.sxf.replace("%","")-0)/100,a=t.detail.value-0;this.cutNum=e*a.toFixed(2),this.actNum=a-e*a.toFixed(2)},getActsxf:function(){var t=this;this.Post({url:this.url.balanceWithdrawSxf,data:{type:this.typeLists[this.formData.type].id}}).then(function(e){200===e.code&&(t.sxf=e.data)})},typeChange:function(t){this.formData.type=t.detail.value},balanceUserRoll:function(){var e=!0,a=this;for(var i in this.formData)"type"!==i&&(this.formData[i]||(e=!1));/^1[34578]\d{9}$/.test(this.formData.in_mobile)?e?this.Post({url:this.url.balanceUserRoll,data:s({uid:this.personInfo.id},this.formData,{type:this.typeLists[this.formData.type].id})}).then(function(e){200===e.code&&t.showToast({title:e.msg,duration:1e3,success:function(){a.dateUpInfo(a.personInfo.id),t.navigateTo({url:"../InterturnIsOk/InterturnIsOk"})}})}):t.showToast({title:"请输入完整信息",duration:1e3,icon:"none"}):t.showToast({title:"请输入正确的手机号",duration:1e3,icon:"none"})}})}}).call(e,a(2).default)},138:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"interturn"},[a("view",{staticClass:"header"},[t._m(0),a("view",{staticClass:"header_num"},[t._v("\n\t\t\t"+t._s(t.personInfo.balance)+"\n\t\t")]),a("view",{staticClass:"header_lists"},[a("view",{staticClass:"header_list"},[a("image",{attrs:{src:"http://www.dbl.name/wbc/static/images/微信图片_20181202214237.png"}}),a("view",{staticClass:"header_list_cont"},[a("view",{staticClass:"header_list_name"},[t._v("\n\t\t\t\t\t\t预存WBC\n\t\t\t\t\t")]),a("view",{staticClass:"header_list_num"},[t._v("\n\t\t\t\t\t\t￥"+t._s(t.personInfo.corpus_bill)+"\n\t\t\t\t\t")])])]),a("view",{staticClass:"header_list"},[a("image",{attrs:{src:"http://www.dbl.name/wbc/static/images/微信图片_20181202214232.png"}}),a("view",{staticClass:"header_list_cont"},[a("view",{staticClass:"header_list_name"},[t._v("\n\t\t\t\t\t\t补贴WBC\n\t\t\t\t\t")]),a("view",{staticClass:"header_list_num"},[t._v("\n\t\t\t\t\t\t￥"+t._s(t.personInfo.corpus_point)+"\n\t\t\t\t\t")])])])])]),a("view",{staticClass:"cont"},[a("view",{staticClass:"fill fill_one"},[t._m(1),a("view",{staticClass:"fill_cont"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.in_mobile,expression:"formData.in_mobile"}],staticClass:"input",attrs:{placeholder:"请输入转入账户",eventid:"eOQ-0"},domProps:{value:t.formData.in_mobile},on:{input:function(e){e.target.composing||(t.formData.in_mobile=e.target.value)}}})])]),a("view",{staticClass:"fill fill_two"},[t._m(2),a("view",{staticClass:"fill_cont"},[a("picker",{staticClass:"input",attrs:{mode:"selector",value:0,range:t.typeLists,"range-key":"name",eventid:"wik-1"},on:{change:t.typeChange}},[a("view",[t._v(t._s(t.typeLists[t.formData.type].name))])]),a("image",{attrs:{src:"http://www.dbl.name/wbc/static/images/下 拉.png"}})],1)]),a("view",{staticClass:"fill fill_three"},[t._m(3),a("view",{staticClass:"fill_cont"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.num,expression:"formData.num"}],staticClass:"input",attrs:{type:"number",placeholder:"请输入互转数量",eventid:"Dr2-2"},domProps:{value:t.formData.num},on:{input:[function(e){e.target.composing||(t.formData.num=e.target.value)},t.getActNum]}})])]),a("view",{staticClass:"fill fill_four"},[t._m(4),a("view",{staticClass:"fill_cont"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.pay_password,expression:"formData.pay_password"}],staticClass:"input",attrs:{placeholder:"请输入支付密码",password:!0,eventid:"AI5-3"},domProps:{value:t.formData.pay_password},on:{input:function(e){e.target.composing||(t.formData.pay_password=e.target.value)}}})])])]),a("view",{staticClass:"info"},[a("view",{staticClass:"info_left"},[t._v("\n\t\t\t实到数量："+t._s(t.actNum)+"\n\t\t")]),a("view",{staticClass:"info_right"},[t._v("\n\t\t\t节点费用："+t._s(t.cutNum)+"\n\t\t")])]),a("view",{staticClass:"sub_btn",attrs:{eventid:"U7u-4"},on:{tap:t.balanceUserRoll}},[t._v("\n\t\t提交\n\t")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"header_top"},[e("view",{staticClass:"header_name"},[this._v("\n\t\t\t\t冬宝链 (WBC)\n\t\t\t")]),e("image",{attrs:{src:"http://www.dbl.name/wbc/static/images/20181202213613.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"fill_title"},[e("view",{staticClass:"fill_left"},[e("image",{attrs:{src:"http://www.dbl.name/wbc/static/images/银行卡.png"}}),e("view",{staticClass:"fill_left_name"},[this._v("\n\t\t\t\t\t\t输入账号\n\t\t\t\t\t")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"fill_title"},[e("view",{staticClass:"fill_left"},[e("image",{attrs:{src:"http://www.dbl.name/wbc/static/images/类型.png"}}),e("view",{staticClass:"fill_left_name"},[this._v("\n\t\t\t\t\t\t选择类型\n\t\t\t\t\t")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"fill_title"},[e("view",{staticClass:"fill_left"},[e("image",{attrs:{src:"http://www.dbl.name/wbc/static/images/数量阶梯价.png"}}),e("view",{staticClass:"fill_left_name"},[this._v("\n\t\t\t\t\t\t互转数量\n\t\t\t\t\t")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"fill_title"},[e("view",{staticClass:"fill_left"},[e("image",{attrs:{src:"http://www.dbl.name/wbc/static/images/验证码 (1).png"}}),e("view",{staticClass:"fill_left_name"},[this._v("\n\t\t\t\t\t\t支付密码\n\t\t\t\t\t")])])])}]};e.a=s}},[134]);