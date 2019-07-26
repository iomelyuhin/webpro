import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import about from '../components/about.vue'
import projects from '../components/projects.vue'
import feedback from '../components/feedback.vue'
import login from '../components/login.vue'

const routes = [
  {
    path: "/",
    component: about
  },
  {
    path: "/projects",
    component: projects
  },
  {
    path: "/feedback",
    component: feedback
  },
  {
    path: "/login",
    component: login
  }
];

export default new VueRouter({ routes })