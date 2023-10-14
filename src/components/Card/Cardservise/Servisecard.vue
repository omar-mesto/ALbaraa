<template>
    <div class=" sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 my-10"  v-for="card in cards" :key="card.id">
        <router-link to="ProductinformationView">
            <div class="bg-white border border-gray-200 shadow">

                <img class="h-32 w-full mx-auto" src="../../../assets/17.png" alt="" />

                <div class="p-3">
                    <Basetext class="hidden">{{ card.title }}</Basetext>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ card.details }}</p>
                    <h2 class="text-right text-xs font-thin">{{ card.id }}</h2>
                </div>

            </div>
        </router-link>
    </div>
</template>
<script setup>
import { reactive } from "vue";
import {RouterLink} from 'vue-router'

import Basetext from "../../Base/basetext.vue";

const cards = reactive([
    { id: 1, path: "../../images/phone.png", title: 'lorem epson', details: 'lorem ipsum dolor,sit amet consectetur adipiscong elit.' },
    { id: 2, path: "../../images/phone.png", title: 'lorem epson', details: 'lorem ipsum dolor,sit amet consectetur adipiscong elit.' },
    { id: 3, path: "../../images/phone.png", title: 'lorem epson', details: 'lorem ipsum dolor,sit amet consectetur adipiscong elit.' },
    { id: 4, path: "../../images/phone.png", title: 'lorem epson', details: 'lorem ipsum dolor,sit amet consectetur adipiscong elit.' }
]);

</script>
