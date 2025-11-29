export const getUser = (state, uid) => state.users.find((u) => u.uid === uid);

export const addUser = (state, name: string) => {
  const newUser = {
    uid: (state.users.length + 1).toString(),
    name: name,
  };
  const updatedUsers = [...state.users, newUser];

  return {
    newUser,
    updatedUsers,
  };
};

export const updateUser = (state, uid: string, updates: any) => {
  const userIndex = state.users.findIndex(u => u.uid === uid);
  if (userIndex === -1) {
    throw new Error("User not found");
  }
  const updatedUsers = [...state.users];
  updatedUsers[userIndex] = { ...updatedUsers[userIndex], ...updates };
  return updatedUsers;
};

// Helper function to check relationship type
const checkRelationship = (state, fromUid: string, toUid: string, type: string) => {
  return state.relationships.some(
    (r) => r.fromUid === fromUid && r.toUid === toUid && r.type === type
  );
};

export const getRelationship = (state, fromUid: string, toUid: string) => {
  const fromFollowsTo = checkRelationship(state, fromUid, toUid, "follow");
  const toFollowsFrom = checkRelationship(state, toUid, fromUid, "follow");
  const fromBlocksTo = checkRelationship(state, fromUid, toUid, "block");
  const toBlocksFrom = checkRelationship(state, toUid, fromUid, "block");

  // Determine relationship type
  // Check if either user blocks the other
  if (fromBlocksTo) {
    return "blocked";
  } else if (toBlocksFrom) {
    return "blocked-by";
  } else if (fromFollowsTo && toFollowsFrom) {
    return "friends";
  } else if (fromFollowsTo) {
    return "following";
  } else if (toFollowsFrom) {
    return "followed-by";
  } else {
    return "none";
  }
};

// Helper function to filter out relationships
const filterRelationships = (relationships, fromUid: string, toUid: string, type: string) => {
  return relationships.filter(
    (r) => !(r.fromUid === fromUid && r.toUid === toUid && r.type === type)
  );
};

export const updateRelationship = (state, fromUid: string, toUid: string, action: string) => {
  let updatedRelationships = [...state.relationships];
  
  // For follow/unfollow, only manage follow relationships
  if (action === "follow" || action === "unfollow") {
    updatedRelationships = filterRelationships(updatedRelationships, fromUid, toUid, "follow");
    if (action === "follow") {
      updatedRelationships.push({ fromUid, toUid, type: "follow" });
    }
  }
  // For block/unblock, only manage block relationships
  else if (action === "block" || action === "unblock") {
    updatedRelationships = filterRelationships(updatedRelationships, fromUid, toUid, "block");
    if (action === "block") {
      updatedRelationships.push({ fromUid, toUid, type: "block" });
    }
  }

  return updatedRelationships;
};

export const getUserRelationships = (state, uid: string) => {
  return state.relationships.filter((r) => r.fromUid === uid);
};

export const addPost = (state, uid: any, text: any, type: any, room = null, parentId = null) => {
  const newPost = {
    id: (state.posts.length + 1).toString(),
    uid: uid,
    text: text,
    timestamp: Date.now(),
    type: type,
    room: room,
    parentId: parentId,
  };
  const updatedPosts = [...state.posts, newPost];
  return { newPost, updatedPosts };
};

export const setLikabilityScore = (state, postId: string, userId: string, score: number) => {
  // Check if user already rated this post
  const existingIndex = state.likabilityScores.findIndex(
    ls => ls.postId === postId && ls.userId === userId
  );
  
  let updatedScores;
  if (existingIndex !== -1) {
    // Update existing score
    updatedScores = [...state.likabilityScores];
    updatedScores[existingIndex].score = score;
  } else {
    // Add new score
    updatedScores = [...state.likabilityScores, { postId, userId, score }];
  }
  
  return updatedScores;
};

export const getLikabilityScores = (state, postId: string) => {
  return state.likabilityScores.filter(ls => ls.postId === postId);
};

export const getUserLikabilityScore = (state, postId: string, userId: string) => {
  const score = state.likabilityScores.find(
    ls => ls.postId === postId && ls.userId === userId
  );
  return score ? score.score : null;
};

export const createChatRoom = (state, name: any, type: string, participants = []) => {
  const newRoom = {
    id: `room-${Date.now()}`,
    name: name,
    type: type,
    participants: participants,
    isPrivate: type !== "public-group",
  };
  const updatedChatRooms = [...state.chatRooms, newRoom];
  return { newRoom, updatedChatRooms };
};

export const addSubject = (state, name: any, description = '') => {
  const newSubject = {
    id: `subject-${Date.now()}`,
    name: name,
    description: description,
    createdAt: Date.now(),
  };
  const updatedSubjects = [...state.subjects, newSubject];
  return { newSubject, updatedSubjects };
};

