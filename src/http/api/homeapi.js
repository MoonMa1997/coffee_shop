import axios from "../axios";
 
export const alldata=(data)=>{
  return axios({
    url: 'http://localhost:8088/system/ShopCart/list',
    method:'get',
    params: data
  })
}

// 新增订单管理
export function addOrderInfo(data) {
  return axios({
    url: 'http://localhost:8088/system/ShopCart',
    method: 'post',
    data: data
  })
}

// 查找订单
export function getProductInfo(data) {
  return axios({
    url: 'http://localhost:8088/system/ProductInfo/list',
    method: 'get',
    params: data,
    
  })
}

// 新增收藏管理
export function addCollectInfo(data) {
  return axios({
    url: 'http://localhost:8088/system/CollectInfo',
    method: 'post',
    data: data
  })
}
 
 
export default {alldata}