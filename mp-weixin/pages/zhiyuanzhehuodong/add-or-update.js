(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhiyuanzhehuodong/add-or-update"],{"0b4d":function(n,e,t){"use strict";(function(n){t("6cdc"),t("921b");i(t("66fd"));var e=i(t("a47b"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},1493:function(n,e,t){"use strict";var i=t("5f5c"),r=t.n(i);r.a},"1ccd":function(n,e,t){"use strict";var i={"xia-editor":()=>t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f")),"w-picker":()=>Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.ruleForm.huodongtupian.split(","));n.$mp.data=Object.assign({},{$root:{g0:t}})},o=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}))},"22c4":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function o(n,e,t,i,r,o,u){try{var a=n[o](u),s=a.value}catch(h){return void t(h)}a.done?e(s):Promise.resolve(s).then(i,r)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var u=n.apply(e,t);function a(n){o(u,i,r,a,s,"next",n)}function s(n){o(u,i,r,a,s,"throw",n)}a(void 0)}))}}var a=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},s=function(){return t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},h={data:function(){return{cross:"",ruleForm:{huodongmingcheng:"",huodongtupian:"",huodongleixing:"",huodongdidian:"",huodongshijian:"",huodongshizhang:"",huodongneirong:"",fabushijian:"",shequzhanghao:"",shequmingcheng:"",userid:""},huodongleixingOptions:[],huodongleixingIndex:0,user:{},ro:{huodongmingcheng:!1,huodongtupian:!1,huodongleixing:!1,huodongdidian:!1,huodongshijian:!1,huodongshizhang:!1,huodongneirong:!1,fabushijian:!1,shequzhanghao:!1,shequmingcheng:!1,userid:!1}}},components:{wPicker:a,xiaEditor:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=u(i.default.mark((function e(t){var r,o,u,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDateTime(),r=n.getStorageSync("nowTable"),e.next=4,this.$api.session(r);case 4:return o=e.sent,this.user=o.data,this.ruleForm.shequzhanghao=this.user.shequzhanghao,this.ro.shequzhanghao=!0,this.ruleForm.shequmingcheng=this.user.shequmingcheng,this.ro.shequmingcheng=!0,e.next=12,this.$api.option("huodongleixing","huodongleixing",{});case 12:if(o=e.sent,this.huodongleixingOptions=o.data,this.huodongleixingOptions.unshift("请选择活动类型"),this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=23;break}return this.ruleForm.id=t.id,e.next=21,this.$api.info("zhiyuanzhehuodong",this.ruleForm.id);case 21:o=e.sent,this.ruleForm=o.data;case 23:if(this.cross=t.cross,!t.cross){e.next=75;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 27:if((e.t1=e.t0()).done){e.next=75;break}if(a=e.t1.value,"huodongmingcheng"!=a){e.next=33;break}return this.ruleForm.huodongmingcheng=u[a],this.ro.huodongmingcheng=!0,e.abrupt("continue",27);case 33:if("huodongtupian"!=a){e.next=37;break}return this.ruleForm.huodongtupian=u[a].split(",")[0],this.ro.huodongtupian=!0,e.abrupt("continue",27);case 37:if("huodongleixing"!=a){e.next=41;break}return this.ruleForm.huodongleixing=u[a],this.ro.huodongleixing=!0,e.abrupt("continue",27);case 41:if("huodongdidian"!=a){e.next=45;break}return this.ruleForm.huodongdidian=u[a],this.ro.huodongdidian=!0,e.abrupt("continue",27);case 45:if("huodongshijian"!=a){e.next=49;break}return this.ruleForm.huodongshijian=u[a],this.ro.huodongshijian=!0,e.abrupt("continue",27);case 49:if("huodongshizhang"!=a){e.next=53;break}return this.ruleForm.huodongshizhang=u[a],this.ro.huodongshizhang=!0,e.abrupt("continue",27);case 53:if("huodongneirong"!=a){e.next=57;break}return this.ruleForm.huodongneirong=u[a],this.ro.huodongneirong=!0,e.abrupt("continue",27);case 57:if("fabushijian"!=a){e.next=61;break}return this.ruleForm.fabushijian=u[a],this.ro.fabushijian=!0,e.abrupt("continue",27);case 61:if("shequzhanghao"!=a){e.next=65;break}return this.ruleForm.shequzhanghao=u[a],this.ro.shequzhanghao=!0,e.abrupt("continue",27);case 65:if("shequmingcheng"!=a){e.next=69;break}return this.ruleForm.shequmingcheng=u[a],this.ro.shequmingcheng=!0,e.abrupt("continue",27);case 69:if("userid"!=a){e.next=73;break}return this.ruleForm.userid=u[a],this.ro.userid=!0,e.abrupt("continue",27);case 73:e.next=27;break;case 75:this.styleChange();case 76:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{huodongneirongChange:function(n){this.ruleForm.huodongneirong=n},styleChange:function(){this.$nextTick((function(){}))},huodongshijianConfirm:function(n){console.log(n),this.ruleForm.huodongshijian=n.result,this.$forceUpdate()},fabushijianConfirm:function(n){console.log(n),this.ruleForm.fabushijian=n.result,this.$forceUpdate()},huodongleixingChange:function(n){this.huodongleixingIndex=n.target.value,this.ruleForm.huodongleixing=this.huodongleixingOptions[this.huodongleixingIndex]},huodongtupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.huodongtupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){var t,r,o,u,a,s,h,c,g,d;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.huodongmingcheng){e.next=3;break}return this.$utils.msg("活动名称不能为空"),e.abrupt("return");case 3:if(this.ruleForm.huodongleixing){e.next=6;break}return this.$utils.msg("活动类型不能为空"),e.abrupt("return");case 6:if(this.ruleForm.huodongdidian){e.next=9;break}return this.$utils.msg("活动地点不能为空"),e.abrupt("return");case 9:if(this.ruleForm.huodongshijian){e.next=12;break}return this.$utils.msg("活动时间不能为空"),e.abrupt("return");case 12:if(this.ruleForm.huodongshizhang){e.next=15;break}return this.$utils.msg("活动时长不能为空"),e.abrupt("return");case 15:if(!this.cross){e.next=31;break}if(a=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==a){e.next=31;break}if(t||(t=n.getStorageSync("crossObj")),a.startsWith("[")){e.next=27;break}for(h in t)h==a&&(t[h]=s);return c=n.getStorageSync("crossTable"),e.next=25,this.$api.update("".concat(c),t);case 25:e.next=31;break;case 27:r=Number(n.getStorageSync("userid")),o=t["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 31:if(!o||!r){e.next=53;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=o,g={page:1,limit:10,crossuserid:r,crossrefid:o},e.next=37,this.$api.list("zhiyuanzhehuodong",g);case 37:if(d=e.sent,!(d.data.total>=u)){e.next=43;break}return this.$utils.msg(n.getStorageSync("tips")),e.abrupt("return",!1);case 43:if(!this.ruleForm.id){e.next=48;break}return e.next=46,this.$api.update("zhiyuanzhehuodong",this.ruleForm);case 46:e.next=50;break;case 48:return e.next=50,this.$api.add("zhiyuanzhehuodong",this.ruleForm);case 50:this.$utils.msgBack("提交成功");case 51:e.next=61;break;case 53:if(!this.ruleForm.id){e.next=58;break}return e.next=56,this.$api.update("zhiyuanzhehuodong",this.ruleForm);case 56:e.next=60;break;case 58:return e.next=60,this.$api.add("zhiyuanzhehuodong",this.ruleForm);case 60:this.$utils.msgBack("提交成功");case 61:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=h}).call(this,t("543d")["default"])},"5f5c":function(n,e,t){},"75f4":function(n,e,t){"use strict";t.r(e);var i=t("22c4"),r=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);e["default"]=r.a},a47b:function(n,e,t){"use strict";t.r(e);var i=t("1ccd"),r=t("75f4");for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);t("1493");var u,a=t("f0c5"),s=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"834f363e",null,!1,i["a"],u);e["default"]=s.exports}},[["0b4d","common/runtime","common/vendor"]]]);