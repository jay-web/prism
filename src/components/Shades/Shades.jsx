import React from "react";
import "./shade.css";
import CopyButton from "../CopyButton/CopyButton";
import useStyles from "./shadesStyle";
import {withStyles } from "@material-ui/core";
import CopyToClipBoard from "react-copy-to-clipboard";
import chroma from "chroma-js";

class Shades extends React.Component {
  constructor(props){
    super(props);
    this.state = {copied: false}
  }

  handleClick = () => {
    this.setState({ copied: true });
  }

  handleClose =(event, reason)  =>{
    if (reason === "clickaway") {
      return;
    }
    this.setState({ copied: false });
  }
  render() {
    const { shades, classes, format,  } = this.props;
    const isDarkColor = chroma(shades[format]).luminance() <= 0.8;
    const textColor = isDarkColor ? "white" : "black";
    console.log(this.props);
    return (
      <CopyToClipBoard text={shades[format]} >
      <div className={classes.root}>
        <div style={{ backgroundColor: `${shades[format]}`, color: `${textColor}` }} className={classes.shade} >
         <span className={classes.contentBox}>
         <CopyButton background={shades[format]} copied={this.state.copied} handleClick={this.handleClick} handleClose={this.handleClose} classes={classes}/>
          <span className={classes.title}>{shades.name}</span>
         </span>
        </div>
      </div>
      </CopyToClipBoard>
    );
  }
}

export default withStyles(useStyles)(Shades);
