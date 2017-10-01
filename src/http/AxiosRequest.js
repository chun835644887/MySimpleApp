import axios from 'axios';
import Api from '../res/Api';

let defaultConfig = {
    baseURL: 'http://toutiao-ali.juheapi.com/',
    timeout: 3000,
    headers: {
        'Authorization': `APPCODE ${Api.AppCode}`,
        'Accept': 'application/json',
        'X-Ca-Key': '24580493',
        'headerName': 'consoleClientHeaderName',
        'X-Ca-Stage': 'RELEASE'
    }
};
let instance;
export default class MyAxios {
    constructor(props) {
        if (props && typeof props == 'object') {
            instance = axios.create(props);
            /*设置axios的默认配置*/
        } else {
            instance = axios.create(defaultConfig);
        }
        /**
         * 请求拦截器 进行相关参数校验，控制是否继续当次请求
         * @return
         * **/
        instance.interceptors.request.use(function (config) {
            if (config) interceptorConfig = config;
            return config
        }, function (error) {
            return Promise.reject(error);
        });
    }
    send = (params,callback) => {
        let URL;
        let myParams;
        if(!params || typeof params != 'object'){
            throw new Error('参数异常');
        }
        URL = params.url;
        if(params.method === 'GET'){
            get(URL,callback)
        }
        if(params.method === 'POST'){
            myParams = params.obj;
            post(URL,myParams,callback);
        }
    }
}

async function get(url, callback) {
    try {
        let response = await instance.get(url);
        return callback(response);
    } catch (e) {
        console.log(e)
    }
}

async function post(url, params, callback) {
    let respone = await instance(url, params);
    return respone;
}