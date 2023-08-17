<template>
    我是父级组件
    <div class="box">

    </div>
    <hr>
    <Son />
</template>

<script setup lang="ts">
import {ref, inject} from 'vue'
import Son from './Son.vue'

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