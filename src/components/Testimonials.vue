<template>
  <div class="w-full md:px-24 sm:px-12 px-2 bg-indigo-lightest text-white pb-4">
    <h1 class="title text-xl text-indigo hover:text-indigo-dark text-center pt-8">Testimonials</h1>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(customer, index) in customers" :key="index">
        <div class="h-220 flex flex-col content-around justify-around pb-8 px-16">
          <p class="my-4 text-grey-darkest">
            {{ customer.words }}
          </p>
          <h3 class="tag-name italic font-semibold text-black">{{ customer.name }}</h3>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      index: 0,
      swiperOption: {
        spaceBetween: 30,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        }
      },
      customers: [
        {
          words: `Oporteat sententiae eum te, exerci delectus dissentias te vim. Sea zril gloriatur et,
          vis apeirian volutpat no. Debet discere rationibus sea ei, ex soleat suscipiantur eam.
          Enim integre fierent sit ut. Ex agam dicam eos, vivendo appareat nam et. Eius possit et quo,
          eam alterum appetere placerat cu. Eos dico ornatus disputationi ei.`,
          name: 'Serge BOISSY'
        },
        {
          words: `Oporteat sententiae eum te, exerci delectus dissentias te vim. Sea zril gloriatur et,
          vis apeirian volutpat no. Debet discere rationibus sea ei, ex soleat suscipiantur eam.
          Enim integre fierent sit ut. Ex agam dicam eos, vivendo appareat nam et.
          Eius possit et quo, eam alterum appetere placerat cu. Eos dico ornatus disputationi ei.`,
          name: 'Ngor SECK'
        },
        {
          words: `Oporteat sententiae eum te, exerci delectus dissentias te vim.
          Sea zril gloriatur et, vis apeirian volutpat no. Debet discere rationibus sea ei,
          ex soleat suscipiantur eam. Enim integre fierent sit ut. Ex agam dicam eos,
          vivendo appareat nam et. Eius possit et quo, eam alterum appetere placerat cu.
          Eos dico ornatus disputationi ei.`,
          name: 'Nelly ILIMBOU'
        },
        { words: `Oporteat sententiae eum te, exerci delectus dissentias te vim.
          Sea zril gloriatur et, vis apeirian volutpat no. Debet discere rationibus sea ei,
          ex soleat suscipiantur eam. Enim integre fierent sit ut. Ex agam dicam eos,
          vivendo appareat nam et. Eius possit et quo, eam alterum appetere placerat cu.
          Eos dico ornatus disputationi ei.`,
          name: 'Deesse TCHICAYA'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.swiper-container {
  height: 220px;
  background-color: inherit;
}

.h-220 {
  height: 220px;
}

.tag-name {
  &::before,
  &::after {
    position: relative;
  }
  &::before {
    content: "~ ";
  }
  &::after {
    content: " ~";
  }
}
</style>
