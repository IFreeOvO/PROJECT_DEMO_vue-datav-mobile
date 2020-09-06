<template>
  <div class="home">
    <div class="datav-wrapper">
      <top-header></top-header>
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'

export default {
  name: 'Home',

  components: {
    TopHeader
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
    height: 100%;
    z-index: 1;
    background-image: url('//www.youbaobao.xyz/datav-res/datav/datav-mobile-bg.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
