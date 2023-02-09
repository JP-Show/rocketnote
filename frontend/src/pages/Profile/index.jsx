import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/JP-Show.png" alt="picture's user" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="E-Mail" type="text" icon={FiMail} />
        <Input placeholder="Current Password" type="password" icon={FiLock} />
        <Input placeholder="New Password" type="password" icon={FiLock} />
        <Button title="Save" />
      </Form>
    </Container>
  )
}
