<script setup>
import ResponsiveBase from './views/ResponsiveBase.vue'
import Computed from './views/Computed.vue'
import Watch from './views/Watch.vue'
import LifeCycle from './views/LifeCycle.vue'
import ParentChild from './views/ParentChild.vue'
</script>

<template>
    <span class="bold-italic-text">响应式基础：</span>
    <br />
    <ResponsiveBase />
    <br />
    <span class="bold-italic-text">计算属性：</span>
    <br />
    <Computed />
    <br />
    <span class="bold-italic-text">监听属性：</span>
    <br />
    <Watch />
    <br />
    <span class="bold-italic-text">生命周期：</span>
    <br />
    <LifeCycle />
    <br />
    <span class="bold-italic-text">父子组件：</span>
    <br />
    <ParentChild />
</template>

<style>
.bold-italic-text {
    font-weight: bold;
    font-style: italic;
}
</style>