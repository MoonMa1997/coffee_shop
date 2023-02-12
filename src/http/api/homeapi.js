import axios from "../axios";
 
export const alldata=(data)=>{
  return axios({
    url: '/register',
    headers: {
      isToken: false
    },
    method:'post',
    data: data
  })
}
 
 
export default {alldata}