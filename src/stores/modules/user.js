import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user.js'

export const useUserStore = defineStore('big-user', () => {
  const token = ref('')
  //登录token
  const setToken = (newToken) => {
    token.value = newToken
  }
  const removeToken = () => {
    token.value = ''
  }
  //用户获取数据
  const user = ref({})
  const getUser = async () => {
    const res = await userGetInfoService()
    user.value = res.data.data
  }
  const setUser = (obj) => {
    user.value = obj
  }
  return (
    {
      token,
      setToken,
      removeToken,
      user,
      getUser,
      setUser
    },
    {
      persist: true
    }
  )
})
