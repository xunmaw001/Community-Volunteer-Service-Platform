<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0 0 64rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221108/581bb1956ffe4c8182127ca1e196e95e.png) fixed","height":"auto"}'>
		<form :style='{"width":"100%","padding":"24rpx","background":"none","display":"block","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"12rpx 0","boxShadow":"0px 0.10rpx 4rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">社区账号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shequzhanghao" v-model="ruleForm.shequzhanghao" placeholder="社区账号"></input>
			</view>
			<view :style='{"padding":"12rpx 0","boxShadow":"0px 0.10rpx 4rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">社区名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shequmingcheng" v-model="ruleForm.shequmingcheng" placeholder="社区名称"></input>
			</view>
			<view :style='{"padding":"12rpx 0","boxShadow":"0px 0.10rpx 4rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">活动名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.huodongmingcheng" v-model="ruleForm.huodongmingcheng" placeholder="活动名称"></input>
			</view>
			<view :style='{"padding":"12rpx 0","boxShadow":"0px 0.10rpx 4rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="huodongtupianTap">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">活动图片</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-if="ruleForm.huodongtupian" :src="baseUrl+ruleForm.huodongtupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"12rpx 0","boxShadow":"0px 0.10rpx 4rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">活动地点</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.huodongdidian" v-model="ruleForm.huodongdidian" placeholder="活动地点"></input>
			</view>
			<view :style='{"padding":"12rpx 0","boxShadow":"0px 0.10rpx 4rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">活动时间</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.huodongshijian" v-model="ruleForm.huodongshijian" placeholder="活动时间"></input>
			</view>
			<view :style='{"padding":"12rpx 0","boxShadow":"0px 0.10rpx 4rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">活动时长</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.huodongshizhang" v-model="ruleForm.huodongshizhang" placeholder="活动时长"></input>
			</view>
			<view :style='{"padding":"12rpx 0","boxShadow":"0px 0.10rpx 4rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">签到时间</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx","height":"80rpx"}' v-model="ruleForm.qiandaoshijian" placeholder="签到时间" @tap="toggleTab('qiandaoshijian')"></input>
			</view>
			<view :style='{"padding":"12rpx 0","boxShadow":"0px 0.10rpx 4rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">志愿者账号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.zhiyuanzhezhanghao" v-model="ruleForm.zhiyuanzhezhanghao" placeholder="志愿者账号"></input>
			</view>
			<view :style='{"padding":"12rpx 0","boxShadow":"0px 0.10rpx 4rpx #ccc","margin":"0 0 24rpx 0","borderColor":"#ccc","alignItems":"center","borderWidth":"0 0 2rpx 0","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 100%)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 40rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">志愿者姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"rgb(0, 0, 0)","borderRadius":"8rpx","flex":"1","background":"none","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.zhiyuanzhexingming" v-model="ruleForm.zhiyuanzhexingming" placeholder="志愿者姓名"></input>
			</view>
			
			<!-- 否 -->
 

			
			
			<view :style='{"width":"100%","justifyContent":"space-between","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","boxShadow":"0px 4rpx 12rpx #ccc","margin":"0","color":"rgb(255, 255, 255)","borderRadius":"16rpx","background":"radial-gradient(circle, rgba(216,214,246,1) 0%, rgba(204,189,235,1) 24%, rgba(181,191,232,1) 62%, rgba(175,173,228,1) 100%)","width":"48%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="qiandaoshijianConfirm" ref="qiandaoshijian" themeColor="#333333"></w-picker>
	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				shequzhanghao: '',
				shequmingcheng: '',
				huodongmingcheng: '',
				huodongtupian: '',
				huodongdidian: '',
				huodongshijian: '',
				huodongshizhang: '',
				qiandaoshijian: '',
				zhiyuanzhezhanghao: '',
				zhiyuanzhexingming: '',
				crossuserid: '',
				crossrefid: '',
				userid: '',
				},
				// 登录用户信息
				user: {},
                ro:{
                   shequzhanghao : false,
                   shequmingcheng : false,
                   huodongmingcheng : false,
                   huodongtupian : false,
                   huodongdidian : false,
                   huodongshijian : false,
                   huodongshizhang : false,
                   qiandaoshijian : false,
                   zhiyuanzhezhanghao : false,
                   zhiyuanzhexingming : false,
                   crossuserid : false,
                   crossrefid : false,
                   userid : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
            this.ruleForm.qiandaoshijian = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.zhiyuanzhezhanghao = this.user.zhiyuanzhezhanghao
			this.ro.zhiyuanzhezhanghao = true;
			this.ruleForm.zhiyuanzhexingming = this.user.zhiyuanzhexingming
			this.ro.zhiyuanzhexingming = true;



			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`huodongqiandao`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='shequzhanghao'){
					this.ruleForm.shequzhanghao = obj[o];
					this.ro.shequzhanghao = true;
					continue;
					}
					if(o=='shequmingcheng'){
					this.ruleForm.shequmingcheng = obj[o];
					this.ro.shequmingcheng = true;
					continue;
					}
					if(o=='huodongmingcheng'){
					this.ruleForm.huodongmingcheng = obj[o];
					this.ro.huodongmingcheng = true;
					continue;
					}
					if(o=='huodongtupian'){
					this.ruleForm.huodongtupian = obj[o].split(",")[0];
					this.ro.huodongtupian = true;
					continue;
					}
					if(o=='huodongdidian'){
					this.ruleForm.huodongdidian = obj[o];
					this.ro.huodongdidian = true;
					continue;
					}
					if(o=='huodongshijian'){
					this.ruleForm.huodongshijian = obj[o];
					this.ro.huodongshijian = true;
					continue;
					}
					if(o=='huodongshizhang'){
					this.ruleForm.huodongshizhang = obj[o];
					this.ro.huodongshizhang = true;
					continue;
					}
					if(o=='qiandaoshijian'){
					this.ruleForm.qiandaoshijian = obj[o];
					this.ro.qiandaoshijian = true;
					continue;
					}
					if(o=='zhiyuanzhezhanghao'){
					this.ruleForm.zhiyuanzhezhanghao = obj[o];
					this.ro.zhiyuanzhezhanghao = true;
					continue;
					}
					if(o=='zhiyuanzhexingming'){
					this.ruleForm.zhiyuanzhexingming = obj[o];
					this.ro.zhiyuanzhexingming = true;
					continue;
					}
					if(o=='crossuserid'){
					this.ruleForm.crossuserid = obj[o];
					this.ro.crossuserid = true;
					continue;
					}
					if(o=='crossrefid'){
					this.ruleForm.crossrefid = obj[o];
					this.ro.crossrefid = true;
					continue;
					}
					if(o=='userid'){
					this.ruleForm.userid = obj[o];
					this.ro.userid = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数


			// 日长控件选择日期时间
			qiandaoshijianConfirm(val) {
				console.log(val)
				this.ruleForm.qiandaoshijian = val.result;
				this.$forceUpdate();
			},


			huodongtupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.huodongtupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {



























//跨表计算判断
				var obj;
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`huodongqiandao`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`huodongqiandao`, this.ruleForm);
						}else{
							await this.$api.add(`huodongqiandao`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`huodongqiandao`, this.ruleForm);
					}else{
						await this.$api.add(`huodongqiandao`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
