import Vue from 'vue';
import Router from 'vue-router';

import Search from './StackOverflow/Search';

// Install the plugin
Vue.use(Router);

// Create a router
export default new Router({
  routes: [
    {
      path: '/',
      component: Search,
    },
  ],
});
