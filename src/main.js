import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
//import fb from 'firebase'
//import firebase from 'firebase/app'
import fb from 'firebase/app'
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
    render: h => h(App),
  router: router,
  store,
  created(){
  const firebaseConfig = {
      apiKey: "AIzaSyC8DTr2EQB5Ks6x7E6--qOSAqkFRzW3ehQ",
      authDomain: "add-pro-acc8d.firebaseapp.com",
      projectId: "add-pro-acc8d",
      storageBucket: "add-pro-acc8d.appspot.com",
      messagingSenderId: "775797943383",
      appId: "1:775797943383:web:95b327f3604463dc2bc712",
      measurementId: "G-NFWKMBDEQB"
  };
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics();
  //fb.auth().onAuthStateChanged(user => {
    //здесь можно обновить пользователя в store
    //console.log(user)
  //});
  fb.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(`Смотрим что мы получили: ${user.uid}`)
      this.$store.dispatch('autoLoginUser', user.uid)
    }
 })

  //const app = initializeApp(firebaseConfig);
  //getAnalytics(app);

  this.$store.dispatch('fetchAds')
}
}).$mount('#app')