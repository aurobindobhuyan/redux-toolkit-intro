import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
     loading: false,
     users: [],
     error: ''
}

// Generating pending, fulfilled and rejected action type
const startGetUsers = createAsyncThunk('user/getUsers', () => {
     const xhr = new XMLHttpRequest()
     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
     xhr.send()
     xhr.onload = function () {
          console.log(xhr)
          console.log(xhr.responseText)
          return xhr.responseText
     }
     xhr.onerror = function () {
          console.log(xhr)
          return xhr.error
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
               state.users = action.payload
               state.error = ''
          })
          builder.addCase(startGetUsers.rejected, (state, action) => {
               state.loading = false
               state.users = []
               state.error = action.error
          })
     }
})

export default userSlice.reducer
export  { startGetUsers }