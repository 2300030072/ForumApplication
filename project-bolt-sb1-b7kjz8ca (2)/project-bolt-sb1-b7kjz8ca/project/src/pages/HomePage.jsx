import React, { useState } from "react"
import { PlusCircle } from "lucide-react"
import Layout from "../components/layout/Layout"
import ThreadList from "../components/thread/ThreadList"
import CategoryList from "../components/category/CategoryList"
import UserProfileCard from "../components/user/UserProfileCard"
import { getThreadsWithAuthors, mockUsers } from "../data/mockData"
import { useAuth } from "../context/AuthContext"
import Modal from "../components/common/Modal"
import CreateThreadForm from "../components/thread/CreateThreadForm"
import LoginForm from "../components/auth/LoginForm"
import RegisterForm from "../components/auth/RegisterForm"

const HomePage = () => {
  const { user, isAuthenticated } = useAuth()
  const [threads] = useState(getThreadsWithAuthors())
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isCreateThreadModalOpen, setIsCreateThreadModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  // Filter threads by category if one is selected
  const filteredThreads = selectedCategory
    ? threads.filter(thread => thread.categoryId === selectedCategory)
    : threads

  const handleCreateThread = (title, content, categoryId) => {
    // In a real app, this would create a new thread
    console.log("Creating thread:", { title, content, categoryId })
    setIsCreateThreadModalOpen(false)
    // Would normally fetch threads again or update state
  }

  const handleCreateThreadClick = () => {
    if (isAuthenticated) {
      setIsCreateThreadModalOpen(true)
    } else {
      setIsLoginModalOpen(true)
    }
  }

  const switchToRegister = () => {
    setIsLoginModalOpen(false)
    setIsRegisterModalOpen(true)
  }

  const switchToLogin = () => {
    setIsRegisterModalOpen(false)
    setIsLoginModalOpen(true)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col-reverse lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedCategory ? "Category Threads" : "Latest Discussions"}
              </h1>

              <button
                className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
                onClick={handleCreateThreadClick}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                New Thread
              </button>
            </div>

            <ThreadList threads={filteredThreads} />
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {isAuthenticated && user ? (
              <UserProfileCard user={user} threadCount={3} commentCount={8} />
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Welcome to our Forum!
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join our community to start participating in discussions and
                  share your thoughts.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                    onClick={() => setIsLoginModalOpen(true)}
                  >
                    Log in
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900"
                    onClick={() => setIsRegisterModalOpen(true)}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            )}

            <CategoryList onSelectCategory={setSelectedCategory} />

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="font-semibold text-gray-800 mb-3">
                Top Contributors
              </h3>
              <div className="space-y-3">
                {mockUsers.slice(0, 3).map(user => (
                  <div key={user.id} className="flex items-center">
                    <img
                      src={
                        user.avatarUrl ||
                        "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      }
                      alt={user.username}
                      className="h-10 w-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {user.username}
                      </p>
                      <p className="text-xs text-gray-500">
                        {user.id === "1"
                          ? "25 threads"
                          : user.id === "2"
                          ? "18 threads"
                          : "12 threads"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Thread Modal */}
      <Modal
        isOpen={isCreateThreadModalOpen}
        onClose={() => setIsCreateThreadModalOpen(false)}
      >
        <CreateThreadForm
          onCancel={() => setIsCreateThreadModalOpen(false)}
          onSubmit={handleCreateThread}
        />
      </Modal>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      >
        <LoginForm
          onClose={() => setIsLoginModalOpen(false)}
          onSwitchToRegister={switchToRegister}
        />
      </Modal>

      {/* Register Modal */}
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      >
        <RegisterForm
          onClose={() => setIsRegisterModalOpen(false)}
          onSwitchToLogin={switchToLogin}
        />
      </Modal>
    </Layout>
  )
}

export default HomePage
