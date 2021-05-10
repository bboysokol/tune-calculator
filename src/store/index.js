import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		logggedIn: false,
		carInfo: null,
		carTune: null
	},
	getters: {
		isLogged: (state) => state.logggedIn,
		carInfo: (state) => state.carInfo,
		carTune: (state) => state.carTune
	},
	mutations: {
		setUser(state) {
			state.logggedIn = true;
		},
		setCarInfo(state, data) {
			state.carInfo = data;
		},
		setCarTune(state, data) {
			state.carTune = data;
		},
		clearCarData(state) {
			state.carTune = null;
			state.carInfo = null;
		}
	},
	actions: {
		setSession({ commit }) {
			commit("setUser");
		},
		setCarInfo({ commit }, data) {
			commit("setCarInfo", data);
		},
		setCarTune({ commit }, data) {
			commit("setCarTune", data);
		},
		clearCarData({ commit }) {
			commit("clearCarData");
		}
	}
});
