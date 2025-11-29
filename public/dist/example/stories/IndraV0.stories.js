import {
  LandingPage
} from "../../chunk-AUTHH52U.js";
import {
  ChatWall,
  Provider_default,
  selectBlockedUsers,
  selectChatRooms,
  selectCurrentUser,
  selectFriends,
  selectLikabilityScores,
  selectPosts,
  selectRelationships,
  selectSubjects,
  selectUserRatings,
  selectUsers,
  useSelector
} from "../../chunk-MVHHP2JG.js";
import {
  BackendContext,
  Button_default,
  Card_default,
  Col_default,
  Container_default,
  Form_default,
  Nav_default,
  Row_default,
  Tab_default,
  backend,
  store
} from "../../chunk-RLF7CMYA.js";
import "../../chunk-65LQHSH5.js";
import {
  __toESM,
  require_jsx_runtime,
  require_react
} from "../../chunk-2GIMI7UT.js";

// example/stories/IndraV0.stories.js
var import_react6 = __toESM(require_react(), 1);

// example/components/IndraV0.tsx
var import_react5 = __toESM(require_react(), 1);

// example/components/IndraV0/Sidebar.js
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function Sidebar({ activeTab, setActiveTab }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Nav_default, { variant: "pills", className: "flex-column", style: { padding: "20px 0" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "popular",
        active: activeTab === "popular",
        onClick: () => {
          console.log("Popular tab clicked directly");
          setActiveTab("popular");
        },
        style: {
          color: "#FFD700",
          borderRadius: 0,
          backgroundColor: activeTab === "popular" ? "#611f69" : "transparent",
          fontWeight: "bold",
          fontSize: "16px"
          // borderBottom: "2px solid #FFD700",
          // padding: "15px 20px"
        },
        children: "Indra"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "feed",
        active: activeTab === "feed",
        onClick: () => {
          console.log("Feed tab clicked directly");
          setActiveTab("feed");
        },
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "feed" ? "#611f69" : "transparent"
        },
        children: "\u{1F4F0} Feed"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "recommendations",
        active: activeTab === "recommendations",
        onClick: () => setActiveTab("recommendations"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "recommendations" ? "#611f69" : "transparent"
        },
        children: "\u{1F4A1} Recommendations"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { style: {
      margin: "10px 20px",
      borderColor: "#611f69",
      opacity: 0.5
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "friends",
        active: activeTab === "friends",
        onClick: () => setActiveTab("friends"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "friends" ? "#611f69" : "transparent"
        },
        children: "\u{1F465} Friends"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "following",
        active: activeTab === "following",
        onClick: () => setActiveTab("following"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "following" ? "#611f69" : "transparent"
        },
        children: "\u{1F440} Following"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "followers",
        active: activeTab === "followers",
        onClick: () => setActiveTab("followers"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "followers" ? "#611f69" : "transparent"
        },
        children: "\u{1F465} Followers"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "neighbors",
        active: activeTab === "neighbors",
        onClick: () => setActiveTab("neighbors"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "neighbors" ? "#611f69" : "transparent"
        },
        children: "\u{1F3E0} Neighbors"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "blocked",
        active: activeTab === "blocked",
        onClick: () => setActiveTab("blocked"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "blocked" ? "#611f69" : "transparent"
        },
        children: "\u{1F6AB} Blocked"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { style: {
      margin: "10px 20px",
      borderColor: "#611f69",
      opacity: 0.5
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "about",
        active: activeTab === "about",
        onClick: () => setActiveTab("about"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: activeTab === "about" ? "#611f69" : "transparent"
        },
        children: "\u2139\uFE0F About"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Nav_default.Link,
      {
        eventKey: "login",
        onClick: () => alert("Login/Logout functionality would go here"),
        style: {
          color: "white",
          borderRadius: 0,
          backgroundColor: "transparent",
          cursor: "pointer"
        },
        children: "\u{1F510} Login/Logout"
      }
    ) })
  ] });
}

