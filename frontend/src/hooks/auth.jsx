import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  function signOut() {
    localStorage.removeItem('@rocketnote:user')
    localStorage.removeItem('@rocketnote:token')
    setData({})
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@rocketnote:user', JSON.stringify(user))
      localStorage.setItem('@rocketnote:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })

      console.log(user, token)
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('could not login')
      }
    }
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)

        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@rocketnote:user', JSON.stringify(user))
      setData({ user, token: data.token })

      alert('update sucessful')
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('could not update profile')
      }
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('@rocketnote:user'))
    const token = localStorage.getItem('@rocketnote:token')

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
