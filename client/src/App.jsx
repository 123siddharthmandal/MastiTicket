import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin');
  return (
    <>
    {!isAdminRoute && <Navbar />}
    <Routes>
      <Route path = '/' element={<h1>Home</h1>} />
      <Route path = '/movies' element={<Movies />} />
      <Route path = '/movies/:id' element={<MovieDetails />} /> 
      <Route path = '/movies/:id/:date/:time' element={<h1>SeatLayout</h1>} />
      <Route path = '/my-bookings' element={<h1>My Bookings</h1>} />
      <Route path = '/favorite' element={<h1>Favorite Movies</h1>} />
      
      

    </Routes>
    </>
  )
}

export default App