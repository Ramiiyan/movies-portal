<template>
  <div v-html="vlcPlayer">    
  </div>
</template>
<script>

// import video from 'video.js';

export default {
    data(){
      return{
        vlcPlayer: 
        ' <video id="video" class="video-js vjs-default-skin" height="640" width="1080" controls data-setup='+'{ "techOrder": ["vlc"] }'+'> <source src="E:/Movies/Sahoo_2019.mkv" /> </video>'
      }
    }
}
</script>