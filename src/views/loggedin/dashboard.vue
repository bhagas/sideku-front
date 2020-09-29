<template>
  <div id="dashboard">

    <myheader></myheader>
     <b-container class="bv-example-row">
       <b-row class="m-t-30">
         <b-col>
           <h3 class="text-center m-t-0 m-b-0"><strong>DASHBOARD SIDE</strong></h3>
           <!-- <hr/> -->
         </b-col>
       </b-row>
      <b-row  class="d-block d-sm-none d-none d-sm-block d-md-none" style="padding-top:30px;padding-bottom:30px">
        <b-col cols="10" offset="1">
           <center>
           <div style="width:100%;padding:30px;box-shadow:0 7px 20px 0 rgba(0,0,0,.3);border-radius:8px;background-color: #fff;">
              <router-link :to="'screening'">
             <center>
                <img src="../../assets/checkup.png" style="width:100px;border-radius:100%;">
                 <h5 class="m-t-15 m-b-0"><strong>SCREENING</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>PASIEN</strong></h6>
             </center>
             </router-link>
           </div>
           </center>
        </b-col>


        <b-col cols="10" offset="1" class="m-t-30">
           <center>
           <div style="width:100%;padding:30px;box-shadow:0 7px 20px 0 rgba(0,0,0,.3);border-radius:8px;background-color: #fff;">
              <router-link :to="'riwayatpenyakit'">
               <center>
                 <img src="../../assets/medical-record.png" style="height:100px">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>RIWAYAT PENYAKIT</strong></h6>
               </center>
               </router-link>
           </div>
           </center>
        </b-col>

        <b-col cols="10" offset="1" class="m-t-30">
           <center>
           <div style="width:100%;padding:30px;box-shadow:0 7px 20px 0 rgba(0,0,0,.3);border-radius:8px;background-color: #fff;">
             <router-link :to="'gejalafisik'">
               <center>
                 <img src="../../assets/medical-record.png" style="height:100px">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>GEJALA FISIK</strong></h6>
               </center>
               </router-link>
           </div>
           </center>
        </b-col>

        <b-col cols="10" offset="1" class="m-t-30">
           <center>
           <div style="width:100%;padding:30px;box-shadow:0 7px 20px 0 rgba(0,0,0,.3);border-radius:8px;background-color: #fff;">
             <router-link :to="'gejalapsikis'">
               <center>
                 <img src="../../assets/medical-record.png" style="height:100px">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>GEJALA PSIKIS</strong></h6>
               </center>
              </router-link>
           </div>
           </center>
        </b-col>

        <b-col cols="10" offset="1" class="m-t-30">
          <center>
          <div style="width:100%;padding:30px;box-shadow:0 7px 20px 0 rgba(0,0,0,.3);border-radius:8px;background-color: #fff;">
            <router-link :to="'gejalaPerilakuBuruk'">
              <center>
                <img src="../../assets/medical-record.png" style="height:100px">
                <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                <h6 class="m-t-0 m-b-0"><strong>GEJALA PERILAKU BURUK</strong></h6>
              </center>
            </router-link>   
          </div>
          </center>
        </b-col>

        <b-col cols="10" offset="1" class="m-t-30">
           <center>
            <div style="width:100%;padding:30px;box-shadow:0 7px 20px 0 rgba(0,0,0,.3);border-radius:8px;background-color: #fff;">
              <router-link :to="'masterpernyataan'">
                <center>
                  <img src="../../assets/medical-record.png" style="height:100px">
                  <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                  <h6 class="m-t-0 m-b-0"><strong>PERNYATAAN</strong></h6>
                </center>
              </router-link>
            </div>
           </center>
        </b-col>

         
      </b-row>
       <b-row class="m-b-30 d-none d-sm-block">
         
         <b-col md="8" lg="8" offset-md="2" offset-lg="2">
           <div class="partone">
             <div class="boxmenu">
               <router-link :to="'screening'" style="text-decoration:none;color:#333">
               <center>
                 <img src="../../assets/checkup.png" style="height:100px;border-radius:100%">
                 <h5 class="m-t-15 m-b-0"><strong>SCREENING</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>PASIEN</strong></h6>
               </center>
               </router-link>
             </div>

             <div class="boxmenu">
               <router-link :to="'riwayatpenyakit'" style="text-decoration:none;color:#333">
               <center>
                 <img src="../../assets/medical-record.png" style="height:100px">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>RIWAYAT PENYAKIT</strong></h6>
               </center>
               </router-link>
             </div>
             <div class="boxmenu">
               <router-link :to="'gejalafisik'" style="text-decoration:none;color:#333">
               <center>
                 <img src="../../assets/medical-record.png" style="height:100px">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>GEJALA FISIK</strong></h6>
               </center>
               </router-link>
             </div>
             <div class="boxmenu">
                <router-link :to="'gejalapsikis'" style="text-decoration:none;color:#333">
               <center>
                 <img src="../../assets/medical-record.png" style="height:100px">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>GEJALA PSIKIS</strong></h6>
               </center>
                </router-link>
             </div>
             <div class="boxmenu">
               <router-link :to="'gejalaPerilakuBuruk'" style="text-decoration:none;color:#333">
               <center>
                 <img src="../../assets/medical-record.png" style="height:100px">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>GEJALA PERILAKU BURUK</strong></h6>
               </center>
                </router-link>
             </div>
             <div class="boxmenu">
               <router-link :to="'masterpernyataan'" style="text-decoration:none;color:#333">
               <center>
                 <img src="../../assets/medical-record.png" style="height:100px">
                 <h5 class="m-t-15 m-b-0"><strong>MASTER</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>PERNYATAAN</strong></h6>
               </center>
                </router-link>
             </div>
             
           </div>
         </b-col>

         <!-- <b-col md="4" lg="4">
           <div class="parttwo">
            <div class="boxmenu">
              <router-link :to="'screening'">
               <center>
                 <img src="../../assets/checkup.png" style="height:200px">
                 <h5 class="m-t-15 m-b-0"><strong>SCREENING</strong></h5>
                 <h6 class="m-t-0 m-b-0"><strong>PASIEN</strong></h6>
               </center>
               </router-link>
            </div>
           </div>
         </b-col> -->
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
     <myfooter></myfooter>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapActions } from 'vuex'
import myheader from "../../components/header"
import myfooter from "../../components/footer"
export default {
  name: "dashboard",
  data (){
    return{
  
    };
  },
  components:{
    myheader,
    myfooter
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
  align-items: center;
  flex-wrap: wrap;
}

#dashboard .partone .boxmenu{
  width: 200px;
  background-color: #fff;
  box-shadow:0 7px 20px 0 rgba(0,0,0,.3);
  padding: 0px 15px;
  border-radius: 8px;
  margin-top: 30px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#dashboard .partone .boxmenu img{
  /* border-radius: 100%; */
}

#dashboard .parttwo{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 520px;
}

#dashboard .parttwo .boxmenu{
  width: 300px;
  background-color: #fff;
  box-shadow:0 7px 20px 0 rgba(0,0,0,.3);
  padding: 0px 15px;
  border-radius: 8px;
  margin-top: 30px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#dashboard .parttwo .boxmenu img{
  border-radius: 100%;

}
</style>
