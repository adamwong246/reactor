import { store, User } from './store.js';
import { 
  updateUsers, 
  updateCurrentUser, 
  updateRelationships, 
  updateChatRooms, 
  updatePosts, 
  updateLikabilityScores, 
  updateUserRatings, 
  updateSubjects 
} from './store.js';
import { InitDb } from "./InitDb.js";
import { 
  addUser, 
  getRelationship, 
  getUser, 
  updateRelationship, 
  updateUser,
  addPost,
  setLikabilityScore,
  getLikabilityScores,
  getUserLikabilityScore,
  createChatRoom,
  addSubject,
  setUserRatings,
  getUserRatings,
  getAllUserRatings,
  getUserRelationships,
  searchPosts,
  searchSubjects,
  searchUsers,
  getPosts
} from './BackendUtils.js';

export class FakeBackend {
  constructor() {
    // Initialize the store with data from InitDb
    const users = InitDb.users.map(user => ({
      ...user,
      aboutMe: user.aboutMe || "This user hasn't written an about me yet.",
      sexAssignedAtBirth: user.sexAssignedAtBirth || "Not specified",
      birthdate: user.birthdate || "",
      genderIdentityMan: user.genderIdentityMan !== undefined ? user.genderIdentityMan : 50,
      genderIdentityWoman: user.genderIdentityWoman !== undefined ? user.genderIdentityWoman : 50,
      anatomicalSexMale: user.anatomicalSexMale !== undefined ? user.anatomicalSexMale : 50,
      anatomicalSexFemale: user.anatomicalSexFemale !== undefined ? user.anatomicalSexFemale : 50,
      sexuallyAttractedToMen: user.sexuallyAttractedToMen !== undefined ? user.sexuallyAttractedToMen : 50,
      sexuallyAttractedToWomen: user.sexuallyAttractedToWomen !== undefined ? user.sexuallyAttractedToWomen : 50,
      romanticallyAttractedToMen: user.romanticallyAttractedToMen !== undefined ? user.romanticallyAttractedToMen : 50,
      romanticallyAttractedToWomen: user.romanticallyAttractedToWomen !== undefined ? user.romanticallyAttractedToWomen : 50
    }));

    const currentUser = { 
      uid: "0", 
      name: "You",
      aboutMe: "Welcome to my profile! I'm passionate about technology, design, and building meaningful connections.",
      sexAssignedAtBirth: "Not specified",
      birthdate: "1990-01-01",
      userType: "Human",
      genderIdentityMan: 50,
      genderIdentityWoman: 50,
      anatomicalSexMale: 50,
      anatomicalSexFemale: 50,
      sexuallyAttractedToMen: 50,
      sexuallyAttractedToWomen: 50,
      romanticallyAttractedToMen: 50,
      romanticallyAttractedToWomen: 50,
      loveHateItems: [
        { subjectId: "subject-6", isLove: true }, // Coffee Culture
        { subjectId: "subject-1", isLove: true }, // Hiking
        { subjectId: "subject-7", isLove: true }, // React Development
        { subjectId: "subject-10", isLove: false } // Traffic (not in subjects, will show as Unknown)
      ]
    };

    // Dispatch initial state to the store
    store.dispatch(updateUsers(users));
    store.dispatch(updateCurrentUser(currentUser));
    store.dispatch(updateRelationships(InitDb.relationships));
    store.dispatch(updateChatRooms(InitDb.chatRooms));
    store.dispatch(updatePosts(InitDb.posts));
    store.dispatch(updateLikabilityScores([]));
    store.dispatch(updateUserRatings([]));
    store.dispatch(updateSubjects(InitDb.subjects));
  }

