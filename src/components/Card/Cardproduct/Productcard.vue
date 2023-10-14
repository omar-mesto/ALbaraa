<template>
    

   
<div class="mt-10items-center my-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28">
        <div v-for="card in cards" :key="card.id">
        <div href="#" class="mb-10 gap-12 max-w-sm bg-white  w-72 h-40 relative rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img  src="../../../assets/17.png" class="absolute left-32 w-40 h-40">
            <img src="../../../assets/path12.png" class="w-full relative  h-full">
            <p class="absolute bottom-16 left-3 w-20 text-white font-medium text-2xl">{{card.title}}</p>
        </div>
    </div>
    </div>




    
</template>
<script setup>
import { reactive } from "vue";

const cards = reactive([
    { id: 1, path: "../../../assets/17.png", title: 'lorem epson' },
    { id: 2, path: "../../../assets/17.png", title: 'lorem epson' },
    { id: 3, path: "../../../assets/17.png", title: 'lorem epson' },
]);
</script>