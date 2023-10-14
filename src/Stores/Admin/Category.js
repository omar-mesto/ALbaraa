import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { notifgation } from '../../components/Base/Noti.js'
import { createPinia } from 'pinia'
import router from '../../router/index.js'

export const pinia = createPinia()

export const useStore = pinia.useStore

const usenote = notifgation()

export const useCategory = defineStore('category', () => {
  const data = ref([])

  function login(params) {
    axios
      .post('https://651b2dd9194f77f2a5ae5283.mockapi.io/Category', params)
      .then((response) => {
        console.log(response.data)
        fetchData()
        usenote.showToastSuccess()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function fetchData() {
    axios.get(`https://651b2dd9194f77f2a5ae5283.mockapi.io/Category`).then((response) => {
      data.value = response.data
      console.log(response.data)
    })
  }
  function Deletestore(id) {
    axios
      .delete(`https://651b2dd9194f77f2a5ae5283.mockapi.io/Category/${id}`)
      .then((res) => {
        usenote.showToastSuccess()
        fetchData()
        return id
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function updatbanar(parames,id) {
    axios
      .put(`https://651b2dd9194f77f2a5ae5283.mockapi.io/Category${id}`, parames)
      .then((response) => {
        usenote.showToastSuccess();
        router.go(-1);
        return id;
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return { fetchData, data, login, Deletestore,updatbanar }
})
