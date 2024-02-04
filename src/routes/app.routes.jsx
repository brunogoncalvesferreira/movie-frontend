import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { Profile } from '../pages/profile'
import { CreateMonvie } from '../pages/create-movie'
import { Details } from '../pages/details'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-movie" element={<CreateMonvie />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}
