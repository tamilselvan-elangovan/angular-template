import axios, { AxiosResponse, HeadersDefaults, RawAxiosRequestHeaders } from "axios"
import { methods }from '../methods/methods'
import { environment } from "../environments/environment"

type type = 'BASE_URL' | 'none' | ''
type method = 'GET' | 'POST' | 'PATCH' | 'DELETE'
class ApiGateWay {
    #GET: method = 'GET'
    #POST: method = 'POST'
    #PATCH: method = 'PATCH'
    #DELETE: method = 'DELETE'
    #appendUrl(url: string, type: type) {
        switch(type) {
            case 'BASE_URL': return environment.BASE_URL + url;
            case 'none': return url;
            default: return url;
        }
    }

    get(url: string, type: type, data: any = {}) {
        url = this.#appendUrl(url, type)
        return new Promise((resolve, reject) => {
            this.axiosCall(url, data, this.#GET).then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }

    post(url: string, type: type, data: any) {
        url = this.#appendUrl(url, type)
        return new Promise((resolve, reject) => {
            this.axiosCall(url, data, this.#POST).then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }

    patch(url: string, type: type, data: any) {
        url = this.#appendUrl(url, type)
        return new Promise((resolve, reject) => {
            this.axiosCall(url, data, this.#PATCH).then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }

    delete(url: string, type: type, data: any = {}) {
        url = this.#appendUrl(url, type)
        return new Promise((resolve, reject) => {
            this.axiosCall(url, data, this.#DELETE).then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }

    private axiosCall(url: string, data: any, method: method) {
        return new Promise((resolve, reject) => {
            const headers: RawAxiosRequestHeaders = {
                "Content-Type": "application/json",
                "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone
            }
            const token = methods.getCookieToken()
            if (token) headers['authorization'] = `Bearer ${token}`
            axios({
                method, url,
                headers: headers,
                data: data?data:{},
            }).then((response: AxiosResponse) => { 
                resolve(response?.data) 
            }).catch((error: any) => { 
                if (error.response?.status === 401) {
                    reject(error)
                    methods.logout()
                } else reject(error)
            })
        })
    }

}

export const apiCall = new ApiGateWay()
