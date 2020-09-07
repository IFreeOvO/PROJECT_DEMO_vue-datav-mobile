<template>
  <div class="sales-line">
    <div class="sales-line-inner">
      <vue-echarts :options="options"></vue-echarts>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SalesLine',

  data() {
    return {
      options: {}
    }
  },

  methods: {

  },

  mounted() {
    const axis = ['00:00', '08:00', '16:00', '24:00']
    const data1 = [151, 532, 901, 344]
    const data2 = [320, 1732, 501, 324]
    const data3 = [900, 900, 900, 900]
    this.options = {
      title: {
        text: '分时访问&成交趋势图',
        textStyle: {
          color: '#fff'
        },
        top: 10,
        left: 10
      },
      grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: axis,
        boundaryGap: false,
        axisLabel: {
          color: 'rgba(255,255,255,0.3)'
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,0.3)'
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      },
      series: [
        {
          name: '访问量',
          type: 'line',
          data: data1,
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'rgb(0,163,233)'
          }
        },
        {
          name: '成交量',
          type: 'line',
          data: data2,
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'yellow'
          }
        },
        {
          name: 'KPI',
          type: 'line',
          data: data3,
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: 'red'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-line {
  position: absolute;
  top: 950px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 500px;
  padding: 25px 25px 0;
  box-sizing: border-box;
  .sales-line-inner {
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
}
</style>
