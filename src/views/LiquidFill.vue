<template>
  <div id="root">
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  name: "LiquidFill",
  methods: {
    showChart() {
      const myChart = this.$echarts.init(document.getElementById('main'));
      const option = {
        series: [{
          type: 'liquidFill',
          data: [{
            value:0.5,
            itemStyle:{
              color:'orange',
              opacity:0.6
            },
            emphasis:{
              itemStyle:{
                opacity:0.9
              }
            }
          }],
          shape: 'circle',//container表示正方形，不写默认是圆形
          label: {
            show: true
          },
          outline: {
            show: false
          }
        }]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.showChart();
  }
}
</script>

<style lang="stylus" scoped>
#id
  width 1000px
  height 1000px
#main
  position absolute
  left 100px
  top 100px
  width 600px
  height 600px
</style>