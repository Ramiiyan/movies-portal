<template>
  <v-app-bar app dark >
    <v-toolbar-title> Movie Portal</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field 
      class="auto"
      dense
      label="Search"
      prepend-inner-icon="mdi-magnify"
      solo-inverted
      v-model="search"
      clearable
      @click:clear="clearSearch"
    >
    </v-text-field>
    <v-switch
      v-model="$vuetify.theme.dark"
      color="purple lighten-3"
      label="Dark Mode"
    >
    </v-switch>
  </v-app-bar>
</template>

<script>
export default {
    data:()=> ({
      search: '',
    }),
    watch:{
      search:function() {
        this.$emit('searchFromNBar',this.search);
        // console.log('navDrawer: ' + this.search);
      }
    },
    methods: {
      clearSearch () {
        this.search="";
      },
    },
   
}
</script>