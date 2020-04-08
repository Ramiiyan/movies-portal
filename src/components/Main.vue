<template>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          xs="12" sm="6" md="3" lg="3" xl="3"
        >
        <v-card class="mx-auto" max-width="344">
          
          <v-img :src="card.src" height="200px"></v-img>
          <v-card-title>
            {{card.title}}
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          
          <v-card-actions>
            <v-btn text>Share</v-btn>
            <v-btn color="purple" text> Explore </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="card.show = !card.show">
              <v-icon>{{ card.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          
          <v-expand-transition >
            <div v-show="card.show" r>
              <v-divider></v-divider>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. 
                You won't have time for sleeping, soldier, not with all the bed making you'll be doing. 
                Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! 
                You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

// import corePlayer from './components/corePlayer';

    export default {
      components:{
        // corePlayer,
      },
      data: () => ({
          cards : [
              { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3, show: false },
              { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, show:false },
              { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, show:false},
          ],
      }),
    }
</script>