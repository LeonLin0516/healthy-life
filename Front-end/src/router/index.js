import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from "../components/Welcome.vue"
import Profile from "../components/Profile.vue"
import Wiki from "../components/Fitness-Wiki.vue"
import CalorieCalculator from "../components/Calorie-Calculator"
import DietPlan from "../components/Diet-Plans.vue"
import Exercise from "../components/Exercise"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/login'
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home,
    redirect: "/welcome",
    children: [
      {path: "/welcome", component: Welcome},
      {path: "/profile", component: Profile},
      {path: "/wiki", component: Wiki},
      {path: "/calorie-calculator", component: CalorieCalculator},
      {path: "/diet-plans", component: DietPlan},
      {path: "/exercise", component: Exercise}
    ]
  },
]

const router = new VueRouter({
  routes
})

// not working
// router.beforeEach((to,from,next) => {
//   if (to.path == "/login") {
//     return next();
//   }
//   const userFlag = window.sessionStorage.getItem("user");
//   if (!userFlag) {
//     return next("/login");
//   } else {
//     next();
//   }
// })

export default router
