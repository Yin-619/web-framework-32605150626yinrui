<template>
  <div id="app">
    <h1>ch05-routing｜第 5 章实验台</h1>
    <p class="muted">第 05 课（5.1—5.6）：路由——地址栏变，组件换，页面不刷新</p>
    <nav class="top-nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/users">用户列表</router-link>
      <router-link to="/center">用户中心</router-link>
      <router-link to="/named">命名路由</router-link>
      <router-link to="/program">编程导航</router-link>
      <router-link to="/login">登录</router-link>

    </nav>
    <p class="muted addr">当前地址：<code>{{ $route.fullPath }}</code></p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style scoped>
.top-nav {
  display: flex;
  gap: 10px;
  margin: 12px 0 8px;
}
.top-nav a {
  color: #333;
  text-decoration: none;
  border: 1px solid #42b983;
  border-radius: 999px;
  padding: 3px 14px;
  font-size: 14px;
}
.top-nav a:hover {
  background: #e8f8f0;
}
.top-nav a.router-link-active {
  background: #42b983;
  color: #fff;
}
.addr {
  font-size: 13px;
}
code {
  background: #e8f8f0;
  border-radius: 4px;
  padding: 0 6px;
}
.muted {
  color: #666;
}
</style>
