<template>
  <div class="lab">
    <h2>实验02｜计算属性 computed</h2>
    <p>原始数字：<input v-model.number="num" type="number" /></p >
    <p>平方（计算属性）：{{ square }}</p >
    <p>立方（计算属性）：{{ cube }}</p >
  </div>
</template>

<script>
export default {
  name: 'ComputedLab',
  data() {
    return {
      num: 2
    }
  },
  computed: {
    square() {
      return this.num * this.num
    },
    cube() {
      return this.num * this.num * this.num
    }
  }
}
</script>

<style scoped>
.lab {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
  margin-top:12px;
}
</style>