import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts'
import router from './router'
import 'echarts-liquidfill'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
