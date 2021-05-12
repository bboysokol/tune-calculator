<template>
	<div
		class="col-12 vh-100 d-flex justify-content-center align-items-center"
		style="background-color: rgba(158, 240, 215, 0.2)"
	>
		<login v-if="!isLogged" />
		<calculator v-else />
	</div>
</template>
<script>
import Login from "./components/Login";
import Calculator from "./components/Calculator";
import { mapGetters } from "vuex";
export default {
	data() {
		return {};
	},
	components: { Login, Calculator },
	computed: {
		...mapGetters(["isLogged"])
	}
};
</script>
