// Let's add some sample posts directly for now
const posts = [
  {
    id: "post-1",
    uid: "0",
    text: "Welcome to my feed! This is my first post.",
    timestamp: Date.now() - 3600000,
    type: "feed"
  },
  {
    id: "post-2",
    uid: "1",
    text: "Just finished a great design project! #design #ux",
    timestamp: Date.now() - 7200000,
    type: "feed"
  },
  {
    id: "post-3",
    uid: "2",
    text: "Exploring new machine learning algorithms today. Fascinating stuff!",
    timestamp: Date.now() - 10800000,
    type: "feed"
  },
  {
    id: "post-4",
    uid: "0",
    text: "Working on improving the feed functionality. Stay tuned!",
    timestamp: Date.now() - 14400000,
    type: "feed"
  },
  {
    id: "post-5",
    uid: "1",
    text: "Coffee and code - the perfect combination for a productive day!",
    timestamp: Date.now() - 18000000,
    type: "feed"
  }
];

export const InitDb = {
  users: [
    { 
      uid: "1", 
      name: "Alice Johnson",
      aboutMe: "UX/UI designer with a love for minimalist design. Coffee enthusiast and amateur photographer.",
      sexAssignedAtBirth: "Female",
      birthdate: "1992-05-15",
      genderIdentityMan: 10,
      genderIdentityWoman: 90,
      anatomicalSexMale: 5,
      anatomicalSexFemale: 95,
      sexuallyAttractedToMen: 60,
      sexuallyAttractedToWomen: 40,
      romanticallyAttractedToMen: 70,
      romanticallyAttractedToWomen: 30
    },
    { 
      uid: "2", 
      name: "Bob Smith",
      aboutMe: "Data scientist exploring AI and machine learning. Chess player and science fiction fan.",
      sexAssignedAtBirth: "Male",
      birthdate: "1988-11-23",
      genderIdentityMan: 95,
      genderIdentityWoman: 5,
      anatomicalSexMale: 95,
      anatomicalSexFemale: 5,
      sexuallyAttractedToMen: 0,
      sexuallyAttractedToWomen: 100,
      romanticallyAttractedToMen: 0,
      romanticallyAttractedToWomen: 100
    },
    { 
      uid: "3", 
      name: "Carol Davis",
      aboutMe: "Frontend developer specializing in React. Love traveling and trying new cuisines.",
      sexAssignedAtBirth: "Female",
      genderIdentityMan: 50,
      genderIdentityWoman: 50,
      anatomicalSexMale: 20,
      anatomicalSexFemale: 80,
      sexuallyAttractedToMen: 80,
      sexuallyAttractedToWomen: 80,
      romanticallyAttractedToMen: 80,
      romanticallyAttractedToWomen: 80
    },
    { 
      uid: "4", 
      name: "David Wilson",
      aboutMe: "Backend engineer building scalable systems. Marathon runner and guitar player.",
      sexAssignedAtBirth: "Male"
    },
    { 
      uid: "5", 
      name: "Eva Brown",
      aboutMe: "Product manager with a background in psychology. Passionate about user-centered design and team leadership.",
      sexAssignedAtBirth: "Female"
    },
    { 
      uid: "6", 
      name: "Frank Miller",
      aboutMe: "DevOps engineer automating everything. Home brewer and craft beer enthusiast.",
      sexAssignedAtBirth: "Male"
    },
    { 
      uid: "7", 
      name: "Grace Lee",
      aboutMe: "Mobile app developer creating iOS and Android apps. Yoga instructor and meditation practitioner.",
      sexAssignedAtBirth: "Female"
    },
    { 
      uid: "8", 
      name: "Henry Taylor",
      aboutMe: "Cybersecurity expert protecting digital assets. Rock climber and outdoor adventurer.",
      sexAssignedAtBirth: "Male"
    },
    { 
      uid: "9", 
      name: "Ivy Chen",
      aboutMe: "AI researcher working on natural language processing. Classical music lover and pianist.",
      sexAssignedAtBirth: "Female"
    },
    { 
      uid: "10", 
      name: "Jack Robinson",
      aboutMe: "Cloud architect designing distributed systems. Father of two and weekend woodworker.",
      sexAssignedAtBirth: "Male"
    },
    { 
      uid: "11", 
      name: "Katherine Moore",
      aboutMe: "Technical writer making complex topics accessible. Avid reader and aspiring novelist.",
      sexAssignedAtBirth: "Female"
    },
    { 
      uid: "12", 
      name: "Liam Anderson",
      aboutMe: "Game developer creating immersive experiences. Board game collector and tabletop RPG enthusiast.",
      sexAssignedAtBirth: "Male"
    },
    { 
      uid: "13", 
      name: "Mia Thompson",
      aboutMe: "Data analyst uncovering insights from data. Food blogger and cooking show addict.",
      sexAssignedAtBirth: "Female"
    },
    { 
      uid: "14", 
      name: "Noah Garcia",
      aboutMe: "Blockchain developer building decentralized applications. Cryptocurrency investor and futurist.",
      sexAssignedAtBirth: "Male"
    },
    { 
      uid: "15", 
      name: "Olivia Martinez",
      aboutMe: "Full-stack developer with a passion for open source. Volunteer teacher and community organizer.",
      sexAssignedAtBirth: "Female"
    },
    { 
      uid: "16", 
      name: "Peter White",
      aboutMe: "QA engineer ensuring software quality. Movie buff and amateur film critic.",
      sexAssignedAtBirth: "Male"
    },
    { 
      uid: "17", 
      name: "Quinn Harris",
      aboutMe: "Startup founder building the next big thing. Minimalist and productivity geek.",
      sexAssignedAtBirth: "Prefer not to say"
    },
    { 
      uid: "18", 
      name: "Rachel Clark",
      aboutMe: "Digital marketer driving growth strategies. Travel photographer and adventure seeker.",
      sexAssignedAtBirth: "Female"
    },
    { 
      uid: "19", 
      name: "Samuel Lewis",
      aboutMe: "Systems administrator keeping everything running. Home automation enthusiast and smart home builder.",
      sexAssignedAtBirth: "Male"
    },
    { 
      uid: "20", 
      name: "Tina Walker",
      aboutMe: "UI developer creating beautiful interfaces. Watercolor artist and gallery visitor.",
      sexAssignedAtBirth: "Female"
    },
    { 
      uid: "21", 
      name: "Uma Hall",
      aboutMe: "Machine learning engineer training models. Plant mom and urban gardener.",
      sexAssignedAtBirth: "Intersex"
    },
    { 
      uid: "22", 
      name: "Victor Young",
      aboutMe: "Database administrator optimizing queries. Sports fan and fantasy league commissioner.",
      sexAssignedAtBirth: "Male"
    },
    { 
      uid: "23", 
      name: "Wendy King",
      aboutMe: "Technical project manager delivering on time. Marathon runner and fitness coach.",
      sexAssignedAtBirth: "Female"
    },
    { 
      uid: "24", 
      name: "Xavier Scott",
      aboutMe: "Software consultant helping businesses scale. Public speaker and tech community leader.",
      sexAssignedAtBirth: "Male"
    },
    { 
      uid: "25", 
      name: "Yvonne Green",
      aboutMe: "Research scientist pushing boundaries. Science communicator and podcast host.",
      sexAssignedAtBirth: "Female"
    },
    { 
      uid: "26", 
      name: "Zachary Adams",
      aboutMe: "VR/AR developer creating immersive experiences. Sci-fi fan and space exploration enthusiast.",
      sexAssignedAtBirth: "Male"
    },
  ],

  relationships: [
    // Add some initial relationships for testing
    { fromUid: "0", toUid: "1", type: "follow" },
    { fromUid: "1", toUid: "0", type: "follow" }, // Alice and current user are friends
    { fromUid: "0", toUid: "2", type: "follow" }, // Current user follows Bob
    { fromUid: "3", toUid: "0", type: "follow" }, // Carol follows current user
    { fromUid: "0", toUid: "4", type: "block" }, // Current user blocks David
    { fromUid: "5", toUid: "0", type: "block" }, // Eva blocks current user
    // Add more relationships to create a rich social graph
    { fromUid: "0", toUid: "6", type: "follow" },
    { fromUid: "7", toUid: "0", type: "follow" },
    { fromUid: "0", toUid: "8", type: "follow" },
    { fromUid: "9", toUid: "0", type: "follow" },
    { fromUid: "10", toUid: "0", type: "follow" },
    { fromUid: "0", toUid: "11", type: "follow" },
    { fromUid: "12", toUid: "0", type: "follow" },
    { fromUid: "0", toUid: "13", type: "follow" },
    { fromUid: "14", toUid: "0", type: "follow" },
    // Add relationships between other users
    { fromUid: "1", toUid: "2", type: "follow" },
    { fromUid: "2", toUid: "1", type: "follow" },
    { fromUid: "1", toUid: "3", type: "follow" },
    { fromUid: "3", toUid: "1", type: "follow" },
    { fromUid: "4", toUid: "5", type: "follow" },
    { fromUid: "6", toUid: "7", type: "follow" },
    { fromUid: "7", toUid: "6", type: "follow" },
    { fromUid: "8", toUid: "9", type: "follow" },
    { fromUid: "9", toUid: "8", type: "follow" },
    { fromUid: "10", toUid: "11", type: "follow" },
    { fromUid: "11", toUid: "10", type: "follow" },
    { fromUid: "12", toUid: "13", type: "follow" },
    { fromUid: "13", toUid: "12", type: "follow" },
    { fromUid: "14", toUid: "15", type: "follow" },
    { fromUid: "15", toUid: "14", type: "follow" },
  ],
  
  chatRooms: [
    {
      id: "private-1-0",
      name: "Chat with Alice Johnson",
      type: "private-1-1",
      participants: ["0", "1"],
      isPrivate: true,
    },
    {
      id: "private-group-1",
      name: "Team Discussion",
      type: "private-group",
      participants: ["0", "1", "2"],
      isPrivate: true,
    },
    {
      id: "public-group-1",
      name: "General Discussion",
      type: "public-group",
      participants: [],
      isPrivate: false,
    },
    {
      id: "private-1-2",
      name: "Chat with Bob Smith",
      type: "private-1-1",
      participants: ["0", "2"],
      isPrivate: true,
    },
    {
      id: "private-1-3",
      name: "Chat with Carol Davis",
      type: "private-1-1",
      participants: ["0", "3"],
      isPrivate: true,
    },
    {
      id: "public-group-2",
      name: "Tech Enthusiasts",
      type: "public-group",
      participants: [],
      isPrivate: false,
    },
    {
      id: "public-group-3",
      name: "Art & Design",
      type: "public-group",
      participants: [],
      isPrivate: false,
    },
    {
      id: "private-group-2",
      name: "Family Chat",
      type: "private-group",
      participants: ["0", "1", "4", "5"],
      isPrivate: true,
    },
  ],

  posts: [
    ...posts,
    // Add notification posts
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
  ],
  
  subjects: [
    {
      id: "subject-1",
      name: "Hiking",
      description: "The activity of going for long walks in the countryside for pleasure.",
      createdAt: Date.now() - 86400000,
    },
    {
      id: "subject-2",
      name: "The Bible",
      description: "The sacred scriptures of Christianity comprising the Old and New Testaments.",
      createdAt: Date.now() - 172800000,
    },
    {
      id: "subject-3",
      name: "Pina Coladas and getting caught in the rain",
      description: "A reference to the song 'Escape (The Piña Colada Song)' by Rupert Holmes.",
      createdAt: Date.now() - 259200000,
    },
    {
      id: "subject-4",
      name: "Artificial Intelligence",
      description: "The theory and development of computer systems able to perform tasks normally requiring human intelligence.",
      createdAt: Date.now() - 345600000,
    },
    {
      id: "subject-5",
      name: "Minimalist Design",
      description: "A design style that uses pared-down design elements.",
      createdAt: Date.now() - 432000000,
    },
    {
      id: "subject-6",
      name: "Coffee Culture",
      description: "The social atmosphere that depends heavily upon coffee, particularly as a social lubricant.",
      createdAt: Date.now() - 518400000,
    },
    {
      id: "subject-7",
      name: "React Development",
      description: "Building user interfaces using the React JavaScript library.",
      createdAt: Date.now() - 604800000,
    },
    {
      id: "subject-8",
      name: "Travel Photography",
      description: "The art of capturing images while traveling to different locations.",
      createdAt: Date.now() - 691200000,
    },
    {
      id: "subject-9",
      name: "Yoga and Meditation",
      description: "Practices for physical, mental, and spiritual well-being.",
      createdAt: Date.now() - 777600000,
    },
    {
      id: "subject-10",
      name: "Sustainable Living",
      description: "A lifestyle that attempts to reduce an individual's or society's use of the Earth's natural resources.",
      createdAt: Date.now() - 864000000,
    },
  ],
};
