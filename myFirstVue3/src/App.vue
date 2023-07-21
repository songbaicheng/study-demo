<script setup>
import CodingWriteStyle from "./views/CodingWriteStyle.vue";
import VueComponent from "./views/VueComponent.vue";
</script>

<template>
  <div>
    <span class="bold-italic-text">三种代码格式：</span>
  </div>
  <CodingWriteStyle />
  <div>
    <span class="bold-italic-text">Vue 默认指令组件：</span>
  </div>
  <VueComponent />
</template>

<style>
.bold-italic-text {
  font-weight: bold;
  font-style: italic;
}
</style>