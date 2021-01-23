import React from "react";
import CopyToClipBoard from "react-copy-to-clipboard";
import { Grid, withStyles, Button } from "@material-ui/core";
import useStyles from "./colorBox.style";
import InnerContent from "./InnerContent";

class ColorBox extends React.Component {
  render() {
    const { background, name, classes } = this.props;

    return (
      <CopyToClipBoard text={background}>
        <Grid
          item
          container
          xs={12}
          sm={3}
          style={{ background }}
          className={classes.root}
          direction="column"
        >
          <InnerContent name={name} />
        </Grid>
      </CopyToClipBoard>
    );
  }
}

export default withStyles(useStyles)(ColorBox);
