<template>
    <div id="myheader">
        <section class="bgheader">
            <b-container>
                <b-row>
                    <b-col cols="6" md="8" lg="8">
                        <div class="partone">
                            <h3 class="m-t-0 m-b-0"><strong>SIDE</strong></h3>
                            <!-- <img src="https://via.placeholder.com/50">
                            <div class="brandname">
                                <h3 class="m-t-0 m-b-0 m-l-10"><strong>SIDE</strong></h3>
                            </div> -->
                        </div>
                    </b-col>

                    <b-col cols="6" md="4" lg="4">
                        <div class="parttwo">
                            <b-dropdown right  variant="link" toggle-class="text-decoration-none" no-caret>
                                <template v-slot:button-content>
                                    <div class="account">
                                        <img src="../assets/user.png" style="height:50px">

                                        <!-- <div class="accountname">
                                            <h6 class="m-t-0 m-b-0">Hi,</h6>
                                            <h6 class="m-t-0 m-b-0" style="text-transform:uppercase"><strong>username</strong></h6>
                                        </div> -->
                                        
                                    </div>
                                </template>
                                <!-- <b-dropdown-text >
                                    <h6 style="font-weight:bold;text-align:left" class="m-t-0 m-b-0">Hi, Username</h6>
                                </b-dropdown-text>
                                <b-dropdown-divider></b-dropdown-divider> -->
                                
                                <b-dropdown-item v-on:click="logoutdong()">Logout</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
    </div>
    
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "myheader",
  data (){
    return{
  
    };
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
#myheader .bgheader{
    background-color: #fff;
    box-shadow: 0 7px 20px 0 rgba(0,0,0,.2);
}

#myheader .bgheader .partone{
    display: flex;
    align-items: center;
    height: 65px;
}


#myheader .bgheader .parttwo{
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#myheader .bgheader .parttwo img{
    border-radius: 100%;
}
#myheader .bgheader .parttwo .account{
    display: flex;
    height: 50px;
    align-items: center;
}
#myheader .bgheader .parttwo .accountname{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    
}

#myheader .bgheader .parttwo .account :nth-child(1) { order: 2; }
#myheader .bgheader .parttwo .account :nth-child(2) { order: 1; }

#myheader .bgheader .parttwo .accountname :nth-child(1) { order: 1; }
#myheader .bgheader .parttwo .accountname :nth-child(2) { order: 2; }

#myheader .bgheader .parttwo .account h5, h6{
    text-align: right;
    color: #2c3e50;
}
</style>