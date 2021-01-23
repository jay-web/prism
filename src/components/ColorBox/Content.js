import React from "react";
import InnerContent from "./InnerContent";
import CopyToClipBoard from "react-copy-to-clipboard";
import { Grid, withStyles } from "@material-ui/core";
import useStyles from "./colorBox.style";

class Content extends React.Component {
  render() {
    const { background, onCopy, name, copied, classes } = this.props;
    const show = copied && classes.show;
    return (
      <CopyToClipBoard text={background} onCopy={onCopy}>
        <Grid
          item
          container
          xs={12}
          sm={3}
          style={{ background }}
          className={classes.root}
          direction="column"
        >
          <Grid
            item
            style={{ background }}
            className={`${classes.overlay} ${show}`}
          ></Grid>
          <InnerContent name={name} />
        </Grid>
      </CopyToClipBoard>
    );
  }
}

export default withStyles(useStyles)(Content);
