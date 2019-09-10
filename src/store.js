import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=HDd1PrJDOJfI5fSYkAOGyxTdIe8J0K1s7ePyf8bJ'
})

export default new Vuex.Store({
  state: {
    pictures: {}
  },
  mutations: {

  },
  actions: {

  }
})
