<template>
  <div
    class="home"
    v-if="!loading"
  >
    <div class="datav-wrapper">
      <top-header></top-header>
      <sales-bar></sales-bar>
      <sale-line></sale-line>
      <sale-pie></sale-pie>
      <sale-map></sale-map>
      <sale-sun></sale-sun>
      <sales-radar></sales-radar>
    </div>
  </div>
  <div
    class="home"
    v-else
  >
    <div class="loading-wrapper">{{loadingText}}</div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import SalesBar from '@/components/SalesBar'
import SaleLine from '@/components/SaleLine'
import SalePie from '@/components/SalePie'
import SaleMap from '@/components/SaleMap'
import SaleSun from '@/components/SalesSun'
import SalesRadar from '@/components/SalesRadar'
import { getScreenMobileData } from '@/api/index.js'

export default {
  name: 'Home',

  components: {
    TopHeader,
    SalesBar,
    SaleLine,
    SalePie,
    SaleMap,
    SaleSun,
    SalesRadar
  },

  data() {
    return {
      loading: true,
      loadingText: '加载中.',
      data: null
    }
  },

  mounted() {
    this.task && clearInterval(this.task)
    this.task = setInterval(() => {
      if (this.loadingText === '加载中...') {
        this.loadingText = '加载中.'
      } else {
        this.loadingText += '.'
      }
    }, 200)

    getScreenMobileData().then(res => {
      this.loading = false
      this.task && clearInterval(this.task)
      this.data = res.data
    })
  }

}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  width: 100%;
  .datav-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1336px;
    z-index: 1;
    background-image: url('//www.youbaobao.xyz/datav-res/datav/datav-mobile-bg.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .loading-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #fff;
  }
}
</style>
