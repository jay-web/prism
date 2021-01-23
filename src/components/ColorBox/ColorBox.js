import React from "react";

import Content from "./Content";

class ColorBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {copied : false};
    this.handleOverlay = this.handleOverlay.bind(this);
  }

  handleOverlay(){
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({copied: false}), 1500)
    })
  }
  
  render() {
    const { background, name } = this.props;
    const {copied } = this.state;
    
    return <Content 
              background={background} 
              onCopy={this.handleOverlay} 
              name={name} 
              copied={copied}/>
  }
}

export default ColorBox;
