import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/reset.scss'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'

Vue.config.productionTip = false

Vue.prototype.$echarts = ECharts

Vue.component('vue-echarts', VueECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
