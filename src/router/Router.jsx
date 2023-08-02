import React from 'react'
import { Route, Routes } from "react-router-dom"
import HomePage from '../pages/homePage/HomePage'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path='/catrgory/:name' element = {<p>catrgory name</p>}>
            <Route path=':id' element={<p>article show</p>}/>
        </Route>
        <Route path='/login' element={<p>login</p>}/>
        <Route path='/contactUs' element={<p>contactUs</p>}/>
    </Routes>
  )
}

export default Router