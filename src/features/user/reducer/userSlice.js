import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
     loading: false,
     users: [],
     error: ''
}

// Generating pending, fulfilled and rejected action type
const startGetUsers = createAsyncThunk('user/getUsers', async () => {
     try {
          const result = await axios.get('https://jsonplaceholder.typicode.com/users')
          return result.data
     } catch (error) {
          return error.message
     }
})

const userSlice = createSlice({
     name: 'user',
     initialState,
     extraReducers: (builder) => {
          builder.addCase(startGetUsers.pending, state => {
               state.loading = true
          })
          builder.addCase(startGetUsers.fulfilled, (state, action) => {
               state.loading = false
               Array.isArray(action.payload) ? state.users = action.payload : state.users = []
               Array.isArray(action.payload) ? state.error = '' : state.error = action.payload
          })
          builder.addCase(startGetUsers.rejected, (state, action) => {
               state.loading = false
               state.users = []
               state.error = action.error.message
          })
     }
})

export default userSlice.reducer
export { startGetUsers }