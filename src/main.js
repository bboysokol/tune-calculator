import "bootstrap/dist/css/bootstrap.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
	store,
	render: (h) => h(App)
}).$mount("#app");
