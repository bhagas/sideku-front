<template>
    <div id="ScreeningPasien">
        <myheader></myheader>
        <b-container>
            <b-row>
                <b-col md="12" style="margin-top:60px;margin-bottom:60px">
                    <div class="box">
                        <b-row>
                            <b-col md="12">
                                <h3 class="text-center m-t-0 m-b-0"><strong>SCREENING PASIEN</strong></h3>
                            </b-col>
                        </b-row>
 
                        <b-row class="m-t-15">
                            <b-col md="12">
                                <b-breadcrumb>
                                    <b-breadcrumb-item href="/dashboard">
                                    <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                                    Dashboard
                                    </b-breadcrumb-item>
                                    
                                    <b-breadcrumb-item><router-link :to="'/screening'">Data Pasien</router-link></b-breadcrumb-item>
                                    
                                    <b-breadcrumb-item active>Screening Pasien</b-breadcrumb-item>
                                </b-breadcrumb>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <div class="accordion" role="tablist">
                                    <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button block v-b-toggle.accordion-1 variant="warning" style="text-align:left;text-transform:uppercase;font-weight:bold">Riwayat Penyakit - <span>Lama sakit (hari)</span></b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-form class="bv-example-row">
                                              
                                                <b-form-group :label="item.namaPenyakit" v-for="(item) in penyakit" :key="item.id">
                                                    
                                                    <b-form-input  v-model="item.lamaSakit"

                                                    ></b-form-input>
                                                </b-form-group>

                                               
                                            </b-form>
                                        </b-card-body>
                                    </b-collapse>
                                    </b-card>

                                    <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button block v-b-toggle.accordion-2 variant="warning" style="text-align:left;text-transform:uppercase;font-weight:bold">Scan Wajah</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <h6><i>Pastikan gambar wajah anda tegak lurus</i></h6>
       
                                                 <input placeholder="ambil gambar wajah" id="file" ref="file" type="file" accept="image/*"  capture v-on:change="handleFileUpload" >
                                                <b-alert show variant="success" style="margin-top:15px">
                                                    <h4 class="alert-heading" style="text-transform:uppercase;text-align:center"><strong>{{emosi}}</strong></h4>
                                                    <hr/>
                                                   <img v-if="urlPreview" :src="urlPreview" style="width:100%" />
                                                   <img v-if="urlHasil" :src="'http://sideku.org:8841/hasilprediksi/'+urlHasil" style="width:100%" />
                                                </b-alert>
                                      
                                        </b-card-body>
                                    </b-collapse>
                                    </b-card>

                                    <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button block v-b-toggle.accordion-3 variant="warning" style="text-align:left;text-transform:uppercase;font-weight:bold">Gejala Fisik</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                        
                                        <b-card-body>
                                            <h5>Apa yang sedang Anda rasakan saat ini? </h5>
                                            <h6><i>Dapat memilih lebih dari satu sesuai dengan apa yang Anda rasakan saat ini</i></h6>
                                            <hr/>
                                            
                                            <b-form class="bv-example-row">
                                                 <b-form-group :label="item.namaGejalaFisik" v-for="(item) in gejalaFisik" :key="item.id">
                                                   
                                                    <b-form-select v-model="item.status">
                                          
                                                        <b-form-select-option value="0">Tidak</b-form-select-option>
                                                        <b-form-select-option value="1">Ya</b-form-select-option>
                                                        
                                                    </b-form-select>
                                                </b-form-group>

                                               
                                            </b-form>
                                        </b-card-body>
                                    </b-collapse>
                                    </b-card>

                                    <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button block v-b-toggle.accordion-4 variant="warning" style="text-align:left;text-transform:uppercase;font-weight:bold">Gejala Psikis</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <h5>Perasaan apa yang sedang Anda rasakan saat ini? </h5>
                                            <h6><i>Dapat memilih lebih dari satu sesuai dengan apa yang Anda rasakan saat ini</i></h6>
                                            <hr/>
                                            <b-form class="bv-example-row">
                                                <b-form-group :label="item.namaGejalaPsikis" v-for="(item) in gejalaPsikis" :key="item.id">
                                                   
                                                    <b-form-select v-model="item.status">
                                          
                                                        <b-form-select-option value="0">Tidak</b-form-select-option>
                                                        <b-form-select-option value="1">Ya</b-form-select-option>
                                                        
                                                    </b-form-select>
                                                </b-form-group>

                                               
                                            </b-form>
                                        </b-card-body>
                                    </b-collapse>
                                    </b-card>

                                    <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button block v-b-toggle.accordion-5 variant="warning" style="text-align:left;text-transform:uppercase;font-weight:bold">Gejala Perilaku Buruk</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <h5>Perilaku yang  berkaitan dengan gangguan emosi dibawah ini</h5>
                                            <h6><i>Boleh memilih lebih dari satu sesuai dengan yang pernah dilakukan</i></h6>
                                            <hr/>
                                            <b-form class="bv-example-row">
                                               <b-form-group :label="item.namaGejalaPerilaku" v-for="(item) in gejapaPerilakuBuruk" :key="item.id">
                                                   
                                                    <b-form-select v-model="item.status">
                                          
                                                        <b-form-select-option value="0">Tidak</b-form-select-option>
                                                        <b-form-select-option value="1">Ya</b-form-select-option>
                                                        
                                                    </b-form-select>
                                                </b-form-group>

                                                
                                            </b-form>
                                        </b-card-body>
                                    </b-collapse>
                                    </b-card>

                                    <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button block v-b-toggle.accordion-6 variant="warning" style="text-align:left;text-transform:uppercase;font-weight:bold">Kuisioner Regulasi Emosi</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-form class="bv-example-row">
                                                <b-form-group :label="item.isiPernyataan" v-for="(item) in pernyataan" :key="item.id">
                                                   
                                                    <b-form-select v-model="item.status">
                                          
                                                    <b-form-select-option value="1">Tidak Pernah</b-form-select-option>
                                                        <b-form-select-option value="2">Jarang</b-form-select-option>
                                                        <b-form-select-option value="3">Sering</b-form-select-option>
                                                        <b-form-select-option value="4">Selalu</b-form-select-option>
                                                        
                                                    </b-form-select>
                                                </b-form-group>

                                                
                                            </b-form>

                                            <b-alert show variant="success" style="margin-top:15px;margin-bottom:0;">
                                                    <h4 class="alert-heading">Skor Kuisioner Regulasi Emosi : {{nilaiPernyataan}}</h4>
                                                
                                                </b-alert>
                                        </b-card-body>
                                    </b-collapse>
                                    </b-card>
                                </div>
                                   
                                  
                                 <b-button variant="primary" class="m-t-15" v-on:click="submitData">Simpan </b-button>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import myheader from "../../components/header"

