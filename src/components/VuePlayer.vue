<template id="app">
    <vue-plyr>
      <video
        crossorigin
        playsinline
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
        :src= "myJson.a.src"
        
      >
      
        <!-- <source
          size="576"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          type="video/mp4"
        >
        <source
          size="720"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
          type="video/mp4"
        >
        <source
          size="1080"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
          type="video/mp4"
        > -->
        <!-- <track
          default
          kind="captions"
          label="English"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
          srclang="en"
        >
        <track
          kind="captions"
          label="Français"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
          srclang="fr"
        > -->
        <!-- <a
          download=""
          href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
        >
          Download
        </a> -->

      </video>
    </vue-plyr>

</template>

<script>
  import myJson from '../assets/moviesData.json';
  // var path = require('E:/Movies/Maayavan2017/Maayavan.mp4');
  // var a = myJson.;
  export default {
    name: 'App',
    data (){
      return{
        myJson:myJson,
        // path: path,
        
      }
    },
    
    methods: {
        getVideo(path){
          console.log(path);
          return require( path );
        }
    }
  }
  console.log(myJson.a.src);
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