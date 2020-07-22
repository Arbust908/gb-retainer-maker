<template>
  <form class="mb-3">
    <label for="action_name">
      <section class="flex justify-between mb-2">
        <input
          v-model="name"
          class="w-1/2 rounded border placeholder-material-400 px-4 py-2 mr-2"
          type="text"
          name="action_name"
        />
        <select
          name="action_cost"
          class="w-1/2 ml-2 rounded border px-4 py-2 form-select"
        >
          <option selected disabled>Cost</option>
          <option value="a">Action</option>
          <option value="ba">Bonus Action</option>
          <option value="r">Reaction</option>
          <option value="fa">Free Action</option>
          <option value="sr">Short Rest</option>
          <option value="lr">Long Rest</option>
          <option value="i">Initiative</option>
        </select>
      </section>
      <textarea
        v-model="description"
        name="action_description"
        rows="3"
        placeholder="Description"
        class="w-full rounded border px-4 py-2"
      >
      </textarea>
    </label>
    <label for="daily">
      <input v-model="daily_is_active" type="checkbox" name="daily" />
      <span>Daily limit</span>
    </label>
    <label for="daily">
      <input v-model="daily" type="number" />
    </label>
  </form>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    cost: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    daily: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      daily_is_active: false
    }
  }
}
</script>
