<template>
  <div id="service" class="service bg-indigo-lightest">
    <h1 class="title text-xl text-indigo hover:text-indigo-dark text-center py-8">Our Services</h1>
    <div class="container mx-auto flex content-start flex-wrap pb-8">
      <div v-for="(service, index) in services" :key="index"
        class="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col justify-center align-middle">
        <div class="img-content bg-center bg-no-repeat bg-cover text-grey-darker rounded h-64 shadow hover:shadow-md"
          :style="{ 'background-image': `url(${  require('@/assets/'+service.imgUrl) })` }"
          :title="service.title">
        </div>
        <h3 class="font-bold my-2">{{ service.title }}</h3>
        <a href="#">
          <span class="text-grey-darker uppercase inline-block mr-2">
            See details
          </span>
          <Icon type="ios-arrow-round-forward" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',
  data () {
    return {
      services: []
    }
  },
  mounted () {
    this.getServices()
  },
  methods: {
    getServices () {
      this.services = this.$store.getters.allServices
    }
  }
}
</script>

<style lang="scss" scoped>
.img-content:hover {
  cursor: pointer;
  transition: all .3s linear;
  animation: pulse .5s linear forwards;
}
@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(3deg);
    transform: scale(1) rotate(3deg);
  }
}
</style>
