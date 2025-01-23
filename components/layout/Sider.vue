<script setup lang="ts">
import {vAutoAnimate} from "@formkit/auto-animate";
import {makeMenuItem} from "~/utils/sider";

const collapsed = ref(false)
const menuOptions = [
  makeMenuItem("dashboard", "Dashboard", "/dashboard"),
]
</script>

<template>
  <NLayoutSider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      @collapse="collapsed = true"
      @expand="collapsed = false"
      show-trigger="bar"
      :native-scrollbar="false"
      content-class="max-h-svh flex flex-col h-full"
  >
    <div class="flex gap-3 p-4" v-auto-animate>
      <LayoutLogo :class="collapsed? 'min-w-4' : 'min-w-8' "/>
      <div v-if="!collapsed">
        <NH4 class="mb-0">INNOVA</NH4>
        <p class="opacity-85 line-clamp-1">CRM System</p>
      </div>
    </div>
    <NDivider class="!my-0"/>
    <NScrollbar style="max-height: 100vh;" class="my-2 flex-grow">
      <NMenu
          accordion
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"/>
    </NScrollbar>
    <NDivider class="!my-0"/>
    <div class="p-2">
      <NButton quaternary type="error" class="w-full flex justify-start mb-1" v-auto-animate>
        <template #icon>
          <Icon name="solar:logout-2-outline"/>
        </template>
        <span v-if="!collapsed">
        Logout
          </span>
      </NButton>
    </div>
  </NLayoutSider>
</template>

<style scoped>

</style>