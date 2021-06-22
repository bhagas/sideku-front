<template>
  <div id="tipe_perumahan_pengembang" >
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
                <h2 class="m-t-0 m-b-0 text-center"><strong>Tipe Perumahan</strong></h2>
                <h5 class="m-t-5 m-b-0 text-center">"Nama Perumahannya"</h5>
            </b-col>
          </b-row>

          <b-row>
              <b-col md="4" offset-md="4">
                  <hr>
                  <div class="box-submenu">
                    <router-link :to="'/dashboard_pengembang'" style="text-decoration:none"><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link>
                    <h6 class="m-t-0 m-b-0">|</h6>
                    <h6 class="m-t-0 m-b-0"><strong>Tipe Perumahan</strong></h6>
                  </div>
                  <hr>
              </b-col>
          </b-row>
          <b-row>
            <b-col md="12" class="m-t-30">
                <b-form>
                <b-row>
                    <b-col md="4">
                        <h5 class="m-b-30"><strong>Umum</strong></h5>
                        <b-form-group label="Jenis">
                            <b-form-select v-model="selected" :options="jenis"></b-form-select>
                        </b-form-group>

                        <b-form-group label="Tipe">
                            <b-form-input></b-form-input>
                        </b-form-group>
                        
                        <b-form-group label="Harga">
                            <b-form-input></b-form-input>
                        </b-form-group>

                        <b-form-group label="Luas Bangunan (m2)">
                            <b-form-input></b-form-input>
                        </b-form-group>

                        <b-form-group label="Luas Lahan (m2)">
                            <b-form-input></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="4">
                        <h5 class="m-b-30"><strong>Spesifikasi Teknis</strong></h5>
                        <b-form-group label="Atap">
                            <b-form-input></b-form-input>
                        </b-form-group>


                        <b-form-group label="Dinding">
                            <b-form-input></b-form-input>
                        </b-form-group>

                        <b-form-group label="Lantai & Pondasi">
                            <b-form-input></b-form-input>
                        </b-form-group>

                        <b-form-group label="Jumlah Kamar Mandi">
                            <b-form-input></b-form-input>
                        </b-form-group>

                        <b-form-group label="Jumlah Kamar Tidur">
                            <b-form-input></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col md="4">
                          <h5 class="m-b-30"><strong>Dokumentasi</strong></h5>

                        <b-form-group label="Upload Foto Rumah">
                            <b-form-file></b-form-file>
                        </b-form-group>

                        <b-form-group label="Upload Foto Rumah">
                            <b-form-file></b-form-file>
                        </b-form-group>

                        <b-form-group label="Upload Foto Rumah">
                            <b-form-file></b-form-file>
                        </b-form-group>

                        <b-form-group label="Upload Foto Denah">
                            <b-form-file></b-form-file>
                        </b-form-group>

                        <b-form-group label="Video Rumah (Link video dari youtube)">
                            <b-form-input></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col md="12">
                        <b-button variant="primary">Simpan</b-button>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col md="12">
                        <hr>
                    </b-col>
                </b-row>


                <b-row>
                    <b-col md="12">
                        <b-table-simple bordered>
                            <b-thead>
                                <b-tr>
                                    <b-th>No.</b-th>
                                    <b-th>Jenis</b-th>
                                    <b-th>Tipe</b-th>
                                    <b-th>Harga</b-th>
                                    <b-th>Luas Bangunan (m2)</b-th>
                                    <b-th>Luas Lahan (m2)</b-th>
                                    <b-th>Option</b-th>
                                </b-tr>
                            </b-thead>

                            <b-tbody>
                                <b-tr>
                                    <b-td>1.</b-td>
                                    <b-td>-</b-td>
                                    <b-td>-</b-td>
                                    <b-td>-</b-td>
                                    <b-td>-</b-td>
                                    <b-td>-</b-td>
                                    <b-td>
                                        <center>

                                        <b-button variant="danger" size="sm">Hapus</b-button>
                                        </center>
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    </b-col>
                </b-row>
                </b-form>
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
  name: "TipePerumahanPengembang",
 data (){
   return{
     isLogin: false,

    selected: null,
    jenis: [
          { value: null, text: '-- Pilih --' },
          { value: 'subsidi', text: 'Subsidi' },
          { value: 'komersial', text: 'Komersial' }
    ]
   }

   
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

.box-submenu{
    display: flex;
    justify-content: space-around;
    /* background-color: red; */
}

.section-one {
    padding: 60px 0;
}

/* .section-one .box{
    width: 100%;
    padding: 30px;
    background-color: whitesmoke;
    border-radius: 10px;
} */

.section-one .menu{
  width: 100%;
  height: 250px;
  background-color: #4C87F2;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section-one .menu h4{
    color:#fff;
}
</style>
