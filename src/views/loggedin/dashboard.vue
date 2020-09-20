<template>
  <div id="dashboard">

    <myheader></myheader>
     <b-container class="bv-example-row">

       <b-row>
         <b-col>
           <h2 class="text-center">DASHBOARD</h2>
         </b-col>
       </b-row>
       <b-row class="m-t-15">
         <b-col md="3" class="m-t-15">
           <router-link :to="'riwayatpenyakit'">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
               <img src="https://via.placeholder.com/160">
              <h3 class="m-t-15 m-b-0">Master Riwayat Penyakit</h3>
             </center>
           </div>
           </router-link>
         </b-col>
         <b-col md="3" class="m-t-15">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
             <img src="https://via.placeholder.com/160">
             <h3 class="m-t-15 m-b-0">Master Gejala Fisik</h3>
             </center>
           </div>
         </b-col>
         <b-col md="3" class="m-t-15">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
             <img src="https://via.placeholder.com/160">
             <h3 class="m-t-15 m-b-0">Master Gelaja Psikis</h3>
             </center>
           </div>
         </b-col>
         <b-col md="3" class="m-t-15">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
             <img src="https://via.placeholder.com/160">
             <h3 class="m-t-15 m-b-0">Master Gejala Perilaku Buruk</h3>
             </center>
           </div>
         </b-col>
         <b-col md="3" class="m-t-15">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
             <img src="https://via.placeholder.com/160">
             <h3 class="m-t-15 m-b-0">Master Pernyataan</h3>
             </center>
           </div>
         </b-col>
          <b-col md="3" class="m-t-15">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
             <img src="https://via.placeholder.com/160">
             <h3 class="m-t-15 m-b-0">Screening Pasien</h3>
             </center>
           </div>
         </b-col>
       </b-row>
     </b-container>
     <button v-on:click="logoutdong()">logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapActions } from 'vuex'
import myheader from "../../components/header"
export default {
  name: "dashboard",
  data (){
    return{
  
    };
  },
  components:{
    myheader
  },


computed: {
...mapState('Login', ['token']),
 ...mapGetters('Login',['cekLogin']),

},

methods:{
  ...mapActions('Login', [ 'doLogin', 'doLogout' ]),
 
   logoutdong: function(){
       
    this.doLogout()
     this.$router.push({ name: "login"})
    // this.isLogin =  this.cekLogin
  },
}

};
</script>

<style scoped>

</style>
