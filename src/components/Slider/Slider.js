import React from "react";
import { PrismSlider} from "./sliderStyle";


class SliderBox extends React.Component {
    constructor(props){
        super(props);
        this.valuetext = this.valuetext.bind(this);
    }

    valuetext(value) {
       this.props.changeLevel(value.target.ariaValueNow)
       
      }

  render() {
    return (
      <span style={{ display: "flex", width: "300px", alignItems: "center"}}>
        <span>Level</span>
        <PrismSlider
        //   defaultValue={this.props.level || 500}
          // track={false}
          defaultValue={this.props.level}
          onChangeCommitted={this.valuetext}
          step={100}
          marks={false}
          min={100}
          max={900}
          
        />
        <span>{this.props.level}</span>
      </span>
    );
  }
}

export default SliderBox;
