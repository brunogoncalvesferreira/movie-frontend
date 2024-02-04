import { useContext } from 'react'
import { AuthContext } from '../hooks/auth'
import { Link } from 'react-router-dom'
import { api } from '../services/axios'

import avatarPlaceholder from '../assets/avatar.svg'

export function Header({ children }) {
  const { signOut, user } = useContext(AuthContext)

  function handleSignOut() {
    signOut()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <header className="py-11 bg-[#1C1B1E] border-b border-[#262529] sticky top-0">
      <div className="flex md:items-center justify-between flex-col md:flex-row items-start gap-16 max-w-[70rem] mx-auto w-full px-6">
        <h3 className="text-2xl text-[#ff859b]">RocketMovies</h3>

        <div className="flex-1">{children}</div>

        <Link
          to="/profile"
          className="flex md:items-center flex-row-reverse gap-2"
        >
          <div className="flex flex-col">
            <strong className="text-sm text-[#f4ede8]">{user.name}</strong>
            <button
              onClick={handleSignOut}
              className="text-sm text-[#948f99] mb:text-right text-left"
            >
              Sair
            </button>
          </div>

          <img
            className="w-16 h-16 rounded-full object-cover"
            src={avatarUrl}
            alt={user.name}
          />
        </Link>
      </div>
    </header>
  )
}
