<template>
  <div id="dashboard">

    <myheader></myheader>
     <b-container class="bv-example-row">

       <b-row class="m-t-30">
         <b-col>
           <h1 class="text-left"><strong>DASHBOARD</strong></h1>
           <hr/>
         </b-col>
       </b-row>
       <b-row class="m-b-30">
         <b-col md="12" lg="12">
           <div class="partone">
             <div class="boxmenu">
               <center>
                 <img src="https://via.placeholder.com/120">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>RIWAYAT PENYAKIT</strong></h6>
               </center>
             </div>
             <div class="boxmenu">
               <center>
                 <img src="https://via.placeholder.com/120">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>GEJALA FISIK</strong></h6>
               </center>
             </div>
             <div class="boxmenu">
               <center>
                 <img src="https://via.placeholder.com/120">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>GEJALA PSIKIS</strong></h6>
               </center>
             </div>
             <div class="boxmenu">
               <center>
                 <img src="https://via.placeholder.com/120">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>GEJALA PERILAKU BURUK</strong></h6>
               </center>
             </div>
             <div class="boxmenu">
               <center>
                 <img src="https://via.placeholder.com/120">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>PERNYATAAN</strong></h6>
               </center>
             </div>
             <div class="boxmenu">
               <center>
                 <img src="https://via.placeholder.com/120">
                 <h5 class="m-t-15 m-b-0"><strong>SCREENING</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>PASIEN</strong></h6>
               </center>
             </div>
           </div>
         </b-col>
         <!-- <b-col md="3" class="m-t-15">
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
             <router-link :to="'gejalafisik'">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
             <img src="https://via.placeholder.com/160">
             <h3 class="m-t-15 m-b-0">Master Gejala Fisik</h3>
             </center>
           </div>
               </router-link>
         </b-col>

         <b-col md="3" class="m-t-15">
                <router-link :to="'gejalapsikis'">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
             <img src="https://via.placeholder.com/160">
             <h3 class="m-t-15 m-b-0">Master Gelaja Psikis</h3>
             </center>
           </div>
                </router-link>
         </b-col>
         <b-col md="3" class="m-t-15">
           <router-link :to="'gejalaPerilakuBuruk'">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
             <img src="https://via.placeholder.com/160">
             <h3 class="m-t-15 m-b-0">Master Gejala Perilaku Buruk</h3>
             </center>
           </div>
            </router-link>
         </b-col>
         <b-col md="3" class="m-t-15">
              <router-link :to="'masterpernyataan'">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
             <img src="https://via.placeholder.com/160">
             <h3 class="m-t-15 m-b-0">Master Pernyataan</h3>
             </center>
           </div>
             </router-link>
         </b-col>
          <b-col md="3" class="m-t-15">
           <div style="width:100%;height:;background-color:;padding:30px;background-color:rgba(0,0,0,0.7);border-radius:6px;color:#fff">
             <center>
             <img src="https://via.placeholder.com/160">
             <h3 class="m-t-15 m-b-0">Screening Pasien</h3>
             </center>
           </div>
         </b-col> -->
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
#dashboard .partone{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#dashboard .partone .boxmenu{
  width: 200px;
  background-color: #fff;
  box-shadow:0 7px 20px 0 rgba(0,0,0,.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 30px;
}

#dashboard .partone .boxmenu img{
  border-radius: 100%;
}

</style>
