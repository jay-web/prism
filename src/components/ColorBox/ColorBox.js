import React from "react";

import Content from "./Content";

class ColorBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {copied : false};
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
   
    
  }

  handleClick() {
    this.setState({ copied: true });
  }

  handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ copied: false });
  }
  
  render() {
    const { background, name } = this.props;
    const {copied } = this.state;
    
    return <Content 
              background={background} 
              handleClick={this.handleClick} 
              handleClose={this.handleClose}
              name={name} 
              copied={copied}
              ref={this.myRef}
              />
  }
}

export default ColorBox;
