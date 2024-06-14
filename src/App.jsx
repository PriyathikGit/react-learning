import Index from "./assets/components/ContextApiProject/ThemeSwitcher/Index"
import UserContextProvider from "./context/UserContextProvider"




function App() {
  return (
    <UserContextProvider>
    <Index/>
    </UserContextProvider>
  )
}

export default App
