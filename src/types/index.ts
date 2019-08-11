/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 14:42:13
 * @LastEditTime: 2019-08-11 14:46:32
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
}
