import UserContextProvider from "./context/UserContextProvider"


function App() {
 

  return (
    <UserContextProvider>
      <h1>Hello</h1>
    </UserContextProvider>
  )
}

export default App
