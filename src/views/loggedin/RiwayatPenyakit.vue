<template>
    <div id="RiwayatPenyakit">
        <myheader></myheader>
        <b-container>
            <b-row class="m-t-30">
                <b-col md="12">
                    <h3 class="text-center m-t-0 m-b-0"><strong>Master Riwayat Penyakit</strong></h3>
                </b-col>
            </b-row>
            <b-row class="m-t-30">
                <b-col md="8" offset-md="2">
                    <div class="box">
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
                                            <b-form-checkbox value="name">Name</b-form-checkbox>
                                            <b-form-checkbox value="age">Age</b-form-checkbox>
                                            <b-form-checkbox value="isActive">Active</b-form-checkbox>
                                        </b-form-checkbox-group>
                                    </b-form-group>
                                </b-alert>
                            </b-col>
                        </b-row>

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
                            class="m-t-30"
                            >
                            <template v-slot:cell(name)="row">
                                {{ row.value.first }} {{ row.value.last }}
                            </template>

                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                                Info modal
                                </b-button>
                                <b-button size="sm" @click="row.toggleDetails">
                                {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                                </b-button>
                            </template>

                            <template v-slot:row-details="row">
                                <b-card>
                                <ul>
                                    <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                                </ul>
                                </b-card>
                            </template>
                        </b-table>

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
                        <!-- Info modal -->
                        <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
                            <pre>{{ infoModal.content }}</pre>
                        </b-modal>
                    </div>
                    
                </b-col>
            </b-row>
        </b-container>

        <b-modal id="modal-1" title="Tambah Data Master Riwayat Penyakit">
            <b-form class="bv-example-row">
                <b-form-group 
                label="Riwayat Penyakit" 
                >
                  <b-form-input
                    required
                    placeholder=""
                  ></b-form-input>
                </b-form-group>
            </b-form>
        </b-modal>

        <b-modal id="modal-2" title="Tambah Data Master Riwayat Penyakit">
            <b-form class="bv-example-row">
                <b-form-group 
                label="Riwayat Penyakit" 
                >
                  <b-form-input
                    required
                    placeholder=""
                  ></b-form-input>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
    
</template>
<script>
import myheader from "../../components/header"
export default {
    name:"RiwayatPenyakit",
    components:{
        myheader
    },
    data() {
      return {
        
        items: [
          { isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' } },
          { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' } },
          {
            isActive: false,
            age: 9,
            name: { first: 'Mini', last: 'Navarro' },
            _rowVariant: 'success'
          },
          { isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' } },
          { isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' } },
          { isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' } },
          { isActive: true, age: 40, name: { first: 'Thor', last: 'Macdonald' } },
          {
            isActive: true,
            age: 87,
            name: { first: 'Larsen', last: 'Shaw' },
            _cellVariants: { age: 'danger', isActive: 'warning' }
          },
          { isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
          { isActive: false, age: 22, name: { first: 'Genevieve', last: 'Wilson' } },
          { isActive: true, age: 38, name: { first: 'John', last: 'Carney' } },
          { isActive: false, age: 29, name: { first: 'Dick', last: 'Dunlap' } }
        ],
        fields: [
          { key: 'name', label: 'Person Full name', sortable: true, sortDirection: 'desc' },
          { key: 'age', label: 'Person age', sortable: true, class: 'text-center' },
          {
            key: 'isActive',
            label: 'is Active',
            formatter: (value) => {
              return value ? 'Yes' : 'No'
            },
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true
          },
          { key: 'actions', label: 'Actions' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
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
      this.totalRows = this.items.length
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
}


</script>
<style scoped>

</style>