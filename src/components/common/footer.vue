<template>
  <footer>
    <div class="contain">
      <div class="copyright">
        © 2016 - {{date}} 南京信息技术有限公司 版权所有
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      date: '',
    }
  },
  methods: {
  },
  mounted: function () {
    let date = new Date();
    this.date = date.getFullYear();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*foot*/
  footer{ width: 100%; height: auto; background-color: #3a3a3a; padding: 30px 0; }
  footer .footer-logo-box{ margin-bottom: 20px; }
  footer .hd-intro{ font-size: 14px; line-height: 1; color: #ccc; margin-bottom: 20px; }
  footer .info-box{ font-size: 14px; line-height: 30px; color: #ccc; margin-bottom: 20px; }
  footer .footer_about_us li{ float: left; }
  footer .footer_about_us li a{ color: #ccc; padding: 0 10px; }
  footer .footer_about_us li a:hover{ color: #f89b38; }
  footer .footer_about_us li:first-child a{ padding-left: 0; }
  footer .footer_about_us li:last-child a{ padding-right: 0; }
  footer .info-box .tel{ margin-left: 60px; }
  footer .info-box .app{ width: 300px; height: 30px; margin-left: 10px; }
  footer .info-box .app .iphone-pic{ display: inline-block; width: 84px; height: 30px; margin-left: 12px; }
  footer .info-box .app .android-pic{ display: inline-block; width: 84px; height: 30px; margin-left: 12px; }
  footer .copyright{ font-size: 14px; line-height: 1; color: #999; margin-bottom: 20px; }
  footer .copyright a{ color: #999; }
  footer .copyright a:hover{ text-decoration: underline; }
</style>
