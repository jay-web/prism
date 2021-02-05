import React from "react";
import seedColors from "../../seedColors";
import { generatePallette } from "../../colorGenerator";
import { withRouter, Link } from "react-router-dom";
import Shades from "../Shades/Shades";
import "./singleColorShades.css";
import { Button } from "@material-ui/core";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class SingleColorShades extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colorShades: [], level: 500, format: "hex" };
  }
  changeLevel = (level) => {
    this.setState({ level: level });
    console.log(level);
  };
  handleFormat = (e) => {
    this.setState({ format: e.target.value });
  };

  findPalette = (paletteName) => {
    const { palettes } = this.props;
    return palettes.find((item) => {
      return item.id === paletteName; // id is equal to palette name in db
    });
  };

  getShaded = () => {
    const shades = [];
    const { paletteId, colorId } = this.props.match.params;
    const palettes = generatePallette(this.findPalette(paletteId));
    for (let value in palettes.colors) {
      for (let color of palettes.colors[value]) {
        if (color.id === colorId) {
          shades.push(color);
        }
      }
    }
    this.setState({ colorShades: shades });
  };

  componentDidMount() {
    this.getShaded();
  }
  render() {
    const { colorShades, level, format } = this.state;
    const { paletteId } = this.props.match.params;

    return (
      <>
        <div className="shadesPage">
          <Header
            changeLevel={this.changeLevel}
            level={level}
            format={format}
            handleFormat={this.handleFormat}
            showSlider={false}
            //  paletteName={paletteId}
          />
          <div className="shadesBox">
            {colorShades.slice(1).map((color, idx) => {
              return <Shades shades={color} key={idx} format={format} />;
            })}
            <div className="goBack">
              <Link to={`/palette/${paletteId}`} className="goBackLink">
                <Button
                  variant="outlined"
                  color="default"
                  startIcon={<ArrowBackIcon />}
                >
                  Go Back to
                </Button>
              </Link>
              <span>{paletteId}</span>
            </div>
          </div>
          <Footer name={paletteId}/>
        </div>
      </>
    );
  }
}

export default withRouter(SingleColorShades);
