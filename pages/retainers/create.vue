<template>
  <main class="bg-white px-4 py-5 sm:p-6 w-10/12 md:w-8/12 mx-auto">
    <div class="md:grid md:grid-cols-3 md:gap-6 mb-6 md:mb-8">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Basics</h3>
        <p class="mt-1 text-sm leading-5 text-gray-500">
          This information are the basic information of any Retainer
        </p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="grid grid-cols-3 gap-6 mb-4 md:mb-8">
            <div class="col-span-3 sm:col-span-2">
              <label
                for="company_website"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Name
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="company_website"
                  class="form-input flex-1 block w-full rounded-md transition duration-300 ease-in-out sm:text-sm sm:leading-5"
                  placeholder="Sir Pleb"
                />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-6 mb-4 md:mb-8">
            <div class="col-span-3 sm:col-span-2">
              <label
                for="company_website"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Title
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="company_website"
                  class="form-input flex-1 block w-full rounded-md transition duration-300 ease-in-out sm:text-sm sm:leading-5"
                  placeholder="The Internet Nerd"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Error
              </p>
            </div>
          </div>

          <div class="grid grid-cols-6 gap-6 mb-4 md:mb-8">
            <div class="col-span-3 sm:col-span-2">
              <label
                for="company_website"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                <strong>A</strong>rmour <strong>C</strong>lass
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="company_website"
                  class="form-input flex-1 block w-full rounded-md transition duration-300 ease-in-out sm:text-sm sm:leading-5"
                  placeholder="10"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Error
              </p>
            </div>
            <div class="col-span-3 sm:col-span-2">
              <label
                for="company_website"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Level
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="company_website"
                  class="form-input flex-1 block w-full rounded-md transition duration-300 ease-in-out sm:text-sm sm:leading-5"
                  placeholder="0"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Error
              </p>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-6 mb-4 md:mb-8">
            <div class="col-span-3 sm:col-span-2">
              <label class="block text-sm leading-5 font-medium text-gray-700">
                Retainer Image
              </label>
              <div
                class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              >
                <div class="text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="mt-1 text-sm text-gray-600">
                    <button
                      class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-300 ease-in-out"
                    >
                      Upload a file
                    </button>
                    or drag and drop
                  </p>
                  <p class="mt-1 text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="md:grid md:grid-cols-3 md:gap-6 mb-6 md:mb-8">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Stats
        </h3>
        <p class="mt-1 text-sm leading-5 text-gray-500">
          This are the mechanic information on who good is the retainer
        </p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="grid grid-cols-3 gap-6 mb-6 md:mb-8">
            <div class="col-span-3 sm:col-span-2">
              <label
                for="first_name"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Primary Stat</label
              >
              <p class="text-sm leading-5 text-gray-500">
                This should be the stat with the best bonus
              </p>
              <div class="flex">
                <select
                  id="country"
                  class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-300 ease-in-out sm:text-sm sm:leading-5 sm:mr-1"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <input
                  id="first_name"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-300 ease-in-out sm:text-sm sm:leading-5 sm:ml-1"
                  placeholder="+4"
                />
              </div>
            </div>

            <div class="col-span-3 sm:col-span-2">
              <label
                for="first_name"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Secondary Stat</label
              >
              <p class="text-sm leading-5 text-gray-500">
                This will be a stat that's above averge
              </p>
              <div class="flex">
                <select
                  id="country"
                  class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-300 ease-in-out sm:text-sm sm:leading-5 sm:mr-1"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <input
                  id="first_name"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-300 ease-in-out sm:text-sm sm:leading-5 sm:ml-1"
                  placeholder="+2"
                />
              </div>
            </div>

            <div class="col-span-3 sm:col-span-2">
              <label
                for="first_name"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Weak Stat</label
              >
              <p class="text-sm leading-5 text-gray-500">
                This is where the retainer usually fails
              </p>
              <div class="flex">
                <select
                  id="country"
                  class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-300 ease-in-out sm:text-sm sm:leading-5 sm:mr-1"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <input
                  id="first_name"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-300 ease-in-out sm:text-sm sm:leading-5 sm:ml-1"
                  disabled
                  placeholder="Disadvantage"
                  value="Disadvantage"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="md:grid md:grid-cols-3 md:gap-6 mb-6 md:mb-8">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Abilities
        </h3>
        <p class="mt-1 text-sm leading-5 text-gray-500">
          This are the things the retainer can do
        </p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <section class="grid grid-cols-3 gap-6 mb-6 md:mb-8">
            <header class="col-span-3 sm:col-span-2">
              <legend
                for="first_name"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Signature Attack
              </legend>
              <p class="text-sm leading-5 text-gray-500">
                A at will ability
              </p>
            </header>
            <div class="grid grid-cols-6 gap-6 col-span-3 sm:col-span-2">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="company_website"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Name
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="company_website"
                    class="form-input flex-1 block w-full rounded-md transition duration-300 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="10"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Error
                </p>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="company_website"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Cost
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <select
                    id="country"
                    class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-300 ease-in-out sm:text-sm sm:leading-5 sm:mr-1"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Error
                </p>
              </div>
            </div>
            <div class="col-span-3 sm:col-span-2">
              <label
                for="first_name"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Description</label
              >
              <div class="rounded-md shadow-sm">
                <textarea
                  id="about"
                  rows="3"
                  class="form-textarea mt-1 block w-full transition duration-300 ease-in-out sm:text-sm sm:leading-5"
                  placeholder="you@example.com"
                ></textarea>
              </div>
            </div>
          </section>
          <section class="grid grid-cols-3 gap-6 mb-6 md:mb-8">
            <button
              class="col-span-3 sm:col-span-2 transition transform duration-300 ease-in-out rounded-md shadow-sm border py-2 hover:shadow-lg hover:bg-gray-200 hover:scale-105"
            >
              + Add Special Action
            </button>
          </section>
          <section class="grid grid-cols-3 gap-6 mb-6 md:mb-8">
            <header class="col-span-3 sm:col-span-2">
              <legend
                for="first_name"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Special Action
              </legend>
              <p class="text-sm leading-5 text-gray-500">
                A special ability that adds to the retainers arcenal
              </p>
            </header>
            <div class="grid grid-cols-6 gap-6 col-span-3 sm:col-span-2">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="company_website"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Name
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="company_website"
                    class="form-input flex-1 block w-full rounded-md transition duration-300 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="10"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Error
                </p>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="company_website"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Cost
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <select
                    id="country"
                    class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-300 ease-in-out sm:text-sm sm:leading-5 sm:mr-1"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Error
                </p>
              </div>
            </div>
            <div class="col-span-3 sm:col-span-2">
              <div class="flex items-center h-5">
                <input
                  id="candidates"
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out mr-2"
                />
                <label
                  for="first_name"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Limited uses</label
                >
              </div>
              <p class="text-sm leading-5 text-gray-500">
                It may have a limited amout of uses per day
              </p>
              <div class="rounded-md shadow-sm">
                <select
                  id="country"
                  class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-300 ease-in-out sm:text-sm sm:leading-5 sm:mr-1"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div class="col-span-3 sm:col-span-2">
              <label
                for="first_name"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Description</label
              >
              <div class="rounded-md shadow-sm">
                <textarea
                  id="about"
                  rows="3"
                  class="form-textarea mt-1 block w-full transition duration-300 ease-in-out sm:text-sm sm:leading-5"
                  placeholder="you@example.com"
                ></textarea>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  </main>
</template>
