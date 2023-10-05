import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from './index'

const baseQuery = fetchBaseQuery({
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const currentToken = (getState() as RootState).auth.token
		if (currentToken) headers.set('authorization', `Bearer ${currentToken}`)
		return headers
	}
})

export const rootApi = createApi({
	baseQuery: baseQuery,
	endpoints: () => ({

	}),
	refetchOnMountOrArgChange: 60,
	refetchOnFocus: false, // вновь заправшиваем при фокусе
	refetchOnReconnect: true // вновь заправшиваем при восстановлении подключения
})