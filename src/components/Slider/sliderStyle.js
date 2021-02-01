import createStyles, { withStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";

export const PrismSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
      margin: "0px 1rem 0px 1rem"
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);