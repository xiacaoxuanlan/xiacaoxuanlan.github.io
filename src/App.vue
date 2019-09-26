<template>
  <div id="app">
    <div class="layout" v-if="layoutneed == '1'">
      <div class="wrap">
        <Header></Header>
        <div class="menu_box clearfix">
          <div class="menu left">
            <el-menu
              :default-active="menuActive"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b" style="height: 100%; overflow-y: auto;">
              <el-menu-item index="1" @click="goto('/index')">
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="2" @click="goto('/introduce')">
                <span slot="title">产品介绍</span>
              </el-menu-item>
              <el-menu-item index="3" @click="goto('/index')">
                <span slot="title">合作案例</span>
              </el-menu-item>
              <el-menu-item index="4" @click="goto('/index')">
                <span slot="title">加入我们</span>
              </el-menu-item>
              <el-menu-item index="5" @click="goto('/index')">
                <span slot="title">新闻动态</span>
              </el-menu-item>
              <el-menu-item index="5" @click="goto('/index')">
                <span slot="title">申请列表</span>
              </el-menu-item>
              <el-menu-item index="6" @click="goto('/index')">
                <span slot="title">页面管理</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="menu_right left">
            <router-view @setMenuActive="setMenuActive"/>
          </div>
        </div>
      </div>
    </div>
    <router-view v-else=""/>
  </div>
</template>

<script>
    import Header from '@/components/common/header'
    import Footer from '@/components/common/footer'
    export default {
        name: 'App',
        /*beforeRouteUpdate (to, from, next) {
            console.log(to);
            next();
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                console.log(to);
            });
        },*/
        data () {
            return {
                layoutneed: '',
                menuActive: '1'
            }
        },
        components: {
            Footer, Header
        },
        created () {
            this.checklayout();
        },
        methods: {
            setMenuActive (activePath) {
                let _this = this;
                console.log(activePath);
                switch (activePath) {
                    case 'index':
                        _this.menuActive = '1';
                        break;
                    case 'introduce':
                        _this.menuActive = '2';
                        break;
                }
            },
            goto (path) {
                let thisroute = this.$route;
                if (path != thisroute.path) {
                    this.$router.push(path);
                }
            },
            checklayout () {
                let _this = this;
                let thisroute = this.$route;
                if (thisroute.path == '/login') {
                    _this.changelayout(0);
                } else {
                    _this.changelayout(1);
                }
            },
            changelayout (num) {
                // console.log(num);
                this.layoutneed = num || 0;
            }
        },
        watch: {
            $route(to, from) {
                let _this = this;
                console.log(to);
                if (to.path == '/login') {
                    _this.changelayout(0);
                } else {
                    _this.changelayout(1);
                }
            }
        }
    }
</script>

<style>
  @import "../static/css/clear.css";
  /*@import "../static/css/vue-common.css";*/

  #app{ height: 100%; }
  .layout{ height: 100%; }
  .wrap{ height: 100%; }
  .menu_box{ width: 100%; height: calc(100% - 80px); }
  .menu_box .menu{ width: 200px; height: 100%; }
  .menu_box .menu_right{ width: calc(100% - 200px); height: 100%; padding: 10px; }
</style>
