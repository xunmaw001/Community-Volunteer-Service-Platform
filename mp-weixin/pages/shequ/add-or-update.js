(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shequ/add-or-update"],{"1dc9":function(e,t,n){"use strict";var r=n("78d5"),i=n.n(r);i.a},4141:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,i,a,s){try{var u=e[a](s),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function u(e){a(s,r,i,u,o,"next",e)}function o(e){a(s,r,i,u,o,"throw",e)}u(void 0)}))}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},o=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{shequzhanghao:"",mima:"",tupian:"",shequmingcheng:"",fuzeren:"",xingbie:"",shoujihaoma:"",shenfenzhenghao:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{shequzhanghao:!1,mima:!1,tupian:!1,shequmingcheng:!1,fuzeren:!1,xingbie:!1,shoujihaoma:!1,shenfenzhenghao:!1}}},components:{wPicker:u,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(r.default.mark((function t(n){var i,a,s,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(a=t.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=14;break}return this.ruleForm.id=n.id,t.next=12,this.$api.info("shequ",this.ruleForm.id);case 12:a=t.sent,this.ruleForm=a.data;case 14:if(this.cross=n.cross,!n.cross){t.next=54;break}s=e.getStorageSync("crossObj"),t.t0=r.default.keys(s);case 18:if((t.t1=t.t0()).done){t.next=54;break}if(u=t.t1.value,"shequzhanghao"!=u){t.next=24;break}return this.ruleForm.shequzhanghao=s[u],this.ro.shequzhanghao=!0,t.abrupt("continue",18);case 24:if("mima"!=u){t.next=28;break}return this.ruleForm.mima=s[u],this.ro.mima=!0,t.abrupt("continue",18);case 28:if("tupian"!=u){t.next=32;break}return this.ruleForm.tupian=s[u].split(",")[0],this.ro.tupian=!0,t.abrupt("continue",18);case 32:if("shequmingcheng"!=u){t.next=36;break}return this.ruleForm.shequmingcheng=s[u],this.ro.shequmingcheng=!0,t.abrupt("continue",18);case 36:if("fuzeren"!=u){t.next=40;break}return this.ruleForm.fuzeren=s[u],this.ro.fuzeren=!0,t.abrupt("continue",18);case 40:if("xingbie"!=u){t.next=44;break}return this.ruleForm.xingbie=s[u],this.ro.xingbie=!0,t.abrupt("continue",18);case 44:if("shoujihaoma"!=u){t.next=48;break}return this.ruleForm.shoujihaoma=s[u],this.ro.shoujihaoma=!0,t.abrupt("continue",18);case 48:if("shenfenzhenghao"!=u){t.next=52;break}return this.ruleForm.shenfenzhenghao=s[u],this.ro.shenfenzhenghao=!0,t.abrupt("continue",18);case 52:t.next=18;break;case 54:this.styleChange();case 55:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=s(r.default.mark((function t(){var n,i,a,s,u,o,c,h,l,f;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.shequzhanghao){t.next=3;break}return this.$utils.msg("社区账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.shequmingcheng){t.next=9;break}return this.$utils.msg("社区名称不能为空"),t.abrupt("return");case 9:if(!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){t.next=12;break}return this.$utils.msg("手机号码应输入手机格式"),t.abrupt("return");case 12:if(!this.ruleForm.shenfenzhenghao||this.$validate.checkIdCard(this.ruleForm.shenfenzhenghao)){t.next=15;break}return this.$utils.msg("身份证号应输入身份证格式"),t.abrupt("return");case 15:if(!this.cross){t.next=31;break}if(u=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==u){t.next=31;break}if(n||(n=e.getStorageSync("crossObj")),u.startsWith("[")){t.next=27;break}for(c in n)c==u&&(n[c]=o);return h=e.getStorageSync("crossTable"),t.next=25,this.$api.update("".concat(h),n);case 25:t.next=31;break;case 27:i=Number(e.getStorageSync("userid")),a=n["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 31:if(!a||!i){t.next=53;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=a,l={page:1,limit:10,crossuserid:i,crossrefid:a},t.next=37,this.$api.list("shequ",l);case 37:if(f=t.sent,!(f.data.total>=s)){t.next=43;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 43:if(!this.ruleForm.id){t.next=48;break}return t.next=46,this.$api.update("shequ",this.ruleForm);case 46:t.next=50;break;case 48:return t.next=50,this.$api.add("shequ",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:t.next=61;break;case 53:if(!this.ruleForm.id){t.next=58;break}return t.next=56,this.$api.update("shequ",this.ruleForm);case 56:t.next=60;break;case 58:return t.next=60,this.$api.add("shequ",this.ruleForm);case 60:this.$utils.msgBack("提交成功");case 61:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},"78d5":function(e,t,n){},a065:function(e,t,n){"use strict";n.r(t);var r=n("eaf3"),i=n("dc41");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("1dc9");var s,u=n("f0c5"),o=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"5520ac50",null,!1,r["a"],s);t["default"]=o.exports},bb53:function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");r(n("66fd"));var t=r(n("a065"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},dc41:function(e,t,n){"use strict";n.r(t);var r=n("4141"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},eaf3:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.ruleForm.tupian.split(","));e.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))}},[["bb53","common/runtime","common/vendor"]]]);