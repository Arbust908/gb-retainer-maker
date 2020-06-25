<template>
  <main>
    <Hero />
    <Features />
  </main>
</template>

<script>
import Hero from '~/components/home/Hero'
import Features from '~/components/home/Features'

export default {
  components: {
    Hero,
    Features
  },
  data() {
    return {
      output: null
    }
  },
  methods: {}
}
</script>
