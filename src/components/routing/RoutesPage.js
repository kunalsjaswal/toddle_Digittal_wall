import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import PostPage from '../posts/PostPage'
import NavbarFile from '../navbar/NavbarFile'

const RoutesPage = () => {
  return (
    <Routes>
        <Route path='/' element={<NavbarFile/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/posts' element={<PostPage/>}/>
        </Route>

    </Routes>
  )
}

export default RoutesPage