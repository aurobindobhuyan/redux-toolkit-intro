import { configureStore, combineReducers } from '@reduxjs/toolkit'
import numberSlice from './numbers/numberSlice'
import userSlice from './user/userSlice'

const reducer = combineReducers({
     numbers: numberSlice,
     users: userSlice
})

const creatingStore = () => {
     const store = configureStore({ reducer })
     return store 
}

export default creatingStore