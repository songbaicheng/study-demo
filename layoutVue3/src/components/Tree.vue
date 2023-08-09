<template>
    <div v-for="item in data">
        <input v-model="item.checked" type="checkbox"> <span>{{ item
        .name }}</span>
    </div>
</template>

<script setup lang="ts">
interface Tree {
    name: string,
    checked: boolean,
    child?: Tree[]
}

defineProps<{
    data?: Tree[]
}>()
</script>