import axios from "axios"
export default {
    name:"ScreeningPasien",
    components:{
        myheader,
     
    },

    data(){
        
        return{
            selected: null,
            pasien: {},
            penyakit: [],
            gejalaFisik: [],
            gejalaPsikis: [],
            gejapaPerilakuBuruk: [],
            pernyataan: [],
            file: '',
            urlPreview: null,
            urlHasil: null,
            emosi:'',
            nilaiPernyataan: 0
        }
    },
    watch:{
        //watching object dalam array pernyataan
         pernyataan: {
            handler: function(newValue) {
                    this.nilaiPernyataan = 0;
                  newValue.forEach((element) => {
                          this.nilaiPernyataan+= parseInt(element.status)
                      })
            },
            deep: true
        }
    },
    mounted() {
           axios.get('http://sideku.org:8801/pasien/'+this.$route.params.idPasien,{
           headers: {
                  'accesstoken': localStorage.getItem('token')
              }
        }).then(data=>{
            //    console.log(data.data.respon[0])
               this.pasien = data.data.respon[0]
             
        })
        //load master
        axios.get('http://sideku.org:8801/penyakit/history/'+this.$route.params.idPasien,{
           headers: {
                  'accesstoken': localStorage.getItem('token')
              }
        }).then(data=>{
                
               this.penyakit = [];
                data.data.respon.forEach((element) => {
                    let ob = {
                        PenyakitId : element.id,
                        pasienId : this.$route.params.idPasien,
                        namaPenyakit: element.namaPenyakit
                    }
                    if(element.poolPenyakits.length >0){
                        ob.lamaSakit = element.poolPenyakits[0].lamaSakit
                    }else{
                        ob.lamaSakit = 0;
                    }
                     this.penyakit.push(ob)
                });
             
             
        })
         axios.get('http://sideku.org:8801/gejalafisik/history/'+this.$route.params.idPasien,{
           headers: {
                  'accesstoken': localStorage.getItem('token')
              }
        }).then(data=>{
            this.gejalaFisik = []
               data.data.respon.forEach((element) => {
                    let ob = {
                        GejalaFisikId : element.id,
                        pasienId : this.$route.params.idPasien,
                        namaGejalaFisik: element.namaGejalaFisik
                    }
                    if(element.PoolGejalaFisiks.length >0){
                        ob.status = element.PoolGejalaFisiks[0].status
                    }else{
                        ob.status = 0;
                    }
                     this.gejalaFisik.push(ob)
                });
              
             
        })

          axios.get('http://sideku.org:8801/gejalapsikis/history/'+this.$route.params.idPasien,{
           headers: {
                  'accesstoken': localStorage.getItem('token')
              }
        }).then(data=>{
                  this.gejalaPsikis = []
               data.data.respon.forEach((element) => {
                    let ob = {
                        GejalaPsikiId : element.id,
                        pasienId : this.$route.params.idPasien,
                        namaGejalaPsikis: element.namaGejalaPsikis
                    }
                    if(element.PoolGejalaPsikis.length >0){
                        ob.status = element.PoolGejalaPsikis[0].status
                    }else{
                        ob.status = 0;
                    }
                     this.gejalaPsikis.push(ob)
                });
           
             
        })
        axios.get('http://sideku.org:8801/gejalaperilakuburuk/history/'+this.$route.params.idPasien,{
           headers: {
                  'accesstoken': localStorage.getItem('token')
              }
        }).then(data=>{
                   this.gejapaPerilakuBuruk = []
               data.data.respon.forEach((element) => {
                    let ob = {
                        GejalaPerilakuBurukId : element.id,
                        pasienId : this.$route.params.idPasien,
                        namaGejalaPerilaku: element.namaGejalaPerilaku
                    }
                    if(element.PoolGejalaPerilakus.length >0){
                        ob.status = element.PoolGejalaPerilakus[0].status
                    }else{
                        ob.status = 0;
                    }
                     this.gejapaPerilakuBuruk.push(ob)
                });
          
             
        })
         axios.get('http://sideku.org:8801/pernyataan/history/'+this.$route.params.idPasien,{
           headers: {
                  'accesstoken': localStorage.getItem('token')
              }
        }).then(data=>{
               console.log(data.data.respon)
                 this.pernyataan = []
               data.data.respon.forEach((element) => {
                    let ob = {
                        pernyataanId : element.id,
                        pasienId : this.$route.params.idPasien,
                        isiPernyataan: element.isiPernyataan
                    }
                    if(element.poolPernyataans.length >0){
                        ob.status = element.poolPernyataans[0].status
                    }else{
                        ob.status = 1;
                    }
                     this.pernyataan.push(ob)
                });
            
             
        })
           axios.get('http://sideku.org:8801/poolfotowajah/pasien/'+this.$route.params.idPasien,{
           headers: {
                  'accesstoken': localStorage.getItem('token')
              }
        }).then(data=>{
            // console.log(data.data.respon)
            if(data.data.respon.length>0){
                this.emosi = data.data.respon[0].emosi
                this.urlHasil = data.data.respon[0].namaFile
            }
             
        })
    },
    methods:{
       
      loading(){
           let vm = this;
            vm.$swal({
            title: 'Mohon Tunggu...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            onOpen: () => {
            vm.$swal.showLoading();
            }
        })
      },
      submitFiles(){
          let vm = this;
          let formData = new FormData();
              this.loading();
          formData.append('foto', this.file);
            axios.post( 'http://sideku.org:8841/proses_gambar',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then(function(ress){
                // console.log(ress);
                vm.emosi = ress.data.emosi[0]
                vm.urlHasil = ress.data.nama_file
                 vm.$swal.close()
                })
                .catch(function(errr){
                console.log(errr);
                vm.$swal.close()
                });
            },
                handleFileUpload(e){
            //  console.log(e)
            
             this.file = this.$refs.file.files[0];
              console.log(this.$refs.file.files)
              let fileEvent = e.target.files[0];
              this.urlPreview = URL.createObjectURL(fileEvent);
              this.submitFiles()
      },
               submitData(){
                 let vm = this;
                     this.loading();
                 axios.post( 'http://sideku.org:8801/pasien/screening', 
                        {
                            pasienId: this.$route.params.idPasien,
                            namaFile: vm.urlHasil,
                            emosi: vm.emosi,
                            poolPenyakit : vm.penyakit,
                            poolGejalaFisik: vm.gejalaFisik,
                            poolGejalaPsikis: vm.gejalaPsikis,
                            poolGejalaPerilakuBuruk: vm.gejapaPerilakuBuruk,
                            poolPernyataan: vm.pernyataan
                        },
                        {
                            headers: {
                                'accesstoken': localStorage.getItem('token')
                            }
                        }
                        ).then(function(ress){
                        console.log(ress);
                          vm.$swal.close()
                      vm.$swal('Berhasil', ':)', 'success');
                        })
                        .catch(function(errr){
                              vm.$swal('Gagal', errr, 'error');
                              vm.$swal.close()
                        // console.log(errr);
                        });
         
            }
      
    }
    
}
</script>
<style scoped>

</style>