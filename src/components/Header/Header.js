import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SliderBox from '../Slider/Slider';
import FormatSelector from '../FormatSelector/Select';
import "./header.css";

class Header extends React.Component {
  render() {
    const { changeLevel, level, format, handleFormat } = this.props;
    return (
      <div className="header-root">
         <SliderBox changeLevel={changeLevel} level={level} />
         <FormatSelector format={format} handleChange={handleFormat} />
      </div>
    );
  }
}

export default Header;
