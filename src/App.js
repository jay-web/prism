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
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {palettes: savedPalettes || seedColors}

  }

  findPalette = (paletteName)  => {
    return this.state.palettes.find((item) => {
      return item.id === paletteName;     // id is equal to palette name in db
    })
  }

  saveNewPalette = (newPalette) => {
    console.log(newPalette);
    this.setState({palettes: [...this.state.palettes, newPalette]}, this.syncLocalStorage)
  }

  syncLocalStorage = () => {
    // save palettes to localstorage
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  deletePalette = (id) => {
    const palettes = this.state.palettes.filter((item) => item.id !== id);
    this.setState({palettes:palettes }, this.syncLocalStorage)
    console.log(id);
  }

  render(){
    const { palettes } = this.state;
  return (
    <Switch>
      
      <Route exact path="/palette/createnew" render={() => <CreateNewPalette savePalette={this.saveNewPalette} palettes={palettes}/> }  />
      <Route exact path="/" render={() => <Home palettes={palettes} deletePalette={this.deletePalette} />} />
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
