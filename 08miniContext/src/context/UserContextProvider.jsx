import React, { useState } from "react";

import UserContext from "./UserContext";



//children is generic name means whatever is the parameter pass it as it is

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    
    return (
        //in value you can give as many data as you want in the form of objects using {}
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
     )
}
 
export default UserContextProvider;