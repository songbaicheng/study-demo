<script setup>
import ResponsiveBase from './views/ResponsiveBase.vue'
import Computed from './views/Computed.vue'
</script>

<template>
    <span class="bold-italic-text">响应式基础：</span>
    <br />
    <ResponsiveBase />
    <br />
    <span class="bold-italic-text">计算属性：</span>
    <br />
    <Computed />
</template>

<style>
.bold-italic-text {
    font-weight: bold;
    font-style: italic;
}
</style>