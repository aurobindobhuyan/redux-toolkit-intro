import { createSlice } from '@reduxjs/toolkit'

const numberSlice = createSlice({
     name: 'number',
     initialState: [],
     reducers: {
          addNumber: (state, action) => {
               state.push(action.payload)
               return state
          },
          incrementOne: (state, action) => {
               const findOne = state.find(ele => ele.id === action.payload.id)
               findOne.value = action.payload.value + 1
          },
          decrementOne: (state, action) => {
               const findingObj = state.find(ele => ele.id === action.payload.id)
               findingObj.value = action.payload.value - 1
          },
          removeOne: (state, action) => {
               return state.filter(ele => ele.id !== action.payload.id)
          },
          addTwo: state => {
               state.forEach(ele => ele.value = ele.value + 2)
          }
     }
})

const { addNumber, incrementOne, decrementOne, removeOne, addTwo: addingTwo } = numberSlice.actions

export default numberSlice.reducer
export { addNumber, incrementOne, decrementOne, removeOne, addingTwo }