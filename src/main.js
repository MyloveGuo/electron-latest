import Vue from 'vue'
import axios from 'axios'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import App from './App'
import router from './router'
import store from './store'
import '@/icons'
import './assets/icon/iconfont.css'

import electron from "electron";
const ipcRenderer = electron.ipcRenderer;

// 数据库同步
import './data/models'


// 客户端初始化
// import './init'

Vue.use(require('vue-electron'))

Vue.use(ElementUI, { locale })

Vue.ipc = Vue.prototype.$ipc = ipcRenderer; //ipc接口
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
