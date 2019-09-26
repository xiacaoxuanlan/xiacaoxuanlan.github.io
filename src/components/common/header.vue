<template>
  <header>
    <div class="clearfix">
      <router-link to="/" class="head-logo left">
        <img :src="logoImage" alt="logo">
        <span class="">后台管理系统</span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      logoImage: this.variable.variable.logoImage,
      defaultHead: 'http://static.hdmool.com/images/avatar.jpg'
    }
  },
  computed: {
    user () {
      return JSON.parse(this.$store.getters.user);
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{ width: 100%; background-color: #333; padding: 20px 40px; color: #fff; }
  .head-logo{ line-height: 40px; color: #fff; }
</style>
