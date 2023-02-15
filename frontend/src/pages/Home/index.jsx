import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './style'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Notes } from '../../components/Notes'
import { api } from '../../services/api'

export function Home() {
  const navigator = useNavigate()

  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  function handleTagSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tags => tags !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleDetails(id) {
    navigator(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }
    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      )
      setNotes(response.data)
    }
    fetchNotes()
  }, [search, tagsSelected])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText
            title="All"
            onClick={() => setTagsSelected([])}
            isActive={tagsSelected.length == 0}
          ></ButtonText>
        </li>
        {tags &&
          tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                isActive={tagsSelected.includes(tag.name)}
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
              ></ButtonText>
            </li>
          ))}
      </Menu>
      <Search>
        <Input
          onChange={e => setSearch(e.target.value)}
          icon={FiSearch}
          placeholder="Search by title"
        ></Input>
      </Search>
      <Content>
        <Section title="My notes">
          {notes.map(note => (
            <Notes
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        New Note
      </NewNote>
    </Container>
  )
}
