<template>
  <Hero>
    <div class="hero-wallpaper">
      <img src="@/assets/binnenalster.jpg" alt="Binnenalster" />
    </div>
    <div class="flex flex-col items-center">
      <img class="portrait" src="@/assets/portrait.jpg" alt="Justus G." />
      <h1 class="mt-6 font-title text-5xl">Justus G.</h1>
      <p class="text-md mt-3 text-center font-title uppercase tracking-widest text-primary-300">
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
  @apply absolute top-0 -z-10 h-full w-full;

  &::after {
    @apply absolute top-0 h-full w-full bg-primary-950 bg-opacity-90;
    content: '';
  }

  img {
    @apply -z-20 h-full w-full object-cover;
  }
}

.portrait {
  @apply rounded-full object-cover;
  width: 142px;
  height: 142px;
}
</style>
