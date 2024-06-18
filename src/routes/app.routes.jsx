import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Ranking } from '../pages/Ranking'
import { Details } from '../pages/Details'
import { About } from '../pages/About'

import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { ForgotPassword } from '../pages/ForgotPassword'
import { ResetPassword } from '../pages/ResetPassword'

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="forgot-password/reset-password/:token" element={<ResetPassword />} />
        </Routes>
    )
}