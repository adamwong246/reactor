import { Header } from "../components/Header.js";

export default () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h3>Header (Logged In)</h3>
        <Header
          user={{ name: "John Doe" }}
          onLogin={() => console.log("Login clicked")}
          onLogout={() => console.log("Logout clicked")}
          onCreateAccount={() => console.log("Create account clicked")}
        />
      </div>
      <div>
        <h3>Header (Logged Out)</h3>
        <Header
          user={null}
          onLogin={() => console.log("Login clicked")}
          onLogout={() => console.log("Logout clicked")}
          onCreateAccount={() => console.log("Create account clicked")}
        />
      </div>
    </div>
  );
};
