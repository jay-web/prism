import React from "react";
import {SortableContainer} from 'react-sortable-hoc';
import NewColor from "../NewColor/NewColor";
import {withStyles } from "@material-ui/core";

import styles from "./draggableListStyle";

const DraggableList = ({ colorsList, deleteColor, classes}) => {
    return (
        <div className={classes.root} >
            {colorsList.map((item, idx) => {
            return <NewColor  
                        color={item} 
                        key={idx} 
                        index={idx} 
                        sortIndex={idx}
                        deleteColor={() => deleteColor(item.name)} />
        })}
        </div>
    )
}

export default SortableContainer(withStyles(styles)(DraggableList));