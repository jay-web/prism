import React from "react";
import "./box.style.css";
import TinyBox from "../TinyBox/Tiny";
import { Paper } from "@material-ui/core";

class PaletteBox extends React.Component {
    render(){
        const { colors, emoji, id, paletteName } = this.props;
        
        return (
            <>
                <Paper>
                <div className="paletteBox">
                    <div className="colorBox">
                        <TinyBox colors={colors} name={id} />
                    </div>
                    <div className="contentBox">
                        <span>{paletteName}</span>
                        <span>{emoji}</span>
                    </div>
                </div>
                </Paper>
            </>
        )
    }
}


export default PaletteBox;