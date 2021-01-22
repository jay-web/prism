import React from "react";
import ColorBox from "../ColorBox/ColorBox";
import { Grid, withStyles } from "@material-ui/core";
import useStyles from "./Palettes.styles";

class Palettes extends React.Component {
  render() {
    const { classes } = this.props;
    const colorBoxes = this.props.colors.map((item) => {
      return (
        <ColorBox background={item.color} name={item.name} key={item.name} />
      );
    });
    return (
      <>
        <Grid container className={classes.root}>
          {colorBoxes}
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(Palettes);
