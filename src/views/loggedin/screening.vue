<template>
    <div id="screening">
        <myheader></myheader>
        <b-container>
            <b-row>
                <b-col md="12" style="margin-top:60px;margin-bottom:60px">
                    <div class="box">
                        <b-row>
                            <b-col md="12">
                                <h3 class="text-center m-t-0 m-b-0"><strong>DATA PASIEN</strong></h3>
                            </b-col>
                        </b-row>

                        <b-row class="m-t-15">
                            <b-col md="12">
                                <b-breadcrumb>
                                    <b-breadcrumb-item>
                                        <router-link :to="'dashboard'">
                                            <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                                            Dashboard
                                        </router-link>
                                    </b-breadcrumb-item>
                                    
                                    <b-breadcrumb-item active>Data Pasien</b-breadcrumb-item>
                                </b-breadcrumb>
                            </b-col>
                        </b-row>

                        <b-row>
                           <b-col md="12">
                                <b-button v-b-modal.modal-1 variant="primary">Tambah Data</b-button>
                           </b-col>
                        </b-row>

                        <b-row class="m-t-30">
                            <b-col lg="12">
                                <b-alert show variant="primary" class="m-b-0">
                                    <b-form-group
                                        label="Urutkan"
                                        label-for="sortBySelect"
                                        class="m-t-15"
                                        style="font-weight:bold;"

                                        >
                                        <b-input-group>
                                            <b-form-select v-model="sortBy" id="sortBySelect" :options="sortOptions" class="w-75">
                                            <template v-slot:first>
                                                <option value="">-- Nama Kolom --</option>
                                            </template>
                                            </b-form-select>
                                            <b-form-select v-model="sortDesc" :disabled="!sortBy" class="w-25">
                                            <option :value="false">Kecil-Besar</option>
                                            <option :value="true">Besar-Kecil</option>
                                            </b-form-select>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group
                                        label="Pencarian"
                                        label-for="filterInput"
                                        style="font-weight:bold;"
                                        class="m-t-15"
                                    >
                                        <b-input-group>
                                            <b-form-input
                                            v-model="filter"
                                            type="search"
                                            id="filterInput"
                                            placeholder="Type to Search"
                                            ></b-form-input>
                                            <b-input-group-append>
                                            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                                            </b-input-group-append>
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group
                                        label="Pencarian Berdasarkan"
                                        description="Hilangkan semua centang, jika ingin semua kolom"
                                        style="font-weight:bold;">
                                        <b-form-checkbox-group v-model="filterOn">
                                            <b-form-checkbox value="nama">Nama</b-form-checkbox>
                                            <b-form-checkbox value="alamat">Alamat</b-form-checkbox>
                                            <!-- <b-form-checkbox value="pekerjaan">Pekerjaan</b-form-checkbox> -->
                                         
                                        </b-form-checkbox-group>
                                    </b-form-group>
                                </b-alert>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col lg="12">
                                <b-table
                                    show-empty
                                    bordered
                                    hover
                                    :items="items"
                                    :fields="fields"
                                    :current-page="currentPage"
                                    :per-page="perPage"
                                    :filter="filter"
                                    :filter-included-fields="filterOn"
                                    :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc"
                                    :sort-direction="sortDirection"
                                    @filtered="onFiltered"
                                    class="m-t-15"
                                    responsive
                                    >
                                    <!-- <template v-slot:cell(name)="row">
                                        {{ row.value.first }} {{ row.value.last }}
                                    </template> -->

                                    <template v-slot:cell(actions)="row">

                                        <router-link :to="'/screeningpasien/'+row.item.id">
                                        <b-button size="sm" variant="success" class="mr-1">Screening</b-button>
                                        </router-link>
                                        <b-button size="sm" variant="warning" @click="rubah(row.item, row.index, $event.target)" class="mr-1">Edit</b-button>
                                        <b-button size="sm" variant="danger" @click="hapus(row.item.id)" class="mr-1">Hapus</b-button>
                                    </template>

                                
                                </b-table>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col sm="5" md="6" class="my-1">
                                <b-form-group
                                label="Per page"
                                label-cols-sm="6"
                                label-cols-md="4"
                                label-cols-lg="3"
                                label-align-sm="right"
                                label-size="sm"
                                label-for="perPageSelect"
                                class="mb-0"
                                >
                                <b-form-select
                                    v-model="perPage"
                                    id="perPageSelect"
                                    size="sm"
                                    :options="pageOptions"
                                ></b-form-select>
                                </b-form-group>
                            </b-col>

                            <b-col sm="7" md="6" class="my-1">
                                <b-pagination
                                v-model="currentPage"
                                :total-rows="totalRows"
                                :per-page="perPage"
                                align="fill"
                                size="sm"
                                class="my-0"
                                ></b-pagination>
                            </b-col>
                        </b-row>


                    </div>
                </b-col>
            </b-row>
        </b-container>

        <!-- modal insert -->
        <b-modal id="modal-1" centered hide-footer title="TAMBAH DATA PASIEN">
            <b-form class="bv-example-row">
                <b-form-group label="Nama">
                    <b-form-input 
                        v-model="formm.nama"
                        required
                        placeholder=""
                    ></b-form-input>
                </b-form-group>

                <b-form-group label="Umur">
                    <b-form-input 
                        v-model="formm.umur"
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
        </b-modal>

        <!-- Modal Edit -->
        <b-modal :id="infoModal.id" centered :title="infoModal.title" ok-only hide-footer @hide="resetInfoModal">
            <b-form class="bv-example-row">
                <b-form-group label="Nama">
                    <b-form-input 
                        v-model="formm.nama"
                        required
                        placeholder=""
                    ></b-form-input>
                </b-form-group>

                <b-form-group label="Umur">
                    <b-form-input 
                        v-model="formm.umur"
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
                                     
                <b-button @click="edit" variant="primary">Simpan</b-button>
            </b-form>
        </b-modal>      
       
    </div>
    
