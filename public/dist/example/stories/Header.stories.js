import {
  __toESM,
  require_jsx_runtime,
  require_react
} from "../../chunk-2GIMI7UT.js";

// example/stories/Header.stories.js
var import_react2 = __toESM(require_react(), 1);

// example/components/Header.js
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function Header({ user, onLogin, onLogout, onCreateAccount }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 20px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    fontFamily: "Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { fill: "none", fillRule: "evenodd", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
            fill: "#FFF"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
            fill: "#555AB9"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
            fill: "#91BAF8"
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { style: {
        display: "inline-block",
        verticalAlign: "top",
        margin: "6px 0 6px 10px",
        fontSize: "20px",
        fontWeight: 900
      }, children: "Acme" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { fontSize: "14px" }, children: [
        "Welcome, ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: user.name }),
        "!"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          style: {
            fontSize: "12px",
            fontWeight: 600,
            padding: "10px 16px",
            border: 0,
            borderRadius: "3em",
            backgroundColor: "#1ea7fd",
            color: "white",
            cursor: "pointer"
          },
          onClick: onLogout,
          children: "Log out"
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          style: {
            fontSize: "12px",
            fontWeight: 600,
            padding: "10px 16px",
            border: 0,
            borderRadius: "3em",
            backgroundColor: "transparent",
            color: "#333",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"
          },
          onClick: onLogin,
          children: "Log in"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          style: {
            fontSize: "12px",
            fontWeight: 600,
            padding: "10px 16px",
            border: 0,
            borderRadius: "3em",
            backgroundColor: "#1ea7fd",
            color: "white",
            cursor: "pointer"
          },
          onClick: onCreateAccount,
          children: "Sign up"
        }
      )
    ] }) })
  ] }) });
}

// example/stories/Header.stories.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function HeaderStory() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: "Header (Logged In)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        Header,
        {
          user: { name: "John Doe" },
          onLogin: () => console.log("Login clicked"),
          onLogout: () => console.log("Logout clicked"),
          onCreateAccount: () => console.log("Create account clicked")
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: "Header (Logged Out)" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        Header,
        {
          user: null,
          onLogin: () => console.log("Login clicked"),
          onLogout: () => console.log("Logout clicked"),
          onCreateAccount: () => console.log("Create account clicked")
        }
      )
    ] })
  ] });
}
export {
  HeaderStory as default
};
//# sourceMappingURL=Header.stories.js.map
