import React from "react";
import ColorBox from "../ColorBox/ColorBox";
import { Grid, withStyles } from "@material-ui/core";
import useStyles from "./Palettes.styles";
import Header from "../Header/Header";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Palettes extends React.Component {
  constructor(props){
    super(props);
    this.state = {level: 500};
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level){
    this.setState({level: level});
    console.log(level)
  }
  render() {
    const { classes } = this.props;
    const { colors } = this.props.palettes;
    const { level } = this.state;

    const colorBoxes = colors[level].map((item) => {
      return (
        <ColorBox background={item.hex} name={item.name} key={item.name} />
      );
    });
    return (
      <>
        <Header changeLevel={this.changeLevel} level={this.state.level} />
        {/* <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} /> */}
        <Grid container className={classes.root}>
          {colorBoxes}
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(Palettes);
