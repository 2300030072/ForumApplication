import React, { useState } from "react"
import { AuthProvider } from "./context/AuthContext"
import HomePage from "./pages/HomePage"
import ThreadDetailPage from "./pages/ThreadDetailPage"

function App() {
  // Simple client-side routing for demo purposes
  // In a real app, you would use React Router or similar
  const [currentPage, setCurrentPage] = useState("home")

  // Listen for hash changes to handle navigation
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash

    if (hash.startsWith("#thread/")) {
      setCurrentPage("thread")
    } else {
      setCurrentPage("home")
    }
  })

  return (
    <AuthProvider>
      {currentPage === "home" ? <HomePage /> : <ThreadDetailPage />}
    </AuthProvider>
  )
}

export default App
