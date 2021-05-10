<template>
	<el-card
		class="
			box-card
			col-12 col-md-6 col-lg-6
			d-flex
			flex-column
			align-items-center
		"
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
			<div class="py-2"><car-data /></div>
			<div class="col-12 d-flex justify-content-end pt-3">
				<el-button
					@click="calculate"
					type="primary"
					plain
					:disabled="!calculate"
				>
					Oblicz
				</el-button>
			</div>
		</div>
	</el-card>
</template>
<script>
import { mapActions } from "vuex";
import { cars } from "../data/vehicles.json";
import CarData from "./CarData";
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
			var cars = this.cars;
			var results = queryString
				? cars.filter(this.createFilter(queryString))
				: cars;
			console.log(results);
			cb(results);
		},
		createFilter(queryString) {
			return (car) => {
				return (
					car.name
						.toLowerCase()
						.indexOf(queryString.toLowerCase()) === 0
				);
			};
		},
		calculate() {}
	},
	components: {
		CarData
	}
};
</script>
