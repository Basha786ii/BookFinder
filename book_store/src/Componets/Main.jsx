import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import App1 from './App1';
import Favourites from './Favourites';
import BookDetails from './BookDetails';

const Main = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route element={<Home />} path="/main/" />  {/* Set the default route to "/" */}
            <Route element={<App1 />} path="/app" />
            <Route element={<Favourites />} path="/favourite" />
            <Route path="/book-details" element={<BookDetails />} /> 
        </Routes>

    </>
  )
}

export default Main
