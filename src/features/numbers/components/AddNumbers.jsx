import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNumber } from '../reducer/numberSlice'

const AddNumbers = () => {
     const [input, setInput] = useState('')
     const dispatch = useDispatch()

     const handleAddingNumber = () => {
          const obj = {
               id: Number(new Date()),
               value: Number(input)
          }
          dispatch(addNumber(obj))
          setInput('')
     }

     return (
          <form onSubmit={(e) => e.preventDefault()}>
               <input type='number' value={input} onChange={(e) => setInput(e.target.value)} />
               <button onClick={handleAddingNumber}> Add </button>
          </form>
     )
}

export default AddNumbers