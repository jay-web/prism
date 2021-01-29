import React from "react";
import Palettes from "./components/Palletes/Palettes";

import seedColors from "./seedColors";
import "./App.css";
import { generatePallette} from "./colorGenerator";

function App() {
  console.log(generatePallette(seedColors[1]));
  return (
    <div className="App">
     <Palettes palettes={generatePallette(seedColors[1])} />
    </div>
  );
}

export default App;
