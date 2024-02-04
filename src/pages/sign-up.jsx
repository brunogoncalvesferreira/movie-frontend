import { Input } from '../components/input'
import { Button } from '../components/button'
import { User, Mail, Lock, ArrowLeft } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../services/axios'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSignUp(e) {
    e.preventDefault()

    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }

    await api.post('/users', { name, email, password }).then(() => {
      alert('Usuário criado com sucesso')
      navigate('/')
    })
  }

  return (
    <div className="flex bg-[#1C1B1E]">
      <div className="flex-1 md:bg-background-image bg-none w-[50rem] h-screen bg-no-repeat bg-cover"></div>

      <div className="md:w-[30rem] w-full px-6 flex items-center justify-center">
        <div className="w-full">
          <h1 className="md:text-5xl text-[#ff859b] font-bold ">
            RocketMovies
          </h1>
          <p className="text-sm text-[#cac4cf]">
            Aplicação para acompanhar tudo que assistir.
          </p>

          <form className="mt-12">
            <h2 className="text-2xl text-white">Crie sua conta</h2>

            <div className="space-y-2 mt-12 mb-6">
              <Input
                icon={User}
                type="text"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
              />
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

            <Button onClick={handleSignUp} title="Cadastrar" />
          </form>

          <Link
            to="/"
            className="flex items-center justify-center text-base text-[#ff859b] text-center mt-10"
          >
            <ArrowLeft />
            Voltar para o login
          </Link>
        </div>
      </div>
    </div>
  )
}
