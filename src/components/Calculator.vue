<template>
	<div class="col-12 d-flex justify-content-center flex-column flex-md-row">
		<el-card
			class="
				box-card
				col-12 col-md-6 col-lg-6
				d-flex
				flex-column
				align-items-center
				m-2
			"
			style="max-height: 800px; overflow-y: auto"
			:body-style="{ width: '100%' }"
		>
			<div slot="header" class="clearfix">
				<h4 class="text-center">Tune Calculator</h4>
			</div>
			<div class="col-12 d-flex flex-column align-items-center">
				<el-autocomplete
					class="inline-input"
					v-model="pickedCar"
					:fetch-suggestions="querySearch"
					value-key="name"
					placeholder="Wybierz samochód"
					@select="handleSelect"
				>
				</el-autocomplete>
				<div class="py-2" v-if="pickedCar"><car-data /></div>
			</div>
		</el-card>
		<el-card
			class="
				box-card
				col-12 col-md-4 col-lg-4
				d-flex
				flex-column
				align-items-center
				m-2
			"
			style="max-height: 800px; overflow-y: auto"
			:body-style="{ width: '100%' }"
		>
			<div slot="header" class="clearfix">
				<h4 class="text-center">Podsumowanie</h4>
			</div>
			<div class="col-12 d-flex flex-column align-items-center">
				<bill />
			</div>
		</el-card>
	</div>
</template>
<script>
import { mapActions } from "vuex";
import { cars } from "../data/vehicles.json";
import CarData from "./CarData";
import Bill from "./Bill";
export default {
	data() {
		return {
			cars: cars,
			pickedCar: ""
		};
	},
	methods: {
		...mapActions(["setCarInfo"]),
		handleSelect(carInfo) {
			this.setCarInfo(carInfo);
		},
		querySearch(queryString, cb) {
			const cars = this.cars;
			const results = queryString
				? cars.filter(this.createFilter(queryString))
				: cars;
			cb(results);
		},
		createFilter(queryString) {
			return (car) =>
				car.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
		},
		calculate() {}
	},
	components: {
		CarData,
		Bill
	}
};
</script>
