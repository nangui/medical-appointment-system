<template>
  <div class="bg-white flex flex-col sm:flex-col md:flex-row">
    <div class="bg-transparent p-5 bg-white w-full sm:w-100 md:w-2/3 border-r-2">
      <div class="mx-4">
        <div class="w-full md:w-2/3 flex flex-col justify-center content-center">
          <h3 class="mb-6 text-indigo text-2xl">Leave a comment</h3>
          <form action="" class="w- max-w-full">
            <div class="mb-4">
              <input
                class="shadow
                  appearance-none border rounded w-full py-2 px-3
                  text-grey-darker leading-tight focus:outline-none
                  focus:shadow-outline" id="name" type="text" placeholder="Name Here">
            </div>
             <div class="mb-4">
              <input
                class="shadow
                  appearance-none border rounded w-full py-2 px-3
                  text-grey-darker leading-tight focus:outline-none
                  focus:shadow-outline" id="email" type="text" placeholder="Email Here">
            </div>
             <div class="mb-4">
              <textarea
                rows="8"
                class="shadow
                  appearance-none border rounded w-full py-2 px-3
                  text-grey-darker leading-tight focus:outline-none
                  focus:shadow-outline" id="message" type="text" placeholder="Write something"></textarea>
            </div>
            <div class="text-left">
              <button class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 rounded-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="block-right bg-transparent w-full sm:w-100 md:w-1/3">
      <div class="px-8 py-8 bg-indigo
        text-white w-64 md:-mt-8 md:-ml-32">
        <h3 class="font-bold mb-5">Contact Us</h3>
        <p class="mb-5">
          The supporting narratives confirmed the
          continued dedicationof general practice
          working to support people.
        </p>
        <div class="flex flex-col">
          <p class="mb-3 flex items-center">
            <i class="la la-map-marker la-2x mr-2" aria-hidden="true"></i>
            10500 Obelisque place, Dakar, Senegal
          </p>
          <p class="mb-3 flex items-center">
            <i class="la la-phone la-2x mr-2" aria-hidden="true"></i>
            (+221) 77 681 6079
          </p>
          <p class=" mb-3 flex items-center">
            <i class="la la-envelope la-2x mr-2" aria-hidden="true"></i>
            adonainangui03@gmail.com
          </p>
        </div>
        <div class="flex justify-start items-center">
          <a href="#" class="mr-3 bg-white rounded-full w-8 h-8 flex justify-center align-middle content-center">
            <i class="block self-center la la-linkedin la-2x" aria-hidden="true"></i>
          </a>
          <a href="#" class="mr-3 bg-white rounded-full w-8 h-8 flex justify-center align-middle content-center">
            <i class="block self-center la la-facebook-official la-2x" aria-hidden="true"></i>
          </a>
          <a href="#" class="mr-3 bg-white rounded-full w-8 h-8 flex justify-center align-middle content-center">
            <i class="block self-center la la-twitter la-2x" aria-hidden="true"></i>
          </a>
          <a href="#" class="bg-white rounded-full w-8 h-8 flex justify-center align-middle content-center">
            <i class="block self-center la la-google-plus la-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.block-right {
  background-image: url('../assets/contact_us.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
