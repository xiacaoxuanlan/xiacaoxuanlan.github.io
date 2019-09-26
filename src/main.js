// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'es6-promise/auto'
import Vuex from 'vuex'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import variable from './components/common/variable'
import {
  Pagination,
  Dialog,
  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  // DatePicker,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  // Tag,
  // Tree,
  // Alert,
  // Slider,
  // Icon,
  // Row,
  // Col,
  Upload,
  // Progress,
  // Badge,
  // Card,
  // Rate,
  // Steps,
  // Step,
  // Carousel,
  // CarouselItem,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  // Container,
  // Header,
  // Aside,
  // Main,
  // Footer,
  Loading,
  MessageBox,
  Message
  // Notification
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Vuex)

Vue.use(Pagination);
Vue.use(Dialog);
// Vue.use(Autocomplete);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
// Vue.use(Checkbox);
// Vue.use(CheckboxButton);
// Vue.use(CheckboxGroup);
// Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
// Vue.use(DatePicker);
// Vue.use(TimeSelect);
// Vue.use(TimePicker);
// Vue.use(Popover);
// Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
// Vue.use(Tag);
// Vue.use(Tree);
// Vue.use(Alert);
// Vue.use(Slider);
// Vue.use(Icon);
// Vue.use(Row);
// Vue.use(Col);
Vue.use(Upload);
// Vue.use(Progress);
// Vue.use(Badge);
// Vue.use(Card);
// Vue.use(Rate);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Carousel);
// Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Cascader);
// Vue.use(ColorPicker);
// Vue.use(Transfer);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Footer);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.variable = variable;

// 图片路径绑定
Vue.directive('real-img', async function (el, binding) {
  let imgURL = binding.value;
  if (imgURL) {
    let exist = await imageIsExist(imgURL);
    if (exist) {
      el.setAttribute('src', imgURL);
    }
  }
})
let imageIsExist = function (url) {
  return new Promise((resolve) => {
    var img = new Image();
    img.onload = function () {
      if (this.complete == true) {
        resolve(true);
        img = null;
      }
    }
    img.onerror = function () {
      resolve(false);
      img = null;
    }
    img.src = url;
  })
}

// 页面初始化进度条
NProgress.configure({
  easesing: 'ease',
  speed: 500, //递增进度条的速度
  showSpinner: false, //是否显示ico
  trickleSpeed: 200, //自动递增间隔
  minimum: 0.3 //初始化时的最小百分比
});
router.beforeEach((to, from, next) => {
/*
  let token = store.state.token;
  if(token) {
    await store.dispatch('getTokenCheck', token);
  }*/
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  axios,
  components: { App },
  template: '<App/>'
})
