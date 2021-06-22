<template>
  <div id="daftar_pengembang" >
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
                <b-col md="8" offset-md="2">
                    <b-row>
                        <b-col md="12">
                            <h2 class="m-t-0 m-b-0 text-center"><strong>Daftar Pengembang</strong></h2>
                        </b-col>
                    </b-row>

                    <b-row class="m-t-30">
                        <b-col md="12">
                            <b-form>
                                <b-tabs content-class="mt-3" justified>
                                    <b-tab title="Profil Pengembang" active>
                                        <b-row>
                                            <b-col md="12">
                                                <b-form-group label="Nama Pengembang">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Alamat">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Asosiasi">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="NIB">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>
                                                


                                                <b-form-group label="Email">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="No. Telepon">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Website">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Upload Logo Pengembang">
                                                    <b-form-file></b-form-file>
                                                </b-form-group>
                                            </b-col>
                                        </b-row>
                                        
                                    </b-tab>
                                    <b-tab title="Akun Pengembang">
                                        <b-row>
                                            <b-col md="12">
                                                <b-form-group label="Username">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Password">
                                                    <b-form-input></b-form-input>
                                                </b-form-group>
                                            </b-col>
                                        </b-row>

                                        <b-row>
                                            <b-col md="12">
                                                <b-button type="submit" variant="primary">Daftar</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-tab>
                                </b-tabs>

                                
                            </b-form>
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
  name: "DaftarPengembang",
 data (){
   return{
     isLogin: false,
   };
 }

};
</script>

<style scoped>
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
</style>
