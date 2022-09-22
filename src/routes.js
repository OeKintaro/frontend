import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import User from './pages/user/user.js';
import Profile from './pages/profile/profile.js';

export default function Routes1(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<User />}/>
                <Route path="/create" element={<Profile />}/>
                <Route path="/update/:id" element={<Profile />}/>
            </Routes>
        </Router>
    );
}