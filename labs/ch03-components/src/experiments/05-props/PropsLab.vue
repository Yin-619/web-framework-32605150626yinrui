<!-- PropsLab.vue 父组件，给子组件传props，演示传错类型控制台警告 -->
<template>
  <div class="lab">
    <h2>实验 05｜props 父传子（3.5）</h2>
    <p class="muted">PriceBox用<b>对象方式</b>声明props；故意传错误类型看控制台警告。</p >
    <div class="pair">
      <PriceBox :price="price" :count="count" />
      <PriceBox :price="price" :count="badCount" />
    </div>
    <p>当前 count = {{ count }}（正常数字）｜badCount = {{ badCount }}（错误字符串）</p >
    <button @click="count++">count +1</button>
    <button @click="badCount = badCount === 'abc' ? 'xyz' : 'abc'">切换错误类型</button>
    <p class="muted">⚠️单向数据流：子组件不能直接修改props，要修改需要emit通知父组件</p >
  </div>
</template>
<script>
import PriceBox from './PriceBox.vue'
export default {
  name: 'PropsLab',
  components: { PriceBox },
  data() {
    return {
      price: 3999,
      count: 2,
      badCount: 'abc'
    }
  }
}
</script>
<style scoped>
.lab {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}
.pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:12px;
  margin:8px 0;
}
.muted {
  color: var(--muted);
}
</style>