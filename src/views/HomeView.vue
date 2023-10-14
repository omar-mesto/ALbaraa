<template >
    <Headerpage>
        <template #Navbar>
            <Navbar class="block absolute sm:flex mx-auto w-screen"></Navbar>
        </template>
        <template #Carousel>
            <Carouselslider v-if="useBanner().data.length>0"></Carouselslider>
        </template>
    </Headerpage>

    <Basetext class="block">Our Top Products</Basetext>
    <servisecardes></servisecardes>

    <Basetext class="block">Our Top Services</Basetext>
    <servisecardes></servisecardes>

    <Basetext class="block">New Prodact</Basetext>
    <Productcardes></Productcardes>
        
    <Footer></Footer>


</template>
<script setup>

import Headerpage from '../components/header/Headerpage.vue';
import Navbar from '../components/header/Navbar.vue';
import Basetext from '../components/Base/Basetext.vue';
import servisecardes from '../components/card/Cardservise/Servisecardes.vue'
import Productcardes from '../components/Card/Cardproduct/productcardes.vue';
import Footer from '../components/Footer.vue';
import Carouselslider from '../components/header/Carouselslider.vue';
import { onMounted } from 'vue';
import { useBanner } from '../Stores/Admin/Baner';
 onMounted(()=>{
  
    useBanner().banners();
 })



</script>