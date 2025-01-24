<script setup lang="ts">
import {useExtraDataStore} from "~/store/extra-data";

const extraDataStore = useExtraDataStore();
</script>

<template>
  <NLayoutHeader class="rounded-xl shadow-sm px-4 py-2 m-4 w-auto">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <Icon v-tippy="`Online`" v-if="extraDataStore.internetOnline" name="tabler:wifi" size="24"
              class="text-green-500"/>
        <Icon v-else name="solar:wifi-off" class="mr-2" size="24"/>
        <NInput placeholder="Search..." style="min-width: 250px">
          <template #suffix>
            <Icon name="tabler:search"/>
          </template>
        </NInput>
      </div>
      <div class="flex items-center gap-3">
        <NButton text>
          <Icon name="tabler:inbox" size="24"/>
        </NButton>
        <NButton text class="focus:!text-yellow-600 hover:!text-yellow-500">
          <Icon name="tabler:bell" size="24"/>
        </NButton>
        <div class="flex items-center gap-2">
          <Icon name="solar:user-circle-outline" size="24"/>
          <div>
            <div class="font-bold">Fmeroj</div>
            <div class="opacity-75 text-xs">Super-Admin</div>
          </div>
        </div>
      </div>
    </div>
  </NLayoutHeader>
</template>

<style scoped>

</style>