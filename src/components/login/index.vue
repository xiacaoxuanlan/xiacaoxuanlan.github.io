<template>
  <div class="login_page">
    <div class="login_box">
      <div class="img">
        <img :src="logoImage" alt="logo">
      </div>
      <h2 class="page_title">付Π后台管理系统</h2>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="">
        <el-form-item prop="name">
          <el-input type="name" v-model="ruleForm.name" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="login_btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        logoImage: this.variable.variable.logoImage,
        ruleForm: {
            name: '',
            password: ''
        },
        rules: {
            name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入活动名称', trigger: 'blur' }
            ]
        }
    }
  },
    methods: {
        submitForm(formName) {
            let _this = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    _this.$router.push('/index');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login_page{ width: 100%; height: 100%; background-color: #fff; }
  .login_page .login_box{ width: 300px; text-align: center; padding-top: 100px; margin: 0 auto; }
  .login_page .login_box .img{ margin-bottom: 20px; }
  .login_page .login_box .page_title{ font-size: 24px; font-weight: bold; color: #f89b38; margin-bottom: 40px; }
  .login_page .login_box .login_btn{ width: 100%; background-color: #f89b38; border-color: #f89b38; margin-top: 40px; }

</style>
