import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/AboutView',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ProductView',
      name: 'ProductView',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/ContactView',
      name: 'ContactView',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/ProductinformationView',
      name: 'ProductinformationView',
      component: () => import('../views/ProductinformationView.vue')
    },
    {
      path: '/DashbordView',
      name: 'DashbordView',
      component: () => import('../views/Dashbord/DashbordView.vue')
    },
    {
      path: '/AddcategoryView',
      name: 'AddcategoryView',
      component: () => import('../views/Dashbord/AddcategoryView.vue')
    }, 
    {
      path: '/AddsectionView',
      name: 'AddsectionView',
      component: () => import('../views/Dashbord/AddsectionView.vue')
    },
    {
      path: '/AddbrandView',
      name: 'AddbrandView',
      component: () => import('../views/Dashbord/AddbrandView.vue')
    },
    {
      path: '/AddproductView',
      name: 'AddproductView',
      component: () => import('../views/Dashbord/AddproductView.vue')
    },
    {
      path: '/AddbanarsView',
      name: 'AddbanarsView',
      component: () => import('../views/Dashbord/AddbanarsView.vue')
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: '/ProfileView',
      name: 'ProfileView',
      component: () => import('../views/Dashbord/ProfileView.vue')
    },
    {
      path: '/UpdatebanarView/:id',
      name: 'UpdatebanarView',
     
      component: () => import('../views/Dashbord/Update/Updatebanar.vue')
    },
    {
      path: '/UpdatesectionView',
      name: 'UpdatesectionView',
      component: () => import('../views/Dashbord/Update/Updatesection.vue')
    },
    {
      path: '/UpdatecategoryView',
      name: 'UpdatecategoryView',
      component: () => import('../views/Dashbord/Update/Updatecategory.vue')
    },
    {
      path: '/UpdatebrandView',
      name: 'UpdatebrandView',
      component: () => import('../views/Dashbord/Update/Updatebrand.vue')
    },
    {
      path: '/UpdateproductView',
      name: 'UpdateproductView',
      component: () => import('../views/Dashbord/Update/Updateproduct.vue')
    },
  ]
})

export default router
