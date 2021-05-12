<template>
	<div class="col-12">
		<h5 class="text-center">Dane samochodu</h5>
		<p class="mb-1">
			Nazwa: <strong>{{ carInfo.name }}</strong>
		</p>
		<p class="mb-1">Cena: ${{ carInfo.price }}</p>
		<p class="mb-1">Kategoria: {{ carInfo.name }}</p>
		<h5 class="text-center">Tuning</h5>
		<div class="col-12 d-flex flex-wrap">
			<div class="col-12 col-md-6 col-lg-4">
				<div>
					Silnik:
					<el-checkbox-group v-model="engine" size="small" :max="1">
						<el-checkbox
							class="my-1 mx-1"
							v-for="item in availableMods.engine.slice(
								0,
								carInfo.engine
							)"
							:key="item.stage"
							:label="item.stage"
							@change="(ev) => updateParts(ev, item)"
							border
						></el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4">
				<div>
					Hamulce:
					<el-checkbox-group v-model="brakes" size="small" :max="1">
						<el-checkbox
							class="my-1 mx-1"
							v-for="item in availableMods.brakes.slice(
								0,
								carInfo.brakes
							)"
							:key="item.stage"
							:label="item.stage"
							@change="(ev) => updateParts(ev, item)"
							border
						></el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4">
				<div>
					Zawieszenie:
					<el-checkbox-group
						v-model="suspension"
						size="small"
						:max="1"
					>
						<el-checkbox
							class="my-1 mx-1"
							v-for="item in availableMods.suspension.slice(
								0,
								carInfo.suspension
							)"
							:key="item.stage"
							:label="item.stage"
							@change="(ev) => updateParts(ev, item)"
							border
						></el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4">
				<div>
					Skrzynia biegów:
					<el-checkbox-group
						v-model="transmission"
						size="small"
						:max="1"
					>
						<el-checkbox
							class="my-1 mx-1"
							v-for="item in availableMods.transmission.slice(
								0,
								carInfo.transmission
							)"
							:key="item.stage"
							:label="item.stage"
							@change="(ev) => updateParts(ev, item)"
							border
						></el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4">
				<div>
					Turbo:
					<el-checkbox-group v-model="turbo" size="small" :max="1">
						<el-checkbox
							class="my-1 mx-1"
							v-for="item in availableMods.turbo"
							:key="item.stage"
							:label="item.stage"
							@change="(ev) => updateParts(ev, item)"
							border
						></el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
			<div class="col-12">
				<div>
					Elementy wizualne:
					<el-checkbox-group v-model="visuals" size="small">
						<el-checkbox
							class="my-1 mx-1"
							v-for="item in availableMods.visualParts"
							:key="item.id"
							:label="item.name"
							@change="(ev) => updateParts(ev, item)"
							border
						></el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { visualParts } from "../helpers/visualParts";
import {
	engine,
	turbo,
	suspension,
	brakes,
	transmission
} from "../helpers/mechanicalParts";
export default {
	data() {
		return {
			availableMods: {
				engine,
				turbo,
				suspension,
				brakes,
				transmission,
				visualParts
			},
			engine: [],
			suspension: [],
			transmission: [],
			brakes: [],
			turbo: [],
			visuals: [],
			parts: []
		};
	},
	computed: {
		...mapGetters(["carInfo"])
	},
	methods: {
		...mapActions(["setCarTune"]),
		updateParts(state, value) {
			if (state) this.parts.push(value);
			else {
				this.parts.splice(
					this.parts.findIndex((item) => item.name === value.name),
					1
				);
			}
		}
	},
	watch: {
		parts(newVal) {
			this.setCarTune(newVal);
		}
	}
};
</script>
