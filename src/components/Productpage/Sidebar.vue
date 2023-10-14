<template>
    <aside>
        <h2 class="font-medium text-lg p-20 pb-0 md:pl-10 pl-20"> Irons</h2>
        <div v-for="item in itemes" :key="item.id"
            class="w-48 md:ml-10 ml-24 text-gray-900 bg-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <button type="button" 
                class="relative bg-blue-950  mt-3 inline-flex items-center w-full px-4 py-2 text-sm font-medium border border-gray">
            {{ item.name }}
            </button>
           
        </div>
    </aside>
</template>
<script setup>
import { reactive } from "vue";

const itemes = reactive([
    { id: 1, name: 'Settings', },
    { id: 2, name: 'Settings', },
    { id: 3, name: 'Settings', },
    { id: 4, name: 'Settings', },
    { id: 5, name: 'Settings', },
]);
</script>