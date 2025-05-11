import React, { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { X } from "lucide-react"

const LoginForm = ({ onClose, onSwitchToRegister }) => {
  const { login, isLoading, error } = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [formError, setFormError] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    setFormError("")

    if (!username.trim()) {
      setFormError("Username is required")
      return
    }

    if (!password) {
      setFormError("Password is required")
      return
    }

    try {
      await login(username, password)
      onClose()
    } catch (err) {
      setFormError("Login failed. Please check your credentials.")
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-auto overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Log In</h2>
        <button
          className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {(error || formError) && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-md">
            {formError || error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <a href="#" className="text-sm text-blue-800 hover:text-blue-900">
              Forgot password?
            </a>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></span>
            ) : null}
            Log In
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-blue-800 hover:text-blue-900 font-medium"
              onClick={onSwitchToRegister}
            >
              Sign up
            </button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