export const setUserRatings = (state, raterUid: any, targetUid: any, ratings: any) => {
  // Check if user already rated this target user
  const existingIndex = state.userRatings.findIndex(
    ur => ur.raterUid === raterUid && ur.targetUid === targetUid
  );
  
  let updatedUserRatings;
  if (existingIndex !== -1) {
    // Update existing ratings
    updatedUserRatings = [...state.userRatings];
    updatedUserRatings[existingIndex].ratings = ratings;
  } else {
    // Add new ratings
    updatedUserRatings = [...state.userRatings, { raterUid, targetUid, ratings }];
  }
  
  return updatedUserRatings;
};

export const getUserRatings = (state, raterUid: any, targetUid: any) => {
  const rating = state.userRatings.find(
    ur => ur.raterUid === raterUid && ur.targetUid === targetUid
  );
  return rating ? rating.ratings : null;
};

export const getAllUserRatings = (state, targetUid: any) => {
  return state.userRatings.filter(ur => ur.targetUid === targetUid);
};

// Generic search helper
const searchItems = (items, query: string, fields: string[]) => {
  if (!query.trim()) return items;
  
  const lowerQuery = query.toLowerCase();
  return items.filter(item => 
    fields.some(field => 
      item[field] && item[field].toLowerCase().includes(lowerQuery)
    )
  );
};

export const searchPosts = (state, query: string) => {
  return searchItems(state.posts, query, ['text']);
};

export const searchSubjects = (state, query: string) => {
  return searchItems(state.subjects, query, ['name', 'description']);
};

export const searchUsers = (state, query: string, currentUserUid = null) => {
  let results = searchItems(state.users, query, ['name']);
  
  // Filter out users blocked by or blocking the current user
  if (currentUserUid) {
    results = results.filter(user => {
      const isBlocked = checkRelationship(state, currentUserUid, user.uid, "block") ||
                        checkRelationship(state, user.uid, currentUserUid, "block");
      return !isBlocked;
    });
  }
  
  return results;
};

// Helper function to format timestamp
const formatTime = (timestamp: number) => {
  const timeDiff = Date.now() - timestamp;
  if (timeDiff < 60000) return "Just now";
  if (timeDiff < 3600000) return `${Math.floor(timeDiff / 60000)} minutes ago`;
  if (timeDiff < 86400000) return `${Math.floor(timeDiff / 3600000)} hours ago`;
  return `${Math.floor(timeDiff / 86400000)} days ago`;
};

// Helper function to format a post
const formatPost = (state, post) => {
  const user = state.users.find(u => u.uid === post.uid) || { name: "Unknown User" };
  
  return {
    id: post.id,
    uid: post.uid,
    user: user.name,
    content: post.text,
    time: formatTime(post.timestamp),
    type: post.type,
    timestamp: post.timestamp,
    hasLikability: post.type === 'feed' || post.type === 'profile',
    likability: Math.floor(Math.random() * 101),
    children: []
  };
};

