<template>
  <div class="addIntroduce_page">
    <div class="head_top">
      <el-button type="primary" @click="goto('/introduce')" >返回</el-button>
    </div>
    <div class="form_box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150" class="">
        <el-form-item label="产品标题" prop="name">
          <el-input type="name" v-model="ruleForm.name" autocomplete="off" placeholder="请输入产品标题"></el-input>
        </el-form-item>
        <el-form-item label="所属分类" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择">
            <el-option
              v-for="item in typelists"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品焦点图" prop="banner">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="bannerList"
            :limit="1"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="产品详情图" prop="imglist">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="login_btn">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                typelists: [
                    {
                        value: '收银工具',
                        label: '收银工具'
                    },
                    {
                        value: '核心功能',
                        label: '核心功能'
                    }
                ],
                bannerList: [],
                fileList: [
                    {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                    {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                ],
                ruleForm: {
                    name: '',
                    type: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入产品标题', trigger: 'blur' }
                    ],
                    type: [
                        { required: true, message: '请输入产品标题', trigger: 'blur' }
                    ],
                }
            }
        },
        created() {
            this.$emit('setMenuActive', 'introduce');
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            goto(path) {
                this.$router.push(path);
            },
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
  .addIntroduce_page{ width: 100%; height: 100%; overflow: auto; background-color: #fff; padding: 20px; }
  .addIntroduce_page .form_box{ width: 300px; padding: 20px 0; }
  .head_top{ padding: 20px; border-bottom: 1px solid #ccc; margin-bottom: 20px; }
</style>
