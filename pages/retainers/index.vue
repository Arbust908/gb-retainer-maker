<template>
  <main class="mx-auto">
    <section class="py-5 sm:p-6 flex flex-wrap justify-center">
      {{ retainer }}
      <RetainerCard id="front" ref="front" class="m-4 shadow-xl" />
      <BackCard id="back" ref="back" class="m-4 shadow-xl" />
    </section>
    <section class="border-t border-gray-200 px-4 py-4 sm:px-6">
      <button class="btn btn__main" @click="print">
        printMe
      </button>
      <nuxt-link to="/retainers/create" class="btn btn__alter">
        Edit
      </nuxt-link>
    </section>
    <section>
      <img v-if="output" class="w-full mx-4" :src="output.front" />
      <img v-if="output" class="w-full mx-4" :src="output.back" />
    </section>
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
      retainer: (state) => state.retainers.active
    })
  },
  methods: {
    async print() {
      const front = document.getElementById('front')
      const back = document.getElementById('front')
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: 'dataURL'
      }
      this.output = {
        front: await this.$html2canvas(front, options),
        back: await this.$html2canvas(back, options)
      }
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
