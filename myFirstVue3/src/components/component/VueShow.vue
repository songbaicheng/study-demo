<script setup lang="ts">
let trueFlag: boolean = true
let falseFlag: boolean = false
</script>

<template>
    <span v-show="trueFlag">
        事了拂衣去
    </span>
    <span v-show="falseFlag">
        深藏功与名
    </span>
</template>