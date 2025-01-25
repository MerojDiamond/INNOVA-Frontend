<script lang="ts" setup>
import {makeMenuItem} from "~/utils/sider";
import {logout} from "~/composables/api/auth/logout";

const menuOptions = [
  makeMenuItem("dashboard", "Dashboard", "/dashboard"),
]
</script>

<template>
  <div class="max-h-svh flex flex-col h-full">
    <div class="flex gap-3 p-4">
      <LayoutLogo class="min-w-8"/>
      <div>
        <NH4 class="mb-0">INNOVA</NH4>
        <p class="opacity-85 line-clamp-1">CRM System</p>
      </div>
    </div>
    <NDivider class="!my-0"/>
    <NScrollbar class="my-2 flex-grow" style="max-height: 100vh;">
      <NMenu
          :options="menuOptions"
          accordion/>
    </NScrollbar>
    <NDivider class="!my-0"/>
    <div class="p-2">
      <NButton class="w-full flex justify-start mb-1" quaternary type="error" @click="logout">
        <template #icon>
          <Icon name="solar:logout-2-outline"/>
        </template>
        <span>Logout</span>
      </NButton>
    </div>
  </div>
</template>

<style scoped>

</style>