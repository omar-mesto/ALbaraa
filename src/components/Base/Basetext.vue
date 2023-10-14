<template>
    <h2 class="text-center font-medium text-xl mb-2" >
        <slot></slot>
    </h2>
    <span :class="props.class">
        <hr class="w-20 h-0.5 bg-green-500 mx-auto">
    </span>
</template>
<script setup>

    const props=defineProps(
        {
            class:{default:'flex'}
        }
    )
    
</script>