import Vue from "vue";
import VueRouter from "vue-router";
import PageA from "../views/PageA.vue";
import PageB from "../views/PageB.vue";
import PageB_First from "../views/PageB_First.vue";
import PageB_Second from "../views/PageB_Second.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PageA",
    component: PageA
  },
  {
    path: "/page-b",
    name: "PageB",
    component: PageB,
    redirect: "/page-b/first",
    children: [
      {
        path: "first",
        name: "First",
        component: PageB_First
      },
      {
        path: "second",
        name: "Second",
        component: PageB_Second
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
