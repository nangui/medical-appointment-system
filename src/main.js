import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'iview/dist/styles/iview.css'
import 'swiper/dist/css/swiper.css'
import 'magnific-popup/dist/magnific-popup.css'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
