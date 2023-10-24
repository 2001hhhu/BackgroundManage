import request from '@/utils/request.js'

//注册
export const userRegisterService = ({ username, password, repassword }) => {
  return request.post('/api/reg', { username, password, repassword })
}

export const userLoginService = ({ username, password }) =>
  request.post('api/login', { username, password })

export const userGetInfoService = () => {
  request.get('/my/userinfo')
}
