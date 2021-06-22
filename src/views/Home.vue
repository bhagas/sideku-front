<template>
  <div id="home" >
    <section class="section-one">
      <b-container fluid>
        <b-row>
          <b-col md="12" class="pl-0 pr-0 banner">
            <img src="../assets/ilus1.png" alt="">
          </b-col>
        </b-row>
      </b-container>


      <section class="section-menu">
        <b-container>
          <b-row>
            <b-col md="4">
              <div class="identity">
                <img src="../assets/logo_jateng.png" alt="">
              </div>
            </b-col>
            <b-col md="7">
              <div class="menu">
                <h6 class="m-t-0 m-b-0">CSR</h6>
                <router-link :to="'pengembang'" ><h6  class="m-t-0 m-b-0">Pengembang</h6></router-link>
                <h6  class="m-t-0 m-b-0">Karir/Magang</h6>
                <h6  class="m-t-0 m-b-0">Kerjasama</h6>
                <h6  class="m-t-0 m-b-0">Forum PKP</h6>
                
              </div>
            </b-col>

            <b-col md="1">
              <div class="menu"><b-button block size="sm" v-b-modal.modal-lg variant="primary">Login</b-button></div>
            </b-col>
          </b-row>
        </b-container>
      </section>
      
    </section>


    <section class="section-two">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="shortcut-menu">
              <router-link :to="'perumahan'" style="text-decoration:none">
              <div class="box">
                <img src="../assets/003-search-house.png" alt="">
                <h6>Pencarian Perumahan</h6>
              </div>
              </router-link>

              <div class="box">
                <img src="../assets/002-help.png" alt="">
                <h6>Realisasi Bantuan PKP</h6>
              </div>

              <div class="box">
                <img src="../assets/004-gallery.png" alt="">
                <h6>Pameran Virtual PKP</h6>
              </div>

              <div class="box">
                <img src="../assets/001-location.png" alt="">
                <h6>Tata Ruang & Kebencanaan</h6>
              </div>

              <div class="box">
                <img src="../assets/005-loudspeaker.png" alt="">
                <h6>Lapor<br/><br/></h6>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    
    <section class="section-three">
      <b-container>
        

        <b-row>
          <b-col md="8" class="left">
            <b-row>
              <b-col md="12" class="top">
                <h5>Pengembang Perumahan</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="12">
                <h2><strong>Menjual Rumah Langsung di Klinik PKP</strong></h2>
              </b-col>

              <b-col>
                <p >Pengembang dapat mendaftarkan perusahaannya dan menawarkan produk rumah kepada masyarakat dalam satu portal layanan. Mendapatkan subsidi Pemerintah dan kemudahan-kemudahan lainnya.</p>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="6">
                <h6><strong>Mengapa menjual rumah di Klinik PKP ?</strong></h6>
                <h6 class="fs-14">1. Berpartisipasi Program Pemerintah</h6>
                <h6 class="fs-14">2. Dipromosikan Gubernur Jawa Tengah</h6>
                <h6 class="fs-14">3. Memperluas wilayah pemasaran</h6>
              </b-col>

              <b-col md="6">
                <h6><strong>Bagaimana cara menjualnya ?</strong></h6>
                <p >Daftarkan perusahaan anda melalui menu pengembang. Anda akan mendapatkan akses khusus pengembang pada Klinik PKP, lalu isikan profil perusahaan dan rumah-rumah yang anda jual</p>
              </b-col>
            </b-row>

            <b-row class="m-t-30">
              <b-col md="12">
                <h6><strong>Silahkan cari Pengembang / Rumah disini</strong></h6>
              </b-col>
              <b-col md="10">
                <b-form-input placeholder="Cari Pengembang / Rumah"></b-form-input>
              </b-col>

              <b-col md="2">
                <b-button variant="warning" block>Cari</b-button>
              </b-col>
            </b-row>
          </b-col>

          <b-col md="4" class="right">
            <img src="../assets/sale-big.png" alt="" style="width:360px">
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-four">
      <b-container>
        <b-row>
          <b-col md="4" class="left">
            <img src="../assets/help-big.png" alt="" style="width:360px">
          </b-col>

          <b-col md="8" class="right">
            <b-row>
              <b-col md="12" class="top">
                <h5>Badan Usaha / Perusahaan / Lembaga Sosial</h5>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <h2><strong>CSR di klinik PKP</strong></h2>
              </b-col>

              <b-col>
                <p >Perusahaan dapat bergabung dan memberikan batuan CSR pada RTLH masyarakat dalam satu portal layanan sehingga CSR lebih tepat sasaran dan bermanfaat langsung bagi masyarakat.</p>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="6">
                <h6><strong>Mengapa Klinik PKP ?</strong></h6>
                <h6 class="fs-14">1. Mendukung Program Rumah Sehat</h6>
                <h6 class="fs-14">2. Penghargaan Gubernur Jawa Tengah</h6>
                <h6 class="fs-14">3. CSR Akuntable dan Tepat Sasaran</h6>
              </b-col>

              <b-col md="6">
                <h6><strong>Bagaimana cara bergabung ?</strong></h6>
                <p >Daftarkan perusahaan anda melalui menu CSR. Anda akan mendapatkan akses khusus CSR pada Klinik PKP dan melihat list RTLH masyarakat yang telah di verifikasi dan validasi oleh Tim Klinik PKP</p>
              </b-col>
            </b-row>

            <b-row class="m-t-15">
              <b-col md="8" offset-md="2">
                <b-row>
                  <b-col md="4">
                    <router-link :to="'csr'" >
                    <center>
                      <img src="https://via.placeholder.com/100" alt="">
                      <h6 class="m-t-15"><strong>Data CSR</strong></h6>
                    </center>
                    </router-link>
                  </b-col>
                  
                  <b-col md="4">
                    <center>
                      <img src="https://via.placeholder.com/100" alt="">
                      <h6 class="m-t-15"><strong>Cari RTLH</strong></h6>

                    </center>
                  </b-col>

                  <b-col md="4">
                    <center>
                      <img src="https://via.placeholder.com/100" alt="">
                      <h6 class="m-t-15"><strong>Login</strong></h6>

                    </center>
                  </b-col>
                </b-row>
              </b-col>
              
            </b-row>
          </b-col>

          
        </b-row>
      </b-container>
    </section>

    <section class="section-five">
      <b-container>
        <b-row>
          <b-col md="12" class="top">
            <h5>Lembaga Pendidikan / Akademisi / Profesional</h5>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="8" class="left">
            <b-row>
              <b-col md="12">
                <h2><strong>Berbagi Penelitian di klinik PKP</strong></h2>
              </b-col>

              <b-col md="12">
                <p >Lembaga pendidikan / Akademisi dapat mempublikasikan hasil penelitiannya terkait perumahan dan permukiman, terutama informasi teknologi terbaru perumahan yang dapat diterapkan.</p>
              </b-col>
            </b-row>

            <b-row class="m-t-30">
              <b-col md="6">
                <h6><strong>Mengapa Klinik PKP ?</strong></h6>
                <h6 class="fs-14">1. Berbagi Ilmu Pengetahuan kepada masyarakat</h6>
                <h6 class="fs-14">2. Hasil penelitian dapat diterapkan</h6>
                <h6 class="fs-14">3. Memberikan solusi permasalahan PKP di Jateng</h6>
              </b-col>

              <b-col md="6">
                <h6><strong>Bagaimana cara berbagi ?</strong></h6>
                <p >Anda melalui menu forum PKP, selanjutnya Pilih kategori akun. Anda akan mendapatkan akses khusus pada Klinik PKP dan berbagi ilmu, kritik, saran dan masukan serta alternatif solusi permasalahan di dalam Klinik PKP</p>
              </b-col>
            </b-row>

            <b-row class="m-t-15">
              <b-col md="12">
                <h6><strong>Penelitian Terbaru</strong></h6>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="4">
                <img src="https://via.placeholder.com/220" alt="">
              </b-col>

              <b-col md="4">
                <img src="https://via.placeholder.com/220" alt="">
              </b-col>

              <b-col md="4">
                <img src="https://via.placeholder.com/220" alt="">
              </b-col>
            </b-row>

            
          </b-col>

          <b-col md="4" class="right">
            <img src="../assets/gallery-big.png" alt="" style="width:360px">
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-six">
      <b-container>
        <b-row>
          <b-col md="4" class="left">
            <img src="../assets/logo_Klinik_Big.png" alt="" style="width:360px">
          </b-col>

          <b-col md="8" class="right">
            <b-row>
              <b-col md="12" class="top">
                <h5>Forum PKP Jawa Tengah</h5>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <h2><strong>Forum di Klinik PKP</strong></h2>
              </b-col>

              <b-col md="12">
                <p >Siapapun dapat bergabung dengan Klinik PKP untuk menuju Perumahan dan Kawasan Permukiman yang lebih baik di Provinsi Jawa Tengah. Download Aplikasi Klinik PKP sekarang !</p>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <b-button variant="warning"><img src="../assets/logo_Klinik_Big.png" alt="" class="m-r-15"> 
                <strong>Download Klinik PKP</strong></b-button>
              </b-col>
            </b-row>
          </b-col>

          
        </b-row>
      </b-container>
    </section>
    
    <footer class="section-footer">
      <b-container>
        <b-row>
          <b-col md="12">
            <h6 class="m-t-0 m-b-0 text-center"><strong>Copyright © 2021 Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi Jawa Tengah</strong></h6>
          </b-col>
        </b-row>
      </b-container>
    </footer>

    <b-modal id="modal-lg" size="lg" centered hide-footer>
      <b-row>
        <b-col md="6">
          <img src="https://via.placeholder.com/200" alt="" style="width:100%">
        </b-col>
        <b-col md="6">
          <h3 class="m-t-0 m-b-0"><strong>LOGIN</strong></h3>
          <h4 class="m-t-0 m-b-0">KLINIK PKP PROVINSI JAWA TENGAH</h4>
          <hr>
          <b-form-group label="Username">
            <b-form-input></b-form-input>
          </b-form-group>

          <b-form-group label="Password">
            <b-form-input></b-form-input>
          </b-form-group>

          <router-link :to="'dashboard_pengembang'" >
          <b-button variant="primary">Login</b-button>
          </router-link>
        </b-col>
      </b-row>
    </b-modal>
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

