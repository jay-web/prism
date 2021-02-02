import React from "react";
import "./paletteBox.css";
import TinyBox from "../TinyBox/Tiny";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

class PaletteBox extends React.Component {
  render() {
    const { colors, emoji, id, paletteName } = this.props;

    return (
      <>
        <Paper>
          <Link to={`/palette/${id}`} className="links">
            <div className="paletteBox">
              <div className="colorBox">
                <TinyBox colors={colors} name={id} />
              </div>
              <div className="contentBox">
                <span className="p-title">{paletteName}</span>
                <span>{emoji}</span>
              </div>
            </div>
          </Link>
        </Paper>
      </>
    );
  }
}

export default PaletteBox;
