import { createContext, useContext, useState } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })

      console.log(response)
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('could not login')
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
