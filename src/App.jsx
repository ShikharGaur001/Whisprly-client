import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Chat from './pages/chat'
import Profile from './pages/profile'
import Start from './pages/start'
import Signin from './pages/auth/signin'
import Signup from './pages/auth/signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/auth/signup' element={<Signup />} />
          <Route path='/auth/signin' element={<Signin />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Navigate to='/auth/signin' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
