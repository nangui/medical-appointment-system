<template>
  <div class="header bg-center bg-no-repeat bg-cover h-screen w-screen">
    <div class="overlay w-full h-full flex flex-col">
      <nav class="flex items-center justify-between flex-wrap bg-transparent p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span class="font-semibold text-xl tracking-tight">Medico</span>
        </div>
        <div class="block lg:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div id="menu" :class="open ? 'block': 'hidden'"
          class="band w-full flex-grow lg:flex lg:items-center lg:w-auto z-50">
          <div class="text-sm lg:flex-grow">
            <a href="#about-us" v-smooth-scroll
              class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-white hover:text-grey">
              About
            </a>
            <a href="#service" v-smooth-scroll
              class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-white hover:text-grey">
              Services
            </a>
            <a href="#video-section" v-smooth-scroll
              class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-white hover:text-grey">
              Insurance
            </a>
            <a href="#testimonial" v-smooth-scroll
              class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-white hover:text-grey">
              Testimonials
            </a>
            <a href="#contact" v-smooth-scroll
              class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-white hover:text-grey">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div class="flex-auto flex flex-col justify-center items-center md:items-start p-12">
        <h1>{{ title }}</h1>
        <span> {{ subtitle }} </span>
        <div class="w-100 md:w-2/5 sm:w-4/5 sm:self-center md:self-start bg-white my-2 sm:my-4 md:my-6 lg:my-8 px-5 pt-5 shadow sm:shadow-md md:shadow-lg rounded">
          <h3 class="font-bold text-left">What's is the patient name?</h3>
          <div class="my-3">
            <input
              class="bg-grey-lighter appearance-none border-2
              border-grey-lighter rounded w-full py-2 px-4 text-grey-darker
              leading-tight focus:outline-none focus:bg-white focus:border-purple"
              id="inline-full-name" type="text" value="i.e. Ngor Seck">
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase text-left tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                Select her gender
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-state">
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-4">
              <label class="block uppercase text-left tracking-wide text-grey-darker text-xs font-semibold mb-2" for="grid-zip">
                How old is patient?
              </label>
              <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-zip" type="number" placeholder="1" min="1">
            </div>
            <div class="w-full md:1/2 px-3 mb-10 md:mb-4">
              <button class="bg-indigo hover:bg-indigo-dark py-2 px-4 text-white w-full">
                Let's start finding a doctor now
                <Icon type="ios-arrow-forward" />
              </button>
            </div>
          </div>
        </div>
        <div class="span-icon w-full pt-5 sm:pt-10">
          <Icon type="ios-arrow-down" size="32" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    subtitle: String
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  background-image: url('../assets/background.jpg');
  .overlay {
    background-color: rgba(101, 117, 205, 0.9);
  }

  .span-icon i {
    top: 60px;
    left: calc(50%);
  }

  .block.band {
    background: #fff;

    a.block {
      color: #6574cd;
      &:hover {
        color: grey;
      }
    }

    .btn-book {
      background-color: #6574cd;
      border-color: #6574cd;
      color: #fff;
      margin-bottom: 2px;
      transition: all .3s linear;

      &:hover {
        color: #6574cd;
      }
    }
  }
}
</style>
