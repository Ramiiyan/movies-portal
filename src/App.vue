<template>
  <v-app>
    <NavDrawer v-on:searchFromNBar='onSearchChange'/>

    <v-content>
      <Main 
      :movieMap="movieMap"
      :errorInfo="errorInfo"
      />
      <v-spacer></v-spacer>
      
      <div v-for="(movie,index) in movieMap" :key="index">
        <ol>
          <li>{{movie.title}} : {{movie.url}}</li> 
          <li>{{movie.poster}}</li>
        </ol>
      </div>

    </v-content>

  </v-app>
</template>

<script>
import Main from './components/Main';
import NavDrawer from './components/NavDrawer';
import axios from 'axios';

export default {
  name: 'App',
  
  components: {
    Main,
    NavDrawer,
    // Player,
  },

  data:() => ({
    fromNavBarGet:'',
    rawData:{
      titles:[],
      urls:[],
    },
    movieMap:[],
    errorInfo:{
      netConnected:false,
      errorMsg:null,
    },
    //
  }),

  mounted() {
    axios.get('http://127.0.0.1:1337/Movies/1MoviePortal/').then((Response)=>{
        this.string = Response.data;
        console.log(Response.status);
        this.rawData.titles = this.getData(Response.data,'.mp4">','.mp4</a>');
        this.rawData.urls = this.getData(Response.data,'<a href="','">');
        this.getMovieCollection();
        // console.log(this.movieMap);
    }).catch( (error) =>{
      if(error == "Error: Network Error") {
        console.log(" Network Error catched");
        this.errorInfo.netConnected = true;
        this.errorInfo.errorMsg = "Network Error!";
      } else{
        console.log(error);
        this.errorInfo.netConnected = false;
        this.errorInfo.errorMsg = error;
      }
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

      var title = this.rawData.titles;
      var url = this.rawData.urls;
      for(var i=0; i<title.length; i++){
        var imgSrc = this.rawData.titles[i] + ".jpg";
        this.movieMap = this.movieMap.concat({"title":title[i],"url":url[i],"poster":imgSrc});
        console.log(imgSrc);
      }
      // console.log(this.movieMap);
    },
    onSearchChange(value) {
      this.fromNavBarGet = value;
      console.log('AppParent : '+ this.fromNavBarGet);
    },


  }

};
</script>
