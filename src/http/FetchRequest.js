import Api from '../res/Api';

let headers = {
    'Authorization': `APPCODE ${Api.AppCode}`,
    'Accept': 'application/json',
    'X-Ca-Key': '24580493',
    'headerName': 'consoleClientHeaderName',
    'X-Ca-Stage': 'RELEASE'
}

let head = new Headers();
head.append("Authorization", `APPCODE ${Api.AppCode}`);
head.append("X-Ca-Key", "24580493");

export function myFetch(params, callbakc) {
    let myUrl;
    let myParams;
    if (params == undefined || typeof params != 'object') {
        console.log('params error');
    }
    myUrl = params.url;
    if (params.method == 'GET') {
        console.log('get');
        get(myUrl, callbakc);
    } else if (params.method == 'POST') {
        console.log('post');
        myParams = params.obj;
        post(myUrl, myParams, callbakc);
    }
}

/*
* url --->请求地址
* callback ---->回调函数
* */
async function get(url, callback) {
    try {
        let respones = await fetch(url, {
            method: 'GET',
            headers: head,
        }).then((respone) => respone.json());
        return callback(respones);
    } catch (e) {
        console.log('异常', e);
    }
}

/*
* url---->请求地址
* params---->上传的数据
* callback---->回调函数
* */
async function post(url, params, callback) {
    try {
        let respones = await fetch(url, {
            method: 'POST',
            headers: head,
            body: JSON.stringify(params)
        }).then((respone) => respone.json());
        return callback(respones);
    } catch (e) {
        console.log('异常', e);
    }
}
