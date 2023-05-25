<template>
  <div class="">
    <h1 class="text-3xl font-semibold">
      A
      <span class="text-yellow-500">{{ typeValue }}</span>
      <span :class="['cursor', { typing: typeStatus }]">&nbsp;</span>
    </h1>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const typeValue = ref("");
    const typeStatus = ref(false);
    const typeArray = [
      "Galactic Full Stack Developer",
      "Eternal Knowledge Seeker",
      "Celestial Tech Enthusiast",
    ];
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newTextDelay = 2000;
    const typeArrayIndex = ref(0);
    const charIndex = ref(0);

    const typeText = () => {
      if (charIndex.value < typeArray[typeArrayIndex.value].length) {
        if (!typeStatus.value) typeStatus.value = true;

        typeValue.value += typeArray[typeArrayIndex.value].charAt(
          charIndex.value
        );
        charIndex.value += 1;

        setTimeout(typeText, typingSpeed);
      } else {
        typeStatus.value = false;
        setTimeout(eraseText, newTextDelay);
      }
    };

    const eraseText = () => {
      if (charIndex.value > 0) {
        if (!typeStatus.value) typeStatus.value = true;

        typeValue.value = typeArray[typeArrayIndex.value].substring(
          0,
          charIndex.value - 1
        );
        charIndex.value -= 1;
        setTimeout(eraseText, erasingSpeed);
      } else {
        typeStatus.value = false;
        typeArrayIndex.value += 1;
        if (typeArrayIndex.value >= typeArray.length) typeArrayIndex.value = 0;

        setTimeout(typeText, typingSpeed + 1000);
      }
    };

    onMounted(() => {
      setTimeout(typeText, newTextDelay + 200);
    });

    return {
      typeValue,
      typeStatus,
    };
  },
};
</script>

<style scoped>
.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #000;
  animation: cursorBlink 1s infinite;
}

.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
