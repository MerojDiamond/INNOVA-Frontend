<script setup>
defineOptions({
  name: "AppTextField",
  inheritAttrs: false,
});
const model = defineModel();
const attrs = useAttrs();
</script>

<template>
  <n-form-item :label="attrs.label" :path="attrs.path">
    <n-input v-model:value="model" v-bind="{ ...attrs }" />
  </n-form-item>
</template>

<style scoped></style>
