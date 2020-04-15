import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import vuePlayer from 'vue-plyr';


Vue.config.productionTip = false

Vue.use(vuePlayer)
// Vue.use(VueAxios,axios)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
