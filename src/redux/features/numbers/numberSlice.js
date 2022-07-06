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
               return state.map(ele => {
                    if (ele.id === action.payload.id) {
                         return { ...action.payload, value: action.payload.value + 1 }
                    } else {
                         return ele
                    }
               })
          },
          decrementOne: (state, action) => {
               return state.map(ele => {
                    if (ele.id === action.payload.id) {
                         return { ...action.payload, value: action.payload.value - 1 }
                    } else {
                         return ele
                    }
               })
          },
          removeOne: (state, action) => {
               return state.filter(ele => ele.id !== action.payload.id)
          },
          addTwo: state => {
               return state.map(ele => {
                    return (
                         { ...ele, value: ele.value + 2 }
                    )
               })
          }
     }
})

const { addNumber, incrementOne, decrementOne, removeOne, addTwo: addingTwo } = numberSlice.actions

export default numberSlice.reducer
export { addNumber, incrementOne, decrementOne, removeOne, addingTwo }