<script setup lang="ts">
import { ref, toRef, toRefs } from 'vue'

let people = ref({
    name: 'songbaicheng',
    age: 23,
    tel: 123456
})

let peopleTel = toRef(people) // 只对响应式对象做修改

let change = () => {
    peopleTel.value.tel = 8888
    console.log(peopleTel)
}
</script>

<template>
{{ people }}

<button @click="change">改变</button>
</template>