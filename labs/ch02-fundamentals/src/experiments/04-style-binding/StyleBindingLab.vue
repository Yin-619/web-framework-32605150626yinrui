<template>
  <div class="lab">
    <h2>实验04｜样式绑定</h2>
    <p>
      <button @click="isRed = !isRed">切换文字颜色</button>
    </p >
    <p :class="{ redText: isRed }">测试文字（class动态绑定）</p >

    <p>
      <button @click="bigSize = !bigSize">切换字号</button>
    </p >
    <p :style="styleObj">动态style样式</p >
  </div>
</template>

<script>
export default {
  name: 'StyleBindingLab',
  data() {
    return {
      isRed: false,
      bigSize: false
    }
  },
  computed: {
    styleObj() {
      return {
        fontSize: this.bigSize ? '24px' : '16px',
        color: '#42b883'
      }
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
.redText {
  color: red;
  font-weight: bold;
}
</style>