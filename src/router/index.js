import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PageA",
    component: () => import("@/views/PageA.vue")
  },
  {
    path: "/page-b",
    name: "PageB",
    component: () => import("@/views/PageB.vue"),
    redirect: "/page-b/first",
    children: [
      {
        path: "first",
        name: "First",
        component: () => import("@/views/PageB_First")
      },
      {
        path: "second",
        name: "Second",
        component: () => import("@/views/PageB_Second")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
