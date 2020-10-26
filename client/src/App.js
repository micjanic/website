import "./App.css";
import React from "react";

import { Parallax } from "./components/Parallax";
import { SceneContainer } from "./components/SceneContainer";

import { ScreenValuesProvider } from "./components/ScreenValuesProvider";

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <Parallax.ScreenValuesProvider>
        <SceneContainer></SceneContainer>
      </Parallax.ScreenValuesProvider>
    </div>
  );
}

export default App;
