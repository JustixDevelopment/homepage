<template>
  <form @click.stop :class="large ? 'w-full' : ''">
    <h1 class="font-title text-2xl">{{ title }}</h1>
    <slot></slot>
    <CustomButton type="submit">{{ submitText }}</CustomButton>
  </form>
</template>
<script>
import CustomButton from '@/components/CustomButton.vue';

export default {
  name: 'CustomForm',
  props: {
    title: String,
    submitText: String,
    large: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CustomButton
  }
};
</script>
<style lang="scss">
form {
  @apply flex flex-col items-start gap-5 rounded-xl bg-primary-900 p-8;
  max-width: min(400px, calc(var(--vw, 1vh) * 100 - 25px - 25px));
}
</style>
