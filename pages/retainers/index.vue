<template>
  <div class="mx-auto">
    <section v-if="output">
      <img :src="output" />
    </section>
    <section class="bg-white overflow-hidden shadow rounded-lg">
      <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
        gb-retainer-maker
      </div>
      <div class="px-4 py-5 sm:p-6 flex">
        <RetainerCard id="front" ref="front" class="mr-6" />
        <BackCard />
      </div>
      <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
        <button
          class="border-2 border-blue-500 text-blue-500 bg-transparent rounded hover:text-white hover:bg-blue-500 transition ease-in duration-150 px-4 py-2 mr-4"
          @click="print"
        >
          printMe
        </button>
        <nuxt-link
          to="/retainers/create"
          class="border-2 border-purple-500 text-purple-500 bg-transparent rounded hover:text-white hover:bg-purple-500 transition ease-in duration-150 px-4 py-2 mr-4"
          @click="print"
        >
          Edit
        </nuxt-link>
      </div>
      <img v-if="output" :src="output" />
    </section>
  </div>
</template>

<script>
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
