//always has pure javascript
import React from "react";


//now creating context
const UserContext = React.createContext()

//you first make context then you need a provider that act as a wrapper like
    // <Provider> 
    //< Login />
  //</Provider >
  //in this way all components within the provider will have access to the states or variables directly in Provider

export default UserContext;