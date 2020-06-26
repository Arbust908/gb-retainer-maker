<template>
  <main class="mx-auto">
    <section class="py-5 sm:p-6 flex flex-wrap justify-center">
      <RetainerCard
        id="front"
        ref="front"
        class="mb-4 transform transition duration-300 ease-in-out scale-75 sm:scale-100"
      />
      <BackCard
        class="hidden transform transition duration-300 ease-in-out scale-75 sm:scale-100"
      />
    </section>
    <section class="border-t border-gray-200 px-4 py-4 sm:px-6">
      <button class="btn btn__main" @click="print">
        printMe
      </button>
      <nuxt-link to="/retainers/create" class="btn btn__alter">
        Edit
      </nuxt-link>
    </section>
    <img v-if="output" :src="output" />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import RetainerCard from '~/components/retainers/RetainerCard'
import BackCard from '~/components/retainers/BackCard'

export default {
  components: {
    RetainerCard,
    BackCard
  },
  data() {
    return {
      output: null
    }
  },
  computed: {
    ...mapState({
      retainer: (state) => state.retainer.active
    })
  },
  methods: {
    async print() {
      const el = document.getElementById('front')
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: 'dataURL'
      }
      this.output = await this.$html2canvas(el, options)
    }
  }
}
</script>

<style scoped>
.btn {
  @apply border-2 rounded transition ease-in duration-150 px-4 py-2 mr-4;
}
.btn__main {
  @apply border-main-500 text-secondary-100 bg-main-500;
}
.btn__alter {
  @apply border-main-500 text-main-500 bg-transparent;
}
.btn__main:hover {
  @apply text-main-500 bg-transparent;
}
.btn__alter:hover {
  @apply text-secondary-100 bg-main-500;
}
</style>
