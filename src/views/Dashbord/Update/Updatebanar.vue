<template>
  <Dashbordupdate>
    <template #head>
      banar
    </template>
    <template #form>
      <div class="mt-4">
        <label class="block text-sm font-medium text-gray-700">Banar Name</label>
        <!-- <span class="text-red-500 text-xs">{{ errors.name }}</span> -->
        <input type="text" v-model="name"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
      </div>
      <div class="mt-4">
        <label class="block text-sm font-medium text-gray-700">Banar details</label>
        <!-- <span class="text-red-500 text-xs">{{ errors.password }}</span> -->
        <textarea v-model="details"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
      </div>
      <div class="mt-4">
        <label class="block text-sm font-medium text-gray-700">Banar image</label>
        <input type="file"
          class="mt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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
import { useBanner } from '../../../Stores/Admin/Baner';


const id = ref('')
id.value = router.currentRoute.value.params.id;

console.log(id.value)

import Loading from '../../../components/svg/loading.vue';


const isLoading = ref(false)
const UpdaBanner = useBanner()


const name = ref('')
const details = ref('')

function updatdata(id) {
  UpdaBanner.updatbanar({
    name: this.name,
    details: this.details
  }, id)
}
</script>