<template>
  <v-content>
    <v-container fluid>
      <v-alert
        text
        prominent
        type="error"
        icon="mdi-cloud-alert"
        :value=errorInfo.netConnected
      >
        {{errorInfo.errorMsg}}
      </v-alert>

      <v-row dense>
        <v-col
          v-for="movie in filteredItems"
          :key="movie.title"
          cols="12"
          xs="12" sm="6" md="3" lg="3" xl="3"
        >
        <v-card class="mx-auto" max-width="344">

          <v-img :src="getPoster(movie.poster)" height="400px"/>
          <!-- <v-img src="/posters/2012%20(2009)%20Tamil%20720p.jpg" height="400px"/> -->
          <v-card-title>
            {{movie.title}}
          </v-card-title>
          <!-- <v-card-subtitle>
          </v-card-subtitle> -->

          <v-card-actions>
            <v-btn color="purple" text :href= getURL(movie.url)> 
              Play 
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
  </v-container>
  </v-content>
</template>

<script>

  import movieJson from '../assets/moviesData.json';
  // import Drawer from './Drawer';
  import _ from 'lodash';
  // var path = require("../assets/posters/Maayavan_2017.jpg");
  const URLHEAD = "http://127.0.0.1:1337";
    export default {
      props:{
        movieMap:{
          type:Array,
          required:true,
        },
        errorInfo:{
          type:Object,
          required:true,
        },
        search:String,
        // rawData:{
        //   type:Object,
        // }
        // test:String
      },
      components:{
        // Drawer,
      },
      data: () => ({
        UrlHead : URLHEAD,
        myJson : movieJson,
        selectedMSrc : undefined,
        
        // path : path,
          
      }),
      methods: {
        getPoster(path){
          try{
            return require('../assets/posters/' + path);
          }catch(e){
            console.log("Image Err : " + e );
            return require('../assets/posters/default.jpg');
          }
        },
        getURL(path){
          return URLHEAD + path; 
        },
        
      },
      computed:{
        renderText(){
          return this.selectedMSrc;
        },
        filteredItems() {
          return _.orderBy(this.movieMap.filter(item =>{
            if(!this.search) return this.movieMap;
              return(item.title.toLowerCase().includes(this.search.toLowerCase()));
          }),'title');
        },

      },
    }
    
    
</script>