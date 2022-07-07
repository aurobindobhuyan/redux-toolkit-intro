import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetUsers } from './userSlice'

const Users = () => {
     const users = useSelector(state => state.users)
     const dispatch = useDispatch()

     useEffect(() => {
          dispatch(startGetUsers())
     }, [])

     return (
          <>
               <h4>Total Users - {Object.keys(users.users).length}</h4>
               {
                    users.loading ? (
                         <>
                              <h3 style={{ colot: 'red' }}> Loading... </h3>
                         </>
                    ) : (!users.loading && users.users.length) ? (
                         <ul>
                              {
                                   users.users.map(ele => <li key={ele.id}>{ele.name}</li>)
                              }
                         </ul>
                    ) : (!users.loading && users.error) && (
                         <>
                              <h4>Error: {users.error}</h4>
                         </>
                    )
               }
          </>
     )
}

export default Users