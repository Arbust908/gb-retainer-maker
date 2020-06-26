<template>
  <article
    :style="backgroundImg"
    class="rounded-xl border-8 border-orange-700 overflow-hidden bg-center bg-cover bg-no-repeat relative transform transition duration-300 ease-in-out scale-75 sm:scale-100"
    style="width: 380px; height: 572px"
  >
    <aside class="absolute inset-0 bg-orange-600 opacity-75 z-10" />
    <section class="pt-4 relative z-20" style="background-color:rgba()">
      <header
        :class="textSize"
        class="text-white text-center mt-3 mx-4 font-spacial italic"
      >
        "I thought adventuring would be more dragons and maidens, you know?
        Like... less ghouls..."
      </header>
      <div class="flex flex-wrap pt-4 px-6">
        <BackSlot v-for="(slot, key) in slots" :key="key" />
      </div>
    </section>
  </article>
</template>
<script>
import BackSlot from '~/components/retainers/BackSlot'
export default {
  components: {
    BackSlot
  },
  props: {
    text: {
      type: String,
      default: 'I was stunt'
    },
    slots: {
      type: Number,
      default: 12
    }
  },
  computed: {
    backgroundImg() {
      return `background-image: url(${this.retainerSrc})`
    },
    retainerSrc() {
      return require('~/assets/images/blade_armor_warriors.jpg')
    },
    textSize() {
      const textLong = this.text.length
      return textLong < 10
        ? 'text-2xl'
        : textLong < 20
        ? 'text-lg'
        : textLong < 30
        ? 'text-sm'
        : textLong < 40
        ? 'text-xs'
        : 'text-2xs'
    }
  }
}
</script>
