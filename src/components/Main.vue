<template>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="movie in myJson"
          :key="movie.title"
          cols="12"
          xs="12" sm="6" md="3" lg="3" xl="3"
        >
        <v-card class="mx-auto" max-width="344">

          <v-img :src="getPoster(movie.poster)" height="200px"></v-img>
          <v-card-title>
            {{movie.title}}
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="purple" text :href= getURL(movie.src)> 
              Play 
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="movie.show = !movie.show" >
              <v-icon>{{ movie.show ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition >
            <div v-show="!movie.show" >
              <v-divider></v-divider>
              <v-responsive>
              <!-- <embed :src= getURL(movie.src)> -->
                <!-- <vuePlayer :path= getURL(movie.src)></vuePlayer> -->
              </v-responsive>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <div v-for="(titles,url,index) in rawData" :key="index">
      <ol>
        <li v-for="(title,index) in titles" :key=index>
          {{title}}
        </li>
      </ol>
      <ul>  
        <li v-for="(url,index) in urls" :key="index">
          {{url}}
        </li>
      </ul>
    </div>

  </v-container>
</template>

<script>

  // import vuePlayer from './VuePlayer';
  import movieJson from '../assets/moviesData.json';
  
  // var path = require("../assets/posters/Maayavan_2017.jpg");
  const URLHEAD = "http://192.168.10.1:1337/";
    export default {
      props:{
        rawData:{
          type:Object,
          required:true,
        },
        test:String
      },
      components:{
        // vuePlayer,
      },
      data: () => ({
        UrlHead : URLHEAD,
        myJson : movieJson,
        selectedMSrc : undefined,
        // path : path,
          
      }),
      methods: {
        getPoster(path){
          return require('../assets/posters/'+ path);
        },
        getURL(path){
          return URLHEAD + path; 
        }
      },
      computed:{
        renderText(){
          return this.selectedMSrc;
        }

      },
    }
    
    
</script>