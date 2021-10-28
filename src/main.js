import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import Main from './components/Main'
// import List from "./components/List"
// import Form from './components/Form'
// import Detail from './components/Detail'
// import Menu2 from './components/Menu2'
import router from './router/index'

createApp(Main).use(ElementPlus).use(router).mount('#app')
