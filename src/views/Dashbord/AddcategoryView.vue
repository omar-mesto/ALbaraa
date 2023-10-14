<template>
    <Dashbordnavbar></Dashbordnavbar>

    <Dashbordidebar></Dashbordidebar>

    <Dashbordtable>
        <template #name>
            <span class="font-sans">Category Table</span>
        </template>

        <template #modale>
            <Basemodale>
                <template #button_name>
                    Category
                </template>

                <template #add>
                    <span class="text-xl">Category </span>
                </template>

                <template #modale_name>
                    <Baselable>Category name:</Baselable>
                </template>

                <template #input>
                    <span class="text-red-500 text-xs">{{ errors.name }}</span>
                    <input type="text" class="w-full" v-model="name">
                </template>
                <template #save>
                    <button type="button" @click="addcategory()" :disabled="isCompressing"
                        class="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Save
                    </button>
                </template>
            </Basemodale>
        </template>

        <template #table_head>
            <th scope="col" class="px-4 py-3">Category name</th>
        </template>

        <template #table_body>
            <tr class="text-center border-b text-sm border-gray-200" v-for="item in fetchdata.data" :key="item.id">
                <td scope="col" class="px-4 py-3">{{ item.name }}</td>
                <td scope="col" class="px-4 py-3">
                    <router-link :to="{name:'UpdatecategoryView',params:{id :item.id,name:item.name,}}">
                        <button type="button" 
                            class="text-green-700 hover:text-white border border-green-500 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2 text-center mr-0 md:mr-2 mb-2">
                            Update
                        </button>
                    </router-link>
                    <button type="button" @click="Deletestore(item.id)"
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
import Dashbordtable from '../../components/Dashborder/Dashbordtable.vue'
import Basemodale from '../../components/Base/Basemodale.vue'
import Baselable from '../../components/Base/Baselable.vue';
import { onMounted, ref } from 'vue';
import { useCategory } from '../../Stores/Admin/Category.js';

onMounted(() => {
    getdata();

})

const fetchdata = useCategory()

function getdata() {
    fetchdata.fetchData();
}

function Deletestore(id) {
    fetchdata.Deletestore(id);
}
function addcategory() {
    if (validatation()) {
        isCompressing.value = true;
        fetchdata.login({
            name: name.value
        })
    }
}
const name = ref('');
const isCompressing = ref(false);


const errors = ref({
    name: '',
})

function validatation() {
    let isValid = true;
    if (!name.value) {
        errors.value.name = 'Name is required';
        isValid = false;
    } else {
        errors.value.name = '';
    }
    return isValid;
}







</script>