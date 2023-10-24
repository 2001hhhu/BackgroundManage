import axios from 'axios'
import router from '@/router'
import { useUserStore } from '@/stores/modules/user.js'
const baseURL = 'http://big-event-vue-api-t.itheima.net'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => {
    Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    if (res.code === 0) {
      return res
    }
    // TODO 3. 处理业务失败
    ElMessage({ message: res.data.message || '服务异常', type: 'error' })
    return Promise.reject(res.data)
    // TODO 4. 摘取核心响应数据
  },
  (err) => {
    // TODO 5. 处理401错误
    ElMessage({
      message: err.response.data.message || '服务异常',
      type: 'error'
    })
    console.log(err)
    if (err.response?.status === 401) {
      router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
