<script setup lang="ts">
    import Child from './ChildComponent.vue'

    const color = 'blue'
</script>

<template>
    <Child v-color="color"></Child>
</template>