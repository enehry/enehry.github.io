<template>
  <div class="mx-auto max-w-7xl px-4 xl:px-0">
    <HeroSection />
    <AboutMe />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import profilePic from "~/assets/images/nehry.jpg";

onMounted(() => {
  // check if dark mode is enabled on local storage
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});

useSeoMeta({
  title: "John Nehry Dedoro | Portfolio",
  ogTitle: "John Nehry Dedoro | Portfolio",
  description:
    "A Full Stack Developer from the Philippines. Fuelled by an insatiable curiosity, I constantly explore the ever-expanding universe of technology and it's galactic information. Just as galaxies collide and form new wonders, I blend my diverse skills and experiences to create innovative solutions that transcend the boundaries of possibility",
  ogDescription:
    "A Full Stack Developer from the Philippines. Fuelled by an insatiable curiosity, I constantly explore the ever-expanding universe of technology and it's galactic information. Just as galaxies collide and form new wonders, I blend my diverse skills and experiences to create innovative solutions that transcend the boundaries of possibility",
  ogImage: profilePic,
  ogUrl: "https://nehrydedoro.me/",
  ogType: "website",
  ogSiteName: "John Nehry Dedoro | Portfolio",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
});
</script>
<style scoped></style>
