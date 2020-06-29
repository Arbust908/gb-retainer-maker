<template>
  <nav class="bg-main-500 z-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-secondary-400 hover:text-white hover:bg-secondary-700 focus:outline-none focus:bg-secondary-700 focus:text-white transition duration-150 ease-in-out"
              @click="open = !open"
            >
              <Bars :class="{ hidden: open, block: !open }" class="h-6 w-6" />
              <Close :class="{ hidden: !open, block: open }" class="h-6 w-6" />
            </button>
          </div>
          <nuxt-link to="/" class="flex-shrink-0 flex items-center">
            <img
              class="block h-8 w-auto hover:opacity-75"
              src="@/assets/images/SVG/icon.svg"
              alt=""
            />
          </nuxt-link>
          <div class="hidden md:ml-6 md:flex md:items-center">
            <nuxt-link
              to="/"
              class="nav-link__desktop"
              :class="activeLink('/')"
            >
              Home
            </nuxt-link>
            <nuxt-link
              to="/team"
              class="nav-link__desktop"
              :class="activeLink('/team')"
              disabled
            >
              Team
            </nuxt-link>
            <nuxt-link
              to="/retainers"
              class="nav-link__desktop"
              :class="activeLink('/retainers')"
            >
              Retainer Maker
            </nuxt-link>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="rounded-md shadow-sm">
              <nuxt-link
                v-if="this.$route.path !== '/retainers/create'"
                to="/retainers/create"
                type="button"
                class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-secondary-500 hover:bg-secondary-400 focus:outline-none focus:shadow-outline-secondary focus:border-secondary-600 active:bg-secondary-600 transition duration-150 ease-in-out"
              >
                <svg
                  class="-ml-1 mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>New Retainer</span>
              </nuxt-link>
              <nuxt-link
                v-else
                to="/retainers"
                type="button"
                class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-secondary-500 hover:bg-secondary-400 focus:outline-none focus:shadow-outline-secondary focus:border-secondary-600 active:bg-secondary-600 transition duration-150 ease-in-out"
              >
                <span>View Retainer</span>
              </nuxt-link>
            </span>
          </div>
          <div
            v-if="logedIn"
            class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center"
          >
            <button
              class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-300 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div class="ml-3 relative">
              <div>
                <!-- Profile Pic + Buton -->
                <button
                  class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                  @click="open = !open"
                >
                  <img
                    v-if="profileSrc"
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span
                    v-else
                    class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100"
                  >
                    <svg
                      class="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <transition
                name="custom-classes-transition"
                enter-active-class="transition transform ease-out duration-200"
                enter-class="opacity-0 scale-75"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition transform ease-in duration-150"
                leave-class="opacity-100 scale-100"
                leave-to="opacity-0 scale-75"
              >
                <aside
                  v-if="open"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                >
                  <nav class="py-1 rounded-md bg-white shadow-xs">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      >Your Profile</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      >Settings</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      >Sign out</a
                    >
                  </nav>
                </aside>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="{ block: open, hidden: !open }"
      class="bg-main-400 shadow-md md:hidden"
    >
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <nuxt-link
          to="/"
          class="nav-link__desktop block"
          :class="activeLink('/')"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="/team"
          class="nav-link__desktop block"
          :class="activeLink('/team')"
          disabled
        >
          Team
        </nuxt-link>
        <nuxt-link
          to="/retainers"
          class="nav-link__desktop block"
          :class="activeLink('/retainers')"
        >
          Retainer
        </nuxt-link>
      </div>
      <!-- Perfil Mobile -->
      <div v-if="logedIn" class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5 sm:px-6">
          <div class="flex-shrink-0">
            <img
              v-if="profileSrc"
              class="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span
              v-else
              class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100"
            >
              <svg
                class="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-6 text-white">
              Tom Cook
            </div>
            <div class="text-sm font-medium leading-5 text-gray-400">
              tom@example.com
            </div>
          </div>
        </div>
        <div class="mt-3 px-2 sm:px-3">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Your Profile</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Settings</a
          >
          <a
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Bars from '@/components/icons/Bars'
import Close from '@/components/icons/Close'

export default {
  components: {
    Bars,
    Close
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    logedIn() {
      return false
    },
    profileSrc() {
      return false
    }
  },
  methods: {
    activeLink(link) {
      return this.$route.path === link ? 'active-link' : null
    }
  }
}
</script>

<style scoped>
.nav-link__desktop {
  @apply px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-transparent transition duration-150 ease-in-out;
}
.nav-link__desktop.active-link {
  @apply text-main-200 bg-main-700;
}
.nav-link__desktop[disabled] {
  @apply text-main-200 cursor-not-allowed;
}
.nav-link__desktop:focus:not([disabled]) {
  @apply outline-none text-white bg-main-700;
}
.nav-link__desktop:hover:not([disabled]) {
  @apply text-white bg-main-700;
}
</style>
