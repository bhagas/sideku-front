<template>
  <div id="home">
    <b-container>
      <b-row style="margin-top:60px; margin-bottom:60px">
        <b-col md="12" lg="12">
          <div class="box">
            <b-row>
              <b-col md="12" lg="12">
                <h1 class="m-t-0 m-b-0 text-center"><strong>S I D E</strong></h1>
                <h4 class="m-t-0 m-b-0 text-center">Sistem Informasi Deteksi Emosi</h4>
              </b-col>

              <b-col md="12" lg="12" class="m-t-30">
                <p style="text-align:justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad omnis suscipit deserunt cum nemo voluptate repellendus quis, accusamus laboriosam nesciunt blanditiis distinctio, aut quaerat non atque, minima reiciendis. Minus, eligendi quis alias ut obcaecati asperiores dicta ullam veritatis blanditiis doloribus modi et sint dignissimos quo ipsam, iusto earum exercitationem!</p>
              </b-col>
            </b-row>
            
            <b-row class="m-t-30">
              <b-col md="12" lg="12">
                <center>
                  <router-link :to="'daftar'">
                  <b-button  variant="primary" size="lg">Deteksi Emosi Anda Sekarang !</b-button>
                  </router-link>
                </center>
                
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "Home",
 data (){
   return{
     isLogin: false,
   };
 },

watch:{

},

created: {
    
  
},
computed: {

},

methods:{
 
}

};
</script>

<style scoped>

</style>