export const getPosts = (state, context: any, room = null, profileUserUid = null) => {
  let filteredPosts: any[] = [];

  switch (context) {
    case "profile":
      // If profileUserUid is provided, show that user's profile posts
      // Otherwise show current user's profile posts
      const targetUid = profileUserUid || (state.currentUser ? state.currentUser.uid : null);
      if (targetUid) {
        filteredPosts = state.posts.filter(
          (post) => post.type === "profile" && post.uid === targetUid
        );
      }
      break;
    case "feed":
      // Show profile posts and feed posts from followed users
      const currentUserUid = state.currentUser ? state.currentUser.uid : null;
      if (currentUserUid) {
        const followedUids = state.relationships
          .filter((r) => r.fromUid === currentUserUid && r.type === "follow")
          .map((r) => r.toUid);
        followedUids.push(currentUserUid); // Include current user's posts
        filteredPosts = state.posts.filter(
          (post) =>
            (post.type === "profile" || post.type === "feed") &&
            followedUids.includes(post.uid)
        );
      }
      break;
    case "recommendations":
      // Get users you're not friends with
      const currentUserUidForRecs = state.currentUser ? state.currentUser.uid : "0";
      const followedUidsForRecs = state.relationships
        .filter(r => r.fromUid === currentUserUidForRecs && r.type === "follow")
        .map(r => r.toUid);
      
      // Add current user to exclude them
      followedUidsForRecs.push(currentUserUidForRecs);
      
      const recommendedUsers = state.users
        .filter(user => !followedUidsForRecs.includes(user.uid))
        .map(user => ({
          id: `user-rec-${user.uid}`,
          uid: user.uid,
          text: `You might know ${user.name}`,
          timestamp: Date.now(),
          type: "user-recommendation",
          user: user,
        }));
      
      // Get public group chats
      const publicGroupChats = state.chatRooms
        .filter(room => room.type === "public-group")
        .map(room => ({
          id: `room-rec-${room.id}`,
          uid: "system",
          text: `Public group: ${room.name}`,
          timestamp: Date.now(),
          type: "room-recommendation",
          room: room,
        }));
      
      // Get some posts (mix of different types)
      const recommendedPosts = state.posts
        .filter(post => 
          post.type === "feed" || 
          post.type === "profile" || 
          post.type === "popular"
        )
        .slice(0, 5)
        .map(post => ({
          ...post,
          type: "post-recommendation"
        }));
      
      // Combine all recommendations
      filteredPosts = [
        ...recommendedUsers,
        ...publicGroupChats,
        ...recommendedPosts
      ];
      break;
    case "notifications":
      filteredPosts = state.posts.filter(
        (post) => post.type === "notification"
      );
      break;
    case "popular":
      filteredPosts = state.posts.filter(
        (post) => post.type === "popular"
      );
      break;
    case "chat":
      if (room) {
        filteredPosts = state.posts.filter(
          (post) => post.type === "chat" && post.room === room
        );
      }
      break;
    case "friends":
      // For friends context, show all users as potential friends
      // We'll format users as posts
      const allUsers = state.users;
      // Convert users to the post format
      const userPosts = allUsers.map((user) => ({
        id: `user-${user.uid}`,
        uid: user.uid,
        text: `User: ${user.name} - Connect and chat!`,
        timestamp: Date.now(),
        type: "user",
        user: user,
      }));
      filteredPosts = userPosts;
      break;
    case "blocked":
      // Get blocked users
      const blockedRelationships = state.relationships.filter(
        (r) => r.fromUid === (state.currentUser ? state.currentUser.uid : "0") && r.type === "block"
      );
      const blockedUsers = blockedRelationships
        .map((rel) => state.users.find((u) => u.uid === rel.toUid))
        .filter(Boolean);

      const blockedUserPosts = blockedUsers.map((user) => ({
        id: `blocked-${user.uid}`,
        uid: user.uid,
        text: `You have blocked this user`,
        timestamp: Date.now(),
        type: "blocked",
        user: user,
      }));
      filteredPosts = blockedUserPosts;
      break;
    case "following":
      // Get following users
      const followingRelationships = state.relationships.filter(
        (r) => r.fromUid === (state.currentUser ? state.currentUser.uid : "0") && r.type === "follow"
      );
      const followingUsers = followingRelationships
        .map((rel) => state.users.find((u) => u.uid === rel.toUid))
        .filter(Boolean);

      const followingUserPosts = followingUsers.map((user) => ({
        id: `following-${user.uid}`,
        uid: user.uid,
        text: `You are following this user`,
        timestamp: Date.now(),
        type: "following",
        user: user,
      }));
      filteredPosts = followingUserPosts;
      break;
    case "followers":
      // Get followers (users who follow the current user)
      const followerRelationships = state.relationships.filter(
        (r) => r.toUid === (state.currentUser ? state.currentUser.uid : "0") && r.type === "follow"
      );
      const followers = followerRelationships
        .map((rel) => state.users.find((u) => u.uid === rel.fromUid))
        .filter(Boolean);

      const followerUserPosts = followers.map((user) => ({
        id: `follower-${user.uid}`,
        uid: user.uid,
        text: `This user follows you`,
        timestamp: Date.now(),
        type: "followers",
        user: user,
      }));
      filteredPosts = followerUserPosts;
      break;
    case "subjects":
      // Convert subjects to posts format
      const subjectPosts = state.subjects.map(subject => ({
        id: `subject-${subject.id}`,
        uid: "system",
        text: subject.description,
        timestamp: subject.createdAt,
        type: "subject",
        subject: subject,
        user: "System",
        time: new Date(subject.createdAt).toLocaleDateString(),
        content: subject.description,
        hasLikability: false
      }));
      filteredPosts = subjectPosts;
      break;
    case "search":
      // For search, include users, posts, and subjects
      // Convert users to posts format
      const searchUserPosts = state.users.map(user => ({
        id: `search-user-${user.uid}`,
        uid: user.uid,
        text: `User: ${user.name} - ${user.aboutMe || 'No description available'}`,
        timestamp: Date.now(),
        type: "search-user",
        user: user.name,
        time: 'User',
        hasLikability: false
      }));
      
      // Convert subjects to posts format
      const searchSubjectPosts = state.subjects.map(subject => ({
        id: `search-subject-${subject.id}`,
        uid: "system",
        text: `Subject: ${subject.name} - ${subject.description}`,
        timestamp: subject.createdAt,
        type: "search-subject",
        user: "System",
        time: new Date(subject.createdAt).toLocaleDateString(),
        hasLikability: false
      }));
      
      // Get regular posts
      const searchRegularPosts = state.posts.slice(0, 10).map((post) => ({
        ...post,
        type: "search-post",
      }));
      
      // Combine all results
      filteredPosts = [
        ...searchUserPosts,
        ...searchSubjectPosts,
        ...searchRegularPosts
      ];
      break;
    default:
      filteredPosts = [];
  }

  // Sort by timestamp (newest first)
  filteredPosts.sort((a, b) => b.timestamp - a.timestamp);

  // Format the posts
  const formattedPosts = filteredPosts.map(post => formatPost(state, post));
  
  return formattedPosts;
};
