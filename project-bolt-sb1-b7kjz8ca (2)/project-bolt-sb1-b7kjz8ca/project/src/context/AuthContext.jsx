import React, { createContext, useContext, useState, useEffect } from "react"

// Mock data for demonstration
const mockUser = {
  id: "1",
  username: "johndoe",
  avatarUrl:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  joinedAt: new Date().toISOString(),
  bio:
    "Forum enthusiast and tech lover. I enjoy discussing new technologies and gaming."
}

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  })

  useEffect(() => {
    // Simulate checking for stored auth
    const checkAuth = async () => {
      const storedUser = localStorage.getItem("forumUser")

      if (storedUser) {
        try {
          setAuthState({
            user: JSON.parse(storedUser),
            isAuthenticated: true,
            isLoading: false,
            error: null
          })
        } catch (e) {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: "Invalid stored credentials"
          })
          localStorage.removeItem("forumUser")
        }
      } else {
        setAuthState(prev => ({ ...prev, isLoading: false }))
      }
    }

    checkAuth()
  }, [])

  const login = async (username, password) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))

      // For demo purposes, we'll accept any login and return mock data
      localStorage.setItem("forumUser", JSON.stringify(mockUser))

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
        error: null
      })
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: "Invalid credentials"
      }))
    }
  }

  const register = async (username, email, password) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))

      // Create a new mock user based on registration info
      const newUser = {
        ...mockUser,
        username,
        joinedAt: new Date().toISOString()
      }

      localStorage.setItem("forumUser", JSON.stringify(newUser))

      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
        error: null
      })
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: "Registration failed"
      }))
    }
  }

  const logout = () => {
    localStorage.removeItem("forumUser")
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    })
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
