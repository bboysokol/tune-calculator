<template>
	<div
		class="col-12 d-flex vh-100 justify-content-center align-items-center flex-column"
	>
		<div
			class="col-12 d-flex px-0 justify-content-center align-items-center"
		>
			<login v-if="!isLogged" />
			<calculator v-else />
		</div>
		<v-footer />
	</div>
</template>
<script>
import Login from "./components/Login";
import Calculator from "./components/Calculator";
import VFooter from "./components/Footer";
import { mapActions, mapGetters } from "vuex";
import { hasSessionCookie } from "./helpers/cookieHelper";
export default {
	components: { Login, Calculator, VFooter },
	mounted() {
		if (hasSessionCookie()) {
			this.setSession();
		}
	},
	methods: {
		...mapActions(["setSession"]),
	},
	computed: {
		...mapGetters(["isLogged"]),
	},
};
</script>
