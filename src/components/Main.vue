<template>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="movie in myJson"
          :key="movie.title"
          cols="12"
          xs="12" sm="6" md="3" lg="3" xl="3"
        >
        <!-- <v-col
         v-for="(titles,urls,index) in rawData"
        :key="index"
        cols="12"
        xs="12" sm="6" md="3" lg="3" xl="3"
        > -->
        <v-card class="mx-auto" max-width="344">

          <!-- <v-img :src="getPoster('Maayavan_2017.jpg')" height="200px"></v-img> -->
          <v-img :src="getPoster(movie.poster)" height="200px"></v-img>
          <v-card-title>
            {{movie.title}}
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="purple" text :href= getURL(movie.src)> 
            <!-- <v-btn color="purple" text :href= getURL(movie.src)>  -->
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
                hello
              </v-responsive>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <!-- {{movieMap[0]}} -->
    <div v-for="movie in movieMap" :key="movie.title">
      <ol>
        <!-- <li v-for="(title,index) in titles" :key=index> -->
        <li>
          {{movie.title}} : {{movie.url}}
        </li>  
        <!-- <li v-for="(url,index) in urls" :key=index>  
          {{url}}
        </li> -->
      </ol>
    </div>
     <div v-for="(titles,url,index) in rawData" :key="index">
        <v-col>
          <v-row v-for="(title,index) in titles" :key="index">
            {{title}}
          </v-row>
        </v-col>
        <v-col>  
          <v-row v-for="(url,index) in urls" :key="index">
            {{url}}
          </v-row>
        </v-col>
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
        // movieMap:{
        //   type:Object,
        //   required:true,
        // },
        rawData:{
          type:Object,
        }
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
          console.log(this.movieMap);
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