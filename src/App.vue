<template>
	<div
		class="
			col-12
			d-flex
			vh-100
			justify-content-center
			align-items-center
			flex-column
		"
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
import { mapGetters } from "vuex";
export default {
	data() {
		return {};
	},
	components: { Login, Calculator, VFooter },
	computed: {
		...mapGetters(["isLogged"])
	}
};
</script>
