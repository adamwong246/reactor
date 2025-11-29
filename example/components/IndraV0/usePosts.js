import { useState, useContext, useEffect } from 'react';
import { BackendContext } from './Backend.js';
import { useSelector } from 'react-redux';
import { selectPosts } from './selectors';

export function usePosts(context, room, profileUser = null) {
  const backend = useContext(BackendContext);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const allPosts = useSelector(selectPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        // For profile context, pass the profile user's UID to the backend
        if (context === 'profile') {
          const profileUserUid = profileUser?.uid || null;
          const backendPosts = await backend.getPosts(context, room, profileUserUid);
          setPosts(backendPosts);
        } else if (['feed', 'recommendations', 'notifications', 'popular', 'chat', 'search', 'friends', 'blocked', 'following', 'followers'].includes(context)) {
          const backendPosts = await backend.getPosts(context, room);
          setPosts(backendPosts);
        } else {
          // Fallback for any other contexts
          const backendPosts = await backend.getPosts(context, room);
          setPosts(backendPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [context, backend, room, profileUser, allPosts]);


  const addPost = async (content, parentId = null) => {
    try {
      const currentUser = await backend.getCurrentUser();
      let postType;
      let targetUid = currentUser.uid;
      
      // Determine post type based on context
      switch (context) {
        case 'profile':
          postType = 'profile';
          // If we're on someone else's profile, we can't post to their wall directly
          // In a real app, this might be a comment or mention
          // For now, we'll always post as the current user
          break;
        case 'feed':
          postType = 'feed';
          break;
        case 'chat':
          postType = 'chat';
          break;
        default:
          postType = 'feed';
      }
      
      const newPost = await backend.addPost(targetUid, content, postType, room, parentId);
      
      // Format the new post to match existing structure
      const formattedPost = {
        id: newPost.id,
        uid: newPost.uid,
        user: "You",
        content: newPost.text,
        time: "Just now",
        timestamp: newPost.timestamp, // Add timestamp for sorting
        type: newPost.type,
        parentId: newPost.parentId
      };
      
      // Refetch posts to get the updated list with proper formatting
      // This ensures the new post is properly integrated with the tree structure
      const backendPosts = await backend.getPosts(context, room, profileUser?.uid);
      setPosts(backendPosts);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const searchPosts = async (query) => {
    // For now, we'll keep the existing search logic for friends
    if (context === 'friends') {
      // Use the backend to search for users
      try {
        const results = await backend.searchUsers(query);
        // Convert user results to the format expected by the posts system
        const formattedResults = results.map(user => ({
          id: user.uid,
          user: user.name,
          content: `User found: ${user.name}`,
          time: "Just now",
          mutualFriends: Math.floor(Math.random() * 10) + 1
        }));
        return formattedResults;
      } catch (error) {
        console.error('Search error:', error);
        return [];
      }
    } else {
      // For other contexts, use the existing logic
      let additionalPosts = [
        {
          id: 100,
          user: "Search Result",
          content: `Found result for "${query}" - This is a sample search result`,
          time: "Just now",
        },
        {
          id: 101,
          user: "React Expert",
          content: `Tutorial on ${query} - Learn how to implement this in your projects`,
          time: "2 hours ago",
        },
        {
          id: 102,
          user: "Tech News",
          content: `Breaking: New developments in ${query} technology`,
          time: "1 day ago",
        }
      ];
      
      const allPosts = [...posts, ...additionalPosts];
      
      return allPosts.filter(post => 
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.user.toLowerCase().includes(query.toLowerCase())
      );
    }
  };

  const sortPosts = (posts, scrollDirection) => {
    const sortedPosts = [...posts];
    if (scrollDirection === 'down') {
      // For downscrolling, newest posts at the top (sort by timestamp descending)
      sortedPosts.sort((a, b) => b.timestamp - a.timestamp);
    } else {
      // For upscrolling, newest posts at the bottom (sort by timestamp ascending)
      sortedPosts.sort((a, b) => a.timestamp - b.timestamp);
    }
    return sortedPosts;
  };

  return { posts, setPosts, addPost, sortPosts, searchPosts, isLoading };
}
