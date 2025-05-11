import React from "react"
import {
  Monitor,
  Gamepad2,
  FlaskConical,
  Palette,
  BookOpen,
  MessageSquare
} from "lucide-react"
import { mockCategories } from "../../data/mockData"

const CategoryList = ({ onSelectCategory }) => {
  // Map category icons
  const getCategoryIcon = iconName => {
    switch (iconName) {
      case "monitor":
        return <Monitor className="h-5 w-5" />
      case "gamepad-2":
        return <Gamepad2 className="h-5 w-5" />
      case "flask-conical":
        return <FlaskConical className="h-5 w-5" />
      case "palette":
        return <Palette className="h-5 w-5" />
      case "book-open":
        return <BookOpen className="h-5 w-5" />
      default:
        return <MessageSquare className="h-5 w-5" />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800">Categories</h3>
      </div>

      <div className="divide-y divide-gray-100">
        {mockCategories.map(category => (
          <button
            key={category.id}
            className="w-full flex items-center px-4 py-3 hover:bg-gray-50 transition-colors text-left"
            onClick={() => onSelectCategory(category.id)}
          >
            <div
              className="p-2 rounded-md mr-3 flex-shrink-0"
              style={{
                backgroundColor: `${category.color}20`,
                color: category.color
              }}
            >
              {getCategoryIcon(category.icon)}
            </div>
            <div>
              <h4 className="font-medium text-gray-800">{category.name}</h4>
              <p className="text-xs text-gray-500 line-clamp-1">
                {category.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
