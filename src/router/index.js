import { createRouter, createWebHistory } from 'vue-router'
import Menu from '.././components/Menu'
import Login from '.././components/Login'
import Form from '.././components/Form'
import Detail from '.././components/Detail'


const routes = [
    {
        path:"/menu",
        name:"menu",
        component:Menu
    },
    {
        path:"/login",
        name:"login",
        component:Login
    },
    {
        path:"/form",
        name:"form",
        component:Form
    },
    {
        path:"/detail",
        name:"detail",
        component:Detail
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router