// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import firebase from 'firebase'
import 'firebase/firestore'
import VueCarousel from 'vue-carousel';
 
Vue.use(VueCarousel);
Vue.use(VueFire)
Vue.config.productionTip = false

  let app;
 
  var config = {
    apiKey: "AIzaSyA44oJH1j8TfjoCXOe7L3AZWO70huSGKcQ",
    authDomain: "assigment002-9fc2c.firebaseapp.com",
    databaseURL: "https://assigment002-9fc2c.firebaseio.com",
    projectId: "assigment002-9fc2c",
    storageBucket: "assigment002-9fc2c.appspot.com",
    messagingSenderId: "1072903865615"
  };

  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user){
    if (!app) {
      app = new Vue({
        el: '#app',
        template: '<App/>',
        components: { App },
        router
      })
    }
 });
 export const db = firebase.firestore()



