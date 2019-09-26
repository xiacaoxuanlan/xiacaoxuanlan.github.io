<template>
  <div class="index_page">
    <h2 class="page_title">付π后台管理系统</h2>
    <div class="text">欢迎登录</div>
    <div class="h-btn1 logout" @click="logout">退出登录</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
    created() {
        this.$emit('setMenuActive', 'index');
    },
  methods: {
      logout () {
          this.$router.push('/login');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index_page{ width: 100%; padding: 40px; }
  .index_page .page_title{ font-size: 24px; color: #f89b38; margin-bottom: 60px; }
  .index_page .text{ font-size: 14px; margin-bottom: 20px; }
  .index_page .logout{ width: 100px; height: 40px; line-height: 40px; cursor: pointer; }
</style>
