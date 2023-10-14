<template>
    <nav class="bg-gray-800 ">
        <div class="max-w-screen-xl h-auto flex flex-wrap">
            <div class=" w-screen  md:w-auto" id="navbar-default">
                <ul class="font-medium flex h-full items-center justify-center flex-col md:p-0 w-screen md:flex-row space-y-4 md:space-x-8 md:space-y-0 md:mt-0">
                    <div v-for="item in items" :key="item.id">
                        <li class="block py-2 pl-3 pr-4 text-white my-2 bg-green-700 rounded p-20">{{ item.name }}</li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { reactive } from "vue";

const items = reactive([
    { id: 1, name: 'Home' },
    { id: 2, name: 'Product' },
    { id: 3, name: 'Servic' },
    { id: 4, name: 'About' },
    { id: 5, name: 'Contact' }
]);
</script>