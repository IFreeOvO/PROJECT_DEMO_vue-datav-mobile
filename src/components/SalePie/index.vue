<template>
  <div class="sales-pie">
    <div class="sales-pie-inner">
      <div class="sales-pie-item">
        <div class="sales-pie-item-inner">
          <vue-echarts :options="options1"></vue-echarts>
        </div>
      </div>
      <div class="sales-pie-item">
        <div class="sales-pie-item-inner">
          <vue-echarts :options="options2"></vue-echarts>
        </div>
      </div>
      <div class="sales-pie-item">
        <div class="sales-pie-item-inner">
          <vue-echarts :options="options3"></vue-echarts>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
function createOptions(title, value, data) {
  return {
    title: [
      {
        text: title,
        textStyle: {
          color: 'rgba(255,255,255,.3)',
          fontSize: 12
        },
        top: 3
      },
      {
        text: value,
        textStyle: {
          color: '#fff',
          fontSize: 16,
          fontWeight: 500
        },
        top: '43%',
        left: '32%'
      }
    ],
    tooltip: {
      trigger: 'item',
      formatter(params) {
        return `${params.data.name}<br/>${params.data.value}`
      }
    },
    series: [
      {
        name: title,
        type: 'pie',
        radius: ['65%', '80%'],
        label: {
          show: false
        },
        data: [{
          value: data[0],
          name: '数据',
          itemStyle: {
            color: 'rgb(0,140,217)'
          }
        },
        {
          value: data[1],
          name: '数据',
          itemStyle: {
            color: 'rgb(35,69,145)'
          }
        }]
      }
    ]
  }
}

export default {
  name: 'SalePie',

  data() {
    return {
      options1: {},
      options2: {},
      options3: {}
    }
  },

  props: {
    data: Object
  },

  watch: {
    data() {
      this.update()
    }
  },

  methods: {
    update() {
      if (this.data && this.data.salePie) {
        const [data1, data2, data3] = this.data.salePie
        this.options1 = createOptions(data1.name, data1.total, data1.data)
        this.options2 = createOptions(data2.name, data2.total, data2.data)
        this.options3 = createOptions(data3.name, data3.total, data3.data)
      }
    }

  }

}
</script>

<style lang="scss" scoped>
.sales-pie {
  position: absolute;
  top: 1450px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 400px;
  padding: 25px 12.5px 0;
  box-sizing: border-box;

  .sales-pie-inner {
    display: flex;
    height: 100%;
    width: 100%;

    .sales-pie-item {
      flex: 0 0 33.33%;
      width: 33.33%;
      height: 100%;
      padding: 0 12.5px;
      box-sizing: border-box;

      .sales-pie-item-inner {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
}
</style>
