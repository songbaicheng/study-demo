<script setup lang="ts">
let arr: string[] = ['one', 'two', 'three', 'four']
</script>

<template>
<div :key="index" v-for="(e, index) in arr">
    {{ index }}->{{ e }}
</div>
</template>