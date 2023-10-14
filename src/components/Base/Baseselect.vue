<template>
    <baselable>
        <slot name="label"></slot>
    </baselable>
    <select class="w-full">
       <slot name="options"></slot>
    </select>
</template>
<script setup>
import baselable from '../Base/baselable.vue'
</script>