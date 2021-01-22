import React from "react";
import Palettes from "./components/Palletes/Palettes";

import seedColors from "./seedColors";
import "./App.css";

function App() {
  return (
    <div className="App">
     <Palettes {...seedColors[7]} />
    </div>
  );
}

export default App;
