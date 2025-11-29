// All posts are now consolidated here
export default [
  // Add all posts from the original Posts.ts file
  // ... (all the posts from above)
  
  // Add posts from InitDb.js
  {
    id: "post-1",
    uid: "0",
    text: "Welcome to my profile! This is my first post.",
    timestamp: Date.now() - 3600000,
    type: "post"
  },
  {
    id: "post-2",
    uid: "1",
    text: "Just finished a great design project! #design #ux",
    timestamp: Date.now() - 7200000,
    type: "post"
  },
  {
    id: "post-3",
    uid: "2",
    text: "Exploring new machine learning algorithms today. Fascinating stuff!",
    timestamp: Date.now() - 10800000,
    type: "post"
  },
  {
    id: "post-4",
    uid: "0",
    text: "Working on improving the feed functionality. Stay tuned!",
    timestamp: Date.now() - 14400000,
    type: "post"
  },
  {
    id: "post-5",
    uid: "1",
    text: "Coffee and code - the perfect combination for a productive day!",
    timestamp: Date.now() - 18000000,
    type: "post"
  },
  // Add chat messages from InitDb.js
  {
    id: "chat-1",
    uid: "1",
    text: "Hi there! How are you doing?",
    timestamp: Date.now() - 1000 * 60 * 10, // 10 minutes ago
    type: "chat",
    room: "private-1-0"
  },
  {
    id: "chat-2",
    uid: "0",
    text: "I'm doing great! Just working on some new features.",
    timestamp: Date.now() - 1000 * 60 * 5, // 5 minutes ago
    type: "chat",
    room: "private-1-0"
  },
  {
    id: "chat-3",
    uid: "1",
    text: "That sounds exciting! Can't wait to see what you're building.",
    timestamp: Date.now() - 1000 * 60 * 2, // 2 minutes ago
    type: "chat",
    room: "private-1-0"
  },
  {
    id: "chat-4",
    uid: "2",
    text: "Hey everyone, what's up?",
    timestamp: Date.now() - 1000 * 60 * 15, // 15 minutes ago
    type: "chat",
    room: "private-group-1"
  },
  {
    id: "chat-5",
    uid: "0",
    text: "Not much, just working on some code.",
    timestamp: Date.now() - 1000 * 60 * 10, // 10 minutes ago
    type: "chat",
    room: "private-group-1"
  },
  {
    id: "chat-6",
    uid: "1",
    text: "Same here! Working on a new design.",
    timestamp: Date.now() - 1000 * 60 * 5, // 5 minutes ago
    type: "chat",
    room: "private-group-1"
  },
  // Add notification posts from InitDb.js
  {
    id: "notification-1",
    uid: "system",
    text: "Alice liked your post",
    timestamp: Date.now() - 1000 * 60 * 5, // 5 minutes ago
    type: "notification",
    subtype: "like"
  },
  {
    id: "notification-2",
    uid: "system",
    text: "Bob started following you",
    timestamp: Date.now() - 1000 * 60 * 30, // 30 minutes ago
    type: "notification",
    subtype: "follow"
  },
  {
    id: "notification-3",
    uid: "system",
    text: "Charlie replied to your comment",
    timestamp: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
    type: "notification",
    subtype: "reply"
  },
  {
    id: "notification-4",
    uid: "system",
    text: "David mentioned you in a post",
    timestamp: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
    type: "notification",
    subtype: "mention"
  },
  {
    id: "notification-5",
    uid: "system",
    text: "Eva shared your post",
    timestamp: Date.now() - 1000 * 60 * 60 * 48, // 2 days ago
    type: "notification",
    subtype: "share"
  }
];
