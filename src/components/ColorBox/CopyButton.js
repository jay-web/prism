import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { Button } from "@material-ui/core";
import PrismSnackBar from "../Snackbar/Snackbar";


class CopyButton extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
      }

  render() {
    const { handleClick, handleClose, classes, copied, background } = this.props;
    return (
      <div ref={this.myRef} >
        <Button
          variant="outlined"
          onClick={handleClick}
          className={classes.button}
        >
          Copy
        </Button>
        <PrismSnackBar background={background} copied={copied} handleClose={handleClose} message="Copied on clipboard -" />
       
      </div>
    );
  }
}

export default CopyButton;
