import React from "react";
import Palettes from "./components/Palletes/Palettes";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import "./App.css";
import { generatePallette} from "./colorGenerator";
import Home from "./components/Home/Home";
import SingleColorShades from "./components/SingleColorShades/SingleColorShades";

const findPalette = (paletteName)  => {
  return seedColors.find((item) => {
    return item.id === paletteName;     // id is equal to palette name in db
  })
}

function App() {

  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      
      <Route 
        exact 
        path="/palette/:paletteName" 
        render={(routeProps) => (
          <Palettes 
          paletteId={routeProps.match.params.paletteName}
          palettes={generatePallette(findPalette(routeProps.match.params.paletteName))} />
        ) }
        />
        <Route exact path="/palette/:paletteId/:colorId" component={SingleColorShades} />
        
    </Switch>
  );
}

export default App;
{/* <div className="App">
     <Palettes palettes={generatePallette(seedColors[1])} />
    </div> */}