<script setup lang="ts">
import { ref, watchEffect } from 'vue'

let message = ref<string>('new songbaicheng')

watchEffect(() => {
    console.log(message.value)
})
</script>

<template>
    <input type='text' v-model="message">
</template>