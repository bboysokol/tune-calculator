<template>
	<el-card
		class="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center no-border"
	>
		<div slot="header" class="clearfix">
			<h4 class="text-center"><strong> Tune Calculator</strong></h4>
		</div>
		<el-alert v-if="alert" title="Błędne hasło" type="error" class="mb-3">
		</el-alert>
		<el-input
			placeholder="Wpisz hasło"
			v-model="password"
			@keyup.enter.native="login"
			show-password
		></el-input>
		<div class="col-12 d-flex justify-content-center pt-3">
			<el-button
				@click="login"
				type="primary"
				plain
				:disabled="!password"
			>
				Login
			</el-button>
		</div>
	</el-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
	data() {
		return {
			password: "",
			alert: false,
		};
	},
	methods: {
		...mapActions(["setSession"]),
		login() {
			if (process.env.VUE_APP_PASSWORD === this.password)
				this.setSession();
			else this.alert = true;
		},
	},
};
</script>
<style>
.no-border {
	border: none !important;
}
</style>
