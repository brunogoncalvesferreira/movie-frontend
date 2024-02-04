import { Header } from '../components/header'
import { Plus } from 'lucide-react'
import { Note } from '../components/note'
import { Container } from '../components/container'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { api } from '../services/axios'
import { Search } from '../components/search'

export function Home() {
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState('')

  const navigate = useNavigate()

  function handleNavigate(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${searchMovie}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [searchMovie])

  return (
    <Container>
      <Header>
        <Search onChange={(e) => setSearchMovie(e.target.value)} />
      </Header>
      <div className="max-w-[70rem] mx-auto w-full px-6">
        <div className="flex md:flex-row flex-col-reverse gap-6 md:items-center justify-between mt-14">
          <h1 className="text-3xl text-white">Meus filmes</h1>

          <div>
            <Link
              to="/create-movie"
              className="w-full flex items-center justify-center gap-2 bg-[#ff859b] hover:bg-[#df5d77] text-[#1C1B1E] font-bold px-4 py-3 rounded"
            >
              <Plus />
              Adicionar filme
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <section className="space-y-6 cursor-pointer">
            {movies.map((movie) => (
              <Note
                key={String(movie.id)}
                data={movie}
                onClick={() => handleNavigate(movie.id)}
              />
            ))}
          </section>
        </div>
      </div>
    </Container>
  )
}
