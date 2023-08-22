<script setup lang="ts">
import { useStore } from './stores/main';

const stores = useStore()
</script>

<template>
{{ stores.name }}-{{ stores.age }}
</template>