  // Get all users
  getUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        resolve([...state.users]);
      }, 100);
    });
  }

  // Get user by uid
  getUser(uid: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const state = store.getState();
        const user = getUser(state, uid);
        if (user) {
          resolve(user);
        } else {
          reject(new Error("User not found"));
        }
      }, 100);
    });
  }

  // Get current user
  getCurrentUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        resolve(state.currentUser);
      }, 50);
    });
  }

  // Add a new user
  addUser(name: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const {newUser, updatedUsers} = addUser(state, name)
        store.dispatch(updateUsers(updatedUsers));
        resolve(newUser);
      }, 200);
    });
  }

  // Update user information
  updateUser(uid: string, updates: User | null) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const state = store.getState();
        try {
          const updatedUsers = updateUser(state, uid, updates);
          store.dispatch(updateUsers(updatedUsers));
          
          // Also update current user if it's the same user
          if (state.currentUser.uid === uid) {
            store.dispatch(updateCurrentUser({ ...state.currentUser, ...updates }));
          }
          resolve(updatedUsers.find(u => u.uid === uid));
        } catch (error) {
          reject(error);
        }
      }, 100);
    });
  }

  // Search users by name
  async searchUsers(query: string, currentUserUid = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const results = searchUsers(state, query, currentUserUid);
        resolve(results);
      }, 150);
    });
  }

  // Get relationship between two users
  getRelationship(fromUid: string, toUid: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const relationship = getRelationship(state, fromUid, toUid);
        resolve(relationship);
      }, 100);
    });
  }

  // Update relationship between users
  updateRelationship(fromUid: string, toUid: string, action: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const updatedRelationships = updateRelationship(state, fromUid, toUid, action);
        store.dispatch(updateRelationships(updatedRelationships));
        resolve({ success: true });
      }, 150);
    });
  }

  // Get all relationships for a user
  getUserRelationships(uid: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const userRelationships = getUserRelationships(state, uid);
        resolve(userRelationships);
      }, 100);
    });
  }

  // Get posts based on context and room
  getPosts(context: any, room = null, profileUserUid = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const formattedPosts = getPosts(state, context, room, profileUserUid);
        resolve(formattedPosts);
      }, 150);
    })
  }
    

  // Add a new post
  addPost(uid: any, text: any, type: any, room = null, parentId = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const { newPost, updatedPosts } = addPost(state, uid, text, type, room, parentId);
        store.dispatch(updatePosts(updatedPosts));
        resolve(newPost);
      }, 100);
    })
  }

  // Add or update likability score for a post
  setLikabilityScore(postId: string, userId: string, score: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const updatedScores = setLikabilityScore(state, postId, userId, score);
        store.dispatch(updateLikabilityScores(updatedScores));
        resolve({ success: true });
      }, 100);
    });
  }

  // Get likability scores for a post
  getLikabilityScores(postId: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const scores = getLikabilityScores(state, postId);
        resolve(scores);
      }, 100);
    });
  }

  // Get user's likability score for a post
  getUserLikabilityScore(postId: string, userId: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const score = getUserLikabilityScore(state, postId, userId);
        resolve(score);
      }, 100);
    });
  }

  // Get chat rooms for current user
  getChatRooms() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        // For now, return all rooms. In a real app, you'd filter based on user permissions
        resolve([...state.chatRooms]);
      }, 100);
    });
  }

  // Create a new chat room
  createChatRoom(name: any, type: string, participants = []) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const { newRoom, updatedChatRooms } = createChatRoom(state, name, type, participants);
        store.dispatch(updateChatRooms(updatedChatRooms));
        resolve(newRoom);
      }, 100);
    });
  }

  // Get all subjects
  getSubjects() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        resolve([...state.subjects]);
      }, 100);
    });
  }

  // Get subject by id
  getSubject(id: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const state = store.getState();
        const subject = state.subjects.find((s) => s.id === id);
        if (subject) {
          resolve(subject);
        } else {
          reject(new Error("Subject not found"));
        }
      }, 100);
    });
  }

  // Add a new subject
  addSubject(name: any, description = '') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const { newSubject, updatedSubjects } = addSubject(state, name, description);
        store.dispatch(updateSubjects(updatedSubjects));
        resolve(newSubject);
      }, 100);
    });
  }

  // Search subjects by name
  searchSubjects(query: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const results = searchSubjects(state, query);
        resolve(results);
      }, 150);
    });
  }

  // Search posts by content
  searchPosts(query: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const results = searchPosts(state, query);
        resolve(results);
      }, 150);
    });
  }

  // Set user ratings
  setUserRatings(raterUid: any, targetUid: any, ratings: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const updatedUserRatings = setUserRatings(state, raterUid, targetUid, ratings);
        store.dispatch(updateUserRatings(updatedUserRatings));
        resolve({ success: true });
      }, 100);
    });
  }

  // Get user ratings
  getUserRatings(raterUid: any, targetUid: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const ratings = getUserRatings(state, raterUid, targetUid);
        resolve(ratings);
      }, 100);
    });
  }

  // Get all ratings for a target user
  getAllUserRatings(targetUid: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const state = store.getState();
        const ratings = getAllUserRatings(state, targetUid);
        resolve(ratings);
      }, 100);
    });
  }
}
