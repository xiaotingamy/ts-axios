/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 14:42:13
 * @LastEditTime: 2019-09-05 23:13:27
 * @LastEditors: Please set LastEditors
 */
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
