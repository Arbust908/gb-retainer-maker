<template>
  <main
    class="w-full bg-material-300 mx-auto px-1 py-6 flex flex-wrap items-start justify-center"
  >
    {{ retainer }}
    <section class="w-full max-w-xs bg-material-50 rounded m-2">
      <header class="border-b px-4 pt-6 pb-2">
        <h2 class="font-bold text-2xl">Character</h2>
      </header>
      <main class="px-4 py-5">
        <h3 class="text-xl font-bold pb-5">Basics</h3>
        <form>
          <label for="name">
            <h5 class="mb-2">Character</h5>
            <input
              :value="retainer.name"
              class="w-full rounded border-2 placeholder-material-400 px-4 py-2 mb-2 focus:border-material-600"
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
          <label for="culture">
            <input
              :value="retainer.culture"
              class="w-full rounded border-2 placeholder-material-400 px-4 py-2 mb-6 focus:border-material-600"
              type="text"
              name="culture"
              placeholder="Culture & epithet"
            />
          </label>
          <label for="level" class="flex w-1/3 items-center  mb-2">
            <h5 class="w-1/2">Level</h5>
            <input
              :value="retainer.level"
              type="text"
              name="level"
              class="text-center border-2 border-material-600 px-2 py-2 w-1/2 rounded"
            />
          </label>
          <label for="AC" class="flex w-1/3 items-center  mb-2">
            <h5 class="w-1/2">AC</h5>
            <input
              :value="retainer.AC"
              type="text"
              name="AC"
              class="text-center border-2 border-material-600 px-2 py-2 w-1/2 rounded"
            />
          </label>
        </form>
      </main>
      <footer class="border-t px-4 py-5">
        <form>
          <label for="name">
            <h5 class="text-xl font-bold pb-5">Image</h5>
            <button
              class="rounded border-2 border-black font-bold text-center w-full p-3 transition ease-in-out duration-150 hover:bg-material-400"
            >
              + Upload character image
            </button>
          </label>
        </form>
      </footer>
    </section>
    <section class="w-full max-w-xs bg-material-50 rounded m-2">
      <header class="border-b px-4 pt-6 pb-2">
        <h2 class="font-bold text-2xl">Stats</h2>
      </header>
      <main class="px-4 py-5">
        <h3 class="text-xl font-bold pb-1">Abilities</h3>
        <p class="text-sm text-gray-700 leading-tight pb-3">
          The ability modifier is based on the character's level
        </p>
        <form>
          <label for="first" class="w-full flex justify-between items-center">
            <h5 class="w-1/2">
              <span class="font-bold">First ability</span>
            </h5>
            <div class="w-1/2 flex">
              <input
                :value="retainer.first.mod"
                type="text"
                class="w-5/12 rounded border-2 placeholder-material-400 px-4 py-2 mb-2 mr-1"
                name="first_mod"
              />
              <select
                name="first"
                class="w-7/12 rounded border-2 px-4 py-2 mb-2 form-select"
              >
                <option selected disabled>Stat</option>
                <option value="str">STR</option>
                <option value="dex">DEX</option>
                <option value="con">CON</option>
                <option value="int">INT</option>
                <option value="wis">WIS</option>
                <option value="cha">CHA</option>
              </select>
            </div>
          </label>
          <label for="second" class="w-full flex justify-between items-center">
            <h5 class="w-1/2">
              <span class="font-bold">Second ability</span>
            </h5>
            <div class="w-1/2 flex">
              <input
                :value="retainer.second.mod"
                type="text"
                class="w-5/12 rounded border-2 placeholder-material-400 px-4 py-2 mb-2 mr-1"
                name="second_mod"
              />
              <select
                name="second"
                class="w-7/12 rounded border-2 px-4 py-2 mb-2 form-select"
              >
                <option selected disabled>Stat</option>
                <option value="str">STR</option>
                <option value="dex">DEX</option>
                <option value="con">CON</option>
                <option value="int">INT</option>
                <option value="wis">WIS</option>
                <option value="cha">CHA</option>
              </select>
            </div>
          </label>
          <label for="worst" class="w-full flex items-center">
            <h5 class="w-1/2 flex items-center">
              <input
                v-model="worst_is_active"
                type="checkbox"
                class="form-checkbox w-4 h-4 mr-1"
              />
              <span class="font-bold">Worst ability</span>
            </h5>
            <div class="w-1/2 flex">
              <input
                v-model="worst.mod"
                type="text"
                class="w-5/12 text-xs rounded border-2 placeholder-material-400 px-1 py-1 mb-2 mr-1"
                :disabled="!worst_is_active"
                name="worst_mod"
              />
              <select
                v-model="worst.name"
                name="worst"
                class="w-7/12 rounded border-2 px-4 py-2 mb-2 form-select"
                :disabled="!worst_is_active"
              >
                <option selected disabled>Stat</option>
                <option value="str">STR</option>
                <option value="dex">DEX</option>
                <option value="con">CON</option>
                <option value="int">INT</option>
                <option value="wis">WIS</option>
                <option value="cha">CHA</option>
              </select>
            </div>
          </label>
        </form>
      </main>
      <footer class="border-t px-4 py-5">
        <h3 class="text-xl font-bold pb-1">Skills</h3>
        <p class="text-sm text-gray-700 leading-tight pb-3">
          Skill scores are based on the character's level and abilities
        </p>
        <form>
          <label for="skills">
            <h5>Add skills below</h5>
            <Multiselect
              v-model="selected_skills"
              tag-placeholder="Add this as new tag"
              placeholder="Search or add a skill"
              :options="skills"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              :max="3"
              :taggable="true"
              label="skills"
              track-by="name"
              @tag="addTag"
            >
              <template
                slot="selection"
                slot-scope="{ values, search, isOpen }"
              >
                <span
                  v-if="values.length && !isOpen"
                  class="multiselect__single"
                >
                  {{ values.length }} options selected
                </span>
              </template>
              <template slot="option" slot-scope="props">
                <!-- <img
                  class="option__image"
                  :src="props.option.img"
                  alt="No Man’s Sky"
                /> -->
                <div class="option__desc">
                  <span class="option__title">{{ props.option.name }}</span>
                  <span class="option__small">{{ props.option.stat }}</span>
                </div>
              </template>
            </Multiselect>
          </label>
        </form>
      </footer>
    </section>
    <section class="w-full max-w-xs bg-material-50 rounded m-2">
      <header class="border-b px-4 pt-6 pb-2">
        <h2 class="font-bold text-2xl">Actions</h2>
      </header>
      <main class="px-4 py-5">
        <h3 class="text-xl font-bold pb-5">Signature attack</h3>
        <form>
          <label for="signature_name">
            <section class="flex justify-between mb-2">
              <input
                v-model="signature_name"
                class="w-1/2 rounded border placeholder-material-400 px-4 py-2 mr-2"
                type="text"
                name="signature_name"
              />
              <select
                name="signature_cost"
                class="w-1/2 ml-2 rounded border px-4 py-2 form-select"
              >
                <option selected disabled>Cost</option>
                <option value="str">Action</option>
                <option value="dex">Bonus Action</option>
                <option value="con">Reaction</option>
                <option value="int">Free Action</option>
              </select>
            </section>
            <textarea
              id=""
              name="signature_description"
              rows="3"
              placeholder="Description"
              class="w-full rounded border px-4 py-2"
            >
            </textarea>
          </label>
        </form>
      </main>
      <footer class="border-t px-4 py-5">
        <h3 class="text-xl font-bold pb-1">Special actions</h3>
        <SpecialActionForm v-for="special in specials" :key="special.id" />
        <button
          v-if="specials.length <= 2"
          class="rounded border-2 border-black font-bold text-center w-full p-3 transition ease-in-out duration-150 hover:bg-material-400"
          @click="addSpecial"
        >
          + Add special action
        </button>
      </footer>
    </section>
    <section class="w-full max-w-xs bg-material-50 rounded m-2">
      <header class="border-b px-4 pt-6 pb-2">
        <h2 class="font-bold text-2xl">Quote</h2>
      </header>
      <main class="px-4 py-5">
        <form>
          <textarea
            v-model="quote"
            name="quote"
            rows="2"
            placeholder="To be or not to be..."
            class="w-full rounded border px-4 py-2"
          >
          </textarea>
        </form>
      </main>
    </section>
    <section class="w-full max-w-xs bg-material-50 rounded m-2">
      <main class="px-4 py-5">
        <button class="btn btn__main" @click="save">
          save
        </button>
      </main>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Multiselect from 'vue-multiselect'
