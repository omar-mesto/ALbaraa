<template>
    <section class=" mt-20">
        <hr class="bg-green-500 h-10">
        <header class="w-36 pt-5 text-green">
            <Basetext class="hidden">Contact Us</basetext>
        </header>
        <main>
            <div v-for="item in items" :key="item.id" class="grid grid-cols-2 m-10 gap-8 sm:gap-6 sm:grid-cols-3">
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4 text-gray">{{item.name}}</li>
                </ul>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4 hover:underline ">{{ item.name2 }}</li>
                </ul>
            </div>
        </main>
        <hr class="bg-blue-900 h-10">
    </section>
    <Footer></Footer>
</template>
<script setup>
import { reactive } from 'vue';
import Basetext from '../Base/Basetext.vue';
import Footer from '../Footer.vue';

const items = reactive([
    { id: 1, name: 'Website:',      name2:'www.website.com'},
    { id: 2, name: 'Phone Number:', name2:'099766426383678'},
    { id: 3, name: 'WhatsApp',      name2:'www.linkWhats.com'},
    { id: 4, name: 'Facebook:',     name2:'www.linkFacebook.com'},
    { id: 4, name: 'Instagram:',    name2:'www.linkInstagram.com'},
    { id: 5, name: 'Twitter:',      name2:'www.linkTwitter.com'}
  ]);


</script>