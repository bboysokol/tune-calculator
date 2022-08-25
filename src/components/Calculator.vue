<template>
  <div class="col-12 d-flex justify-content-center flex-column flex-md-row">
    <el-card
      class="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-center m-2 calculator-card"
      :body-style="{ width: '100%' }"
    >
      <div slot="header" class="clearfix">
        <h4 class="text-center">
          <strong>Tune Calculator - {{ company }}</strong>
        </h4>
      </div>
      <div class="col-12 d-flex flex-column align-items-center">
        <el-autocomplete
          class="inline-input"
          v-model="pickedCar"
          clearable
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
      class="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center m-2 calculator-card"
      :body-style="{ width: '100%' }"
    >
      <div slot="header" class="clearfix">
        <h4 class="text-center"><strong>Podsumowanie</strong></h4>
      </div>
      <div class="col-12 d-flex flex-column align-items-center">
        <bill />
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { cars } from '../data/vehicles.json';
import { isDoable } from '../helpers/categoryHelper';
import CarData from './CarData';
import Bill from './Bill';

export default {
  data() {
    return {
      cars: cars,
      pickedCar: '',
    };
  },
  methods: {
    ...mapActions(['setCarInfo', 'clearCarData']),
    handleSelect(carInfo) {
      this.setCarInfo(carInfo);
    },
    querySearch(queryString, cb) {
      const cars = this.cars.filter((car) => isDoable(this.company, car.category));
      const results = queryString ? cars.filter(this.createFilter(queryString)) : cars;
      cb(results);
    },
    createFilter(queryString) {
      return (car) => car.name.toLowerCase().includes(queryString.toLowerCase());
    },
  },
  computed: {
    ...mapGetters(['company']),
  },
  watch: {
    pickedCar(newVal) {
      if (!newVal) this.clearCarData();
    },
  },
  components: {
    CarData,
    Bill,
  },
};
</script>
<style>
.calculator-card {
  max-height: 800px !important;
  overflow-y: auto !important;
  border: none !important;
}
</style>
