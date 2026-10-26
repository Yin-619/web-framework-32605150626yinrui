<template>
  <div class="page">
    <h2> 编程式导航 $router.push / replace</h2>
    <button @click="goStr">push字符串：/user/9527</button>
    <button @click="goPath">push path对象：/user/1</button>
    <button @click="goName">push name+params：用户2</button>
    <button @click="goQuery">push query：/search?kw=vue</button>
    <button @click="goReplace">replace 去about（不能回退）</button>
    <button @click="goBroken">path+params（params失效坑）</button>
  </div>
</template>

<script>
export default {
  name: 'ProgramDemo',
  methods: {
    goStr() {
      this.$router.push('/user/9527')
    },
    goPath() {
      this.$router.push({ path: '/user/1' })
    },
    goName() {
      this.$router.push({ name: 'user', params: { id: 2 } })
    },
    goQuery() {
      this.$router.push({ path: '/search', query: { kw: 'vue' } })
    },
    goReplace() {
      this.$router.replace('/about')
    },
    goBroken() {
      this.$router.push({ path: '/user', params: { id: 3 } })
    }
  }
}
</script>

<style scoped>
.page {
  background: #fff;
  border: 1px solid #ddd;
  border-left:4px solid #9b59b6;
  border-radius:6px;
  padding:16px;
}
button {
  margin:6px 4px;
  padding:6px 12px;
  cursor:pointer;
}
</style>
