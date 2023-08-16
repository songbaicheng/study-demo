<template>
  <el-config-provider namespace="ep">
    <Card />
    <TreeVue :data="data" />
    <hr>
    <span>动态组件</span>
    <div style="display: flex">
      <div @click="switchCom(item, index)" :class="[active == index ? 'active' : '']" class="tabs"
        v-for="(item, index) in components">
        <div>{{ item.name }}</div>
      </div>
    </div>
    <component :is="comId"></component>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref, shallowRef, markRaw } from 'vue'
import TreeVue from '~/components/Tree.vue'
// 测试动态组件
import A from '~/components/A.vue'
import B from '~/components/B.vue'
import C from '~/components/C.vue'

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

const components = ref([
  {
    name: 'A组件',
    com: markRaw(A)
  },
  {
    name: 'B组件',
    com: markRaw(B)
  },
  {
    name: 'C组件',
    com: markRaw(C)
  }
])

const comId = shallowRef(A) // 只代理最外层元素
const active = ref(0)

// 切换展示组件
const switchCom = (item, index) => {
  comId.value = item.com
  active.value = index
}
</script>

<style scoped>
span {
  font-weight: bold;
  font-style: italic;
}

.tabs {
  border: 1px solid;
  padding: 5px 10px;
  margin: 5px;
  /* 悬浮小手 */
  cursor: pointer;
}

.active {
  background-color: burlywood;
}
</style>
