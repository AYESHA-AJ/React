//we will creat econtxt in 2 parts this is the first part


import React from "react";
//method just like use state etc
const UserContext = React.createContext()

export default UserContext
//as soon as w emake context it will provide us the context provider so it will act as wrapper for any element and then all those elements within the wrapper will have access to this global context (context is just like a global variable)

//now move to nnext part that is to make context provider which will be jsx 