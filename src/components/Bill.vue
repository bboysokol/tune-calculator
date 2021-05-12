<template>
	<div class="col-12">
		<div class="col-12 d-flex justify-content-between">
			<div class="col-6"><strong>Nazwa części</strong></div>
			<div class="col-6 d-flex justify-content-between">
				<strong> <small> Robocizna(min) </small></strong>
				<strong>Cena</strong>
			</div>
		</div>
		<div
			v-for="part in carParts"
			:key="part.name"
			class="col-12 d-flex justify-content-between"
		>
			<div class="col-6">
				{{ part.name }}
			</div>
			<div class="col-6 d-flex justify-content-between">
				<span>${{ part.fee }}</span> <span>${{ part.price }}</span>
			</div>
		</div>
		<hr />
		<div class="col-12 d-flex justify-content-between">
			<div class="col-6"><strong> </strong></div>
			<div class="col-6 d-flex justify-content-between">
				<strong> ${{ totalFee }} </strong>
				<strong> ${{ total }} </strong>
			</div>
		</div>
		<div class="col-12 d-flex justify-content-end">
			<strong>Razem: ${{ total + totalFee }} </strong>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {};
	},
	computed: {
		...mapGetters(["carTune", "carInfo"]),
		carParts() {
			return this.carTune.map((item) => {
				let price = 0;
				switch (true) {
					case this.carInfo.price > 100000 &&
						this.carInfo.price < 200000:
						price = item.price * 150000;
						break;
					case this.carInfo.price >= 200000 &&
						this.carInfo.price <= 300000:
						price = item.price * 200000;
						break;
					case this.carInfo.price >= 300000 &&
						this.carInfo.price <= 500000:
						price = item.price * 250000;
						break;
					case this.carInfo.price >= 500000:
						price = item.price * 300000;
						break;
					default:
						price = item.price * this.carInfo.price;
				}

				return {
					name: `${item.name} ${item.stage ? item.stage : ""}`,
					price: Math.round(price),
					fee: item.fee
				};
			});
		},
		total() {
			let totalPrice = 0;
			this.carParts.forEach((item) => {
				totalPrice += item.price;
			});
			return totalPrice;
		},
		totalFee() {
			let totalFee = 0;
			this.carParts.forEach((item) => (totalFee += item.fee));
			return totalFee;
		}
	}
};
</script>
