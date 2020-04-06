<template>
  <section>
    <h4 class="pb-2 text-sm">{{ title }}</h4>
    <SkillBox v-for="(skill, key) in skills" :key="key" v-bind="skill" />
  </section>
</template>
<script>
import SkillBox from '~/components/retainers/SkillBox'
export default {
  components: {
    SkillBox
  },
  props: {
    title: {
      type: String,
      default: 'Actions'
    },
    skills: {
      type: Array,
      default() {
        return [{}]
      }
    }
  }
}
</script>
