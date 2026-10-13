import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 导入要全局注册的组件 GlobalDemo
import GlobalDemo from './experiments/03-register/GlobalDemo.vue'

// 创建Vue应用实例
const app = createApp(App)

// 全局注册组件：整个项目任何页面都可以直接使用 <GlobalDemo />，不需要import
app.component('GlobalDemo', GlobalDemo)

// 挂载到页面 #app 节点，必须写在最后！
app.mount('#app')