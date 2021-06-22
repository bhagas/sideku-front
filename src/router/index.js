import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Perumahan from "../views/Perumahan.vue";
import DataPerumahan from "../views/DataPerumahan.vue";
import DetailPerumahan from "../views/DetailPerumahan.vue";
import Pengembang from "../views/Pengembang.vue";
import DaftarPengembang from "../views/DaftarPengembang.vue";
import DashboardPengembang from "../views/DashboardPengembang.vue";
import EditProfilPengembang from "../views/EditProfilPengembang.vue";
import PerumahanPengembang from "../views/PerumahanPengembang.vue";
import InputPerumahanPengembang from "../views/InputPerumahanPengembang.vue";
import EditPerumahanPengembang from "../views/EditPerumahanPengembang.vue";
import TipePerumahanPengembang from "../views/TipePerumahanPengembang.vue";
import Csr from "../views/csr.vue";
import DetailCsr from "../views/DetailCsr.vue";
import DashboardPerbankan from "../views/DashboardPerbankan.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      guest: true
    }
  },

  {
    path: "/perumahan",
    name: "Perumahan",
    component: Perumahan,
    meta: {
      guest: true
    }
  },

  {
    path: "/data_perumahan",
    name: "DataPerumahan",
    component: DataPerumahan,
    meta: {
      guest: true
    }
  },

  {
    path: "/detail_perumahan",
    name: "DetailPerumahan",
    component: DetailPerumahan,
    meta: {
      guest: true
    }
  },

  {
    path: "/pengembang",
    name: "Pengembang",
    component: Pengembang,
    meta: {
      guest: true
    }
  },

  {
    path: "/daftar_pengembang",
    name: "DaftarPengembang",
    component: DaftarPengembang,
    meta: {
      guest: true
    }
  },
  
  {
    path: "/dashboard_pengembang",
    name: "DashboardPengembang",
    component: DashboardPengembang,
    meta: {
      guest: true
    }
  },

  {
    path: "/edit_profil_pengembang",
    name: "EditProfilPengembang",
    component: EditProfilPengembang,
    meta: {
      guest: true
    }
  },

  {
    path: "/perumahan_pengembang",
    name: "PerumahanPengembang",
    component: PerumahanPengembang,
    meta: {
      guest: true
    }
  },

  {
    path: "/input_perumahan_pengembang",
    name: "InputPerumahanPengembang",
    component: InputPerumahanPengembang,
    meta: {
      guest: true
    }
  },

  {
    path: "/edit_perumahan_pengembang",
    name: "EditPerumahanPengembang",
    component: EditPerumahanPengembang,
    meta: {
      guest: true
    }
  },

  {
    path: "/tipe_perumahan_pengembang",
    name: "TipePerumahanPengembang",
    component: TipePerumahanPengembang,
    meta: {
      guest: true
    }
  },


  {
    path: "/csr",
    name: "Csr",
    component: Csr,
    meta: {
      guest: true
    }
  },

  {
    path: "/detail_csr",
    name: "DetailCsr",
    component: DetailCsr,
    meta: {
      guest: true
    }
  },

  {
    path: "/dashboard_perbankan",
    name: "DashboardPerbankan",
    component: DashboardPerbankan,
    meta: {
      guest: true
    }
  },


  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true
    }
  },
  

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (!localStorage.getItem('token') || localStorage.getItem('token')  == "undefined" || localStorage.getItem('token') == '' ) {
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
      if(!localStorage.getItem('token') || localStorage.getItem('token')  == "undefined" || localStorage.getItem('token') == '' ){
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
