<template>
	<div
		class="d-flex flex-column justify-content-center align-items-center mt-2 footer-container"
	>
		<i class="fab fa-github github" @click="goToGithub()"></i>
		<small>
			prepared for
			<a href="https://forum.v-rp.pl/" target="blank"> Vibe RP </a>
		</small>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	methods: {
		goToGithub() {
			window.location.href =
				"https://github.com/bboysokol/tune-calculator";
		},
	},
};
</script>
<style>
.footer-container {
	color: #3c5a67;
}
.footer-container a:link,
.footer-container a:visited {
	text-decoration: none;
	color: #17bf63 !important;
}

.github {
	font-size: 30pt;
	cursor: pointer;
}
.github:hover {
	color: #192734;
}
</style>
