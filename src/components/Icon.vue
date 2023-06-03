<template>
  <img
    :src="this.assetUrl('/assets/icons/' + this.fileName)"
    :alt="this.alt"
    :width="this.width"
    :height="this.height"
    :loading="this.lazy ? 'lazy' : 'eager'"
  />
</template>

<script>
const icons = import.meta.globEager('@/assets/icons/*');

console.log(icons);

export default {
  name: 'Home',
  props: {
    fileName: String,
    alt: String,
    width: Number,
    height: Number,
    lazy: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    assetUrl(name) {
      return icons[Object.keys(icons).find((path) => path.endsWith(name))]?.default;
    }
  }
};
</script>
