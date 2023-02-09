import { Container, Form, Background } from './styles'

import { FiMail, FiLock } from 'react-icons/fi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SingIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()
  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>Rocket notes</h1>
        <p>application for save and management your useful links</p>
        <h2>Sing in</h2>
        <Input
          onChange={e => setEmail(e.target.value)}
          placeholder="E-Mail"
          type="text"
          icon={FiMail}
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          icon={FiLock}
        />
        <Button onClick={handleSignIn} title="Login" />
        <Link to="/register">Sing up</Link>
      </Form>
      <Background />
    </Container>
  )
}
