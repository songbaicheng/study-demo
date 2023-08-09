<template>
  <el-config-provider namespace="ep">
    <Card />
    <TreeVue :data="data" />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TreeVue from '~/components/Tree.vue'

interface Tree {
  name: string,
  checked: boolean,
  child?: Tree[]
}

const data = ref<Tree[]>([
  {
    name: '1',
    checked: true,
    child: [
      {
        name: '1.1',
        checked: true
      }, {
        name: '1.2',
        checked: false
      },
    ]
  },
  {
    name: '2',
    checked: true,
    child: [
      {
        name: '2.1',
        checked: true
      }, {
        name: '2.2',
        checked: false
      },
    ]
  }, {
    name: '3',
    checked: false,
    child: [
      {
        name: '3.1',
        checked: true
      }, {
        name: '3.2',
        checked: false,
        child: [
          {
            name: '3.2.1',
            checked: true
          }, {
            name: '3.2.2',
            checked: false
          },
        ]
      },
    ]
  },
])
</script>

<style></style>
