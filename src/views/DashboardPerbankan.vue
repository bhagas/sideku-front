<template>
  <div id="dashboard_perbankan" >
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
                    <h2 class="m-t-0 m-b-0 text-center"><strong>Dashboard Perbankan</strong></h2>
                </b-col>
            </b-row>
            <b-row class="m-t-30">
                    <b-table-simple bordered>
                        <b-thead>
                            <b-tr>
                                <b-th>No.</b-th>
                                <b-th>Nama Pemohon</b-th>
                                <b-th>Perumahan</b-th>
                                <b-th>Tipe Rumah</b-th>
                                <b-th style="width:250px">Option</b-th>
                            </b-tr>
                        </b-thead>

                        <b-tbody>
                            <b-tr>
                                <b-td>1.</b-td>
                                <b-td>Danang SR</b-td>
                                <b-td>Jalan Raya Pasar Minggu KM. 18 Jakarta Selatan 12510 Indonesia</b-td>
                                <b-td>36</b-td>
                                <b-td>
                                    <center>
                                    <b-button variant="success" size="sm" class="m-r-15">Verifikasi</b-button>
                                    <b-button variant="danger" size="sm">Batalkan</b-button>
                                    </center>
                                </b-td>
                            </b-tr>

                            <b-tr>
                                <b-td>2.</b-td>
                                <b-td>Wijaya Bakti</b-td>
                                <b-td>JL. D.I. Panjaitan Kav. 9-10, Jakarta 13340</b-td>
                                <b-td>50</b-td>
                                <b-td>
                                    <center>
                                    <b-button variant="success" size="sm" class="m-r-15">Verifikasi</b-button>
                                    <b-button variant="danger" size="sm">Batalkan</b-button>
                                    </center>
                                </b-td>
                            </b-tr>

                            <b-tr>
                                <b-td>3.</b-td>
                                <b-td>Agung Sedayu</b-td>
                                <b-td>ASG Tower, Jl. Pantai Indah Kapuk, Boulevard Kamal Muara Penjaringan, Jakarta Utara 14470</b-td>
                                <b-td>45</b-td>                                
                                <b-td>
                                    <center>
                                    <b-button variant="success" size="sm" class="m-r-15">Verifikasi</b-button>
                                    <b-button variant="danger" size="sm">Batalkan</b-button>
                                    </center>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
            </b-row>
        </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "DashboardPerbankan",
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
    /* background-color: red; */
    position: relative;
    border-radius: 100%;

}

.section-one .box img{
    border-radius: 100%;
}

.section-one .notif-csr{
    width: 40px;
    height: 40px;
    background-color: #4C87F2;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    right: 0;
}

.section-one .notif-csr h6{
    color: #fff;
}
</style>
