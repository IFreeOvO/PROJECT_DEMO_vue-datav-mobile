<template>
  <div class="home">
    <div class="datav-wrapper">
      <top-header></top-header>
      <sales-bar></sales-bar>
      <sale-line></sale-line>
      <sale-pie></sale-pie>
      <sale-map></sale-map>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import SalesBar from '@/components/SalesBar'
import SaleLine from '@/components/SaleLine'
import SalePie from '@/components/SalePie'
import SaleMap from '@/components/SaleMap'

export default {
  name: 'Home',

  components: {
    TopHeader,
    SalesBar,
    SaleLine,
    SalePie,
    SaleMap
  },

  data () {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
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
}
</style>
