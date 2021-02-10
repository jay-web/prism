import React from "react";

import PaletteBox from "../PalleteBox/PaletteBox";

import Fab from '@material-ui/core/Fab';

import PaletteIcon from '@material-ui/icons/Palette';
import { Link } from "react-router-dom";
import "./home.css";

class Home extends React.Component {
 

  renderPalettes = () => {
  
    return this.props.palettes.map((item) => {
      // console.log(item);
      return (
        <div key={item.id}>
          <PaletteBox {...item} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="homePage">
        <div className="sidebars"></div>
        <div className="outerBox">
        <div className="homeheader">
            <h1>Prism <PaletteIcon /></h1>
            <span className="homeheader-fab">
            <Link to="/palette/createnew" >
            <Fab variant="extended" size="small" color="primary" aria-label="add"   >
              <PaletteIcon className="palicon"/>
              Create Palette
            </Fab>
            </Link>
            </span>
           
          </div>
          <div className="innerBox">
            {this.renderPalettes()}
          </div>
         
          
        </div>
        <div className="sidebars"></div>
      </div>
    );
  }
}

export default Home;
