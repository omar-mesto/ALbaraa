<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite';
import 'flowbite';
onMounted(() => {
    // bannerStore.banners();
    initFlowbite();

})

</script>

<template>

<router-view></router-view>

  

</template>

