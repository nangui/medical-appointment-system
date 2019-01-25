<template>
  <div class="w-full md:px-24 sm:px-12 px-2 bg-black text-white py-4">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <div class="h-220 flex flex-col content-around justify-around p-16">
          <Rate disabled v-model="rateValue"/>
          <p class="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quis minus voluptatem fugiat
            temporibus aperiam facilis qadipisci mollitia saepe pariatur.
          </p>
          <h3>Serge BOISSY</h3>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-220 flex flex-col content-around justify-around p-16">
          <Rate disabled v-model="rateValue"/>
          <p class="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quis minus voluptatem fugiat
            temporibus aperiam facilis qadipisci mollitia saepe pariatur.
          </p>
          <h3>Ngor SECK</h3>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-220 flex flex-col content-around justify-around p-16">
          <Rate disabled v-model="rateValue"/>
          <p class="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quis minus voluptatem fugiat
            temporibus aperiam facilis qadipisci mollitia saepe pariatur.
          </p>
          <h3>Nelly ILIMBOU</h3>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-220 flex flex-col content-around justify-around p-16">
          <Rate disabled v-model="rateValue"/>
          <p class="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quis minus voluptatem fugiat
            temporibus aperiam facilis qadipisci mollitia saepe pariatur.
          </p>
          <h3>Deesse TCHICAYA</h3>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-button-prev" slot="button-prev" @click="slidePrev"></div>
      <div class="swiper-button-next" slot="button-next" @click="slideNext"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      swiperOption: {},
      rateValue: 5
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted: function () {
    this.swiper.slideTo(this.index, 1000, false)
  },
  methods: {
    callback () {},
    slidePrev () {
      (this.index === 0) ? this.index = this.index : this.index--
      this.swiper.slideTo(this.index, 1000, false)
    },
    slideNext () {
      (this.index === 3) ? this.index = this.index : this.index++
      this.swiper.slideTo(this.index, 1000, false)
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-container {
  height: 220px;
  background-color: inherit;
}

.h-220 {
  height: 220px;
}
</style>
