<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn flat> player</v-btn>
    </v-app-bar>

    <v-content>
      <!-- <Main/> -->
      <v-spacer></v-spacer>
      <player/>
    </v-content>

  </v-app>
</template>

<script>
// import Main from './components/Main';
import Player from './components/video-card';

export default {
  name: 'App',

  components: {
    // Main,
    Player,
  },

  data: () => ({
    //
  }),
};
</script>
