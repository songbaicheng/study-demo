<script setup lang="ts">
import { ref, watch } from 'vue'

let message = ref<string>('songbaicheng')
let obj = ref<Object>({
    name: 'songbaicheng',
    age: 23
})

watch([message, obj], (newValue, oldValue) => {
    console.log('newValue:', newValue)
    console.log('oldValue:', oldValue)
}, {
    deep: true, // 是否开始深度监听
    immediate: true, // 立即执行一次
    flush: 'pre' // pre：组件更新前执行，sync：同步执行，post：组件更新后执行
})
</script>

<template>
    <input type='text' v-model="message">
    <br>
    <input type='text' v-model="obj.age">
</template>