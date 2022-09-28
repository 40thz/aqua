import { createSlice } from '@reduxjs/toolkit'

import { IUser } from '@server/constants/authData'

interface IUserSlice extends IUser {
	isAuth: boolean
}

const initialState: IUserSlice = {
	isAuth: false,
	login: '',
	name: '',
	lastName: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signIn: (state, action) => {
			return {
				...state,
				...action.payload,
			}
		},

		logout: state => {
			localStorage.removeItem('token')
			return {
				...state,
				isAuth: false,
				login: '',
				name: '',
				lastName: '',
			}
		},
		// removeLoader: (state, action) => {
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 	}
		// },
	},
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
