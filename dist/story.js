import { ReactNode } from "react";
import { createRoot } from "react-dom/client";

export default function Story(children: ReactNode) {
    const container = document.getElementById("root");
    if (!container) {
        console.error("Root element not found");
        return;
    }
    const root = createRoot(container);
    root.render(children);
}
