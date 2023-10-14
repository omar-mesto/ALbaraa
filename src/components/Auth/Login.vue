<template>
  <section class="bg-gray-200 h-screen dark:bg-gray-900">
    <div class="flex flex-col items-center  justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <Basetext class="hidden">
            <slot name="head">Login</slot>
          </Basetext>
          <form class="space-y-4 md:space-y-6">
            <div>
              <Baselable>User Name :</Baselable>
              <input class="w-full border border-gray-300 p-2.5 z-20 text-sm text-gray-900" v-model="name"
              placeholder="User Name">
              <span class="text-red-500 text-xs">{{ errors.name }}</span>
            </div>
            <div>
              <Baselable>Email :</Baselable>
              <input class="w-full border border-gray-300 p-2.5 z-20 text-sm text-gray-900" v-model="email"
              placeholder="email">
              <span class="text-red-500 text-xs">{{ errors.email }}</span>
            </div>
            <div>
              <Baselable>Password :</Baselable>
              <input class="w-full border border-gray-300 p-2.5 z-20 text-sm text-gray-900" v-model="password"
              placeholder="*******">
              <span class="text-red-500 text-xs">{{ errors.password }}</span>
            </div>
            <div>
              <Baselable>image :</Baselable>
              <input type="file" @change="handleFileChange" accept="image/*" />
              <span class="text-red-500 text-xs">{{ errors.image }}</span>
            </div>
            <button type="button" class="bg-green-500 text-white p-3 w-full" :disabled="isCompressing" @click="login()">
              <span v-show="!isLoading">Save</span>
              <span v-show="isLoading">
                <loading></loading>
              </span>
            </button>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import Basetext from '../../components/Base/Basetext.vue';
import Baselable from '../../components/Base/Baselable.vue';

import { ref } from 'vue';


import { useAuth } from '../../Stores/Auth/Login.js';
import Loading from '../svg/loading.vue';

const errors = ref({
  name: '',
  email: '',
  password: '',
})

function validatation() {
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


const handleFileChange = async (event) => {
  const selectedFile = event.target.files[0];
  const file = selectedFile;
  image1.value = file.name;
};

const name = ref('');
const email = ref('');
const password = ref('');
const image1 = ref('');
const isCompressing = ref(false);

const isLoading = ref(false);

const LoginStore = useAuth()
const formData = new FormData();
function login() {
  if (validatation()) {
    isCompressing.value = true;
    isLoading.value = true
    LoginStore.login({
      name: name.value,
      password: password.value,
      email: email.value,
      image: image1.value
    }

    );
  }
}

</script>