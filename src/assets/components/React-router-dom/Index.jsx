
import Header from './Header'
import Footer from  "./Footer"
import { Route, Routes } from 'react-router-dom'
import Contact from "./Contact"
import Home from './Home'
import About from './About'
import User from './User'
import GIthub from './GIthub'

const Index = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='user/:id' element={<User/>} />
            <Route path='github' element={<GIthub/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default Index