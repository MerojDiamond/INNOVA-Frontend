<script setup>
const {width} = useWindowSize()
const isDrawerOpened = ref(false)
const openDrawer = () => isDrawerOpened.value = true
</script>

<template>
  <NLayout has-sider position="absolute">
    <LayoutSider v-if="width>992"/>
    <NDrawer v-else v-model:show="isDrawerOpened" :width="300" placement="left">
      <LayoutDrawer/>
    </NDrawer>
    <NLayoutContent content-class="flex flex-col max-h-svh" embedded>
      <LayoutHeader @open-drawer="openDrawer"/>
      <LayoutContent/>
      <LayoutFooter/>
    </NLayoutContent>
  </NLayout>
</template>

<style scoped>

</style>