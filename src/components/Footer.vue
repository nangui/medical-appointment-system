<template>
  <div id="footer"
    class="flex flex-col md:flex-row py-2 md:py-6 px-16 justify-between align-middle bg-black text-white">
    <div>
      <h1>Medico</h1>
    </div>
    <div class="flex justify-between my-4 sm:my-2">
      <a class="block" :href="facebook">
        <i class="la la-facebook-official la-2x text-white mx-4" aria-hidden="true"></i>
      </a>
      <a class="block" :href="twitter">
        <i class="la la-twitter la-2x text-white mr-4" aria-hidden="true"></i>
      </a>
      <a class="block" :href="linkedin">
        <i class="la la-linkedin la-2x text-white mr-4" aria-hidden="true"></i>
      </a>
      <a class="block" :href="googlePlus">
        <i class="la la-google-plus la-2x text-white mr-4" aria-hidden="true"></i>
      </a>
    </div>
    <div class="md:my-2">
      <span class="block">{{ signature }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    facebookUrl: String,
    googlePlusUrl: String,
    twitterUrl: String,
    linkedinUrl: String,
    authorName: String
  },
  computed: {
    facebook: function () {
      return this.facebookUrl || '#'
    },
    twitter: function () {
      return this.twitterUrl || '#'
    },
    googlePlus: function () {
      return this.googlePlusUrl || '#'
    },
    linkedin: function () {
      return this.linkedinUrl || '#'
    },
    signature: function () {
      return `${this.authorName} ${1900 + (new Date()).getYear()}. All Rights Reserved.`
    }
  },
  data () {
    return {}
  }
}
</script>
