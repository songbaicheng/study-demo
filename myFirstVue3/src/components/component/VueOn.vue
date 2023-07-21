<script setup lang="ts">
let sout = () => {
    console.log('我是父级！')
}
let click = () => {
    alert('你好！')
}
</script>

<template>
    <div @:click="sout">
        <button @:click.stop="click">欢迎光临</button>
    </div>
</template>