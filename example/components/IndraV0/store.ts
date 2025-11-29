import { createStore } from 'redux';

// Define types
export interface User {
  uid: string;
  name: string;
  aboutMe?: string;
  sexAssignedAtBirth?: string;
  birthdate?: string;
  userType?: string;
  genderIdentityMan?: number;
  genderIdentityWoman?: number;
  anatomicalSexMale?: number;
  anatomicalSexFemale?: number;
  sexuallyAttractedToMen?: number;
  sexuallyAttractedToWomen?: number;
  romanticallyAttractedToMen?: number;
  romanticallyAttractedToWomen?: number;
  loveHateItems?: Array<{ subjectId: string; isLove: boolean }>;
}

export interface ChatRoom {
  id: string;
  name: string;
  type: string;
  participants: string[];
  isPrivate: boolean;
}

interface Relationship {
  fromUid: string;
  toUid: string;
  type: string;
}

interface Post {
  id: string;
  uid: string;
  text: string;
  timestamp: number;
  type: string;
  room?: string;
  parentId?: string;
  subtype?: string;
  likability?: number;
}

interface LikabilityScore {
  postId: string;
  userId: string;
  score: number;
}

interface UserRating {
  raterUid: string;
  targetUid: string;
  ratings: {
    isWhoTheySay: boolean | null;
    isBirthdateAccurate: boolean | null;
    isHuman: boolean | null;
  };
}

interface Subject {
  id: string;
  name: string;
  description: string;
  createdAt: number;
}

interface AppState {
  users: User[];
  currentUser: User | null;
  relationships: Relationship[];
  chatRooms: ChatRoom[];
  posts: Post[];
  likabilityScores: LikabilityScore[];
  userRatings: UserRating[];
  subjects: Subject[];
}

// Action types
const UPDATE_USERS = 'UPDATE_USERS';
const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
const UPDATE_RELATIONSHIPS = 'UPDATE_RELATIONSHIPS';
const UPDATE_CHAT_ROOMS = 'UPDATE_CHAT_ROOMS';
const UPDATE_POSTS = 'UPDATE_POSTS';
const UPDATE_LIKABILITY_SCORES = 'UPDATE_LIKABILITY_SCORES';
const UPDATE_USER_RATINGS = 'UPDATE_USER_RATINGS';
const UPDATE_SUBJECTS = 'UPDATE_SUBJECTS';

// Action creators
export const updateUsers = (users: User[]) => ({ type: UPDATE_USERS, payload: users });
export const updateCurrentUser = (currentUser: User | null) => ({ type: UPDATE_CURRENT_USER, payload: currentUser });
export const updateRelationships = (relationships: Relationship[]) => ({ type: UPDATE_RELATIONSHIPS, payload: relationships });
export const updateChatRooms = (chatRooms: ChatRoom[]) => ({ type: UPDATE_CHAT_ROOMS, payload: chatRooms });
export const updatePosts = (posts: Post[]) => ({ type: UPDATE_POSTS, payload: posts });
export const updateLikabilityScores = (likabilityScores: LikabilityScore[]) => ({ type: UPDATE_LIKABILITY_SCORES, payload: likabilityScores });
export const updateUserRatings = (userRatings: UserRating[]) => ({ type: UPDATE_USER_RATINGS, payload: userRatings });
export const updateSubjects = (subjects: Subject[]) => ({ type: UPDATE_SUBJECTS, payload: subjects });

// Initial state
const initialState: AppState = {
  users: [],
  currentUser: null,
  relationships: [],
  chatRooms: [],
  posts: [],
  likabilityScores: [],
  userRatings: [],
  subjects: []
};

// Reducer
function rootReducer(state = initialState, action: any): AppState {
  switch (action.type) {
    case UPDATE_USERS:
      return { ...state, users: action.payload };
    case UPDATE_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case UPDATE_RELATIONSHIPS:
      return { ...state, relationships: action.payload };
    case UPDATE_CHAT_ROOMS:
      return { ...state, chatRooms: action.payload };
    case UPDATE_POSTS:
      return { ...state, posts: action.payload };
    case UPDATE_LIKABILITY_SCORES:
      return { ...state, likabilityScores: action.payload };
    case UPDATE_USER_RATINGS:
      return { ...state, userRatings: action.payload };
    case UPDATE_SUBJECTS:
      return { ...state, subjects: action.payload };
    default:
      return state;
  }
}

// Create store
export const store = createStore(rootReducer);
