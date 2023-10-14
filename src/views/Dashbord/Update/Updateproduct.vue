<template>
    <Dashbordupdate>
        <template #head>
            product
        </template>
        <template #form>
            <div class="mt-4">
             <Baseselect>
                <template #label>Category Name</template>
                <template #options>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                </template>
            </baseselect>
            <Baseselect>
                <template #label>Section Name</template>
                <template #options>
                    <option>Section 1</option>
                    <option>Section 2</option>
                    <option>Section 3</option>
                </template>
            </baseselect>
            <Baseselect>
                <template #label>Brand Name</template>
                <template #options>
                    <option>Brand 1</option>
                    <option>Brand 2</option>
                    <option>Brand 3</option>
                </template>
            </baseselect>
            </div>            
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">product name</label>
              <input type="text"
                class="mt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md">
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">product details</label>
              <textarea class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md"></textarea>
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">product Price</label>
              <input type="number"
                class="mt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-600 rounded-md">
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">image Price</label>
                <input type="file"
                    class="mt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
        </template>
    </Dashbordupdate>
</template>
<script setup>

import Baseselect from '../../../components/Base/Baseselect.vue';
import Dashbordupdate from '../../../components/Dashborder/Dashbordupdate.vue';
</script>
