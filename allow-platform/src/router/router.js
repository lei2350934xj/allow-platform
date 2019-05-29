import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
// import Header from '../components/Header.vue';
// import Footer from '../components/Footer.vue';
import Content from '../components/Content.vue';
import index1_1 from "../components/content/index1_1.vue";
import index1_2 from "../components/content/index1_2.vue";
import index2_1 from "../components/content/index2_1.vue";
import index2_2 from "../components/content/index2_2.vue";
import userInfo from "../components/userInfo/info.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component: Content,
        children:[
            {
                path:"/index1_1",
                component: index1_1
            },
            {
                path:"/index1_2",
                component: index1_2
            },
            {
                path:"/index2_1",
                component: index2_1
            },
            {
                path:"/index2_2",
                component: index2_2
            },
        ]
    },
    // 个人中心
    {
        path:"/userInfo",
        component: userInfo
    }
]

var router =  new VueRouter({
    routes
})
export default router;