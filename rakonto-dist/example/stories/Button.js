import {
  require_jsx_runtime
} from "../../chunk-AJLEGHDM.js";
import {
  __toESM
} from "../../chunk-4LMFSMNI.js";

// example/components/Button.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function Button({ primary, size, children, ...props }) {
  const baseStyle = {
    fontFamily: "Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
    fontWeight: 700,
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1
  };
  const mode = primary ? {
    color: "white",
    backgroundColor: "#1ea7fd"
  } : {
    color: "#333",
    backgroundColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"
  };
  const sizes = {
    small: {
      fontSize: "12px",
      padding: "10px 16px"
    },
    medium: {
      fontSize: "14px",
      padding: "11px 20px"
    },
    large: {
      fontSize: "16px",
      padding: "12px 24px"
    }
  };
  const sizeStyle = sizes[size] || sizes.medium;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      style: {
        ...baseStyle,
        ...mode,
        ...sizeStyle
      },
      ...props,
      children
    }
  );
}

// example/stories/Button.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var Button_default = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: "Default Buttons" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", gap: "10px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { size: "small", children: "Small Button!" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { size: "medium", children: "Medium Button!!" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { size: "large", children: "Large Button!!!" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: "Primary Buttons" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", gap: "10px", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { primary: true, size: "small", children: "Primary Small" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { primary: true, size: "medium", children: "Primary Medium" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { primary: true, size: "large", children: "Primary Large" })
      ] })
    ] })
  ] });
};
export {
  Button_default as default
};
