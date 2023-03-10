import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { useState } from 'react'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from 'react-router-dom'

export function Profile() {
  const navigate = useNavigate()

  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatarFile, setAvatarFile] = useState(null)
  const [avatar, setAvatar] = useState(avatarUrl)

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdate() {
    const update = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userUpdate = Object.assign(user, update)

    await updateProfile({ user: userUpdate, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft size={24} />
        </button>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="picture's user" />

          <label htmlFor="avatar">
            <FiCamera />

            <input onChange={handleChangeAvatar} type="file" id="avatar" />
          </label>
        </Avatar>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <Input
          placeholder="E-Mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Current Password"
          type="password"
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="New Password"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />
        <Button onClick={handleUpdate} title="Save" />
      </Form>
    </Container>
  )
}
