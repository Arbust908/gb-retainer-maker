<template>
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
</template>
