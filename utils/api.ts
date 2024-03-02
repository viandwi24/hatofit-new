export const getApiUrl = (path: string = '') => {
  const $config = useRuntimeConfig()
  let baseUrl = $config.public.api.baseUrl || ''

  let schema = 'http'
  // find from baseUrl if have http or https
  if (baseUrl.includes('https://')) {
    schema = 'https'
  }
  // remove http or https from baseUrl
  baseUrl = baseUrl.replace(/https?:\/\//, '')

  const route = baseUrl.split('/')
  // path split / and merge with route split /
  route.push(...path.split('/'))
  // remove if have empty string
  return schema + '://' + route.filter(Boolean).join('/')
}

export namespace Api {
  export namespace DataModel {
    export interface BaseResponse {
      success: boolean
      message: string
    }

    export namespace Auth {
      export interface User {
        metricUnits: {
          energyUnits: string
          weightUnits: string
          heightUnits: string
        }
        email: string
        firstName: string
        lastName: string
      }
      export interface Dashboard {
        widgets: {
          name: string
          value: string
        }[]
      }
    }
  }

  export namespace Auth {
    export namespace Login {
      export const url = () => getApiUrl('/auth/login')
      export type response = Api.DataModel.BaseResponse & Api.DataModel.Auth.User
    }
    export namespace Dashboard {
      export const url = () => getApiUrl('/auth/dashboard')
      export type response = Api.DataModel.BaseResponse & Api.DataModel.Auth.Dashboard
    }
    export const logout = '/auth/logout'
  }
}