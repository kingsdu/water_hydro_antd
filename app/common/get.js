import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
    var result = fetch(url, {
        method: 'GET', 
        headers: {
            'content-type':'application/json'
        }
    });
    return result;
}


//GET方式  带参数方式
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

    const result = fetch(url, {
        method: 'GET', 
        headers: {
            'content-type':'application/json'
        }
    });

    return result.then(response=> {
        return response.json();
    }).catch(err=>
        console.log('parsing failed', err)
    );
}


// return result.then(response=> {
//     console.log('response.json()', response.json())
//     return response.json();
// }).catch(err=>
//     console.log('parsing failed', err)
// );

