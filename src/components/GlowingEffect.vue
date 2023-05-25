<template>
  <div class="lg:mx-0 mx-auto relative group">
    <div
      class="absolute -inset-1 dark:bg-gradient-to-r rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
      :class="[from, to]"
    ></div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  from: {
    type: String,
    default: "from-blue-600",
  },
  to: {
    type: String,
    default: "to-blue-100",
  },
});
</script>
