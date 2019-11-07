import Vue from "vue"
import Vuex from "vuex"
import { saveStatePlugin } from "../utils"

Vue.use(Vuex)

const STATE_KEY = "my-state"
const state = JSON.parse(localStorage.getItem(STATE_KEY) || "null") || {}
const plugin = saveStatePlugin(STATE_KEY)

export default new Vuex.Store({
  plugins: [plugin],
  state,
  mutations: {},
  actions: {},
  modules: {}
})
