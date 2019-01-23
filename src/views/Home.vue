<template>
  <div class="home">
    <Header
      title="It's easy to make an appointment here."
      subtitle="Let's get started with the basic things"/>
    <about />
    <service/>
    <slider/>
    <take-care-of-your-child/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Service from '@/components/Service.vue'
import Slider from '@/components/Slider.vue'
import TakeCareOfYourChild from '@/components/services/TakeCareOfYourChild.vue'

export default {
  name: 'home',
  components: {
    Header,
    About,
    Service,
    Slider,
    TakeCareOfYourChild
  }
}
</script>
