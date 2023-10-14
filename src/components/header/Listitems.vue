<template>
    <ul class="w-screen lg:w-64 lg:block md:flex flex justify-between text-sm font-medium border  md:border-gray-500">
        <router-link v-for="item in items" :key="item.id" :to="item.router" >
            <li class="md:w-20 sm:w-20 w-30 lg:w-full px-4 md:py-3 sm:py-5 py-5 text-center font-medium h-12 md:h-16 border-gray-500 md:border-r border-r-0 lg:border-r-0 lg:border-b  border-b-0 border-gray cursor-pointer focus:outline-none"
                :class="{'bg-green-500 text-white':item.router===$route.path}">
                {{item.name }}
            </li>
        </router-link>
    </ul>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import {RouterLink} from 'vue-router'
  



  const items = reactive([
    { id: 1, name: 'Home',router:'/' },
    { id: 2, name: 'Product',router:'/ProductView' },
    { id: 3, name: 'Servic',router:'' },
    { id: 4, name: 'About',router:'/AboutView'},
    { id: 5, name: 'Contact',router:'/ContactView'}
  ]);


  </script>