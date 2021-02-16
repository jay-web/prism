import React from "react";
import Palettes from "./components/Palletes/Palettes";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import "./App.css";
import { generatePallette } from "./colorGenerator";
import Home from "./components/Home/Home";
import SingleColorShades from "./components/SingleColorShades/SingleColorShades";
import CreateNewPalette from "./components/CreateNewPalette/CreateNewPalette";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AnimatedSwitch } from 'react-router-transition';

class App extends React.Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palettes: savedPalettes || seedColors };
  }

  findPalette = (paletteName) => {
    return this.state.palettes.find((item) => {
      return item.id === paletteName; // id is equal to palette name in db
    });
  };

  saveNewPalette = (newPalette) => {
    console.log(newPalette);
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };

  syncLocalStorage = () => {
    // save palettes to localstorage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  };

  deletePalette = (id) => {
    const palettes = this.state.palettes.filter((item) => item.id !== id);
    this.setState({ palettes: palettes }, this.syncLocalStorage);
    console.log(id);
  };

  render() {
    const { palettes } = this.state;
    console.log("palettes", palettes);
    return (
    
            <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
                
                  <Route
                    exact
                    path="/palette/createnew"
                    render={() => (
                      <div className="">
                        <CreateNewPalette
                          savePalette={this.saveNewPalette}
                          palettes={palettes}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/prism"
                    render={() => (
                      <div className="">
                        <Home
                          palettes={palettes}
                          deletePalette={this.deletePalette}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteName"
                    render={(routeProps) => (
                      <div className="">
                        <Palettes
                          paletteId={routeProps.match.params.paletteName}
                          palettes={generatePallette(
                            this.findPalette(
                              routeProps.match.params.paletteName
                            )
                          )}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={() => (
                      <div className="">
                        <SingleColorShades palettes={palettes} />
                      </div>
                    )}
                  />
               
                </AnimatedSwitch>
            // </TransitionGroup>
          
    );
  }
}

export default App;

