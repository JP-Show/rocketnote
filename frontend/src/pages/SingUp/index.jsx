import { Container, Form, Background } from './styles'

import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SingUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSingUp() {
    if (!name || !email || !password) {
      return alert('missing any camp!')
    }
    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('user has been created')
        navigate('/')
      })
      .catch(e => {
        if (e.response) {
          alert(e.response.data.message)
        } else {
          alert('could not create user')
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket notes</h1>
        <p>application for save and management your useful links</p>
        <h2>Sing Up</h2>
        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="E-Mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Register" onClick={handleSingUp} />

        <Link to="/">Sing in</Link>
      </Form>
    </Container>
  )
}
