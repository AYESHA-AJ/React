import React,{useState} from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
    const [user,setUser]=useState()
    return (
        //since provider alone is not enough we also need to tell the value foor which we are granting the access and that is prop which is value 
        <UserContext.Provider value={{user,setUser}} >
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider