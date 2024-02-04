import { Input } from '../components/input'
import { Button } from '../components/button'
import { Mail, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSignIn(e) {
    e.preventDefault()
    await signIn({ email, password })
  }

  return (
    <div className="flex bg-[#1C1B1E]">
      <div className="md:w-[30rem] w-full px-6 flex items-center justify-center">
        <div className="w-full">
          <h1 className="md:text-5xl text-[#ff859b] font-bold ">
            RocketMovies
          </h1>
          <p className="text-sm text-[#cac4cf]">
            Aplicação para acompanhar tudo que assistir.
          </p>

          <form className="mt-12">
            <h2 className="text-2xl text-white">Faça seu login</h2>

            <div className="space-y-2 mt-12 mb-6">
              <Input
                icon={Mail}
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                icon={Lock}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button onClick={handleSignIn} title="Entrar" />
          </form>

          <Link
            to="/register"
            className="text-base text-[#ff859b] text-center block mt-10"
          >
            Criar conta
          </Link>
        </div>
      </div>

      <div className="flex-1 md:bg-background-image bg-none w-[50rem] h-screen bg-no-repeat bg-cover"></div>
    </div>
  )
}
