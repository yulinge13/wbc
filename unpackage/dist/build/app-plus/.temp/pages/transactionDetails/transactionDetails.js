require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{110:function(t,e,n){"use strict";var a=l(n(1)),i=l(n(111));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},111:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(113),i=n.n(a),l=n(117);var s=function(t){n(112)},r=n(0)(i.a,l.a,s,null,null);e.default=r.exports},112:function(t,e){},113:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(5),l=(a=i)&&a.__esModule?a:{default:a};e.default={data:function(){return{linkLists:[{name:"提取WBC明细",link:"../extractDetails/extractDetails",isLogin:!0,bgColor:"#3574fa"},{name:"互转明细",link:"../mutualTransferdetails/mutualTransferdetails",isLogin:!0,bgColor:"#04d287"},{name:"存储明细",link:"",bgColor:"#b2e500"},{name:"预期收益明细",link:"",bgColor:"#ffde00"},{name:"锁仓和释放明细",link:"",bgColor:"#ff8400"},{name:"推荐奖励明细",link:"",bgColor:"#53a8ff"}]}},components:{LinkCom:l.default}}},117:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"transactionDetails"},this._l(this.linkLists,function(t,n){return e("LinkCom",{key:n,staticClass:"link_list",attrs:{linkItem:t,mpcomid:"JkQ-0-"+n}})}))},staticRenderFns:[]};e.a=a}},[110]);