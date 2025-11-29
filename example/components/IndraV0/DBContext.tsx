import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { 
  selectUsers, 
  selectCurrentUser, 
  selectRelationships, 
  selectChatRooms, 
  selectPosts, 
  selectLikabilityScores, 
  selectUserRatings, 
  selectSubjects,
  selectFriends,
  selectBlockedUsers
} from './selectors';
import { User, ChatRoom } from './store';

// Define the type for our context value
interface DBContextValue {
  users: User[];
  currentUser: User | null;
  relationships: any[];
  chatRooms: ChatRoom[];
  posts: any[];
  likabilityScores: any[];
  userRatings: any[];
  subjects: any[];
  friends: User[];
  blockedUsers: User[];
}

// Create the context with a default value
export const DBContext = createContext<DBContextValue | undefined>(undefined);

// Custom hook to use the DB context
export const useDB = (): DBContextValue => {
  const context = useContext(DBContext);
  if (!context) {
    throw new Error('useDB must be used within a DBProvider');
  }
  return context;
};

// Define props for DBProvider
interface DBProviderProps {
  children: ReactNode;
}

// Provider component
export const DBProvider: React.FC<DBProviderProps> = ({ children }) => {
  // Use selectors to get data from the Redux store
  const users = useSelector(selectUsers);
  const currentUser = useSelector(selectCurrentUser);
  const relationships = useSelector(selectRelationships);
  const chatRooms = useSelector(selectChatRooms);
  const posts = useSelector(selectPosts);
  const likabilityScores = useSelector(selectLikabilityScores);
  const userRatings = useSelector(selectUserRatings);
  const subjects = useSelector(selectSubjects);
  const friends = useSelector(selectFriends);
  const blockedUsers = useSelector(selectBlockedUsers);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo((): DBContextValue => ({
    users,
    currentUser,
    relationships,
    chatRooms,
    posts,
    likabilityScores,
    userRatings,
    subjects,
    friends,
    blockedUsers
  }), [
    users,
    currentUser,
    relationships,
    chatRooms,
    posts,
    likabilityScores,
    userRatings,
    subjects,
    friends,
    blockedUsers
  ]);

  return (
    <DBContext.Provider value={contextValue}>
      {children}
    </DBContext.Provider>
  );
};
