import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/lastt/Start.vue'
import Test from './views/lastt/Test.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/lastt/test',
            name: 'test',
            component: Test,
            meta: {
                title: 'Test'
            }
        },
        {
            path: '/lastt/result',
            name: 'result',
            component: () => import('./views/lastt/Result.vue'),
            props: (route) => (route.params),
            meta: {
                title: 'Result'
            }
        },
        {
            path: '/lastt/result_test',
            name: 'result_test',
            component: () => import('./views/lastt/Result.vue'),
            props: {
                selectedOptions: [[], ['ADM', 'CRE', 'INT', 'DES', 'SYN', 'TRE'], [], [], ['ADM', 'CRE', 'INT', 'DES', 'SYN', 'TRE']]
            },
            meta: {
                title: 'Result'
            }
        }
    ]
})
