<template>
    child
    {{ title }}
    {{ arr }}
</template>

<script setup lang="ts">
// 接收父组件传值
withDefaults(defineProps<{
    title: string,
    arr: number[]
}>(), { // 默认值
    arr: () => ['songbaicheng']
})

// 向父组件传值
const emit = defineEmits<{
    (e:"on-click", name:string):void
}>()

const send = () => {
    emit('on-click', 'songbaicheng')
}

// 向父组件暴露值
defineExpose({
    value: 'songbaicheng'
})
</script>