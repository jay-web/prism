import React from "react";
import { Grid, withStyles, Button } from "@material-ui/core";
import useStyles from "./colorBox.style";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CopyButton from "./SnackBar";

// import Snackbars from "./Snackbar";

class InnerContent extends React.Component {
 

  render() {
    const { name, classes, handleClick, copied, handleClose } = this.props;
    return (
      <div >
        <Grid container alignItems="center" justify="space-evenly" className={classes.buttonBox}>
          <Grid item className={classes.copyButton}>
            <CopyButton handleClick={handleClick}handleClose={handleClose} open={copied} classes={classes}  />
          </Grid>
          <Grid item container justify="space-between" alignItems="flex-end" className={classes.copyContainer}>
            <Grid className={classes.boxContent}>{name}</Grid>
            <Grid item className={classes.seeMore}>More</Grid>
          </Grid>
        </Grid>

       
      </div>
      
    );
  }
}

export default withStyles(useStyles)(InnerContent);

{
  /* <CopyButton handleClick={this.handleClick} handleClose={this.handleClose} open={this.state.open} classes={classes} /> */
}
