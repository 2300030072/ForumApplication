import React, { useState } from "react"
import { MessageSquare, Search, User, Menu, X, LogOut } from "lucide-react"
import { useAuth } from "../../context/AuthContext"

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-6 w-6 text-blue-800" />
          <span className="text-xl font-bold text-blue-900">Forum</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-800 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-800 transition-colors"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-800 transition-colors"
          >
            Latest
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-800 transition-colors"
          >
            Popular
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="p-2 text-gray-600 hover:text-blue-800 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </button>

          {isAuthenticated ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 p-1 hover:bg-gray-100 rounded-full transition-colors">
                <img
                  src={
                    user?.avatarUrl ||
                    "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt={user?.username || "User"}
                  className="h-8 w-8 rounded-full object-cover border border-gray-200"
                />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-right">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                >
                  Settings
                </a>
                <hr className="my-1" />
                <button
                  onClick={logout}
                  className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="px-4 py-1.5 text-sm text-gray-700 hover:text-blue-800 transition-colors"
              >
                Log in
              </a>
              <a
                href="#"
                className="px-4 py-1.5 text-sm bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
              >
                Sign up
              </a>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-800 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Search Bar - Conditionally Shown */}
      {isSearchOpen && (
        <div className="border-t border-gray-200 py-3 px-4 bg-white">
          <div className="container mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for topics, posts, users..."
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu - Conditionally Shown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <a
              href="#"
              className="block py-2 px-3 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 px-3 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Categories
            </a>
            <a
              href="#"
              className="block py-2 px-3 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Latest
            </a>
            <a
              href="#"
              className="block py-2 px-3 text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Popular
            </a>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            {isAuthenticated ? (
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-2">
                  <img
                    src={
                      user?.avatarUrl ||
                      "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    alt={user?.username || "User"}
                    className="h-10 w-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <p className="font-medium">{user?.username || "User"}</p>
                    <p className="text-xs text-gray-500">View profile</p>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="flex w-full items-center py-2 px-3 text-red-600 hover:bg-red-50 rounded-md"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#"
                  className="py-2 px-3 text-center text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="py-2 px-3 text-center text-white bg-blue-800 rounded-md hover:bg-blue-900 transition-colors"
                >
                  Sign up
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
