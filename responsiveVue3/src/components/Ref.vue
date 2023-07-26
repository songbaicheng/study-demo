<script setup lang="ts">
import { ref, shallowRef, triggerRef } from 'vue'

// 非响应式对象
let people = { name: 'songbaicheng' }
let change = () => {
    people.name = 'baicheng'
    console.log(people.name)
}

// 深层响应式对象，可以循环影响到最底层
let animal = ref({ name: 'bird' })
let update = () => {
    animal.value.name = 'cat'
    console.log(animal.value.name)
}

// 浅层响应式对象，只能影响到 .value
let animal1 = shallowRef({ name: 'dog' })
let update1 = () => {
    animal1.value = {
        name: 'fish'
    }
    console.log(animal1.value.name)
}
</script>

<template>
非响应式：{{ people.name }} <button @click="change">点我更换</button>
<br>
深层响应式：{{ animal.name }} <button @click="update">点我更换</button>
<br>
浅层响应式：{{ animal1.name }} <button @click="update1">点我更换</button>
</template>