import SpecialActionForm from '~/components/create/SpecialActionForm'
export default {
  components: {
    SpecialActionForm,
    Multiselect
  },
  data() {
    return {
      stats: [
        { name: 'Strength', code: 'STR' },
        { name: 'Dexterity', code: 'DEX' },
        { name: 'Constitution', code: 'CON' },
        { name: 'Inteligence', code: 'INT' },
        { name: 'Wisdom', code: 'WIS' },
        { name: 'Charisma', code: 'CHA' }
      ],
      skills: [
        { name: 'Athletics', stat: 'STR' },
        { name: 'Acrobatics', stat: 'DEX' },
        { name: 'Sleight of Hand', stat: 'DEX' },
        { name: 'Stealth', stat: 'DEX' },
        { name: 'Arcana', stat: 'INT' },
        { name: 'History', stat: 'INT' },
        { name: 'Investigation', stat: 'INT' },
        { name: 'Nature', stat: 'INT' },
        { name: 'Religion', stat: 'INT' },
        { name: 'Animal Handling', stat: 'WIS' },
        { name: 'Insight', stat: 'WIS' },
        { name: 'Medicine', stat: 'WIS' },
        { name: 'Perception', stat: 'WIS' },
        { name: 'Survival', stat: 'WIS' },
        { name: 'Deception', stat: 'CHA' },
        { name: 'Intimidation', stat: 'CHA' },
        { name: 'Performance', stat: 'CHA' },
        { name: 'Persuasion', stat: 'CHA' }
      ]
    }
  },
  computed: {
    ...mapState({
      retainer: (state) => state.retainers.active
    })
  },
  methods: {
    ...mapActions({
      addSpecial: 'retainers/addSpecial',
      setAttribute: 'retainer/setAttribute'
    }),
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    save() {
      this.$router.push({ path: `/retainers` })
    }
  }
}
</script>

<style scoped>
.stat-dropdown {
  width: 26%;
}
.btn {
  @apply border-2 rounded transition ease-in duration-150 px-4 py-2 mr-4;
}
.btn__main {
  @apply border-main-500 text-secondary-100 bg-main-500;
}
.btn__alter {
  @apply border-main-500 text-main-500 bg-transparent;
}
.btn__main:hover {
  @apply text-main-500 bg-transparent;
}
.btn__alter:hover {
  @apply text-secondary-100 bg-main-500;
}
</style>
