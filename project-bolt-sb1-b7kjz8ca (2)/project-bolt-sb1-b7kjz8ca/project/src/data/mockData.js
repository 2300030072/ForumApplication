export const mockCategories = [
  {
    id: "1",
    name: "Technology",
    description:
      "Discuss the latest in tech, programming, and digital innovation",
    color: "#3B82F6",
    icon: "monitor"
  },
  {
    id: "2",
    name: "Gaming",
    description: "Chat about video games, tabletop games, and gaming culture",
    color: "#10B981",
    icon: "gamepad-2"
  },
  {
    id: "3",
    name: "Science",
    description: "Explore scientific discoveries, research, and theories",
    color: "#6366F1",
    icon: "flask-conical"
  },
  {
    id: "4",
    name: "Art & Design",
    description: "Share your creative work and discuss art and design topics",
    color: "#EC4899",
    icon: "palette"
  },
  {
    id: "5",
    name: "Books & Literature",
    description: "Book recommendations, literary discussions, and more",
    color: "#F59E0B",
    icon: "book-open"
  },
  {
    id: "6",
    name: "General Discussion",
    description: "For everything else that doesn't fit in other categories",
    color: "#6B7280",
    icon: "message-square"
  }
]

export const mockUsers = [
  {
    id: "1",
    username: "johndoe",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    joinedAt: "2023-01-15T10:30:00Z",
    bio:
      "Tech enthusiast and avid gamer. I love discussing new technologies and gaming strategies."
  },
  {
    id: "2",
    username: "janesmith",
    avatarUrl:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    joinedAt: "2023-02-20T14:45:00Z",
    bio:
      "Digital artist and UX designer. Passionate about creating beautiful and functional interfaces."
  },
  {
    id: "3",
    username: "mike_wilson",
    avatarUrl:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    joinedAt: "2023-03-05T08:15:00Z",
    bio:
      "Software developer by day, sci-fi reader by night. Always looking to learn new things."
  },
  {
    id: "4",
    username: "sarah_johnson",
    avatarUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    joinedAt: "2023-04-12T19:20:00Z",
    bio:
      "Bookworm and coffee addict. I enjoy deep conversations about literature and philosophy."
  }
]

export const mockThreads = [
  {
    id: "1",
    title: "What's your favorite programming language and why?",
    content:
      "I've been coding for a few years now and I'm curious to hear what programming languages everyone prefers. Is it for the syntax, job opportunities, or something else entirely?",
    authorId: "1",
    categoryId: "1",
    createdAt: "2023-06-10T15:30:00Z",
    updatedAt: "2023-06-10T15:30:00Z",
    upvotes: 45,
    downvotes: 3,
    commentCount: 12,
    pinned: true
  },
  {
    id: "2",
    title: "Just finished The Last of Us 2 - Let's discuss!",
    content:
      "No spoilers in this main post, but I just finished the game and have a lot of thoughts. What did everyone think of the story, gameplay, and characters?",
    authorId: "2",
    categoryId: "2",
    createdAt: "2023-06-12T09:45:00Z",
    updatedAt: "2023-06-12T11:20:00Z",
    upvotes: 38,
    downvotes: 5,
    commentCount: 24
  },
  {
    id: "3",
    title: "The new Webb telescope images are mind-blowing",
    content:
      "Have you all seen the latest images from the James Webb Space Telescope? The level of detail is incredible! I'd love to discuss what these new observations might mean for our understanding of the universe.",
    authorId: "3",
    categoryId: "3",
    createdAt: "2023-06-14T12:15:00Z",
    updatedAt: "2023-06-14T12:15:00Z",
    upvotes: 72,
    downvotes: 1,
    commentCount: 18
  },
  {
    id: "4",
    title: "Looking for feedback on my latest illustration",
    content:
      "I recently completed a digital illustration project and would love some constructive criticism. It's a fantasy landscape inspired by Studio Ghibli. I'll post the link in the comments!",
    authorId: "4",
    categoryId: "4",
    createdAt: "2023-06-15T16:20:00Z",
    updatedAt: "2023-06-15T16:20:00Z",
    upvotes: 29,
    downvotes: 2,
    commentCount: 15
  },
  {
    id: "5",
    title: "Book recommendations for someone getting back into reading?",
    content:
      "I used to read all the time but haven't picked up a book in years. I enjoy sci-fi, mystery, and historical fiction. What are some good books to get back into the habit?",
    authorId: "1",
    categoryId: "5",
    createdAt: "2023-06-16T20:30:00Z",
    updatedAt: "2023-06-16T20:30:00Z",
    upvotes: 33,
    downvotes: 0,
    commentCount: 22
  },
  {
    id: "6",
    title: "What are your life hacks for staying productive?",
    content:
      "Working from home has been challenging for my productivity. What techniques, tools, or habits have helped you stay focused and get things done?",
    authorId: "2",
    categoryId: "6",
    createdAt: "2023-06-18T11:10:00Z",
    updatedAt: "2023-06-18T11:10:00Z",
    upvotes: 51,
    downvotes: 4,
    commentCount: 31
  },
  {
    id: "7",
    title: "Switching from Windows to Mac - Tips?",
    content:
      "After years as a Windows user, I'm making the switch to Mac for work. What are some essential tips, apps, or settings that will help me transition smoothly?",
    authorId: "3",
    categoryId: "1",
    createdAt: "2023-06-19T14:25:00Z",
    updatedAt: "2023-06-19T14:25:00Z",
    upvotes: 27,
    downvotes: 8,
    commentCount: 19
  },
  {
    id: "8",
    title: "The future of AI in everyday life",
    content:
      "With AI advancing so rapidly, how do you think it will change our daily lives in the next 5-10 years? What are you excited or concerned about?",
    authorId: "4",
    categoryId: "1",
    createdAt: "2023-06-20T17:40:00Z",
    updatedAt: "2023-06-20T18:15:00Z",
    upvotes: 63,
    downvotes: 7,
    commentCount: 28,
    pinned: true
  }
]

