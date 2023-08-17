<template>
    我是孩子组件
    <div class="box">

    </div>
</template>

<script setup lang="ts">
import {ref, inject} from 'vue'

let color = inject<ref<string>('color')
</script>

<style>
.box {
    height: 50px;
    weight: 50px;
    border: 1px solid;
    background: v-bind(color)
}
</style>