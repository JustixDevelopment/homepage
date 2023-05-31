<template>
  <button
    class="flex items-center rounded-xl border-2 border-solid border-secondary bg-secondary text-sm uppercase transition-all duration-500 hover:border-secondary hover:bg-opacity-0"
    :class="small ? 'p-0.5' : 'px-3 py-0.5'"
    @click="$emit('button-click', $event)"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'CustomButton',
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  emits: ['button-click']
}
</script>
