import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AddPost } from "./AddPost";
import { Login } from "./Login";
import { Register } from "./Register";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addpost' element={<AddPost/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/Register' element={<Register/>} />
        </Routes>
    )
}
