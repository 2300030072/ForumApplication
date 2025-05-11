import React, { useState } from "react"
import { X } from "lucide-react"
import { mockCategories } from "../../data/mockData"

const CreateThreadForm = ({ onCancel, onSubmit }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault()

    // Validate form
    const newErrors = {}

    if (!title.trim()) {
      newErrors.title = "Title is required"
    } else if (title.length < 5) {
      newErrors.title = "Title must be at least 5 characters"
    }

    if (!content.trim()) {
      newErrors.content = "Content is required"
    } else if (content.length < 20) {
      newErrors.content = "Content must be at least 20 characters"
    }

    if (!categoryId) {
      newErrors.category = "Please select a category"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Submit the form
    onSubmit(title, content, categoryId)
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Create New Thread
        </h2>
        <button
          className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          onClick={onCancel}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-4">
        <div className="space-y-4">
          {/* Category Select */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              className={`w-full px-3 py-2 border ${
                errors.category ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={categoryId}
              onChange={e => setCategoryId(e.target.value)}
            >
              <option value="">Select a category</option>
              {mockCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category}</p>
            )}
          </div>

          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter a descriptive title"
              className={`w-full px-3 py-2 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            {errors.title ? (
              <p className="mt-1 text-sm text-red-600">{errors.title}</p>
            ) : (
              <p className="mt-1 text-xs text-gray-500">
                A good title is concise and descriptive
              </p>
            )}
          </div>

          {/* Content Textarea */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <textarea
              id="content"
              rows={6}
              placeholder="Share your thoughts, questions, or information"
              className={`w-full px-3 py-2 border ${
                errors.content ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={content}
              onChange={e => setContent(e.target.value)}
            ></textarea>
            {errors.content && (
              <p className="mt-1 text-sm text-red-600">{errors.content}</p>
            )}
          </div>

          {/* Guidelines */}
          <div className="bg-blue-50 p-3 rounded-md">
            <h4 className="text-sm font-medium text-blue-800 mb-1">
              Posting Guidelines:
            </h4>
            <ul className="text-xs text-blue-700 space-y-1 list-disc pl-4">
              <li>Be respectful and considerate of other members</li>
              <li>Stay on topic and provide relevant information</li>
              <li>Do not post inappropriate or offensive content</li>
              <li>Avoid duplicate threads - search before posting</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-3">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
          >
            Create Thread
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateThreadForm
