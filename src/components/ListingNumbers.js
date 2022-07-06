import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementOne, decrementOne, removeOne } from '../redux/features/numbers/numberSlice'

const ListingNumbers = () => {
     const numbers = useSelector(state => state.numbers)
     const dispatch = useDispatch()

     return (
          <>
               <h3>Listing Numbers</h3>
               <ul>
                    {
                         numbers.map(ele => {
                              return (
                                   <li key={ele.id}>
                                        {ele.value}
                                        <button onClick={() => dispatch(incrementOne(ele))}> + </button>
                                        <button onClick={() => dispatch(decrementOne(ele))}> - </button>
                                        <button onClick={() => dispatch(removeOne(ele))}> X </button>
                                   </li>
                              )
                         })
                    }
               </ul>
          </>
     )
}

export default ListingNumbers