<template>
  <div class="bg-gray-100 min-h-screen">
    <header class="bg-white shadow-lg">
      <div class="container flex gap-2 mx-auto py-5">
        <router-link to="/DashbordView/">
          <Prevoicon></Prevoicon>
        </router-link>
        <h1 class="text-2xl font-semibold text-gray-800">Profile Page</h1>
      </div>
    </header>

    <main class="container mx-auto px-4 py-10">
      <div class="bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-800">Update Information</h2>
          <form>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Name</label>
              <span class="text-red-500 text-xs">{{ errors.name }}</span>
              <input type="text" v-model="name" :placeholder="fetchdata.admin[0]?.name" required=""
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">password</label>
              <span class="text-red-500 text-xs">{{ errors.password }}</span>
              <input type="password" v-model="password" :placeholder="fetchdata.admin[0]?.password" required=""
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <span class="text-red-500 text-xs">{{ errors.email }}</span>
              <input type="email" v-model="email" :placeholder="fetchdata.admin[0]?.email" required=""
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">image</label>
              <input type="file"
                class="mt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
          </form>
        </div>
        <div class="px-6 py-4 flex justify-center">
          <button type="submit" class="w-60 bg-green-500 p-3 text-white rounded-md" :disabled="isCompressing"
            @click="updatdata()">
            <span v-show="isLoading">
              <loading></loading>
            </span>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Prevoicon from '../../components/svg/Prevoicon..vue'
import loading from '../../components/svg/loading.vue'

onMounted(() => {
  getdata();
})

import { useAuth } from '../../Stores/Auth/Login.js';
const fetchdata = useAuth()

const name = ref('')
const email = ref('')
const password = ref('')
const isCompressing = ref(false);
const isLoading = ref(false);

const UpdatStore = useAuth()
function updatdata() {
  if (validateForm()) {
    isCompressing.value = true;
    isLoading.value = true
    UpdatStore.updatdata({
      name: name.value,
      email: email.value,
      password: password.value
    })
  }
}

function getdata() {
  fetchdata.fetchData();
}


const errors = ref({
  name: '',
  email: '',
  password: '',
})


function validateForm() {
  let isValid = true;
  if (!name.value) {
    errors.value.name = 'Name is required';
    isValid = false;
  } else {
    errors.value.name = '';
  }
  if (!password.value) {
    errors.value.password = 'Password is required';
    isValid = false;
  } else {
    errors.value.password = '';
  }
  if (!email.value) {
    errors.value.email = 'Email is required';
    isValid = false
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    errors.value.email = 'Email is invalid';
    isValid = false;
  } else {
    errors.value.email = '';
  }
  return isValid;
}

</script>
