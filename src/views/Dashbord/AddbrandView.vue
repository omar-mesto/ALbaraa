<template>
    <Dashbordnavbar></Dashbordnavbar>

    <Dashbordidebar></Dashbordidebar>

    <Dashbordtable>
        <template #name>
            <span class="font-sans text-lg">Brand Table</span>
        </template>

        <template #modale>
            <basemodale>
                <template #button_name>
                    Brand
                </template>

                <template #add>
                    <Basetext class="hidden">Brand </basetext>
                </template>

                <template #modale_name>
                    <baselabel>Brand name:</baselabel>
                </template>

                <template #input>
                    <input type="text" class="w-full">

                    <Baseselect>
                        <template #label>
                            Select Section:
                        </template>
                        <template #options>
                            <option>Section name1</option>
                        </template>
                    </Baseselect>
                </template>
            </basemodale>
        </template>

        <template #table_head>
            <th scope="col" class="px-4 py-3">Category name</th>
            <th scope="col" class="px-4 py-3">Section name</th>
            <th scope="col" class="px-4 py-3">Brand name</th>
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
import Baseselect from '../../components/Base/Baseselect.vue';


</script>