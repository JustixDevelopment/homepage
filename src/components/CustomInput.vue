<template>
  <div class="input-container">
    <label :for="'input-' + name">{{ title }}</label>
    <input
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      @blur="$emit('update:value', $event.target.value)"
      :id="'input-' + name"
      :type="type"
      :name="name"
      :required="required === true"
      :minlength="minLength"
      :maxlength="maxLength"
      class="rounded-xl border-2 border-solid border-primary-700 bg-transparent px-3 py-2 font-text text-sm focus:outline-none"
    />
  </div>
</template>
<script>
export default {
  name: 'CustomInput',
  props: {
    value: String,
    title: String,
    type: String,
    name: String,
    minLength: {
      type: String,
      default: null
    },
    maxLength: {
      type: String,
      default: null
    },
    required: Boolean
  }
};
</script>
<style lang="scss">
.input-container {
  @apply relative flex w-full flex-col justify-center gap-1;

  label {
    @apply absolute left-2 px-1 text-sm text-primary-100;
    translate: 0;
    transition: translate 0.2s ease-out;

    &:has(+ input:focus),
    &:has(+ input:valid) {
      @apply z-10 bg-primary-900;
      translate: 0 -1.25rem;
    }
  }

  input {
    @apply relative;
  }
}
</style>
