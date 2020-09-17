<template>
  <div id="homee" class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

   

    <p>{{cekLogin}}</p>
  <p>{{tujuan}}</p>
       <div>
           <input v-model="email" placeholder="email">
           <input v-model="password" placeholder="password" type='password'>
      <div class="actions">
        <div class="actions-inner">
          <button @click="logindong">Login</button>
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
  name: "Home",
 data (){
   return{
     isLogin: false,
     email: '',
     password: ''
   };
 },
   props:{
        tujuan: String
     },
watch:{

},

created: {
    
 
},
mounted:function(){
    console.log(this.$route.query.tujuan)
},
computed: {
...mapState('Login', ['token']),
 ...mapGetters('Login',['cekLogin']),

},

methods:{
  ...mapActions('Login', [ 'doLogin', 'doLogout' ]),
   logindong: function(){
    this.doLogin({email: this.email, password:this.password})
    if(this.token){
          this.$router.push({ name: "dashboard"})
    }
   
  },
   logoutdong: function(){
    this.doLogout()
    // this.isLogin =  this.cekLogin
  },
}

};
</script>

<style scoped>

</style>
