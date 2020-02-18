import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/lastt/Start.vue'
import Test from './views/lastt/Test.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/lastt',
            name: 'start',
            component: Start,
            meta: {
                title: 'Start'
            }
        },
        {
            path: '/lastt/test',
            name: 'test',
            component: Test,
            meta: {
                title: 'Test'
            }
        },
        /*
        {
            path: '/result',
            name: 'result',
            component: () => import('./views/Result.vue'),
            props: (route) => (route.params),
            meta: {
                title: 'Result'
            }
        }
        */
    ]
})
