import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/pages/home.vue';
import about from '../components/pages/about.vue';
import transcript from '../components/pages/transcript.vue';

// application routes
const routes = [
  { path: '/home', component: home },
  { path: '/about', component: about },
  { path: '/transcript', component: transcript }
]

export default new Router({
  routes: routes,
  mode: 'history',
  linkActiveClass: 'is-active'

})
