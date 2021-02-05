import React from "react";
import PrismDrawer from "../PrismDrawer/PrismDrawer";

class CreateNewPalette extends React.Component {
    render(){
        const { savePalette, palettes } = this.props;
        return (
            <div>
               <PrismDrawer savePalette={savePalette} palettes={palettes} />
            </div>
        )
    }
}

export default CreateNewPalette;