require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([11],{149:function(t,n,i){"use strict";var e=a(i(2)),s=a(i(150));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(s.default))},150:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(152),s=i.n(e),a=i(153);var o=function(t){i(151)},l=i(0)(s.a,a.a,o,"data-v-3e13b7da",null);n.default=l.exports},151:function(t,n){},152:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0});var e,s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}return t},a=i(3),o=i(6),l=(e=o)&&e.__esModule?e:{default:e};n.default={data:function(){return{linkListsTop:[{name:"我的分享",url:"http://www.dbl.name/wbc/static/images/我的分享.png",link:"../qrc/qrc",isLogin:!0},{name:"我的团队",url:"http://www.dbl.name/wbc/static/images/左侧-我的团队1.png",link:"../myTeam/myTeam",isLogin:!0}],linkListsBot:[{name:"问题提交",url:"http://www.dbl.name/wbc/static/images/问题.png",link:"../feed/feed",isLogin:!0},{name:"安全设置",url:"http://www.dbl.name/wbc/static/images/安全设置 (1).png",link:"../saft/saft",isLogin:!0},{name:"添加银行卡",url:"http://www.dbl.name/wbc/static/images/安全设置 (1).png",link:"../bankCard/bankCard",isLogin:!0}]}},components:{LinkCom:l.default},computed:s({},(0,a.mapState)({personInfo:function(t){return t.personInfo}}),{isLogin:function(){var t=!1;return t=!!this.personInfo.id,t}}),onShow:function(){this.personInfo.id&&this.dateUpInfo(this.personInfo.id)},methods:s({},(0,a.mapMutations)(["clearPersonInfo","dateUpInfo"]),{linkToReg:function(){t.navigateTo({url:"../register/register"})},quitLanding:function(){var n=this;t.showModal({title:"提示",content:"是否确认退出登陆",success:function(i){i.confirm&&(n.clearPersonInfo(),t.showToast({title:"退出登陆成功",duration:1e3}))}})},linkToLogin:function(){t.navigateTo({url:"../login/login"})}})}}).call(n,i(1).default)},153:function(t,n,i){"use strict";var e={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("view",{staticClass:"my_page"},[i("view",{staticClass:"person_info"},[i("image",{staticClass:"head_icon",attrs:{src:"http://www.dbl.name/wbc/static/images/头像未登录.png"}}),t.isLogin?t._e():i("view",{staticClass:"login_or_res"},[t.isLogin?t._e():i("text",{staticClass:"login",attrs:{eventid:"Zly-0"},on:{tap:t.linkToLogin}},[t._v("\n\t\t\t\t登陆\n\t\t\t")]),t.isLogin?t._e():i("view",{staticClass:"line"}),t.isLogin?t._e():i("view",{staticClass:"res",attrs:{eventid:"uZe-1"},on:{tap:t.linkToReg}},[t._v("\n\t\t\t\t注册\n\t\t\t")])]),t.isLogin?i("view",{staticClass:"is_login"},[i("view",{staticClass:"name"},[t._v("\n\t\t\t\t"+t._s(t.personInfo.nickname)+"\n\t\t\t")]),i("view",{staticClass:"mobile"},[t._v("\n\t\t\t\t冬宝链账号"+t._s(t.personInfo.mobile)+"\n\t\t\t")])]):t._e(),i("view",{staticClass:"uid"},[t._v("\n\t\t\tUID: "+t._s(t.personInfo.id||"请先登录")+"\n\t\t")])]),i("view",{staticClass:"links"},t._l(t.linkListsTop,function(t,n){return i("LinkCom",{key:n,staticClass:"link_list",attrs:{linkItem:t,mpcomid:"Nnz-0-"+n}})})),i("view",{staticClass:"links"},t._l(t.linkListsBot,function(t,n){return i("LinkCom",{key:n,staticClass:"link_list",attrs:{linkItem:t,mpcomid:"139-1-"+n}})})),t.isLogin?i("view",{staticClass:"is_login_btn",attrs:{eventid:"nZi-2"},on:{tap:t.quitLanding}},[t._v("\n\t\t退出登陆\n\t")]):t._e()])},staticRenderFns:[]};n.a=e}},[149]);