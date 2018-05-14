import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/pages/home.vue';
import portfolio from '../components/pages/portfolio.vue';
import transcript from '../components/pages/transcript.vue';

// application routes
const routes = [
  { path: '/', component: home },
  { path: '/portfolio', component: portfolio },
  { path: '/transcript', component: transcript }
]

export default new Router({
  routes: routes,
  mode: 'history',
  linkActiveClass: 'is-active'

})
