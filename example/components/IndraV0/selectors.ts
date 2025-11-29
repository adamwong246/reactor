import { createSelector } from 'reselect';
import { AppState, User } from './store';

// Basic selectors
const getUsers = (state: AppState) => state.users;
const getCurrentUser = (state: AppState) => state.currentUser;
const getRelationships = (state: AppState) => state.relationships;
const getChatRooms = (state: AppState) => state.chatRooms;
const getPosts = (state: AppState) => state.posts;
const getLikabilityScores = (state: AppState) => state.likabilityScores;
const getUserRatings = (state: AppState) => state.userRatings;
const getSubjects = (state: AppState) => state.subjects;

// Memoized selectors
export const selectUsers = createSelector(
  [getUsers],
  (users) => users
);

export const selectCurrentUser = createSelector(
  [getCurrentUser],
  (currentUser) => currentUser
);

export const selectRelationships = createSelector(
  [getRelationships],
  (relationships) => relationships
);

export const selectChatRooms = createSelector(
  [getChatRooms],
  (chatRooms) => chatRooms
);

export const selectPosts = createSelector(
  [getPosts],
  (posts) => posts
);

export const selectLikabilityScores = createSelector(
  [getLikabilityScores],
  (likabilityScores) => likabilityScores
);

export const selectUserRatings = createSelector(
  [getUserRatings],
  (userRatings) => userRatings
);

export const selectSubjects = createSelector(
  [getSubjects],
  (subjects) => subjects
);

// Complex selectors
export const selectFriends = createSelector(
  [getCurrentUser, getRelationships, getUsers],
  (currentUser, relationships, users) => {
    if (!currentUser) return [];
    const friendUids = relationships
      .filter(r => r.fromUid === currentUser.uid && r.type === 'follow')
      .map(r => r.toUid);
    return users.filter(user => friendUids.includes(user.uid));
  }
);

export const selectBlockedUsers = createSelector(
  [getCurrentUser, getRelationships, getUsers],
  (currentUser, relationships, users) => {
    if (!currentUser) return [];
    const blockedUids = relationships
      .filter(r => r.fromUid === currentUser.uid && r.type === 'block')
      .map(r => r.toUid);
    return users.filter(user => blockedUids.includes(user.uid));
  }
);

// Add more complex selectors as needed