// example/components/IndraV0/HorizontalNav.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function HorizontalNav({ activeTab, setActiveTab, onMyProfileClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: {
    backgroundColor: "#4A154B",
    padding: "10px 20px",
    borderBottom: "1px solid #611f69"
  }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: {
    display: "flex",
    gap: "15px",
    overflowX: "auto"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        style: {
          background: activeTab === "profile" ? "#611f69" : "transparent",
          border: "none",
          color: "white",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontSize: "14px",
          transition: "background-color 0.2s ease"
        },
        onClick: () => {
          setActiveTab("profile");
          if (onMyProfileClick) {
            onMyProfileClick();
          }
        },
        onMouseEnter: (e) => {
          if (activeTab !== "profile") {
            e.target.style.backgroundColor = "#611f69";
          }
        },
        onMouseLeave: (e) => {
          if (activeTab !== "profile") {
            e.target.style.backgroundColor = "transparent";
          }
        },
        children: "\u{1F464} My Profile"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        style: {
          background: activeTab === "search" ? "#611f69" : "transparent",
          border: "none",
          color: "white",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontSize: "14px",
          transition: "background-color 0.2s ease"
        },
        onClick: () => {
          console.log("Search tab clicked directly");
          setActiveTab("search");
        },
        onMouseEnter: (e) => {
          if (activeTab !== "search") {
            e.target.style.backgroundColor = "#611f69";
          }
        },
        onMouseLeave: (e) => {
          if (activeTab !== "search") {
            e.target.style.backgroundColor = "transparent";
          }
        },
        children: "\u{1F50D} Search"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        style: {
          background: activeTab === "notifications" ? "#611f69" : "transparent",
          border: "none",
          color: "white",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontSize: "14px",
          transition: "background-color 0.2s ease"
        },
        onClick: () => setActiveTab("notifications"),
        onMouseEnter: (e) => {
          if (activeTab !== "notifications") {
            e.target.style.backgroundColor = "#611f69";
          }
        },
        onMouseLeave: (e) => {
          if (activeTab !== "notifications") {
            e.target.style.backgroundColor = "transparent";
          }
        },
        children: "\u{1F514} Notifications"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        style: {
          background: activeTab === "settings" ? "#611f69" : "transparent",
          border: "none",
          color: "white",
          padding: "8px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontSize: "14px",
          transition: "background-color 0.2s ease"
        },
        onClick: () => setActiveTab("settings"),
        onMouseEnter: (e) => {
          if (activeTab !== "settings") {
            e.target.style.backgroundColor = "#611f69";
          }
        },
        onMouseLeave: (e) => {
          if (activeTab !== "settings") {
            e.target.style.backgroundColor = "transparent";
          }
        },
        children: "\u2699\uFE0F Settings"
      }
    )
  ] }) });
}

// example/components/IndraV0/RightSidebar.tsx
var import_react3 = __toESM(require_react(), 1);

