<template>
    <Dashbordupdate>
        <template #head>
            Category
        </template>
        <template #form>
            <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700">Category Name</label>
                <input type="text" v-model="name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
        </template>
        <template #button>
            <button type="submit" class="w-60 bg-green-500 p-3 text-white rounded-md" @click="updatdata(id)">
                <span v-show="!isLoading">Save</span>
                <span v-show="isLoading">
                    <Loading></loading>
                </span>
            </button>
        </template>
    </Dashbordupdate>
</template>
  
<script setup>
import Dashbordupdate from '../../../components/Dashborder/Dashbordupdate.vue';
import router from '../../../router';
import { ref } from 'vue';
import Loading from '../../../components/svg/loading.vue';
import { useCategory } from '../../../Stores/Admin/Category';


const id = ref('')
id.value = router.currentRoute.value.params.id;

console.log(id.value)



const isLoading = ref(false)
const UpdaBanner = useCategory()


const name = ref('')

function updatdata(id) {
    UpdaBanner.updatbanar({
        name: this.name
    }, id)
}
</script>