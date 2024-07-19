import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from'./App.vue'
//引入
import router from './router'

import './assets/global.css';
//建立app对象
const app = createApp(App)

//使用路由
app.use(router)

//使用elementplus
app.use(ElementPlus)

//使用挂载对象
app.mount('#app')


