<template>
  <div class="errorPage">
    <div class="contain">
      <img :src="notFoundImage" alt="页面未找到">
      <div class="textInfo error404">
        <h1>(#403) 访问受限</h1>
        <p>您无权使用该页面</p>
        <span>别着急，点击<router-link to="/" target="_self">这里</router-link>可以找到出路</span>
      </div>
    </div>
  </div>
</template>

<script>
  import variable from '@/components/common/variable'
export default {
  data () {
    return {
      notFoundImage: variable.variable.notFoundImage
    }
  },
  created () {
    this.$emit('changelayout');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .errorPage{ width: 100%; height: 100%; min-height: 600px; background-color: #fff; text-align: center; padding-top: 100px; }
  .errorPage .contain{ position: relative; max-width: 100%; }
  .errorPage .contain img{ max-width: 64%; }
  .errorPage .textInfo{ position: absolute; top: 140px; left: 389px; width: 600px; text-align: center; }
  .errorPage .textInfo h1{ font-size: 82px; color:#f89b38; font-weight: bold; margin-bottom: 40px; }
  .errorPage .textInfo p{ font-size: 24px; color: #666; margin: -10px auto 15px; }
  .errorPage .textInfo span{ color:#999; }
  .errorPage .textInfo span a{ color:#f89b38;cursor: pointer; }
</style>
