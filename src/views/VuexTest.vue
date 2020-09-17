<template>
  <div id="testVuex" class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <input v-model="pertanyaan">

    <p>{{jawaban}}</p>

       <div>
      <p class="counter">{{counter}}</p>
      <div class="actions">
        <div class="actions-inner">
          <button @click="nambah">+</button>
          <button @click="kurang">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'

export default {
  name: "Home",
 data (){
   return{
     pertanyaan : '',
     jawaban : 'isi pertanyaan'
   };
 },

watch:{
  pertanyaan : function(isi){
    this.jawaban = isi
  }
},
computed: {
  
  ...mapState([
     'counter'
  ])
},

methods:{
  ...mapActions([
   'increment',
    'decrement'
  ]),
  nambah: function(){
    this.increment()
  },
   kurang: function(){
    this.decrement()
  }
}

};
</script>
