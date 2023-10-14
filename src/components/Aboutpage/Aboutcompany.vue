<template>
    <div :class="props.class">
        <slot name="image"></slot>
        <slot name="textcompany"></slot>
    </div> 
</template>
<script setup>

 const props=defineProps(
        {
            class:{default:'flex mx-20 gap-10 my-20'}
        }
    )
</script>