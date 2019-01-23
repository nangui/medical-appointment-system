import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const serviceStore = [
  {
    imgUrl: 'menopause.jpg',
    title: 'Menopause'
  },
  {
    imgUrl: 'teenager.jpg',
    title: 'Teenage Care'
  },
  {
    imgUrl: 'gynecology.jpg',
    title: 'Gynecology'
  },
  {
    imgUrl: 'baby_care.jpg',
    title: 'Baby Care'
  },
  {
    imgUrl: 'pregnancy.jpg',
    title: 'Pregnancy'
  },
  {
    imgUrl: 'colposcopy.jpg',
    title: 'Colposcopy'
  },
  {
    imgUrl: 'ultrasound.jpeg',
    title: 'Altra Sound'
  },
  {
    imgUrl: 'obstetrics.jpg',
    title: 'Obstetrics'
  }
]

export default new Vuex.Store({
  state: {
    services: serviceStore
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    allServices: state => {
      return state.services
    }
  }
})
