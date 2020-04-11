<template id="app">
    <div>
    <vue-plyr>
      <video
        crossorigin
        playsinline
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
        :src= "getVideo"
        
      >
      </video>
    </vue-plyr>
    <p>{{path}}</p>
    <v-btn @click="getVideo">getVideo</v-btn>
    </div>

</template>

<script>
  import myJson from '../assets/moviesData.json';
  // var path = require('E:/Movies/Maayavan2017/Maayavan.mp4');
  // var a = myJson.;
  export default {
    name: 'App',
    props:{
      path:{
        type:String,
        required:true
      }
    },
    data (){
      return{
        myJson:myJson,
        // path: path,
        
      }
    },
    
    methods: {
        getVideo(){
          console.log(this.path);
          return require( this.path );
        }
    }
  }
  
  // console.log(myJson.a.src);
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>