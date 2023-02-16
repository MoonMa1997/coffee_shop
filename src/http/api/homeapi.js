import axios from "../axios";
 
export const alldata=(data)=>{
  return axios({
    url: '/system/MedicalRecord/list',
    method:'get',
    params: data
  })
}
 
 
export default {alldata}