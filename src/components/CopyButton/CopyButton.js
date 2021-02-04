import React from "react";
import { Button } from "@material-ui/core";
import PrismSnackBar from "../Snackbar/Snackbar";
import chroma from "chroma-js";


class CopyButton extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
      }

  render() {
    const { handleClick, handleClose, classes, copied, background } = this.props;
    const isDarkColor = chroma(background).luminance() <= 0.8;
    const textColor = isDarkColor ? "white" : "black";
    return (
      <div ref={this.myRef} >
        <Button
          variant="outlined"
          onClick={handleClick}
          className={classes.button}
          style={{color: `${textColor}`, borderColor: `${textColor}`}}
        >
          Copy
        </Button>
        <PrismSnackBar background={background} copied={copied} handleClose={handleClose} message="Copied on clipboard -" />
       
      </div>
    );
  }
}

export default CopyButton;
