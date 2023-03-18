import axios from "../axios";
 
export const alldata=(data)=>{
  return axios({
    url: 'http://localhost:8088/system/OrderInfo/list',
    method:'get',
    params: data
  })
}

// 新增订单管理
export function addOrderInfo(data) {
  return axios({
    url: 'http://localhost:8088/system/OrderInfo',
    method: 'post',
    data: data
  })
}
 
 
export default {alldata}