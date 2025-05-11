import React, { useState, useEffect } from "react"
import Layout from "../components/layout/Layout"
import ThreadDetail from "../components/thread/ThreadDetail"
import { getThreadById, getCommentsByThreadId } from "../data/mockData"

// In a real app, you would get threadId from URL params
// For this demo, we'll hardcode it
const ThreadDetailPage = () => {
  const [threadId] = useState("1")
  const [thread, setThread] = useState(undefined)
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate fetch delay
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500))

        const threadData = getThreadById(threadId)
        if (!threadData) {
          setError("Thread not found")
          setIsLoading(false)
          return
        }

        const commentData = getCommentsByThreadId(threadId)

        setThread(threadData)
        setComments(commentData)
      } catch (err) {
        setError("Failed to load thread")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [threadId])

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-800 border-r-transparent"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 p-4 rounded-md text-red-700">
            <p>{error}</p>
            <a
              href="#"
              className="text-blue-800 hover:underline mt-2 inline-block"
            >
              Return to home page
            </a>
          </div>
        ) : thread ? (
          <ThreadDetail thread={thread} comments={comments} />
        ) : null}
      </div>
    </Layout>
  )
}

export default ThreadDetailPage
