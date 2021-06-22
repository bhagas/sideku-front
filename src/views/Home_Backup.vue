<template>
  <div id="home" >
    <div class="layer-black"></div>
    <section>
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="box">
              <div class="footer">
                <img src="../assets/logo_jateng.png" alt="" style="height:70px">
                <div class="initial">
                  <h6 class="m-t-0 m-b-0">Dinas Perumahan Rakyat dan Kawasan Permukiman</h6>
                  <h6 class="m-t-0 m-b-0" style="font-size:16px !important;letter-spacing:7.5px">Provinsi Jawa Tengah</h6>
                </div>
              </div>
              <b-row class="m-b-15">
                <b-col md="8" offset-md="2">
                  <b-row>
                    <b-col md="12">
                      <div class="up">
                        <b-row>
                          <b-col md="4">
                            <div class="up-left">
                              <img src="../assets/logo_klinik_pkp.png" alt="">
                            </div>
                          </b-col>
                          <b-col md="8">
                            <div class="up-right">
                              <h6 class="m-t-0 m-b-0">Selamat datang, <strong>pengguna@gmail.com</strong></h6>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                  </b-row>

                  <b-row class="m-t-30">
                    <b-col md="10" offset-md="1">
                      <b-row>
                        <b-col md="6">
                          <div class="down">
                            <img src="../assets/menu_pengajuan_perumahan.png" alt="">
                            <h4 class="m-t-30 m-b-0"><strong>Pengajuan</strong></h4>
                          </div>
                        </b-col>

                        <b-col md="6">
                          <router-link :to="'perumahan'" style="text-decoration:none">
                            <div class="down">
                              <img src="../assets/menu_perumahan.png" alt="">
                              <h4 class="m-t-30 m-b-0"><strong>Perumahan</strong></h4>
                            </div>
                          </router-link>
                        </b-col>
                      </b-row>
                    </b-col>
                    
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "Home",
 data (){
   return{
     isLogin: false,
   };
 }

};
</script>

<style scoped>
.layout{
  width: 100%;
  height: 100px;
  background-color: aqua;
}

.layout2{
  width: 100%;
  height: 100px;
  background-color: yellowgreen;
}

#home{
  position: relative;
  background-image: url('../assets/bg_perumahan.png');
  background-size:100%;
  background-size: cover;

}

.layer-black{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.up{
  width: 100%;
  /* height: 50px; */
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  padding: 0 15px;
}

.up .up-left{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.up .up-right{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.down{
  width: 100%;
  height: 286px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.box{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  /* align-items: center; */
  /* background-color: violet; */
}

.footer{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 85px;
  /* background-color: yellowgreen; */
  display: flex;
  justify-content: center;
}

.footer .initial{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 15px;
}

.footer .initial h6{
  font-size: 12px !important;
  color: #fff;
}
</style>
