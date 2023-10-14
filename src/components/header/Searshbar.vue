<template>
    <div :class="props.class">
        <div class="relative mx-auto">
           <input type="search" class="w-72 h-11" placeholder="Searsh">
            <button type="submit" class="absolute top-0 right-0 h-11 w-9 p-2.5 text-sm font-medium text-white bg-green-500">
                <searshicon></searshicon>
                <span class="sr-only ">Search</span>
            </button>
        </div>
    </div>
</template>
<script setup>
import Searshicon from '../svg/Searshicon.vue';

 const props=defineProps({class:{default:'flex'}})
</script>
