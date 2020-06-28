import Vue from 'vue'
import VueRouter from "vue-router";
import Main from '../pages/Main'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'Main'
        },
        {
            name: 'Main',
            path: '/Main',
            component: Main,
            meta: { title: 'Main' },
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

})
