<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","width":"100%","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230329/7030ffe6bcc6470eaa3bcc4160b5ffc4.jpg)","justifyContent":"center","display":"flex"}'>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"10px 0px 20px","margin":"0 30% 0 0","borderColor":"#fff","display":"flex","float":"right","justifyContent":"center","borderRadius":"20px","flexWrap":"wrap","background":"#746ef2","borderWidth":"8px","width":"650px","position":"relative","borderStyle":"outset","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"padding":"10px 0","margin":"0 0 20px 0","borderColor":"#ddd","color":"#fff","textAlign":"center","borderRadius":"0px","background":"none","borderWidth":"0px","width":"100%","fontSize":"22px","lineHeight":"40px","borderStyle":"solid","textShadow":"0px 0px 0px rgba(64, 158, 255, .5)"}' class="title">基于微信小程序的社区志愿者服务平台 注册</div>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">志愿者账号</div>
					<el-input  v-model="ruleForm.zhiyuanzhezhanghao"  autocomplete="off" placeholder="志愿者账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">志愿者姓名</div>
					<el-input  v-model="ruleForm.zhiyuanzhexingming"  autocomplete="off" placeholder="志愿者姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">头像</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="zhiyuanzhetouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in zhiyuanzhexingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">年龄</div>
					<el-input  v-model="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">手机号码</div>
					<el-input  v-model="ruleForm.shoujihaoma"  autocomplete="off" placeholder="手机号码"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">身份证号</div>
					<el-input  v-model="ruleForm.shenfenzhenghao"  autocomplete="off" placeholder="身份证号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shequ'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">社区账号</div>
					<el-input  v-model="ruleForm.shequzhanghao"  autocomplete="off" placeholder="社区账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shequ'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shequ'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shequ'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">图片</div>
                    <file-upload
                        tip="点击上传图片"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.tupian?ruleForm.tupian:''"
                        @change="shequtupianUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shequ'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">社区名称</div>
					<el-input  v-model="ruleForm.shequmingcheng"  autocomplete="off" placeholder="社区名称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shequ'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">负责人</div>
					<el-input  v-model="ruleForm.fuzeren"  autocomplete="off" placeholder="负责人"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shequ'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in shequxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shequ'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">手机号码</div>
					<el-input  v-model="ruleForm.shoujihaoma"  autocomplete="off" placeholder="手机号码"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='shequ'">
					<div v-if="true" :style='{"color":"#fff","left":"-160px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute","fontWeight":"500"}' class="lable">身份证号</div>
					<el-input  v-model="ruleForm.shenfenzhenghao"  autocomplete="off" placeholder="身份证号"  type="text"  />
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 30px","boxShadow":"0px 0px 0px #f9d7b5","margin":"20px auto 10px","color":"#fff","display":"block","outline":"none","borderRadius":"30px","background":"linear-gradient(23deg, rgba(99,90,241,1) 0%, rgba(183,173,255,1) 50%, rgba(99,90,241,1) 100%)","width":"60%","fontSize":"18px","height":"40px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0","color":"#fff","textAlign":"right","display":"inline-block","width":"60%","lineHeight":"1","fontSize":"14px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
                xingbie: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            zhiyuanzhexingbieOptions: [],
            shequxingbieOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.zhiyuanzhexingbieOptions = "男,女".split(',')
        this.shequxingbieOptions = "男,女".split(',')
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        zhiyuanzhetouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        shequtupianUploadChange(fileUrls) {
            this.ruleForm.tupian = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.zhiyuanzhezhanghao) && `zhiyuanzhe` == this.tableName){
						this.$message.error(`志愿者账号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `zhiyuanzhe` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `zhiyuanzhe` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.zhiyuanzhexingming) && `zhiyuanzhe` == this.tableName){
						this.$message.error(`志愿者姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`zhiyuanzhe` == this.tableName && this.ruleForm.shoujihaoma&&(!this.$validate.isMobile(this.ruleForm.shoujihaoma))){
						this.$message.error(`手机号码应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					if(`zhiyuanzhe` == this.tableName && this.ruleForm.shenfenzhenghao&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzhenghao))){
						this.$message.error(`身份证号应输入身份证格式`);
						return
					}
					
					
				
					if((!this.ruleForm.shequzhanghao) && `shequ` == this.tableName){
						this.$message.error(`社区账号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `shequ` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `shequ` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
            if(this.ruleForm.tupian!=null) {
                this.ruleForm.tupian = this.ruleForm.tupian.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.shequmingcheng) && `shequ` == this.tableName){
						this.$message.error(`社区名称不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`shequ` == this.tableName && this.ruleForm.shoujihaoma&&(!this.$validate.isMobile(this.ruleForm.shoujihaoma))){
						this.$message.error(`手机号码应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					if(`shequ` == this.tableName && this.ruleForm.shenfenzhenghao&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzhenghao))){
						this.$message.error(`身份证号应输入身份证格式`);
						return
					}
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20230329/7030ffe6bcc6470eaa3bcc4160b5ffc4.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 30px;
						padding: 0 10px;
						margin: 0px 0px 0px  0px;
						color: #333;
						width: 100%;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0;
						border-radius: 30px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 30px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 30px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  margin: 10px 0px 10px 10px;
		  		  color: #ccc;
		  		  background: #fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  margin: 10px 0px 10px 10px;
		  		  color: #ccc;
		  		  background: #fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 20px;
		  		  margin: 10px 0px 10px 10px;
		  		  color: #ccc;
		  		  background: #fff;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
</style>
