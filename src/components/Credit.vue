<template>
  <div class="container">
    <canvas ref="canvas" width="180" height="180"></canvas>
    <div class="percent" :style="percent_color">{{ percent }}</div>
    <div>信用积分</div>
  </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            radius: 85,    // 圆环半径
            lineWidth: 5,  // 圆环边的宽度
            strokeStyle: '#f3f3f3', // 边的颜色
            fillStyle: '#ffd600',  // 填充色
            lineCap: 'round',
            percent: 80,
            startAngle: 0.8,
            endAngle: 0.2,
            percent_color: {
                color: '#ffd600'
            }
        }
    },
    mounted () {
        this.renderCircle()
    },
    methods: {
        renderCircle () {
            var canvas = this.$refs.canvas
            var ctx = canvas.getContext('2d')
            // 画外层圆环
            ctx.beginPath()
            ctx.arc(90, 90, this.radius, this.startAngle * Math.PI, this.endAngle * Math.PI, false)
            ctx.lineWidth = this.lineWidth
            ctx.strokeStyle = this.strokeStyle
            ctx.lineCap = this.lineCap
            ctx.stroke()
            // 画内层圆环
            ctx.beginPath()
            var all = 2 - this.startAngle + this.endAngle
            var angle = all * this.percent / 100
            var end = 0
            if (this.startAngle + angle >= 2) {
                end = this.startAngle + angle - 2
            } else {
                end = this.startAngle + angle
            }
            ctx.arc(90, 90, this.radius, this.startAngle * Math.PI, end * Math.PI, false) // 这里的圆心坐标要和外层圆环的保持一致
            ctx.lineWidth = this.lineWidth
            ctx.strokeStyle = this.fillStyle
            ctx.lineCap = this.lineCap
            ctx.stroke()
            ctx.closePath()
        }
    }
}
</script>

<style>
.container .percent {
    margin-top: 40px;
    font-weight: bold;
    margin-top: -133px;
    font-size: 42px;
}
</style>
