<script setup lang="ts">
import { ref, computed } from 'vue'

let firstName = ref('')
let lastName = ref('')

// 全名计算属性
let name = computed<string>({

    get() {
        return firstName.value + '-' + lastName.value
    },
    set(name: string) {
        [firstName.value, lastName.value] = name.split('-')
    }
})

let changeName = () => {
    name.value = 'song-baicheng'
}
</script>

<template>
    <div>
        <div>
            <span class="font-style">姓：</span>
            <input v-model="firstName" type="text">
        </div>
        <div>
            <span class="font-style">名：</span>
            <input v-model="lastName" type="text">
        </div>
        <span class="font-style">全名：</span>
        <span class="front-style bold-font-style">{{ name }}</span>
    </div>
    <div>
        <button @click="changeName">更换姓名</button>
    </div>
</template>

<style>
.font-style {
    font-style: italic;
}

.bold-font-style {
    font-weight: bold;
}
</style>