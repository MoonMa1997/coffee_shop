import axios from "../axios";
 
export const alldata=(data)=>{
  return axios({
    url: 'http://localhost:8088/system/IsolationInfo/list',
    method:'get',
    params: data
  })
}
 
 
export default {alldata}