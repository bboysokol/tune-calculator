import Vue from 'vue';
import Vuex from 'vuex';
import { setSessionCookie } from '../helpers/cookieHelper';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logggedIn: false,
    carInfo: null,
    carTune: [],
    companyName: null,
  },
  getters: {
    isLogged: (state) => state.logggedIn,
    carInfo: (state) => state.carInfo,
    carTune: (state) => state.carTune,
    company: (state) => state.companyName,
  },
  mutations: {
    setUser(state, companyName) {
      state.logggedIn = true;
      state.companyName = companyName;
    },
    setCarInfo(state, data) {
      state.carInfo = data;
    },
    setCarTune(state, data) {
      state.carTune = data;
    },
    clearCarData(state) {
      state.carTune = [];
      state.carInfo = null;
    },
  },
  actions: {
    setSession({ commit }, companyName) {
      setSessionCookie(companyName);
      commit('setUser', companyName);
    },
    setCarInfo({ commit }, data) {
      commit('setCarInfo', data);
    },
    setCarTune({ commit }, data) {
      commit('setCarTune', data);
    },
    clearCarData({ commit }) {
      commit('clearCarData');
    },
  },
});
