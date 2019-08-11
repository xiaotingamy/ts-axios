/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 14:48:43
 * @LastEditTime: 2019-08-11 14:51:55
 * @LastEditors: Please set LastEditors
 */
import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
