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
                                    <b-breadcrumb-item href="#home">
                                    <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                                    Dashboard
                                    </b-breadcrumb-item>
                                    
                                    <b-breadcrumb-item><router-link :to="'screening'">Data Pasien</router-link></b-breadcrumb-item>
                                    
                                    <b-breadcrumb-item active>Screening Pasien</b-breadcrumb-item>
                                </b-breadcrumb>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <div class="accordion" role="tablist">
                                    <b-card no-body class="mb-1">
                                    <b-card-header header-tag="header" class="p-1" role="tab">
                                        <b-button block v-b-toggle.accordion-1 variant="warning" style="text-align:left;text-transform:uppercase;font-weight:bold">Riwayat Penyakit</b-button>
                                    </b-card-header>
                                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                        <b-card-body>
                                            <b-form class="bv-example-row">
                                                <b-form-group label="DM">
                                                    <b-form-input

                                                    ></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Hipertensi">
                                                    <b-form-input
                                                    
                                                    ></b-form-input>
                                                </b-form-group>

                                                <b-form-group label="Kolesterol">
                                                    <b-form-input
                                                    
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
                                            <b-form class="bv-example-row">
                                                <b-form-file
                                                    plain
                                                ></b-form-file>

                                                <b-alert show variant="success" style="margin-top:15px">
                                                    <h4 class="alert-heading">Sedih/Marah/Bahagia/Jijik/Takut/Terkejut/Netral</h4>
                                                    <p>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel esse consectetur fugit facere atque reiciendis autem, consequuntur rem provident officiis.
                                                    </p>
                                                </b-alert>
                                            </b-form>
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
                                                <b-form-group label="Berkeringat Dingin">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Ya">Ya</b-form-select-option>
                                                        <b-form-select-option value="Tidak">Tidak</b-form-select-option>
                                                    </b-form-select>
                                                </b-form-group>

                                                <b-form-group label="Jantung Berdebar">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Ya">Ya</b-form-select-option>
                                                        <b-form-select-option value="Tidak">Tidak</b-form-select-option>
                                                    </b-form-select>
                                                </b-form-group>

                                                <b-form-group label="Gemetar">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Ya">Ya</b-form-select-option>
                                                        <b-form-select-option value="Tidak">Tidak</b-form-select-option>
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
                                                <b-form-group label="Marah">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Ya">Ya</b-form-select-option>
                                                        <b-form-select-option value="Tidak">Tidak</b-form-select-option>
                                                    </b-form-select>
                                                </b-form-group>

                                                <b-form-group label="Sakit Hati">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Ya">Ya</b-form-select-option>
                                                        <b-form-select-option value="Tidak">Tidak</b-form-select-option>
                                                    </b-form-select>
                                                </b-form-group>

                                                <b-form-group label="Sedih">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Ya">Ya</b-form-select-option>
                                                        <b-form-select-option value="Tidak">Tidak</b-form-select-option>
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
                                                <b-form-group label="Jarang Berdoa">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Ya">Ya</b-form-select-option>
                                                        <b-form-select-option value="Tidak">Tidak</b-form-select-option>
                                                    </b-form-select>
                                                </b-form-group>

                                                <b-form-group label="Berfikir Negatif">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Ya">Ya</b-form-select-option>
                                                        <b-form-select-option value="Tidak">Tidak</b-form-select-option>
                                                    </b-form-select>
                                                </b-form-group>

                                                <b-form-group label="Iri Hati">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Ya">Ya</b-form-select-option>
                                                        <b-form-select-option value="Tidak">Tidak</b-form-select-option>
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
                                                <b-form-group label="Saat saya ingin merasakan emosi positif yang lebih banyak (misal gembira atau senang), saya mengubah apa yang sedang saya pikirkan.">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Tidak Pernah">Tidak Pernah</b-form-select-option>
                                                        <b-form-select-option value="Jarang">Jarang</b-form-select-option>
                                                        <b-form-select-option value="Sering">Sering</b-form-select-option>
                                                        <b-form-select-option value="Selalu">Selalu</b-form-select-option>
                                                    </b-form-select>
                                                </b-form-group>

                                                <b-form-group label="Saya menyimpan emosi saya untuk diri sendiri.">
                                                    <b-form-select v-model="selected">
                                                        <b-form-select-option :value="null">-- Pilih --</b-form-select-option>
                                                        <b-form-select-option value="Tidak Pernah">Tidak Pernah</b-form-select-option>
                                                        <b-form-select-option value="Jarang">Jarang</b-form-select-option>
                                                        <b-form-select-option value="Sering">Sering</b-form-select-option>
                                                        <b-form-select-option value="Selalu">Selalu</b-form-select-option>
                                                    </b-form-select>
                                                </b-form-group>
                                            </b-form>
                                        </b-card-body>
                                    </b-collapse>
                                    </b-card>
                                </div>

                                 <b-button variant="primary" class="m-t-15">Simpan</b-button>
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
export default {
    name:"ScreeningPasien",
    components:{
        myheader
    },

    data(){
        return{
            selected: null
        }
    }
}
</script>
<style scoped>

</style>