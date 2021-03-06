import { createRouter, createWebHistory } from 'vue-router'
import Menu from '.././components/Menu'
import Login from '.././components/Login'
import Form from '.././components/Form'
import Detail from '.././components/Detail'
import List from '.././components/List'
import Menu2 from ".././components/Menu2";

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
    },
    {
        path:"/list",
        name:"list",
        component:List
    },
    {
        path:"/menu2",
        name:"menu2",
        component:Menu2,
        children: [
            {
                path:"/detail",
                name:"detail",
                component:Detail
            },
            {
                path:"/list",
                name:"list",
                component:List
            },
            {
                path:"/form",
                name:"form",
                component:Form
            }
        ]
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router