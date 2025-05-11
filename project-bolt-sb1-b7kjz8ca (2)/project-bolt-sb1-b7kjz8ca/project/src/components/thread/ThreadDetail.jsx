import React, { useState } from "react"
import {
  ArrowUp,
  ArrowDown,
  MessageSquare,
  User,
  Calendar,
  Reply,
  Flag
} from "lucide-react"
import { mockCategories } from "../../data/mockData"

const ThreadDetail = ({ thread, comments }) => {
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState(null)

  // Format date to readable format
  const formatDate = dateString => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  // Group comments by parent
  const commentsByParent = {}

  // Initialize top-level comments
  commentsByParent["root"] = []

  comments.forEach(comment => {
    if (!comment.parentId) {
      commentsByParent["root"].push(comment)
    } else {
      if (!commentsByParent[comment.parentId]) {
        commentsByParent[comment.parentId] = []
      }
      commentsByParent[comment.parentId].push(comment)
    }
  })

  // Get category info
  const category = mockCategories.find(c => c.id === thread.categoryId)

  // Recursive component for comments
  const CommentItem = ({ comment, depth = 0 }) => {
    const childComments = commentsByParent[comment.id] || []
    const maxDepth = 4

    return (
      <div
        className={`${depth > 0 ? "ml-5 pl-5 border-l border-gray-200" : ""}`}
      >
        <div className="py-4">
          <div className="flex">
            {/* Vote Column */}
            <div className="hidden sm:flex flex-col items-center mr-3 space-y-1">
              <button className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-colors">
                <ArrowUp className="h-4 w-4" />
              </button>
              <span className="text-xs font-medium text-gray-700">
                {comment.upvotes - comment.downvotes}
              </span>
              <button className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-full transition-colors">
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>

            {/* Comment Content */}
            <div className="flex-grow">
              <div className="flex items-center mb-1">
                <img
                  src={
                    comment.author.avatarUrl ||
                    "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt={comment.author.username}
                  className="h-6 w-6 rounded-full mr-2 object-cover"
                />
                <a
                  href="#"
                  className="font-medium text-gray-900 text-sm hover:text-blue-800"
                >
                  {comment.author.username}
                </a>
                <span className="mx-1 text-gray-400">·</span>
                <span className="text-xs text-gray-500">
                  {formatDate(comment.createdAt)}
                </span>

                {/* Mobile vote count */}
                <div className="ml-auto flex items-center space-x-1 sm:hidden">
                  <ArrowUp className="h-3 w-3 text-gray-400" />
                  <span className="text-xs font-medium text-gray-700">
                    {comment.upvotes - comment.downvotes}
                  </span>
                </div>
              </div>

              <div className="text-gray-800 text-sm mb-2">
                {comment.content}
              </div>

              <div className="flex items-center space-x-4 text-xs">
                <button
                  className="text-gray-500 hover:text-blue-800 font-medium flex items-center"
                  onClick={() =>
                    setReplyingTo(replyingTo === comment.id ? null : comment.id)
                  }
                >
                  <Reply className="h-3 w-3 mr-1" />
                  Reply
                </button>
                <button className="text-gray-500 hover:text-red-600 flex items-center">
                  <Flag className="h-3 w-3 mr-1" />
                  Report
                </button>
              </div>

              {replyingTo === comment.id && (
                <div className="mt-3">
                  <textarea
                    placeholder="Write your reply..."
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                  />
                  <div className="flex justify-end mt-2 space-x-2">
                    <button
                      className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                      onClick={() => setReplyingTo(null)}
                    >
                      Cancel
                    </button>
                    <button className="px-3 py-1 text-xs bg-blue-800 text-white rounded-md hover:bg-blue-900">
                      Post Reply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Render child comments */}
        {depth < maxDepth && childComments.length > 0 && (
          <div className="space-y-1">
            {childComments.map(childComment => (
              <CommentItem
                key={childComment.id}
                comment={childComment}
                depth={depth + 1}
              />
            ))}
          </div>
        )}

        {/* Show "View more replies" if depth limit is reached */}
        {depth === maxDepth && childComments.length > 0 && (
          <div className="ml-5 pl-5 border-l border-gray-200 py-2">
            <button className="text-blue-800 text-sm hover:text-blue-900 font-medium">
              View {childComments.length} more{" "}
              {childComments.length === 1 ? "reply" : "replies"}
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Thread Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <div className="flex">
          {/* Vote Column */}
          <div className="hidden sm:flex flex-col items-center mr-5 space-y-1">
            <button className="p-1 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-colors">
              <ArrowUp className="h-6 w-6" />
            </button>
            <span className="font-semibold text-lg text-gray-700">
              {thread.upvotes - thread.downvotes}
            </span>
            <button className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-full transition-colors">
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>

          {/* Thread Content */}
          <div className="flex-grow">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
              {thread.title}
            </h1>

            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
              {category && (
                <a
                  href="#"
                  className="flex items-center rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2"
                  style={{
                    backgroundColor: `${category.color}20`,
                    color: category.color
                  }}
                >
                  {category.name}
                </a>
              )}

              <div className="flex items-center mr-4 mb-2">
                <User className="h-4 w-4 mr-1" />
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-800 font-medium"
                >
                  {thread.author.username}
                </a>
              </div>

              <div className="flex items-center mr-4 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(thread.createdAt)}</span>
              </div>

              <div className="flex items-center mb-2">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>
                  {thread.commentCount}{" "}
                  {thread.commentCount === 1 ? "comment" : "comments"}
                </span>
              </div>

              {/* Mobile vote count */}
              <div className="sm:hidden ml-auto flex items-center space-x-2 mb-2">
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
            </div>

            <div className="prose prose-sm sm:prose max-w-none text-gray-800 mb-4">
              <p>{thread.content}</p>
            </div>

            <div className="flex items-center pt-2 border-t border-gray-100">
              <button className="text-gray-500 hover:text-red-600 text-sm flex items-center">
                <Flag className="h-4 w-4 mr-1" />
                Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Comment */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Add a comment
        </h3>
        <textarea
          placeholder="What are your thoughts?"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <div className="flex justify-end mt-3">
          <button className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors">
            Post Comment
          </button>
        </div>
      </div>

      {/* Comments */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
        </h3>

        <div className="divide-y divide-gray-100">
          {commentsByParent["root"].map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}

          {comments.length === 0 && (
            <div className="py-10 text-center">
              <p className="text-gray-500">
                No comments yet. Be the first to share your thoughts!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ThreadDetail
