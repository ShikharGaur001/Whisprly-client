import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Auth from './pages/auth'
import Chat from './pages/chat'
import Profile from './pages/profile'
import Start from './pages/start'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Navigate to='/auth' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
