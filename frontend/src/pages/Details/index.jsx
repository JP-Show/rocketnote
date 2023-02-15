import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { Container, Links, Content } from './style'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'
import { api } from '../../services/api'

export function Details() {
  const navigate = useNavigate()

  const [data, setData] = useState(null)

  const params = useParams()

  function handleBack() {
    navigate('/')
  }

  async function handleRemoveNote() {
    const confirm = window.confirm('Do you want remove this note?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get('/notes/' + params.id)
      setData(response.data)
    }
    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText onClick={handleRemoveNote} title={'Delete note'} />
            <h1>{data.title}</h1>
            <p> {data.description}</p>

            <Section title={'Links úteis'}>
              <Links>
                {data.links &&
                  data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {' '}
                        {link.url}
                      </a>
                    </li>
                  ))}
              </Links>
            </Section>
            <Section title={'Tags'}>
              {data.tags &&
                data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
            </Section>
            <Button onClick={handleBack} title="voltar" />
          </Content>
        </main>
      )}
    </Container>
  )
}
