<template>
  <div id="contact"></div>
  <div
    class="relative mt-24 flex h-full min-h-screen flex-col items-center justify-center space-y-8 overflow-hidden"
  >
    <div class="">
      <div class="mx-auto mb-4 w-full lg:mb-28">
        <h1 class="text-center text-4xl font-semibold dark:text-gray-300">
          Contact Me
        </h1>
        <p class="text-center text-gray-500 dark:text-gray-400">
          Launching into new frontiers! If you're searching for stellar
          opportunities or have burning questions about the cosmos, I'm your
          cosmic companion. Let's defy gravity and explore uncharted territories
          together. Whether you're an Earthling or an extraterrestrial, reach
          out and let's orbit the possibilities. Shoot me a message and let's
          connect across the vast expanse of the universe
        </p>
      </div>
      <div class="flex w-full items-center justify-center gap-8">
        <a
          class="flex flex-col items-center gap-2"
          href="mailto:enehry@gmail.com"
        >
          <svg
            class="h-10 w-10 fill-current text-black dark:text-gray-300"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Gmail</title>
            <path
              d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
            />
          </svg>
          <div
            class="box-content rounded-full border border-gray-700 px-4 py-0.5 text-center text-xs font-medium dark:text-gray-300"
          >
            email me!
          </div>
        </a>
        <a
          href="https://m.me/johnnehry.dedoro.79"
          target="_blank"
          class="flex flex-col items-center gap-2"
        >
          <svg
            class="h-10 w-10 fill-current text-black dark:text-gray-300"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Messenger</title>
            <path
              d="M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.389 0 01.002 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 00-2.61.48z"
            />
          </svg>
          <div
            class="box-content rounded-full border border-gray-700 px-4 py-0.5 text-center text-xs font-medium dark:text-gray-300"
          >
            say hi!
          </div>
        </a>
      </div>
    </div>
    <div
      class="absolute -bottom-1/3 right-0 -z-10 hidden dark:block sm:-bottom-2/3 md:-bottom-1/2 md:right-10 lg:-bottom-1/2 lg:right-10 xl:-bottom-1/4 xl:right-10"
    >
      <glowing-effect
        ><img src="~assets/images/uranus.png" alt="contact" />
      </glowing-effect>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
