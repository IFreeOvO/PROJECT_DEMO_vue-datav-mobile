import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'
import '@/styles/reset.scss'

Vue.config.productionTip = false

Vue.prototype.$echarts = ECharts

Vue.component('vue-echarts', VueECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