.fs-14{
  font-size: 14px !important;
}

.section-one{
  position: relative;
}

.section-one .banner{
  width: 100%;
  height: 600px;
  position: relative;
  background-color: whitesmoke;
}

.section-one .banner img{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80%;
}


.section-one .section-menu{
  position: absolute;
  left:0;
  right: 0;
  top: 0;
}



.section-one .section-menu .identity{
  width: 100%;
  display:flex;
  height: 70px;
  justify-content: flex-start;
  align-items: center;
}

.section-one .section-menu .identity img{
  height: 50px;
}

.section-one .section-menu .menu{
  width: 100%;
  height: 70px;
  /* background-color: yellowgreen; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.section-two{
  padding: 60px 0;
}

.section-two .shortcut-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
}


.section-two .shortcut-menu .box{
  width: 200px;
  height: 200px;
  /* background-color: wheat; */
  display: flex;
  
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
}

.section-two .shortcut-menu .box img{
  border-radius: 100%;
}

.section-two .shortcut-menu .box h6{
  text-align: center;
  margin-top: 15px;
  font-weight: bold;
}

.section-three{
  background-color: #4C87F2;
  padding: 60px 0;
}

.section-three .right img{
  width: 100%;
}

.section-three h5, .section-three h2, .section-three p, .section-three h6{
  color: #fff;
}

.section-four{
  /* background-color: azure; */
  padding: 60px 0;
}

.section-four .top h5{
  color: #4C87F2;
}

.section-four .right img{
  border-radius: 100%;
}


.section-five{
  background-color: #4C87F2;
  padding: 60px 0;
}

.section-five .right img{
  width: 100%;
}

.section-five h5, .section-five h2, .section-five p, .section-five h6{
  color: #fff;
}

.section-five .left img{
  width: 100%;
}

.section-six{
  padding: 60px 0;
}

.section-six .right img{
  width: 70px;
}

.section-six .right .top h5{
  color: #4C87F2;
}



.section-footer{
  padding: 15px 0;
  background-color: #4C87F2;

}

.section-footer h6{
  color: #fff;
}
</style>
