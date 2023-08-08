<script setup lang="ts">
import Child from './Child.vue'
import { ref } from 'vue'

let name = 'sbc'

const getName = (name: string) => {
    console.log(name)
}

const childElement = ref<InstanceType<typeof child>>()
console.log(childElement.value.name)
</script>

<template>
    parent
    <br>
    <Child ref="child" @on-click="getName" :title="name" />
</template>