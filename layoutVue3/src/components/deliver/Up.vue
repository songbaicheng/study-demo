<template>
    我是最顶级组件
    <label>
        <input v-model="colorVal" value="red" type="radio">
        红色
    </label>
    <label>
        <input v-model="colorVal" value="yellow" type="radio">
        黄色
    </label>
    <label>
        <input v-model="colorVal" value="green" type="radio">
        绿色
    </label>

    <div class="box">

    </div>
    <hr>
    <Father />
</template>

<script setupc lang="ts">
import { ref, provide } from 'vue'
import Father from './Father.vue'

let colorVal = ref<string>('red')
provide('color', colorVal)
</script>

<style>
.box {
    height: 50px;
    weight: 50px;
    border: 1px solid;
    background: v-bind(color)
}
</style>