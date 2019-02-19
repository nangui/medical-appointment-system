<template>
  <div id="doctor" class="flex flex-col-reverse sm:flex-row bg-white">
    <div class="w-screen sm:w-1/2 md:w-1/2 p-8 text-center">
      <img
        class="rounded-sm w-72 h-64 shadow-lg"
        src="../assets/dr-mukwege.jpg"
        alt="About Doctor Mukwege"
        title="About Doctor Mukwege">
    </div>
    <div class="w-screen sm:w-1/2 md:w-1/2 p-8 text-center flex flex-col justify-center">
      <h1 class="text-left font-bold mb-5">Why choose Dr. Mukwege</h1>
      <p class="text-center sm:text-left font-light mb-2">
        The most common lorem ipsum text reads as follows: Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
      </p>
      <ul class="text-center sm:text-left list-reset">
        <li v-for="(item, index) in items" :key="index" class="font-bold">
          <i class="zmdi zmdi-check text-green-dark zmdi-hc-2x mr-2"></i>
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        'lorem impsum dolor sit amet 1',
        'lorem impsum dolor sit amet 2',
        'lorem impsum dolor sit amet 3',
        'lorem impsum dolor sit amet 4'
      ]
    }
  }
}
</script>
