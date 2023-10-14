<template>
    <main class="md:flex block ">
        <Sidebar></sidebar>
        <section class="md:w-3/4 w-full">
            <Pagination ></Pagination>
            <Servisecardes></Servisecardes>
        </section>
    </main>
</template>
<script setup>
import Servisecardes from '../Card/Cardservise/Servisecardes.vue'
import Pagination from './Pagination.vue';
import Sidebar from './Sidebar.vue';


</script>