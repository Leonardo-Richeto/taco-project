import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Ranking } from '../pages/Ranking'
import { Details } from '../pages/Details'
import { About } from '../pages/About'

import { MyDiets } from '../pages/Diets'
import { Profile } from '../pages/Profile'

export function AuthRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/diets" element={<MyDiets />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}