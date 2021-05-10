<template>
	<div class="col-12">
		<h5 class="text-center">Dane samochodu</h5>
		<p class="mb-1">
			Nazwa: <strong>{{ carInfo.name }}</strong>
		</p>
		<p class="mb-1">Cena: ${{ carInfo.price }}</p>
		<p class="mb-1">Kategoria: {{ carInfo.name }}</p>
		<div class="col-12 d-flex flex-wrap">
			<div class="col-12 col-md-6 col-lg-4">
				<div>
					Silnik:
					<el-checkbox-group v-model="engine" size="small" max="1">
						<el-checkbox
							class="my-1 mx-1"
							v-for="engine in carInfo.engine"
							:key="engine"
							:label="engine"
							border
						></el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4">
				<div>
					Hamulce:
					<el-checkbox-group v-model="brakes" size="small" max="1">
						<el-checkbox
							class="my-1 mx-1"
							v-for="brakes in carInfo.brakes"
							:key="brakes"
							:label="brakes"
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
						max="1"
					>
						<el-checkbox
							class="my-1 mx-1"
							v-for="suspension in carInfo.suspension"
							:key="suspension"
							:label="suspension"
							border
						></el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
			<div class="col-12 col-md-6 col-lg-4">
				<div>
					Skrzynia biegów:
					<el-checkbox-group
						v-model="transmissions"
						size="small"
						max="1"
					>
						<el-checkbox
							class="my-1 mx-1"
							v-for="transmission in carInfo.transmission"
							:key="transmission"
							:label="transmission"
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
							v-for="mod in visualMods"
							:key="mod"
							:label="mod"
							border
						></el-checkbox>
					</el-checkbox-group>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			engine: [],
			suspension: [],
			transmission: [],
			brakes: [],
			visuals: [],
			visualMods: [
				"Motocykle",
				"Maska",
				"Dach",
				"Grill",
				"Wydech",
				"Fotel",
				"Zderzak przedni",
				"Zderzak tylny",
				"Spoiler",
				"Progi/błotniki",
				"Nakładki na dach",
				"Klatka bezpieczeństwa",
				"Body",
				"Wózek do wheele",
				"Niestandardowe opony",
				"Benny's"
			]
		};
	},
	computed: {
		...mapGetters(["carInfo"])
	}
};
</script>
