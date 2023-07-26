<script setup lang="ts">
import { reactive } from 'vue'

let form = reactive({
    name: 'songbaicheng',
    age: 23
})

let submit = () => {
    console.log(form)
}

</script>

<template>
<form>
    <input type="text" v-model="form.name">
    <br>
    <input type="text" v-model="form.age">
    <br>
    <button @click.prevent="submit">提交</button>
</form>
</template>