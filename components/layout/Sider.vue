<script setup lang="ts">
import {vAutoAnimate} from "@formkit/auto-animate";

const collapsed = ref(false)
</script>

<template>
  <NLayoutSider
      bordered
      :native-scrollbar="false"
      collapse-mode="width"
      :collapsed-width="60"
      :width="240"
      :collapsed="collapsed"
      @collapse="collapsed = true"
      @expand="collapsed = false"
      show-trigger="bar"
      content-class="p-4"
  >
    <div class="flex gap-3" v-auto-animate>
      <LayoutLogo :class="collapsed? 'min-w-4' : 'min-w-8' "/>
      <div v-if="!collapsed">
        <NH4 class="mb-0">INNOVA</NH4>
        <p class="opacity-85 line-clamp-1">CRM System</p>
      </div>
    </div>
    <NDivider class="!my-4"/>
  </NLayoutSider>
</template>

<style scoped>

</style>