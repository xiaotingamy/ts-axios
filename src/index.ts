/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 14:39:10
 * @LastEditTime: 2019-08-11 14:52:34
 * @LastEditors: Please set LastEditors
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig) {
  // todoz
  xhr(config)
}
export default axios
