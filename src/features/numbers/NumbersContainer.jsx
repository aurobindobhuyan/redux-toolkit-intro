import React from 'react'
import AddNumbers from './AddNumbers'
import ListingNumbers from './ListingNumbers'
import { useSelector, useDispatch } from 'react-redux'
import { addNumber, addingTwo } from './numberSlice'

const NumbersContainer = () => {
     const numbers = useSelector(state => state.numbers)
     const dispatch = useDispatch()

     const generateRandom = () => {
          const randomNumber = {
               id: Number(new Date()),
               value: Number(Math.round(Math.random() * 100))
          }
          dispatch(addNumber(randomNumber))
     }

     return (
          <>
               <h3>Total numbers - {numbers.length}</h3>
               <div style={{ display: 'flex' }}>
                    <AddNumbers />
                    <button onClick={() => dispatch(addingTwo())}> +2 </button>
                    <button onClick={generateRandom}> Generate Random </button>
               </div>
               <ListingNumbers />
          </>
     )
}

export default NumbersContainer