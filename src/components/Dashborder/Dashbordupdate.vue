<template>
    <div class="bg-gray-100 min-h-screen">
        <header class="bg-white shadow-lg">
            <div class="container flex gap-2 mx-auto py-5">
                <router-link to="/DashbordView/">
                    <Prevoicon></Prevoicon>
                </router-link>
                <h1 class="text-2xl font-semibold text-gray-800">Update
                    <slot name="head"></slot>
                </h1>
            </div>
        </header>

        <main class="container mx-auto px-4 py-10">
            <div class="bg-white rounded-lg shadow-xl overflow-hidden">
                <div class="p-6">
                    <form>
                        <slot name="form"></slot>
                    </form>
                </div>
                <div class="px-6 py-4 flex justify-center">
                   <slot name="button"></slot>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Prevoicon from '../../components/svg/Prevoicon..vue'
import Loading from '../svg/loading.vue';


const isLoading = ref(true)
</script>
