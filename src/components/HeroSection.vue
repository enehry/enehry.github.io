<template>
  <div
    id="home"
    class="mt-0 flex h-full flex-col-reverse items-center justify-center lg:-mt-20 lg:h-screen xl:flex-row"
  >
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      class="mt-24 flex-1 space-y-8 text-center dark:text-gray-400 xl:mt-0 xl:text-left"
    >
      <div class="space-y-2">
        <h2 class="text-2xl">Greetings, Earthlings!</h2>
        <h1 class="dark:glow-text text-7xl font-bold dark:text-gray-300">
          I'm Nehry Dedoro
        </h1>
        <TextTyping />
      </div>
      <p>
        Fuelled by an insatiable curiosity, I constantly explore the
        ever-expanding universe of technology and it's galactic information.
        Just as galaxies collide and form new wonders, I blend my diverse skills
        and experiences to create innovative solutions that transcend the
        boundaries of possibility
      </p>
      <div>
        <ul class="inline-flex items-center gap-4">
          <li class="cursor-pointer">
            <a class="" href="https://github.com/enehry" target="_blank">
              <svg
                role="img"
                viewBox="0 0 24 24"
                class="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
          </li>
          <li class="cursor-pointer">
            <a class="" href="https://www.linkedin.com/in/john-nehry-dedoro/">
              <svg
                role="img"
                class="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </li>
          <li class="cursor-pointer">
            <a href="https://discord.com/users/Nehry#9274" target="_blank">
              <svg
                role="img"
                viewBox="0 0 24 24"
                class="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Discord</title>
                <path
                  d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                />
              </svg>
            </a>
          </li>
          <li class="cursor-pointer">
            <a
              href="https://www.facebook.com/johnnehry.dedoro.79/"
              target="_blank"
            >
              <svg
                role="img"
                class="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class="group relative mx-auto w-36 xl:mx-0">
        <div
          class="absolute -inset-1 rounded-full from-yellow-600 to-yellow-100 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
        ></div>
        <a
          href="~/assets/files/John_Nehry_C_Dedoro_Resume.pdf"
          download
          class="relative flex w-full items-center justify-center rounded-full border-2 border-white bg-gray-100 px-4 py-4 text-sm font-semibold leading-none text-gray-900 shadow-lg ring-1 ring-gray-900/5 transition duration-200 ease-in-out dark:border-0 dark:bg-gray-900 dark:text-gray-500 dark:shadow-none dark:group-hover:text-white dark:group-hover:ring-2 dark:group-hover:ring-gray-900"
        >
          Download CV
        </a>
      </div>
    </div>

    <div class="h-96 flex-1">
      <div class="relative flex h-full items-center justify-center">
        <div
          class="absolute -top-5 left-24 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none sm:h-52 sm:w-52"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="absolute -inset-1 rounded-full from-red-600 to-yellow-100 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/planet_5.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute bottom-16 right-16 h-32 w-32 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="absolute -inset-1 rounded-full from-blue-600 to-blue-300 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/planet_4.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute -bottom-12 left-48 h-20 w-20 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none sm:h-36 sm:w-36"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="absolute -inset-1 rounded-full from-red-600 to-orange-300 opacity-25 blur-lg transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/planet_3.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute bottom-20 left-24 h-20 w-20 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="absolute -inset-1 rounded-full from-gray-200 to-gray-100 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/moon.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute bottom-2 left-28 h-12 w-12 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="from-purple-600-600 absolute -inset-1 rounded-full to-pink-100 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/planet_1.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="absolute -bottom-4 left-12 h-10 w-10 rounded-full bg-gradient-to-b from-[#FFE99A] to-[#FFF6D6] dark:bg-none"
        >
          <div class="group relative mx-auto lg:mx-0">
            <div
              class="absolute -inset-1 rounded-full from-blue-600 to-blue-100 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:bg-gradient-to-r"
            ></div>
            <img
              class="hidden h-full w-full transform object-contain transition-all duration-500 ease-in-out hover:rotate-12 hover:scale-110 dark:block"
              src="~/assets/images/planet_0.png"
              alt="hero"
            />
          </div>
        </div>
        <div
          class="z-10"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            class="relative h-52 w-52 rounded-full border-2 border-stone-700 sm:h-72 sm:w-72"
            src="~/assets/images/nehry.jpg"
            alt="hero"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.glow-text {
  text-shadow: 0 0 8px rgb(184, 184, 255);
}
</style>
