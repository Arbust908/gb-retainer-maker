<template>
  <main class="bg-material-300 max-w-xs mx-auto px-1 py-6">
    <section class="bg-material-50 rounded">
      <header class="border-b px-4 pt-6 pb-2">
        <h2 class="font-bold text-2xl">Character</h2>
      </header>
      <main class="px-4 py-5">
        <h3 class="text-xl font-bold pb-5">Basics</h3>
        <form>
          <label for="name">
            <h5 class="mb-2">Character</h5>
            <input
              v-model="name"
              class="w-full rounded border placeholder-material-400 px-4 py-2 mb-2"
              type="text"
              name="name"
              placeholder="Name"
            />
          </label>
          <label for="culture">
            <input
              v-model="culture"
              class="w-full rounded border placeholder-material-400 px-4 py-2 mb-6"
              type="text"
              name="culture"
              placeholder="Culture & epithet"
            />
          </label>
          <label for="level" class="flex w-1/3 items-center">
            <h5 class="w-1/2">Level</h5>
            <input
              v-model="level"
              type="text"
              name="level"
              class="border-2 border-material-600 px-4 py-2 w-1/2 rounded mb-2"
            />
          </label>
          <label for="AC" class="flex w-1/3 items-center">
            <h5 class="w-1/2">AC</h5>
            <input
              v-model="AC"
              type="text"
              name="AC"
              class="border-2 border-material-600 px-4 py-2 w-1/2 rounded"
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
    <section>
      <header>
        <h2>Stats</h2>
      </header>
      <main>
        <h3>Abilities</h3>
        <p>The ability modifier is based on the character's level</p>
        <form>
          <label for="first_stat">
            <h5>First ability</h5>
            <input v-model="first_mod" type="text" name="first_mod" />
            <select name="first_stat">
              <option value="str">STR</option>
              <option value="dex">DEX</option>
              <option value="con">CON</option>
              <option value="int">INT</option>
              <option value="wis">WIS</option>
              <option value="cha">CHA</option>
            </select>
          </label>
          <label for="second_stat">
            <h5>Second ability</h5>
            <input v-model="second_mod" type="text" name="second_mod" />
            <select name="second_stat">
              <option value="str">STR</option>
              <option value="dex">DEX</option>
              <option value="con">CON</option>
              <option value="int">INT</option>
              <option value="wis">WIS</option>
              <option value="cha">CHA</option>
            </select>
          </label>
          <label for="worst_stat">
            <input id="" type="checkbox" name="" />
            <h5>Worst ability</h5>
            <input v-model="worst_mod" type="text" name="worst_mod" />
            <select name="worst_stat">
              <option value="str">STR</option>
              <option value="dex">DEX</option>
              <option value="con">CON</option>
              <option value="int">INT</option>
              <option value="wis">WIS</option>
              <option value="cha">CHA</option>
            </select>
          </label>
        </form>
      </main>
      <footer>
        <h3>Skills</h3>
        <p>Skill scores are based on the character's level and abilities</p>
        <form>
          <label for="first_stat">
            <h5>Add skills belos</h5>
            <select name="first_stat">
              <option value="str">STR</option>
              <option value="dex">DEX</option>
              <option value="con">CON</option>
              <option value="int">INT</option>
              <option value="wis">WIS</option>
              <option value="cha">CHA</option>
            </select>
          </label>
        </form>
      </footer>
    </section>
    <section>
      <header>
        <h2>Actions</h2>
      </header>
      <main>
        <h3>Signature attack</h3>
        <form>
          <label for="signature_name">
            <h5>First ability</h5>
            <input v-model="signature_name" type="text" name="signature_name" />
            <select name="signature_cost">
              <option value="str">Action</option>
              <option value="dex">Bonus Action</option>
              <option value="con">Reaction</option>
              <option value="int">Free Action</option>
            </select>
            <textarea
              id=""
              name="signature_description"
              cols="30"
              rows="10"
              placeholder="Description"
            >
            </textarea>
          </label>
        </form>
      </main>
      <footer>
        <h3>Special actions</h3>
        <button>
          + Add special action
        </button>
        <SpecialActionForm />
      </footer>
    </section>
    <section>
      <header>
        <h2>Quote</h2>
      </header>
      <main>
        <form>
          <textarea
            id=""
            name="quote"
            cols="30"
            rows="10"
            placeholder="To be or not to be..."
          >
          </textarea>
        </form>
      </main>
    </section>
  </main>
</template>
<script>
import SpecialActionForm from '~/components/create/SpecialActionForm'
export default {
  components: {
    SpecialActionForm
  },
  data() {
    return {
      signature_name: '',
      worst_mod: '',
      second_mod: '',
      first_mod: '',
      AC: 8,
      level: 1,
      name: '',
      culture: ''
    }
  }
}
</script>
