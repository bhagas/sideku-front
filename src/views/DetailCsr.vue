<template>
  <div id="detail_csr" >
    <header>
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="left">
              <router-link :to="'/'" style="text-decoration:none"><h5 class="m-t-0 m-b-0"><strong>Klinik PKP</strong></h5></router-link>
            </div>
          </b-col>

          <b-col md="6">
            <div class="right">
              <!-- <h6 class="m-t-0 m-b-0 m-r-15">pengguna@gmail.com</h6>
              <span style="background-color:#fff;padding:4px;border-radius:100px">
                <img src="../assets/avatar_profil.png" alt="">
              </span> -->
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>


    <section class="section-one">
        <b-container>
            <b-row>
                <b-col md="12">
                  <h2 class="m-t-0 m-b-0 text-center"><strong>Corporate Social Responsibility (CSR)</strong></h2>
                  <h5 class="m-t-10 m-b-0 text-center">Nama Perusahaan</h5>
                </b-col>
            </b-row>
            <b-row class="m-t-30">
                <b-col md="4">
                  <b-row>
                    <b-col md="12">
                      <img src="https://via.placeholder.com/360" alt="">
                    </b-col>
                  </b-row>

                  <b-row class="m-t-15">
                    <b-col md="12">
                      <h3><strong>Nama Perusahaan</strong></h3>
                      <h6>Jalan alamat perusahaan</h6>
                      <h6>(1203454665)</h6>
                      <h6>perusahaan@gmail.com</h6>
                      <h6>www.perusahaan.co.id</h6>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="8">
                  <b-row>
                    <b-col md="12">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eaque nemo culpa tempora in corporis consequatur maiores, assumenda ex. Iste error nostrum rem nisi rerum ad eius suscipit fuga modi autem at culpa ea inventore eveniet vitae nulla, reprehenderit quia ratione repellendus dolores est quisquam aspernatur. Alias incidunt officia odit quia, recusandae culpa, non odio doloribus atque, fugiat totam maiores dolorem quasi impedit numquam! Quia neque assumenda autem temporibus doloribus ab voluptates nam. Soluta iure delectus pariatur quis laborum adipisci sunt? Sed suscipit expedita amet nam cupiditate quae, omnis culpa architecto quibusdam, sequi mollitia sint? Dolorem aperiam temporibus explicabo saepe!</p>

                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eaque nemo culpa tempora in corporis consequatur maiores, assumenda ex. Iste error nostrum rem nisi rerum ad eius suscipit fuga modi autem at culpa ea inventore eveniet vitae nulla, reprehenderit quia ratione repellendus dolores est quisquam aspernatur. Alias incidunt officia odit quia, recusandae culpa, non odio doloribus atque, fugiat totam maiores dolorem quasi impedit numquam! Quia neque assumenda autem temporibus doloribus ab voluptates nam. Soluta iure delectus pariatur quis laborum adipisci sunt? Sed suscipit expedita amet nam cupiditate quae, omnis culpa architecto quibusdam, sequi mollitia sint? Dolorem aperiam temporibus explicabo saepe!</p>
                    </b-col>
                  </b-row>
                </b-col>
            </b-row>

            <b-row>
              <b-col md="4" class="m-t-15">
                <div class="box m-t-15 m-b-15">
                  <img src="https://via.placeholder.com/360x300" alt="">

                  <div class="layer">
                    <h6 class="m-t-0 m-b-0"><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus!</strong></h6>
                  </div>
                </div>
              </b-col>

              <b-col md="4" class="m-t-15">
                <div class="box m-t-15 m-b-15">
                  <img src="https://via.placeholder.com/360x300" alt="">

                  <div class="layer">
                    <h6 class="m-t-0 m-b-0"><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus!</strong></h6>
                  </div>
                </div>
              </b-col>

              <b-col md="4" class="m-t-15">
                <div class="box m-t-15 m-b-15">
                  <img src="https://via.placeholder.com/360x300" alt="">

                  <div class="layer">
                    <h6 class="m-t-0 m-b-0"><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus!</strong></h6>
                  </div>
                </div>
              </b-col>

              <b-col md="4" class="m-t-15">
                <div class="box m-t-15 m-b-15">
                  <img src="https://via.placeholder.com/360x300" alt="">

                  <div class="layer">
                    <h6 class="m-t-0 m-b-0"><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus!</strong></h6>
                  </div>
                </div>
              </b-col>

              <b-col md="4" class="m-t-15">
                <div class="box m-t-15 m-b-15">
                  <img src="https://via.placeholder.com/360x300" alt="">

                  <div class="layer">
                    <h6 class="m-t-0 m-b-0"><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus!</strong></h6>
                  </div>
                </div>
              </b-col>

              <b-col md="4" class="m-t-15">
                <div class="box m-t-15 m-b-15">
                  <img src="https://via.placeholder.com/360x300" alt="">

                  <div class="layer">
                    <h6 class="m-t-0 m-b-0"><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, possimus!</strong></h6>
                  </div>
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
  name: "DetailCsr",
 data (){
   return{
     isLogin: false,
   };
 }

};
</script>

<style scoped>

.fs-14{
    font-size: 14px !important;
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

.section-one {
    padding: 60px 0;
}

.section-one .box{
    width: 100%;
    /* height: 100px; */
    background-color: red;
    position: relative;
}

.section-one .box img{
  width: 100%;
}
.section-one .box .layer{
  width: 100%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.section-one .box .layer h6{
  color: #fff;
}
</style>
