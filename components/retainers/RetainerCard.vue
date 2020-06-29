<template>
  <article
    v-if="retainer"
    class="rounded-xl border-8 border-orange-700 overflow-hidden"
    style="width: 380px; height: 572px"
  >
    <section class="relative">
      <img
        :src="retainerSrc"
        alt="Retainer Image"
        class="object-cover rounded-t-lg"
        style="height: 240px"
      />
      <section
        class="w-full flex justify-between p-4 absolute top-0 text-white"
      >
        <CharacterBox
          :name="retainer.name"
          :type="retainer.culture"
          :armor="retainer.AC"
        />
        <LevelBox :level="retainer.level" />
      </section>
    </section>
    <section
      class="border-t-8 border-orange-700 relative z-20 bg-gray-200 h-full"
    >
      <MidStatBox
        :skills="retainer.selected_skills"
        :special="{
          active: retainer.worst_is_active,
          title: 'Disadvantage',
          stat: retainer.worst ? retainer.worst.stat : null
        }"
        :main-skills="[retainer.first, retainer.second]"
      />
      <article class="p-4">
        <SkillSection />
        <SkillSection />
      </article>
    </section>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import SkillSection from '~/components/retainers/SkillSection'
import LevelBox from '~/components/retainers/LevelBox'
import CharacterBox from '~/components/retainers/CharacterBox'
import MidStatBox from '~/components/retainers/MidStatBox'

export default {
  components: {
    SkillSection,
    LevelBox,
    CharacterBox,
    MidStatBox
  },
  computed: {
    retainerSrc() {
      return require('~/assets/images/blade_armor_warriors.jpg')
    },
    ...mapState({
      retainer: (state) => state.retainers.active
    })
  }
}
</script>
