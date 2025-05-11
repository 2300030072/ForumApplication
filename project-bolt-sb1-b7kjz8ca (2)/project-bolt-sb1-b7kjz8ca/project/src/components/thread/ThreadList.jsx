import React, { useState } from "react"
import {
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Pin,
  Clock,
  TrendingUp
} from "lucide-react"
import { mockCategories } from "../../data/mockData"

const ThreadList = ({ threads }) => {
  const [sortBy, setSortBy] = useState("latest")
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Filter threads by category if one is selected
  const filteredThreads = selectedCategory
    ? threads.filter(thread => thread.categoryId === selectedCategory)
    : threads

  // Sort threads based on selection
  const sortedThreads = [...filteredThreads].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    } else {
      return b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
    }
  })

  // Format date to relative time
  const formatRelativeTime = dateString => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffSec = Math.floor(diffMs / 1000)
    const diffMin = Math.floor(diffSec / 60)
    const diffHour = Math.floor(diffMin / 60)
    const diffDay = Math.floor(diffHour / 24)

    if (diffSec < 60) return `${diffSec} second${diffSec !== 1 ? "s" : ""} ago`
    if (diffMin < 60) return `${diffMin} minute${diffMin !== 1 ? "s" : ""} ago`
    if (diffHour < 24) return `${diffHour} hour${diffHour !== 1 ? "s" : ""} ago`
    if (diffDay < 30) return `${diffDay} day${diffDay !== 1 ? "s" : ""} ago`

    return date.toLocaleDateString()
  }

  // Get category by ID
  const getCategoryById = id => {
    return mockCategories.find(category => category.id === id)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center ${
                sortBy === "latest"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSortBy("latest")}
            >
              <Clock className="mr-1 h-4 w-4" />
              Latest
            </button>
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center ${
                sortBy === "popular"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSortBy("popular")}
            >
              <TrendingUp className="mr-1 h-4 w-4" />
              Popular
            </button>
          </div>

          <div className="flex-grow md:flex-grow-0">
            <select
              className="w-full md:w-auto px-3 py-1.5 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory || ""}
              onChange={e => setSelectedCategory(e.target.value || null)}
            >
              <option value="">All Categories</option>
              {mockCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {sortedThreads.map(thread => {
          const category = getCategoryById(thread.categoryId)

          return (
            <div
              key={thread.id}
              className={`bg-white rounded-lg shadow-sm border ${
                thread.pinned
                  ? "border-blue-300 bg-blue-50/40"
                  : "border-gray-200"
              } transition-all hover:shadow-md`}
            >
              <div className="p-4 sm:p-5 flex">
                {/* Vote Column */}
                <div className="hidden sm:flex flex-col items-center mr-5 space-y-1">
                  <button className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-colors">
                    <ArrowUp className="h-5 w-5" />
                  </button>
                  <span className="font-semibold text-gray-700">
                    {thread.upvotes - thread.downvotes}
                  </span>
                  <button className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-full transition-colors">
                    <ArrowDown className="h-5 w-5" />
                  </button>
                </div>

                {/* Content Column */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      {thread.pinned && (
                        <div className="flex items-center mb-1 text-blue-600 text-xs font-medium">
                          <Pin className="h-3 w-3 mr-1" />
                          Pinned Thread
                        </div>
                      )}

                      <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                        <a
                          href={`#thread/${thread.id}`}
                          className="hover:text-blue-800"
                        >
                          {thread.title}
                        </a>
                      </h3>

                      <div className="flex flex-wrap items-center text-xs text-gray-500 mb-2">
                        <span>Posted by </span>
                        <a
                          href="#"
                          className="font-medium text-gray-700 hover:text-blue-800 mx-1"
                        >
                          {thread.author.username}
                        </a>
                        <span className="mx-1">·</span>
                        <span>{formatRelativeTime(thread.createdAt)}</span>

                        {category && (
                          <>
                            <span className="mx-1">·</span>
                            <a
                              href="#"
                              className="flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
                              style={{
                                backgroundColor: `${category.color}20`,
                                color: category.color
                              }}
                              onClick={e => {
                                e.preventDefault()
                                setSelectedCategory(category.id)
                              }}
                            >
                              {category.name}
                            </a>
                          </>
                        )}
                      </div>

                      <p className="text-gray-700 line-clamp-2 mb-2">
                        {thread.content}
                      </p>
                    </div>

                    {/* Mobile vote buttons */}
                    <div className="flex flex-col items-center space-y-1 ml-3 sm:hidden">
                      <button className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-colors">
                        <ArrowUp className="h-4 w-4" />
                      </button>
                      <span className="text-xs font-semibold text-gray-700">
                        {thread.upvotes - thread.downvotes}
                      </span>
                      <button className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-full transition-colors">
                        <ArrowDown className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center mt-3">
                    <a
                      href={`#thread/${thread.id}`}
                      className="flex items-center text-gray-500 hover:text-blue-800 text-sm transition-colors"
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {thread.commentCount}{" "}
                      {thread.commentCount === 1 ? "comment" : "comments"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {sortedThreads.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10 text-center">
            <p className="text-gray-500">
              No threads found. Be the first to start a discussion!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ThreadList
