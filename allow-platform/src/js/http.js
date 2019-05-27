/**
 * 封装的axios下的请求方法及拦截器
 */

// import Vue from "vue";
import axios from 'axios';
// import qs from 'qs';

// Vue.prototype.$http = axios;
// Vue.config.productionTip = false;

// axios.defaults.timeout = 2000;
// axios.defaults.baseURL = 'http://yq01-jady02.epc.baidu.com:8090';
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers['Accept'] = 'pplication/json';


// http request 拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么 
    config.headers = {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",  
        'Accept': 'application/json'  
    };
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// http response 拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


const instance = axios.create({  
    // baseURL: '/activity/duanwu/index',  
    timeout: 2000,  
    withCredentials: true,
    // validateStatus:function(status){  
    //     return status < 500;  
    // },  
    headers: {  
        // 跨域请求 这个配置不能少  
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",  
        'Accept': 'application/json'  
    }
    // transformRequest: function(data){
    //   return JSON.stringify(data);
    // }
    // transformResponse: function(data){
    //   return JSON.parse(data);
    // }
}); 

let get = function(url){  
    // var apiStr = serverPort + api[urlKey];  
    // return axios.get(apiStr,paramObj);  
    return axios.get(url);
} 
  
let post = function(urlKey,paramObj){  
    var apiStr = serverPort + api[urlKey];  
    return instance.post(apiStr,querystring.stringify(paramObj));  
}
//通过axios发送请求  
export {  
    instance,
    // get,
    // post
}  