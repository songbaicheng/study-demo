<script setup>
import FunctionComputred from '../components/FunctionComputred.vue'
import OptionComputed from '../components/OptionComputed.vue'
</script>

<template>
    <span class="font-style">函数式：</span>
    <br />
    <FunctionComputred />
    <br />
    <span class="font-style">选项式：</span>
    <br />
    <OptionComputed />
</template>

<style>
.font-style {
    font-style: italic;
}
</style>