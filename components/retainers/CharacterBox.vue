<template>
  <article>
    <h5 class="text-xs">{{ type }}</h5>
    <h2 class="text-2xl font-semibold -mt-1">{{ name }}</h2>
    <h3 class="text-lg font-semibold -mt-1">{{ armor }}</h3>
  </article>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Rojak'
    },
    type: {
      type: String,
      default: 'Half-Elf Champion'
    },
    armor: {
      type: String,
      default: 'AC 17'
    }
  }
}
</script>
