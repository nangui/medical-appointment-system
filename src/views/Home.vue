<template>
  <div class="home">
    <Header
      title="It's easy to make an appointment here."
      subtitle="Let's get started with the basic things"/>
    <about />
    <service/>
    <slider/>
    <take-care-of-your-child/>
    <virtual-tour-at-our-office/>
    <pregnancy-with/>
    <video-section/>
    <about-doctor/>
    <testimonials/>
    <training/>
    <contact
      facebookUrl='https://www.facebook.com/adonai.nangui'
      twitterUrl='https://twitter.com/NanguiAdonai'
      linkedinUrl='https://www.linkedin.com/in/adonai-nangui/'
      googlePlusUrl='https://plus.google.com/105894881863229439418?hl=fr'/>
    <Footer
      facebookUrl='https://www.facebook.com/adonai.nangui'
      twitterUrl='https://twitter.com/NanguiAdonai'
      linkedinUrl='https://www.linkedin.com/in/adonai-nangui/'
      googlePlusUrl='https://plus.google.com/105894881863229439418?hl=fr'
      authorName='Adonai Nangui'/>
    <BackTop>
      <div class="bg-grey-darkest rounded text-center font-indigo md:text-white">
        <i class="zmdi zmdi-long-arrow-up"></i>
      </div>
    </BackTop>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Service from '@/components/Service.vue'
import Slider from '@/components/Slider.vue'
import TakeCareOfYourChild from '@/components/services/TakeCareOfYourChild.vue'
import VirtualTourAtOurOffice from '@/components/services/VirtualTourAtOurOffice.vue'
import PregnancyWith from '@/components/services/PregnancyWith.vue'
import VideoSection from '@/components/VideoSection.vue'
import AboutDoctor from '@/components/AboutDoctor.vue'
import Testimonials from '@/components/Testimonials.vue'
import Training from '@/components/Training.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    About,
    Service,
    Slider,
    TakeCareOfYourChild,
    VirtualTourAtOurOffice,
    PregnancyWith,
    VideoSection,
    AboutDoctor,
    Testimonials,
    Training,
    Contact,
    Footer
  }
}
</script>
