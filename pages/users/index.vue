<script lang="ts" setup>
import {indexAPI} from "~/composables/api/crud/indexAPI";
import {CrudMenu} from "#components";

const columns = ref([
  {
    title: 'No',
    key: 'no'
  },
  {
    title: 'Title',
    key: 'title'
  },
  {
    title: 'Length',
    key: 'length'
  },
  {
    title: 'Action',
    key: 'actions',
    render(row) {
      return h(CrudMenu, {row})
    }
  }
])
const loading = ref(false)
const data = ref([])
onMounted(async () => {
  loading.value = true
  data.value = (await indexAPI("users")).data.data
  loading.value = false
})
</script>

<template>
  <div>
    <NDataTable :columns="columns" :data="data" :loading="loading"></NDataTable>
  </div>
</template>

<style scoped>

</style>