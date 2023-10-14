<template>
    <Dashbordnavbar></Dashbordnavbar>
    <Dashbordidebar></Dashbordidebar>
    
</template>
<script setup>
import Dashbordidebar from '../../components/Dashborder/Dashbordidebar.vue'
import Dashbordnavbar from '../../components/Dashborder/Dashbordnavbar.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'



// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>