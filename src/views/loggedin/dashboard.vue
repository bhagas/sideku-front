<template>
  <div id="homee" class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />

   
    halaman dashboard
    <p>{{cekLogin}}</p>

       <div>
      <div class="actions">
        <div class="actions-inner">
         
             <button @click="logoutdong">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "Dashboard",
 data (){
   return{
     isLogin: false,
     email: '',
     password: ''
   };
 },

watch:{

},

created: {
    
    // isLogin : function(){
    //     return this.cekLogin
    // }
},
computed: {
...mapState('Login', ['token']),
 ...mapGetters('Login',['cekLogin']),

},

methods:{
  ...mapActions('Login', [ 'doLogin', 'doLogout' ]),
 
   logoutdong: function(){
       
    this.doLogout()
     this.$router.push({ name: "login"})
    // this.isLogin =  this.cekLogin
  },
}

};
</script>

<style scoped>

</style>
