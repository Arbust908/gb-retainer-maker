<template>
  <article
    class="border-4 border-white rounded-xl flex justify-center items-center h-20 w-20"
  >
    <span class="text-xs">{{ text }}</span>
  </article>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Level 1'
    }
  }
}
</script>
