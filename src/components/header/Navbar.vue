<template>
    <div class="max-w-screen-xl flex p-4">
        <a href="https://flowbite.com/" class="flex start-0">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3 hidden sm:flex" alt="Flowbite Logo" />
            <span class="self-center text-2xl hidden sm:flex font-semibold whitespace-nowrap dark:text-white">Logo</span>
        </a>
        <Searshbar class="block sm:flex mx-auto"></Searshbar>
    </div>
</template>
<script setup>
import Searshbar from './Searshbar.vue';
</script>
