<script setup>
import {darkTheme} from "naive-ui"
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-card>
      <RouterView/>
    </n-card>
  </n-config-provider>
</template>

<style scoped>

</style>