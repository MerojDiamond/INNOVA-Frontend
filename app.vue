<script setup lang="ts">
</script>
<template>
  <NConfigProvider :theme-overrides="themeOverrides()">
    <NGlobalStyle />
    <RouterView v-slot="{ Component }" class="min-hv-100">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </RouterView>
  </NConfigProvider>
</template>
