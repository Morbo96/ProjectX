import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUserLoginForm, IUserRegister, IUserSucsess } from '../../models/IUser'
import { IFolder } from '../../models/IFolders'
import { getData } from '../../utils/localStorage'
import { IFolderForm } from '../../models/IFolderForm'

export const API = createApi({
  reducerPath: 'API',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.0.106:3000/api',
    prepareHeaders: async headers => {
      const token = await getData('token')
      if (token) {
        headers.set(`Bearer`, token)
      }
      return headers
    },
  }),

  tagTypes: ['User', 'Data'],
  endpoints: build => ({
    // build.mutation<выходное значение, входное значение>({
    signInUser: build.mutation<IUserSucsess, IUserLoginForm>({
      query(body) {
        return {
          url: `/auth/signIn`,
          method: 'PATCH',
          body,
        }
      },
    }),

    signUpUser: build.mutation<IUserSucsess, IUserRegister>({
      query(body) {
        return {
          url: `/auth/signUp`,
          method: 'POST',
          body,
        }
      },
    }),

    getFolders: build.query<Array<IFolder>, void>({
      query() {
        return {
          url: `users/folders`,
        }
      },
      providesTags: ['Data'],
    }),

    createFolder: build.mutation<void, IFolderForm>({
      query(body) {
        return {
          url: `folders`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['Data'],
    }),

    updateFolder: build.mutation<void, IFolder>({
      query(body) {
        return {
          url: `folders/${body.id}`,
          method: 'PATCH',
          body,
        }
      },
      invalidatesTags: ['Data'],
    }),

    deleteFolder: build.mutation<void, IFolder>({
      query(body) {
        return {
          url: `folders`,
          method: 'DELETE',
          body,
        }
      },
      invalidatesTags: ['Data'],
    }),
  }),
})
