import { Container, Form } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>New Note</h1>
            <Link to="/">back</Link>
          </header>
          <Input placeholder="Title" type="text" />
          <Textarea placeholder="Description" />
          <Section title="Useful Links">
            <NoteItem value="github.com" />
            <NoteItem isNew placeholder="New link" />
          </Section>
          <div className="tag">
            <Section title="Useful Tags">
              <NoteItem value="NodeJS" />
              <NoteItem isNew placeholder="New tag" />
            </Section>
          </div>
          <Button title="Save" />
        </Form>
      </main>
    </Container>
  )
}
