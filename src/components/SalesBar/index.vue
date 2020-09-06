<template>
  <div class="sales-bar">
    <div class="sales-bar-inner">
      <vue-echarts :options="options"></vue-echarts>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SalesBar',

  data() {
    return {
      options: {}
    }
  },

  methods: {

  },

  mounted() {
    const axis = ['南京', '深圳', '杭州', '上海', '北京', '全国']
    const data1 = [68203, 73489, 79034, 204970, 231744, 630230]
    const data2 = [49325, 53438, 61000, 221594, 234141, 681807]
    this.options = {
      title: {
        text: '今日销售额: 2313,233.21元',
        textStyle: {
          color: '#fff'
        },
        top: 10
      },
      grid: {
        left: '12%',
        right: '4%',
        bottom: '3%'
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: axis,
        axisLabel: {
          color: '#fff'
        }
      },
      series: [
        {
          name: '平台流量',
          type: 'bar',
          data: data1
        },
        {
          name: '外部流量',
          type: 'bar',
          data: data2,
          itemStyle: {
            color: 'rgb(0,140,217)'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-bar {
  position: absolute;
  top: 300px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 650px;
  padding: 25px 25px 0;
  box-sizing: border-box;
  .sales-bar-inner {
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}
</style>
