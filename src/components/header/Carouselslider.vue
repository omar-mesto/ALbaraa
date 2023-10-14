<template>
    <div  class="w-full">
    <figure class="relative h-72">
        <img src="../../assets/MaskGroup2.png" class="w-screen flex" style="height: 500px" />
        <div id="controls-carousel" class="absolute flex overflow-hidden top-0 w-full h-auto" data-carousel="static">
            <div id="default-carousel" class="relative overflow-hidden w-full md:h-80 h-full -bottom-2 md:bottom-10" 
            
            data-carousel="slide" >
            <div class="flex justify-between relative h-72  overflow-hidden rounded-lg md:h-96" >
                <div v-for="item in bannerStore.data.slice(0,5)" :key="item.id" class="duration-700 ease-in-out "  data-carousel-item>
                        <img src="../../assets/22.png"
                            class="absolute block bottom-10  sm:w-64 w-52 h-44 -translate-x-1/2 -translate-y-1/2 top-1/2 -right-24 md:-right-28"
                            alt="..." />
                        <div class="lg:w-1/3 w-1/3  md:mt-10  mt-16 ml-2 sm:mx-16 h-60 md:pt-20 font-light block text-center  md:w-1/3 ">
                            <Basetext class="hidden">{{ item.name }}</Basetext>
                            <p>{{ item?.details }}</p>
                        </div>
                    </div>
                </div>
                <div class="absolute z-30 flex align-middle space-x-2 -translate-x-1/2 md:bottom-0 bottom-3 right-0">
                    <ul v-for="(item, index) in bannerStore.data.slice(0,5)" :key="item.id" >
                        <li>
                            <button type="button" class="w-6 h-6 rounded-full" aria-current="true" aria-label="Slide 2"
                                data-carousel-slide-to="0">
                                {{ index+1 }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </figure>
</div>
<!-- {{bannerStore }} -->
</template>
<script setup>


import Basetext from '../Base/basetext.vue';

import { onMounted } from 'vue'
import { useBanner } from '../../Stores/Admin/Baner.js';
import { initFlowbite } from 'flowbite';


const bannerStore = useBanner()



onMounted(() => {

    initFlowbite();
})



</script>
