
import Index from "./assets/components/Redux-Project/Index"
import UserContextProvider from "./context/UserContextProvider"




function App() {
  return ( 
    // this context provider used when we learning useContext, the first way
    // made a context file pass all the context there
    <UserContextProvider>
      <Index/>
    </UserContextProvider>
  )
}

export default App
