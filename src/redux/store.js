import { configureStore, combineReducers } from '@reduxjs/toolkit'
import numberSlice from '../redux/features/numbers/numberSlice'

const reducer = combineReducers({
     numbers: numberSlice
})

const creatingStore = () => {
     const store = configureStore({ reducer })
     return store 
}

export default creatingStore