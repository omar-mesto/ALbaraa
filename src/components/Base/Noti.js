import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const notifgation = defineStore('note', () => {
  function showToastSuccess() {
    toast.success('Successful operation', {
      autoClose: 3000,
    });
  }

  return {
    showToastSuccess,
  };
});