<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    路由列表：<br/>
    <router-link to='/credit'>使用h5 canvas绘制的信用积分图</router-link><br/>
    <router-link to='/hello'>hello页面</router-link><br/>
    <div>============以下是内容=============</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
