import axios from "../axios";
 
export const alldata=(data)=>{
  return axios({
    url: 'http://localhost:8088/system/IsolationInfo/list',
    method:'get',
    params: data
  })
}


// 登录方法
export function login(username, password, code, uuid) {
    const data = {
      username,
      password,
    }
    return axios({
      url: 'http://localhost:8088/login',
      
      headers: {
        isToken: false
      },
      method: 'post',
      data: data
    })
  }
  
  // 注册方法
  export function register(data) {
    return axios({
      url: '/register',
      headers: {
        isToken: false
      },
      method: 'post',
      data: data
    })
  }
 
export default {alldata}