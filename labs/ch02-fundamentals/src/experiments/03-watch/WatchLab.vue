<template>
  <div class="lab">
    <h2>实验03｜watch侦听器</h2>
    <p>输入内容：<input v-model="msg" /></p >
    <p>侦听记录：{{ logText }}</p >
  </div>
</template>

<script>
export default {
  name: 'WatchLab',
  data() {
    return {
      msg: '',
      logText: '等待输入...'
    }
  },
  watch: {
    msg(newVal) {
      this.logText = `检测到内容变化，新值：${newVal}`
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