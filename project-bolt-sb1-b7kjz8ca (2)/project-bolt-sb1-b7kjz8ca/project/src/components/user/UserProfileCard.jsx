import React from "react"
import { Calendar, MessageSquare, Award } from "lucide-react"

const UserProfileCard = ({ user, threadCount = 0, commentCount = 0 }) => {
  // Format date to readable format
  const formatDate = dateString => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-blue-800 to-blue-600"></div>

      <div className="px-4 pb-4 relative">
        <div className="flex justify-center -mt-12">
          <img
            src={
              user.avatarUrl ||
              "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt={user.username}
            className="h-24 w-24 rounded-full border-4 border-white object-cover"
          />
        </div>

        <div className="text-center mt-2">
          <h2 className="text-xl font-bold text-gray-900">{user.username}</h2>

          <div className="flex items-center justify-center text-gray-500 text-sm mt-1">
            <Calendar className="h-4 w-4 mr-1" />
            Joined {formatDate(user.joinedAt)}
          </div>
        </div>

        <div className="mt-4 text-center">
          {user.bio && <p className="text-gray-600 text-sm mb-4">{user.bio}</p>}

          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-gray-50 rounded-md p-3">
              <div className="flex items-center justify-center text-blue-800">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span className="font-bold text-lg">{threadCount}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Threads</p>
            </div>

            <div className="bg-gray-50 rounded-md p-3">
              <div className="flex items-center justify-center text-blue-800">
                <Award className="h-5 w-5 mr-2" />
                <span className="font-bold text-lg">{commentCount}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileCard
