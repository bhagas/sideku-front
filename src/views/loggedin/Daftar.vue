<template>
    <div id="screening">
        <myheader></myheader>
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