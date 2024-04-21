import axios from 'axios'
//@ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken, serverUrl } from './tools'

const axiosInst = axios.create({
  baseURL: serverUrl,
  timeout: 5000,
  withCredentials: true,
})

// Add a request interceptor
axiosInst.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.token = getToken()
    NProgress.start()
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosInst.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    NProgress.done()
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export const get = (url: string, params: any = {}) => {
  return axiosInst.get(url, { params }).then((res) => res.data)
}

export const post = (url: string, data: any = {}) => {
  return axiosInst.post(url, data).then((res) => res.data)
}

export const put = (url: string, data: any = {}) => {
  return axiosInst.put(url, data).then((res) => res.data)
}

export const del = (url: string, data: any = {}) => {
  return axiosInst.delete(url, { data }).then((res) => res.data)
}

export const patch = (url: string, data: any = {}) => {
  return axiosInst.patch(url, data).then((res) => res.data)
}
