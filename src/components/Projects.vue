<template>
  <div id="projects"></div>
  <div class="mt-24 min-h-screen space-y-8">
    <!-- <div class="inline-flex items-center justify-center w-full gap-8"> -->
    <div class="">
      <!-- <hr class="w-64 h-1 bg-gray-200 border-0 rounded-full dark:bg-gray-700" /> -->
      <h1 class="text-center text-4xl font-semibold dark:text-gray-300">
        Projects
      </h1>
      <!-- <hr class="w-64 h-1 bg-gray-200 border-0 rounded-full dark:bg-gray-700" /> -->
      <p class="text-center text-gray-500 dark:text-gray-400">
        Here are some of the projects I've worked with.
      </p>
    </div>
    <div class="flex w-full items-center justify-center">
      <ul class="flex gap-2 text-gray-700 dark:text-gray-400">
        <li
          class="cursor-pointer"
          v-for="filter in filterList"
          @click="changeFilter(filter)"
        >
          <glowing-effect v-if="selectedPlatform === filter">
            <div
              class="rounded-full border-2 border-gray-500 bg-gray-500 px-6 py-1 text-white transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            >
              {{ filter }}
            </div>
          </glowing-effect>
          <div
            v-else
            class="rounded-full border-2 border-gray-500 px-6 py-1 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg"
            :class="selectedPlatform === filter && 'bg-gray-500 text-white'"
          >
            {{ filter }}
          </div>
        </li>
      </ul>
    </div>
    <div class="mx-auto max-w-5xl">
      <div
        class="grid place-items-start justify-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <template v-for="project in projects" :key="project.id">
          <Transition name="fade">
            <div
              v-show="showOnlyIds === null || showOnlyIds?.includes(project.id)"
              class="space-y-2"
            >
              <div class="group relative">
                <div
                  class="absolute z-10 h-full w-full items-center justify-center rounded-md bg-black opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-50"
                ></div>
                <div
                  class="absolute bottom-0 left-0 right-0 top-0 z-20 m-auto h-min w-min space-y-2 text-white opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
                >
                  <div v-if="project.github">
                    <a
                      class="flex items-center justify-center gap-2 rounded-full py-1 transition-all duration-500 ease-in-out hover:border-white hover:px-2 hover:underline"
                      :href="project.github"
                      target="_blank"
                    >
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
                      <div>Code</div>
                    </a>
                  </div>
                  <div v-if="project.link">
                    <a
                      class="flex items-center justify-center gap-2 rounded-full py-1 transition-all duration-500 ease-in-out hover:border-white hover:px-2 hover:underline"
                      :href="project.link"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5"
                      >
                        <path
                          d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
                        />
                        <path
                          d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
                        />
                      </svg>
                      <p>Demo</p>
                    </a>
                  </div>
                </div>
                <div class="relative max-w-xs overflow-hidden rounded-md">
                  <img
                    class="h-[180px] max-w-xs object-cover transition duration-500 ease-in-out group-hover:scale-110"
                    :src="`${project.image.fields?.file?.url}`"
                    :alt="`${project.image.fields?.file?.url}`"
                  />
                </div>
              </div>
              <div class="max-w-xs space-y-2">
                <h2 class="text-lg font-semibold dark:text-gray-300">
                  {{ project.title }}
                </h2>
                <ul class="flex flex-wrap justify-start gap-1">
                  <li v-for="tag in project.tags" :key="tag">
                    <span
                      class="rounded-full border border-gray-500 px-2 py-1 text-xs text-gray-900 dark:text-gray-300"
                      >{{ tag }}</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </Transition>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ContentfulClientApi } from "contentful";
// import { Project } from "@/interfaces";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Document } from "@contentful/rich-text-types";
import { Project } from "~/interfaces";
import { ProjectPlatform } from "../interfaces";

const app = useNuxtApp();

const projects = ref<Project[]>([]);
const selectedPlatform = ref<ProjectPlatform | null>(null);
const showOnlyIds = ref<string[] | null>(null);
const filterList = ref<ProjectPlatform[]>([
  ProjectPlatform.ALL,
  ProjectPlatform.MOBILE,
  ProjectPlatform.WEB,
  ProjectPlatform.API,
]);

const $contentfulClient =
  app.$contentfulClient as ContentfulClientApi<undefined>;

const changeFilter = (filter: ProjectPlatform | null) => {
  // get only the selected platform
  if (filter === ProjectPlatform.ALL || filter === null) {
    showOnlyIds.value = null;
  } else {
    showOnlyIds.value = projects.value
      .filter((project) => {
        return project.platforms.includes(filter);
      })
      .map((project) => project.id);
  }
  selectedPlatform.value = filter;
};

onMounted(async () => {
  // const entries = await contentfulClient.getEntries<Project>({
  //   content_type: "project",
  // });
  const entries = await $contentfulClient.getEntries({
    content_type: "project",
  });

  if (entries.items) {
    const mappedProjects = entries.items.map((entry) => {
      const {
        title,
        description,
        image,
        link,
        tags,
        github,
        order,
        platforms,
      } = entry.fields;

      const { id } = entry.sys;
      // Convert Contentful's rich text description to HTML string
      const htmlDescription = documentToHtmlString(description as Document);

      return {
        id,
        title,
        description: htmlDescription,
        image,
        link,
        tags,
        github,
        order,
        platforms,
      };
    });

    projects.value = (mappedProjects as unknown as Project[]).sort(
      (a: any, b: any) => a.order - b.order
    );
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
