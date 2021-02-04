

export default {
    root:{
        display: "grid",
        gridTemplateColumn: "1fr 1fr 1fr",
        height: "25vh",
        color: "white",
        alignItem: "center",
        fontFamily: 'New Rocker, cursive',

        "& div":{
            gridRowStart: "2",
            gridColumnStart:"1",
            gridColumnEnd: "2",
            fontSize: "1.2rem"
        },

        
    },
    innerBox:{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        // alignItem: "center"
        
    },
    deleteButton:{
        marginTop: "1rem", 
        // marginLeft: "0.7rem",
        cursor: "pointer",
        transition: "all .5s ease-in-out",
        "&:hover":{
            transform: "scaleY(1.2)"
        }
    }
    
}

// @media only screen and (max-width: 750px){
//     .shadesBox{
//         grid-template-columns: repeat(2, 1fr);
//     }

// }

// @media only screen and (min-width: 750px){
//     .shadesBox{
//         grid-template-columns: repeat(3, 1fr);
//     }

// }
// @media only screen and (min-width: 1000px){
//     .shadesBox{
//         grid-template-columns: repeat(5, 1fr);
//     }

// }