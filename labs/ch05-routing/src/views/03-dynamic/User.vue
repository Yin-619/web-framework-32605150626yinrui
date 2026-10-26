<template>
  <div class="page">
    <h2> 用户详情</h2>
    <p>用户ID：<b class="big">{{ $route.params.id }}</b>（来自 <code>$route.params.id</code>）</p>
    <p class="muted">从用户 1 直接点去用户 2：地址变了、参数也变了——但组件没有重新创建</p>
    <p>本组件被复用观看了 <b>{{ viewed }}</b> 次（mounted 只跑一次；参数变化走 watch）</p>
    <router-link to="/users">← 回用户列表</router-link>
  </div>
</template>
<script>
export default {
  name: 'User',
  data() {
    return { viewed: 1 }
  },
  mounted() {
    console.log('User 组件挂载了：', this.$route.params.id)
  },
  watch: {
    '$route.params.id'(newId) {
      console.log('参数变了：', newId)
      this.viewed++
    }
  }
}
</script>
<style scoped>
.page {
  background: #fff;
  border: 1px solid #ddd;
  border-left: 4px solid #3498db;
  border-radius: 6px;
  padding: 14px 18px;
}
.big {
  font-size: 22px;
  color: #222;
}
code {
  background: #e8f8f0;
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}
.muted {
  color: #666;
}
</style>
