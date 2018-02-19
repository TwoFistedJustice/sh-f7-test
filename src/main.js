import Vue from 'vue';
import App from './App.vue';
import { store } from  './store.js';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';


// Import Routes
import Routes from './routes.js'


Vue.use(Framework7Vue, Framework7)

new Vue({
  el: '#app',
  store,
  // template: '<app/>',
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: Routes,
  },
  // Register App Component
  // components: {
  //   app: App
  // },
  render: h => h(App)
})
