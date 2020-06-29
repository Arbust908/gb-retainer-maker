<template>
  <article
    :style="backgroundImg"
    class="rounded-xl border-8 border-orange-700 overflow-hidden bg-center bg-cover bg-no-repeat relative"
    style="width: 380px; height: 572px"
  >
    <aside class="absolute inset-0 bg-orange-600 opacity-75 z-10" />
    <section class="pt-4 relative z-20" style="background-color:rgba()">
      <header
        :class="textSize"
        class="text-white text-center mt-3 mx-4 font-spacial italic"
      >
        "{{ retainer.quote }}"
      </header>
      <div class="flex flex-wrap pt-4 px-6">
        <BackSlot v-for="(slot, key) in retainer.slots" :key="key" />
      </div>
    </section>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import BackSlot from '~/components/retainers/BackSlot'

export default {
  components: {
    BackSlot
  },
  computed: {
    ...mapState({
      retainer: (state) => state.retainers.active
    }),
    backgroundImg() {
      return `background-image: url(${this.retainerSrc})`
    },
    retainerSrc() {
      return require('~/assets/images/blade_armor_warriors.jpg')
    },
    textSize() {
      const textLong = this.retainer.quote.length
      return textLong < 20
        ? 'text-2xl'
        : textLong < 30
        ? 'text-lg'
        : textLong < 40
        ? 'text-sm'
        : textLong < 50
        ? 'text-xs'
        : 'text-2xs'
    }
  }
}
</script>
