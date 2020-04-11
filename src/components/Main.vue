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
            <v-btn color="purple" text @click="selectedMSrc = movie.src"> 
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
                <vuePlayer :path=movie.src></vuePlayer>
              </v-responsive>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import vuePlayer from './VuePlayer';
  import movieJson from '../assets/moviesData.json';
  // var path = require("../assets/posters/Maayavan_2017.jpg");

    export default {
      components:{
        vuePlayer,
      },
      data: () => ({
          myJson : movieJson,
          selectedMSrc : undefined,
          // path : path,
          
      }),
      methods: {
        getPoster(path){
          return require('../assets/posters/'+ path);
        },
      },
      computed:{
        renderText(){
          return this.selectedMSrc;
        }

      },
    }
    
    
</script>