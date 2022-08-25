<template>
  <div class="col-12">
    <div class="col-12 d-flex justify-content-between">
      <div class="col-6"><strong>Nazwa części</strong></div>
      <div class="col-6 d-flex justify-content-between">
        <strong> <small> Robocizna(min) </small></strong>
        <strong>Cena</strong>
      </div>
    </div>
    <div v-for="part in carParts" :key="part.name" class="col-12 d-flex justify-content-between">
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
import { mapGetters } from 'vuex';
import { getFee } from '../helpers/feeHelper';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['carTune', 'carInfo', 'company']),
    carParts() {
      return this.carTune.map((item) => {
        let price = 0;

        if (this.carInfo.price >= 350000) {
          price = (item.price[2] ?? item.price) * 350000;
        } else if (this.carInfo.price >= 200000) {
          price = (item.price[1] ?? item.price) * this.carInfo.price;
        } else {
          price = (item.price[0] ?? item.price) * this.carInfo.price;
        }

        return {
          name: `${item.name} ${item.stage ? item.stage : ''}`,
          price: Math.round(price),
          fee: getFee(this.company, item.name),
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
    },
  },
};
</script>
<style></style>
