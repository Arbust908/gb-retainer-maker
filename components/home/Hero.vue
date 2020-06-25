<template>
  <section class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 py-8 lg:py-12 bg-white lg:max-w-2xl lg:w-full flex items-center"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <main class="mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-8">
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
            >
              Great companions
              <br class="xl:hidden" />
              <span class="text-secondary-600">for your adventures </span>
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Enjoy this intuitive and easy to use retainer maker. Based on the
              designes of
              <a
                href="https://www.reddit.com/user/lufresh"
                class="text-secondary-500 underline hover:text-secondary-800 hover:no-underline"
                target="_blanck"
                >r/lufresh</a
              >
              and the retainer rules from
              <a
                href="https://shop.mcdmproductions.com/products/strongholds-followers-hardcover-pdf?variant=28762180649008"
                class="text-secondary-500 underline hover:text-secondary-800 hover:no-underline"
                target="_blanck"
              >
                MCDMs Strongholds and Followers</a
              >
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-secondary-600 hover:bg-secondary-500 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-secondary-700 bg-secondary-100 hover:text-secondary-600 hover:bg-secondary-50 focus:outline-none focus:shadow-outline-secondary focus:border-secondary-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover object-right sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="@/assets/images/DnD_DMG_Art.jpg"
        alt=""
      />
    </div>
  </section>
</template>
