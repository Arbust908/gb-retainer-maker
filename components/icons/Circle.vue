<template>
  <svg
    :class="iconSize"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <g>
      <path
        class="fill-current"
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 424c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z"
      />
      <path
        class="opacity-0"
        d="M256 432c-97.06 0-176-79-176-176S158.94 80 256 80s176 79 176 176-78.94 176-176 176z"
      />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 4
    }
  },
  computed: {
    iconSize() {
      return 'w-' + this.size + ' h-' + this.size
    }
  }
}
</script>
