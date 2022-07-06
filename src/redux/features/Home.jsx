import React from 'react'
import NumbersContainer from './numbers/NumbersContainer'
import Users from './user/Users'

const Home = () => {

     return (
          <>
               <h3>This is from Home Component</h3>
               <NumbersContainer />
               <Users />
          </>
     )
}

export default Home