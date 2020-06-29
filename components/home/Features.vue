<template>
  <section class="bg-gray-50 overflow-hidden">
    <div class="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <!-- Fondo -->
      <svg
        class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
        />
      </svg>

      <div class="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
        <div class="lg:col-span-1">
          <h3
            class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            A easy way to customize.
          </h3>
        </div>
        <div
          class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0"
        >
          <div>
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white"
            >
              <Bolt class="h-6 w-6 fill-current" />
            </div>
            <div class="mt-5">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                Fast & Easy
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                You can have a full Retainer card in a couple of minutes!
              </p>
            </div>
          </div>
          <div class="mt-10 sm:mt-0">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white"
            >
              <Editable class="h-6 w-6 fill-current" />
            </div>
            <div class="mt-5">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                Fully Editable
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                All aspects of the retainer is editable with our form editor.
                Need more? let us know.
              </p>
            </div>
          </div>
          <div class="mt-10 sm:mt-0">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white"
            >
              <Comunity class="h-6 w-6 fill-current" />
            </div>
            <div class="mt-5">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                Community Driven
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                This started because of us and will grow because of us. We'll be
                adding as much of your suggestions as we can.
              </p>
            </div>
          </div>
          <div class="mt-10 sm:mt-0">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white"
            >
              <Download class="h-6 w-6 fill-current" />
            </div>
            <div class="mt-5">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                Downloadable
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Easily downloadable for you to do as you please with it. Print
                designs and other features to come
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Bolt: () => import('@/components/icons/Bolt_Light'),
    Editable: () => import('@/components/icons/UserEdit_Light'),
    Comunity: () => import('@/components/icons/Users_Light'),
    Download: () => import('@/components/icons/CloudDownloadAlt_Light')
  }
}
</script>
