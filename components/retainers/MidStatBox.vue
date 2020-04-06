<template>
  <article
    class="rounded-full flex border-6 border-orange-700 justify-around mx-4 shadow -mt-8 bg-orange-700 text-white leading-tight"
  >
    <article
      class="bg-orange-900 rounded-l-full rounded-r justify-end flex w-1/2 p-1 pl-5 mr-1"
    >
      <div
        v-for="(skill, key) in mainSkills"
        :key="key"
        class="flex flex-col justify-center mr-2"
      >
        <h3 class="font-semibold text-lg">{{ skill.mod }}</h3>
        <span class="uppercase font-light">{{ skill.stat }}</span>
      </div>
      <div
        class="bg-orange-700 rounded-md flex flex-col justify-center p-1 items-center"
      >
        <h5 class="text-2xs font-bold">{{ special.title }}</h5>
        <span class="uppercase font-light">{{ special.stat }}</span>
      </div>
    </article>
    <article
      class="bg-orange-900 rounded-full rounded-l flex flex-col w-1/2 p-1 pr-4"
    >
      <h3 class="text-2xs">Skills</h3>
      <p class="text-xs">{{ skills }}</p>
    </article>
  </article>
</template>
<script>
export default {
  props: {
    skills: {
      type: String,
      default: 'All da Skillz'
    },
    special: {
      type: Object,
      default() {
        return { title: 'Disadvantage', stat: 'dex' }
      }
    },
    mainSkills: {
      type: Array,
      default() {
        return [
          { stat: 'con', mod: '+3' },
          { stat: 'str', mod: '+2' }
        ]
      }
    }
  }
}
</script>
