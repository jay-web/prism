import React from "react";
import { Grid, withStyles, Button } from "@material-ui/core";
import useStyles from "./colorBox.style";
import { Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import CopyButton from "../CopyButton/CopyButton";
import chroma from "chroma-js";

// import Snackbars from "./Snackbar";

class InnerContent extends React.Component {
 

  render() {
    const { name, classes, paletteId, id, background } = this.props;
    const isDarkColor = chroma(background).luminance() <= 0.8;
    // const isLightColor = chroma(background).luminance() >= 0.8
    const textColor = isDarkColor ? "white" : "black";
    
    return (
      <div >
        <Grid container alignItems="center" justify="space-evenly" className={classes.buttonBox}>
          <Grid item className={classes.copyButton}>
            <CopyButton {...this.props} />
          </Grid>
          <Grid item container justify="space-between" alignItems="flex-end" className={classes.copyContainer}>
            <Grid 
                className={classes.boxContent}
                style={ {color:`${textColor}`}}

                >{name}</Grid>
            <Grid item >
              <Link to={`/palette/${paletteId}/${id}`} className={classes.seeMore} style={ {color:`${textColor}`}} onClick={e => e.stopPropagation()} >
              More
              </Link>
              </Grid>
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
