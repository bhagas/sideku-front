<template>
    <div id="screening">
      <!-- <myheader></myheader> -->
      <b-container>
        <b-row>
          <b-col md="12" style="margin-top:60px;margin-bottom:60px">
            <div class="box">
              <b-row>
                <b-col md="12">
                  <h3 class="text-center m-t-0 m-b-0"><strong>IDENTITAS DIRI</strong></h3>
                </b-col>
              </b-row>

              <!-- <b-row class="m-t-15">
                <b-col md="12">
                  <b-breadcrumb>
                    <b-breadcrumb-item>
                      <router-link :to="'dashboard'">
                        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                          Dashboard
                      </router-link>
                    </b-breadcrumb-item>
                    <b-breadcrumb-item active>Daftar</b-breadcrumb-item>
                  </b-breadcrumb>
                </b-col>
              </b-row> -->
              <b-row class="m-t-30">
                <b-col md="12">
                  <b-form class="bv-example-row">
                    <b-form-group label="Nama">
                      <b-form-input 
                          v-model="formm.nama"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Tempat Lahir">
                      <b-form-input 
                          v-model="formm.tempatLahir"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Tanggal Lahir">
                      <!-- <b-form-datepicker id="example-datepicker"  v-model="formm.tanggalLahir" required></b-form-datepicker> -->
                      <date-picker v-model="formm.tanggalLahir" valueType="format" style="width:100%" required></date-picker>
                      
                    </b-form-group>

                    <b-form-group label="Alamat">
                      <b-form-input 
                          v-model="formm.alamat"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label="Pekerjaan">
                      <b-form-input 
                          v-model="formm.pekerjaan"
                          required
                          placeholder=""
                      ></b-form-input>
                    </b-form-group>

                    <b-button @click="tambah" variant="primary">Simpan</b-button>
                  </b-form>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
          
    </div>
    
</template>
<script>



import axios from 'axios';
// import myheader from "../../components/header"
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    name:"Pernyataan",
    components:{
        // myheader
        DatePicker
    },
    data() {
      return {
          formm:{
                nama: '',
             
                tempatLahir: '',
                tanggalLahir:'',
                alamat:'',
                pekerjaan:'',
                
          },
     
       
     
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },

    methods: {
   
      tambah(){
             let vm = this;
             let isiForm = vm.formm
       
           axios.post('http://sideku.org:8801/pasien/registerfront', isiForm)
              .then(function (response) {
                console.log(response);
                  alert('berhasil')
                 vm.$router.push({ path:"/screeningfront/"+response.data.id})
               
               
              })
              .catch(function (error) {
                console.log(error);
               
              });
      }

     
   
    }
}


</script>
<style scoped>

</style>