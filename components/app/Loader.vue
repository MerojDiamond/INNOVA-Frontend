<script lang="ts" setup>
const model = defineModel()
defineProps({
  description: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <NSpin v-model:show="model">
    <slot/>
    <template #description>
      {{ description }}
    </template>
  </NSpin>
</template>

<style scoped>

</style>