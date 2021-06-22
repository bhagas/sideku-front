<template>
  <div id="data_perumahan" >
    <header>
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="left">
              <h5 class="m-t-0 m-b-0"><strong>Klinik PKP</strong><span class="m-l-15">Perumahan</span></h5>
            </div>
          </b-col>

          <b-col md="6">
            <div class="right">
              <h6 class="m-t-0 m-b-0 m-r-15">pengguna@gmail.com</h6>
              <span style="background-color:#fff;padding:4px;border-radius:100px">
                <img src="../assets/avatar_profil.png" alt="">
              </span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>


    <section class="section-one">
        <b-container>
            <b-row>
                <b-col md="3">
                    <div class="box-search">
                        <b-row>
                            <b-col md="12">
                                <h5><strong>Saring Hasil</strong></h5>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <hr>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <h6>Lokasi</h6>
                                <b-form-input placeholder="Kabupaten/Kota" class="m-t-10"></b-form-input>
                                <b-form-input placeholder="Kecamatan" class="m-t-10"></b-form-input>
                                <b-form-input placeholder="Kelurahan" class="m-t-10"></b-form-input>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <hr>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <h6>Kategori</h6>
                                <b-button variant="outline-success" class="m-r-15">Subsidi</b-button>
                                <b-button variant="outline-dark">Komersial</b-button>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <hr>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <h6>Harga</h6>
                            </b-col>

                            <b-col md="6">
                                <b-form-input placeholder="Harga Awal" class="m-t-10"></b-form-input>
                            </b-col>

                            <b-col md="6">
                                <b-form-input placeholder="Harga Akhir" class="m-t-10"></b-form-input>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <hr>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <h6>Sertifikat</h6>
                            </b-col>

                            <b-col md="12">
                                <b-form-checkbox>Sertifikat Hak Milik (SHM)</b-form-checkbox>
                                <b-form-checkbox>Hak Guna Bangunan (HGB)</b-form-checkbox>
                                <b-form-checkbox>Lainnya</b-form-checkbox>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>

                <b-col md="9">
                    <b-row class="m-b-15">
                        <b-col md="8">
                            <b-form-input placeholder="Cari Perumahan, Pengembang, dkk" class="m-t-10"></b-form-input>
                        </b-col>

                        <b-col md="4">
                           <b-form-select class="m-t-10">
                               <b-form-select-option></b-form-select-option>
                           </b-form-select>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="4" class="m-t-15 m-b-15">
                            <div class="box">
                            <div class="up"><img src="https://via.placeholder.com/300x200" alt=""></div>
                            <div class="down m-t-15">
                                <h5><strong>Perumahan Indah</strong></h5>
                                <h6>PT. Pengembang Internasional</h6>

                                <p class="m-t-15">Pedalangan, Banyumanik, Semarang</p>

                                <h6 class="harga m-t-5 m-b-5"><strong>Subsidi</strong> 4 Unit Rp 200 - 400 Juta</h6>
                                <h6 class="harga m-t-5 m-b-5"><strong>Komersil</strong> 14 Unit Rp 800 - 1 M</h6>
                            </div>
                            
                            </div>
                        </b-col>

                        <b-col md="4" class="m-t-15 m-b-15">
                            <div class="box">
                            <div class="up"><img src="https://via.placeholder.com/300x200" alt=""></div>
                            <div class="down m-t-15">
                                <h5><strong>Perumahan Indah</strong></h5>
                                <h6>PT. Pengembang Internasional</h6>

                                <p class="m-t-15">Pedalangan, Banyumanik, Semarang</p>

                                <h6 class="harga m-t-5 m-b-5"><strong>Subsidi</strong> 4 Unit Rp 200 - 400 Juta</h6>
                                <h6 class="harga m-t-5 m-b-5"><strong>Komersil</strong> 14 Unit Rp 800 - 1 M</h6>
                            </div>
                            
                            </div>
                        </b-col>

                        <b-col md="4" class="m-t-15 m-b-15">
                            <div class="box">
                            <div class="up"><img src="https://via.placeholder.com/300x200" alt=""></div>
                            <div class="down m-t-15">
                                <h5><strong>Perumahan Indah</strong></h5>
                                <h6>PT. Pengembang Internasional</h6>

                                <p class="m-t-15">Pedalangan, Banyumanik, Semarang</p>

                                <h6 class="harga m-t-5 m-b-5"><strong>Subsidi</strong> 4 Unit Rp 200 - 400 Juta</h6>
                                <h6 class="harga m-t-5 m-b-5"><strong>Komersil</strong> 14 Unit Rp 800 - 1 M</h6>
                            </div>
                            
                            </div>
                        </b-col>

                        <b-col md="4" class="m-t-15 m-b-15">
                            <div class="box">
                            <div class="up"><img src="https://via.placeholder.com/300x200" alt=""></div>
                            <div class="down m-t-15">
                                <h5><strong>Perumahan Indah</strong></h5>
                                <h6>PT. Pengembang Internasional</h6>

                                <p class="m-t-15">Pedalangan, Banyumanik, Semarang</p>

                                <h6 class="harga m-t-5 m-b-5"><strong>Subsidi</strong> 4 Unit Rp 200 - 400 Juta</h6>
                                <h6 class="harga m-t-5 m-b-5"><strong>Komersil</strong> 14 Unit Rp 800 - 1 M</h6>
                            </div>
                            
                            </div>
                        </b-col>

                        <b-col md="4" class="m-t-15 m-b-15">
                            <div class="box">
                            <div class="up"><img src="https://via.placeholder.com/300x200" alt=""></div>
                            <div class="down m-t-15">
                                <h5><strong>Perumahan Indah</strong></h5>
                                <h6>PT. Pengembang Internasional</h6>

                                <p class="m-t-15">Pedalangan, Banyumanik, Semarang</p>

                                <h6 class="harga m-t-5 m-b-5"><strong>Subsidi</strong> 4 Unit Rp 200 - 400 Juta</h6>
                                <h6 class="harga m-t-5 m-b-5"><strong>Komersil</strong> 14 Unit Rp 800 - 1 M</h6>
                            </div>
                            
                            </div>
                        </b-col>

                        <b-col md="4" class="m-t-15 m-b-15">
                            <div class="box">
                            <div class="up"><img src="https://via.placeholder.com/300x200" alt=""></div>
                            <div class="down m-t-15">
                                <h5><strong>Perumahan Indah</strong></h5>
                                <h6>PT. Pengembang Internasional</h6>

                                <p class="m-t-15">Pedalangan, Banyumanik, Semarang</p>

                                <h6 class="harga m-t-5 m-b-5"><strong>Subsidi</strong> 4 Unit Rp 200 - 400 Juta</h6>
                                <h6 class="harga m-t-5 m-b-5"><strong>Komersil</strong> 14 Unit Rp 800 - 1 M</h6>
                            </div>
                            
                            </div>
                        </b-col>

                        <b-col md="4" class="m-t-15 m-b-15">
                            <div class="box">
                            <div class="up"><img src="https://via.placeholder.com/300x200" alt=""></div>
                            <div class="down m-t-15">
                                <h5><strong>Perumahan Indah</strong></h5>
                                <h6>PT. Pengembang Internasional</h6>

                                <p class="m-t-15">Pedalangan, Banyumanik, Semarang</p>

                                <h6 class="harga m-t-5 m-b-5"><strong>Subsidi</strong> 4 Unit Rp 200 - 400 Juta</h6>
                                <h6 class="harga m-t-5 m-b-5"><strong>Komersil</strong> 14 Unit Rp 800 - 1 M</h6>
                            </div>
                            
                            </div>
                        </b-col>

                        <b-col md="4" class="m-t-15 m-b-15">
                            <div class="box">
                            <div class="up"><img src="https://via.placeholder.com/300x200" alt=""></div>
                            <div class="down m-t-15">
                                <h5><strong>Perumahan Indah</strong></h5>
                                <h6>PT. Pengembang Internasional</h6>

                                <p class="m-t-15">Pedalangan, Banyumanik, Semarang</p>

                                <h6 class="harga m-t-5 m-b-5"><strong>Subsidi</strong> 4 Unit Rp 200 - 400 Juta</h6>
                                <h6 class="harga m-t-5 m-b-5"><strong>Komersil</strong> 14 Unit Rp 800 - 1 M</h6>
                            </div>
                            
                            </div>
                        </b-col>

                        <b-col md="4" class="m-t-15 m-b-15">
                            <div class="box">
                            <div class="up"><img src="https://via.placeholder.com/300x200" alt=""></div>
                            <div class="down m-t-15">
                                <h5><strong>Perumahan Indah</strong></h5>
                                <h6>PT. Pengembang Internasional</h6>

                                <p class="m-t-15">Pedalangan, Banyumanik, Semarang</p>

                                <h6 class="harga m-t-5 m-b-5"><strong>Subsidi</strong> 4 Unit Rp 200 - 400 Juta</h6>
                                <h6 class="harga m-t-5 m-b-5"><strong>Komersil</strong> 14 Unit Rp 800 - 1 M</h6>
                            </div>
                            
                            </div>
                        </b-col>
                    </b-row>
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
  name: "DataPerumahan",
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
  background-color: aqua;
}

header{
  background-color: #4C87F2;
}

header .left{
  width: 100%;
  height: 50px;
  /* background-color: aqua; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

header .left h5{
  color: #fff;
}

header .right{
  width: 100%;
  height: 50px;
  /* background-color: aqua; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

header .right h6{
  font-size: 14px;
  color: #fff;
}

.section-one{
  padding: 30px 0;
}

.section-one .box-search{
    background-color: whitesmoke;
    border-radius: 20px;
    padding: 30px 15px;
}


.section-one .box{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.section-one .box img{
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}


.section-one .box{
  border: 1px solid #e0e0e0;
  border-radius: 20px;
}

.section-one .box .down{
  padding: 15px;
}

.section-one .box .down .harga{
  font-size: 12px;
}

</style>
