<template>
    <section class="bg-gray-50 sm:ml-72 ml-0 max-w-5xl overflow-hidden my-20 border border-gray-300 dark:bg-gray-900 sm:p-0">
        <div class="flex flex-col md:flex-row bg-gray-100 items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-1/2 text-gray-500">
               <Basetext  class="hidden "><slot name="name" ></slot></Basetext>
            </div>
                <slot name="modale"></slot>
        </div>
        <div class="w-full ">
            <div class="bg-white dark:bg-gray-800 relative  shadow-md sm:rounded-lg overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="text-sm  text-gray-500 w-full  dark:text-gray-400">
                        <thead class="text-base">
                            <tr>
                                <slot name="table_head"></slot>
                                <th scope="col" class="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                <slot name="table_body"></slot> 
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </section>
</template>
<script setup>
import Basetext from '../Base/Basetext.vue';


</script>
