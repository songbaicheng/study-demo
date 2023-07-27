<script setup lang="ts">
import { ref, computed } from 'vue'

let firstName = ref('')
let lastName = ref('')

// 全名计算属性
let name = computed(() => {
    return firstName.value + '-' + lastName.value
})
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
</template>

<style>
.font-style {
    font-style: italic;
}

.bold-font-style {
    font-weight: bold;
}
</style>