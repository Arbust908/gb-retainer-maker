<template>
  <form>
    <multiselect v-model="value" :options="options"></multiselect>
  </form>
</template>
<script>
export default {
  data() {
    return {
      value: null,
      options: [
        'Acrobatics',
        'Animal Handling',
        'Arcana',
        'Athletics',
        'Deception',
        'History'
      ]
    }
  }
}
</script>
