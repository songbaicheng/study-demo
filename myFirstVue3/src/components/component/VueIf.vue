<script setup lang="ts">
let typeFlag: string = 'A'
</script>

<template>
    <div v-if="typeFlag === 'A'">
        A
    </div>
    <div v-else-if="typeFlag === 'B'">
        B
    </div>
    <div v-else-if="typeFlag === 'C'">
        C
    </div>
    <div v-else>
        Not A/B/C
    </div>
</template>