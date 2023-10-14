<template>
    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
        class="block  text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        type="button">
        <h3>Add  <slot name="button_name"></slot> +</h3>
    </button>

    <div id="authentication-modal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0  right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-200">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400  hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="authentication-modal">
                    <Closeicon></Closeicon>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <div class=" -mt-3 mr-5 font-mono text-center">
                        <h2 class="text-2xl"><slot name="add"></slot></h2>
                    </div>
                    <form class="space-y-6" action="#">
                        <div class="mt-5">
                            <div class="my-5">
                               <slot name="modale_name"></slot>
                            </div>
                            <slot name="input"></slot>  
                        </div>
                        <slot name="save"></slot>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Closeicon from '../svg/Closeicon.vue'

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>