import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import dashboard from "../views/loggedin/dashboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
        requiresAuth: true
    }
},
// {
//     path: '/admin',
//     name: 'admin',
//     component: Admin,
//     meta: {
//         requiresAuth: true,
//         is_admin : true
//     }
// },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('token') == '') {
          next({
              path: '/login',
              query: { tujuan: to.fullPath }
          })
      } else {
          // let user = JSON.parse(localStorage.getItem('user'))
          // if(to.matched.some(record => record.meta.is_admin)) {
          //     if(user.is_admin == 1){
          //         next()
          //     }
          //     else{
          //         next({ name: 'userboard'})
          //     }
          // }else {
          //     next()
          // }
          next()
      }
  } else if(to.matched.some(record => record.meta.guest)) {
    // console.log(localStorage.getItem('token'))
      if(localStorage.getItem('token') == ''){
          next()
      }
      else{
          next({ name: 'dashboard'})
      }
  }else {
      next()
  }
})

export default router;
