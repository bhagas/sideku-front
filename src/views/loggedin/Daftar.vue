<template>
    <div id="screening">

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
                    <b-form-datepicker id="example-datepicker"  v-model="formm.tanggalLahir" required></b-form-datepicker>
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
    </div>
    
</template>
<script>



import axios from 'axios';
export default {
    name:"Pernyataan",
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