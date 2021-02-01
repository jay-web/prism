import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

class PrismSnackBar extends React.Component {

  render() {
      const {handleClose, message, background, copied} = this.props;
    return (
      <Snackbar open={copied} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
        >
          {`${message} ${background}`}
        </Alert>
      </Snackbar>
    );
  }
}


export default PrismSnackBar;