<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn flat>
        <!-- <router-link to="/play"> Play</router-link> -->
      </v-btn>
    </v-app-bar>

    <v-content>
      <Main/>
      <v-spacer></v-spacer>
      <p>{{ipData}}</p>
      <!-- <player/> -->
    </v-content>

  </v-app>
</template>

<script>
import Main from './components/Main';
// import Player from './components/VuePlayer';
import axios from 'axios';

export default {
  name: 'App',

  components: {
    Main,
    // Player,
  },

  data:() => ({
    ipData:null,
    results:[],
    

    //
  }),
  mounted() {
    axios.get('http://192.168.10.1:1337/').then((Response)=>{
        this.ipData = Response.data;
        // console.log(Response.data);
      })
  },
  methods: {
    getFromBetween:function (sub1,sub2) {
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
        var SP = this.string.indexOf(sub1)+sub1.length;
        var string1 = this.string.substr(0,SP);
        var string2 = this.string.substr(SP);
        var TP = string1.length + string2.indexOf(sub2);
        return this.string.substring(SP,TP);
    },
    removeFromBetween:function (sub1,sub2) {
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
        var removal = sub1+this.getFromBetween(sub1,sub2)+sub2;
        this.string = this.string.replace(removal,"");
    },
    getAllResults:function (sub1,sub2) {
        // first check to see if we do have both substrings
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;

        // find one result
        var result = this.getFromBetween(sub1,sub2);
        // push it to the results array
        this.results.push(result);
        // remove the most recently found one from the string
        this.removeFromBetween(sub1,sub2);

        // if there's more substrings
        if(this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
            this.getAllResults(sub1,sub2);
        }
        else return;
    },
    get:function (string,sub1,sub2) {
        this.results = [];
        this.string = string;
        this.getAllResults(sub1,sub2);
        return this.results;
    }

  }

};
</script>
