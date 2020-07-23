<template>
  <main class="error-box">
    <h1>
      {{ statusCode }}
    </h1>
    <h2>
      {{ message }}
    </h2>
    <p>@{{ error.path || '' }}</p>
    <nuxt-link to="/">
      Back to Home
    </nuxt-link>
  </main>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    }
  },
  head() {
    return {
      title: `${this.statusCode} || GatoBuho`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.message
        },
        { hid: 'themeColor', name: 'theme-color', content: '#e53e3e' }
      ]
    }
  }
}
</script>

<style scoped>
.error-box {
  @apply m-10 bg-red-100 rounded flex flex-col justify-center items-center font-mono text-red-600;
}
h1 {
  @apply text-4xl font-bold;
}
h2 {
  @apply text-2xl;
}
p {
  @apply font-light uppercase px-2 py-1 bg-red-200 rounded;
}
a {
  @apply font-bold px-6 py-2 rounded mt-4 font-sans border border-blue-600 text-blue-600 transition duration-300 transform;
}
a:hover {
  @apply text-white bg-blue-600 scale-110 shadow-md;
}
</style>
