<template>
  <div>
    <div class="layout">
      <NavBar />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/layout/NavBar'
import Footer from '~/components/layout/Footer'
export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped>
.layout {
  grid-template-rows: 64px 1fr 120px;
  @apply min-h-screen w-full grid grid-flow-col;
}
</style>
