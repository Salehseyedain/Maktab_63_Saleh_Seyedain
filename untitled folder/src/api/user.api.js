import {LOGIN} from '../configs/url.config';
import http from '../services/http.service';
import {ACCESS_TOKEN, IS_LOGGED_IN} from '../configs/variables.config';






export async function login(data) {

    try {

        const response = await http.post('/auth/login',data);
        // const response = await http.get('/files');

        localStorage.setItem(ACCESS_TOKEN, response.data.token);
        localStorage.setItem(IS_LOGGED_IN, true.toString());
        return response.data;
    } catch (e) {

        return Promise.reject(e);
    }
}

export async function getData(url) {

    try {
        const response = await http.get(url);
        // console.log("geeet",response)

        return response.data;
    } catch (e) {
        // console.log("apia",e)
        return Promise.reject(e);
    }
}

export async function Delete(url) {

    try {
        const response = await http.delete(`/products/${url}`);
        // console.log("deeelleeetttt",response)

        return response.data;
    } catch (e) {
        // console.log("nshhhddd",e)
        return Promise.reject(e);
    }
}
export async function edit(url,data) {
        // console.log("dataa",data,"iddd",url)
    try {
        const response = await http.put(`/products/${url}`,data);
        return response.data;
    } catch (e) {

        return Promise.reject(e);
    }
}


export async function post(url,data) {
    console.log("dataa",data,"iddd",url)
    try {
        const response = await http.post(`${url}`,data);
        console.log("oppppppppppp",response)
        return response.data;
    } catch (e) {

        return Promise.reject(e);
    }
}