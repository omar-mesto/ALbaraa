import { defineStore } from 'pinia'
import router from '../../router/index.js'
import axios from 'axios'
import { notifgation } from '../../components/Base/Noti.js'

import { createPinia } from 'pinia'
import { ref } from 'vue'

export const pinia = createPinia()

export const useStore = pinia.useStore

const usenote = notifgation()

export const useAuth = defineStore('auth', () => {
  let admin = ref([])

  let formData = new FormData()

  const headers = {
    'content-type': 'multipart/form-data'
  }

  function login(params, image) {
    formData.append('image', image)
    axios
      .post('https://651b4c5d194f77f2a5ae6836.mockapi.io/api/baraa/login/', params, formData, {
        headers: headers
      })

      .then((response) => {
        
        usenote.showToastSuccess()
        setTimeout(() => {
          router.push('/DashbordView/')
        }, 5000)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function fetchData() {
    axios
      .get(`https://651b4c5d194f77f2a5ae6836.mockapi.io/api/baraa/login`)
      .then((response) => (admin.value = response.data))
  }

  function updatdata(parames) {
    axios
      .put(`https://651b4c5d194f77f2a5ae6836.mockapi.io/api/baraa/login/1/`, parames)
      .then((response) => {
        router.push("/DashbordView");
        usenote.showToastSuccess()
          router.push('/DashbordView/')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return { login, fetchData, admin, updatdata }
})
