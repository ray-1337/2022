import Vue from 'vue';
import App from './Telugu.vue';
import router from '../router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#omicron');