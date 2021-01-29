import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { Button } from "@material-ui/core";

class CopyButton extends React.Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
      }

  render() {
    const { handleClick, handleClose, classes, open } = this.props;
    return (
      <div ref={this.myRef} >
        <Button
          variant="outlined"
          onClick={handleClick}
          className={classes.button}
        >
          Copy
        </Button>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="success"
          >
            Copied on clipboard
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default CopyButton;
