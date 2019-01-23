<template>
  <div class="about">
    <h1 class="title text-xl text-indigo hover:text-indigo-dark text-center py-8">About us</h1>
    <div class="container mx-auto px-6 pb-8">
      Lorem ipsum dolor sit amet, vix eu salutatus contentiones. Ei nam augue fabellas deseruisse,
      ea ludus nobis noluisse est. Oporteat sententiae eum te, exerci delectus dissentias te vim.
      Sea zril gloriatur et, vis apeirian volutpat no.
      Debet discere rationibus sea ei, ex soleat suscipiantur eam. Enim integre fierent sit ut.
      Ex agam dicam eos, vivendo appareat nam et. Eius possit et quo, eam alterum appetere placerat cu.
      Eos dico ornatus disputationi ei. Est homero nonumy eruditi ex, duo te feugiat scriptorem,
      in minimum omnesque pertinacia vel. Iudico nostro mandamus qui in, nominati appellantur
      definitionem ut mea. Ne utamur aperiri virtute eum, impetus aperiri appetere ex nec.
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.about {
  .title {
    &::after {
      content: '';
      width: 30px;
      position: relative;
      background-color: #6574cd;
      height: 5px;
    }
  }
}
</style>
