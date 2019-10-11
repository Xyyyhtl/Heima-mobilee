import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.less'
import { Button, Cell, CellGroup, NavBar, Field, Toast } from 'vant'
Vue
  .use(Button) // 按钮组件
  .use(Cell) //
  .use(CellGroup)
  .use(NavBar)
  .use(Field)
  .use(Toast) // 提示组件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