export const mockComments = [
  {
    id: "1",
    content:
      "I've been using Python for years and still love it. The readability and vast library ecosystem make it my go-to for almost everything.",
    authorId: "2",
    threadId: "1",
    createdAt: "2023-06-10T16:05:00Z",
    updatedAt: "2023-06-10T16:05:00Z",
    upvotes: 12,
    downvotes: 1
  },
  {
    id: "2",
    content:
      "JavaScript for me. It has its quirks, but the ability to use one language for both frontend and backend (Node.js) is incredibly convenient.",
    authorId: "3",
    threadId: "1",
    createdAt: "2023-06-10T17:30:00Z",
    updatedAt: "2023-06-10T17:30:00Z",
    upvotes: 9,
    downvotes: 2
  },
  {
    id: "3",
    content:
      "The story absolutely wrecked me emotionally, but in the best way possible. The character development was phenomenal.",
    authorId: "1",
    threadId: "2",
    createdAt: "2023-06-12T10:20:00Z",
    updatedAt: "2023-06-12T10:20:00Z",
    upvotes: 15,
    downvotes: 0
  },
  {
    id: "4",
    content:
      "I had a different take on the story. While technically brilliant, I felt the narrative was too divisive. The gameplay was stellar though!",
    authorId: "4",
    threadId: "2",
    createdAt: "2023-06-12T11:45:00Z",
    updatedAt: "2023-06-12T11:45:00Z",
    upvotes: 8,
    downvotes: 3
  },
  {
    id: "5",
    content:
      "The nebula images are my favorite! It's incredible to think about the vast scale of these cosmic structures.",
    authorId: "1",
    threadId: "3",
    createdAt: "2023-06-14T13:00:00Z",
    updatedAt: "2023-06-14T13:00:00Z",
    upvotes: 21,
    downvotes: 0
  },
  {
    id: "6",
    parentId: "5",
    content:
      "I agree! The colors in those nebula images are breathtaking. It makes you realize how small we are in the grand scheme of things.",
    authorId: "2",
    threadId: "3",
    createdAt: "2023-06-14T14:10:00Z",
    updatedAt: "2023-06-14T14:10:00Z",
    upvotes: 14,
    downvotes: 0
  }
]

// Helper function to get threads with author data
export const getThreadsWithAuthors = () => {
  return mockThreads.map(thread => {
    const author = mockUsers.find(user => user.id === thread.authorId)
    return {
      ...thread,
      author: author
    }
  })
}

// Helper function to get comments with author data
export const getCommentsWithAuthors = () => {
  return mockComments.map(comment => {
    const author = mockUsers.find(user => user.id === comment.authorId)
    return {
      ...comment,
      author: author
    }
  })
}

// Helper function to get thread by ID with author
export const getThreadById = id => {
  const thread = mockThreads.find(thread => thread.id === id)
  if (!thread) return undefined

  const author = mockUsers.find(user => user.id === thread.authorId)
  return {
    ...thread,
    author: author
  }
}

// Helper function to get comments for a thread
export const getCommentsByThreadId = threadId => {
  return mockComments
    .filter(comment => comment.threadId === threadId)
    .map(comment => {
      const author = mockUsers.find(user => user.id === comment.authorId)
      return {
        ...comment,
        author: author
      }
    })
}
