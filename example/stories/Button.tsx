// import { createRoot } from "react-dom/client";
import { Button } from "../components/Button.js";

export default () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h3>Default Buttons</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button size="small">Small Button!</Button>
          <Button size="medium">Medium Button!!</Button>
          <Button size="large">Large Button!!!</Button>
        </div>
      </div>
      <div>
        <h3>Primary Buttons</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button primary size="small">
            Primary Small
          </Button>
          <Button primary size="medium">
            Primary Medium
          </Button>
          <Button primary size="large">
            Primary Large
          </Button>
        </div>
      </div>
    </div>
  );
};
