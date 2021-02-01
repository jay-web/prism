import React from "react";
import ColorBox from "../ColorBox/ColorBox";
import { Grid, withStyles } from "@material-ui/core";
import useStyles from "./Palettes.styles";
import Header from "../Header/Header";
import Slider from "rc-slider";
import Footer from "../Footer/Footer";
import "rc-slider/assets/index.css";

class Palettes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level: level });
    console.log(level);
  }
  handleFormat(e) {
    this.setState({ format: e.target.value });
  }
  render() {
    const { classes } = this.props;
    const { colors, id } = this.props.palettes;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map((item) => {
      return (
        <ColorBox background={item[format]} name={item.name} key={item.name} />
      );
    });
    return (
      <Grid container direction="column">
        <Grid item>
          <Header
            changeLevel={this.changeLevel}
            level={this.state.level}
            format={format}
            handleFormat={this.handleFormat}
            paletteName={id}
          />
        </Grid>

        {/* <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} /> */}
        <Grid item container >
          {colorBoxes}
        </Grid>
        <Grid item className={classes.footer}>
          <Footer name={id} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Palettes);
