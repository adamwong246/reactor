import React from "react";

import { FakeBackend } from "./FakeBackend.js";

const backend = new FakeBackend();
const BackendContext = React.createContext();

export { backend, BackendContext };
