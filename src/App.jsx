import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/routes'
import { AuthContextProvider } from './hooks/auth'

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  )
}
