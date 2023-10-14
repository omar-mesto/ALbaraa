<template>
    <figure class="relative">
     <slot name="Navbar"></slot>
      <img src="../../assets/MaskGroup1.png" class="w-screen mb-10" style="height: 450px;">
      <header
        class="px-0 mt-10 block md:block lg:flex  justify-between mx-auto w-screen absolute md:px-0 lg:px-40 gap-10 top-12 md:top-12">
       <listitems></Listitems>
        <slot name="Carousel"></slot>
      </header>
    </figure>
</template>
<script setup>
import Listitems from './Listitems.vue';



</script>