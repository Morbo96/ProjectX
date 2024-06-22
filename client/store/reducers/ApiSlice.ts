import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUserLoginForm, IUserRegister, IUserSucsess } from '../../models/IUser'
import { IFolder } from '../../models/IFolders'
import { getData } from '../../utils/localStorage'
import { IFolderForm } from '../../models/IFolderForm'
import { IGoal } from '../../models/IGoals'
import { IGoalForm } from '../../models/IGoalForm'
import { ITask } from '../../models/ITasks'
import { ITaskForm } from '../../models/ITaskForm'
import { ISubtask } from '../../models/ISubTask'
import { ISubtaskForm } from '../../models/ISubTaskForm'
import { IUserPet } from '../../models/IUserPet'
import { IFood } from '../../models/IFood'
import { IUserBank } from '../../models/IUserBank'
import { IFoodBank } from '../../models/IFoodBank'
import { IFeedPet } from '../../models/IFeedPet'

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

  tagTypes: [
    'User',
    'Data',
    'Goals',
    'Tasks',
    'SubTasks',
    'Bank',
    'Food',
    'Pet',
  ],
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
          url: `folders/${body.id}`,
          method: 'DELETE',
          body,
        }
      },
      invalidatesTags: ['Data'],
    }),

    getGoals: build.query<Array<IGoal>, number>({
      query(id) {
        return {
          url: `folders/${id}/goals`,
        }
      },
      providesTags: ['Goals'],
    }),

    createGoal: build.mutation<void, IGoalForm>({
      query(body) {
        return {
          url: `folders/${body.folderId}/goals`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['Goals'],
    }),

    deleteGoal: build.mutation<void, IGoal>({
      query(body) {
        return {
          url: `goals/${body.id}`,
          method: 'DELETE',
          body,
        }
      },
      invalidatesTags: ['Goals'],
    }),

    updateGoal: build.mutation<void, IGoal>({
      query(body) {
        return {
          url: `goals/${body.id}`,
          method: 'PATCH',
          body,
        }
      },
      invalidatesTags: ['Goals'],
    }),

    getTasks: build.query<Array<ITask>, number>({
      query(goalId) {
        return {
          url: `goals/${goalId}/tasks`,
        }
      },
      providesTags: ['Tasks'],
    }),

    createTask: build.mutation<void, ITaskForm>({
      query(body) {
        return {
          url: `goals/${body.goalId}/tasks`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['Tasks'],
    }),

    deleteTask: build.mutation<void, ITask>({
      query(body) {
        return {
          url: `tasks/${body.id}`,
          method: 'DELETE',
          body,
        }
      },
      invalidatesTags: ['Tasks'],
    }),

    updateTask: build.mutation<void, ITask>({
      query(body) {
        return {
          url: `tasks/${body.id}`,
          method: 'PATCH',
          body,
        }
      },
      invalidatesTags: ['Tasks'],
    }),

    getSubTasks: build.query<Array<ISubtask>, number>({
      query(taskId) {
        return {
          url: `tasks/${taskId}/subtasks`,
        }
      },
      providesTags: ['SubTasks'],
    }),

    createSubtask: build.mutation<void, ISubtaskForm>({
      query(body) {
        return {
          url: `tasks/${body.taskId}/subtasks`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['Tasks'],
    }),

    deleteSubtask: build.mutation<void, ISubtask>({
      query(body) {
        return {
          url: `subtasks/${body.id}`,
          method: 'DELETE',
          body,
        }
      },
      invalidatesTags: ['Tasks'],
    }),

    updateSubtask: build.mutation<void, ISubtask>({
      query(body) {
        return {
          url: `subtasks/${body.id}`,
          method: 'PATCH',
          body,
        }
      },
      invalidatesTags: ['Tasks'],
    }),

    getAllTasks: build.query<Array<ITask>, void>({
      query() {
        return {
          url: `tasks`,
          method: 'GET',
        }
      },
    }),
    ///////////////////////////////////////////////

    completeSubtask: build.mutation<void, number>({
      query(id) {
        return {
          url: `subtasks/${id}/complete`,
          method: 'PATCH',
        }
      },
      invalidatesTags: ['Bank', 'Tasks'],
    }),

    getUserBank: build.query<IUserBank, void>({
      query() {
        return {
          url: `users/bank`,
          method: 'GET',
        }
      },
      providesTags: ['Bank'],
    }),

    buyFood: build.mutation<void, number>({
      query(id) {
        return {
          url: `food/${id}/buy`,
          method: 'PATCH',
        }
      },
      invalidatesTags: ['Bank', 'Food'],
    }),

    getUserPetById: build.query<IUserPet, number>({
      query(id) {
        return {
          url: `userpets/${id}`,
          method: 'GET',
        }
      },
      providesTags: ['Pet'],
    }),

    feedUserPet: build.mutation<void, IFeedPet>({
      query(body) {
        return {
          url: `userpets/2/feed`,
          method: 'PATCH',
          body: body,
        }
      },
      invalidatesTags: ['Pet', 'Food'],
    }),

    getAllFood: build.query<Array<IFood>, void>({
      query() {
        return {
          url: `food`,
          method: 'GET',
        }
      },
    }),

    getUserFood: build.query<Array<IFoodBank>, void>({
      query() {
        return {
          url: `users/food`,
          method: 'GET',
        }
      },
      providesTags: ['Food'],
    }),
  }),
})
