import React from "react";
// import { PrismSlider} from "./sliderStyle";
// import Slider from "@material-ui/core/Slider";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./sliderStyle.css";


class SliderBox extends React.Component {
    constructor(props){
        super(props);
        this.valuetext = this.valuetext.bind(this);
    }

    valuetext(value) {
       this.props.changeLevel(value.target.ariaValueNow)
       
      }


  render() {
    console.log(this.props.level)
    return (
      <span style={{ display: "flex", width: "320px", alignItems: "center"}}>
        <span style={{marginRight: "10px"}}>Level</span>
        <Slider
        //   defaultValue={this.props.level || 500}
          // track={false}
          defaultValue={this.props.level}
          onAfterChange={this.props.changeLevel}
          step={100}
          // marks={false}
          min={100}
          max={900}
          
        />
        <span style={{marginLeft: "10px"}}>{this.props.level}</span>
      </span>
    );
  }
}

export default SliderBox;
