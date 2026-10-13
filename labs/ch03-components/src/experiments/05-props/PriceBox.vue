<!-- PriceBox.vue —子组件，接收props，对象方式做类型校验 -->
<template>
  <div class="mini">
    <h3>PriceBox</h3>
    <p>手机价格：{{ price }}，购买数量：{{ count }}，总计：{{ total }}</p >
  </div>
</template>
<script>
export default {
  name: 'PriceBox',
  props: {
    price: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    total() {
      return this.price * this.count
    }
  }
}
</script>
<style scoped>
.mini {
  border: 1px dashed var(--border);
  border-radius: 8px;
  padding: 10px 14px;
}
</style>