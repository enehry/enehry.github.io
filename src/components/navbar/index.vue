<template>
  <div class="fix sticky inset-0 z-50">
    <ul
      class="w-min mx-auto my-3 bg-gray-100 dark:bg-gray-900 dark:text-gray-500 dark:border-gray-700 rounded-full px-4 py-2 shadow-lg border-2 border-white flex items-center justify-center text-sm"
    >
      <template v-for="(item, index) in navList" :key="index">
        <li
          :class="
            index === selectedIndex
              ? 'bg-white rounded-full items-center justify-center flex gap-2 px-3 py-1 dark:bg-gray-500 dark:text-gray-900'
              : 'mx-3'
          "
          @click="onClick(index)"
        >
          <a :href="`#${item.link}`">
            <component :is="item.icon" />
          </a>
          <span v-if="index === selectedIndex" class="font-semibold">
            {{ item.title }}
          </span>
        </li>
      </template>
      <li class="mx-3">
        <DarkModeSwitch />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Navdata } from "@/interfaces";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import AboutIcon from "@/components/icons/AboutIcon.vue";
import ProjectsIcon from "@/components/icons/ProjectsIcon.vue";
import ContactIcon from "@/components/icons/ContactIcon.vue";

const navList = ref<Navdata[]>([
  {
    title: "Home",
    icon: markRaw(HomeIcon),
    link: "home",
  },
  {
    title: "About",
    icon: markRaw(AboutIcon),
    link: "about-me",
  },
  {
    title: "Projects",
    icon: markRaw(ProjectsIcon),
    link: "projects",
  },
  {
    title: "Contact",
    icon: markRaw(ContactIcon),
    link: "contact",
  },
]);
const selectedIndex = ref<number>(0);

const onClick = (pageIndex: number) => {
  selectedIndex.value = pageIndex;
};
</script>

<style scoped></style>
