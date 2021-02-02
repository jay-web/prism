import React from "react";
import seedColors from "../../seedColors";
import PaletteBox from "../PalleteBox/PaletteBox";
import {Paper } from "@material-ui/core";
import "./home.css";

class Home extends React.Component {
    renderPalettes = () => {
        return seedColors.map((item) => {
            return (<div  key={item.id} >
             <PaletteBox {...item}  />
            </div>
            )
        })
    }
    render(){
        return (
            
            <div className="homePage" >
                <div className="sidebars"></div>
                <Paper elevation={0}>
                <div className="innerBox">
                     {this.renderPalettes()}
                </div>
                </Paper>
                <div className="sidebars"></div>
            </div>
    
        )
    }
}

export default Home;