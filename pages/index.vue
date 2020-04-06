<template>
  <div class="mx-auto">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
        gb-retainer-maker
      </div>
      <div class="px-4 py-5 sm:p-6 flex">
        <RetainerCard class="mr-6" />
        <BackCard />
      </div>
      <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
        <!-- Content goes here -->
        <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
      </div>
    </div>
  </div>
</template>

<script>
import RetainerCard from '~/components/retainers/RetainerCard'
import BackCard from '~/components/retainers/BackCard'

export default {
  components: {
    RetainerCard,
    BackCard
  }
}
</script>
