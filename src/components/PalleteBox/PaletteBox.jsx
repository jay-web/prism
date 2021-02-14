import React from "react";
import "./paletteBox.css";
import TinyBox from "../TinyBox/Tiny";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

class PaletteBox extends React.Component {
  

  deletePale = (e) => {
    // e.stopPropagation();
    this.props.deletePalette(this.props.id);
  };
  render() {
    const { colors, emoji, id, paletteName} = this.props;

    return (
      <>
        <Paper>
          <div className="paletteBox">
            <Link to={`/palette/${id}`} className="links">
              <div className="colorBox">
                <TinyBox colors={colors} name={id} />
              </div>
            </Link>
            <div className="contentBox">
              <span className="p-title">{paletteName} {emoji}</span>
              
                <DeleteForeverIcon onClick={this.deletePale}/>
              
            </div>
          </div>
        </Paper>
      </>
    );
  }
}

export default PaletteBox;
