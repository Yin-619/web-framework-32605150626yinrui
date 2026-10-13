<!-- EmitLab.vue 父组件，监听子组件emit抛出的事件 -->
<template>
  <div class="lab">
    <h2>实验 06｜emit 子传父（3.6）</h2>
    <p class="muted">记忆模型：父 —props(只读)→ 子；父 ←@监听— emit(报信) — 子。</p >
    <p>父组件收到的消息：<b>{{ msg || '（还没收到）' }}</b></p >
    <SendCard @send-msg="getMsg" />
  </div>
</template>
<script>
import SendCard from './SendCard.vue'
export default {
  name: 'EmitLab',
  components: { SendCard },
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    getMsg(val) {
      this.msg = val
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
.muted {
  color: var(--muted);
}
</style>