// example/components/IndraV0/DBContext.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var DBContext = (0, import_react2.createContext)(void 0);
var useDB = () => {
  const context = (0, import_react2.useContext)(DBContext);
  if (!context) {
    throw new Error("useDB must be used within a DBProvider");
  }
  return context;
};
var DBProvider = ({ children }) => {
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
  const contextValue = (0, import_react2.useMemo)(() => ({
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DBContext.Provider, { value: contextValue, children });
};

// example/components/IndraV0/RightSidebar.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var RightSidebar = ({ activeTab, setActiveTab }) => {
  const [isActiveChatsOpen, setIsActiveChatsOpen] = (0, import_react3.useState)(true);
  const [isOnlineFriendsOpen, setIsOnlineFriendsOpen] = (0, import_react3.useState)(true);
  const [isOfflineFriendsOpen, setIsOfflineFriendsOpen] = (0, import_react3.useState)(true);
  const [filteredUsers, setFilteredUsers] = (0, import_react3.useState)([]);
  const backend2 = (0, import_react3.useContext)(BackendContext);
  const { currentUser, chatRooms, users } = useDB();
  (0, import_react3.useEffect)(() => {
    const filterUsers = async () => {
      if (!currentUser) return;
      try {
        const filtered = await Promise.all(
          users.map(async (userItem) => {
            const relationship = await backend2.getRelationship(currentUser.uid, userItem.uid);
            if (relationship === "blocked" || relationship === "blocked-by") {
              return null;
            }
            return userItem;
          })
        );
        setFilteredUsers(filtered.filter(Boolean));
      } catch (error) {
        console.error("Error filtering users:", error);
        setFilteredUsers(users);
      }
    };
    filterUsers();
  }, [backend2, users, currentUser]);
  const filteredChatRooms = chatRooms.filter((room) => {
    if (room.type === "private-1-1") {
      const otherParticipant = room.participants.find((uid) => uid !== (currentUser?.uid || "0"));
      const isBlocked = !filteredUsers.some((user) => user.uid === otherParticipant);
      return !isBlocked;
    }
    return true;
  });
  const handleMouseEnter = (e, roomId) => {
    if (activeTab !== roomId) {
      const target = e.currentTarget;
      target.style.backgroundColor = "#611f69";
      target.style.borderLeftColor = "#ffffff";
    }
  };
  const handleMouseLeave = (e, roomId) => {
    if (activeTab !== roomId) {
      const target = e.currentTarget;
      target.style.backgroundColor = "transparent";
      target.style.borderLeftColor = "transparent";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: {
    backgroundColor: "#4A154B",
    padding: "20px 0",
    borderLeft: "1px solid #611f69",
    overflowY: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginBottom: "30px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "div",
        {
          style: {
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer"
          },
          onClick: () => setIsActiveChatsOpen(!isActiveChatsOpen),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h6", { style: { color: "rgba(255, 255, 255, 0.7)", marginBottom: "15px" }, children: "Active Chats" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { color: "rgba(255, 255, 255, 0.7)" }, children: isActiveChatsOpen ? "\u25BC" : "\u25B6" })
          ]
        }
      ),
      isActiveChatsOpen && filteredChatRooms.slice(0, 3).map((room) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "div",
        {
          style: {
            padding: "10px 20px",
            marginBottom: "5px",
            backgroundColor: activeTab === room.id ? "#611f69" : "transparent",
            cursor: "pointer",
            borderLeft: activeTab === room.id ? "3px solid #ffffff" : "3px solid transparent"
          },
          onClick: () => setActiveTab(room.id),
          onMouseEnter: (e) => handleMouseEnter(e, room.id),
          onMouseLeave: (e) => handleMouseLeave(e, room.id),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { fontWeight: "bold", fontSize: "14px", color: "white" }, children: [
              room.type === "private-1-1" ? "\u{1F4AC}" : room.type === "private-group" ? "\u{1F465}" : "\u{1F310}",
              " ",
              room.name
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { fontSize: "12px", color: "rgba(255, 255, 255, 0.6)" }, children: "Last message: Just now" })
          ]
        },
        room.id
      ))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginBottom: "30px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "div",
        {
          style: {
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer"
          },
          onClick: () => setIsOnlineFriendsOpen(!isOnlineFriendsOpen),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h6", { style: { color: "rgba(255, 255, 255, 0.7)", marginBottom: "15px" }, children: "Online Friends" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { color: "rgba(255, 255, 255, 0.7)" }, children: isOnlineFriendsOpen ? "\u25BC" : "\u25B6" })
          ]
        }
      ),
      isOnlineFriendsOpen && filteredUsers.slice(0, 4).map((user) => {
        const privateChatRoom = chatRooms.find(
          (room) => room.type === "private-1-1" && room.participants.includes(user.uid)
        );
        const roomId = privateChatRoom ? privateChatRoom.id : `private-1-${user.uid}`;
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              marginBottom: "5px",
              backgroundColor: activeTab === roomId ? "#611f69" : "transparent",
              cursor: "pointer",
              borderLeft: activeTab === roomId ? "3px solid #ffffff" : "3px solid transparent"
            },
            onClick: () => setActiveTab(roomId),
            onMouseEnter: (e) => handleMouseEnter(e, roomId),
            onMouseLeave: (e) => handleMouseLeave(e, roomId),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#28a745",
                marginRight: "10px"
              } }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { fontSize: "14px", color: "white" }, children: user.name })
            ]
          },
          user.uid
        );
      })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "div",
        {
          style: {
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer"
          },
          onClick: () => setIsOfflineFriendsOpen(!isOfflineFriendsOpen),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h6", { style: { color: "rgba(255, 255, 255, 0.7)", marginBottom: "15px" }, children: "Offline Friends" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { color: "rgba(255, 255, 255, 0.7)" }, children: isOfflineFriendsOpen ? "\u25BC" : "\u25B6" })
          ]
        }
      ),
      isOfflineFriendsOpen && filteredUsers.slice(4, 8).map((user) => {
        const privateChatRoom = chatRooms.find(
          (room) => room.type === "private-1-1" && room.participants.includes(user.uid)
        );
        const roomId = privateChatRoom ? privateChatRoom.id : `private-1-${user.uid}`;
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              marginBottom: "5px",
              backgroundColor: activeTab === roomId ? "#611f69" : "transparent",
              cursor: "pointer",
              borderLeft: activeTab === roomId ? "3px solid #ffffff" : "3px solid transparent"
            },
            onClick: () => setActiveTab(roomId),
            onMouseEnter: (e) => handleMouseEnter(e, roomId),
            onMouseLeave: (e) => handleMouseLeave(e, roomId),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#6c757d",
                marginRight: "10px"
              } }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }, children: user.name })
            ]
          },
          user.uid
        );
      })
    ] })
  ] });
};

