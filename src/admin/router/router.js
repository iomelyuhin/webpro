import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import about from '../components/pages/about.vue'
import projects from '../components/pages/projects.vue'
import feedback from '../components/pages/feedback.vue'
import login from '../components/pages/login.vue'

const routes = [
  {
    path: "/",
    component: about,
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/projects",
    component: projects,
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/feedback",
    component: feedback,
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  {
    path: "/login",
    component: login,
    meta: {
      public: true
    }
  }
];

export default new VueRouter({ routes })