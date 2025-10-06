import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/userLogin'
import Home from './pages/home'
import CaptainRegister from './pages/captainRegister'
import UserRegister from './pages/userRegister'
import CaptainLogin from './pages/captainLogin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/login' element={ <UserLogin/> } />
        <Route path='/signup' element={ <UserRegister/> } />
        <Route path='/captain-login' element={ <CaptainLogin/> } />
        <Route path='/captain-register' element={ <CaptainRegister/> } />
      </Routes>
    </div>
  )
}

export default App