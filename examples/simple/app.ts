/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 15:19:56
 * @LastEditTime: 2019-08-11 15:47:18
 * @LastEditors: Please set LastEditors
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})