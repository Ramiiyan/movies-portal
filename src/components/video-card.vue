<template>
  <div>
    <video width="320" height="240" autoplay controls data-setup='{ "techOrder": ["vlc"] }'>
      <!-- <source :src="require('E:/Movies/Yaman.mp4')" > -->
      <!-- <source src="movie.ogg" type="video/ogg"> -->
      Your browser does not support the video tag.
    </video>
    <v-spacer></v-spacer> 
    <embed  autostart="false" height="240" width="320" />   
  </div>
</template>
<script>

// import video from 'video.js';

export default {
    data(){
      return{
        // path2:require('E:/Movies/Mom.mkv'),
        // path2:require('E:/Movies/Yaman.mp4'),
      }
    }
}
</script>