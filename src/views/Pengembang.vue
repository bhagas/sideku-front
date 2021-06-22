<template>
  <div id="pengembang" >
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
                    <h2 class="m-t-0 m-b-0 text-center"><strong>Pengembang Perumahan</strong></h2>
                </b-col>
            </b-row>

            <b-row class="m-t-30">
                <b-col md="12">
                    <b-alert show variant="primary">
                        <h4 class="alert-heading">Segera daftarkan perusahaan anda !</h4>
                        <p>Daftarkan perusahaan anda melalui menu pengembang. Anda akan mendapatkan akses khusus pengembang pada Klinik PKP, lalu isikan profil perusahaan dan rumah-rumah yang anda jual</p>
                        <hr>
                        <router-link :to="'daftar_pengembang'" >
                            <b-button variant="warning">Daftar</b-button>
                        </router-link>
                    </b-alert>
                </b-col>
            </b-row>


            <b-row class="m-t-15">
                <b-col md="12">
                    <b-table-simple bordered>
                        <b-thead>
                            <b-tr>
                                <b-th>No.</b-th>
                                <b-th>Nama</b-th>
                                <b-th>Alamat</b-th>
                                <b-th>Option</b-th>
                            </b-tr>
                        </b-thead>

                        <b-tbody>
                            <b-tr>
                                <b-td>1.</b-td>
                                <b-td>Adikarya</b-td>
                                <b-td>Jalan Raya Pasar Minggu KM. 18 Jakarta Selatan 12510 Indonesia</b-td>
                                <b-td>
                                    <center>
                                    <b-button variant="success" size="sm" class="m-r-15">Chat Via WA</b-button>
                                    <b-button variant="warning" size="sm">Detail</b-button>
                                    </center>
                                </b-td>
                            </b-tr>

                            <b-tr>
                                <b-td>2.</b-td>
                                <b-td>Wijayakarya</b-td>
                                <b-td>JL. D.I. Panjaitan Kav. 9-10, Jakarta 13340</b-td>
                                <b-td>
                                    <center>
                                    <b-button variant="success" size="sm" class="m-r-15">Chat Via WA</b-button>
                                    <b-button variant="warning" size="sm">Detail</b-button>
                                    </center>
                                </b-td>
                            </b-tr>

                            <b-tr>
                                <b-td>3.</b-td>
                                <b-td>Agung Sedayu Grup</b-td>
                                <b-td>ASG Tower, Jl. Pantai Indah Kapuk, Boulevard Kamal Muara Penjaringan, Jakarta Utara 14470</b-td>
                                <b-td>
                                    <center>
                                    <b-button variant="success" size="sm" class="m-r-15">Chat Via WA</b-button>
                                    <b-button variant="warning" size="sm">Detail</b-button>
                                    </center>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
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
  name: "Pengembang",
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
