import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../components/container'
import { Header } from '../components/header'
import { ArrowLeft } from 'lucide-react'
import { Input } from '../components/input'
import { NoteItem } from '../components/note-item'
import { Button } from '../components/button'
import { useState } from 'react'
import { api } from '../services/axios'

export function CreateMonvie() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState()

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleNewTag() {
    setTags((state) => [...state, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags((state) => state.filter((tag) => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Preencha o título')
    } else if (!description) {
      return alert('Preencha a descrição')
    } else if (!rating) {
      return alert('Preencha a avaliação')
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio',
      )
    }

    await api.post('/notes', { title, description, tags, rating })
    alert('Filme criado com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <div className="w-full max-w-[70rem] mx-auto px-6 mt-10">
        <Link to="/" className="flex items-center gap-2 text-[#ff859b]">
          <ArrowLeft /> voltar
        </Link>

        <h1 className="text-3xl text-white mt-6">Novo filme</h1>

        <div className="flex items-center justify-between gap-10 mt-10">
          <div className="w-full">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="w-full">
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
          </div>
        </div>

        <div className="mt-10">
          <textarea
            className="w-full h-48 bg-[#262529] px-4 py-3 rounded outline-none text-[#948f99] text-base resize-none"
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <div className="mt-10">
          <h3 className="text-xl text-[#948f99]">Marcadores</h3>
          <div className="flex gap-2 bg-[#0d0c0f] p-4 rounded mt-3">
            <NoteItem
              isNew
              placeholder="Novo marcador"
              onClick={handleNewTag}
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
            />
            {tags.map((tag, index) => (
              <NoteItem
                key={index}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-10 mt-10">
          <Button isActive title="Excluir filme" />
          <Button title="Salvar filme" onClick={handleNewNote} />
        </div>
      </div>
    </Container>
  )
}
