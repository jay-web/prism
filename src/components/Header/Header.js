import React from "react";
import { Link } from "react-router-dom";
import SliderBox from "../Slider/Slider";
import FormatSelector from "../FormatSelector/Select";
import "./header.css";

class Header extends React.Component {
  render() {
    const {
      changeLevel,
      level,
      format,
      handleFormat,
      paletteName,
      showSlider
    } = this.props;
    return (
      <div className="header-root">
        <Link to="/prism" className="title" ><span >Prism</span></Link>
        { showSlider && <SliderBox changeLevel={changeLevel} level={level} /> }
        <FormatSelector format={format} handleChange={handleFormat} />
      </div>
    );
  }
}

export default Header;
