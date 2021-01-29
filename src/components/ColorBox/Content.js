import React from "react";
import InnerContent from "./InnerContent";

import CopyToClipBoard from "react-copy-to-clipboard";
import { Grid, withStyles } from "@material-ui/core";
import useStyles from "./colorBox.style";

class Content extends React.Component {
  
  render() {
    const { background, handleClick, name, copied, handleClose, classes } = this.props;

    return (
      <CopyToClipBoard text={background} onCopy={handleClick} >
        <Grid item container xs={12} sm={4} md={3} direction="column" style={{ background }} className={classes.root} justify="flex-end">
          {/* <Overlay background={background} copied={copied}  /> */}
          <Grid item >
           <InnerContent {...this.props}  />
          </Grid>
          
        </Grid>
      </CopyToClipBoard>
    );
  }
}

export default withStyles(useStyles)(Content);
