import React from 'react'
import Home from '../components/Home';
import NotFound from '../components/NotFound'
import AlertMessage from '../components/AlertMessage';
import Navi from '../layouts/Navi';
import UserDetails from '../components/UserDetails';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
const AppRouter = () => {
  return (
      <BrowserRouter>
          <Navi />
          <AlertMessage />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/user/:login' element={<UserDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
  )
}

export default AppRouter;