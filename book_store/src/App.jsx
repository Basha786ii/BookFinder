import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Main from './Componets/Main'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/*'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
