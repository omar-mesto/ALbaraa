<template>
    <Dashbordnavbar></Dashbordnavbar>
    <Dashbordidebar></Dashbordidebar>
    <Dashbordtable>
        <template #name>
            <span class="font-sans text-lg">Section Table</span>
        </template>
        <template #modale>
            <basemodale>
                <template #button_name>
                    Section
                </template>
                <template #add>
                    <Basetext class="hidden">Section </basetext>
                </template>
                <template #modale_name>
                    <lable class="block mb-2 font-medium text-gray-900">Section name:</lable>
                </template>
                <template #input>
                    <input type="text" class="w-full">
                    <Baseselect>
                        <template #label>
                            Select Category:
                        </template>
                        <template #options>
                            <option>Category name1</option>
                            <option>Category name2</option>
                            <option>Category name3</option>
                        </template>
                    </Baseselect>
                </template>
                <template #save>
                    <button type="button" @click="addbanar()" :disabled="isCompressing"
                        class="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Save
                    </button>
                </template>
            </basemodale>
        </template>
        <template #table_head>
            <th scope="col" class="px-4 py-3">Category name</th>
            <th scope="col" class="px-4 py-3">Section name</th>
        </template>
        <template #table_body>
            <tr class="text-center border-b text-sm border-gray-200">
                <td scope="col" class="px-4 py-3">aphfapofhapofh</td>

                <td scope="col" class="px-4 py-3">apofhapofh</td>
                <td scope="col" class="px-4 py-3 w-40">
                    
                </td>
                <td scope="col" class="px-4 py-3">
                    <button type="button"
                        class="text-green-700 hover:text-white border border-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2 text-center mr-0 md:mr-2 mb-2">Update</button>
                    <button type="button"
                        class="text-red-700 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2 text-center mr-0 md:mr-2 mb-2">
                        Delete
                    </button>
                </td>

            </tr>
        </template>
    </Dashbordtable>
</template>
<script setup>
import Dashbordidebar from '../../components/Dashborder/Dashbordidebar.vue';
import Dashbordnavbar from '../../components/Dashborder/Dashbordnavbar.vue';
import Dashbordtable from '../../components/Dashborder/Dashbordtable.vue';
import Basemodale from '../../components/Base/Basemodale.vue';
import Basetext from '../../components/Base/Basetext.vue';
import Baseselect from '../../components/Base/Baseselect.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

onMounted(() => {
    getdata();

})
const data=ref([])
function getdata() {
    for (let i = 1; i <=100; i++) {
        axios.get(`https://651b2dd9194f77f2a5ae5283.mockapi.io/Category/${i}/Section`)
            .then(res => {
                data.value=res.data
                console.log(data.value)
            })
            .catch(err => {
                console.log('err');
            })

    }
}
</script>