</template>
<script>

import myheader from "../../components/header"

import axios from 'axios';
export default {
    name:"Pernyataan",
    components:{
        myheader
    },
    data() {
      return {
          formm:{
                nama: '',
                umur: '',
                tempatLahir: '',
                tanggalLahir:'',
                alamat:'',
                pekerjaan:'',
                
          },
     
        idChoose: '',
        items: [
         
        ],
        fields: [
            { key: 'nama', label: 'Nama', sortable: true, sortDirection: 'desc' },
            { key: 'alamat', label: 'Alamat', sortable: true, sortDirection: 'desc' },
            { key: 'tempatLahir', label: 'Tempat Lahir', sortable: true, sortDirection: 'desc' },
            { key: 'tanggalLahir', label: 'Tanggal Lahir', sortable: true, sortDirection: 'desc' },
          // { key: 'age', label: 'Person age', sortable: true, class: 'text-center' },
          // {
          //   key: 'isActive',
          //   label: 'is Active',
          //   formatter: (value) => {
          //     return value ? 'Yes' : 'No'
          //   },
          //   sortable: true,
          //   sortByFormatted: true,
          //   filterByFormatted: true
          // },
          { key: 'actions', label: 'Actions' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, 50, 100],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
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
    mounted() {
      // Set the initial number of items
    
        axios.get('http://sideku.org:8801/pasien/all',{
           headers: {
                  'accesstoken': localStorage.getItem('token')
              }
        }).then(data=>{
               console.log(data)
                this.items = data.data.respon
                 this.totalRows = this.items.length
              })
    },
    methods: {
      rubah(item, index, button) {
       
        this.infoModal.title = `Edit Data Pasien`
        // this.infoModal.content = item
        // console.log(item)
        // console.log( item.namaPenyakit)
        //keluarkan model sesuai id
        this.idChoose = item.id
        this.formm = item
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.resetForm();
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
        resetForm(){
            this.formm = {
                 nama: '',
                pekerjaan:'',
                alamat:'',
          }
        },
      tambah(){
             let vm = this;
             let isiForm = vm.formm
       
           axios.post('http://sideku.org:8801/pasien/register', isiForm,{
                  headers: {
                          'accesstoken': localStorage.getItem('token')
                      }
                })
              .then(function (response) {
                console.log(response);
                  alert('berhasil')
                  vm.resetForm();
                vm.items.unshift(response.data)
                 vm.$root.$emit('bv::hide::modal', 'modal-1')
               
              })
              .catch(function (error) {
                console.log(error);
               
              });
      },

        edit(){
            let vm = this;
            let dataForm = vm.formm
           axios.patch('http://sideku.org:8801/pasien/'+this.idChoose,dataForm,{
              headers: {
                      'accesstoken': localStorage.getItem('token')
                  }
            })
              .then(function (response) {
                console.log(response);
                //  console.log(vm.items)
                alert('berhasil')
                let idx = vm.items.findIndex(o => o.id === vm.idChoose );
                // console.log(idx)
                //item diganti form sekarang
                vm.items[idx] = vm.form
                vm.resetForm();
                // vm.$root.$emit('bv::hide::modal', 'modal-1')
                vm.$root.$emit('bv::hide::modal', vm.infoModal.id)
                // vm.$refs['modal-1'].hide()
               
              })
              .catch(function (error) {
                console.log(error);
               
              });
      },
           hapus(id){
                let vm = this;
           axios.delete('http://sideku.org:8801/pasien/delete/'+id,{
              headers: {
                      'accesstoken': localStorage.getItem('token')
                  }
            })
              .then(function (response) {
                console.log(response);
                alert('berhasil')
                let idx = vm.items.findIndex(o => o.id === id );
                vm.items.splice(idx, 1);
                // this.$root.$emit('bv::show::modal')
               
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