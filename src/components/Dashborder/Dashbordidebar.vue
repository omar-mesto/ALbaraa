<template>
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-100">
            <ul class="space-y-2 font-medium">
                <router-link :to="item.router" v-for="item in items" :key="item.id">
                    <li class="flex items-center p-2 py-4  text-gray-900 rounded-lg  hover:bg-gray-200 group"
                        :class="{ 'bg-gray-200 ': item.router === $route.path }">
                        <span class="flex-1 ml-3 whitespace-nowrap">{{ item.name }}</span>
                    </li>
                </router-link>
            </ul>
        </div>

    </aside>
</template>

<script setup>
import { reactive } from "vue";

const items = reactive([
    { id: 1, name: 'Dashbord', router: '/DashbordView/' },
    { id: 2, name: 'Add Category', router: '/AddcategoryView/' },
    { id: 3, name: 'Add Sections', router: '/AddsectionView/' },
    { id: 4, name: 'Add brands', router: '/AddbrandView/' },
    { id: 5, name: 'Add Prodact', router: '/AddproductView/' },
    { id: 6, name: 'Add Banner', router: '/AddbanarsView' }
]);
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'



// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>