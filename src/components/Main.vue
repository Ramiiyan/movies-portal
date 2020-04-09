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
            <v-btn text>Share</v-btn>
            <v-btn color="purple" text> Explore </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="movie.show = !movie.show">
              <v-icon>{{ movie.show ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
            </v-btn>
          </v-card-actions>
          
          <v-expand-transition >
            <div v-show="!movie.show" >
              <v-divider></v-divider>
              <v-responsive>
                <player/>
              </v-responsive>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import player from './VuePlayer';
  import movieJson from '../assets/moviesData.json';
  // import movies from 'E:/Movies';
  // var path = require("../assets/posters/Maayavan_2017.jpg");
  
    export default {
      components:{
        player,
      },
      data: () => ({
          myJson : movieJson,
          // path : path,
          
      }),
      methods: {
        getPoster(path){
          return require('../assets/posters/'+ path);
        }
      }
    }
</script>