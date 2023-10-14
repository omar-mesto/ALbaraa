<template>
    <Dashbordupdate>
        <template #head>
            Section
        </template>
        <template #form>
            <div class="mt-4">
              <!-- <label class="block text-sm font-medium text-gray-700">Category Name</label> -->
              <!-- <span class="text-red-500 text-xs">{{ errors.name }}</span> -->
             <Baseselect>
                <template #label>Category Name</template>
                <template #options>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                </template>
            </baseselect>
            </div>            
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Section name</label>
              <input type="text"
                class="mt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md">
            </div>
        </template>
    </Dashbordupdate>
</template>
<script setup>

import Baseselect from '../../../components/Base/Baseselect.vue';
import Dashbordupdate from '../../../components/Dashborder/Dashbordupdate.vue';
</script>
