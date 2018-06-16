import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
    var result = fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    return result;
}


export function get_params(url,params){
    if(params){
        let paramsArray = [];
        //拼接参数  
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
        if (url.search(/\?/) === -1) {  
            url += '?' + paramsArray.join('&')  
        } else {  
            url += '&' + paramsArray.join('&')  
        }
    }
    //fetch请求  
    var result = fetch(url,{  
        method: 'GET', 
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    }); 

    return result;
}


