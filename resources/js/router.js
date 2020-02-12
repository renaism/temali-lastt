import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'start',
            component: Start,
            meta: {
                title: 'Start'
            }
        }
        /*
        {
            path: '/test',
            name: 'test',
            component: Test,
            meta: {
                title: 'Test'
            }
        },
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
