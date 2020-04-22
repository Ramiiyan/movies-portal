<template>
<div>
  <v-app-bar 
      app 
      color="purple darken-4" 
      dark
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title> Movie Portal</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field 
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="mdi-search"
        solo-inverted
        v-model="search"
        clearable
        @click:clear="clearSearch"
      ></v-text-field>
      <v-switch
        v-model="$vuetify.theme.dark"
        color="purple lighten-3"
        label="Dark Theme"
      ></v-switch>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" 
      absolute temporary>
      <v-list nav dense>
        <v-list-item-group  
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon  large color="purple darken-3">mdi-home-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Home </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon large color="purple darken-3">mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Settings </v-list-item-title>
          </v-list-item>
        
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
</template>
<script>
export default {
    data:()=> ({
      drawer:false,
      search: '',
    }),
    watch:{
      search:function() {
        this.$emit('searchFromNBar',this.search);
        console.log('navDrawer: ' + this.search);
      }
    },
    methods: {
      clearSearch () {
        this.search="";
      },
    },
   
}
</script>