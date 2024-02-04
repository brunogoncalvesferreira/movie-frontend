import { Link, useParams, useNavigate } from 'react-router-dom'
import { Container } from '../components/container'
import { Header } from '../components/header'
import { ArrowLeft, Clock } from 'lucide-react'
import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../hooks/auth'
import { api } from '../services/axios'
import { Button } from '../components/button'

import moment from 'moment-timezone'

import avatarPlaceholder from '../assets/avatar.svg'

export function Details() {
  const [data, setData] = useState({})

  const { user } = useContext(AuthContext)

  const params = useParams()
  const navigate = useNavigate()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const formmatedDate = moment
    .utc(data.createdAt)
    .tz('America/Sao_Paulo')
    .format('DD [de] MMMM [de] YYYY [às] HH:mm')

  const rating = []

  for (let i = 1; i <= 5; i++) {
    if (i <= data.rating) {
      rating.push(<VscStarFull key={i} />)
    } else {
      rating.push(<VscStarEmpty key={i} />)
    }
  }

  function handleDeleteNote() {
    const confirm = window.confirm('Tem certeza que deseja excluir este filme?')

    if (confirm) {
      try {
        api.delete(`/notes/${params.id}`)
        navigate('/')
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível excluir o filme')
        }
      }
    }
  }

  useEffect(() => {
    async function fetchMovieId() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchMovieId()
  }, [params.id])

  return (
    <Container>
      <Header />

      <div className="max-w-[70rem] mx-auto w-full px-6 mt-10">
        <Link to="/" className="flex items-center gap-2 text-[#ff859b]">
          <ArrowLeft /> Voltar
        </Link>
        <div className="mt-6">
          <div className="flex items-center gap-6">
            <h1 className="text-3xl text-white">{data.title}</h1>
            <span className="text-[#ff859b] flex">{rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 my-6">
          <img className="w-4 rounded-full" src={avatarUrl} alt={user.name} />
          <strong className="text-white text-sm">Por {user.name}</strong>
          <div className="flex items-center gap-1">
            <Clock size={16} color="#ff859b" />
            <time className="text-sm text-white">{formmatedDate}</time>
          </div>
        </div>
        {data.tags && (
          <div className="my-10 flex gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag.id}
                className="bg-[#312e38] text-xs text-white p-1 rounded w-fit px-2"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
        <div className="w-full">
          <p className="text-[#c4c2c0] leading-8">{data.description}</p>
        </div>

        <div className="mt-8 w-40">
          <Button title="Exluir filme" onClick={handleDeleteNote} />
        </div>
      </div>
    </Container>
  )
}
