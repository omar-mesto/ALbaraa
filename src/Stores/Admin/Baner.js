import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { notifgation } from '../../components/Base/Noti.js'
import { createPinia } from 'pinia'
import router from '../../router/index.js'

export const pinia = createPinia()

export const useStore = pinia.useStore

const usenote = notifgation()

export const useBanner = defineStore('banner', () => {
  const data = ref([])

  let formData = new FormData()

  const headers = {
    'content-type': 'multipart/form-data'
  }
  function login(params, image) {
    formData.append('image', image)
    axios
      .post('https://651b4c5d194f77f2a5ae6836.mockapi.io/api/baraa/Banar', params, formData, {
        headers: headers
      })
      .then((response) => {

        //todo   push new item to data;

        usenote.showToastSuccess()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function banners() {
    axios.get(`https://651b4c5d194f77f2a5ae6836.mockapi.io/api/baraa/Banar`).then((response) => {
      data.value = response.data
      console.log(response.data)
    })
  }
  function Deletestore(id) {
    axios
      .delete(`https://651b4c5d194f77f2a5ae6836.mockapi.io/api/baraa/Banar/${id}`)
      .then((res) => {
        usenote.showToastSuccess()
        banners()
        return id
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function updatbanar(parames,id) {
    axios
      .put(`https://651b4c5d194f77f2a5ae6836.mockapi.io/api/baraa/Banar/${id}`, parames)
      .then((response) => {
        usenote.showToastSuccess();
        router.go(-1);
        return id;
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return { banners, data, login, Deletestore,updatbanar }
})
