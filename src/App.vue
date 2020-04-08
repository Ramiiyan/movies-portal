<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Main/>
      <!-- <player/> -->
    </v-content>

  </v-app>
</template>

<script>
import Main from './components/Main';
// import Player from './components/corePlayer';

export default {
  name: 'App',

  components: {
    Main,
    // Player,
  },

  data: () => ({
    //
  }),
};
</script>
