<script setup lang="ts">
import {darkTheme} from 'naive-ui'
import {themeOverrides} from "~/composables/theme/config";
</script>
<template>
  <div class="app-container">
    <NConfigProvider :theme-overrides="themeOverrides()" :theme="darkTheme">
      <NGlobalStyle/>
      <NuxtLayout class="min-hv-100"/>
    </NConfigProvider>
  </div>
</template>
<style scoped>
.app-container {
  overflow: hidden;
}
</style>