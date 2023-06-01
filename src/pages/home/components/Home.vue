<template>
  <Hero>
    <div class="hero-wallpaper"></div>
    <div class="flex flex-col items-center">
      <img class="portrait" src="@/assets/portrait.webp" width="142" height="142" alt="Justus G." />
      <h1 class="mt-5">Justus G.</h1>
      <p class="text-md mt-2.5 text-center font-title uppercase tracking-widest text-primary-300">
        Fix the cause,<br />not the symptom
      </p>
    </div>
  </Hero>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>

<style lang="scss" scoped>
.hero-wallpaper {
  @apply absolute top-0 -z-20 h-full w-full bg-cover bg-center;
  background-image: url('@/assets/binnenalster.webp');

  &::after {
    @apply relative -z-10 block h-full w-full bg-primary-950 bg-opacity-90;
    content: '';
  }
}

.portrait {
  @apply rounded-full object-cover;
}
</style>
