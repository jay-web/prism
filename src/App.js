import React from "react";
import Palettes from "./components/Palletes/Palettes";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import "./App.css";
import { generatePallette} from "./colorGenerator";
import Home from "./components/Home/Home";
import SingleColorShades from "./components/SingleColorShades/SingleColorShades";
import CreateNewPalette from "./components/CreateNewPalette/CreateNewPalette";





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {palettes: seedColors}

  }

  findPalette = (paletteName)  => {
    return this.state.palettes.find((item) => {
      return item.id === paletteName;     // id is equal to palette name in db
    })
  }

  saveNewPalette = (newPalette) => {
    console.log(newPalette);
    this.setState({palettes: [...this.state.palettes, newPalette]})
  }

  render(){
    const { palettes } = this.state;
  return (
    <Switch>
      
      <Route exact path="/palette/createnew" render={() => <CreateNewPalette savePalette={this.saveNewPalette} palettes={palettes}/> }  />
      <Route exact path="/" render={() => <Home palettes={palettes} />} />
      <Route 
        exact 
        path="/palette/:paletteName" 
        render={(routeProps) => (
          <Palettes 
          paletteId={routeProps.match.params.paletteName}
          palettes={generatePallette(this.findPalette(routeProps.match.params.paletteName))} />
        ) }
        />
        <Route exact path="/palette/:paletteId/:colorId" render={() => <SingleColorShades palettes={palettes} /> } />
        
    </Switch>
  );
}
}

export default App;
