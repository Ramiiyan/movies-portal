<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        label="Theme Dark"
      ></v-switch>
    </v-app-bar>

    <v-content>
      <Main :movieMap="movieMap"/>
      <v-spacer></v-spacer>
      
      <div v-for="(movie,index) in movieMap" :key="index">
        {{movie.title}} : {{movie.url}}
      </div>
      <!-- <div v-for="(titles,url,index) in rawData" :key="index">
        <v-col>
          <v-row v-for="(title,index) in titles" :key=index>
            {{title}}
          </v-row>
        </v-col>
        <v-col>  
          <v-row v-for="(url,index) in urls" :key="index">
            {{url}}
          </v-row>
        </v-col>
      </div> -->
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
  props:{
    attrs: {
      type: Object,
      default: () => ({}),
    }
  },
  components: {
    Main,
    // Player,
  },
  // beforeDestroy() {
  //   if(!this.$vuetify) return
  //   this.$vuetify.theme.dark = this.initialDark
  // },
  data:() => ({
    rawData:{
      titles:[],
      urls:[],
    },
    movieMap:[],
    //
  }),
  mounted() {
    axios.get('http://192.168.10.1:1337/Movies/1MoviePortal/').then((Response)=>{
        this.string = Response.data;
        // console.log(Response.data);
        this.rawData.titles = this.getData(Response.data,'.mp4">','.mp4</a>');
        this.rawData.urls = this.getData(Response.data,'<a href="','">');
        this.getMovieCollection();
        // console.log(this.movieMap);
      })
      
  },
  methods: {
    getFromBetween(sub1,sub2) {
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
        var SP = this.string.indexOf(sub1)+sub1.length;
        var string1 = this.string.substr(0,SP);
        var string2 = this.string.substr(SP);
        var TP = string1.length + string2.indexOf(sub2);
        return this.string.substring(SP,TP);
    },
    removeFromBetween(sub1,sub2) {
        if(this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
        var removal = sub1+this.getFromBetween(sub1,sub2)+sub2;
        this.string = this.string.replace(removal,"");
    },
    getAllResults(sub1,sub2) {
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
    getData(string,sub1,sub2) {
        this.results = [];
        this.string = string;
        this.getAllResults(sub1,sub2);
        return this.results;
    },
    getMovieCollection() {
      this.rawData.urls.shift();
      this.rawData.urls.pop();
      // this.rawData.titles.forEach((title, i)=>
      //   this.movieMap[title] = this.rawData.urls[i]
      // );
      var tit = this.rawData.titles;
      var u = this.rawData.urls;
      // var map =[];
      for(var i=0; i<tit.length; i++){
        this.movieMap = this.movieMap.concat({"title":tit[i],"url":u[i]});
        // this.movieMap = map.concat(map);
        // console.log(map);
      }
      // return this.movieMap;
      // console.log(this.movieMap);
    }


  }

};
</script>
