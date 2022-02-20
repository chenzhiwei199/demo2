import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
];

