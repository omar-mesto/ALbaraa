<template>
    <Dashbordupdate>  
        <template #head>
            banar
        </template>
        <template #form>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Banar Name</label>
              <!-- <span class="text-red-500 text-xs">{{ errors.name }}</span> -->
              <input type="text" 
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Banar details</label>
              <!-- <span class="text-red-500 text-xs">{{ errors.password }}</span> -->
              <textarea class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Banar image</label>
              <input type="file"
                class="mt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
        </template>
    </Dashbordupdate>
</template>
<script setup>

import Dashbordupdate from '../../../components/Dashborder/Dashbordupdate.vue';
</script>