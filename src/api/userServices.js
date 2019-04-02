import { get, post } from '@/utils/fetch'

const login = (user_name, user_pwd) => post('/user/login', { user_name, user_pwd })
const userInfo = () => get('/user/userInfo')
export {
  login,
  userInfo
}