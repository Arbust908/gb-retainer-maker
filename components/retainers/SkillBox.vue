<template>
  <article class="rounded border border-gray-500 bg-white p-2 mb-2 text-sm">
    <header class="flex justify-between">
      <div class="flex items-center">
        <span class="font-bold mr-2"> {{ name }} </span>
        <CircleIcon
          v-for="(time, key) in times"
          :key="key"
          :size="3"
          class="mr-1"
        />
      </div>
      <div>
        <span class="italic">
          {{ type }}
        </span>
      </div>
    </header>
    <main>
      <p class="text-xs" v-html="description" />
    </main>
  </article>
</template>
<script>
import CircleIcon from '~/components/icons/Circle'
export default {
  components: {
    CircleIcon
  },
  props: {
    name: {
      type: String,
      default: 'Action'
    },
    times: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'Action'
    },
    description: {
      type: String,
      default: 'You take an <span class="font-bold italic">Action</span>'
    }
  }
}
</script>
