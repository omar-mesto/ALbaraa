<template>
    <Dashbordnavbar></Dashbordnavbar>

    <Dashbordidebar></Dashbordidebar>

    <Dashbordtable>
        <template #name>
            <span class="font-sans text-lg">product Table</span>
        </template>

        <template #modale>
            <basemodale>
                <template #button_name>
                    product
                </template>

                <template #add>
                    <Basetext class="hidden">product </basetext>
                </template>

                <template #modale_name>
                    <Baselable>product name:</Baselable>
                </template>

                <template #input>
                    <input type="text" class="w-full">

                    <Baselable>product details:</Baselable>
                    <textarea class="w-full"></textarea>

                    <Baselable>product price:</Baselable>
                    <input type="text" class="w-full mb-3">

                    <input type="file" class="w-full">
                </template>
            </basemodale>
        </template>

        <template #table_head>
            <th scope="col" class="px-2 py-3">Category name</th>
            <th scope="col" class="px-2 py-3">Section name</th>
            <th scope="col" class="px-2 py-3">Brand name</th>
            <th scope="col" class="px-2 py-3"> name</th>
            <th scope="col" class="px-2 py-3"> details</th>
            <th scope="col" class="px-2 py-3"> image</th>
            <th scope="col" class="px-2 py-3"> price</th>
        </template>

        <template #table_body>
            <!-- <tr class="text-center border-b text-sm border-gray-200" v-for="item in fetchdata.data" :key="item.id">
                <td scope="col" class="px-4 py-3">{{ item.name }}</td>

                <td scope="col" class="px-4 py-3">{{ item.details }}</td>
                <td scope="col" class="px-4 py-3 w-40">
                    <img :src="item.image" :alt="item.id">
                </td>
                <td scope="col" class="px-4 py-3">
                    <button type="button"
                        class="text-green-700 hover:text-white border border-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2 text-center mr-0 md:mr-2 mb-2">Update</button>
                    <button type="button"
                        class="text-red-700 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2 text-center mr-0 md:mr-2 mb-2">
                        Delete
                    </button>
                </td>

            </tr> -->
        </template>
    </Dashbordtable>
</template>
<script setup>
import Dashbordidebar from '../../components/Dashborder/Dashbordidebar.vue';
import Dashbordnavbar from '../../components/Dashborder/Dashbordnavbar.vue';
import Dashbordtable from '../../components/Dashborder/Dashbordtable.vue';
import Basemodale from '../../components/Base/Basemodale.vue';
import Basetext from '../../components/Base/basetext.vue';
import Baselable from '../../components/Base/baselable.vue';


</script>