import { Link } from 'react-router-dom'
import { Container } from '../components/container'
import { ArrowLeft, Camera, User, Mail, Lock } from 'lucide-react'
import { Input } from '../components/input'
import { Button } from '../components/button'

import { useContext, useState } from 'react'
import { AuthContext } from '../hooks/auth'

import { api } from '../services/axios'
import avatarPlaceholder from '../assets/avatar.svg'

export function Profile() {
  const { user, updateProfile } = useContext(AuthContext)

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate(e) {
    e.preventDefault()

    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  async function handleChangeAvatar(e) {
    const file = e.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header className="py-16 bg-[#282124]">
        <div className="max-w-[70rem] mx-auto w-full px-6 ">
          <Link to="/" className="flex items-center gap-2 text-[#ff859b]">
            <ArrowLeft /> Voltar
          </Link>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center gap-6 -mt-20">
        <form className="max-w-[21.5rem] mx-auto w-full px-6">
          <div className="flex flex-col items-center relative">
            <img
              className="w-44 h-44 rounded-full object-cover mb-16"
              src={avatar}
              alt="Bruno Gonçalves"
            />
            <label
              htmlFor="avatar"
              className="absolute bottom-16 right-16 cursor-pointer bg-[#ff859b] rounded-full p-2"
            >
              <Camera className="w-6 h-6" />
              <input
                id="avatar"
                type="file"
                className="hidden"
                onChange={handleChangeAvatar}
              />
            </label>
          </div>

          <div className="space-y-2">
            <Input
              icon={User}
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Input
              icon={Mail}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="space-y-2 my-6">
            <Input
              icon={Lock}
              type="password"
              placeholder="Senha atual"
              onChange={(e) => setPasswordOld(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Nova senha"
              onChange={(e) => setPasswordNew(e.target.value)}
            />
          </div>

          <Button onClick={handleUpdate} title="salvar" />
        </form>
      </div>
    </Container>
  )
}
