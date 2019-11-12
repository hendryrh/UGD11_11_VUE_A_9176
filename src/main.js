import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.prototype.$http = Axios; 
Vue.prototype.$apiUrl = 'http://127.0.0.1:8090/modul11/index.php';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
