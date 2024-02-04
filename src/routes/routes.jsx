import { AuthContext } from '../hooks/auth'
import { useContext } from 'react'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Router() {
  const { user } = useContext(AuthContext)

  return <>{user ? <AppRoutes /> : <AuthRoutes />}</>
}
