<template>
  <div class="errorPage">
    <div class="contain">
<!--      <img :src="notFoundImage" alt="页面未找到">-->
      <div class="textInfo error404">
        <h1>(#404) 页面未找到</h1>
        <template v-if="href">
          <span>别着急，点击<router-link :to="href" target="_self">这里</router-link>可以找到出路</span>
        </template>
        <template v-else="">
          <span>别着急，点击<router-link to="/" target="_self">这里</router-link>可以找到出路</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  // import variable from '@/components/common/variable'
export default {
  data () {
    return {
      // notFoundImage: variable.variable.notFoundImage
    }
  },
  props: ['href'],
  created () {
    // this.$emit('changelayout');
  },
  mounted () {
//    console.log(this.href);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .errorPage{ width: 100%; height: 100%; min-height: 600px; background-color: #fff; text-align: center; padding-top: 100px; }
  .errorPage .contain{ position: relative; max-width: 100%; }
  .errorPage .contain img{ max-width: 64%; }
  .errorPage .textInfo{ position: absolute; top: 37%; left: 32%; width: 50%; text-align: center; }
  .errorPage .textInfo h1{ font-size: 82px; color:#f89b38; font-weight: bold; margin-bottom: 40px; }
  .errorPage .textInfo span{ color:#999; }
  .errorPage .textInfo span a{ color:#f89b38;cursor: pointer; }
</style>
