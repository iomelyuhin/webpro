export default [
  {
    path: "/",
    component: () => import("@/components/pages/about.vue"),
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/projects",
    component: () => import("@/components/pages/projects.vue"),
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/feedback",
    component: () => import("@/components/pages/feedback.vue"),
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  {
    path: "/login",
    component: () => import("@/components/pages/login.vue"),
    meta: {
      public: true
    }
  }
];