// example/components/IndraV0/Settings.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function Settings() {
  const backend2 = (0, import_react4.useContext)(BackendContext);
  const [notifications, setNotifications] = (0, import_react4.useState)(true);
  const [emailUpdates, setEmailUpdates] = (0, import_react4.useState)(false);
  const [theme, setTheme] = (0, import_react4.useState)("light");
  const [language, setLanguage] = (0, import_react4.useState)("english");
  const [privacy, setPrivacy] = (0, import_react4.useState)("public");
  const [legalName, setLegalName] = (0, import_react4.useState)("");
  const [email, setEmail] = (0, import_react4.useState)("");
  const [isLoading, setIsLoading] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await backend2.getCurrentUser();
        setLegalName(currentUser.legalName || "");
        setEmail(currentUser.email || "");
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    fetchCurrentUser();
  }, [backend2]);
  const handleSaveSettings = async () => {
    setIsLoading(true);
    try {
      const currentUser = await backend2.getCurrentUser();
      const updates = {};
      if (legalName.trim()) {
        updates.legalName = legalName.trim();
      }
      if (email.trim()) {
        updates.email = email.trim();
      }
      if (Object.keys(updates).length > 0) {
        await backend2.updateUser(currentUser.uid, updates);
      }
      alert("Settings saved successfully!");
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("Error saving settings. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { padding: "20px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { children: "Settings" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { children: "Notification Preferences" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Form_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Form_default.Check,
          {
            type: "switch",
            id: "notifications-switch",
            label: "Enable push notifications",
            checked: notifications,
            onChange: (e) => setNotifications(e.target.checked)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Form_default.Check,
          {
            type: "switch",
            id: "email-updates-switch",
            label: "Email updates",
            checked: emailUpdates,
            onChange: (e) => setEmailUpdates(e.target.checked)
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { children: "Appearance" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Form_default.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Form_default.Label, { children: "Theme" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          Form_default.Select,
          {
            value: theme,
            onChange: (e) => setTheme(e.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "light", children: "Light" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "dark", children: "Dark" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "auto", children: "Auto" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { children: "Language & Region" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Form_default.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Form_default.Label, { children: "Language" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          Form_default.Select,
          {
            value: language,
            onChange: (e) => setLanguage(e.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "english", children: "English" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "spanish", children: "Spanish" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "french", children: "French" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "german", children: "German" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "chinese", children: "Chinese" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { children: "Privacy" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Form_default.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Form_default.Label, { children: "Default Post Privacy" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          Form_default.Select,
          {
            value: privacy,
            onChange: (e) => setPrivacy(e.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "public", children: "Public" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "friends", children: "Friends Only" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "private", children: "Private" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { children: "Profile Information" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Card_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Form_default.Group, { style: { marginBottom: "15px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Form_default.Label, { children: "Legal Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            Form_default.Control,
            {
              type: "text",
              value: legalName,
              onChange: (e) => setLegalName(e.target.value),
              placeholder: "Enter your legal name"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Form_default.Text, { className: "text-muted", children: "Your legal name for verification purposes." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Form_default.Group, { style: { marginBottom: "15px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Form_default.Label, { children: "Email Address" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            Form_default.Control,
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "Enter your email address"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Form_default.Text, { className: "text-muted", children: "We'll never share your email with anyone else." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Card_default, { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", { children: "Account" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Col_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button_default, { variant: "outline-primary", style: { marginRight: "10px" }, children: "Change Password" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button_default, { variant: "outline-secondary", style: { marginRight: "10px" }, children: "Export Data" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button_default, { variant: "outline-danger", children: "Delete Account" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { textAlign: "center", marginTop: "30px" }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Button_default,
      {
        variant: "primary",
        onClick: handleSaveSettings,
        size: "lg",
        disabled: isLoading,
        children: isLoading ? "Saving..." : "Save Settings"
      }
    ) })
  ] });
}

// example/components/IndraV0/MainContent.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var MainContent = ({
  activeTab,
  profileUser,
  focusedSubject,
  handleUserClick
}) => {
  const { currentUser, chatRooms } = useDB();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { padding: "20px", minHeight: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Tab_default.Content, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "about", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LandingPage, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "profile", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      ChatWall,
      {
        showInputForm: true,
        context: "profile",
        scrollDirection: "down",
        profileUser: profileUser || currentUser,
        onUserClick: handleUserClick
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "subject", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      ChatWall,
      {
        showInputForm: true,
        context: "subject",
        scrollDirection: "down",
        onUserClick: handleUserClick,
        focusedSubject
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "feed", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChatWall, { showInputForm: true, context: "feed", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "recommendations", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChatWall, { showInputForm: false, context: "recommendations", scrollDirection: "down", onUserClick: handleUserClick }) }),
    chatRooms.map((room) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === room.id, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChatWall, { showInputForm: true, context: "chat", scrollDirection: "down", room: room.id, onUserClick: handleUserClick }) }, room.id)),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "popular", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChatWall, { showInputForm: false, context: "popular", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "search", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChatWall, { showInputForm: false, context: "search", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "friends", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChatWall, { showInputForm: false, context: "friends", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "notifications", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChatWall, { showInputForm: false, context: "notifications", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "blocked", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChatWall, { showInputForm: false, context: "blocked", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "following", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChatWall, { showInputForm: false, context: "following", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "followers", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ChatWall, { showInputForm: false, context: "followers", scrollDirection: "down", onUserClick: handleUserClick }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "neighbors", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { textAlign: "center", padding: "50px 20px", color: "#666" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: "Neighbors" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "This feature is coming soon!" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Find users near your location" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tab_default.Pane, { active: activeTab === "settings", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Settings, {}) })
  ] }) });
};

// example/components/IndraV0/style.ts
var BaseColor = "#4A154B";

// example/components/IndraV0.tsx
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function IndraV0Content() {
  const [activeTab, setActiveTab] = (0, import_react5.useState)("profile");
  const [profileUser, setProfileUser] = (0, import_react5.useState)(null);
  const backend2 = (0, import_react5.useContext)(BackendContext);
  const { currentUser, chatRooms } = useDB();
  const scrollTimeoutRef = (0, import_react5.useRef)(null);
  const [focusedSubject, setFocusedSubject] = (0, import_react5.useState)(null);
  const handleUserClick = async (item) => {
    console.log("handleUserClick called with:", item);
    console.log("Current focusedSubject before update:", focusedSubject);
    console.log("Current activeTab before update:", activeTab);
    if (item.type === "subject") {
      console.log("Processing subject click");
      if (item.subject) {
        console.log("Using provided subject data:", item.subject);
        setFocusedSubject(item.subject);
        setActiveTab("subject");
        console.log("Set focusedSubject to:", item.subject, "and activeTab to: subject");
      } else {
        try {
          console.log("Fetching subject data for uid:", item.uid);
          const subject = await backend2.getSubject(item.uid);
          console.log("Fetched subject:", subject);
          setFocusedSubject(subject);
          setActiveTab("subject");
          console.log("Set focusedSubject to:", subject, "and activeTab to: subject");
        } catch (error) {
          console.error("Error fetching subject:", error);
          const fallbackSubject = { id: item.uid, name: item.name };
          setFocusedSubject(fallbackSubject);
          setActiveTab("subject");
          console.log("Set focusedSubject to fallback:", fallbackSubject, "and activeTab to: subject");
        }
      }
    } else {
      console.log("Processing user profile click");
      setProfileUser(item);
      setActiveTab("profile");
      console.log("Set profileUser to:", item, "and activeTab to: profile");
    }
  };
  const handleMyProfileClick = () => {
    setProfileUser(null);
    setActiveTab("profile");
  };
  (0, import_react5.useEffect)(() => {
    const timer = setTimeout(() => {
      const scrollingElement = document.getElementById("scrolling-main-content-container");
      if (scrollingElement) {
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Container_default,
    {
      fluid: true,
      style: {
        height: "100vh",
        padding: 0,
        display: "flex",
        flexDirection: "column"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Row_default, { style: { flex: 1, margin: 0, overflow: "hidden" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Col_default,
          {
            xs: 2,
            style: {
              backgroundColor: BaseColor,
              padding: 0,
              display: "flex",
              flexDirection: "column"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Sidebar, { activeTab, setActiveTab })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          Col_default,
          {
            xs: 7,
            style: {
              padding: 0,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              height: "100%"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                HorizontalNav,
                {
                  activeTab,
                  setActiveTab,
                  onMyProfileClick: handleMyProfileClick
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { id: "scrolling-main-content-container", style: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                MainContent,
                {
                  activeTab,
                  profileUser,
                  focusedSubject,
                  handleUserClick
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Col_default,
          {
            xs: 3,
            style: { padding: 0, display: "flex", flexDirection: "column" },
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              RightSidebar,
              {
                activeTab,
                setActiveTab
              }
            )
          }
        )
      ] })
    }
  );
}
function IndraV0() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Provider_default, { store, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DBProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IndraV0Content, {}) }) });
}

// example/stories/IndraV0.stories.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function IndraV0Story() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(BackendContext.Provider, { value: backend, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(IndraV0, {}) }) });
}
export {
  IndraV0Story as default
};
//# sourceMappingURL=IndraV0.stories.js.map
