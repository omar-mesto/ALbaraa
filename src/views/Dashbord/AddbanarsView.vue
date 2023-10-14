<template>
    <Dashbordnavbar></Dashbordnavbar>

    <Dashbordidebar></Dashbordidebar>

    <Dashbordtable>
        <template #name>
            <span class="font-sans">Banars Table</span>
        </template>

        <template #modale>
            <Basemodale>
                <template #button_name>
                    Banars
                </template>

                <template #add>
                    <span class="text-xl">Banars </span>
                </template>

                <template #modale_name>
                    <Baselable>Banars name:</Baselable>
                    <span class="text-red-500 text-xs">{{ errors.name }}</span>
                    <input type="text" class="w-full" v-model="name">
                </template>

                <template #input>

                    <Baselable>Banars details:</Baselable>
                    <span class="text-red-500 text-xs">{{ errors.details }}</span>
                    <textarea class="w-full" v-model="details">add banar details</textarea>

                    <Baselable>Banars image:</Baselable>
                    <input type="file" @change="handleFileChange" accept="image/*">


                </template>
                <template #save>
                    <button type="button" @click="addbanar()" :disabled="isCompressing"
                        class="w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Save
                    </button>
                </template>
            </Basemodale>
        </template>

        <template #table_head>
            <th scope="col" class="px-4 py-3">Banars name</th>
            <th scope="col" class="px-4 py-3">Banars details</th>
            <th scope="col" class="px-4 py-3">Banars image</th>
        </template>

        <template #table_body>
            <tr class="text-center border-b text-sm border-gray-200" v-for="item in bannerStore.data" :key="item.id">
                <td scope="col" class="px-4 py-3">{{ item.name }}</td>
                <td scope="col" class="px-4 py-3">{{ item.details }}</td>
                <td scope="col" class="px-4 py-3 w-40">
                    <img :src="`${item.image}`" :alt="item.id">
                </td>
                <td scope="col" class="px-4 py-3">
                    <router-link :to="{name:'UpdatebanarView',
                        params:{
                            id :item.id,
                            name:item.name,
                            details:item.details
                    }}">
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
import { useBanner } from '../../Stores/Admin/Baner.js';

onMounted(() => {
    getdata();

})

const bannerStore = useBanner()

function getdata() {
    bannerStore.banners();
}

function Deletestore(id) {
    bannerStore.Deletestore(id);
}
function addbanar() {
    if (validatation()) {
        isCompressing.value = true;
        bannerStore.login({
            name: name.value,
            details: details.value,
            image: image1.value
        })
    }
}
const name = ref('');
const details = ref('');
const image1 = ref('');
const isCompressing = ref(false);


const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    const file = selectedFile;
    image1.value = file;
};

const errors = ref({
    name: '',
    details: '',
})

function validatation() {
    let isValid = true;
    if (!name.value) {
        errors.value.name = 'Name is required';
        isValid = false;
    } else {
        errors.value.name = '';
    }
    if (!details.value) {
        errors.value.details = 'details is required'
    }
    return isValid;
}







</script>