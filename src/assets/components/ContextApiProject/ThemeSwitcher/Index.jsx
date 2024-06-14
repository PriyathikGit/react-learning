import { useEffect, useState } from "react"
import { ThemeProvider } from "../../../../context/Theme"
import Card from "./Card"
import ThemeBtn from "./ThemeButton"


function Index() {
  const [themeMode,setThemeMode] = useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <>
    <ThemeProvider value={{darkTheme,lightTheme,themeMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
    </>
  )
}

export default Index