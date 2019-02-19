import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueSmoothScroll from 'vue2-smooth-scroll'
import 'iview/dist/styles/iview.css'
import 'swiper/dist/css/swiper.css'
import 'magnific-popup/dist/magnific-popup.css'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(VueAwesomeSwiper)
Vue.use(VueSmoothScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
