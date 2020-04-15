<template id="app">
    <div>
    <!-- <vue-plyr>
      <video
        crossorigin
        playsinline
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
        :src= "path"
        
      >
      </video>
    </vue-plyr> -->
    <video width="320" height="240" autoplay controls >
      <source :src='path' >
      <!-- <source src="movie.ogg" type="video/ogg"> -->
      Your browser does not support the video tag.
    </video>
    <p>{{path}}</p>
    <!-- <v-btn @click="getVideo">getVideo</v-btn> -->
    </div>

</template>

<script>
  import myJson from '../assets/moviesData.json';
  import axios from 'axios';
  // import VueAxios from 'vue-axios';
  // var path = require('http://192.168.10.1:1337/Raja%20Rani%20(2013)-Bluray-Rip-1080P.mp4');
  // var path = require('E:/Movies/Raja Rani (2013)-Bluray-Rip-1080P.mp4');
  // var a = myJson.;
  var path =' ' ;
  
  export default {
    name: 'App',
    props:{
      // path:{
      //   type:String,
      //   required:true
      // }
    },
    data (){
      return{
        myJson:myJson,
        path: path,
        data1:null,
        
      }
    },
    mounted(){
      axios.get('http://192.168.10.1:1337/').then((Response)=>{
        this.path = Response;
        // console.log(Response.data);
      })
    },
    
    // methods: {
    //     getVideo(){
    //       console.log(this.path);
    //       return require( this.path );
    //     }
    // }
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