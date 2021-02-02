import React from "react";
import "./shades.css";

class Shades extends React.Component {
  render() {
    const { shades } = this.props;
    return (
      <div className="shadeBox">
        <div style={{ backgroundColor: `${shades.hex}` }} className="shade">
          {" "}
          {shades.name}
        </div>
      </div>
    );
  }
}

export default Shades;
