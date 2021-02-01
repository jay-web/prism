import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

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
      <div style={{width: "300px"}}>
        <Slider
        //   defaultValue={this.props.level || 500}
        defaultValue={this.props.level}
          onChangeCommitted={this.valuetext}
          aria-labelledby="discrete-slider-small-steps"
          step={100}
          marks={false}
          min={100}
          max={900}
          valueLabelDisplay="auto"
        />
      </div>
    );
  }
}

export default SliderBox;
