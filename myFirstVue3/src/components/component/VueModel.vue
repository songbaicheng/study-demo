<script setup lang="ts">
import { ref } from 'vue'

let name = ref('songbaicheng')
</script>

<template>
<input v-model="name" type="text" />
<span>{{ name }}</span>
</template>