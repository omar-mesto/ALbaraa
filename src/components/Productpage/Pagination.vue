<template>
    <div class="md:flex block mx-10 md:mx-0 justify-between -mt-16">
        <h2 class="font-medium text-lg p-20 pb-0 text-blue-500" :class="props.class">All Irons</h2>
        <nav aria-label="Page  navigation example">
            <ul class="inline-flex md:mt-20 mt-5 mr-8 md:mr-0 text-base h-10"
            v-for="item in items" :key="item.id">
                <li
                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white cursor-pointer border border-gray">
                    {{ item.name }}
                </li>
        
            </ul>
        </nav>
    </div>
</template>
<script setup>

import { reactive } from "vue";

const props=defineProps({class:{default:'flex'}})

  const items = reactive([
    { id: 1, name: 'page'},
    { id: 2, name: '1'},
    { id: 3, name: '2'},
    { id: 4, name: '3'},
    { id: 4, name: '4'}
  ]);
</script>