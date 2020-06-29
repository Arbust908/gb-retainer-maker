<template>
  <article
    class="border-4 border-white rounded-xl flex justify-center items-center h-20 w-20"
  >
    <span class="text-xs">Level {{ level }}</span>
  </article>
</template>
<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  }
}
</script>
