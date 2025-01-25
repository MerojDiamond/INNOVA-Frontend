<script lang="ts" setup>
import {useExtraDataStore} from "~/store/extra-data";

const emits = defineEmits(["openDrawer"])
const extraDataStore = useExtraDataStore();
const {width} = useWindowSize()
</script>

<template>
  <NLayoutHeader class="rounded-xl shadow-sm px-4 py-2 m-4 w-auto">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <NButton v-if="width<=992" color="white" text @click="emits('openDrawer')">
          <Icon name="tabler:menu-2" size="24"/>
        </NButton>
        <Icon v-if="extraDataStore.internetOnline" v-tippy="`Online`" class="text-green-500" name="tabler:wifi"
              size="24"/>
        <Icon v-else class="mr-2" name="solar:wifi-off" size="24"/>
        <NInput v-if="width>640" placeholder="Search...">
          <template #suffix>
            <Icon name="tabler:search"/>
          </template>
        </NInput>
      </div>
      <div class="flex items-center gap-3">
        <NButton text>
          <Icon name="tabler:inbox" size="24"/>
        </NButton>
        <NButton class="focus:!text-yellow-600 hover:!text-yellow-500" text>
          <Icon name="tabler:bell" size="24"/>
        </NButton>
        <div class="flex items-center gap-2">
          <Icon name="solar:user-circle-outline" size="24"/>
          <div>
            <div class="font-bold">Fmeroj</div>
            <div v-if="width>992" class="opacity-75 text-xs">Super-Admin</div>
          </div>
        </div>
      </div>
    </div>
  </NLayoutHeader>
</template>

<style scoped>

</style>