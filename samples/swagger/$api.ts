/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './pet'
import { Methods as Methods1 } from './pet/_petId@number'
import { Methods as Methods2 } from './pet/_petId@number/uploadImage'
import { Methods as Methods3 } from './pet/findByStatus'
import { Methods as Methods4 } from './store/inventory'
import { Methods as Methods5 } from './store/order'
import { Methods as Methods6 } from './store/order/_orderId@number'
import { Methods as Methods7 } from './user'
import { Methods as Methods8 } from './user/_username@string'
import { Methods as Methods9 } from './user/createWithArray'
import { Methods as Methods10 } from './user/createWithList'
import { Methods as Methods11 } from './user/login'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://petstore.swagger.io/v2' : baseURL).replace(/\/$/, '')
  const PATH0 = '/pet'
  const PATH1 = '/uploadImage'
  const PATH2 = '/pet/findByStatus'
  const PATH3 = '/store/inventory'
  const PATH4 = '/store/order'
  const PATH5 = '/user'
  const PATH6 = '/user/createWithArray'
  const PATH7 = '/user/createWithList'
  const PATH8 = '/user/login'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    pet: {
      _petId: (val0: number) => {
        const prefix0 = `${PATH0}/${val0}`

        return {
          uploadImage: {
            post: (option?: { body?: Methods2['post']['reqBody'], config?: T }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json(),
            $post: (option?: { body?: Methods2['post']['reqBody'], config?: T }) =>
              fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, `${prefix0}${PATH1}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix0}${PATH1}`
          },
          get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
          post: (option?: { body?: Methods1['post']['reqBody'], config?: T }) =>
            fetch(prefix, prefix0, POST, option, 'URLSearchParams').send(),
          $post: (option?: { body?: Methods1['post']['reqBody'], config?: T }) =>
            fetch(prefix, prefix0, POST, option, 'URLSearchParams').send().then(r => r.body),
          delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
            fetch(prefix, prefix0, DELETE, option).send(),
          $delete: (option?: { headers?: Methods1['delete']['reqHeaders'], config?: T }) =>
            fetch(prefix, prefix0, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix0}`
        }
      },
      findByStatus: {
        get: (option: { query: Methods3['get']['query'], config?: T }) =>
          fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json(),
        $get: (option: { query: Methods3['get']['query'], config?: T }) =>
          fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
        fetch(prefix, PATH0, POST, option).send(),
      $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
        fetch(prefix, PATH0, POST, option).send().then(r => r.body),
      put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
        fetch(prefix, PATH0, PUT, option).send(),
      $put: (option: { body: Methods0['put']['reqBody'], config?: T }) =>
        fetch(prefix, PATH0, PUT, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    store: {
      inventory: {
        get: (option?: { config?: T }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      },
      order: {
        _orderId: (val1: number) => {
          const prefix1 = `${PATH4}/${val1}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix1, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
            delete: (option?: { config?: T }) =>
              fetch(prefix, prefix1, DELETE, option).send(),
            $delete: (option?: { config?: T }) =>
              fetch(prefix, prefix1, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix1}`
          }
        },
        post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH4, POST, option).json(),
        $post: (option: { body: Methods5['post']['reqBody'], config?: T }) =>
          fetch<Methods5['post']['resBody'], BasicHeaders, Methods5['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      }
    },
    user: {
      _username: (val2: string) => {
        const prefix2 = `${PATH5}/${val2}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix2, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
          put: (option: { body: Methods8['put']['reqBody'], config?: T }) =>
            fetch(prefix, prefix2, PUT, option).send(),
          $put: (option: { body: Methods8['put']['reqBody'], config?: T }) =>
            fetch(prefix, prefix2, PUT, option).send().then(r => r.body),
          delete: (option?: { config?: T }) =>
            fetch(prefix, prefix2, DELETE, option).send(),
          $delete: (option?: { config?: T }) =>
            fetch(prefix, prefix2, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix2}`
        }
      },
      createWithArray: {
        post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
          fetch(prefix, PATH6, POST, option).send(),
        $post: (option: { body: Methods9['post']['reqBody'], config?: T }) =>
          fetch(prefix, PATH6, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH6}`
      },
      createWithList: {
        post: (option: { body: Methods10['post']['reqBody'], config?: T }) =>
          fetch(prefix, PATH7, POST, option).send(),
        $post: (option: { body: Methods10['post']['reqBody'], config?: T }) =>
          fetch(prefix, PATH7, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH7}`
      },
      login: {
        get: (option: { query: Methods11['get']['query'], config?: T }) =>
          fetch<Methods11['get']['resBody'], Methods11['get']['resHeaders'], Methods11['get']['status']>(prefix, PATH8, GET, option).text(),
        $get: (option: { query: Methods11['get']['query'], config?: T }) =>
          fetch<Methods11['get']['resBody'], Methods11['get']['resHeaders'], Methods11['get']['status']>(prefix, PATH8, GET, option).text().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods11['get']['query'] }) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
        fetch(prefix, PATH5, POST, option).send(),
      $post: (option: { body: Methods7['post']['reqBody'], config?: T }) =>
        fetch(prefix, PATH5, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
