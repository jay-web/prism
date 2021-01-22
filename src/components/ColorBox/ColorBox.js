import React from "react";
import { Grid, withStyles, Button } from "@material-ui/core";
import useStyles from "./colorBox.style";

class ColorBox extends React.Component {
  render() {
    const { background, name, classes } = this.props;

    return (
      <Grid item
        container
        xs={12}
        sm={3}
        style={{ background }}
        className={classes.root}
        direction="column"
      >
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          className={classes.buttonBox}
        >
          <Button className={classes.button}> Copy</Button>
        </Grid>

        <Grid
          item
          container
          justify="space-between"
          alignItems="flex-end"
          className={classes.copyContainer}
        >
          <Grid className={classes.boxContent}>{name}</Grid>
          <Grid item className={classes.seeMore}>
            More
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(ColorBox);
