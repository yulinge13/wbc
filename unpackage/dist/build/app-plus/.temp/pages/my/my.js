require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([11],{128:function(t,n,i){"use strict";var s=a(i(1)),e=a(i(129));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},129:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=i(131),e=i.n(s),a=i(132);var o=function(t){i(130)},l=i(0)(e.a,a.a,o,"data-v-4eb083ab",null);n.default=l.exports},130:function(t,n){},131:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0});var s,e=i(5),a=(s=e)&&s.__esModule?s:{default:s};n.default={data:function(){return{linkListsTop:[{name:"我的分享",url:"http://www.dbl.name/wbc/static/images/我的分享.png",link:""},{name:"我的团队",url:"http://www.dbl.name/wbc/static/images/左侧-我的团队1.png",link:""}],linkListsBot:[{name:"问题提交",url:"http://www.dbl.name/wbc/static/images/问题.png",link:""},{name:"安全设置",url:"http://www.dbl.name/wbc/static/images/安全设置 (1).png",link:"../saft/saft",isLogin:!0}],personInfo:{},isLogin:!1}},components:{LinkCom:a.default},onShow:function(){this.getLoginInfo()},methods:{linkToReg:function(){t.navigateTo({url:"../register/register"})},quitLanding:function(){var n=this;t.showModal({title:"提示",content:"是否确认退出登陆",success:function(i){i.confirm&&(t.removeStorageSync("personInfo"),n.$store.state.personInfo={},n.isLogin=!1,t.showToast({title:"退出登陆成功",duration:1e3}))}})},getLoginInfo:function(){console.log(this.$store.state.personInfo),this.personInfo=t.getStorageSync("personInfo")||this.$store.state.personInfo||{},this.personInfo.id?this.isLogin=!0:this.isLogin=!1},linkToLogin:function(){t.navigateTo({url:"../login/login"})}}}}).call(n,i(2).default)},132:function(t,n,i){"use strict";var s={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("view",{staticClass:"my_page"},[i("view",{staticClass:"person_info"},[i("image",{staticClass:"head_icon",attrs:{src:"http://www.dbl.name/wbc/static/images/头像未登录.png"}}),i("view",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"login_or_res"},[i("text",{staticClass:"login",attrs:{eventid:"5nJ-0"},on:{tap:t.linkToLogin}},[t._v("\n\t\t\t\t登陆\n\t\t\t")]),i("view",{staticClass:"line"}),i("view",{staticClass:"res",attrs:{eventid:"ApD-1"},on:{tap:t.linkToReg}},[t._v("\n\t\t\t\t注册\n\t\t\t")])]),i("view",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"is_login"},[i("view",{staticClass:"name"},[t._v("\n\t\t\t\t"+t._s(t.personInfo.nickname)+"\n\t\t\t")]),i("view",{staticClass:"mobile"},[t._v("\n\t\t\t\t冬宝链账号"+t._s(t.personInfo.mobile)+"\n\t\t\t")])]),i("view",{staticClass:"uid"},[t._v("\n\t\t\tUID: admin\n\t\t")])]),i("view",{staticClass:"links"},t._l(t.linkListsTop,function(t,n){return i("LinkCom",{key:n,staticClass:"link_list",attrs:{linkItem:t,mpcomid:"RrP-0-"+n}})})),i("view",{staticClass:"links"},t._l(t.linkListsBot,function(t,n){return i("LinkCom",{key:n,staticClass:"link_list",attrs:{linkItem:t,mpcomid:"wAh-1-"+n}})})),t.isLogin?i("view",{staticClass:"is_login_btn",attrs:{eventid:"pqW-2"},on:{tap:t.quitLanding}},[t._v("\n\t\t退出登陆\n\t")]):t._e()])},staticRenderFns:[]};n.a=s}},[128]);