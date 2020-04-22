<template>
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

          <!-- <v-img :src="getPoster('Maayavan (2017).jpg')" height="200px"></v-img> -->
          <v-img :src="getPoster(movie.poster)" height="400px"></v-img>
          <v-card-title>
            {{movie.title}}
          </v-card-title>
          <v-card-subtitle>
            
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="purple" text :href= getURL(movie.url)> 
            <!-- <v-btn color="purple" text :href= getURL(movie.src)>  -->
              Play 
            </v-btn>
            <!-- <v-spacer></v-spacer>
            <v-btn icon @click="movie.show = !movie.show" >
              <v-icon>{{ movie.show ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
            </v-btn> -->
          </v-card-actions>

          <!-- <v-expand-transition >
            <div v-show="!movie.show" >
              <v-divider></v-divider>
              <v-responsive>
                hello
              </v-responsive>
            </div>
          </v-expand-transition> -->
        </v-card>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <!-- <div v-for="(movie,index) in movieMap" :key="index">
      <ol>
        <li>
          {{movie.title}} : {{movie.url}}
        </li>  
      </ol>
    </div> -->
  </v-container>
</template>

<script>

  // import vuePlayer from './VuePlayer';
  import movieJson from '../assets/moviesData.json';
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
          // console.log(this.movieMap);
          return require('../assets/posters/'+ path);
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