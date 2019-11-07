import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const config = [
  {
    path: "/",
    name: "home",
    label: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    label: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
]

export const routes = config
  .filter(({ menu }) => (menu && menu.visible !== false) || !menu)
  .map(x => ({
    label: x.label || x.name,
    name: x.children ? x.children[0].name : x.name,
    to: x.path,
    icon: x.icon,
    ...x.menu,
    children:
      x.children &&
      x.children.map(y => ({
        label: y.label || y.name,
        to: y.path
      }))
  }))

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: config
})

export default router
