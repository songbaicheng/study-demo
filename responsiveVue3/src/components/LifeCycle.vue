<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onUpdated, onBeforeUpdate, onUnmounted, onBeforeUnmount } from 'vue'

console.log('life cycle')
let str = ref<string>('life cycle')
let span = ref<HTMLSpanElement>()

let change = () => {
    str.value = 'i am chaged'
}

onBeforeMount(() => {
    console.log('创建之前', span)
})

onMounted(() => {
    console.log('创建完成', span)
})

onUpdated(() => {
    console.log('更新完成')
})

onBeforeUpdate(() => {
    console.log('更新之前')
})

onUnmounted(() => {
    console.log('销毁完成')
})

onBeforeUnmount(() => {
    console.log('销毁之前')
})
</script>

<template>
    <span ref="span">{{ str }}</span>
    <button @click="change">变变变</button>
</template>