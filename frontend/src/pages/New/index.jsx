import { useState } from 'react'

import { Container, Form } from './styles'

import { Link, useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { api } from '../../services/api'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    console.log(setTags(prevState => prevState))
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    await api.post('/notes', {
      title,
      description,
      tags,
      links
    })
    console.log({
      title,
      description,
      tags,
      links
    })
    alert('created successful ')
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>New Note</h1>
            <Link to="/">back</Link>
          </header>
          <Input
            placeholder="Title"
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Description"
            onChange={e => setDescription(e.target.value)}
          />
          <Section title="Useful Links">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)} //when function has a params, we need put this callback in arrowFunction
              />
            ))}
            <NoteItem
              isNew
              placeholder="New link"
              value={newLink}
              onClick={handleAddLink}
              onChange={e => setNewLink(e.target.value)}
            />
          </Section>
          <div className="tag">
            <Section title="Useful Tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={index}
                  placeholder="New tag"
                  value={String(tag)}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="New tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </Section>
          </div>
          <Button title="Save" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}
